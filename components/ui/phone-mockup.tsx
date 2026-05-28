import Image from "next/image";
import type { ReactElement } from "react";

type Screen = "bookings" | "performance" | "calendar";

const TITLES: Record<Screen, string> = {
  bookings: "Bookings",
  performance: "Performance",
  calendar: "Calendar"
};

const ROTATIONS = {
  bookings: "-rotate-6",
  performance: "rotate-0",
  calendar: "rotate-6"
};

function BookingsScreen() {
  const categories = ["Accuracy", "Check-in", "Cleanliness", "Communication", "Location", "Value"];
  return (
    <div className="flex h-full flex-col bg-vishnje p-4 text-cream">
      <p className="font-serif text-2xl">Bookings</p>
      <p className="mt-4 text-xs uppercase tracking-wide text-cream/70">Star reviews</p>
      <div className="mt-2 flex-1 space-y-2">
        {categories.map((cat) => (
          <div key={cat} className="flex items-center justify-between text-[10px]">
            <span>{cat}</span>
            <span className="text-sand">★★★★★</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-cream/15 p-3">
        <p className="text-[9px] uppercase tracking-wide text-cream/60">Upcoming booking</p>
        <div className="mt-2 flex items-center gap-2">
          <Image
            src="https://i.pravatar.cc/40?img=12"
            alt=""
            width={28}
            height={28}
            className="rounded-full"
          />
          <div>
            <p className="text-xs font-medium">Simon Holland</p>
            <p className="text-[9px] text-cream/70">Jul 4 – Jul 11 · 7 nights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PerformanceScreen() {
  const bars = [40, 65, 50, 80, 55, 70, 45];
  return (
    <div className="flex h-full flex-col bg-vishnje p-4 text-cream">
      <p className="font-serif text-2xl">Performance</p>
      <div className="mt-4 flex h-20 items-end gap-1">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-cream" style={{ height: `${h}%` }} />
        ))}
      </div>
      <p className="mt-4 text-xs uppercase tracking-wide text-cream/70">Occupancy</p>
      <div className="mt-2 flex items-center gap-3">
        <div className="relative h-16 w-16 shrink-0">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="#8A2738" strokeWidth="4" />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#FAF6F1"
              strokeWidth="4"
              strokeDasharray="67 100"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center font-serif text-sm">30</span>
        </div>
        <div className="space-y-1 text-[9px]">
          <p>
            <span className="inline-block h-2 w-2 rounded-full bg-cream" /> Occupied 76.6%
          </p>
          <p>
            <span className="inline-block h-2 w-2 rounded-full bg-charcoal" /> Blocked 13.3%
          </p>
          <p>
            <span className="inline-block h-2 w-2 rounded-full bg-sand" /> Vacant 10.1%
          </p>
        </div>
      </div>
      <p className="mt-auto text-[9px] uppercase tracking-wide text-cream/50">Activity Feed</p>
    </div>
  );
}

function CalendarScreen() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="flex h-full flex-col bg-vishnje p-4 text-cream">
      <p className="font-serif text-2xl">Calendar</p>
      <div className="mt-3 grid grid-cols-7 gap-0.5 text-[8px] text-cream/50">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="text-center">
            {d}
          </span>
        ))}
        {days.map((d) => (
          <span key={d} className="text-center text-cream/40">
            {d}
          </span>
        ))}
      </div>
      <div className="mt-2 space-y-1">
        <div className="h-2 w-[85%] rounded-full bg-booking-blue" />
        <div className="h-2 w-[60%] rounded-full bg-vishnje-soft" />
        <div className="h-2 w-[70%] rounded-full bg-sand" />
      </div>
      <div className="mt-auto rounded-xl bg-cream/15 p-2">
        <p className="text-[9px] uppercase text-cream/60">Current booking</p>
        <p className="text-xs font-medium">Amber James</p>
        <p className="text-[9px] text-cream/70">Jul 18 – Jul 24</p>
      </div>
    </div>
  );
}

const SCREENS: Record<Screen, () => ReactElement> = {
  bookings: BookingsScreen,
  performance: PerformanceScreen,
  calendar: CalendarScreen
};

export function PhoneMockup({ screen }: { screen: Screen }) {
  const ScreenContent = SCREENS[screen];
  return (
    <div
      className={`relative mx-auto w-[200px] shrink-0 sm:w-[220px] ${ROTATIONS[screen]}`}
      aria-hidden
    >
      <div className="rounded-[2.5rem] border-[10px] border-charcoal bg-charcoal p-1 shadow-card">
        <div className="overflow-hidden rounded-[2rem]">
          <div className="aspect-[9/19] w-full">
            <ScreenContent />
          </div>
        </div>
      </div>
      <span className="sr-only">{TITLES[screen]} app screen</span>
    </div>
  );
}
