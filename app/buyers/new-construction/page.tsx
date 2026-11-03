import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { EndCta } from "@/components/cta/EndCta";
import { buildMetadata } from "@/lib/seo/metadata";
import { BuyerSeminarCallout } from "@/components/content/BuyerSeminarCallout";
import { buyerFaq } from "@/lib/content/buyers";

export const metadata: Metadata = buildMetadata({
  title: "New Construction Buying Guide",
  description: "What to know before buying a new construction home in Texas, and why representation still matters.",
  path: "/buyers/new-construction",
});

const newConstructionFaq = buyerFaq.find((item) => item.question.includes("builder"))!;

export default function NewConstructionPage() {
  return (
    <>
      <BreadcrumbBar
        items={[{ name: "Home Buyers", path: "/buyers" }, { name: "New Construction", path: "/buyers/new-construction" }]}
      />

      <Hero
        title="New Construction Buying Guide"
        subheading="How buying new construction differs from resale, and why you still need a Realtor"
        align="left"
      />

      <Section>
        <Container className="max-w-[48rem]">
          <h2>{newConstructionFaq.question}</h2>
          <p className="text-base leading-relaxed text-gray-dark mb-md">{newConstructionFaq.answer}</p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[48rem]">
          <h2>New homes by city</h2>
          <p className="text-gray-dark">
            If you already know the community, start with the city page. Each one links to builder facts Natalie sourced
            from the developer sites, plus a way to tour with her before you register at the model.
          </p>
          <Button href="/new-homes">Browse new homes</Button>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-[52rem]">
          <BuyerSeminarCallout />
        </Container>
      </Section>

      <EndCta audience="buyer" />
    </>
  );
}
