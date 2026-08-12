import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function ProcessSteps({ locale }: { locale: Locale }) {
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const copy = locale === "en" ? SITE_COPY.sq.process : SITE_COPY.sq.process;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <Section id="process" bg="cream" ariaLabelledby="process-title">
      <SerifHeading as="h2" size="h2" id="process-title" className="text-charcoal">
        {copy.title}
      </SerifHeading>

      <div className="mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-10">
        {copy.steps.map((step) => (
          <div key={step.num}>
            <p className="font-serif text-5xl font-medium text-vishnje/30">{step.num}</p>
            <h3 className="mt-4 font-serif text-2xl font-medium text-charcoal">{step.title}</h3>
            <p className="mt-3 font-sans leading-relaxed text-stone">{step.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-col lg:hidden">
        {copy.steps.map((step, i, steps) => {
          const isLast = i === steps.length - 1;
          return (
            <div key={step.num} className={`border-l-2 pl-6 ${isLast ? "border-transparent" : "border-sand pb-10"}`}>
              <p className="font-serif text-3xl font-medium text-vishnje/40">{step.num}</p>
              <h3 className="mt-3 font-serif text-xl font-medium text-charcoal">{step.title}</h3>
              <p className="mt-2 font-sans text-base leading-relaxed text-stone">{step.body}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 lg:mt-16">
        <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="primary">
          {copy.cta}
        </Button>
      </div>
    </Section>
  );
}
