export const CONSENT_STORAGE_KEY = "np-cookie-consent:v1";
export const CONSENT_EVENT = "np-cookie-consent";

export type ConsentChoice = "accepted" | "declined";

export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): boolean {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    return true;
  } catch {
    return false;
  }
}

/** Save the choice. A previous Accept followed by Decline needs a reload so the pixel stops. */
export function applyConsent(choice: ConsentChoice): "saved" | "reload" | "failed" {
  const previous = readConsent();
  if (!writeConsent(choice)) return "failed";
  if (previous === "accepted" && choice === "declined") return "reload";
  return "saved";
}
