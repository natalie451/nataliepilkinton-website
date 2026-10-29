import type { Metadata } from "next";
import Link from "next/link";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card, CardTitle, CardCategory, CardDescription } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo/metadata";
import { MeetupCallout } from "@/components/content/MeetupCallout";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Investing in Spring, TX",
  description:
    "Invest in Spring, TX and Greater Houston with Natalie Pilkinton. She serves Greater Houston, especially north of I-10 up to Huntsville, including Houston, Conroe, The Woodlands, Tomball, Magnolia, and Huntsville. Call or text (832) 863-3468.",
  path: "/investors",
});

type Guide = { category: string; title: string; description: string; href?: string };

/** Ordered as a learning path; guides without an href are still being written. */
const learningPath: { step: string; guides: Guide[] }[] = [
  {
    step: "1. Start here",
    guides: [
      {
        category: "Guide",
        title: "How to Start Investing in Houston",
        description: "Your first rental, making the rent cover PITI, and Natalie's one-house-a-year plan.",
        href: "/investors/beginner",
      },
      {
        category: "Article",
        title: "How to Analyze an Investment Property",
        description: "Cap rate, cash-on-cash return, DSCR and price-to-rent, with the formulas.",
        href: "/blog/investing/analyze-investment-properties",
      },
    ],
  },
  {
    step: "2. Finance the deal",
    guides: [
      {
        category: "Guide",
        title: "DSCR Loans in Texas",
        description: "Qualify on the property's rent instead of your W-2 income.",
        href: "/investors/dscr-loans-texas",
      },
      {
        category: "Guide",
        title: "Private Lending",
        description: "Natalie is looking for private lenders and deal partners, plus her investor meetup.",
        href: "/investors/private-lending",
      },
    ],
  },
  {
    step: "3. Choose a strategy",
    guides: [
      {
        category: "Guide",
        title: "The BRRRR Strategy in Texas",
        description: "Buy, rehab, rent, refinance, and repeat, including refinance seasoning rules.",
        href: "/investors/brrrr",
      },
      { category: "Guide", title: "Multifamily Investing", description: "From duplexes to apartment buildings: how they're valued, financed and run.", href: "/investors/multifamily" },
      { category: "Guide", title: "Passive Investing", description: "How syndications work and how to vet an operator before you invest.", href: "/investors/passive" },
    ],
  },
  {
    step: "4. Run it like a business",
    guides: [
      {
        category: "Article",
        title: "Rental Property Management Essentials",
        description: "Screening, leases, rent collection and maintenance.",
        href: "/blog/investing/rental-property-management",
      },
      {
        category: "Article",
        title: "Houston Landlord-Tenant Laws",
        description: "Security deposits, evictions and fair housing basics.",
        href: "/blog/investing/houston-landlord-tenant-laws",
      },
      {
        category: "Directory",
        title: "Investor-Friendly Vendors",
        description: "Lenders, title companies and contractors who work with investors.",
        href: "/investors/vendors",
      },
    ],
  },
];

export default function InvestorsPage() {
  return (
    <AcademyLayout
      breadcrumbs={[{ name: "Investors", path: "/investors" }]}
      title="Invest in Spring, TX Real Estate"
      subheading="Rentals, financing, and strategy for Spring and Greater Houston, especially north of I-10 up to Huntsville, from a REALTOR who invests her own money."
      ctaTitle="Ready to talk through a deal?"
      ctaDescription="Call or text Natalie, or book a time to review your goals, your budget, and what a deal needs to look like."
      ctaLabel="Book an investor call"
    >
      <Section>
        <Container className="max-w-[52rem]">
          <p className="text-lg leading-relaxed">
            Natalie Pilkinton&rsquo;s step-by-step guide to investing in Spring, TX and the surrounding area. She is a
            REALTOR® with 20+ years in the market and an investor herself, with experience in rentals, wholesaling
            and multifamily syndication. Start with your first rental, learn how to finance it, then pick the
            strategy that fits your goals.
          </p>
          <p className="text-gray-dark">
            Real estate makes money six ways: cash flow, loan paydown, appreciation, tax advantages, leverage and
            access to your equity.{" "}
            <Link href="/investors/beginner" className="text-blue underline underline-offset-2 hover:text-navy">
              Here&rsquo;s how each one works
            </Link>
            .
          </p>
        </Container>
      </Section>

      {learningPath.map((group, index) => (
        <Section key={group.step} tone={index % 2 === 0 ? "light" : "default"}>
          <Container>
            <h2>{group.step}</h2>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
              {group.guides.map((guide) =>
                guide.href ? (
                  <Link key={guide.title} href={guide.href} className="block h-full">
                    <Card featured>
                      <CardCategory>{guide.category}</CardCategory>
                      <CardTitle>{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                      <span className="text-sm font-semibold text-blue">Read →</span>
                    </Card>
                  </Link>
                ) : (
                  <Card key={guide.title}>
                    <CardCategory>{guide.category}</CardCategory>
                    <CardTitle>{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </Card>
                ),
              )}
            </div>
          </Container>
        </Section>
      ))}

      <Section>
        <Container className="max-w-[52rem]">
          <MeetupCallout withSchema />
          <p className="text-gray-dark">
            The same meetup is covered on the{" "}
            <Link href="/investors/private-lending#investor-meetup" className="text-blue underline underline-offset-2 hover:text-navy">
              private lending page
            </Link>
            , with the group name and the Meetup.com link.
          </p>
          <p className="text-gray-dark">
            Between meetups, Natalie&rsquo;s monthly{" "}
            <Link href="/market-updates" className="text-blue underline underline-offset-2 hover:text-navy">
              Houston market update
            </Link>{" "}
            covers what the numbers mean for investors.
          </p>
        </Container>
      </Section>
    </AcademyLayout>
  );
}
