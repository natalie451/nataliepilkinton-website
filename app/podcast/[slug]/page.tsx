import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { podcastShow, youtubeWatchUrl } from "@/lib/data/podcast";
import { siteConfig } from "@/lib/data/navigation";
import {
  episodeLabel,
  getPodcastEpisodeIndex,
  getPodcastEpisodeMeta,
  getPodcastTranscript,
} from "@/lib/content/podcastEpisodes";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";

type Params = { slug: string };

export function generateStaticParams() {
  return getPodcastEpisodeIndex().map((episode) => ({ slug: episode.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const episode = getPodcastEpisodeMeta(slug);
  if (!episode) {
    return buildMetadata({
      title: "Episode not found",
      description: "This Sugar Spice and Spirits episode could not be found.",
      path: `/podcast/${slug}`,
    });
  }
  const label = episodeLabel(episode.episodeNumber);
  return buildMetadata({
    title: label ? `${label}: ${episode.title}` : episode.title,
    description: episode.summary,
    path: `/podcast/${episode.slug}`,
  });
}

export default async function PodcastEpisodePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const episode = getPodcastEpisodeMeta(slug);
  const blocks = episode ? getPodcastTranscript(slug) : null;
  if (!episode || !blocks) notFound();

  const label = episodeLabel(episode.episodeNumber);
  const pageUrl = `${siteConfig.siteUrl}/podcast/${episode.slug}`;
  const videoUrl = episode.youtubeId ? youtubeWatchUrl(episode.youtubeId) : null;

  const episodeSchema: Record<string, unknown> = {
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.summary,
    url: pageUrl,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: podcastShow.name,
      url: `${siteConfig.siteUrl}/podcast`,
    },
  };
  if (episode.episodeNumber != null) episodeSchema.episodeNumber = episode.episodeNumber;
  if (episode.published) episodeSchema.datePublished = episode.published;

  const graph: Record<string, unknown>[] = [episodeSchema];
  if (episode.youtubeId && videoUrl) {
    const video = {
      "@type": "VideoObject",
      name: episode.title,
      description: episode.summary,
      thumbnailUrl: `https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${episode.youtubeId}`,
      contentUrl: videoUrl,
      url: pageUrl,
      ...(episode.published ? { uploadDate: episode.published } : {}),
    };
    graph.push(video);
    episodeSchema.associatedMedia = video;
  }

  return (
    <>
      <script {...jsonLdScriptProps({ "@context": "https://schema.org", "@graph": graph })} />
      <BreadcrumbBar
        items={[
          { name: "Podcast", path: "/podcast" },
          { name: label ?? episode.title, path: `/podcast/${episode.slug}` },
        ]}
      />

      <section className="bg-cream text-navy border-b border-gray-light">
        <Container className="py-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy mb-sm">
            Sugar Spice and Spirits
            {label ? ` · ${label}` : ""}
            {episode.publishedLabel ? ` · ${episode.publishedLabel}` : ""}
          </p>
          <h1 className="text-navy mb-lg max-w-[22ch]">{episode.title}</h1>

          {episode.youtubeId ? (
            <div className="relative mb-lg aspect-video w-full max-w-[48rem] overflow-hidden rounded-xs bg-blue">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${episode.youtubeId}`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <p className="max-w-[40rem] mb-lg">
              This transcript was not matched to one specific video on the Sugar Spice and Spirits channel.
              Watch the show on YouTube.
            </p>
          )}

          <div className="flex flex-wrap gap-sm">
            <Button href={podcastShow.subscribeUrl} external variant="primary">
              Subscribe on YouTube
            </Button>
            {videoUrl ? (
              <Button href={videoUrl} external variant="outline">
                Watch this episode on YouTube
              </Button>
            ) : (
              <Button href={podcastShow.channelUrl} external variant="outline">
                YouTube channel
              </Button>
            )}
          </div>
        </Container>
      </section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Summary</h2>
          <p className="text-base leading-relaxed text-gray-dark">{episode.summary}</p>

          <h2 className="mt-2xl">Transcript</h2>
          <div className="mt-md">
            {blocks.map((block, index) => {
              const showSpeaker = Boolean(block.speaker) && block.speaker !== blocks[index - 1]?.speaker;
              return (
                <p key={index} className="text-base leading-relaxed text-gray-dark">
                  {showSpeaker ? <strong className="text-navy">{block.speaker}: </strong> : null}
                  {block.text}
                </p>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
