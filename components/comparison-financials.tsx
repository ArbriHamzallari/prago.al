import { COMPARISON, formatEUR, formatPercent } from "@/lib/comparison-data";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import { SITE_FACTS } from "@/lib/site-facts";
import type { Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const LABEL = "font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-charcoal";
const ROW_LABEL = "font-sans text-sm text-stone";
const ROW_VALUE = "font-sans text-sm text-charcoal";

export function ComparisonFinancials({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].financial;
  const feeBasis = locale === "en" ? SITE_FACTS.feeBasisEn : SITE_FACTS.feeBasisSq;

  const {
    longTermMonthlyRent,
    longTermAnnual,
    airbnbGrossMonthly,
    platformFee,
    afterPlatformFee,
    pragoFee,
    ownerNetMonthly,
    monthlyDifference,
    annualDifference,
    percentageDifference
  } = COMPARISON;

  return (
    <Section id="comparison" bg="cream" ariaLabelledby="comparison-title">
      <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
      <SerifHeading as="h2" size="h2" id="comparison-title" className="mt-4 max-w-[680px] text-charcoal">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.intro}</BodyText>

      <div className="mt-12 grid gap-10 border-t border-sand pt-10 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: long-term rent */}
        <div className="border-b border-sand pb-10 lg:border-b-0 lg:border-r lg:border-sand lg:pb-0 lg:pr-16">
          <p className={LABEL}>{copy.longTerm.label}</p>
          <p className="mt-6 font-serif text-[48px] leading-none text-charcoal lg:text-[56px]">
            {formatEUR(longTermMonthlyRent)}
          </p>
          <p className="mt-2 font-sans text-sm text-stone">{copy.labels.perMonth}</p>
          <p className="mt-6 font-sans text-lg text-charcoal">
            {formatEUR(longTermAnnual)} <span className="text-sm text-stone">{copy.labels.perYear}</span>
          </p>
          <p className="mt-5 font-sans text-sm leading-relaxed text-stone">{copy.longTerm.note}</p>
        </div>

        {/* RIGHT: Airbnb + Prago deduction stack */}
        <div className="lg:pl-16">
          <p className={LABEL}>{copy.airbnb.label}</p>

          <div className="mt-6 divide-y divide-sand border-t border-sand">
            <div className="flex items-baseline justify-between py-3">
              <span className={ROW_LABEL}>{copy.airbnb.grossLabel}</span>
              <span className={`${ROW_VALUE} font-medium`}>{formatEUR(airbnbGrossMonthly)}</span>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <span className={ROW_LABEL}>{copy.airbnb.platformFeeLabel}</span>
              <span className={ROW_VALUE}>− {formatEUR(platformFee)}</span>
            </div>
            <div className="flex items-baseline justify-between py-3">
              <span className={`${ROW_LABEL} font-medium text-charcoal`}>= {formatEUR(afterPlatformFee)}</span>
              <span />
            </div>
            <div className="flex items-baseline justify-between py-3">
              <span className={ROW_LABEL}>{copy.airbnb.pragoFeeLabel}</span>
              <span className={ROW_VALUE}>− {formatEUR(pragoFee)}</span>
            </div>
          </div>

          <div className="mt-2 flex items-baseline justify-between border-t border-charcoal/20 pt-5">
            <span className={LABEL}>{copy.airbnb.netLabel}</span>
            <span className="font-serif text-[48px] leading-none text-vishnje lg:text-[56px]">
              {formatEUR(ownerNetMonthly)}
            </span>
          </div>
          <p className="mt-1 text-right font-sans text-sm text-stone">{copy.labels.perMonth}</p>
        </div>
      </div>

      <div className="mt-14 border-t border-sand pt-10">
        <p className="font-sans text-base leading-relaxed text-charcoal">
          <span className="font-serif text-2xl text-vishnje">{formatEUR(ownerNetMonthly)}</span>
          {" "}vs{" "}
          <span className="font-serif text-2xl text-charcoal">{formatEUR(longTermMonthlyRent)}</span>
        </p>
        <p className="mt-3 font-sans text-base text-charcoal">
          +{formatEUR(monthlyDifference)} {copy.labels.perMonth} · +{formatEUR(annualDifference)} {copy.labels.perYear} ·{" "}
          +{formatPercent(percentageDifference)} {copy.labels.inThisExample}
        </p>
        <p className="mt-6 max-w-[640px] font-sans text-sm leading-relaxed text-stone">{copy.profitabilityNote}</p>
      </div>

      <div className="mt-8 max-w-[640px] space-y-3 border-t border-sand pt-8">
        <p className="font-sans text-sm leading-relaxed text-stone">{feeBasis}</p>
        <p className="font-sans text-sm leading-relaxed text-stone">{copy.feeExplanation}</p>
      </div>

      <p className="mt-6 max-w-[640px] font-sans text-sm italic leading-relaxed text-stone">{copy.disclaimer}</p>
    </Section>
  );
}
