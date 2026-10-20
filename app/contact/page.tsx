import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { ContactActions } from "@/components/cta/ContactActions";
import { formatCityList, serviceAreas, siteConfig } from "@/lib/data/navigation";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Natalie Pilkinton, Spring TX REALTOR",
  description:
    "Call or text (832) 863-3468, email natalie@nataliepilkinton.com, or book a time. Natalie Pilkinton serves Spring, Houston, Conroe, The Woodlands, Tomball, and Magnolia.",
  path: "/contact",
});

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "YouTube", href: siteConfig.social.youtube },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Natalie"
        subheading={`Call or text ${siteConfig.phone}, email ${siteConfig.email}, or book a time. Serving ${formatCityList(serviceAreas)}.`}
      >
        <ContactActions tone="on-dark" showReview />
      </Hero>

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl items-start">
            <div>
              <h2>Contact Information</h2>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Office Location</h4>
                <p className="mb-0">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                </p>
              </div>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Phone and text</h4>
                <p className="mb-sm">
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </p>
                <p className="mb-0">
                  <a href={siteConfig.smsHref}>Text {siteConfig.phone}</a>
                </p>
              </div>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Email</h4>
                <p className="mb-0">
                  <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                </p>
              </div>

              <div className="mb-2xl">
                <h4 className="mb-md text-lg">Book a time</h4>
                <p className="mb-sm">Pick a time on Natalie&rsquo;s calendar.</p>
                <Button href="/booking">Book a time</Button>
              </div>

              <div>
                <h4 className="mb-md text-lg">Follow Us</h4>
                <div className="flex gap-md flex-wrap">
                  {socialLinks.map((link) => (
                    <Button key={link.label} href={link.href} external variant="secondary" size="small">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
