import Image from "next/image";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// TODO: placeholder paths — real property photography pending, see rebuild-adaptation-plan.md
const GRID_IMAGES = [
  { src: "/images/website/case-02.webp", alt: "Coastal Paradise — përgatitja e pronës" },
  { src: "/images/website/case-03.webp", alt: "Coastal Paradise — përgatitja e pronës" },
  { src: "/images/website/case-04.webp", alt: "Coastal Paradise — përgatitja e pronës" },
  { src: "/images/website/case-05-detail.webp", alt: "Coastal Paradise — detaj gati për vizitorë" }
];

function WorkInProgressGrid({ label }: { label: string }) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-4 z-10 rounded-card bg-charcoal/80 px-3 py-1.5 font-sans text-xs font-semibold uppercase tracking-wide text-cream">
        {label}
      </span>
      <div className="grid grid-cols-2 gap-3">
        {GRID_IMAGES.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden rounded-card">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PropertyStory({ locale }: { locale: Locale }) {
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const copy = locale === "en" ? SITE_COPY.sq.propertyStory : SITE_COPY.sq.propertyStory;

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

        {/* TODO: placeholder path — real property photography pending, see rebuild-adaptation-plan.md */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:order-1 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:h-full">
          <Image
            src="/images/website/case-01.webp"
            alt="Coastal Paradise — pamje e përgjithshme e pronës"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>

        <div className="lg:order-3 lg:col-span-7 lg:col-start-6 lg:row-start-2">
          <WorkInProgressGrid label={copy.gridLabel} />
        </div>
      </div>
    </Section>
  );
}
