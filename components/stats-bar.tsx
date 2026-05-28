"use client";

import { STATS } from "@/lib/constants";
import { StatCounter } from "./ui/stat-counter";

export function StatsBar() {
  return (
    <section className="border-y border-sand/40 bg-cream py-10 sm:py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-10 px-4 sm:grid-cols-3 sm:gap-8 sm:px-5 lg:grid-cols-5 lg:gap-6 lg:px-8">
        {STATS.map((item, index) => (
          <div
            key={item.label}
            className={
              index === STATS.length - 1
                ? "col-span-2 max-w-xs justify-self-center sm:col-span-1 sm:max-w-none"
                : undefined
            }
          >
            <StatCounter
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              decimals={item.decimals}
              label={item.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
