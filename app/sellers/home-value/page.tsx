import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { ValuationForm } from "@/components/forms/ValuationForm";
import { siteConfig } from "@/lib/data/navigation";
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
        subheading="Send your address and timeline. Natalie will follow up with a free market analysis."
        align="left"
      />

      <Section>
        <Container className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
          <div>
            <h2 id="value-form">What&rsquo;s my home worth?</h2>
            <p className="text-gray-dark">Natalie will follow up with a free market analysis. This form does not produce an instant price.</p>
            <ValuationForm />
          </div>
          <div>
            <h2>Prefer to talk?</h2>
            <p className="text-gray-dark">
              <a href={siteConfig.phoneHref} className="font-semibold text-blue underline underline-offset-2">
                Call
              </a>{" "}
              or{" "}
              <a href={siteConfig.smsHref} className="font-semibold text-blue underline underline-offset-2">
                text
              </a>{" "}
              {siteConfig.phone}.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
