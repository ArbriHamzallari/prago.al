"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { BarChart3, CalendarRange, Check, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/lib/site-copy";
import { SITE_COPY_NEW } from "@/lib/site-copy-new";
import { useFineHover } from "@/lib/use-fine-hover";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Fixed order, matched to lib/site-copy-new.ts's serviceSwitcher.features array.
const FEATURE_ICONS = [CalendarRange, MessageCircle, Sparkles, BarChart3];

const SWITCH_SPRING = { type: "spring", bounce: 0, duration: 0.35 } as const;

// Only "Listimi & çmimi" (0) and "Vizitorët & rezervimet" (1) have real images so far — both
// are AI-generated concept illustrations, not real product screenshots, hence the disclosure
// pill on each (see DisclosurePill). The other two features keep their skeleton placeholder
// until real images land — do not reuse these two images as a stand-in for them.
const IMAGE_ALT = {
  sq: {
    calendar: "Ilustrim konceptual i kalendarit dhe çmimit të pronës — jo pamje reale nga produkti.",
    guestChat: "Ilustrim konceptual i bisedës me vizitorin — jo pamje reale nga produkti."
  },
  en: {
    calendar: "Conceptual illustration of the property calendar and pricing — not a real product screenshot.",
    guestChat: "Conceptual illustration of guest messaging — not a real product screenshot."
  }
} as const;

export function ServiceScope({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY_NEW.en.serviceSwitcher : SITE_COPY_NEW.sq.serviceSwitcher;
  const [active, setActive] = useState(0);
  const fineHover = useFineHover();
  const activeFeature = copy.features[active];
  const alt = IMAGE_ALT[locale];

  return (
    <Section id="services" bg="cream" ariaLabelledby="services-title">
      <p className="font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-stone">
        {copy.eyebrow}
      </p>
      <SerifHeading as="h2" size="h2" id="services-title" className="mt-5 max-w-[680px] text-charcoal">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-6 text-stone">{copy.intro}</BodyText>

      {/* items-start, not items-center: the right column's height animates between the wide
          calendar image and the tall phone image — centering would shift the left column
          under a stationary cursor mid-animation and feed back into onMouseEnter, causing the
          active item to flicker. Pinning the left column avoids that entirely. */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-14">
        {/* Left — interactive feature list */}
        <ul className="flex flex-col gap-9">
          {copy.features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
            const isActive = active === i;
            return (
              <li key={feature.label}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => fineHover && setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className="group flex w-full items-center gap-4 py-7 text-left md:py-8"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                      isActive ? "bg-vishnje text-cream" : "bg-sand/60 text-stone"
                    }`}
                  >
                    <Icon size={19} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="flex-1">
                    <p
                      className={`font-sans text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                        isActive ? "text-vishnje" : "text-stone"
                      }`}
                    >
                      {feature.tag}
                    </p>
                    <p
                      className={`mt-1.5 font-sans text-[16px] leading-[22px] tracking-[-0.01em] transition-colors duration-200 ${
                        isActive ? "font-semibold text-charcoal" : "font-medium text-charcoal/60"
                      }`}
                    >
                      {feature.label}
                    </p>
                  </div>
                  <ChevronRight
                    size={18}
                    strokeWidth={1.75}
                    aria-hidden
                    className={`shrink-0 transition-all duration-200 ${
                      isActive
                        ? "translate-x-0.5 text-vishnje opacity-100"
                        : "-translate-x-1 text-stone opacity-0 hoverable:group-hover:translate-x-0 hoverable:group-hover:opacity-100"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right — floating dynamic preview. `layout="size"` smooths the height change as
            content switches between the wide calendar image, the tall phone mockup, and the
            fixed 4:3 skeleton placeholders. */}
        <motion.div
          layout="size"
          transition={SWITCH_SPRING}
          className="overflow-hidden rounded-card bg-white shadow-xl ring-1 ring-charcoal/[0.04]"
        >
          {active !== 1 && (
            <div className="flex items-center gap-1.5 bg-charcoal px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
            </div>
          )}

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={SWITCH_SPRING}
            >
              {active === 0 && (
                <div className="relative">
                  <Image
                    src="/images/website/workflow-calendar.webp"
                    alt={alt.calendar}
                    width={1200}
                    height={941}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    priority
                  />
                  <DisclosurePill label={copy.imageDisclosure} />
                </div>
              )}

              {active === 1 && (
                <div className="flex items-center justify-center bg-sand/25 px-10 py-12 md:px-14 md:py-16">
                  <div className="relative inline-block">
                    <Image
                      src="/images/website/workflow-guest-messaging.webp"
                      alt={alt.guestChat}
                      width={828}
                      height={1774}
                      className="h-auto w-[220px] shadow-2xl md:w-[240px]"
                    />
                    <DisclosurePill label={copy.imageDisclosure} />
                  </div>
                </div>
              )}

              {active === 2 && (
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/30 p-7 md:p-9">
                  <OperationsMock />
                </div>
              )}

              {active === 3 && (
                <div className="relative aspect-[4/3] overflow-hidden bg-sand/30 p-7 md:p-9">
                  <ReportingMock />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="relative overflow-hidden p-6 md:p-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={SWITCH_SPRING}
              >
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-vishnje">
                  {activeFeature.tag}
                </p>
                <p className="mt-2 font-sans text-[19px] font-semibold leading-[25px] text-charcoal">
                  {activeFeature.label}
                </p>
                <p className="mt-2.5 font-sans text-[15px] leading-[23px] text-stone">{activeFeature.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Sits in the bottom-right corner of a real (illustrative) image, never on the skeleton
// mocks — those are already abstract, not photoreal, so they need no disclosure.
function DisclosurePill({ label }: { label: string }) {
  return (
    <span className="absolute bottom-3 right-3 rounded-full bg-cream/85 px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-stone shadow-sm">
      {label}
    </span>
  );
}

// Purely illustrative, locale-agnostic UI shapes — not real product screenshots or data.
// Placeholder until real images for "Prona & operacionet" and "Raportimi" are ready.
function OperationsMock() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5">
      {[true, true, false].map((done, i) => (
        <div key={i} className="flex items-center gap-3 rounded-xl border border-sand bg-white px-4 py-3.5 shadow-sm">
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              done ? "bg-vishnje text-cream" : "border-2 border-stone/25"
            }`}
          >
            {done && <Check size={13} strokeWidth={2.5} aria-hidden />}
          </span>
          <div className="h-2 flex-1 rounded-full bg-stone/20" />
          <span className={`h-2 w-2 shrink-0 rounded-full ${done ? "bg-vishnje/50" : "bg-sand"}`} />
        </div>
      ))}
    </div>
  );
}

function ReportingMock() {
  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col justify-center gap-2.5 rounded-xl border border-sand bg-white p-4 shadow-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-vishnje/60" />
          <div className="h-2 w-1/2 rounded-full bg-stone/25" />
          <div className="h-4 w-3/4 rounded-full bg-charcoal/15" />
          <div className="flex items-end gap-0.5">
            {[5, 8, 4, 10, 7].map((h, bar) => (
              <span key={bar} className="w-1.5 rounded-sm bg-vishnje/40" style={{ height: `${h}px` }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
