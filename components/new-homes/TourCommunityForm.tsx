"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads/submit";
import { trackLead } from "@/lib/tracking/events";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans bg-white text-navy focus:outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(26,79,191,0.1)]";

type TourCommunityFormProps = {
  communityName: string;
  resource: string;
};

export function TourCommunityForm({ communityName, resource }: TourCommunityFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = new FormData(event.currentTarget);
    const note = String(form.get("note") || "").trim();

    const result = await submitLead({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      interest: "buyer",
      resource,
      note: [`Tour ${communityName} with Natalie.`, note].filter(Boolean).join(" "),
      honeypot: String(form.get("company") || ""),
    });

    if (!result.ok) {
      setStatus("error");
      setMessage(result.message);
      return;
    }

    trackLead();
    setStatus("done");
  }

  if (status === "done") {
    return (
      <p className="text-navy leading-relaxed mb-0">
        Natalie has your request to tour {communityName}. She will follow up to pick a time. You can also call or text
        (832) 863-3468 if you want to talk before then.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <label className="flex flex-col gap-xs text-sm font-semibold text-navy">
        Name
        <input type="text" name="name" autoComplete="name" required className={inputClasses} />
      </label>
      <label className="flex flex-col gap-xs text-sm font-semibold text-navy">
        Email
        <input type="email" name="email" autoComplete="email" required className={inputClasses} />
      </label>
      <label className="flex flex-col gap-xs text-sm font-semibold text-navy">
        Phone
        <input type="tel" name="phone" autoComplete="tel" required className={inputClasses} />
      </label>
      <label className="flex flex-col gap-xs text-sm font-semibold text-navy">
        Which builder, or anything she should know
        <textarea name="note" rows={3} className={inputClasses} />
      </label>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : `Tour ${communityName} with Natalie`}
      </Button>
      {status === "error" && <p className="text-sm text-red-700 mb-0">{message}</p>}
    </form>
  );
}
