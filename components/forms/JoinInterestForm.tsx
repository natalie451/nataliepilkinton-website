"use client";

import { useState } from "react";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";

/** Reuses the existing lead-magnet endpoint. No new backend. */
export function JoinInterestForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-cream border-l-4 border-blue p-lg rounded-xs">
        <p className="mb-0">Thanks. Natalie will follow up about joining the team.</p>
      </div>
    );
  }

  return (
    <LeadMagnetForm resource="join-my-team" interest="agent" submitLabel="Send my interest" onSuccess={() => setSent(true)} />
  );
}
