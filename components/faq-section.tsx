"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function Faq({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.faq : SITE_COPY.sq.faq;

  // Starts closed on every viewport for a consistent SSR-safe first paint, then opens the
  // first item on desktop only — mobile stays fully closed, per the spec.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) setOpenIndex(0);
  }, []);

  const toggle = (index: number, isOpen: boolean) => {
    setOpenIndex(isOpen ? null : index);
    if (!isOpen) track("faq_open", { item: `faq-${index}`, locale });
  };

  return (
    <Section id="faq" bg="cream" ariaLabelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <SerifHeading as="h2" size="h2" id="faq-title" className="text-charcoal">
          {copy.title}
        </SerifHeading>
        <div className="mt-10 space-y-3">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
                <button
                  type="button"
                  id={`faq-button-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index, isOpen)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left font-sans text-sm font-medium text-charcoal focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-vishnje sm:px-6 sm:py-5 sm:text-base"
                >
                  {item.question}
                  <ChevronDown className={`h-5 w-5 shrink-0 text-stone transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  hidden={openIndex !== index}
                >
                  <p className="px-4 pb-4 font-sans text-sm text-stone sm:px-6 sm:pb-5 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
