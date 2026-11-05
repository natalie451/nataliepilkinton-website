import type { Metadata } from "next";
import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { CookieChoices } from "@/components/tracking/CookieChoices";
import { siteConfig } from "@/lib/data/navigation";
import { trackingConfig } from "@/lib/tracking/config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How this site uses cookies and the Meta Pixel for analytics and advertising, and how to opt out.",
  path: "/privacy",
});

const EFFECTIVE_DATE = "November 5, 2026";

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbBar items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <Hero title="Privacy Policy" subheading={`Effective ${EFFECTIVE_DATE}`} align="left" />

      <Section>
        <Container className="max-w-[48rem]">
          <Callout title="Template notice">
            <p className="mb-0">
              This is a standard-form privacy policy template for a real estate brokerage website. It has not
              been reviewed by an attorney and should be reviewed by HomeRock Realty&rsquo;s legal counsel before
              publishing, to confirm it accurately reflects actual data practices and complies with applicable
              state and federal law (including Texas Real Estate Commission requirements and, if collecting
              data from California residents, the CCPA).
            </p>
          </Callout>

          <h2>1. Information We Collect</h2>
          <p>When you visit {siteConfig.siteUrl.replace("https://", "")} or interact with our forms, we may collect:</p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">
              <strong>Information you provide directly</strong>, such as your name, email address, phone
              number, and message content when you submit a contact form, request a home valuation, or book a
              strategy session.
            </li>
            <li className="mb-md">
              <strong>Booking information</strong>, when you schedule a session through our Calendly booking
              link, that scheduling data is collected and processed by Calendly under their own privacy
              policy, not ours.
            </li>
            <li className="mb-md">
              <strong>Automatically collected information</strong>, such as IP address, browser type,
              device information, and pages visited, typically gathered through standard web server logs and any
              analytics tools we use.
            </li>
            <li className="mb-md">
              <strong>Cookies and similar tech</strong>, used for analytics and advertising when you accept
              the cookie notice. That notice stores your choice in this browser. See the next section.
            </li>
          </ul>

          <h2>2. Cookies, analytics, and advertising</h2>
          <p>
            This site uses cookies and similar tech for analytics and advertising. Those tools load only after
            you choose Accept on the cookie notice.
          </p>
          <p>
            After you accept, the site loads the Meta Pixel (pixel ID {trackingConfig.metaPixelId}) from Meta
            Platforms. The pixel sends a PageView when a page loads and when you move from page to page on this
            site. It sends a Lead event when a contact form, a tour request, or a join form is submitted
            successfully. That Lead event does not include the name, email, or phone number from the form. Meta
            may use the pixel for analytics and advertising, including retargeting.
          </p>
          <p>
            Accept and Decline are stored in this browser. Decline means the Meta Pixel is not loaded on later
            visits. If you already accepted, choosing Decline takes effect on the next page load. Cookies the
            pixel already saved stay until you clear them in your browser. You can also block cookies in your
            browser settings.
          </p>
          <p>
            Questions about this policy:{" "}
            <a href={siteConfig.emailHref}>{siteConfig.email}</a>.
          </p>
          <CookieChoices />

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">Respond to your inquiries and schedule requested consultations</li>
            <li className="mb-md">Provide the real estate services, resources, and content you request</li>
            <li className="mb-md">Send you requested materials, such as guides, checklists, or newsletter content</li>
            <li className="mb-md">Improve our website and better understand how visitors use it</li>
            <li className="mb-md">Measure visits and support advertising, including retargeting, when you accept cookies</li>
            <li className="mb-md">Comply with legal obligations applicable to licensed real estate professionals</li>
          </ul>

          <h2>4. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We may share information with:
          </p>
          <ul className="ml-lg list-disc mb-lg">
            <li className="mb-md">
              Service providers who help operate our website, scheduling, and communications (e.g., our booking
              platform, email provider, or hosting provider), bound to use your data only to provide those
              services.
            </li>
            <li className="mb-md">
              Meta Platforms, when you accept cookies, so the Meta Pixel can provide the analytics and
              advertising described above.
            </li>
            <li className="mb-md">
              Other parties to a transaction (such as lenders, title companies, or other agents) when necessary
              to facilitate a real estate transaction you&rsquo;ve engaged us for.
            </li>
            <li className="mb-md">Legal or regulatory authorities, when required by law.</li>
          </ul>

          <h2>5. Third-Party Content</h2>
          <p>
            Pages on this site embed content from third parties, including YouTube video and podcast players. These
            providers may collect data about your interaction with embedded content according to their own
            privacy policies.
          </p>

          <h2>6. Your Choices &amp; Rights</h2>
          <p>
            You may request access to, correction of, or deletion of the personal information we hold about you by
            contacting us using the information below. Depending on your state of residence, you may have
            additional rights under applicable privacy law.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We use reasonable administrative and technical safeguards to protect the information you share with us.
            No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>8. Children&rsquo;s Privacy</h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect personal information
            from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The &ldquo;Effective&rdquo; date above reflects
            the most recent revision.
          </p>

          <h2>10. Contact Us</h2>
          <p className="mb-0">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.line2}, {siteConfig.address.line3}
            <br />
            Phone: <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <br />
            Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </Container>
      </Section>
    </>
  );
}
