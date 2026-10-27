import { type ReactNode } from "react";
import { Hero } from "@/components/sections/Hero";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { ContactActions } from "@/components/cta/ContactActions";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { type Crumb } from "@/components/layout/Breadcrumbs";

type AcademyLayoutProps = {
  title: string;
  subheading: string;
  children: ReactNode;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref?: string;
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
  ctaTitle,
  ctaDescription,
  ctaLabel,
  ctaHref = "/booking",
  breadcrumbs,
}: AcademyLayoutProps) {
  return (
    <>
      {breadcrumbs && <BreadcrumbBar items={breadcrumbs} />}
      <Hero title={title} subheading={subheading} align="left">
        <ContactActions tone="on-dark" />
      </Hero>
      {children}
      <CTA title={ctaTitle} description={ctaDescription}>
        <Button href={ctaHref} variant="gold">
          {ctaLabel}
        </Button>
        <ContactActions tone="on-dark" showBook={ctaHref === "/booking" ? false : true} />
      </CTA>
    </>
  );
}
