import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";
import { PhotoPlaceholder } from "./ui/photo-placeholder";

// TODO: real property photography pending — swap back to next/image, see rebuild-adaptation-plan.md
const GRID_IMAGES = [
  {
    key: "case-02",
    altSq: "Coastal Paradise — përgatitja e pronës",
    altEn: "Coastal Paradise — property preparation"
  },
  {
    key: "case-03",
    altSq: "Coastal Paradise — përgatitja e pronës",
    altEn: "Coastal Paradise — property preparation"
  },
  {
    key: "case-04",
    altSq: "Coastal Paradise — përgatitja e pronës",
    altEn: "Coastal Paradise — property preparation"
  },
  {
    key: "case-05-detail",
    altSq: "Coastal Paradise — detaj gati për vizitorë",
    altEn: "Coastal Paradise — guest-ready detail"
  }
];

function WorkInProgressGrid({ label, locale }: { label: string; locale: Locale }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-4 z-10 rounded-card bg-charcoal/80 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-cream">
        {label}
      </span>
      <div className="grid grid-cols-2 gap-3">
        {GRID_IMAGES.map((img) => (
          <div key={img.key} className="relative aspect-square overflow-hidden rounded-card">
            <PhotoPlaceholder label={locale === "en" ? img.altEn : img.altSq} className="absolute inset-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PropertyStory({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.propertyStory : SITE_COPY.sq.propertyStory;
  const heroImageAlt =
    locale === "en" ? "Coastal Paradise — overall view of the property" : "Coastal Paradise — pamje e përgjithshme e pronës";

  return (
    <Section id="property-story" bg="cream" ariaLabelledby="property-story-title">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1">
          <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
          <SerifHeading as="h2" size="h2" id="property-story-title" className="mt-4 max-w-[680px] text-charcoal">
            {copy.h2}
          </SerifHeading>
          <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
          <p className="mt-4 font-sans text-sm italic leading-relaxed text-stone">{copy.disclosure}</p>
        </div>

        {/* TODO: real property photography pending — swap back to next/image, see rebuild-adaptation-plan.md */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:order-1 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:h-full">
          <PhotoPlaceholder label={heroImageAlt} className="absolute inset-0" />
        </div>

        <div className="lg:order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2">
          <WorkInProgressGrid label={copy.gridLabel} locale={locale} />
        </div>
      </div>
    </Section>
  );
}
