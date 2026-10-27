import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const transcriptRedirects: { source: string; destination: string }[] = [
      { source: "ep1-uncovering-your-why", destination: "ep01-uncovering-your-why" },
      { source: "ep5-lifting-others-up-doesnt-dim-your-light", destination: "ep05-lifting-others-up-doesnt-dim-your-light" },
      { source: "ep6-navigating-tech-latchkey-kids-to-ai", destination: "ep06-navigating-tech-from-latchkey-kids-to-ai" },
      { source: "ep7-rolling-the-dice", destination: "ep07-rolling-the-dice" },
      { source: "ep9-aging-gracefully", destination: "ep09-simply-twisted-conversations-on-aging-and-wellness" },
      { source: "ep11-luck-vs-grit", destination: "ep11-luck-or-hard-work" },
      { source: "ep13-hot-tub-truths-uncomfortable-situations", destination: "ep12-uncomfortable-situations" },
      { source: "ep15-when-the-roles-reverse-caring-for-aging-parents", destination: "ep14-navigating-the-emotional-journey-of-caregiving" },
      { source: "ep17-keeping-up-with-the-joneses", destination: "ep16-keeping-up-with-the-joneses" },
      { source: "ep19-gen-x-southerners-old-sayings", destination: "ep18-idioms" },
      { source: "ep21-spiked-coffee-productivity-confession", destination: "ep20-from-procrastination-to-productivity" },
      { source: "ep23-white-elephant-gifts-gone-wrong", destination: "ep22-christmas-in-ny-with-nat" },
      { source: "ep25-six-ways-he-gets-paid-on-every-deal", destination: "ep24-wes" },
      { source: "ep26-hidden-cost-of-being-strong", destination: "ep25-invisible-battles" },
      { source: "ep27-dating-after-divorce-or-losing-a-spouse", destination: "ep26-navigating-the-complex-world-of-dating" },
      { source: "ep28-gen-z-vs-boomers-leadership-gap", destination: "ep27-leadership-and-generations" },
      { source: "ep29-girl-bossed-too-hard", destination: "ep28-girl-boss" },
      { source: "ep30-infertility-faith-is-it-too-late", destination: "ep29-baby" },
      { source: "ep33-who-was-becky-beard", destination: "ep32-becky-beard" },
      { source: "ep35-stop-overpaying-your-mortgage", destination: "ep34-nat-tax-and-insurance" },
      { source: "ep36-80s-dating-prank-calls-mixtapes", destination: "ep35-kellys-80s-baby" },
      { source: "ep37-what-people-get-wrong-about-ai", destination: "ep36-mindys-ai" },
      { source: "ep41-be-your-own-boss-the-truth", destination: "ep40-entrepreneurship" },
      { source: "ep42-100k-investment-without-a-coach", destination: "ep41-get-a-coach-invest-in-yourself" },
      { source: "ep44-mel-robbins-let-them-approach", destination: "ep43-mel-let-them" },
      { source: "ep45-is-10-rental-properties-enough-to-retire", destination: "ep44-nat-real-estate" },
      { source: "ep46-is-texas-overrated", destination: "ep45-texas" },
      { source: "ep47-from-poverty-to-prosperity-cory-and-milly", destination: "ep46-cory-and-milly" },
      { source: "ep49-the-one-connection-that-can-change-your-business", destination: "ep47-art" },
      { source: "ep50-dont-mess-with-texas", destination: "ep48-texas-two" },
      { source: "ep51-fifa-visitors-reveal-what-shocked-them-most", destination: "ep49-what-fifa-visitors-love-most-about-america" },
      { source: "ep53-childhood-definitions-of-being-rich", destination: "ep51-rich" },
      { source: "ep54-ashley-police-drama-unfolds", destination: "ep52-ashley-police-happenings" },
      { source: "ep55-search-for-ali-lowitzer", destination: "ep53-hope-for-ali" },
      { source: "ep56-hard-money-lending-explained", destination: "ep54-eddie" },
      { source: "ep57-ceo-trap", destination: "ep55-steve" },
      { source: "ep58-alaska-adventure", destination: "ep56-alaska-ldonna" },
      { source: "ep60-women-business", destination: "ep58-was-it-worth-it" },
      { source: "ep61-dating-guide", destination: "ep59-dating-in-your-50s-we-asked-a-man-what-women-get-wrong" },
      { source: "ep62-football", destination: "ep60-are-you-ready-for-some-football" },
    ];
    const transcriptFallbacks = [
      "ep16-real-reason-your-business-strategy-is-failing",
      "ep24-authenticity-over-studio-perfection",
      "ep39-the-honest-truth-about-dating",
      "ep40-real-confidence-doesnt-look-like-you-think",
      "ep43-airport-chaos-vacation-disasters",
      "ep48-success-without-someone-to-share-it-with",
      "ep52-most-people-quit-right-before-it-gets-good",
      "ep59-best-childhood",
    ];
    return [
      // The page used to live under this folder name while nav, sitemap and canonical all pointed at /agent-attraction.
      { source: "/realtors/agent-resources", destination: "/realtors/agent-attraction", permanent: true },
      ...transcriptRedirects.map((item) => ({
        source: `/podcast/transcripts/${item.source}`,
        destination: `/podcast/${item.destination}`,
        permanent: true,
      })),
      ...transcriptFallbacks.map((slug) => ({
        source: `/podcast/transcripts/${slug}`,
        destination: "/podcast",
        permanent: true,
      })),
    ];
  },
  outputFileTracingIncludes: {
    "/api/blog/**": ["./public/blog-content/**/*"],
    "/podcast/**": ["./content/podcast/**/*"],
  },
  images: {
    // AVIF when the browser accepts it, WebP otherwise. The hero photo is
    // the usual LCP image, so the smaller format matters on first paint.
    formats: ["image/avif", "image/webp"],
    // Enables real Next/Image optimization (resize + AVIF/WebP) for the
    // legacy site's CDN-hosted logo/headshot instead of serving them raw.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
    ],
    // Only for our own trusted, same-origin placeholder graphics under
    // /public/listings (sandboxed CSP per Next's documented pattern) — not
    // a blanket allowance for untrusted/user-supplied SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
