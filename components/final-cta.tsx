"use client";

import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";
import { PhotoPlaceholder } from "./ui/photo-placeholder";

export function FinalCta({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.finalCta : SITE_COPY.sq.finalCta;
  const whatsappUrl = getWhatsAppUrl();
  const imageAlt = locale === "en" ? "Prago — ready to start the partnership" : "Prago — gati për të nisur bashkëpunimin";

  return (
    <Section id="final-cta" bg="cream" ariaLabelledby="final-cta-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <SerifHeading as="h2" size="h2" id="final-cta-title" className="text-charcoal">
            {copy.h2}
          </SerifHeading>
          <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
          <div className="mt-8">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              onClick={() => track("cta_whatsapp_click", { position: "final", locale })}
            >
              {copy.cta}
            </Button>
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-stone">{copy.disclaimer}</p>
        </div>

        {/* TODO: real photo pending — swap back to next/image, see rebuild-adaptation-plan.md */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[4/5]">
          <PhotoPlaceholder label={imageAlt} className="absolute inset-0" />
        </div>
      </div>
    </Section>
  );
}
