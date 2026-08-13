"use client";

import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { SerifHeading } from "./ui/serif-heading";
import { BodyText } from "./ui/body-text";
import { PhotoPlaceholder } from "./ui/photo-placeholder";

type HeroCopy = { eyebrow: string; h1: string; body: string; cta: string; helper: string };

function HeroPanel({
  copy,
  whatsappUrl,
  locale,
  className = "",
  ctaId
}: {
  copy: HeroCopy;
  whatsappUrl: string;
  locale: Locale;
  className?: string;
  ctaId?: string;
}) {
  return (
    <div className={className}>
      <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
      <SerifHeading as="h1" size="h1" className="mt-4 max-w-[680px] text-charcoal">
        {copy.h1}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
      <Button
        id={ctaId}
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        variant="primary"
        className="mt-8 w-full lg:w-auto"
        onClick={() => track("cta_whatsapp_click", { position: "hero", locale })}
      >
        {copy.cta}
      </Button>
      <p className="mt-3 max-w-[48ch] font-sans text-[12px] leading-snug text-stone">{copy.helper}</p>
    </div>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.hero : SITE_COPY.sq.hero;
  const whatsappUrl = getWhatsAppUrl();
  const imageAlt = locale === "en" ? "A property managed by Prago" : "Pronë e menaxhuar nga Prago";

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="relative h-[280px] w-full lg:h-[740px]">
        {/* TODO: real photography pending — swap back to next/image, see rebuild-adaptation-plan.md */}
        <PhotoPlaceholder label={imageAlt} className="absolute inset-0" />

        <div className="absolute inset-0 hidden lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-content px-[32px]">
            <HeroPanel
              copy={copy}
              whatsappUrl={whatsappUrl}
              locale={locale}
              className="max-w-[560px] rounded-hero bg-cream p-[48px] shadow-card"
            />
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[36px] lg:hidden">
        <HeroPanel copy={copy} whatsappUrl={whatsappUrl} locale={locale} ctaId="hero-cta-mobile" />
      </div>
    </section>
  );
}
