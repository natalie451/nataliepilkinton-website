import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Callout } from "@/components/ui/Callout";
import { ContactActions } from "@/components/cta/ContactActions";
import { JoinInterestForm } from "@/components/forms/JoinInterestForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Join a Real Estate Team in Spring, TX / North Houston",
  absoluteTitle: true,
  description:
    "Join Natalie Pilkinton's real estate team in Spring, TX and North Houston. For licensed agents and new agents. Call or text (832) 863-3468, email natalie@nataliepilkinton.com, or book a call.",
  path: "/join-my-team",
});

const facts = [
  {
    label: "90/10 commission split",
    detail: "You keep 90%. The brokerage keeps 10%.",
  },
  {
    label: "50% revenue share on agents you bring in",
    detail: "This is the revenue share, also called revshare, on new agents you bring in.",
  },
  {
    label: "Bring in 3 agents",
    detail: "Bring in 3 agents and you pay $0 in monthly fees.",
  },
  {
    label: "$0 monthly fees",
    detail: "Monthly fees are $0 when you bring in 3 agents.",
  },
];

export default function JoinMyTeamPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Join My Team", path: "/join-my-team" }]} />

      <Hero
        title="Join a real estate team in Spring, TX"
        subheading="Natalie Pilkinton is building a team for licensed agents and for people who are new or still getting licensed. Spring is home base, and the work is across North Houston."
        align="left"
      >
        <ContactActions tone="on-dark" size="large" />
      </Hero>

      <Section>
        <Container>
          <h2>What Natalie has confirmed</h2>
          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-lg">
            {facts.map((fact) => (
              <article key={fact.label} className="border border-gray-light border-t-4 border-t-blue rounded-xs p-lg bg-white">
                <h3 className="text-xl mt-0 mb-sm">{fact.label}</h3>
                <p className="text-gray-dark mb-0">{fact.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Who this is for</h2>
          <p className="text-base leading-relaxed text-gray-dark">
            Licensed agents who want a team, and new or aspiring agents who are working toward a license. The first conversation can be a free commission audit, or a meeting with broker Cory Kammerdiener.
          </p>
          <h2>HomeRock Realty</h2>
          <dl className="grid grid-cols-1 gap-md mb-lg">
            <div>
              <dt className="font-semibold text-navy">Brokerage</dt>
              <dd className="text-gray-dark mb-0">HomeRock Realty</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Broker</dt>
              <dd className="text-gray-dark mb-0">Cory Kammerdiener</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Office</dt>
              <dd className="text-gray-dark mb-0">24624 Interstate 45 N, Ste 120, Spring, TX 77386</dd>
            </div>
            <div>
              <dt className="font-semibold text-navy">Team training</dt>
              <dd className="text-gray-dark mb-0">Weekly team training every Tuesday, 11:20 AM to 1:30 PM.</dd>
            </div>
          </dl>
          <Callout title="List Natalie Pilkinton as your referral">
            <p className="mb-0">When you join, list Natalie Pilkinton as your referral.</p>
          </Callout>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[40rem]">
          <h2>Tell Natalie you are interested</h2>
          <p className="text-gray-dark">
            Send your name and email. You can also call or text {siteConfig.phone}, email {siteConfig.email}, or book a call.
          </p>
          <JoinInterestForm />
        </Container>
      </Section>

      <CTA
        title="Talk with Natalie about joining"
        description="Call or text, email, or book a free commission audit or a meeting with Cory."
      >
        <ContactActions tone="on-dark" layout="equal" />
      </CTA>
    </>
  );
}
