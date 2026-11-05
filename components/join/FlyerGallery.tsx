"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { joinFlyers } from "@/lib/content/joinTeam";

export function FlyerGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const active = index === null ? null : joinFlyers[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      setIndex((current) => {
        if (current === null) return current;
        return (current + delta + joinFlyers.length) % joinFlyers.length;
      });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  function step(delta: number) {
    setIndex((current) => {
      if (current === null) return current;
      return (current + delta + joinFlyers.length) % joinFlyers.length;
    });
  }

  return (
    <>
      <ul className="m-0 grid list-none grid-cols-2 gap-md p-0 md:grid-cols-3 xl:grid-cols-4">
        {joinFlyers.map((flyer, flyerIndex) => (
          <li key={flyer.src}>
            <button
              type="button"
              onClick={() => setIndex(flyerIndex)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xs border border-gray-light bg-white text-left shadow-brand-sm transition hover:border-blue hover:shadow-brand-md"
            >
              <span className="relative block aspect-[3/4] bg-cream">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-contain"
                />
              </span>
              <span className="block px-sm py-sm text-sm font-semibold text-ink">{flyer.title}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="m-auto max-h-[95vh] w-[calc(100%-1.5rem)] max-w-[52rem] border-0 bg-transparent p-0 backdrop:bg-[#0a1a33]/85"
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIndex(null);
        }}
      >
        {active ? (
          <div className="overflow-hidden rounded-xs bg-cream shadow-brand-lg">
            <div className="flex items-center justify-between gap-sm bg-blue px-md py-sm">
              <p id={titleId} className="m-0 text-base font-semibold text-cream">
                {active.title}
              </p>
              <button type="button" onClick={() => setIndex(null)} className="font-semibold text-cream underline underline-offset-2">
                Close
              </button>
            </div>
            <div className="bg-white p-sm">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(max-width: 768px) 100vw, 800px"
                className="mx-auto h-auto max-h-[75vh] w-auto max-w-full"
              />
            </div>
            <div className="flex justify-between gap-sm px-md py-sm">
              <button type="button" onClick={() => step(-1)} className="rounded-xs bg-blue px-md py-xs text-sm font-semibold text-white">
                Previous
              </button>
              <button type="button" onClick={() => step(1)} className="rounded-xs bg-blue px-md py-xs text-sm font-semibold text-white">
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
