import { readConsent } from "@/lib/tracking/consent";
import { isGoogleAdsId, isMetaPixelId, trackingConfig } from "@/lib/tracking/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Page view for a client-side route change. The pixel snippet sends the first one. */
export function trackSpaPageView() {
  if (readConsent() !== "accepted") return;

  if (isMetaPixelId(trackingConfig.metaPixelId) && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }

  if (isGoogleAdsId(trackingConfig.googleAdsId) && typeof window.gtag === "function") {
    window.gtag("event", "page_view", { send_to: trackingConfig.googleAdsId });
  }
}

/** Lead after a contact, tour, or join form submits successfully. No form fields are sent. */
export function trackLead() {
  if (readConsent() !== "accepted") return;
  if (!isMetaPixelId(trackingConfig.metaPixelId)) return;

  const send = () => {
    if (typeof window.fbq !== "function") return false;
    window.fbq("track", "Lead");
    return true;
  };

  if (send()) return;

  const started = Date.now();
  const timer = window.setInterval(() => {
    if (send() || Date.now() - started > 5000) window.clearInterval(timer);
  }, 200);
}
