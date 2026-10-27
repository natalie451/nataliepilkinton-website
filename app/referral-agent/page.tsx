import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ContactActions } from "@/components/cta/ContactActions";
import { formatCityList, serviceAreas, serviceRegion, siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Referral Agent in Spring and Greater Houston",
  description:
    "Refer a buyer, seller, or investor to Natalie Pilkinton, REALTOR with HomeRock Realty in Spring, TX. She covers Greater Houston, especially north of I-10 up to Huntsville. Call or text (832) 863-3468.",
  path: "/referral-agent",
});

const faqs = [
  {
    question: "Who is Natalie Pilkinton?",
    answer: `Natalie Pilkinton is a REALTOR with HomeRock Realty in Spring, Texas. Her Texas Real Estate Commission sales agent license number is ${siteConfig.licenseNumber}. She works with buyers, sellers, and investors.`,
  },
  {
    question: "What area does she cover for a referral?",
    answer: `She serves ${serviceRegion}, including ${formatCityList(serviceAreas)}. Spring is home base.`,
  },
  {
    question: "How do I refer a client?",
    answer: `Call or text ${siteConfig.phone}, email ${siteConfig.email}, or book a time at ${siteConfig.bookingUrl}. Tell her you are an agent sending a referral, and include the client's name, phone, email, and whether they are buying, selling, or investing.`,
  },
  {
    question: "Does she work with relocation clients?",
    answer:
      "Yes. Her published buyer work includes relocation buyers, first-time buyers, and new construction buyers. If your client is moving into this area, send the referral and she will contact them.",
  },
  {
    question: "What referral fee does she pay?",
    answer:
      "This site does not publish a standard fee for an outside agent referral. Contact Natalie before you send the client so you can agree on the referral. A separate published program is HomeRock's in-house referral program: agents with the prerequisites in place can earn a 30% brokerage referral fee on brand-generated prospects. That program is described on the Agent Attraction page.",
  },
  {
    question: "Is this the same as joining her team?",
    answer:
      "No. Joining the team is for agents who want to work with Natalie at HomeRock Realty. A referral is for an agent who wants Natalie to represent a client in her service area. Published team terms, including the 90/10 split, are on the Join My Team page.",
  },
];

export default function ReferralAgentPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Referral agent", path: "/referral-agent" }]} />
      <Hero
        title="Referral agent for Spring and Greater Houston"
        subheading="Send Natalie a buyer, seller, or investor who needs a local REALTOR. She is with HomeRock Realty in Spring, TX."
        align="left"
      >
        <ContactActions tone="on-dark" />
      </Hero>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Who this page is for</h2>
          <p className="text-base leading-relaxed text-gray-dark">
            Agents outside this market, or agents who do not take this type of client, can refer the person to{" "}
            {siteConfig.name}. She serves {serviceRegion}, including {formatCityList(serviceAreas)}.
          </p>
          <h2>How a referral works</h2>
          <ol className="list-decimal pl-lg text-gray-dark">
            <li className="mb-sm">Contact Natalie before you send the client, so you can agree on the referral.</li>
            <li className="mb-sm">Share the client&apos;s name, phone, email, and whether they are buying, selling, or investing.</li>
            <li className="mb-sm">She contacts the client and handles the local work.</li>
          </ol>
          <p className="text-gray-dark">
            Phone and text {siteConfig.phone}. Email {siteConfig.email}. Book a time at{" "}
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-2">
              {siteConfig.bookingUrl}
            </a>
            .
          </p>
          <h2>Related pages</h2>
          <ul className="list-disc pl-lg">
            <li className="mb-sm">
              <Link href="/buyers/relocation" className="font-semibold text-navy underline underline-offset-2">
                Relocation buyers
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/join-my-team" className="font-semibold text-navy underline underline-offset-2">
                Join the team
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/realtors/agent-attraction" className="font-semibold text-navy underline underline-offset-2">
                HomeRock in-house referral program
              </Link>
            </li>
            <li className="mb-sm">
              <Link href="/contact" className="font-semibold text-navy underline underline-offset-2">
                Contact
              </Link>
            </li>
          </ul>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Referral questions</h2>
          <FAQ items={faqs} />
        </Container>
      </Section>

      <CTA
        title="Send a referral to Natalie"
        description={`Call or text ${siteConfig.phone}, email ${siteConfig.email}, or book a time.`}
      >
        <ContactActions tone="on-dark" />
      </CTA>
    </>
  );
}
