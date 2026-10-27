import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { calculators } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Calculators",
  description: "Real estate calculators for buyers and investors, from Natalie Pilkinton.",
  path: "/resources/calculators",
});

export default function CalculatorsPage() {
  return (
    <ResourceListPage
      title="Calculators"
      subheading="Interactive tools for budgeting, ROI, and cash flow"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Calculators", path: "/resources/calculators" }]}
      intro="This site does not host its own mortgage, ROI, or cash-flow calculators yet. The guides below are the published numbers and steps, and HAR hosts a rent versus buy calculator."
      links={[
        { href: "/buyers/how-much-money-to-buy-a-house-houston", label: "How much money do you need to buy a house in Houston?" },
        { href: "/buyers/closing-costs-texas", label: "Closing costs in Texas" },
        { href: "/investors/beginner", label: "How to start investing in Houston" },
        { href: "https://www.har.com/mortgage/time-value-calculators?CALCULATORID=HF05", label: "HAR rent versus buy calculator", external: true },
      ]}
      items={calculators}
    />
  );
}
