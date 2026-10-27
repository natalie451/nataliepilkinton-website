"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

type MythRealityCardProps = {
  myth: string;
  reality: string;
};

export function MythRealityCard({ myth, reality }: MythRealityCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setRevealed((current) => !current)}
      className={cn(
        "text-left w-full h-full min-h-[10rem] p-lg rounded-xs border transition-all duration-200 cursor-pointer",
        revealed ? "bg-blue border-blue text-white" : "bg-white border-gray-light hover:border-blue",
      )}
    >
      <div className={cn("text-xs uppercase tracking-[0.1em] font-semibold mb-sm", revealed ? "text-cream" : "text-blue")}>
        {revealed ? "Reality" : "Myth"}
      </div>
      <p className={cn("text-base font-semibold leading-snug mb-sm", revealed ? "text-white" : "text-navy")}>
        {revealed ? reality : myth}
      </p>
      {!revealed && <p className="text-xs text-gray-dark mb-0">Tap to see the reality →</p>}
    </button>
  );
}
