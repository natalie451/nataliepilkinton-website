"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Button } from "@/components/ui/Button";
import { LEAD_INTERESTS, type LeadInterest } from "@/lib/leads/interests";
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
  "w-full px-3 py-2 border border-gray-light rounded-xs text-sm font-sans bg-white text-navy focus:outline-none focus:border-gold";

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
  const { messages, sendMessage, status, error, stop } = useChat({ transport });
  const busy = status === "submitted" || status === "streaming";
  const transcriptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const transcript = transcriptRef.current;
    if (transcript) transcript.scrollTop = transcript.scrollHeight;
  }, [messages, busy, error, open]);

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

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          phone: form.get("phone"),
          interest: form.get("interest"),
          resource: "chat-assistant",
          honeypot: form.get("company"),
        }),
      });
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        setLeadStatus("error");
        setLeadMessage(body?.message || "Something went wrong. Please try again.");
        return;
      }
      setLeadStatus("sent");
      setLeadMessage("Natalie has your info. You can also book a time or call her.");
      formElement.reset();
    } catch {
      setLeadStatus("error");
      setLeadMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="fixed z-[1050] right-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:right-6 md:bottom-6">
      {open && (
        <section
          role="dialog"
          aria-label="Chat with Natalie"
          className="mb-sm flex w-[min(24rem,calc(100vw-1.5rem))] max-h-[min(32rem,calc(100dvh-9.5rem-env(safe-area-inset-bottom)))] flex-col overflow-hidden rounded-xs border border-gray-light bg-white shadow-brand-lg"
        >
          <header className="shrink-0 bg-navy text-cream px-md py-sm flex items-start justify-between gap-sm">
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

          <div ref={transcriptRef} className="min-h-32 flex-1 overflow-y-auto px-md py-sm space-y-sm bg-cream">
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
                      ? "text-sm text-white bg-navy rounded-xs px-sm py-xs ml-lg mb-0"
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

          <div className="shrink-0 px-sm pb-sm flex flex-wrap gap-sm text-sm">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gold-ink underline underline-offset-2">
              Book a time
            </a>
            <a href={siteConfig.phoneHref} className="font-semibold text-gold-ink underline underline-offset-2">
              Call
            </a>
            <a href={siteConfig.smsHref} className="font-semibold text-gold-ink underline underline-offset-2">
              Text
            </a>
          </div>

          <form onSubmit={onLeadSubmit} className="shrink-0 border-t border-gray-light px-sm py-xs flex flex-col gap-xs">
            {leadStatus === "sent" ? (
              <p className="text-sm text-navy mb-0">{leadMessage}</p>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-dark mb-0">Send your info</p>
                <input name="name" required placeholder="Name" autoComplete="name" className={inputClasses} />
                <input name="phone" required placeholder="Phone" autoComplete="tel" inputMode="tel" className={inputClasses} />
                <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClasses} />
                <select name="interest" required defaultValue="" className={inputClasses}>
                  <option value="" disabled>
                    I am a...
                  </option>
                  {LEAD_INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interestLabels[interest]}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-9999px] w-px h-px opacity-0"
                />
                <Button type="submit" variant="secondary" size="small" className="!py-2" disabled={leadStatus === "submitting"}>
                  {leadStatus === "submitting" ? "Sending..." : "Send my info"}
                </Button>
                {leadMessage && <p className="text-xs text-navy mb-0">{leadMessage}</p>}
              </>
            )}
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="ml-auto flex items-center gap-xs rounded-full bg-gold text-navy px-md py-sm text-sm font-semibold shadow-brand-md ring-2 ring-cream hover:bg-white"
      >
        {open ? "Close chat" : "Ask Natalie"}
      </button>
    </div>
  );
}
