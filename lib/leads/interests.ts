export const LEAD_INTERESTS = ["buyer", "seller", "investor", "agent", "podcast-guest"] as const;

export type LeadInterest = (typeof LEAD_INTERESTS)[number];

export function isLeadInterest(value: string): value is LeadInterest {
  return (LEAD_INTERESTS as readonly string[]).includes(value);
}
