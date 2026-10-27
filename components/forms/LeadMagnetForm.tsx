"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads/submit";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(26,79,191,0.1)]";

type LeadMagnetFormProps = {
  /** Identifies which gated resource this submission is for (e.g. "buyer-checklist"). */
  resource: string;
  /** Called after a successful submission so the parent can reveal the gated content. */
  onSuccess: () => void;
  submitLabel?: string;
  interest?: string;
};

export function LeadMagnetForm({ resource, onSuccess, submitLabel = "Get the Checklist →", interest }: LeadMagnetFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);

    const result = await submitLead({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      resource,
      interest,
      honeypot: String(form.get("company") || ""),
    });

    if (!result.ok) {
      setStatus("error");
      return;
    }

    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <input type="text" name="name" placeholder="Full Name" required className={inputClasses} />
      <input type="email" name="email" placeholder="Email Address" required className={inputClasses} />
      {/* Honeypot. Hidden from real visitors. Bots tend to fill every field. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : submitLabel}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-700 mb-0">Something went wrong. Please try again in a moment.</p>
      )}
    </form>
  );
}
