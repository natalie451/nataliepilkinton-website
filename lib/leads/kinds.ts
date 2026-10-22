import { isLeadInterest, type LeadInterest } from "./interests";

/** Pipeline buckets. `general` covers contact "Other", the newsletter, and anything unmatched. */
export type LeadKind = LeadInterest | "general";

const RESOURCE_KINDS: Record<string, LeadKind> = {
  "buyer-checklist": "buyer",
  "presale-checklist": "seller",
  "home-valuation": "seller",
  "join-my-team": "agent",
};

export function classifyLead(input: { resource: string; interest?: string }): LeadKind {
  const interest = input.interest?.trim();
  if (interest && isLeadInterest(interest)) return interest;
  return RESOURCE_KINDS[input.resource.trim().toLowerCase()] ?? "general";
}

export function leadSource(resource: string): "Website" | "Website Chatbot" {
  return resource === "chat-assistant" ? "Website Chatbot" : "Website";
}

export function leadTags(kind: LeadKind, resource: string): string[] {
  const tags = [kind, resource.toLowerCase()];
  tags.push(resource === "chat-assistant" ? "website-chatbot" : "website");
  return [...new Set(tags.map((tag) => tag.slice(0, 50)))];
}

export function kindLabel(kind: LeadKind): string {
  switch (kind) {
    case "buyer":
      return "Buyer";
    case "seller":
      return "Seller";
    case "investor":
      return "Investor";
    case "agent":
      return "Agent recruit";
    case "podcast-guest":
      return "Podcast guest";
    default:
      return "General";
  }
}
