import { CalendarCheck, Tag, Wrench } from "lucide-react";
import Image from "next/image";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const ICONS = [Tag, CalendarCheck, Wrench];

// Locked alt text — given as single Albanian strings with no English variant, so they're
// used unchanged on both locales rather than inventing a translation (see rebuild-adaptation-plan.md).
const CARD_IMAGES = [
  { src: "/images/website/service-listing.webp", alt: "Dhomë e gjallë e përgatitur për listim në platforma rezervimi" },
  { src: "/images/website/service-guests.webp", alt: "Dhomë gjumi e përgatitur për mbërritjen e vizitorëve" },
  { src: "/images/website/service-operations.webp", alt: "Detaj i hyrjes së pronës me çelës dhe bravë" }
];

export function ServiceScope({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.serviceScope : SITE_COPY.sq.serviceScope;

  return (
    <Section id="services" bg="cream" ariaLabelledby="services-title">
      <SerifHeading as="h2" size="h2" id="services-title" className="max-w-[680px] text-charcoal">
        {copy.title}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.intro}</BodyText>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {copy.columns.map((col, i) => {
          const Icon = ICONS[i];
          const image = CARD_IMAGES[i];
          return (
            <div key={col.label} className="overflow-hidden rounded-card bg-white shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6 md:p-8">
                <Icon className="h-6 w-6 text-vishnje" strokeWidth={1.75} />
                <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                  {col.label}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="font-sans text-base leading-relaxed text-stone">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-10 font-sans text-sm leading-relaxed text-stone">{copy.channelsNote}</p>
    </Section>
  );
}
