import { Button } from "@/components/ui/Button";
import { podcastShow } from "@/lib/data/podcast";

export function PodcastYoutubeActions({
  subscribeVariant = "outline",
  watchVariant = "primary",
}: {
  subscribeVariant?: "outline-light" | "outline" | "on-blue" | "primary";
  watchVariant?: "primary" | "on-blue";
}) {
  return (
    <div className="flex flex-wrap gap-sm">
      <Button href={podcastShow.subscribeUrl} external variant={watchVariant}>
        Watch on YouTube
      </Button>
      <Button href={podcastShow.subscribeUrl} external variant={subscribeVariant}>
        Subscribe on YouTube
      </Button>
    </div>
  );
}
