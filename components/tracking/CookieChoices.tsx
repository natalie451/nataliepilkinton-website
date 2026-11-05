"use client";

import { Button } from "@/components/ui/Button";
import { useConsent } from "@/components/tracking/useConsent";

export function CookieChoices() {
  const { consent, saveFailed, choose } = useConsent();

  const label =
    consent === undefined
      ? "Checking this browser."
      : consent === "accepted"
        ? "Accepted. The Meta Pixel can load in this browser."
        : consent === "declined"
          ? "Declined. The Meta Pixel stays off in this browser."
          : "No choice saved yet. The Meta Pixel stays off until you accept.";

  return (
    <div className="my-lg rounded-xs border border-gray-light bg-cream p-md">
      <p className="mb-sm">Choice saved in this browser: {label}</p>
      {saveFailed ? (
        <p className="mb-sm">This browser did not save the choice, so the pixel stays off.</p>
      ) : null}
      <div className="flex flex-wrap gap-sm">
        <Button type="button" size="small" onClick={() => choose("accepted")}>
          Accept
        </Button>
        <Button type="button" size="small" variant="secondary" onClick={() => choose("declined")}>
          Decline
        </Button>
      </div>
    </div>
  );
}
