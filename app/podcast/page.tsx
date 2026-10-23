import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PodcastYoutubeActions } from "@/components/podcast/PodcastYoutubeActions";
import { podcastEpisodes, podcastShow, youtubeWatchUrl } from "@/lib/data/podcast";
import { podcastTranscripts } from "@/lib/content/podcastTranscripts";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Sugar Spice and Spirits Podcast",
  description:
    "Sugar Spice and Spirits, hosted by Natalie Pilkinton, Mindy Price, and Kelly Williams. Watch and subscribe on YouTube.",
  path: "/podcast",
});

const showUrl = `${siteConfig.siteUrl}/podcast`;

const podcastSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PodcastSeries",
      name: podcastShow.name,
      url: showUrl,
      description:
        "Sugar Spice and Spirits is hosted by Natalie Pilkinton, Mindy Price, and Kelly Williams. New episodes are published on YouTube.",
      webFeed: podcastShow.rssUrl,
      author: { "@type": "Person", name: siteConfig.name, url: siteConfig.siteUrl },
      sameAs: [podcastShow.channelUrl, podcastShow.spotifyUrl, podcastShow.appleUrl],
    },
    ...podcastEpisodes.map((episode) => ({
      "@type": "VideoObject",
      name: episode.title,
      description: `${podcastShow.name} episode published on YouTube on ${episode.publishedLabel}.`,
      thumbnailUrl: `https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`,
      uploadDate: episode.uploadDate,
      embedUrl: `https://www.youtube.com/embed/${episode.id}`,
      url: youtubeWatchUrl(episode.id),
      publisher: {
        "@type": "Organization",
        name: podcastShow.name,
        url: podcastShow.channelUrl,
      },
    })),
  ],
};

const transcripts = [...podcastTranscripts].sort((a, b) => b.episodeNumber - a.episodeNumber);

export default function PodcastPage() {
  return (
    <>
      <script {...jsonLdScriptProps(podcastSchema)} />

      <section className="bg-[#f5eedc] text-navy">
        <Container className="py-2xl md:py-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy mb-sm">Podcast</p>
          <h1 className="text-navy mb-md max-w-[16ch]">Sugar Spice and Spirits</h1>
          <p className="max-w-[40rem] text-navy text-lg mb-lg">
            Hosted by Natalie Pilkinton, Mindy Price, and Kelly Williams. Conversations on business, life, and real estate.
            Watch the show on YouTube.
          </p>
          <PodcastYoutubeActions subscribeVariant="outline" />
          <p className="mt-md mb-0 text-sm text-navy">
            Also on{" "}
            <a href={podcastShow.spotifyUrl} className="font-semibold text-navy underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              Spotify
            </a>{" "}
            and{" "}
            <a href={podcastShow.appleUrl} className="font-semibold text-navy underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              Apple Podcasts
            </a>
            .
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <h2>Latest episodes</h2>
          <p className="max-w-[42rem] text-gray-dark mb-xl">
            Newest uploads from the Sugar Spice and Spirits YouTube channel. Open an episode to watch it on YouTube.
          </p>
          <ul className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-lg list-none p-0">
            {podcastEpisodes.map((episode) => (
              <li key={episode.id}>
                <a
                  href={youtubeWatchUrl(episode.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-xs border border-[#ead9cf] bg-white shadow-brand-sm hover:border-[#7a2942]"
                >
                  <span className="relative block aspect-video bg-[#3c1424]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-md">
                    <time dateTime={episode.uploadDate} className="text-xs font-semibold uppercase tracking-[0.08em] text-[#7a2942]">
                      {episode.publishedLabel}
                    </time>
                    <span className="mt-xs text-base font-semibold text-navy group-hover:text-[#7a2942]">{episode.title}</span>
                    <span className="mt-auto pt-md text-sm font-semibold text-[#7a2942]">Watch on YouTube</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="bg-[#3c1424] text-[#f7f1ea]">
        <Container className="py-2xl">
          <h2 className="text-[#f7f1ea]">Watch the show on YouTube</h2>
          <p className="max-w-[40rem] text-[#f3e6dc] mb-lg">
            New episodes of Sugar Spice and Spirits are posted on the YouTube channel. Subscribe there so you do not miss one.
          </p>
          <PodcastYoutubeActions />
        </Container>
      </section>

      <Section>
        <Container>
          <h2>Episode transcripts</h2>
          <p className="max-w-[42rem] text-gray-dark">
            Written transcripts for episodes we have on file. The video for each episode is on YouTube.
          </p>
          <ul className="list-none p-0 mt-lg divide-y divide-gray-light border-y border-gray-light">
            {transcripts.map((transcript) => (
              <li key={transcript.slug}>
                <Link
                  href={`/podcast/transcripts/${transcript.slug}`}
                  className="flex flex-col gap-xs py-md text-navy hover:text-[#7a2942] sm:flex-row sm:items-baseline sm:gap-md"
                >
                  <span className="shrink-0 text-sm font-semibold text-[#7a2942]">Episode {transcript.episodeNumber}</span>
                  <span className="font-semibold">{transcript.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
