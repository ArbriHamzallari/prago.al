"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

type Item = { id: string; label: string; description: string };

export function Accordion({
  items,
  defaultOpen = 0,
  variant = "software"
}: {
  items: Item[];
  defaultOpen?: number;
  variant?: "software" | "faq";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  if (variant === "faq") {
    return (
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.id} className="overflow-hidden rounded-2xl border border-sand bg-white shadow-sm">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left font-sans text-sm font-medium text-charcoal sm:px-6 sm:py-5 sm:text-base"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.label}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-stone transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 font-sans text-sm text-stone sm:px-6 sm:pb-5 sm:text-base">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="divide-y divide-sand/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id} className="py-5">
            <button
              type="button"
              className="flex w-full items-start gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-vishnje text-cream">
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </span>
              <span className="pt-1 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-charcoal">
                {item.label}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-12 mt-3 overflow-hidden font-sans text-base leading-relaxed text-stone"
                >
                  {item.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function AccordionPlusIcon() {
  return <Plus className="h-4 w-4" />;
}

export type { Item as AccordionItem };
