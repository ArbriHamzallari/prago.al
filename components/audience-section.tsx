"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AUDIENCE_TABS, INTERIOR_PHOTOS } from "@/lib/constants";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function AudienceSection() {
  const [active, setActive] = useState(0);
  const tab = AUDIENCE_TABS[active];

  return (
    <Section id="audience" bg="cream">
      <SerifHeading size="h1" className="max-w-3xl text-charcoal">
        Stop hosting. Start earning.
      </SerifHeading>
      <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-stone">
        One apartment or a full portfolio. We run it like a hotel and pay you like a landlord. You never touch
        a key, a message, or a price again.
      </p>

      <div className="mt-10 inline-flex flex-wrap gap-1 rounded-full bg-sand p-1.5">
        {AUDIENCE_TABS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2.5 font-sans text-sm font-medium transition md:px-5 ${
              active === i ? "bg-vishnje text-cream" : "text-charcoal hover:bg-cream/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl bg-sand">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            {/* TODO: replace with real Prago property photo */}
            <Image
              src={INTERIOR_PHOTOS[0]}
              alt="Modern Albanian rental interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <h3 className="font-serif text-2xl font-medium text-charcoal md:text-3xl">{tab.headline}</h3>
            <p className="mt-4 font-sans leading-relaxed text-stone">{tab.body}</p>
            <ul className="mt-8 space-y-4">
              {tab.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 font-sans text-charcoal">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vishnje text-cream">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
