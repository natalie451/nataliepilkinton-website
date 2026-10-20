import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";
import { ContactActions } from "@/components/cta/ContactActions";
import { ValuationForm } from "@/components/forms/ValuationForm";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "What's My Spring TX Home Worth",
  description:
    "Ask Natalie Pilkinton, a Spring, TX REALTOR, for a home value conversation. Call or text (832) 863-3468 or send the form.",
  path: "/sellers/home-value",
});

export default function HomeValuePage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Sellers", path: "/sellers" }, { name: "Home Value", path: "/sellers/home-value" }]} />

      <Hero
        title="What's my Spring, TX home worth?"
        subheading="Request a home value conversation. No obligation, and you can also call or text."
        align="left"
      >
        <ContactActions tone="on-dark" />
      </Hero>

      <Section>
        <Container className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
          <div>
            <h2>Request Your Estimate</h2>
            <ValuationForm />
          </div>
          <div>
            <h2>How Valuation Works</h2>
            <PlaceholderNotice note="Explainer copy for the CMA/valuation methodology is pending." />
          </div>
        </Container>
      </Section>
    </>
  );
}
