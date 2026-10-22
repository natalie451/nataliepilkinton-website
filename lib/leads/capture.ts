import { isLeadInterest, type LeadInterest } from "@/lib/leads/interests";

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
};

type CaptureResult = { ok: true } | { ok: false; status: number; message: string };

export async function captureLead(input: CaptureInput): Promise<CaptureResult> {
  const name = input.name.trim();
  const email = input.email.trim();
  const resource = input.resource.trim();
  const honeypot = input.honeypot?.trim() ?? "";

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

  const webhookUrl = process.env.LEAD_CAPTURE_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    console.error("LEAD_CAPTURE_WEBHOOK_URL is not configured.");
    return { ok: false, status: 503, message: "This form is not available right now." };
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      resource,
      honeypot,
      ...(phone ? { phone } : {}),
      ...(interest ? { interest } : {}),
    }),
  });

  if (!response.ok) {
    return { ok: false, status: 502, message: "Something went wrong. Please try again." };
  }

  return { ok: true };
}
