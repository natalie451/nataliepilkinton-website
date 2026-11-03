import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/data/navigation";

/** Sits above the sitewide mobile contact bar, and on the bottom edge from tablet up. */
export function TourWithNatalieBar({
  href = "#tour",
  label = "Tour with Natalie",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-14 z-[1090] border-t border-white/15 bg-blue md:bottom-0">
      <Container className="flex items-center justify-between gap-sm py-sm">
        <p className="mb-0 hidden font-semibold text-cream sm:block">{label}</p>
        <div className="flex w-full gap-sm sm:w-auto">
          <Button
            href={href}
            external={href.startsWith("http")}
            variant="on-blue"
            size="small"
            className="flex-1 sm:flex-none"
          >
            Tour with Natalie
          </Button>
          <Button href={siteConfig.phoneHref} variant="on-blue" size="small" className="flex-1 sm:flex-none">
            Call or text
          </Button>
        </div>
      </Container>
    </div>
  );
}
