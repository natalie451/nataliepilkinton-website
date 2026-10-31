import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";
import { bookingTestimonials } from "@/lib/data/testimonials";

export type EndCtaAudience = "buyer" | "seller" | "investor" | "join" | "general";

const review = bookingTestimonials.find((item) => item.author === "Eric Adams");

const copy: Record<
  EndCtaAudience,
  { title: string; description: string; label: string; href: string; external?: boolean }
> = {
  buyer: {
    title: "Ready to talk about buying?",
    description: "Book a call with Natalie. She works with buyers in Spring and Greater Houston.",
    label: "Book a call",
    href: siteConfig.bookingUrl,
    external: true,
  },
  seller: {
    title: "What's my home worth?",
    description: "Natalie will follow up with a free market analysis.",
    label: "Get your home value",
    href: "/sellers/home-value",
  },
  investor: {
    title: "Talk with Natalie about a deal",
    description:
      "Book a call if you want to fund a real estate deal or partner on one. This is not an offer or a guarantee.",
    label: "Book a call",
    href: siteConfig.bookingUrl,
    external: true,
  },
  join: {
    title: "Talk with Natalie about joining",
    description: "Tell Natalie you are interested in the team. You can also call or text.",
    label: "Join my team",
    href: "/join-my-team#join-interest",
  },
  general: {
    title: "Talk with Natalie",
    description: "Book a call. She works with buyers, sellers, and investors in Spring and Greater Houston.",
    label: "Book a call",
    href: siteConfig.bookingUrl,
    external: true,
  },
};

/** One primary action at the end of a page, plus a call or text link. */
export function EndCta({ audience }: { audience: EndCtaAudience }) {
  const primary = copy[audience];

  return (
    <CTA title={primary.title} description={primary.description}>
      {review ? (
        <figure className="w-full max-w-[40rem] text-left bg-white/10 border border-cream/40 rounded-xs p-md">
          <blockquote className="text-cream text-base italic m-0">&ldquo;{review.text}&rdquo;</blockquote>
          <figcaption className="text-sm text-cream mt-sm mb-0">{review.author}, Google review</figcaption>
        </figure>
      ) : (
        <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="text-cream underline">
          Read my Google reviews
        </a>
      )}
      <Button href={primary.href} external={primary.external} variant="on-blue">
        {primary.label}
      </Button>
      <p className="text-cream text-sm mb-0">
        <a href={siteConfig.phoneHref} className="font-semibold text-cream underline underline-offset-2">
          Call
        </a>
        {" or "}
        <a href={siteConfig.smsHref} className="font-semibold text-cream underline underline-offset-2">
          text
        </a>{" "}
        {siteConfig.phone}
      </p>
    </CTA>
  );
}
