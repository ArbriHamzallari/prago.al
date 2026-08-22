import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const LABEL = "font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-charcoal";

export function ComparisonOwnerView({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].ownerComparison;

  return (
    <Section id="owner-view" bg="cream" ariaLabelledby="owner-view-title">
      <SerifHeading as="h2" size="h2" id="owner-view-title" className="max-w-[640px] text-charcoal">
        {copy.h2}
      </SerifHeading>

      <div className="mt-12 grid gap-10 border-t border-sand pt-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:border-r lg:border-sand lg:pr-16">
          <p className={LABEL}>{copy.longTerm.label}</p>
          <ul className="mt-5 space-y-3">
            {copy.longTerm.items.map((item) => (
              <li key={item} className="font-sans text-base leading-relaxed text-stone">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pl-16">
          <p className={LABEL}>{copy.airbnb.label}</p>
          <ul className="mt-5 space-y-3">
            {copy.airbnb.items.map((item) => (
              <li key={item} className="font-sans text-base leading-relaxed text-stone">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
