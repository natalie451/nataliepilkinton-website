"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils/cn";

type EmailAddressProps = {
  className?: string;
  linkClassName?: string;
  /** "on-dark" is for blue bands. "on-light" is for white or cream sections. */
  tone?: "on-dark" | "on-light";
  /** Show a button that copies the address for visitors without a mail app. */
  copy?: boolean;
};

/** Visible address plus a mailto link, so the address can be read or copied when no mail app opens. */
export function EmailAddress({ className, linkClassName, tone = "on-light", copy = true }: EmailAddressProps) {
  const [copied, setCopied] = useState(false);
  const onDark = tone === "on-dark";

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <span className={cn("inline-flex max-w-full flex-wrap items-center gap-xs", className)}>
      <a
        href={siteConfig.emailHref}
        className={cn(
          "font-semibold underline underline-offset-2 break-all",
          onDark ? "text-cream hover:text-white" : "text-blue",
          linkClassName,
        )}
      >
        {siteConfig.email}
      </a>
      {copy && (
        <button
          type="button"
          onClick={copyAddress}
          className={cn(
            "inline-flex min-h-11 items-center rounded-xs border px-sm py-1 text-sm font-semibold",
            onDark
              ? "border-cream bg-transparent text-cream hover:bg-white hover:text-blue"
              : "border-blue bg-white text-blue hover:bg-blue-soft",
          )}
          aria-label={copied ? "Email address copied" : `Copy ${siteConfig.email}`}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </span>
  );
}
