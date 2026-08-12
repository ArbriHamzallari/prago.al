import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { SerifHeading } from "./ui/serif-heading";
import { BodyText } from "./ui/body-text";

function HeroPanel({
  copy,
  whatsappUrl,
  className = "",
  ctaId
}: {
  copy: (typeof SITE_COPY)["sq"]["hero"];
  whatsappUrl: string;
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
      >
        {copy.cta}
      </Button>
      <p className="mt-3 max-w-[48ch] font-sans text-[12px] leading-snug text-stone">{copy.helper}</p>
    </div>
  );
}

export function Hero({ locale }: { locale: Locale }) {
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const copy = locale === "en" ? SITE_COPY.sq.hero : SITE_COPY.sq.hero;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div className="relative h-[280px] w-full lg:h-[740px]">
        {/* TODO: placeholder path — real photography pending, see rebuild-adaptation-plan.md */}
        <Image
          src="/images/website/hero-main.webp"
          alt="Pronë e menaxhuar nga Prago"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 hidden lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-content px-[32px]">
            <HeroPanel
              copy={copy}
              whatsappUrl={whatsappUrl}
              className="max-w-[560px] rounded-hero bg-cream p-[48px] shadow-card"
            />
          </div>
        </div>
      </div>

      <div className="px-[20px] py-[36px] lg:hidden">
        <HeroPanel copy={copy} whatsappUrl={whatsappUrl} ctaId="hero-cta-mobile" />
      </div>
    </section>
  );
}
