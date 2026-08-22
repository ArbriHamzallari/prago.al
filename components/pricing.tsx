"use client";

import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { SITE_FACTS } from "@/lib/site-facts";
import { Button } from "./ui/button";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function Pricing({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.pricing : SITE_COPY.sq.pricing;
  const feeBasis = locale === "en" ? SITE_FACTS.feeBasisEn : SITE_FACTS.feeBasisSq;
  const whatsappUrl = getWhatsAppUrl();
  const feeLabel = `${SITE_FACTS.feePercent}%`;

  return (
    <Section id="pricing" bg="vishnje" ariaLabelledby="pricing-title">
      {/*
        Mobile: flex-col-reverse means the LAST DOM child (the big figure) renders visually
        first, while the explanation block — which contains the H2 and the fee rule — stays
        first in DOM order for screen readers. Desktop switches to a grid where `order`
        places the figure on the left regardless of DOM position.
      */}
      <div className="flex flex-col-reverse gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:order-2 lg:col-span-7">
          <EyebrowLabel tone="cream">{copy.eyebrow}</EyebrowLabel>
          <SerifHeading as="h2" size="h2" id="pricing-title" className="mt-4 text-cream">
            {feeLabel} {copy.titleSuffix}
          </SerifHeading>
          <p className="mt-5 max-w-[640px] font-sans text-base leading-relaxed text-cream/90">{feeBasis}</p>
          <p className="mt-4 max-w-[640px] font-sans text-base leading-relaxed text-cream/80">{copy.includes}</p>
          <p className="mt-4 max-w-[640px] font-sans text-sm leading-relaxed text-cream/60">{copy.disclosure}</p>
          <div className="mt-8">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="cream"
              onClick={() => track("cta_whatsapp_click", { position: "pricing", locale })}
            >
              {copy.cta}
            </Button>
          </div>
        </div>

        <div className="lg:order-1 lg:col-span-5">
          <p className="font-sans text-[96px] font-bold leading-none tracking-[-0.04em] text-cream md:text-[140px] lg:text-[160px]">
            {feeLabel}
          </p>
        </div>
      </div>
    </Section>
  );
}
