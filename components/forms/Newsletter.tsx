"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads/submit";

type NewsletterProps = {
  className?: string;
  /** Adjusts input/label coloring for use on a dark (navy) background vs. light. */
  onDark?: boolean;
};

export function Newsletter({ className, onDark = true }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const inputId = useId();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "").trim();
    const localPart = email.split("@")[0]?.trim();

    const result = await submitLead({
      name: (localPart || "Subscriber").slice(0, 80),
      email,
      resource: "newsletter",
      honeypot: String(form.get("company") || ""),
    });

    if (!result.ok) {
      setStatus("error");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={onDark ? "text-cream mb-0" : "text-gray-dark mb-0"}>
        Thanks for subscribing. Watch your inbox for real estate insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div className="flex gap-sm max-w-[28rem] max-sm:flex-col">
        <input
          id={inputId}
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          className={
            onDark
              ? "flex-1 min-w-0 w-full max-sm:w-full px-md py-sm rounded-xs bg-white/10 border border-white/25 text-white placeholder:text-cream/60 text-sm focus:outline-none focus:border-blue"
              : "flex-1 min-w-0 w-full max-sm:w-full px-md py-sm rounded-xs border border-gray-light text-sm focus:outline-none focus:border-blue"
          }
        />
        <Button type="submit" size="small" variant={onDark ? "outline-light" : "primary"} className="max-sm:w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Subscribe"}
        </Button>
      </div>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      {status === "error" && (
        <p className={onDark ? "text-sm text-cream mb-0 mt-sm" : "text-sm text-red-700 mb-0 mt-sm"}>
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
