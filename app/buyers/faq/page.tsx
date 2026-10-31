import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { FAQ } from "@/components/sections/FAQ";
import { EndCta } from "@/components/cta/EndCta";
import { buildMetadata } from "@/lib/seo/metadata";
import { buyerFaq } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer FAQ",
  description: "Answers to the most common questions from home buyers, from Natalie Pilkinton's Home Buyer Masterclass.",
  path: "/buyers/faq",
});

export default function BuyerFaqPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Home Buyers", path: "/buyers" }, { name: "FAQ", path: "/buyers/faq" }]} />

      <Hero
        title="Home Buyer FAQ"
        subheading="Answers to common buyer questions, straight from Natalie's Home Buyer Masterclass"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <FAQ items={buyerFaq} />
        </Container>
      </Section>

      <EndCta audience="buyer" />
    </>
  );
}
