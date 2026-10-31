import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FAQ } from "@/components/sections/FAQ";
import { ContactActions } from "@/components/cta/ContactActions";
import { EndCta } from "@/components/cta/EndCta";
import { formatCityList, serviceAreas, serviceRegion, siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Relocating to Spring and Greater Houston",
  description:
    "Moving to Spring, The Woodlands, Conroe, Tomball, Magnolia, Houston, or Huntsville? Natalie Pilkinton is a Spring, TX REALTOR with HomeRock Realty. Call or text (832) 863-3468.",
  path: "/buyers/relocation",
});

const faqs = [
  {
    question: "Can Natalie help if I am moving to Spring or north Houston?",
    answer: `Yes. She works with relocation buyers in ${serviceRegion}, including ${formatCityList(serviceAreas)}.`,
  },
  {
    question: "Do I have to already be in Texas to start?",
    answer: `No. Call or text ${siteConfig.phone}, email ${siteConfig.email}, or book a time, and tell her where you are moving from and your timing.`,
  },
  {
    question: "What should I do first?",
    answer:
      "Contact Natalie, then use the buyer guides for financing, cash to close, and the buying process. She does not publish a required order beyond that conversation.",
  },
  {
    question: "Can my current agent refer me?",
    answer:
      "Yes. Your agent can use the referral agent page to send you to Natalie. This site does not publish a standard outside-agent referral fee. The referring agent should contact Natalie before sending you.",
  },
];

export default function RelocationPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "Relocation", path: "/buyers/relocation" }]} />
      <Hero
        title="Relocating to Spring and Greater Houston"
        subheading={`Natalie Pilkinton helps relocation buyers in ${serviceRegion}.`}
        align="left"
      >
        <ContactActions tone="on-dark" />
      </Hero>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>What she can help with</h2>
          <p className="text-base leading-relaxed text-gray-dark">
            Relocation buyers are part of her published buyer work, along with first-time buyers and new construction
            buyers. She is based in Spring with {siteConfig.brand} and serves {formatCityList(serviceAreas)}.
          </p>
          <h2>Start here</h2>
          <ul className="list-disc pl-lg">
            <li className="mb-sm">
              <Link href="/buyers" className="font-semibold text-navy underline underline-offset-2">
                Buyer path
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/buyers/how-much-money-to-buy-a-house-houston" className="font-semibold text-navy underline underline-offset-2">
                How much money you need
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/buyers/process" className="font-semibold text-navy underline underline-offset-2">
                Home buying process
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/referral-agent" className="font-semibold text-navy underline underline-offset-2">
                For the agent referring you
              </Link>
            </li>
          </ul>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Relocation questions</h2>
          <FAQ items={faqs} />
        </Container>
      </Section>

      <EndCta audience="buyer" />
    </>
  );
}
