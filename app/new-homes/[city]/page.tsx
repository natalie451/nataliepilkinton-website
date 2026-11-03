import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/data/navigation";
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

  return buildMetadata({
    title: `New homes in ${city.name}, TX`,
    description: `New construction in ${city.name}, TX. ${city.headline}. Tour with Natalie before you register at a builder model.`,
    path: `/new-homes/${city.slug}`,
  });
}

export default async function NewHomeCityPage({ params }: { params: Promise<Params> }) {
  const { city: slug } = await params;
  const city = getNewHomeCity(slug);
  if (!city) notFound();

  const { primary, linked } = communitiesForCity(city.slug);
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
      <Hero align="left" eyebrow={`${city.name}, TX`} title={`New homes in ${city.name}`} subheading={city.headline} />

      <Section>
        <Container>
          <p className="max-w-[46rem] text-gray-dark">{city.summary}</p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg mt-xl">
            {primary.map((community) => (
              <Link key={community.slug} href={`/new-homes/${community.citySlug}/${community.slug}`} className="block h-full">
                <article className="h-full border border-gray-light rounded-xs p-lg bg-white shadow-brand-sm border-t-4 border-t-blue">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue mb-sm">{community.developer}</p>
                  <h2 className="text-2xl mt-0 mb-sm">{community.name}</h2>
                  <p className="text-gray-dark">{community.priceNote}</p>
                  <span className="text-sm font-semibold text-blue">Tour {community.name}</span>
                </article>
              </Link>
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
            <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-md list-none p-0">
              {linked.map((community) => {
                const home = newHomeCities.find((item) => item.slug === community.citySlug);
                return (
                  <li key={community.slug}>
                    <Link href={`/new-homes/${community.citySlug}/${community.slug}`} className="text-blue font-semibold">
                      {community.name}
                    </Link>
                    <p className="text-gray-dark mb-0">Filed under {home?.name}. {community.address}</p>
                  </li>
                );
              })}
            </ul>
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
    </>
  );
}
