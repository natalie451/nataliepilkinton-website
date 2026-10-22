import type { LeadKind } from "./kinds";

export type GhlStage = {
  id: string;
  name?: string;
  position?: number | string;
};

export type GhlPipeline = {
  id: string;
  name: string;
  stages: GhlStage[];
};

const KIND_KEYWORDS: Record<Exclude<LeadKind, "general">, string[]> = {
  buyer: ["buyer", "buying", "purchase"],
  seller: ["seller", "selling", "listing"],
  investor: ["investor", "investing", "investment"],
  agent: ["agent", "recruit", "join my team"],
  "podcast-guest": ["podcast guest", "podcast", "sugar spice"],
};

const GENERAL_KEYWORDS = ["general", "default", "website", "inbound"];

export function parsePipelineMap(raw: string | undefined): Record<string, string> {
  if (!raw?.trim()) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const map: Record<string, string> = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === "string" && value.trim()) {
        map[key.trim().toLowerCase()] = value.trim();
      }
    }
    return map;
  } catch {
    console.error("GHL_PIPELINE_MAP is not valid JSON.");
    return {};
  }
}

function hasPhrase(name: string, phrase: string) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+");
  return new RegExp(`(?:^|[^a-z0-9])${escaped}s?(?:[^a-z0-9]|$)`, "i").test(name);
}

function scoreName(name: string, keywords: string[]) {
  return keywords.reduce((total, keyword) => (hasPhrase(name, keyword) ? total + keyword.length : total), 0);
}

function findOverride(pipelines: GhlPipeline[], value: string | undefined) {
  if (!value) return undefined;
  const wanted = value.trim().toLowerCase();
  return (
    pipelines.find((pipeline) => pipeline.id.toLowerCase() === wanted) ||
    pipelines.find((pipeline) => pipeline.name.trim().toLowerCase() === wanted)
  );
}

function bestMatch(pipelines: GhlPipeline[], keywords: string[]) {
  let winner: GhlPipeline | undefined;
  let best = 0;
  for (const pipeline of pipelines) {
    const score = scoreName(pipeline.name, keywords);
    if (score > best) {
      best = score;
      winner = pipeline;
    }
  }
  return winner;
}

/** First stage in board order. Numeric positions win. String sort keys keep the API order. */
export function firstStage(stages: GhlStage[]): GhlStage | null {
  if (stages.length === 0) return null;
  const ranked = stages.map((stage, index) => ({ stage, index, rank: stageRank(stage.position) }));
  ranked.sort((a, b) => a.rank - b.rank || a.index - b.index);
  return ranked[0].stage;
}

function stageRank(position: number | string | undefined) {
  if (typeof position === "number" && Number.isFinite(position)) return position;
  if (typeof position === "string" && position.trim() !== "" && Number.isFinite(Number(position))) {
    return Number(position);
  }
  return Number.POSITIVE_INFINITY;
}

/**
 * Pick a pipeline for this lead. Override map wins (id or exact name), then
 * keyword match, then the general/default pipeline, then the first pipeline.
 */
export function resolvePipeline(
  pipelines: GhlPipeline[],
  kind: LeadKind,
  map: Record<string, string>,
): GhlPipeline | null {
  if (pipelines.length === 0) return null;

  if (kind !== "general") {
    const override = findOverride(pipelines, map[kind]);
    if (override) return override;
    const matched = bestMatch(pipelines, KIND_KEYWORDS[kind]);
    if (matched) return matched;
  }

  const generalOverride = findOverride(pipelines, map.general) || findOverride(pipelines, map.default);
  if (generalOverride) return generalOverride;
  return bestMatch(pipelines, GENERAL_KEYWORDS) ?? pipelines[0];
}
