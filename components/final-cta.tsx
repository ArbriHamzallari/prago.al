"use client";

import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { GradedPhoto } from "./ui/graded-photo";
import { SerifHeading } from "./ui/serif-heading";

// Locked alt text — given as a single Albanian string with no English variant, so it's used
// unchanged on both locales rather than inventing a translation (see rebuild-adaptation-plan.md).
const IMAGE_ALT = "Ballkon i pronës me pamje nga qyteti dhe pishina";

// One image, one headline, one button — a campaign close, not a card competing with the photo.
export function FinalCta({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.finalCta : SITE_COPY.sq.finalCta;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="final-cta" aria-labelledby="final-cta-title" className="relative h-[70vh] min-h-[480px] w-full">
      <GradedPhoto
        src="/images/website/final-cta.webp"
        alt={IMAGE_ALT}
        fill
        tintFrom="top"
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-content px-[20px] pb-[56px] md:px-[32px] lg:px-[40px] lg:pb-[72px]">
        <SerifHeading as="h2" size="h2" id="final-cta-title" className="max-w-[640px] text-cream">
          {copy.h2}
        </SerifHeading>
        <p className="mt-4 max-w-[520px] font-sans text-base leading-relaxed text-cream/85">{copy.body}</p>
        <div className="mt-7">
          <Button
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            variant="cream"
            onClick={() => track("cta_whatsapp_click", { position: "final", locale })}
          >
            {copy.cta}
          </Button>
        </div>
        <p className="mt-4 max-w-[520px] font-sans text-xs leading-relaxed text-cream/60">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
