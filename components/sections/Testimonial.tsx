import type { Testimonial as TestimonialType } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils/cn";

export function Testimonial({ text, author, role, onWhite }: TestimonialType & { onWhite?: boolean }) {
  return (
    <div
      className={cn(
        "bg-blue text-cream p-xl mb-lg rounded-xs border-l-4 border-cream",
        onWhite && "bg-white text-ink border border-gray-light border-l-4 border-l-blue",
      )}
    >
      <div className={cn("text-lg italic leading-relaxed mb-lg", onWhite ? "text-ink" : "text-cream")}>
        &ldquo;{text}&rdquo;
      </div>
      <div className={cn("font-semibold mb-xs", onWhite ? "text-blue" : "text-cream")}>{author}</div>
      <div className={cn("text-sm", onWhite ? "text-gray-dark" : "text-cream/85")}>{role}</div>
    </div>
  );
}

export function TestimonialGrid({ items, onWhite }: { items: TestimonialType[]; onWhite?: boolean }) {
  return (
    <div className="max-w-[48rem] mx-auto">
      {items.map((item) => (
        <Testimonial key={item.author} {...item} onWhite={onWhite} />
      ))}
    </div>
  );
}
