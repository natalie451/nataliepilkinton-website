import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CommunityPhotoCard } from "@/components/new-homes/CommunityPhotoCard";
import { PhotoCredit } from "@/components/new-homes/PhotoCredit";
import { TourWithNatalieBar } from "@/components/new-homes/TourWithNatalieBar";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";
import { getCommunityGallery } from "@/lib/data/newHomePhotos";
import { communitiesForCity, getNewHomeCity, newHomeCities, newHomeCommunities } from "@/lib/data/newHomes";

type Params = { city: string };

export function generateStaticParams() {
  return newHomeCities.map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getNewHomeCity(slug);
  if (!city) {
    return buildMetadata({
      title: "New homes",
      description: "New construction communities Natalie can tour with you.",
      path: "/new-homes",
    });
  }

  const cover = communitiesForCity(city.slug).primary
    .map((community) => getCommunityGallery(community.slug)?.photos[0]?.src)
    .find(Boolean);
  return buildMetadata({
    title: `New homes in ${city.name}, TX`,
    description: `New construction in ${city.name}, TX. ${city.headline}. Tour with Natalie before you register at a builder model.`,
    path: `/new-homes/${city.slug}`,
    image: cover,
  });
}

export default async function NewHomeCityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getNewHomeCity(slug);
  if (!city) notFound();

  const { primary, linked } = communitiesForCity(city.slug);
  const coverCommunity = primary.find((community) => getCommunityGallery(community.slug)?.photos[0]);
  const coverGallery = coverCommunity ? getCommunityGallery(coverCommunity.slug) : undefined;
  const coverPhoto = coverGallery?.photos[0];
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `New homes in ${city.name}, TX`,
    url: `${siteConfig.siteUrl}/new-homes/${city.slug}`,
    about: {
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "TX",
        addressCountry: "US",
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
        ]}
      />
      {coverPhoto && coverGallery ? (
        <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden bg-blue text-cream">
          <Image src={coverPhoto.src} alt={coverPhoto.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a33] via-[#0a1a33]/75 to-[#0a1a33]/20" />
          <Container className="relative z-10 py-3xl">
            <p className="mb-sm text-xs font-semibold uppercase tracking-[0.16em] text-cream">{city.name}, TX</p>
            <h1 className="mb-sm max-w-[16ch] text-cream">New homes in {city.name}</h1>
            <p className="mb-md max-w-[40rem] text-lg text-cream">{city.headline}</p>
            <PhotoCredit name={coverGallery.creditName} url={coverGallery.creditUrl} tone="on-dark" />
          </Container>
        </section>
      ) : null}

      <Section>
        <Container>
          <p className="max-w-[46rem] text-gray-dark">{city.summary}</p>
          <div className="mt-xl grid grid-cols-2 gap-lg max-md:grid-cols-1">
            {primary.map((community) => (
              <CommunityPhotoCard key={community.slug} community={community} />
            ))}
          </div>
        </Container>
      </Section>

      {linked.length > 0 && (
        <Section tone="light">
          <Container>
            <h2>Also searched with {city.name}</h2>
            <p className="max-w-[46rem] text-gray-dark mb-lg">
              These communities use more than one city name. The full page lives under the city that matches the
              published address or school zone.
            </p>
            <div className="grid grid-cols-2 gap-lg max-md:grid-cols-1">
              {linked.map((community) => (
                <CommunityPhotoCard key={community.slug} community={community} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section tone="accent">
        <Container className="max-w-[46rem]">
          <h2>Tour a {city.name} community with Natalie</h2>
          <p>
            Tell the builder Natalie Pilkinton is your agent before you sign the registration sheet. In most cases the
            builder pays her compensation, so bringing your own agent does not add a fee at the sales desk.
          </p>
          <div className="flex flex-wrap gap-sm">
            <Button href={siteConfig.bookingUrl} external variant="on-blue">
              Book a call
            </Button>
            <Button href={siteConfig.phoneHref} variant="on-blue">
              Call or text {siteConfig.phone}
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Other cities</h2>
          <ul className="flex flex-wrap gap-sm list-none p-0">
            {newHomeCities
              .filter((item) => item.slug !== city.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/new-homes/${item.slug}`}
                    className="inline-block px-md py-xs rounded-full border border-gray-light text-navy font-semibold"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-lg mb-0 text-sm text-gray-dark">
            {newHomeCommunities.length} community pages are on this site. Prices on every page are the figures the
            developer or builder published, and they change.
          </p>
        </Container>
      </Section>
      <div className="h-28" aria-hidden />
      <TourWithNatalieBar href={siteConfig.bookingUrl} label={`Tour a ${city.name} home with Natalie`} />
    </>
  );
}
