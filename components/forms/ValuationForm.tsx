"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads/submit";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]";

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = new FormData(event.currentTarget);

    const result = await submitLead({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      address: String(form.get("address") || ""),
      interest: "seller",
      resource: "home-valuation",
      honeypot: String(form.get("company") || ""),
    });

    if (!result.ok) {
      setStatus("error");
      setMessage(result.message);
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cream border-l-4 border-gold p-lg rounded-xs">
        <p className="mb-0">Thanks. Natalie&rsquo;s team will follow up with your home value estimate shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <input name="address" type="text" placeholder="Property Address" autoComplete="street-address" required className={inputClasses} />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
        <input name="name" type="text" placeholder="Full Name" autoComplete="name" required className={inputClasses} />
        <input name="email" type="email" placeholder="Email Address" autoComplete="email" required className={inputClasses} />
      </div>
      <input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" inputMode="tel" className={inputClasses} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get My Free Valuation"}
      </Button>
      {status === "error" && <p className="text-sm text-red-700 mb-0">{message}</p>}
    </form>
  );
}
