import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type ContactActionsProps = {
  /** "on-dark" is for navy bands. "on-light" is for white or cream sections. */
  tone?: "on-dark" | "on-light";
  size?: "small" | "base" | "large";
  showEmail?: boolean;
  showBook?: boolean;
  showReview?: boolean;
  className?: string;
};

/** Call, text, book, and email. The same actions on every conversion point. */
export function ContactActions({
  tone = "on-light",
  size = "base",
  showEmail = true,
  showBook = true,
  showReview = false,
  className,
}: ContactActionsProps) {
  const secondary = tone === "on-dark" ? "outline-light" : "outline";
  const call = tone === "on-dark" ? "gold" : "primary";
  const stretch = "max-sm:w-full";

  return (
    <div className={cn("flex flex-wrap items-center gap-sm", className)}>
      <Button href={siteConfig.phoneHref} variant={call} size={size} className={stretch}>
        Call {siteConfig.phone}
      </Button>
      <Button href={siteConfig.smsHref} variant={secondary} size={size} className={stretch}>
        Text {siteConfig.phone}
      </Button>
      {showBook && (
        <Button href="/booking" variant={secondary} size={size} className={stretch}>
          Book a time
        </Button>
      )}
      {showEmail && (
        <Button href={siteConfig.emailHref} variant={secondary} size={size} className={stretch}>
          Email Natalie
        </Button>
      )}
      {showReview && (
        <Button href={siteConfig.googleReviewUrl} external variant={secondary} size={size} className={stretch}>
          Leave a Google review
        </Button>
      )}
    </div>
  );
}
