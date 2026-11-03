import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TourCommunityForm } from "@/components/new-homes/TourCommunityForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";
import {
  communitiesForCity,
  getNewHomeCity,
  getNewHomeCommunity,
  newHomeCommunities,
} from "@/lib/data/newHomes";

type Params = { city: string; community: string };

export function generateStaticParams() {
  return newHomeCommunities.map((community) => ({
    city: community.citySlug,
    community: community.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: citySlug, community: communitySlug } = await params;
  const community = getNewHomeCommunity(citySlug, communitySlug);
  const city = getNewHomeCity(citySlug);
  if (!community || !city) {
    return buildMetadata({
      title: "New homes",
      description: "New construction communities Natalie can tour with you.",
      path: "/new-homes",
    });
  }

  return buildMetadata({
    title: `${community.name} new homes in ${city.name}, TX`,
    description: `${community.name} in ${city.name}: ${community.developer}. ${community.priceNote}`.slice(0, 180),
    path: `/new-homes/${city.slug}/${community.slug}`,
  });
}

export default async function NewHomeCommunityPage({ params }: { params: Promise<Params> }) {
  const { city: citySlug, community: communitySlug } = await params;
  const city = getNewHomeCity(citySlug);
  const community = getNewHomeCommunity(citySlug, communitySlug);
  if (!city || !community) notFound();

  const { primary } = communitiesForCity(city.slug);
  const siblings = primary.filter((item) => item.slug !== community.slug);
  const pagePath = `/new-homes/${city.slug}/${community.slug}`;

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: `${community.name} new homes`,
    url: `${siteConfig.siteUrl}${pagePath}`,
    description: community.summary,
    about: {
      "@type": "Place",
      name: community.name,
      description: community.summary,
      address: {
        "@type": "PostalAddress",
        streetAddress: community.address,
        addressLocality: city.name,
        addressRegion: "TX",
        addressCountry: "US",
      },
      containedInPlace: {
        "@type": "City",
        name: city.name,
      },
    },
  };

  return (
    <>
      <script {...jsonLdScriptProps(placeSchema)} />
      <BreadcrumbBar
        items={[
          { name: "New Homes", path: "/new-homes" },
          { name: city.name, path: `/new-homes/${city.slug}` },
          { name: community.name, path: pagePath },
        ]}
      />
      <Hero
        align="left"
        eyebrow={`${city.name}, TX`}
        title={community.name}
        subheading={`${community.developer}. ${community.address}`}
      />

      <Section>
        <Container className="max-w-[52rem]">
          <p className="text-gray-dark">{community.summary}</p>
          <p className="text-sm text-gray-dark">
            Prices, incentives, lot availability, and school zones change. The figures below are the ones published by
            the sources at the bottom of this page. Confirm them before you sign a builder contract.
          </p>
          <dl className="grid grid-cols-2 max-sm:grid-cols-1 gap-md mt-lg">
            <div className="bg-cream rounded-xs p-md">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue mb-xs">Price</dt>
              <dd className="mb-0 text-navy">{community.priceNote}</dd>
            </div>
            <div className="bg-cream rounded-xs p-md">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue mb-xs">Homes</dt>
              <dd className="mb-0 text-navy">{community.homes}</dd>
            </div>
            <div className="bg-cream rounded-xs p-md">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue mb-xs">Schools</dt>
              <dd className="mb-0 text-navy">
                <span className="font-semibold">{community.schoolDistrict}. </span>
                {community.schools}
              </dd>
            </div>
            <div className="bg-cream rounded-xs p-md">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-blue mb-xs">Location</dt>
              <dd className="mb-0 text-navy">{community.location}</dd>
            </div>
          </dl>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Builders</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
            {community.builders.map((builder) => (
              <article key={builder.name} className="border border-gray-light bg-white rounded-xs p-lg">
                <h3 className="mt-0 mb-sm text-xl">{builder.name}</h3>
                <p className="mb-0 text-gray-dark">{builder.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Amenities</h2>
          <ul className="text-gray-dark">
            {community.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="tour" tone="accent">
        <Container>
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-xl items-start">
            <div>
              <h2>Tour {community.name} with Natalie</h2>
              <p>
                Builders ask you to name your agent the first time you walk into a model. That registration can stick
                for later homes in the same community. Bring Natalie with you, or tell the sales office she is your
                agent before you sign in.
              </p>
              <p>
                In most new-home purchases she represents buyers at no cost to them. The builder pays the buyer&apos;s
                agent compensation. She will confirm that builder&apos;s policy before you visit, compare the sections
                you like, and keep incentives in writing.
              </p>
              <div className="flex flex-wrap gap-sm">
                <Button href={siteConfig.bookingUrl} external variant="on-blue">
                  Book on Calendly
                </Button>
                <Button href={siteConfig.phoneHref} variant="on-blue">
                  Call or text {siteConfig.phone}
                </Button>
              </div>
            </div>
            <div className="bg-cream text-navy rounded-xs p-lg [&_h3]:text-navy [&_p]:text-navy">
              <h3 className="mt-0 text-navy">Ask Natalie to schedule the tour</h3>
              <TourCommunityForm communityName={community.name} resource={`new-homes-${community.slug}`} />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Questions about {community.name}</h2>
          <FAQ items={community.faqs} />
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Sources</h2>
          <p className="text-gray-dark">
            These are the developer, builder, and district pages used for this guide. Natalie does not control those
            sites, and they can change a price or a zone without notice.
          </p>
          <ul>
            {community.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue font-semibold">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          {siblings.length > 0 && (
            <>
              <h3>More new homes in {city.name}</h3>
              <ul className="list-none p-0 flex flex-col gap-sm">
                {siblings.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/new-homes/${city.slug}/${item.slug}`} className="text-blue font-semibold">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link href={`/new-homes/${city.slug}`} className="text-blue font-semibold">
            All {city.name} communities
          </Link>
        </Container>
      </Section>
    </>
  );
}
