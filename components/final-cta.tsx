"use client";

import Image from "next/image";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Locked alt text — given as a single Albanian string with no English variant, so it's used
// unchanged on both locales rather than inventing a translation (see rebuild-adaptation-plan.md).
const IMAGE_ALT = "Ballkon i pronës me pamje nga qyteti dhe pishina";

export function FinalCta({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.finalCta : SITE_COPY.sq.finalCta;
  const whatsappUrl = getWhatsAppUrl();

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

        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[4/5]">
          <Image
            src="/images/website/final-cta.webp"
            alt={IMAGE_ALT}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
