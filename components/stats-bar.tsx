"use client";

import { STATS } from "@/lib/constants";
import { StatCounter } from "./ui/stat-counter";

export function StatsBar() {
  return (
    <section className="border-y border-sand/40 bg-cream py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6 lg:px-8">
        {STATS.map((item) => (
          <StatCounter
            key={item.label}
            value={item.value}
            prefix={item.prefix}
            suffix={item.suffix}
            decimals={item.decimals}
            label={item.label}
          />
        ))}
      </div>
    </section>
  );
}
