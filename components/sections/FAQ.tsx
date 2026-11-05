"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { siteConfig } from "@/lib/data/navigation";
import { jsonLdScriptProps, faqSchema } from "@/lib/seo/schema";

export type FAQEntry = {
  question: string;
  answer: string;
};

function renderAnswer(answer: string): ReactNode {
  if (!answer.includes(siteConfig.email)) return answer;
  const parts = answer.split(siteConfig.email);
  return parts.flatMap((part, index) =>
    index === 0
      ? [part]
      : [
          <a
            key={`email-${index}`}
            href={siteConfig.emailHref}
            className="font-semibold text-blue underline underline-offset-2 break-all"
          >
            {siteConfig.email}
          </a>,
          part,
        ],
  );
}

export function FAQ({ items }: { items: FAQEntry[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <script {...jsonLdScriptProps(faqSchema(items))} />
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-gray-light py-lg last:border-b-0">
            <button
              type="button"
              className="flex w-full justify-between items-center gap-md cursor-pointer font-semibold text-navy py-md bg-transparent border-0 text-left hover:text-blue transition-colors"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span
                aria-hidden
                className={cn("text-lg transition-transform duration-200", isOpen && "rotate-180")}
              >
                ⌄
              </span>
            </button>
            {isOpen && <div className="pt-md leading-relaxed text-gray-dark">{renderAnswer(item.answer)}</div>}
          </div>
        );
      })}
    </div>
  );
}
