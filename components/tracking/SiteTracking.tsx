"use client";

import Script from "next/script";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  googleAdsSnippet,
  isGoogleAdsId,
  isMetaPixelId,
  metaPixelNoscriptHtml,
  metaPixelSnippet,
  trackingConfig,
} from "@/lib/tracking/config";
import { trackSpaPageView } from "@/lib/tracking/events";
import { useConsent } from "@/components/tracking/useConsent";

const metaPixelId = isMetaPixelId(trackingConfig.metaPixelId) ? trackingConfig.metaPixelId : "";
const googleAdsId = isGoogleAdsId(trackingConfig.googleAdsId) ? trackingConfig.googleAdsId : "";

function AdvertisingTags() {
  const pathname = usePathname();
  const seenPath = useRef<string | null>(null);

  useEffect(() => {
    if (seenPath.current === null) {
      seenPath.current = pathname;
      return;
    }
    if (seenPath.current === pathname) return;
    seenPath.current = pathname;
    trackSpaPageView();
  }, [pathname]);

  return (
    <>
      {metaPixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {metaPixelSnippet(metaPixelId)}
          </Script>
          <noscript dangerouslySetInnerHTML={{ __html: metaPixelNoscriptHtml(metaPixelId) }} />
        </>
      ) : null}
      {googleAdsId ? (
        <>
          <Script id="google-ads" strategy="afterInteractive">
            {googleAdsSnippet(googleAdsId)}
          </Script>
          <Script
            id="google-ads-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}
    </>
  );
}

export function SiteTracking() {
  const { consent, saveFailed, choose } = useConsent();

  return (
    <>
      {consent === "accepted" ? <AdvertisingTags /> : null}
      {consent === null ? (
        <div
          id="cookie-notice"
          role="region"
          aria-label="Cookie notice"
          className="fixed z-[990] left-3 right-3 top-[5.5rem] w-auto max-w-[28rem] rounded-xs border border-white/15 bg-blue p-md text-cream shadow-brand-lg md:left-auto md:right-6 md:w-[28rem]"
        >
          <p className="mb-sm text-sm text-cream">
            This site uses cookies and similar tech for analytics and advertising.{" "}
            <Link
              href="/privacy"
              className="text-cream underline underline-offset-2 hover:text-white focus-visible:outline-cream"
            >
              Privacy Policy
            </Link>
          </p>
          {saveFailed ? (
            <p className="mb-sm text-sm text-cream">
              This browser did not save the choice, so the pixel stays off.
            </p>
          ) : null}
          <div className="flex flex-wrap gap-sm">
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-xs bg-cream px-md py-xs text-sm font-semibold text-blue hover:bg-white focus-visible:outline-cream"
              onClick={() => choose("accepted")}
            >
              Accept
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-xs border border-cream px-md py-xs text-sm font-semibold text-cream hover:bg-white/10 focus-visible:outline-cream"
              onClick={() => choose("declined")}
            >
              Decline
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
