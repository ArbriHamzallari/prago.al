"use client";

import { AnimatePresence, motion } from "motion/react";
import { BarChart3, CalendarCheck, CalendarClock, FileText, Home, MessageCircle, MessagesSquare, Sparkles, Tag, Wrench } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/lib/site-copy";
import { SITE_COPY_NEW } from "@/lib/site-copy-new";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Spec's "WhyPrago" section (id: why-prago) — the only place the scattered-vs-organized
// visual language may appear. Its copy isn't in the locked lib/site-copy.ts, so it lives in
// lib/site-copy-new.ts instead, per the redesign guardrails.

// Fixed order, matched to lib/site-copy-new.ts's withoutItems / withItems arrays.
const WITHOUT_ICONS = [MessageCircle, CalendarClock, Sparkles, MessagesSquare, Wrench, Tag];
const WITH_ICONS = [CalendarCheck, BarChart3, Home, FileText];

const EXPAND_SPRING = { type: "spring", bounce: 0, duration: 0.3 } as const;

export function ProblemSolution({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY_NEW.en.chaosOrder : SITE_COPY_NEW.sq.chaosOrder;
  const [active, setActive] = useState(0);

  return (
    <Section id="why-prago" bg="cream" ariaLabelledby="why-prago-title">
      <p className="font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-stone">
        {copy.eyebrow}
      </p>
      <SerifHeading as="h2" size="h2" id="why-prago-title" className="mt-4 max-w-[640px] text-charcoal">
        {copy.h2}
      </SerifHeading>

      <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-6">
        {/* Without Prago — a card of scattered, incoming signals */}
        <div className="rounded-2xl border border-sand bg-white p-5 shadow-sm md:p-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone">{copy.withoutLabel}</p>
          <ul className="mt-4 divide-y divide-sand/70">
            {copy.withoutItems.map((item, i) => {
              const Icon = WITHOUT_ICONS[i % WITHOUT_ICONS.length];
              return (
                <li
                  key={item}
                  className="-mx-2.5 flex items-center gap-3.5 rounded-xl px-2.5 py-2.5 transition-all duration-200 hoverable:hover:bg-sand/40 hoverable:hover:ring-1 hoverable:hover:ring-vishnje/10"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sand/60 text-stone">
                    <Icon size={16} strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-sans text-[15px] font-medium text-charcoal/70">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* With Prago — interactive active-display panel: click a row to see its detail */}
        <div className="rounded-2xl bg-vishnje-dark p-2.5 shadow-card md:p-3">
          <p className="px-2.5 pt-1.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream/50">
            {copy.withLabel}
          </p>
          <ul className="mt-2 flex flex-col gap-1">
            {copy.withItems.map((item, i) => {
              const Icon = WITH_ICONS[i % WITH_ICONS.length];
              const isActive = active === i;
              return (
                <li key={item.label}>
                  <div
                    className={`rounded-xl transition-shadow duration-200 ${isActive ? "bg-cream shadow-sm" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className={`flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-left transition-colors duration-200 ${
                        isActive
                          ? "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje-dark"
                          : "hoverable:hover:bg-cream/10 hoverable:hover:ring-1 hoverable:hover:ring-cream/15 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
                          isActive ? "bg-vishnje-dark text-cream" : "bg-cream/10 text-cream/35"
                        }`}
                      >
                        <Icon size={16} strokeWidth={1.75} aria-hidden />
                      </span>
                      <span
                        className={`font-sans text-[15px] transition-colors duration-200 ${
                          isActive ? "font-semibold text-vishnje-dark" : "font-medium text-cream/40"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={EXPAND_SPRING}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 pt-1 font-sans text-[14px] leading-[22px] text-charcoal/65">
                            {item.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
