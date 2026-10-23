import fs from "fs";
import path from "path";

/**
 * Sugar Spice and Spirits episodes built from Natalie's Drive transcripts
 * (exported 2026-10-23). YouTube ids are included only when the transcript
 * and a public video title on youtube.com/@SugarSpiceandSpirits matched
 * with confidence. Dates are that video's publish date.
 */

export type PodcastEpisodeMeta = {
  slug: string;
  /** Null when the source file does not state an episode number. */
  episodeNumber: number | null;
  title: string;
  summary: string;
  youtubeId: string | null;
  /** YYYY-MM-DD from the matched YouTube video. */
  published: string | null;
  publishedLabel: string | null;
  sortKey: number;
};

export type TranscriptBlock = {
  speaker: string | null;
  text: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "podcast");

let indexCache: PodcastEpisodeMeta[] | null = null;

export function getPodcastEpisodeIndex(): PodcastEpisodeMeta[] {
  if (!indexCache) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, "index.json"), "utf8");
    const episodes = JSON.parse(raw) as PodcastEpisodeMeta[];
    indexCache = episodes.sort(
      (a, b) => a.sortKey - b.sortKey || (b.episodeNumber ?? -1) - (a.episodeNumber ?? -1),
    );
  }
  return indexCache;
}

export function getPodcastEpisodeMeta(slug: string): PodcastEpisodeMeta | undefined {
  return getPodcastEpisodeIndex().find((episode) => episode.slug === slug);
}

export function getPodcastTranscript(slug: string): TranscriptBlock[] | null {
  const file = path.join(CONTENT_DIR, "transcripts", `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as TranscriptBlock[];
}

export function episodeLabel(episodeNumber: number | null): string | null {
  if (episodeNumber == null) return null;
  return `Episode ${episodeNumber}`;
}
