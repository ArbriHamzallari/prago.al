"use client";

import { SOFTWARE_ACCORDION } from "@/lib/constants";
import { Accordion } from "./ui/accordion";
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

function OccupancyCard() {
  return (
    <div className="w-[200px] rounded-2xl bg-white p-4 shadow-card">
      <div className="flex gap-1 text-[10px] text-stone">
        <span className="rounded-full bg-sand px-2 py-0.5">Last month</span>
        <span>6 Months</span>
        <span>1 year</span>
      </div>
      <p className="mt-3 font-sans text-xs font-semibold text-charcoal">Occupancy</p>
      <div className="mt-2 flex items-center gap-3">
        <div className="space-y-1 text-[9px] text-stone">
          <p>Occupied 76.6%</p>
          <p>Vacant 10.1%</p>
          <p>Blocked 13.3%</p>
        </div>
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#E8DDD0" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#6E1A2B"
              strokeWidth="4"
              strokeDasharray="70 100"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-serif text-xs">30 Days</span>
        </div>
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
    <div className="w-[220px] rounded-2xl bg-white p-4 shadow-card">
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
  const accordionItems = SOFTWARE_ACCORDION.map((item) => ({
    id: item.id,
    label: item.label,
    description: item.description
  }));

  return (
    <Section bg="cream">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto h-[380px] w-full max-w-md md:h-[420px]">
          <div className="absolute left-0 top-0 w-[85%]">
            <NetEarningsCard />
          </div>
          <div className="absolute right-0 top-4 z-10">
            <ActivityFeedCard />
          </div>
          <div className="absolute bottom-0 left-8 z-10">
            <OccupancyCard />
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
          <div className="mt-8">
            <Accordion items={accordionItems} defaultOpen={0} variant="software" />
          </div>
        </div>
      </div>
    </Section>
  );
}
