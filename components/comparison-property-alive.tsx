import Image from "next/image";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Same real photo and alt text as ServiceScope's "operations" card (components/services-pricing-section.tsx).
const IMAGE_ALT = "Detaj i hyrjes së pronës me çelës dhe bravë";

export function ComparisonPropertyAlive({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].propertyAlive;

  return (
    <Section id="property-alive" bg="sand" ariaLabelledby="property-alive-title">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
          <SerifHeading as="h2" size="h2" id="property-alive-title" className="mt-4 max-w-[560px] text-charcoal">
            {copy.h2}
          </SerifHeading>
          <BodyText className="mt-5 text-stone">{copy.body}</BodyText>

          <div className="mt-12 divide-y divide-charcoal/10 border-t border-charcoal/10 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:divide-y-0 sm:border-t-0">
            {copy.items.map((item, i) => (
              <div key={item.label} className="border-charcoal/10 py-6 sm:border-t sm:py-8">
                <p className="font-serif text-2xl font-medium text-vishnje/60">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-charcoal">
                  {item.label}
                </p>
                <p className="mt-2 font-sans text-base leading-relaxed text-stone">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[240px] overflow-hidden rounded-card lg:col-span-5 lg:h-auto">
          <Image
            src="/images/website/service-operations.webp"
            alt={IMAGE_ALT}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </Section>
  );
}
