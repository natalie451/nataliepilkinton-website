import { CallOrTextChoice } from "@/components/cta/CallOrTextChoice";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type ContactActionsProps = {
  /** "on-dark" is for blue bands. "on-light" is for white or cream sections. */
  tone?: "on-dark" | "on-light";
  size?: "small" | "base" | "large";
  showEmail?: boolean;
  showBook?: boolean;
  showReview?: boolean;
  /** Equal tiles share one shape. Hero keeps three equal buttons on one desktop row. */
  layout?: "inline" | "equal" | "hero";
  /** Defaults to the on-site booking page. Pass the Calendly URL when the button should open that calendar. */
  bookHref?: string;
  className?: string;
};

/** Call or text, book, and email. The same actions on every conversion point. */
export function ContactActions({
  tone = "on-light",
  size = "base",
  showEmail = true,
  showBook = true,
  showReview = false,
  layout = "inline",
  bookHref = "/booking",
  className,
}: ContactActionsProps) {
  const onBlue = tone === "on-dark";
  const callVariant = onBlue ? "on-blue" : "primary";
  const secondary = onBlue ? "on-blue" : "secondary";
  const equal = layout === "equal";
  const hero = layout === "hero";
  const stretch = equal ? "h-[6.25rem] w-full px-sm" : "max-sm:w-full";
  // Tight horizontal padding so "Email Natalie" stays on one line inside the hero column.
  const heroButton =
    "w-full min-w-0 px-3 text-base leading-tight min-h-14 lg:px-1.5 lg:text-sm lg:min-h-12 lg:whitespace-nowrap";
  const actionCount = 1 + Number(showBook) + Number(showEmail) + Number(showReview);
  const columns =
    actionCount >= 4
      ? "grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4"
      : actionCount === 3
        ? "grid-cols-1 sm:grid-cols-3"
        : actionCount === 2
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1";

  return (
    <div
      className={cn(
        hero
          ? "grid w-full grid-cols-1 items-stretch gap-sm lg:grid-cols-3"
          : equal
            ? cn("grid w-full items-stretch gap-sm", columns)
            : "flex flex-wrap items-center gap-sm",
        className,
      )}
    >
      <CallOrTextChoice
        variant={callVariant}
        size={size}
        className={hero ? "min-w-0 w-full" : stretch}
        buttonClassName={hero ? heroButton : undefined}
      />
      {showBook && (
        <Button
          href={bookHref}
          external={bookHref.startsWith("http")}
          variant={secondary}
          size={size}
          className={hero ? heroButton : stretch}
        >
          Book a time
        </Button>
      )}
      {showEmail && (
        <Button href={siteConfig.emailHref} variant={secondary} size={size} className={hero ? heroButton : stretch}>
          Email Natalie
        </Button>
      )}
      {showReview && (
        <Button href={siteConfig.googleReviewUrl} external variant={secondary} size={size} className={hero ? heroButton : stretch}>
          Leave a Google review
        </Button>
      )}
    </div>
  );
}
