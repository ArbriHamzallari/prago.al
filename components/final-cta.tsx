import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function FinalCta({ locale }: { locale: Locale }) {
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const copy = locale === "en" ? SITE_COPY.sq.finalCta : SITE_COPY.sq.finalCta;
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
            <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="primary">
              {copy.cta}
            </Button>
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-stone">{copy.disclaimer}</p>
        </div>

        {/* TODO: placeholder path — real photo pending, see rebuild-adaptation-plan.md */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[4/5]">
          <Image
            src="/images/website/final-cta.webp"
            alt="Prago — gati për të nisur bashkëpunimin"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
