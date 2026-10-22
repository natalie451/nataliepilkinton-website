import { Button } from "@/components/ui/Button";
import { podcastShow } from "@/lib/data/podcast";

export function PodcastYoutubeActions({ subscribeVariant = "outline-light" }: { subscribeVariant?: "outline-light" | "outline" }) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button href={podcastShow.subscribeUrl} external variant="gold">
        Watch on YouTube
      </Button>
      <Button href={podcastShow.subscribeUrl} external variant={subscribeVariant}>
        Subscribe on YouTube
      </Button>
    </div>
  );
}
