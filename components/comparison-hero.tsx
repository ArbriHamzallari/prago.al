"use client";

import { Check, X } from "lucide-react";
import { Fragment } from "react";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPARISON, formatEUR } from "@/lib/comparison-data";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { SerifHeading } from "./ui/serif-heading";

const GRID = "grid grid-cols-[1.3fr_0.85fr_0.85fr] items-stretch gap-x-2 sm:gap-x-4 lg:gap-x-6";
const LABEL_CELL = "flex items-center border-t border-cream/15 py-4 pr-2 font-sans text-[13px] leading-snug text-cream/85 first:border-t-0 sm:text-sm";
const HEADER_LABEL = "font-sans text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-[13px] sm:tracking-[0.14em]";

function Mark({ value, highlighted }: { value: "check" | "cross"; highlighted?: boolean }) {
  const Icon = value === "check" ? Check : X;
  const color =
    value === "check" ? (highlighted ? "text-vishnje" : "text-cream") : highlighted ? "text-charcoal/25" : "text-cream/30";
  return <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${color}`} strokeWidth={2.5} />;
}

export function ComparisonHero({ locale }: { locale: Locale }) {
  const heroCopy = COMPARISON_COPY[locale].hero;
  const tableCopy = COMPARISON_COPY[locale].table;
  const whatsappUrl = getWhatsAppUrl();
  const { ownerNetMonthly, ownerNetAnnual, longTermMonthlyRent, longTermAnnual } = COMPARISON;

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-title"
      className="bg-vishnje-dark px-[20px] py-[64px] md:px-[24px] md:py-[80px] lg:px-[32px] lg:py-[112px]"
    >
      <div className="mx-auto max-w-content">
        <SerifHeading as="h1" size="h1" id="comparison-title" className="max-w-[720px] text-cream">
          {heroCopy.h1}
        </SerifHeading>
        <BodyText className="mt-5 max-w-[560px] text-cream/75">{heroCopy.body}</BodyText>

        <div className={`mt-14 ${GRID} lg:mt-16`}>
          {/* header row */}
          <div />
          <div className={`rounded-t-card bg-cream px-2 py-4 text-center text-charcoal sm:px-4 ${HEADER_LABEL}`}>
            {tableCopy.airbnbLabel}
          </div>
          <div className={`px-2 py-4 text-center text-cream sm:px-4 ${HEADER_LABEL}`}>{tableCopy.longTermLabel}</div>

          {/* monthly income */}
          <div className={LABEL_CELL}>{tableCopy.monthlyIncomeLabel}</div>
          <div className="flex items-center justify-center border-t border-charcoal/10 bg-cream px-2 py-4 sm:px-4">
            <span className="font-serif text-xl text-vishnje sm:text-2xl lg:text-3xl">{formatEUR(ownerNetMonthly)}*</span>
          </div>
          <div className="flex items-center justify-center border-t border-cream/15 px-2 py-4 sm:px-4">
            <span className="font-serif text-xl text-cream sm:text-2xl lg:text-3xl">{formatEUR(longTermMonthlyRent)}</span>
          </div>

          {/* annual income */}
          <div className={LABEL_CELL}>{tableCopy.annualIncomeLabel}</div>
          <div className="flex items-center justify-center border-t border-charcoal/10 bg-cream px-2 py-4 sm:px-4">
            <span className="font-sans text-sm font-medium text-charcoal sm:text-base">{formatEUR(ownerNetAnnual)}*</span>
          </div>
          <div className="flex items-center justify-center border-t border-cream/15 px-2 py-4 sm:px-4">
            <span className="font-sans text-sm font-medium text-cream/90 sm:text-base">{formatEUR(longTermAnnual)}</span>
          </div>

          {/* boolean rows */}
          {tableCopy.rows.map((row, i) => {
            const isLast = i === tableCopy.rows.length - 1;
            return (
              <Fragment key={row.label}>
                <div className={LABEL_CELL}>{row.label}</div>
                <div
                  className={`flex items-center justify-center border-t border-charcoal/10 bg-cream px-2 py-4 sm:px-4 ${isLast ? "rounded-b-card" : ""}`}
                >
                  <Mark value={row.airbnb} highlighted />
                </div>
                <div className="flex items-center justify-center border-t border-cream/15 px-2 py-4 sm:px-4">
                  <Mark value={row.longTerm} />
                </div>
              </Fragment>
            );
          })}
        </div>

        <p className="mt-6 max-w-[640px] font-sans text-xs leading-relaxed text-cream/50">{tableCopy.footnote}</p>
        <p className="mt-2 max-w-[640px] font-sans text-xs leading-relaxed text-cream/50">
          {tableCopy.feeExplanation} {tableCopy.profitabilityNote}
        </p>

        <Button
          id="hero-cta-mobile"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="cream"
          className="mt-10"
          onClick={() => track("cta_whatsapp_click", { position: "comparison_hero", locale })}
        >
          {heroCopy.cta}
        </Button>
      </div>
    </section>
  );
}
