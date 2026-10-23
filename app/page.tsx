import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Stats } from "@/components/sections/Stats";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { ContactActions } from "@/components/cta/ContactActions";
import { RealtorVideos } from "@/components/sections/RealtorVideos";
import { PodcastHomeBand } from "@/components/podcast/PodcastHomeBand";
import { TestimonialGrid } from "@/components/sections/Testimonial";
import { bookingTestimonials } from "@/lib/data/testimonials";
import { homeStats } from "@/lib/data/stats";
import { realtorChannelUrl } from "@/lib/data/videos";
import { formatCityList, serviceAreas, serviceRegion, siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Spring TX REALTOR | Natalie Pilkinton | Buy, Sell, or Invest",
  absoluteTitle: true,
  description:
    "Buy, sell, or invest in Spring, TX with REALTOR Natalie Pilkinton. She serves Greater Houston, especially north of I-10 up to Huntsville, including Houston, Conroe, The Woodlands, Tomball, Magnolia, and Huntsville. Call or text (832) 863-3468.",
  path: "/",
});

const paths = [
  {
    eyebrow: "Buyers",
    title: "Buy a home",
    body: "First-time buyers, move-up buyers, and people relocating into Spring and Greater Houston. Financing, offers, and closing, explained before you shop.",
    href: "/buyers",
    cta: "Start the buyer path",
    secondary: { href: "/listings", label: "See current listings" },
  },
  {
    eyebrow: "Sellers",
    title: "Sell a home",
    body: "Pricing, marketing, and a plan built around your timeline. Start with what the home may be worth, then map the steps to list.",
    href: "/sellers",
    cta: "Start the seller path",
    secondary: { href: "/sellers/home-value", label: "What's my home worth?" },
  },
  {
    eyebrow: "Investors",
    title: "Invest in property",
    body: "Rentals, financing, and strategy from a REALTOR who invests herself. Useful if you are buying your first rental or reviewing a deal.",
    href: "/investors",
    cta: "Start the investor path",
    secondary: { href: "/investors/beginner", label: "How to start investing" },
  },
  {
    eyebrow: "Agents",
    title: "Join my team",
    body: "For licensed agents and people working toward a license. Start with a free commission audit and a conversation about joining Natalie.",
    href: "/join-my-team",
    cta: "See how to join",
    secondary: { href: "/booking", label: "Book a call" },
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-white relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: "radial-gradient(50rem 24rem at 80% -10%, rgba(201,162,39,0.18), transparent 60%)",
          }}
        />
        <Container className="relative py-2xl md:py-3xl">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.16em] mb-md">Spring, TX REALTOR</p>
          <h1 className="text-white text-balance mb-lg max-w-[18ch] text-[clamp(2.15rem,1.2rem+3.2vw,3.75rem)] leading-[1.08]">
            Buy, sell, or invest with Natalie Pilkinton
          </h1>
          <p className="text-cream text-lg max-w-[40rem] mb-xl leading-relaxed">
            HomeRock Realty. Based in Spring, serving {serviceRegion}. Call or text{" "}
            <a href={siteConfig.phoneHref} className="text-white font-semibold underline underline-offset-2">
              {siteConfig.phone}
            </a>
            , or book a time that works for you.
          </p>
          <ContactActions tone="on-dark" size="large" />
        </Container>
      </section>

      <Section>
        <Container>
          <h2 id="paths" className="mb-sm">
            Choose your path
          </h2>
          <p className="max-w-[42rem] text-gray-dark mb-xl">
            Buyers, sellers, investors, and agents each have a next step. Pick the one that matches what you are doing right now.
          </p>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {paths.map((path) => (
              <article
                key={path.href}
                className="flex flex-col border border-gray-light border-t-4 border-t-gold rounded-xs p-lg bg-white shadow-brand-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-ink mb-sm">{path.eyebrow}</p>
                <h3 className="mt-0 mb-sm text-2xl">{path.title}</h3>
                <p className="text-gray-dark flex-1">{path.body}</p>
                <div className="flex flex-col items-start gap-sm mt-md">
                  <Button href={path.href}>{path.cta}</Button>
                  <Link href={path.secondary.href} className="text-sm font-semibold text-gold-ink underline underline-offset-2">
                    {path.secondary.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="google-reviews" tone="light">
        <Container>
          <h2 className="text-center">Google reviews</h2>
          <p className="text-center max-w-[40rem] mx-auto text-gray-dark mb-lg">
            These reviews are shown as written on Natalie&rsquo;s Google Business Profile.
          </p>
          <div className="flex justify-center mb-xl">
            <Button href={siteConfig.googleReviewUrl} external>
              Leave a Google review
            </Button>
          </div>
          <TestimonialGrid items={bookingTestimonials} onWhite />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Videos from Natalie</h2>
          <p className="max-w-[42rem] text-gray-dark mb-xl">
            Recent videos from her real estate channel: client stories and what is happening around north Houston.
          </p>
          <RealtorVideos />
          <div className="mt-lg">
            <Button href={realtorChannelUrl} external variant="secondary">
              Watch on YouTube
            </Button>
          </div>
        </Container>
      </Section>

      <PodcastHomeBand />

      <Section>
        <Container>
          <h2>Real estate in Spring and Greater Houston</h2>
          <p className="max-w-[44rem] text-gray-dark">
            Natalie is based at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}. Spring is home base. She serves {serviceRegion}, including{" "}
            {formatCityList(serviceAreas.slice(1))}.
          </p>
          <ul className="flex flex-wrap gap-sm list-none p-0 mt-lg mb-lg">
            {serviceAreas.map((market) => (
              <li key={market} className="px-md py-xs rounded-full border border-gray-light bg-white text-navy text-sm font-semibold">
                {market}, TX
              </li>
            ))}
          </ul>
          <Button href="/market-updates" variant="secondary">
            Read the latest market update
          </Button>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2 className="text-center">Experience you can ask about</h2>
          <p className="text-center max-w-[40rem] mx-auto text-gray-dark">
            These figures are the ones already published on this site. Ask Natalie how they apply to your situation.
          </p>
          <Stats stats={homeStats} />
        </Container>
      </Section>

      <CTA
        title="Talk with Natalie about your next move"
        description="Call or text, send an email, or pick a time. She works with buyers, sellers, and investors across Greater Houston, especially north of I-10 up to Huntsville."
      >
        <ContactActions tone="on-dark" layout="equal" />
      </CTA>
    </>
  );
}
