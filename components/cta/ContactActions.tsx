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
  /** Equal tiles so Call or text, Book a time, and Email share one shape. */
  layout?: "inline" | "equal";
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
  className,
}: ContactActionsProps) {
  const onBlue = tone === "on-dark";
  const callVariant = onBlue ? "on-blue" : "primary";
  const secondary = onBlue ? "on-blue" : "secondary";
  const equal = layout === "equal";
  const stretch = equal ? "h-[6.25rem] w-full px-sm" : "max-sm:w-full";
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
        equal ? cn("grid w-full items-stretch gap-sm", columns) : "flex flex-wrap items-center gap-sm",
        className,
      )}
    >
      <CallOrTextChoice variant={callVariant} size={size} className={stretch} />
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
