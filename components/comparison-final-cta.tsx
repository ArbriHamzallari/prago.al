"use client";

import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function ComparisonFinalCta({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].finalCta;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <Section id="final-cta" bg="vishnje" ariaLabelledby="comparison-final-title">
      <EyebrowLabel tone="cream">{copy.eyebrow}</EyebrowLabel>
      <SerifHeading as="h2" size="h2" id="comparison-final-title" className="mt-4 max-w-[640px] text-cream">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-5 text-cream/90">{copy.body}</BodyText>
      <Button
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        variant="cream"
        className="mt-8"
        onClick={() => track("cta_whatsapp_click", { position: "comparison_final", locale })}
      >
        {copy.cta}
      </Button>
    </Section>
  );
}
