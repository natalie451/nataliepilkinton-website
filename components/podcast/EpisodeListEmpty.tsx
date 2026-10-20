/** Shown when the YouTube playlist is configured correctly but currently has no episodes. */
export function EpisodeListEmpty() {
  return (
    <div className="border-2 border-dashed border-gray-medium bg-gray-light rounded-xs p-lg text-center text-gray-dark">
      <p className="mb-0">No episodes are available yet. Check back soon.</p>
    </div>
  );
}
