import { ClipboardList, Layers, Users } from "lucide-react";
import { SITE_COPY, type Locale } from "@/lib/site-copy";

const ICONS = [Users, ClipboardList, Layers];

export function TrustBand({ locale }: { locale: Locale }) {
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const items = locale === "en" ? SITE_COPY.sq.trustBand.items : SITE_COPY.sq.trustBand.items;

  return (
    <section className="bg-vishnje-dark py-[28px] text-cream md:py-[36px]">
      <div className="mx-auto max-w-content px-[20px] md:px-[24px] lg:px-[32px]">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10">
          {items.map((item, i) => {
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
