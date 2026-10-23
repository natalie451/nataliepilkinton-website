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
  /** Equal tiles: two by two on small screens, one row of four from the md breakpoint. */
  layout?: "inline" | "equal";
  className?: string;
};

/** Call, text, book, and email. The same actions on every conversion point. */
export function ContactActions({
  tone = "on-light",
  size = "base",
  showEmail = true,
  showBook = true,
  showReview = false,
  layout = "inline",
  className,
}: ContactActionsProps) {
  const secondary = tone === "on-dark" ? "outline-light" : "outline";
  const call = tone === "on-dark" ? "gold" : "primary";
  const equal = layout === "equal";
  const stretch = equal ? "h-[6.25rem] w-full px-sm" : "max-sm:w-full";
  // On a navy band, filled white reads as a real button. A transparent link can look grayed out.
  const solidOnDark = equal && tone === "on-dark" ? "bg-white text-navy border-white hover:bg-gold hover:text-navy" : undefined;

  return (
    <div
      className={cn(
        equal ? "grid w-full grid-cols-2 items-stretch gap-sm md:grid-cols-4" : "flex flex-wrap items-center gap-sm",
        className,
      )}
    >
      <Button href={siteConfig.phoneHref} variant={call} size={size} className={stretch}>
        Call {siteConfig.phone}
      </Button>
      <Button href={siteConfig.smsHref} variant={secondary} size={size} className={cn(stretch, solidOnDark)}>
        Text {siteConfig.phone}
      </Button>
      {showBook && (
        <Button href="/booking" variant={secondary} size={size} className={cn(stretch, solidOnDark)}>
          Book a time
        </Button>
      )}
      {showEmail && (
        <Button href={siteConfig.emailHref} variant={secondary} size={size} className={cn(stretch, solidOnDark)}>
          Email Natalie
        </Button>
      )}
      {showReview && (
        <Button href={siteConfig.googleReviewUrl} external variant={secondary} size={size} className={cn(stretch, solidOnDark)}>
          Leave a Google review
        </Button>
      )}
    </div>
  );
}
