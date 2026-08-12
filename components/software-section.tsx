"use client";

import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

function NetEarningsCard() {
  const bars = [35, 55, 45, 70, 50, 85, 60, 75, 48, 90, 65, 80];
  return (
    <div className="rounded-2xl bg-white p-5 shadow-card">
      <p className="font-serif text-lg text-charcoal">Net Earnings</p>
      <div className="mt-4 flex h-28 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-vishnje" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function ActivityFeedCard() {
  const items = [
    { label: "Clean Completed", time: "4 days ago" },
    { label: "Clean Confirmed", time: "3 days ago" },
    { label: "Payout Made", time: "2 days ago" },
    { label: "Booking Approved", time: "4 days ago" }
  ];
  return (
    <div className="w-full rounded-2xl bg-white p-4 shadow-card lg:w-[220px]">
      <p className="font-sans text-sm font-semibold text-charcoal">Activity Feed</p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vishnje" />
            <div>
              <p className="font-sans text-xs font-medium text-charcoal">{item.label}</p>
              <p className="font-sans text-[10px] text-stone">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SoftwareSection() {
  return (
    <Section bg="cream">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto flex w-full max-w-md flex-col gap-4 lg:hidden">
          <NetEarningsCard />
          <ActivityFeedCard />
        </div>

        <div className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block">
          <div className="absolute left-0 top-0 w-[85%]">
            <NetEarningsCard />
          </div>
          <div className="absolute right-0 top-4 z-10">
            <ActivityFeedCard />
          </div>
        </div>

        <div>
          <SerifHeading size="h2" className="text-charcoal">
            Your property. Your numbers. Live.
          </SerifHeading>
          <p className="mt-5 font-sans leading-relaxed text-stone">
            Every booking. Every payout. Every cleaning. Open the Prago owner portal and see exactly what is
            happening in your apartment right now.
          </p>
          {/* TODO: accordion content rebuilt in a later prompt */}
        </div>
      </div>
    </Section>
  );
}
