import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { EndCta } from "@/components/cta/EndCta";
import { buildMetadata } from "@/lib/seo/metadata";
import { missionVision, commissionStructure, founders } from "@/lib/content/realtors";

export const metadata: Metadata = buildMetadata({
  title: "Join HomeRock Realty",
  description: "Join HomeRock Realty as an individual agent or on a team. Mission, commission structure, and founders.",
  path: "/realtors/join",
});

export default function JoinPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Realtors", path: "/realtors" }, { name: "Join HomeRock Realty", path: "/realtors/join" }]} />

      <Hero
        title="Join HomeRock Realty"
        subheading="Join as an individual agent or join a team. See what makes HomeRock Realty different for growth-minded agents."
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Our Vision &amp; Mission</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{missionVision.vision}</p>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{missionVision.mission}</p>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2>Commission Structure</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">
            <strong className="text-navy">{commissionStructure.split}</strong> with a{" "}
            <strong className="text-navy">{commissionStructure.cap}</strong>.
          </p>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{commissionStructure.example}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>Who You&rsquo;ll Be Working With</h2>
          {founders.map((founder) => (
            <div key={founder.name} className="mb-lg">
              <h3 className="mb-sm">{founder.name}</h3>
              <p className="text-base leading-relaxed text-gray-dark">{founder.bio}</p>
            </div>
          ))}
        </Container>
      </Section>

      <EndCta
        audience="join"
        description="Join HomeRock Realty as an individual agent or join a team. You can also call or text."
        label="Join HomeRock"
      />
    </>
  );
}
