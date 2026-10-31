import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/navigation";
import { isPlaceholderPath } from "@/lib/seo/placeholders";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Keep the page out of search results (e.g. a placeholder awaiting real content). */
  noindex?: boolean;
  /** Use the title exactly as given, without the sitewide "| Natalie Pilkinton - HomeRock Realty" suffix. */
  absoluteTitle?: boolean;
};

/** Keep meta descriptions inside Bing's 25 to 160 character range without adding new facts. */
export function fitMetaDescription(text: string): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length >= 25 && clean.length <= 160) return clean;
  if (clean.length > 160) {
    const sentences = clean.split(/(?<=[.!?])\s+/);
    let built = "";
    for (const sentence of sentences) {
      const next = built ? `${built} ${sentence}` : sentence;
      if (next.length > 160) break;
      built = next;
    }
    if (built.length >= 25 && built.length <= 160) return built;
    const slice = clean.slice(0, 160);
    const space = slice.lastIndexOf(" ");
    return (space >= 25 ? slice.slice(0, space) : slice).replace(/[,:;]+$/, "");
  }
  return clean;
}

/** Builds consistent per-page <title>/description/OG/Twitter metadata. */
function canonicalPath(path: string) {
  const withLead = path.startsWith("/") ? path : `/${path}`;
  if (withLead.length > 1 && withLead.endsWith("/")) return withLead.slice(0, -1);
  return withLead;
}

export function buildMetadata({ title, description, path, image, noindex = false, absoluteTitle = false }: PageMetadataInput): Metadata {
  const url = `${siteConfig.siteUrl}${canonicalPath(path)}`;
  const hidden = noindex || isPlaceholderPath(path);
  const ogImage = image ?? siteConfig.headshotUrl;
  const summary = fitMetaDescription(description);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: summary,
    alternates: { canonical: url },
    robots: {
      index: !hidden,
      follow: true,
      googleBot: { index: !hidden, follow: true },
    },
    openGraph: {
      title,
      description: summary,
      url,
      siteName: `${siteConfig.name} | ${siteConfig.brand}`,
      images: [{ url: ogImage, alt: `${siteConfig.name}, ${siteConfig.brand}` }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}
