import { SERVICE_CATEGORIES } from "@/lib/constants";
import { Button } from "./ui/button";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function ServicesPricingSection() {
  return (
    <Section id="services" bg="cream">
      <SerifHeading size="h1" className="max-w-2xl text-charcoal">
        One flat fee. We handle all of it.
      </SerifHeading>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-10">
          {SERVICE_CATEGORIES.map((cat) => (
            <div key={cat.label}>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-charcoal">
                {cat.label}
              </p>
              <ul className="mt-4 space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="font-sans text-base text-stone">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div id="pricing">
          <div className="rounded-2xl bg-vishnje p-6 text-cream sm:p-8 md:p-10">
            <EyebrowLabel className="text-cream/70">COMMISSION-BASED PRICING</EyebrowLabel>
            <p className="mt-4 font-serif text-3xl font-medium leading-tight md:text-4xl">
              from 20% of your rental revenue
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-cream/80">
              The commission is based on property type and location.
            </p>
            <Button href="#estimate" variant="cream" className="mt-8 w-full">
              Start hosting
            </Button>
          </div>
          <p className="mt-6 font-sans text-sm leading-relaxed text-stone">
            Listing, pricing, guests, cleaning coordination, monthly reports. All in. No hidden charges.
          </p>
        </div>
      </div>
    </Section>
  );
}
