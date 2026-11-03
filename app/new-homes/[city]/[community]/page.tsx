import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoCredit } from "@/components/new-homes/PhotoCredit";
import { TourCommunityForm } from "@/components/new-homes/TourCommunityForm";
import { TourWithNatalieBar } from "@/components/new-homes/TourWithNatalieBar";
import { BuildersInCommunity } from "@/components/new-homes/BuilderPromotions";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";
import { amenityChips, getCommunityGallery, publishedPriceLabel, type CommunityPhoto } from "@/lib/data/newHomePhotos";
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

  const gallery = getCommunityGallery(community.slug);
  return buildMetadata({
    title: `${community.name} new homes in ${city.name}, TX`,
    description: `${community.name} in ${city.name}: ${community.developer}. ${community.priceNote}`.slice(0, 180),
    path: `/new-homes/${city.slug}/${community.slug}`,
    image: gallery?.photos[0]?.src,
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
  const gallery = getCommunityGallery(community.slug);
  const heroPhoto = gallery?.photos[0];
  const galleryPhotos = gallery?.photos.slice(1) ?? [];
  const price = publishedPriceLabel(community.priceNote);
  const chips = amenityChips(community.amenities);

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
      {heroPhoto && gallery ? (
        <section className="relative isolate flex min-h-[78vh] items-end overflow-hidden bg-blue text-cream">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className={heroPhoto.height > heroPhoto.width ? "object-cover" : "object-cover max-md:object-[center_72%]"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/75 to-[#0a1a33]/25" />
          <Container className="relative z-10 py-3xl max-md:pb-36">
            <p className="mb-sm text-xs font-semibold uppercase tracking-[0.16em] text-cream">{city.name}, TX</p>
            <h1 className="mb-sm max-w-[16ch] text-cream">{community.name}</h1>
            <p className="mb-md max-w-[40rem] text-lg text-cream">{community.developer}. {community.address}</p>
            <div className="mb-lg flex flex-wrap gap-sm">
              {price && (
                <span className="rounded-full bg-cream px-md py-xs text-sm font-semibold text-navy">{price}</span>
              )}
              {chips.map((chip) => (
                <span key={chip} className="rounded-full border border-cream/40 bg-[#0a1a33]/50 px-md py-xs text-sm text-cream">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mb-md flex flex-wrap gap-sm">
              <Button href="#tour" variant="on-blue">Tour {community.name} with Natalie</Button>
              <Button href={siteConfig.bookingUrl} external variant="on-blue">Book on Calendly</Button>
            </div>
            <PhotoCredit
              name={heroPhoto.creditName ?? gallery.creditName}
              url={heroPhoto.creditName ? undefined : gallery.creditUrl}
              tone="on-dark"
            />
          </Container>
        </section>
      ) : (
        <Hero
          align="left"
          eyebrow={`${city.name}, TX`}
          title={community.name}
          subheading={`${community.developer}. ${community.address}. The community site did not publish usable photographs.`}
        />
      )}

      {galleryPhotos.length > 0 && gallery && (
        <Section>
          <Container>
            <h2>Around {community.name}</h2>
            <p className="max-w-[42rem] text-gray-dark">
              {galleryPhotos.some((photo) => !photo.creditName)
                ? "Photographs from the community website are credited to that site. Any photo marked Natalie Pilkinton was taken by her."
                : "Photographs by Natalie Pilkinton."}
            </p>
            <CommunityPhotoGrid photos={galleryPhotos} />
            <div className="mt-md flex flex-col gap-xs">
              {galleryPhotos.some((photo) => !photo.creditName) ? (
                <PhotoCredit name={gallery.creditName} url={gallery.creditUrl} />
              ) : null}
              {galleryPhotos.some((photo) => photo.creditName === "Natalie Pilkinton") ? (
                <PhotoCredit name="Natalie Pilkinton" />
              ) : null}
            </div>
          </Container>
        </Section>
      )}

      {gallery?.interiorPhotos && gallery.interiorPhotos.length > 0 && (
        <Section>
          <Container>
            <h2>Inside {community.name} homes</h2>
            <p className="max-w-[42rem] text-gray-dark">
              Model homes photographed by Natalie Pilkinton.
            </p>
            <CommunityPhotoGrid photos={gallery.interiorPhotos} />
            <div className="mt-md">
              <PhotoCredit name="Natalie Pilkinton" />
            </div>
          </Container>
        </Section>
      )}

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

      <BuildersInCommunity community={community} />

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
      <div className="h-28" aria-hidden />
      <TourWithNatalieBar label={`Tour ${community.name} with Natalie`} />
    </>
  );
}

function CommunityPhotoGrid({ photos }: { photos: CommunityPhoto[] }) {
  return (
    <div className="grid grid-cols-3 gap-sm max-lg:grid-cols-2 max-sm:grid-cols-1">
      {photos.map((photo) => (
        <figure key={photo.src} className="m-0 overflow-hidden rounded-xs bg-cream">
          <div className="relative w-full" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-sm py-xs text-sm text-navy">
            <span className="block">{photo.alt}</span>
            {photo.creditName ? <span className="mt-xs block text-xs text-gray-dark">Photo: {photo.creditName}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
