"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { CallOrTextChoice } from "@/components/cta/CallOrTextChoice";
import { Button } from "@/components/ui/Button";
import { LEAD_INTERESTS, type LeadInterest } from "@/lib/leads/interests";
import { submitLead } from "@/lib/leads/submit";
import { siteConfig } from "@/lib/data/navigation";

const transport = new DefaultChatTransport({ api: "/api/chat" });

const interestLabels: Record<LeadInterest, string> = {
  buyer: "Buyer",
  seller: "Seller",
  investor: "Investor",
  agent: "Agent",
  "podcast-guest": "Podcast guest",
};

const inputClasses =
  "w-full px-3 py-2 border border-gray-light rounded-xs text-sm font-sans bg-white text-navy focus:outline-none focus:border-blue";

const creamControl =
  "inline-flex items-center rounded-full border border-blue bg-cream px-sm py-1 text-sm font-semibold text-navy shadow-brand-sm hover:bg-white hover:text-navy";

function messageText(message: UIMessage) {
  return message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
}

export function NatalieChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [leadMessage, setLeadMessage] = useState("");
  const [leadOpen, setLeadOpen] = useState(false);
  const { messages, sendMessage, status, error, stop } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";
  const transcriptRef = useRef<HTMLDivElement>(null);
  const leadFieldsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (!transcript || leadOpen) return;
    transcript.scrollTop = transcript.scrollHeight;
  }, [messages, busy, error, open, leadOpen]);

  useEffect(() => {
    const transcript = transcriptRef.current;
    const fields = leadFieldsRef.current;
    if (!leadOpen || !transcript || !fields) return;
    transcript.scrollTop = fields.offsetTop;
  }, [leadOpen]);

  async function onChatSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text || busy) return;
    setDraft("");
    await sendMessage({ text });
  }

  async function onLeadSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setLeadStatus("submitting");
    setLeadMessage("");
    const form = new FormData(formElement);

    const result = await submitLead({
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      interest: String(form.get("interest") || ""),
      resource: "chat-assistant",
      honeypot: String(form.get("company") || ""),
    });
    if (!result.ok) {
      setLeadStatus("error");
      setLeadMessage(result.message);
      return;
    }
    setLeadStatus("sent");
    setLeadMessage("Natalie has your info. You can also book a time or call her.");
    formElement.reset();
  }

  return (
    <div className="fixed z-[1050] right-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:right-6 md:bottom-6">
      {open && (
        <section
          role="dialog"
          aria-label="Chat with Natalie"
          className="mb-sm flex h-[min(32rem,calc(100dvh-5.5rem-4.75rem-env(safe-area-inset-bottom)))] w-[min(24rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-xs border border-gray-light bg-cream shadow-brand-lg md:h-[min(36rem,calc(100dvh-7.5rem))]"
        >
          <header className="shrink-0 bg-blue text-cream px-md py-sm flex items-start justify-between gap-sm">
            <div>
              <p className="text-sm font-semibold text-cream mb-0">Chat with Natalie</p>
              <p className="text-xs text-cream/80 mb-0">Spring, TX REALTOR, HomeRock Realty</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-cream underline underline-offset-2"
            >
              Close
            </button>
          </header>

          <div
            ref={transcriptRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] px-md py-sm space-y-sm bg-cream"
          >
            <p className="text-sm text-navy mb-0">
              I can help with buying, selling, investing, joining the team, or the Sugar Spice and Spirits podcast.
              Ask a question, or send your name, phone, and email below.
            </p>
            {messages.map((message) => {
              const text = messageText(message);
              if (!text) return null;
              const mine = message.role === "user";
              return (
                <p
                  key={message.id}
                  className={
                    mine
                      ? "text-sm text-white bg-blue rounded-xs px-sm py-xs ml-lg mb-0"
                      : "text-sm text-navy bg-white border border-gray-light rounded-xs px-sm py-xs mr-lg mb-0"
                  }
                >
                  {text}
                </p>
              );
            })}
            {busy && <p className="text-xs text-gray-dark mb-0">Natalie is typing...</p>}
            {error && (
              <p className="text-sm text-navy mb-0">
                I cannot answer right now. Call or text {siteConfig.phone}, or book a time. You can still send your info below.
              </p>
            )}
            {leadOpen && leadStatus !== "sent" && (
              <div ref={leadFieldsRef} className="flex flex-col gap-xs border-t border-gray-light pt-sm">
                <div className="flex items-center justify-between gap-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-dark mb-0">Send your info</p>
                  <button
                    type="button"
                    onClick={() => setLeadOpen(false)}
                    className="text-xs font-semibold text-navy underline underline-offset-2"
                  >
                    Hide
                  </button>
                </div>
                <input form="natalie-lead-form" name="name" required placeholder="Name" autoComplete="name" className={inputClasses} />
                <input form="natalie-lead-form" name="phone" required placeholder="Phone" autoComplete="tel" inputMode="tel" className={inputClasses} />
                <input form="natalie-lead-form" name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClasses} />
                <select form="natalie-lead-form" name="interest" required defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    I am a...
                  </option>
                  {LEAD_INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interestLabels[interest]}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <form onSubmit={onChatSubmit} className="shrink-0 border-t border-gray-light px-sm py-xs flex gap-xs">
            <label className="sr-only" htmlFor="natalie-chat-input">
              Message
            </label>
            <input
              id="natalie-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={800}
              placeholder="Ask about buying, selling, or the team"
              className={inputClasses}
            />
            {busy ? (
              <Button type="button" variant="secondary" size="small" className="!py-2" onClick={() => stop()}>
                Stop
              </Button>
            ) : (
              <Button type="submit" size="small" className="!py-2" disabled={!draft.trim()}>
                Send
              </Button>
            )}
          </form>

          <div className="shrink-0 px-sm pb-sm flex flex-wrap items-center gap-sm text-sm">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className={creamControl}>
              Book a time
            </a>
            <CallOrTextChoice variant="panel" />
          </div>

          <form id="natalie-lead-form" onSubmit={onLeadSubmit} className="shrink-0 border-t border-gray-light px-sm py-xs">
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] w-px h-px opacity-0"
            />
            {leadStatus === "sent" ? (
              <p className="text-sm text-navy mb-0">{leadMessage}</p>
            ) : leadOpen ? (
              <Button type="submit" variant="secondary" size="small" className="!py-2 w-full" disabled={leadStatus === "submitting"}>
                {leadStatus === "submitting" ? "Sending..." : "Send my info"}
              </Button>
            ) : (
              <Button type="button" variant="secondary" size="small" className="!py-2 w-full" onClick={() => setLeadOpen(true)}>
                Send my info
              </Button>
            )}
            {leadStatus !== "sent" && leadMessage && <p className="text-xs text-navy mt-xs mb-0">{leadMessage}</p>}
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-xs rounded-full border-2 border-blue bg-cream px-md py-sm text-sm font-semibold text-navy shadow-brand-md hover:bg-white"
      >
        {open ? "Close chat" : "Ask Natalie"}
      </button>
    </div>
  );
}
