import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { GradedPhoto } from "./ui/graded-photo";
import { HoverLift } from "./ui/hover-lift";
import { Panel } from "./ui/panel";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

// Locked alt text — given as a single Albanian string with no English variant, so it's used
// unchanged on both locales rather than inventing a translation (see rebuild-adaptation-plan.md).
const IMAGE_ALT = "Pamje e raportit mujor për pronarin, me të dhëna të anonimizuara";

export function OwnerVisibility({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.ownerVisibility : SITE_COPY.sq.ownerVisibility;

  return (
    <Section id="reporting" bg="cream" ariaLabelledby="reporting-title">
      <Panel bg="vishnje-dark">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:order-2 lg:col-span-5">
            <EyebrowLabel tone="cream">{copy.eyebrow}</EyebrowLabel>
            <SerifHeading as="h2" size="h2" id="reporting-title" className="mt-4 text-cream">
              {copy.h2}
            </SerifHeading>
            <BodyText className="mt-5 text-cream/70">{copy.body}</BodyText>
            <p className="mt-6 font-sans text-sm text-cream/50">{copy.items.join("  ·  ")}</p>
          </div>

          <div className="lg:order-1 lg:col-span-7">
            <HoverLift className="overflow-hidden rounded-card shadow-lg transition-shadow duration-300">
              {/* Restrained browser-chrome frame — reads as "a real product", not a fake mockup. */}
              <div className="flex items-center gap-1.5 bg-charcoal px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
              </div>
              <div className="relative aspect-[1800/1125]">
                <GradedPhoto
                  src="/images/website/owner-report.webp"
                  alt={IMAGE_ALT}
                  fill
                  tint={false}
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
            </HoverLift>
            <p className="mt-3 font-sans text-sm italic text-cream/60">{copy.caption}</p>
          </div>
        </div>
      </Panel>
    </Section>
  );
}
