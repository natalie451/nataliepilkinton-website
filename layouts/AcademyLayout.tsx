import { type ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { ContactActions } from "@/components/cta/ContactActions";
import { EndCta, type EndCtaAudience } from "@/components/cta/EndCta";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { type Crumb } from "@/components/layout/Breadcrumbs";

type AcademyLayoutProps = {
  title: string;
  subheading: string;
  children: ReactNode;
  audience: EndCtaAudience;
  breadcrumbs?: Crumb[];
};

/**
 * Shared shell for the hub pages (Buyers, Sellers, Investors, Realtors):
 * left-aligned hero with contact actions, freeform body, and a closing CTA.
 */
export function AcademyLayout({
  title,
  subheading,
  children,
  audience,
  breadcrumbs,
}: AcademyLayoutProps) {
  return (
    <>
      {breadcrumbs && <BreadcrumbBar items={breadcrumbs} />}
      <Hero title={title} subheading={subheading} align="left">
        <ContactActions tone="on-dark" />
      </Hero>
      {children}
      <EndCta audience={audience} />
    </>
  );
}
