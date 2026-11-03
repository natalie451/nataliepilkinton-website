import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactActions } from "@/components/cta/ContactActions";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";
import { communitiesForCity, newHomeCities } from "@/lib/data/newHomes";

export const metadata: Metadata = buildMetadata({
  title: "New Homes in North Houston",
  description:
    "New construction in Conroe, Montgomery, Willis, Spring, Cypress, Waller, Porter, Splendora, and New Caney. Tour with Natalie before you register at a model.",
  path: "/new-homes",
});

export default function NewHomesPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "New Homes", path: "/new-homes" }]} />
      <Hero
        align="left"
        eyebrow="New construction"
        title="New homes north of Houston"
        subheading="Nine cities, with the communities and builders Natalie can tour with you. Facts come from developer and builder pages. Prices and school zones change."
      >
        <ContactActions tone="on-dark" bookHref={siteConfig.bookingUrl} bookLabel="Book a tour call" showEmail={false} />
      </Hero>

      <Section>
        <Container>
          <h2>Pick a city</h2>
          <p className="max-w-[46rem] text-gray-dark mb-xl">
            Register your own agent on the first visit to a model. Builders ask who represents you when you sign in.
            Natalie represents buyers at no cost to them in most cases, because the builder pays the buyer&apos;s agent
            compensation. Call or text {siteConfig.phone}.
          </p>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-lg">
            {newHomeCities.map((city) => {
              const { primary, linked } = communitiesForCity(city.slug);
              const count = primary.length + linked.length;
              return (
                <Link key={city.slug} href={`/new-homes/${city.slug}`} className="block h-full">
                  <article className="h-full flex flex-col border border-gray-light border-t-4 border-t-blue rounded-xs p-lg bg-white shadow-brand-sm hover:border-blue">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue mb-sm">
                      {count} {count === 1 ? "community" : "communities"}
                    </p>
                    <h3 className="mt-0 mb-sm text-2xl">{city.name}</h3>
                    <p className="text-gray-dark flex-1">{city.headline}</p>
                    <span className="text-sm font-semibold text-blue mt-md">View {city.name} communities</span>
                  </article>
                </Link>
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
            If a community you want is not listed, it is because a current developer or builder page was not available
            to cite. Ask Natalie to check it. She also has a shorter{" "}
            <Link href="/buyers/new-construction" className="text-blue font-semibold">
              new construction buying guide
            </Link>{" "}
            on how builder contracts differ from resale.
          </p>
          <Button href={siteConfig.bookingUrl} external>
            Book a call with Natalie
          </Button>
        </Container>
      </Section>
    </>
  );
}
