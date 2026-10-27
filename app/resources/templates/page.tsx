import type { Metadata } from "next";
import { ResourceListPage } from "@/components/content/ResourceListPage";
import { templates } from "@/lib/content/resources";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Templates",
  description: "Real estate templates and scripts for realtors, from Natalie Pilkinton.",
  path: "/resources/templates",
});

export default function TemplatesPage() {
  return (
    <ResourceListPage
      title="Templates"
      subheading="Templates and scripts to run a consistent, scalable business"
      breadcrumbs={[{ name: "Resources", path: "/resources" }, { name: "Templates", path: "/resources/templates" }]}
      intro="Email scripts, business-plan worksheets, and listing-presentation files are not published as downloads yet. These published pages are the current resources for agents and clients."
      links={[
        { href: "/resources/checklists/home-buyer-checklist", label: "Home buyer checklist" },
        { href: "/resources/checklists/pre-sale-checklist", label: "Pre-sale home checklist" },
        { href: "/join-my-team", label: "Join Natalie's team" },
        { href: "/referral-agent", label: "Refer a client to Natalie" },
      ]}
      items={templates}
    />
  );
}
