import { FileText, KeyRound, MessageCircle, Sparkles, Wrench } from "lucide-react";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { BodyText } from "./ui/body-text";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const ICONS = [Sparkles, MessageCircle, KeyRound, Wrench, FileText];

export function BehindEveryStay({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.behindEveryStay : SITE_COPY.sq.behindEveryStay;

  return (
    <Section id="operations" bg="cream" ariaLabelledby="operations-title">
      <EyebrowLabel>{copy.eyebrow}</EyebrowLabel>
      <SerifHeading as="h2" size="h2" id="operations-title" className="mt-4 max-w-[680px] text-charcoal">
        {copy.h2}
      </SerifHeading>
      <BodyText className="mt-5 text-stone">{copy.body}</BodyText>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {copy.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <div key={item.label} className="rounded-card bg-white p-6 shadow-card md:p-8">
              <Icon className="h-6 w-6 text-vishnje" strokeWidth={1.75} />
              <p className="mt-4 font-sans text-[13px] font-semibold uppercase leading-[18px] tracking-[0.16em] text-charcoal">
                {item.label}
              </p>
              <p className="mt-3 font-sans text-base leading-relaxed text-stone">{item.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
