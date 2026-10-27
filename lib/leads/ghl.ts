import { kindLabel, leadSource, leadTags, type LeadKind } from "./kinds";
import { firstStage, parsePipelineMap, resolvePipeline, type GhlPipeline, type GhlStage } from "./pipelines";

const API_BASE = "https://services.leadconnectorhq.com";
const CACHE_MS = 10 * 60 * 1000;

type CacheEntry = { locationId: string; at: number; pipelines: GhlPipeline[] };
let pipelineCache: CacheEntry | null = null;

export function clearGhlPipelineCache() {
  pipelineCache = null;
}

export function ghlConfigured() {
  return Boolean(process.env.GHL_PRIVATE_TOKEN?.trim() && process.env.GHL_LOCATION_ID?.trim());
}

export function toE164(digits: string) {
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`;
}

type GhlLead = {
  name: string;
  email: string;
  phone?: string;
  resource: string;
  kind: LeadKind;
  note?: string;
  address?: string;
};

/** Upsert the contact and open an opportunity. Contact success is enough to count. */
export async function syncLeadToGhl(lead: GhlLead): Promise<boolean> {
  const locationId = process.env.GHL_LOCATION_ID?.trim();
  if (!process.env.GHL_PRIVATE_TOKEN?.trim() || !locationId) {
    console.error("GoHighLevel is missing GHL_PRIVATE_TOKEN or GHL_LOCATION_ID.");
    return false;
  }

  const [firstName, ...rest] = lead.name.split(/\s+/);
  const lastName = rest.join(" ");
  const source = leadSource(lead.resource);
  const contact = await ghlRequest("/contacts/upsert", {
    method: "POST",
    body: JSON.stringify({
      locationId,
      email: lead.email.toLowerCase(),
      firstName,
      ...(lastName ? { lastName } : {}),
      name: lead.name,
      source,
      tags: leadTags(lead.kind, lead.resource),
      ...(lead.phone ? { phone: toE164(lead.phone) } : {}),
      ...(lead.address ? { address1: lead.address } : {}),
    }),
  });

  if (!contact.ok) {
    console.error(`GoHighLevel contact upsert failed (${contact.status}): ${errorText(contact.json)}`);
    return false;
  }

  const contactId = readContactId(contact.json);
  if (!contactId) {
    console.error("GoHighLevel contact upsert did not return a contact id.");
    return false;
  }

  if (lead.note) {
    const note = await ghlRequest(`/contacts/${encodeURIComponent(contactId)}/notes`, {
      method: "POST",
      body: JSON.stringify({ body: lead.note }),
    });
    if (!note.ok) {
      console.error(`GoHighLevel contact note failed (${note.status}): ${errorText(note.json)}`);
    }
  }

  try {
    const pipelines = await listPipelines(locationId);
    const pipeline = resolvePipeline(pipelines, lead.kind, parsePipelineMap(process.env.GHL_PIPELINE_MAP));
    if (!pipeline) {
      console.error("GoHighLevel returned no pipelines. Contact was saved without an opportunity.");
      return true;
    }
    const stage = firstStage(pipeline.stages);
    const opportunity = await ghlRequest("/opportunities/upsert", {
      method: "POST",
      body: JSON.stringify({
        locationId,
        pipelineId: pipeline.id,
        contactId,
        name: `${lead.name} (${kindLabel(lead.kind)})`,
        status: "open",
        ...(stage ? { pipelineStageId: stage.id } : {}),
      }),
    });
    if (!opportunity.ok) {
      console.error(
        `GoHighLevel opportunity failed (${opportunity.status}) for pipeline "${pipeline.name}": ${errorText(opportunity.json)}`,
      );
      return true;
    }
    console.info(
      `GoHighLevel ${lead.kind} lead saved in pipeline "${pipeline.name}"${stage?.name ? `, stage "${stage.name}"` : ""}.`,
    );
  } catch (error) {
    console.error("GoHighLevel opportunity step failed.", error instanceof Error ? error.message : "unknown error");
  }

  return true;
}

async function listPipelines(locationId: string): Promise<GhlPipeline[]> {
  if (pipelineCache && pipelineCache.locationId === locationId && Date.now() - pipelineCache.at < CACHE_MS) {
    return pipelineCache.pipelines;
  }

  const listed = await ghlRequest(`/opportunities/pipelines?locationId=${encodeURIComponent(locationId)}`);
  if (!listed.ok) {
    console.error(`GoHighLevel pipeline list failed (${listed.status}): ${errorText(listed.json)}`);
    return pipelineCache?.locationId === locationId ? pipelineCache.pipelines : [];
  }

  const pipelines = readPipelines(listed.json);
  pipelineCache = { locationId, at: Date.now(), pipelines };
  return pipelines;
}

type GhlResult = { ok: boolean; status: number; json: unknown };

async function ghlRequest(path: string, init?: RequestInit): Promise<GhlResult> {
  const token = process.env.GHL_PRIVATE_TOKEN?.trim();
  if (!token) return { ok: false, status: 0, json: { message: "Missing token" } };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${API_BASE}${path}`, {
      method: init?.method ?? "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        Accept: "application/json",
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
      },
      body: init?.body,
      signal: controller.signal,
    });
    const text = await response.text();
    let json: unknown = null;
    if (text) {
      try {
        json = JSON.parse(text);
      } catch {
        json = { message: text.slice(0, 300) };
      }
    }
    return { ok: response.ok, status: response.status, json };
  } catch (error) {
    return { ok: false, status: 0, json: { message: error instanceof Error ? error.message : "request failed" } };
  } finally {
    clearTimeout(timer);
  }
}

function readContactId(json: unknown) {
  if (!json || typeof json !== "object") return null;
  const record = json as { id?: unknown; contact?: { id?: unknown } };
  if (typeof record.contact?.id === "string") return record.contact.id;
  if (typeof record.id === "string") return record.id;
  return null;
}

function readPipelines(json: unknown): GhlPipeline[] {
  if (!json || typeof json !== "object" || !("pipelines" in json)) return [];
  const list = (json as { pipelines: unknown }).pipelines;
  if (!Array.isArray(list)) return [];

  const pipelines: GhlPipeline[] = [];
  for (const item of list) {
    if (!item || typeof item !== "object") continue;
    const id = (item as { id?: unknown }).id;
    const name = (item as { name?: unknown }).name;
    if (typeof id !== "string" || typeof name !== "string") continue;
    const stagesRaw = (item as { stages?: unknown }).stages;
    const stages: GhlStage[] = [];
    if (Array.isArray(stagesRaw)) {
      for (const stage of stagesRaw) {
        if (!stage || typeof stage !== "object") continue;
        const stageId = (stage as { id?: unknown }).id;
        if (typeof stageId !== "string") continue;
        const position = (stage as { position?: unknown }).position;
        const stageName = (stage as { name?: unknown }).name;
        stages.push({
          id: stageId,
          name: typeof stageName === "string" ? stageName : undefined,
          position: typeof position === "number" || typeof position === "string" ? position : undefined,
        });
      }
    }
    pipelines.push({ id, name, stages });
  }
  return pipelines;
}

function errorText(json: unknown) {
  if (json && typeof json === "object" && "message" in json) {
    const message = (json as { message: unknown }).message;
    if (typeof message === "string") return message.slice(0, 300);
    if (Array.isArray(message)) return message.map(String).join(", ").slice(0, 300);
  }
  return "request failed";
}
