import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function ComparisonOwnerStory({ locale }: { locale: Locale }) {
  const copy = COMPARISON_COPY[locale].ownerStory;

  return (
    <Section id="owner-story" bg="sand" ariaLabelledby="owner-story-title">
      <SerifHeading as="h2" size="h2" id="owner-story-title" className="max-w-[640px] text-charcoal">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.body}</BodyText>
    </Section>
  );
}
