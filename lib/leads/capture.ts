import { syncLeadToGhl, ghlConfigured } from "./ghl";
import { classifyLead, leadSource } from "./kinds";
import { isLeadInterest, type LeadInterest } from "./interests";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Digits only, when the number is long enough to be a real phone. */
export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return null;
  return digits;
}

type CaptureInput = {
  name: string;
  email: string;
  resource: string;
  phone?: string;
  interest?: string;
  honeypot?: string;
  note?: string;
  address?: string;
};

type CaptureResult = { ok: true } | { ok: false; status: number; message: string };

export async function captureLead(input: CaptureInput): Promise<CaptureResult> {
  const name = input.name.trim();
  const email = input.email.trim();
  const resource = input.resource.trim();
  const honeypot = input.honeypot?.trim() ?? "";
  const note = clip(input.note, 2000);
  const address = clip(input.address, 200);

  if (!name || name.length > 80 || !EMAIL_PATTERN.test(email) || email.length > 120 || !resource || resource.length > 80) {
    return { ok: false, status: 400, message: "Please provide a valid name and email." };
  }

  let phone: string | undefined;
  if (input.phone !== undefined && input.phone.trim() !== "") {
    const normalized = normalizePhone(input.phone);
    if (!normalized) {
      return { ok: false, status: 400, message: "Please provide a valid phone number." };
    }
    phone = normalized;
  }

  let interest: LeadInterest | undefined;
  if (input.interest !== undefined && input.interest.trim() !== "") {
    if (!isLeadInterest(input.interest)) {
      return { ok: false, status: 400, message: "Please choose buyer, seller, investor, agent, or podcast guest." };
    }
    interest = input.interest;
  }

  if (honeypot) return { ok: true };

  const kind = classifyLead({ resource, interest });
  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL?.trim();
  const sendGhl = ghlConfigured();

  if (!sendGhl && !webhookUrl) {
    console.error("Lead capture is not configured. Set GoHighLevel keys or LEAD_CAPTURE_WEBHOOK_URL.");
    return { ok: false, status: 503, message: "This form is not available right now." };
  }

  const deliveries: Promise<boolean>[] = [];
  if (sendGhl) {
    deliveries.push(
      syncLeadToGhl({ name, email, phone, resource, kind, note, address }).catch((error: unknown) => {
        console.error("GoHighLevel lead sync failed.", error instanceof Error ? error.message : "unknown error");
        return false;
      }),
    );
  }
  if (webhookUrl) {
    deliveries.push(postWebhook(webhookUrl, { name, email, resource, phone, interest: kind, note, address, source: leadSource(resource) }));
  }

  const results = await Promise.all(deliveries);
  if (results.some(Boolean)) return { ok: true };

  return { ok: false, status: 502, message: "Something went wrong. Please try again." };
}

function clip(value: string | undefined, max: number) {
  const trimmed = value?.trim();
  if (!trimmed) return undefined;
  return trimmed.slice(0, max);
}

async function postWebhook(
  webhookUrl: string,
  payload: {
    name: string;
    email: string;
    resource: string;
    phone?: string;
    interest: string;
    note?: string;
    address?: string;
    source: string;
  },
) {
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        resource: payload.resource,
        honeypot: "",
        interest: payload.interest,
        source: payload.source,
        ...(payload.phone ? { phone: payload.phone } : {}),
        ...(payload.note ? { note: payload.note } : {}),
        ...(payload.address ? { address: payload.address } : {}),
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error(`Lead webhook failed (${response.status}).`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Lead webhook failed.", error instanceof Error ? error.message : "unknown error");
    return false;
  }
}
