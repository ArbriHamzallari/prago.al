import { ClipboardList, Layers, Users } from "lucide-react";
import { SITE_COPY, type Locale } from "@/lib/site-copy";

const ICONS = [Users, ClipboardList, Layers];

export function TrustBand({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.trustBand : SITE_COPY.sq.trustBand;

  return (
    <section aria-labelledby="trust-band-title" className="bg-vishnje-dark py-[28px] text-cream md:py-[36px]">
      <h2 id="trust-band-title" className="sr-only">
        {copy.srHeading}
      </h2>
      <div className="mx-auto max-w-content px-[20px] md:px-[24px] lg:px-[32px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          {copy.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="flex-1">
                <Icon className="h-6 w-6 text-cream" strokeWidth={1.75} />
                <p className="mt-3 font-serif text-lg font-medium leading-snug text-cream">{item.title}</p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-cream/80">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
