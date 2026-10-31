import type { Metadata } from "next";
import { AcademyLayout } from "@/layouts/AcademyLayout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Timeline } from "@/components/sections/Timeline";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ComingSoonButton } from "@/components/ui/ComingSoonButton";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { sellerJourney } from "@/lib/content/sellers";

export const metadata: Metadata = buildMetadata({
  title: "Sell a Home in Spring, TX",
  description:
    "Selling in Spring, TX or Greater Houston? Natalie Pilkinton serves Greater Houston, especially north of I-10 up to Huntsville, including Houston, Conroe, The Woodlands, Tomball, Magnolia, and Huntsville. Call or text (832) 863-3468.",
  path: "/sellers",
});

const modules = [
  { icon: "🏠", title: "Home Staging Tips", description: "Proven staging techniques to attract buyers and increase value" },
  { icon: "💵", title: "Pricing Strategy", description: "How to price your home competitively in your market" },
  { icon: "📸", title: "Marketing Your Home", description: "Best practices for photography, videos, and online listings" },
];

const resources = [
  {
    category: "Guide",
    title: "Pre-Sale Home Checklist",
    description: "Complete list of repairs and improvements to maximize sale price.",
    cta: { label: "Get the Checklist →", href: "/resources/checklists/pre-sale-checklist" },
  },
  { category: "Worksheet", title: "Comparative Market Analysis", description: "Analyze comparable homes to determine your home's value" },
  {
    category: "Request",
    title: "What's my home worth?",
    description: "Send your address and timeline. Natalie will follow up with a free market analysis.",
    cta: { label: "Get your home value", href: "/sellers/home-value" },
  },
];

export default function SellersPage() {
  return (
    <AcademyLayout
      breadcrumbs={[{ name: "Home Sellers", path: "/sellers" }]}
      title="Sell a Home in Spring, TX"
      subheading="Pricing, marketing, and a selling plan for homes in Spring and Greater Houston, especially north of I-10 up to Huntsville."
      audience="seller"
    >
      <Section>
        <Container>
          <h2>The Seller&rsquo;s Journey</h2>
          <Timeline steps={sellerJourney} />
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <h2>Learning Modules</h2>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-lg">
            {modules.map((module) => (
              <Card key={module.title}>
                <CardTitle>
                  {module.icon} {module.title}
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
                <ComingSoonButton />
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2>Key Resources</h2>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-lg">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </Container>
      </Section>
    </AcademyLayout>
  );
}
