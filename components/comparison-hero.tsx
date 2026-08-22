"use client";

import Image from "next/image";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Same real photo and alt text as the homepage hero (components/hero.tsx) — reused, not a new asset.
const HERO_IMAGE_ALT = "Ambient i ndriçuar i një prone të menaxhuar nga Prago";

export function ComparisonHero({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].hero;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="bg-cream">
      <div className="relative h-[220px] w-full md:h-[320px] lg:h-[420px]">
        <Image src="/images/website/hero-main.webp" alt={HERO_IMAGE_ALT} fill priority className="object-cover" sizes="100vw" />
      </div>
      <Section bg="cream" ariaLabelledby="comparison-hero-title">
        <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
        <SerifHeading as="h1" size="h1" id="comparison-hero-title" className="mt-4 max-w-[760px] text-charcoal">
          {copy.h1}
        </SerifHeading>
        <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
        <Button
          id="hero-cta-mobile"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          className="mt-8"
          onClick={() => track("cta_whatsapp_click", { position: "comparison_hero", locale })}
        >
          {copy.cta}
        </Button>
      </Section>
    </section>
  );
}
