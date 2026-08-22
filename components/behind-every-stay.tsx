import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function BehindEveryStay({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.behindEveryStay : SITE_COPY.sq.behindEveryStay;

  return (
    <Section id="operations" bg="cream" ariaLabelledby="operations-title">
      <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
      <SerifHeading as="h2" size="h2" id="operations-title" className="mt-4 max-w-[680px] text-charcoal">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.body}</BodyText>

      {/* Ghost-numeral motif (already distinctive to Prago), plain dividers instead of cards. */}
      <div className="mt-14 divide-y divide-sand border-t border-sand sm:grid sm:grid-cols-2 sm:gap-x-12 sm:divide-y-0 sm:border-t-0 lg:grid-cols-3">
        {copy.items.map((item, i) => (
          <div key={item.label} className="border-sand py-6 sm:border-t sm:py-8">
            <p className="font-serif text-3xl font-medium text-vishnje/60">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-3 font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-charcoal">
              {item.label}
            </p>
            <p className="mt-2 font-sans text-base leading-relaxed text-stone">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
