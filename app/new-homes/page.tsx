import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CommunityPhotoCard } from "@/components/new-homes/CommunityPhotoCard";
import { PhotoCredit } from "@/components/new-homes/PhotoCredit";
import { TourWithNatalieBar } from "@/components/new-homes/TourWithNatalieBar";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";
import { getCommunityGallery } from "@/lib/data/newHomePhotos";
import { communitiesForCity, newHomeCities, newHomeCommunities } from "@/lib/data/newHomes";

export const metadata: Metadata = buildMetadata({
  title: "New Homes in North Houston",
  description:
    "New homes north of I-10: Conroe, Tomball, Katy, Cypress, Humble, Crosby, and Dayton. Tour with Natalie before the builder registers you.",
  path: "/new-homes",
  image: "/new-homes/bridgeland/hero.webp",
});

const mosaicSlugs = ["bridgeland", "artavia", "the-highlands", "fairwater"] as const;

export default function NewHomesPage() {
  const mosaic = mosaicSlugs
    .map((slug) => {
      const gallery = getCommunityGallery(slug);
      const community = newHomeCommunities.find((item) => item.slug === slug);
      const photo = gallery?.photos[0];
      if (!gallery || !community || !photo) return null;
      return { community, gallery, photo };
    })
    .filter((item) => item !== null);

  return (
    <>
      <BreadcrumbBar items={[{ name: "New Homes", path: "/new-homes" }]} />
      <section className="relative isolate min-h-[82vh] overflow-hidden bg-blue text-cream">
        <div className="absolute inset-0 grid grid-cols-2">
          {mosaic.map((item) => (
            <div key={item.community.slug} className="relative min-h-[40vh]">
              <Image
                src={item.photo.src}
                alt=""
                fill
                priority={item.community.slug === "bridgeland"}
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a33] via-[#0a1a33]/88 to-[#0a1a33]/35" />
        <Container className="relative z-10 flex min-h-[82vh] flex-col justify-end py-3xl">
          <p className="mb-sm text-xs font-semibold uppercase tracking-[0.16em] text-cream">New construction</p>
          <h1 className="mb-md max-w-[14ch] text-cream">New homes north of Houston</h1>
          <p className="mb-lg max-w-[38rem] text-lg text-cream">
            Nine cities. Photographs and builder facts from each community website. Tour with Natalie before a model home registers an agent.
          </p>
          <div className="mb-md flex flex-wrap gap-sm">
            <Button href="#cities" variant="on-blue">See the communities</Button>
            <Button href={siteConfig.bookingUrl} external variant="on-blue">Book a tour call</Button>
          </div>
          <p className="mb-0 text-xs text-cream/85">
            Photos:{" "}
            {mosaic.map((item, index) => (
              <span key={item.community.slug}>
                {index > 0 ? ", " : ""}
                <a href={item.gallery.creditUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  {item.gallery.creditName}
                </a>
              </span>
            ))}
          </p>
        </Container>
      </section>

      <Section id="cities">
        <Container>
          <h2>Pick a community</h2>
          <p className="mb-xl max-w-[46rem] text-gray-dark">
            Register your own agent on the first visit to a model. Builders ask who represents you when you sign in.
            Natalie represents buyers at no cost to them in most cases, because the builder pays the buyer&apos;s agent
            compensation. Call or text {siteConfig.phone}.
          </p>
          <div className="flex flex-col gap-3xl">
            {newHomeCities.map((city) => {
              const { primary } = communitiesForCity(city.slug);
              return (
                <div key={city.slug}>
                  <div className="mb-lg flex flex-wrap items-end justify-between gap-sm">
                    <div>
                      <p className="mb-xs text-xs font-semibold uppercase tracking-[0.14em] text-blue">{city.headline}</p>
                      <h3 className="mb-0 mt-0 text-3xl">
                        <Link href={`/new-homes/${city.slug}`} className="text-navy hover:text-blue">
                          {city.name}
                        </Link>
                      </h3>
                    </div>
                    <Link href={`/new-homes/${city.slug}`} className="text-sm font-semibold text-blue">
                      {city.name} overview
                    </Link>
                  </div>
                  <div className="grid grid-cols-3 gap-lg max-lg:grid-cols-2 max-sm:grid-cols-1">
                    {primary.map((community) => (
                      <CommunityPhotoCard key={community.slug} community={community} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>What these pages will and will not tell you</h2>
          <p className="text-gray-dark">
            Each community page lists the developer, the builders named on the community site, published price language,
            amenities, and the school information that source actually printed. A &quot;from the $300s&quot; line is the
            builder&apos;s advertising price, not a quote. School zones change when districts redraw maps.
          </p>
          <p className="text-gray-dark">
            Photographs are downloaded from the community site named in the photo credit. If that site had no usable
            photograph, the card says so. Natalie also has a shorter{" "}
            <Link href="/buyers/new-construction" className="font-semibold text-blue">
              new construction buying guide
            </Link>
            .
          </p>
          <PhotoCredit name="Bridgeland" url="https://www.bridgeland.com/" />
          <div className="mt-lg">
            <Button href={siteConfig.bookingUrl} external>
              Book a call with Natalie
            </Button>
          </div>
        </Container>
      </Section>
      <div className="h-28" aria-hidden />
      <TourWithNatalieBar href="#cities" label="Tour a new home with Natalie" />
    </>
  );
}
