import { type ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type CTAProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** The recurring navy "accent" CTA band used at the bottom of most legacy pages. */
export function CTA({ title, description, children }: CTAProps) {
  return (
    <Section tone="accent">
      <Container>
        <div className="text-center max-w-[48rem] mx-auto flex flex-col items-center gap-md">
          <h2 className="text-white mb-0">{title}</h2>
          {description && <p className="text-cream text-lg mb-0">{description}</p>}
          <div className="flex w-full flex-wrap justify-center gap-sm">{children}</div>
        </div>
      </Container>
    </Section>
  );
}
