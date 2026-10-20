import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { HarListingsEmbed } from "@/components/listings/HarListingsEmbed";
import { ContactActions } from "@/components/cta/ContactActions";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Homes for Sale in Spring, TX",
  description:
    "Current listings from Natalie Pilkinton, a Spring, TX REALTOR with HomeRock Realty, pulled from her official HAR profile.",
  path: "/listings",
});

export default function ListingsPage() {
  return (
    <>
      <Hero
        title="Homes for sale around Spring, TX"
        subheading="Natalie's current listings, straight from her official HAR profile, so the details stay current."
        align="left"
      >
        <ContactActions tone="on-dark" />
      </Hero>

      <Section>
        <Container>
          <HarListingsEmbed />
        </Container>
      </Section>
    </>
  );
}
