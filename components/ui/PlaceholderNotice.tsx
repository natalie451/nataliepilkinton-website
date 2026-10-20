/**
 * Marks a page/section as awaiting real copy, per the content-architecture spec:
 * no statistics, testimonials, or claims should be fabricated to fill these pages.
 */
export function PlaceholderNotice({ note }: { note?: string }) {
  return (
    <div className="border-2 border-dashed border-gray-medium bg-gray-light rounded-xs p-lg text-center text-gray-dark italic">
      <p className="mb-0">
        Content pending. This section will be filled in from Natalie&rsquo;s notes.
        {note ? ` ${note}` : ""}
      </p>
    </div>
  );
}
