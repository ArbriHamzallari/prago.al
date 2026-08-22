"use client";

import { Plus } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const PANEL_SPRING = { type: "spring", bounce: 0, duration: 0.25 } as const;

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

  const reduceMotion = useReducedMotion();

  return (
    <Section id="faq" bg="cream" ariaLabelledby="faq-title">
      <div className="mx-auto max-w-3xl">
        <SerifHeading as="h2" size="h2" id="faq-title" className="text-charcoal">
          {copy.title}
        </SerifHeading>
        <div className="mt-10 divide-y divide-sand border-t border-sand">
          {copy.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  id={`faq-button-${index}`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => toggle(index, isOpen)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-base font-semibold text-charcoal focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-vishnje sm:py-6 sm:text-lg"
                >
                  {item.question}
                  <Plus
                    className={`h-5 w-5 shrink-0 text-vishnje transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <motion.div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={reduceMotion ? { duration: 0.01 } : PANEL_SPRING}
                  style={{ overflow: "hidden" }}
                >
                  <p className="max-w-[62ch] pb-6 font-sans text-sm leading-relaxed text-stone sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
