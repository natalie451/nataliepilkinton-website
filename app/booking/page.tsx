import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/ui/Callout";
import { ContactActions } from "@/components/cta/ContactActions";
import { TestimonialGrid } from "@/components/sections/Testimonial";
import { siteConfig } from "@/lib/data/navigation";
import { bookingTestimonials } from "@/lib/data/testimonials";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Book a Call with Natalie Pilkinton",
  description:
    "Book a call with Spring, TX REALTOR Natalie Pilkinton. Prefer to talk now? Call or text (832) 863-3468 or email natalie@nataliepilkinton.com.",
  path: "/booking",
});

const expectations = [
  "Personal one-on-one conversation",
  "Understanding your real estate goals",
  "Assessment of your current situation",
  "Customized action plan",
  "Next steps and timeline",
];

export default function BookingPage() {
  return (
    <>
      <Hero
        title="Book a time with Natalie"
        subheading="Pick a time on her calendar. If you would rather talk now, call or text."
      >
        <ContactActions tone="on-dark" showBook={false} />
      </Hero>

      <Section>
        <Container>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3xl">
            <div>
              <h2>What to Expect</h2>
              <Callout title="Your Strategy Session Includes:">
                <ul className="ml-lg list-disc">
                  {expectations.map((item) => (
                    <li key={item} className="mb-md">
                      {item}
                    </li>
                  ))}
                </ul>
              </Callout>
            </div>

            <div>
              <h2>Schedule your call</h2>
              <div className="bg-white border border-gray-light rounded-xs overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url={siteConfig.bookingUrl}
                  style={{ minWidth: "320px", height: "720px" }}
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                <p className="text-center text-gray-dark text-sm px-lg pb-lg mb-0">
                  If the calendar does not load,{" "}
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="text-gold-ink underline underline-offset-2">
                    open Calendly in a new tab
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-[48rem]">
          <h2 className="text-center">Google reviews</h2>
          <p className="text-center text-gray-dark mb-xl">
            These reviews are shown as written on Natalie&rsquo;s Google Business Profile.
          </p>
          <TestimonialGrid items={bookingTestimonials} onWhite />
          <p className="text-center mt-lg mb-0">
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-ink font-semibold underline underline-offset-2"
            >
              Read my Google reviews
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
