import { type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Tone = "default" | "light" | "accent" | "hero";

const toneClasses: Record<Tone, string> = {
  default: "",
  light: "bg-white",
  accent: "bg-blue text-cream [&_h2]:text-cream [&_h3]:text-cream [&_p]:text-cream",
  hero: "bg-blue text-cream pt-[calc(var(--spacing-3xl)*1.5)] pb-[calc(var(--spacing-3xl)*1.5)] [&_h1]:text-cream [&_h2]:text-cream [&_p]:text-cream",
};

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
};

export function Section({ children, tone = "default", className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-3xl", toneClasses[tone], className)}>
      {children}
    </section>
  );
}
