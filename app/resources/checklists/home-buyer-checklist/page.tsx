import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { EndCta } from "@/components/cta/EndCta";
import { GatedChecklist } from "@/components/content/GatedChecklist";
import { homeBuyerChecklist } from "@/lib/content/checklist";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Home Buyer's Checklist",
  description:
    "Everything you need before making an offer: pre-approval documents, loan options, closing cost budgeting, and what to do before you close. From Natalie Pilkinton's Home Buyer Masterclass.",
  path: "/resources/checklists/home-buyer-checklist",
});

export default function HomeBuyerChecklistPage() {
  return (
    <>
      <BreadcrumbBar
        items={[
          { name: "Resources", path: "/resources" },
          { name: "Checklists", path: "/resources/checklists" },
          { name: "Home Buyer's Checklist", path: "/resources/checklists/home-buyer-checklist" },
        ]}
      />

      <Hero
        title="Home Buyer's Checklist"
        subheading="Everything you need to know before making an offer, straight from Natalie's Home Buyer Masterclass."
        align="left"
      />

      <Section>
        <Container className="max-w-[42rem]">
          <GatedChecklist resource="buyer-checklist" sections={homeBuyerChecklist} />
        </Container>
      </Section>

      <EndCta audience="buyer" />
    </>
  );
}
