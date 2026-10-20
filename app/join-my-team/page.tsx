import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = buildMetadata({
  title: "Join My Team | HomeRock Realty, Spring TX",
  description:
    "Join Natalie Pilkinton's team at HomeRock Realty in Spring, TX. Start with a free commission audit, or meet broker Cory Kammerdiener. Team training is every Tuesday, 11:20 AM to 1:30 PM.",
  path: "/join-my-team",
});

const auditUrl = siteConfig.bookingUrl;

export default function JoinMyTeamPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Join My Team", path: "/join-my-team" }]} />

      <Hero
        title="Join my team"
        subheading="The first step is a free commission audit. See what you keep, and what it costs you, before you decide where to hang your license."
        align="left"
      >
        <Button href={auditUrl} external variant="gold" size="large">
          Book a free commission audit or a meeting with Cory
        </Button>
      </Hero>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Start with a free commission audit</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">
            Natalie Pilkinton recruits agents onto her team at HomeRock Realty. A free commission audit is the main conversation: what you earn, what you pay, and whether a move makes sense.
          </p>
          <p className="text-base leading-relaxed text-gray-dark mb-0">
            You can book that audit, or a meeting with broker Cory Kammerdiener, on the same calendar.
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
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
          {/*
            Stat boxes withheld until Natalie confirms what these numbers mean.
            Do not render 90/10, 50%, 3, or $0 until she explains each one.
          */}
        </Container>
      </Section>

      <CTA
        title="Book a free commission audit or a meeting with Cory"
        description="Pick a time on Natalie's calendar. The audit is free."
      >
        <Button href={auditUrl} external variant="gold" size="large">
          Book a free commission audit or a meeting with Cory
        </Button>
      </CTA>
    </>
  );
}
