export type LeadSubmission = {
  name: string;
  email: string;
  resource: string;
  phone?: string;
  interest?: string;
  note?: string;
  address?: string;
  honeypot?: string;
};

/** Browser helper for every public lead form. */
export async function submitLead(input: LeadSubmission): Promise<{ ok: true } | { ok: false; message: string }> {
  try {
    const response = await fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const body = (await response.json().catch(() => null)) as { message?: string } | null;
    if (!response.ok) {
      return { ok: false, message: body?.message || "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
