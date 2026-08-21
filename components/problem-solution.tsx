import type { Locale } from "@/lib/site-copy";
import { SITE_COPY_NEW } from "@/lib/site-copy-new";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Spec's "WhyPrago" section (id: why-prago) — the only place the scattered-vs-organized
// visual language may appear. Its copy isn't in the locked lib/site-copy.ts, so it lives in
// lib/site-copy-new.ts instead, per the redesign guardrails.
const TILT = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-2", "rotate-1"];

export function ProblemSolution({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY_NEW.en.chaosOrder : SITE_COPY_NEW.sq.chaosOrder;

  return (
    <Section id="why-prago" bg="cream" ariaLabelledby="why-prago-title">
      <p className="font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-stone">
        {copy.eyebrow}
      </p>
      <SerifHeading as="h2" size="h2" id="why-prago-title" className="mt-4 max-w-[640px] text-charcoal">
        {copy.h2}
      </SerifHeading>

      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-stone">{copy.withoutLabel}</p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-4">
            {copy.withoutItems.map((item, i) => (
              <span
                key={item}
                className={`rounded-card border border-sand bg-white px-4 py-3 font-sans text-sm text-charcoal/80 ${TILT[i % TILT.length]}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-vishnje">{copy.withLabel}</p>
          <div className="mt-6 divide-y divide-sand rounded-card border border-sand">
            {copy.withItems.map((item) => (
              <p key={item} className="px-6 py-4 font-sans text-lg font-medium text-charcoal">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
