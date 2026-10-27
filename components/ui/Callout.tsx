import { type ReactNode } from "react";

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-cream border-l-4 border-blue p-lg my-xl rounded-xs">
      <div className="font-semibold text-navy mb-md">{title}</div>
      {children}
    </div>
  );
}
