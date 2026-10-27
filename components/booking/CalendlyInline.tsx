"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/data/navigation";

/**
 * The public profile URL lists her only event, "30 Minute Meeting", behind a
 * button. The inline widget opens that event so the date picker is visible
 * on load. Other booking buttons stay on siteConfig.bookingUrl.
 */
const EVENT_SLUG = "30min";

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

function inlineWidgetUrl() {
  const url = new URL(siteConfig.bookingUrl);
  url.pathname = `${url.pathname.replace(/\/$/, "")}/${EVENT_SLUG}`;
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("embed_domain", new URL(siteConfig.siteUrl).host);
  url.searchParams.set("embed_type", "Inline");
  return url.toString();
}

function mountCalendly(parent: HTMLElement | null, url: string) {
  if (!parent || parent.dataset.mounted === "true" || parent.querySelector("iframe")) return;
  if (!window.Calendly) return;
  parent.dataset.mounted = "true";
  window.Calendly.initInlineWidget({ url, parentElement: parent });
}

export function CalendlyInline() {
  const parentRef = useRef<HTMLDivElement>(null);
  const url = inlineWidgetUrl();

  useEffect(() => {
    mountCalendly(parentRef.current, url);
  }, [url]);

  return (
    <div className="bg-white border border-gray-light rounded-xs overflow-hidden">
      <div
        ref={parentRef}
        className="calendly-inline-widget calendly-booking-frame"
        data-url={url}
        style={{ minWidth: "320px", height: "1100px" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => mountCalendly(parentRef.current, url)}
      />
      <p className="text-center text-gray-dark text-sm px-lg pb-lg mb-0">
        If the calendar does not load,{" "}
        <a
          href={siteConfig.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue underline underline-offset-2"
        >
          open Calendly in a new tab
        </a>
        .
      </p>
    </div>
  );
}
