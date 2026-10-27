"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/lib/leads/submit";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(26,79,191,0.1)]";

const topics = [
  { label: "Select Topic", interest: "" },
  { label: "Home Buying", interest: "buyer" },
  { label: "Home Selling", interest: "seller" },
  { label: "Investment", interest: "investor" },
  { label: "Realtor Opportunity", interest: "agent" },
  { label: "Other", interest: "" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const name = [form.get("firstName"), form.get("lastName")]
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .join(" ");
    const topic = String(form.get("topic") || "");
    const interest = topics.find((item) => item.label === topic)?.interest;

    const result = await submitLead({
      name,
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      interest,
      note: String(form.get("message") || ""),
      resource: "contact",
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
      <div className="bg-cream border-l-4 border-blue p-lg rounded-xs">
        <p className="mb-0">Thanks for reaching out. Natalie&rsquo;s team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
        <input name="firstName" type="text" placeholder="First Name" autoComplete="given-name" required className={inputClasses} />
        <input name="lastName" type="text" placeholder="Last Name" autoComplete="family-name" required className={inputClasses} />
      </div>
      <input name="email" type="email" placeholder="Email Address" autoComplete="email" required className={inputClasses} />
      <input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" inputMode="tel" className={inputClasses} />
      <select name="topic" required defaultValue="" className={inputClasses}>
        {topics.map((topic, index) => (
          <option key={topic.label} value={index === 0 ? "" : topic.label} disabled={index === 0}>
            {topic.label}
          </option>
        ))}
      </select>
      <textarea name="message" placeholder="Your Message" rows={5} required className={inputClasses} />
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {status === "error" && <p className="text-sm text-red-700 mb-0">{message}</p>}
    </form>
  );
}
