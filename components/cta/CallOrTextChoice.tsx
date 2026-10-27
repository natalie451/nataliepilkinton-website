"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type CallOrTextChoiceProps = {
  /** "bar" fills a cell in the mobile contact bar. "panel" is a cream pill in the chat. */
  variant: "bar" | "panel";
};

const choiceLink =
  "block whitespace-nowrap rounded-xs px-sm py-2 text-sm font-semibold text-navy hover:bg-white hover:text-navy";

export function CallOrTextChoice({ variant }: CallOrTextChoiceProps) {
  const [open, setOpen] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [box, setBox] = useState({ left: 12, bottom: 80 });
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useLayoutEffect(() => {
    if (!open) {
      setPlaced(false);
      return;
    }
    function place() {
      const button = buttonRef.current;
      const menu = menuRef.current;
      if (!button || !menu) return;
      const rect = button.getBoundingClientRect();
      const width = menu.offsetWidth;
      const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
      setBox({ left, bottom: window.innerHeight - rect.top + 8 });
      setPlaced(true);
    }
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (rootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const buttonClass =
    variant === "bar"
      ? "flex w-full items-center justify-center min-h-14 px-sm py-3 text-sm font-semibold text-white hover:text-gold"
      : "inline-flex items-center rounded-full border border-navy bg-[#f5eedc] px-sm py-1 text-sm font-semibold text-navy shadow-brand-sm hover:bg-white hover:text-navy";

  return (
    <div ref={rootRef} className={variant === "bar" ? "h-full" : "relative"}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={buttonClass}
      >
        Call or text
      </button>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label="Call or text Natalie"
            style={{ left: box.left, bottom: box.bottom }}
            className={cn(
              "fixed z-[1200] flex w-max flex-col gap-1 rounded-xs border border-navy bg-[#f5eedc] p-1 shadow-brand-md",
              placed ? "visible" : "invisible",
            )}
          >
            <a role="menuitem" href={siteConfig.phoneHref} className={choiceLink} onClick={() => setOpen(false)}>
              Call {siteConfig.phone}
            </a>
            <a role="menuitem" href={siteConfig.smsHref} className={choiceLink} onClick={() => setOpen(false)}>
              Text {siteConfig.phone}
            </a>
          </div>,
          document.body,
        )}
    </div>
  );
}
