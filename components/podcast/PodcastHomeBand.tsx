import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { podcastShow } from "@/lib/data/podcast";

/** Homepage band for the show. Visually separate from the real estate video grid. */
export function PodcastHomeBand() {
  return (
    <section className="bg-[#3c1424] text-[#f7f1ea]">
      <Container className="py-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e7c4b0] mb-sm">Podcast</p>
        <h2 className="text-[#f7f1ea] mb-sm max-w-[20ch]">Sugar Spice and Spirits</h2>
        <p className="max-w-[40rem] text-[#f3e6dc] mb-lg">
          Hosted by Natalie Pilkinton, Mindy Price, and Kelly Williams. Conversations on business, life, and real estate.
          New episodes are on YouTube.
        </p>
        <Button href={podcastShow.subscribeUrl} external variant="gold">
          Watch on YouTube
        </Button>
        <p className="mt-md mb-0 text-sm">
          <Link href="/podcast" className="text-[#f7f1ea] underline underline-offset-2 font-semibold">
            See the latest episodes
          </Link>
        </p>
      </Container>
    </section>
  );
}
