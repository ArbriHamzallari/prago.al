import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";
import { PhotoPlaceholder } from "./ui/photo-placeholder";

export function OwnerVisibility({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.ownerVisibility : SITE_COPY.sq.ownerVisibility;
  const imageAlt = locale === "en" ? "Example of the monthly owner report" : "Shembull i raportit mujor për pronarin";

  return (
    <Section id="reporting" bg="cream" ariaLabelledby="reporting-title">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:order-2 lg:col-span-5">
          <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
          <SerifHeading as="h2" size="h2" id="reporting-title" className="mt-4 text-charcoal">
            {copy.h2}
          </SerifHeading>
          <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-sans text-sm text-charcoal">
            {copy.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-vishnje" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:order-1 lg:col-span-7">
          {/* TODO: real redacted owner-report export pending — swap back to next/image, see rebuild-adaptation-plan.md */}
          <div className="relative aspect-[1800/1125] overflow-hidden rounded-card shadow-card">
            <PhotoPlaceholder label={imageAlt} className="absolute inset-0" />
          </div>
          <p className="mt-3 font-sans text-sm italic text-stone">{copy.caption}</p>
        </div>
      </div>
    </Section>
  );
}
