import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PodcastYoutubeActions } from "@/components/podcast/PodcastYoutubeActions";
import { podcastShow } from "@/lib/data/podcast";
import { episodeLabel, getPodcastEpisodeIndex } from "@/lib/content/podcastEpisodes";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Sugar Spice and Spirits Podcast",
  description:
    "Sugar Spice and Spirits, hosted by Natalie Pilkinton, Mindy Price, and Kelly Williams. Watch and subscribe on YouTube.",
  path: "/podcast",
});

export default function PodcastPage() {
  const episodes = getPodcastEpisodeIndex();
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
      {
        "@type": "ItemList",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: episodes.length,
        itemListElement: episodes.map((episode, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: episode.title,
          url: `${showUrl}/${episode.slug}`,
        })),
      },
    ],
  };

  return (
    <>
      <script {...jsonLdScriptProps(podcastSchema)} />

      <section className="bg-cream text-navy border-b border-gray-light">
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
          <h2>Episodes</h2>
          <p className="max-w-[42rem] text-gray-dark mb-xl">
            Newest first. Each page has a short summary and the full transcript. When the episode is on YouTube, the player is at the top.
          </p>
          <ul className="list-none p-0 m-0 divide-y divide-gray-light border-y border-gray-light">
            {episodes.map((episode) => {
              const label = episodeLabel(episode.episodeNumber);
              return (
                <li key={episode.slug}>
                  <Link
                    href={`/podcast/${episode.slug}`}
                    className="group flex flex-col gap-md py-md text-navy hover:text-blue sm:flex-row sm:items-start"
                  >
                    {episode.youtubeId ? (
                      <span className="relative block aspect-video w-full shrink-0 overflow-hidden rounded-xs bg-blue sm:w-40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://i.ytimg.com/vi/${episode.youtubeId}/hqdefault.jpg`}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </span>
                    ) : (
                      <span className="hidden sm:flex aspect-video w-40 shrink-0 items-center justify-center rounded-xs bg-cream text-xs font-semibold uppercase tracking-[0.08em] text-navy">
                        Transcript
                      </span>
                    )}
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-blue">
                        {[label, episode.publishedLabel].filter(Boolean).join(" · ")}
                      </span>
                      <span className="mt-xs text-lg font-semibold group-hover:text-blue">{episode.title}</span>
                      <span className="mt-xs text-sm leading-relaxed text-gray-dark">{episode.summary}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <section className="bg-blue text-cream">
        <Container className="py-2xl">
          <h2 className="text-cream">Watch the show on YouTube</h2>
          <p className="max-w-[40rem] text-cream mb-lg">
            New episodes of Sugar Spice and Spirits are posted on the YouTube channel. Subscribe there so you do not miss one.
          </p>
          <PodcastYoutubeActions watchVariant="on-blue" subscribeVariant="on-blue" />
        </Container>
      </section>
    </>
  );
}
