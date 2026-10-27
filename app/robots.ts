import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/navigation";

const allowAll = {
  allow: "/",
  disallow: "/api/",
};

/** Crawlers that should be named explicitly, in addition to the * rule. */
const namedBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      ...namedBots.map((userAgent) => ({ userAgent, ...allowAll })),
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: "www.nataliepilkinton.com",
  };
}
