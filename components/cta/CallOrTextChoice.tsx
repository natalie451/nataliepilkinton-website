"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type CallOrTextChoiceProps = {
  /** bar: mobile contact bar. panel: chat pill. Others match site buttons. */
  variant: "bar" | "panel" | "primary" | "secondary" | "on-blue";
  size?: "small" | "base" | "large";
  className?: string;
  /** Applied to the button only. className still styles the wrapper and, when this is omitted, the button. */
  buttonClassName?: string;
};

const choiceLink =
  "block whitespace-nowrap rounded-xs px-sm py-2 text-sm font-semibold text-blue hover:bg-white";

export function CallOrTextChoice({ variant, size = "base", className, buttonClassName }: CallOrTextChoiceProps) {
  const [open, setOpen] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [box, setBox] = useState<{ left: number; top?: number; bottom?: number }>({ left: 12, bottom: 80 });
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
      const height = menu.offsetHeight;
      const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
      const spaceBelow = window.innerHeight - rect.bottom;
      if (spaceBelow >= height + 16) {
        setBox({ left, top: rect.bottom + 8, bottom: undefined });
      } else {
        setBox({ left, top: undefined, bottom: window.innerHeight - rect.top + 8 });
      }
      setPlaced(true);
    }
    place();
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
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
      ? "flex h-full w-full items-center justify-center min-h-14 px-sm py-3 text-sm font-semibold text-cream hover:bg-white/10"
      : variant === "panel"
        ? "inline-flex items-center rounded-full border border-blue bg-cream px-sm py-1 text-sm font-semibold text-ink shadow-brand-sm hover:bg-white"
        : cn(buttonBaseClasses, buttonVariantClasses[variant], buttonSizeClasses[size]);

  return (
    <div ref={rootRef} className={cn(variant === "bar" ? "h-full" : "relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className={cn(buttonClass, buttonClassName ?? className)}
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
            style={{ left: box.left, top: box.top, bottom: box.bottom }}
            className={cn(
              "fixed z-[1200] flex w-max min-w-[12rem] flex-col gap-1 rounded-xs border-2 border-blue bg-cream p-1 shadow-brand-md",
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
