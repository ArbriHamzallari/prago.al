"use client";

import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BOOKINGS = [
  { startCol: 2, span: 5, name: "Simon Holland", color: "bg-booking-blue", img: 12, top: 56 },
  { startCol: 1, span: 4, name: "Anna Hilson", color: "bg-vishnje-soft", img: 5, top: 108 },
  { startCol: 5, span: 3, name: "Alex Merhige", color: "bg-sand text-charcoal", img: 8, top: 160 }
];

export function CalendarMockupSection() {
  return (
    <section className="relative overflow-hidden bg-vishnje py-16 sm:py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-3xl bg-vishnje-soft/30" />
        <div className="absolute right-10 top-32 h-48 w-72 rounded-3xl bg-vishnje-soft/20" />
        <div className="absolute bottom-20 left-1/4 h-56 w-80 rounded-3xl bg-vishnje-soft/25" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-5 lg:px-8">
        <div className="relative">
          <div className="rounded-2xl bg-white p-4 shadow-card sm:p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                className="rounded-full border border-sand px-4 py-2 font-sans text-sm font-medium text-charcoal"
              >
                July 2026 ▾
              </button>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous month" className="rounded-full p-2 hover:bg-sand/40">
                  <ChevronLeft className="h-5 w-5 text-stone" />
                </button>
                <button type="button" aria-label="Next month" className="rounded-full p-2 hover:bg-sand/40">
                  <ChevronRight className="h-5 w-5 text-stone" />
                </button>
              </div>
            </div>

            <div className="relative mt-4 overflow-x-auto sm:mt-6">
              <div className="grid min-w-[300px] grid-cols-7 gap-px">
                {WEEKDAYS.map((d) => (
                  <span key={d} className="pb-2 text-center font-sans text-xs font-medium text-stone">
                    {d}
                  </span>
                ))}
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i >= 2 && i < 33 ? i - 1 : null;
                  return (
                    <div
                      key={i}
                      className="relative min-h-[40px] border-t border-sand/40 pt-1.5 text-center font-sans text-[10px] text-stone sm:min-h-[48px] sm:pt-2 sm:text-xs"
                    >
                      {day}
                    </div>
                  );
                })}
              </div>

              {BOOKINGS.map((b) => (
                <div
                  key={b.name}
                  className="pointer-events-none absolute grid w-full grid-cols-7 gap-px px-0"
                  style={{ top: b.top }}
                >
                  <div
                    className={`flex items-center gap-2 rounded-full px-2 py-1 ${b.color} text-cream`}
                    style={{ gridColumn: `${b.startCol} / span ${b.span}` }}
                  >
                    <Image
                      src={`https://i.pravatar.cc/40?img=${b.img}`}
                      alt=""
                      width={22}
                      height={22}
                      className="rounded-full"
                    />
                    <span className="hidden truncate font-sans text-[10px] font-medium min-[420px]:inline sm:text-xs">
                      {b.name}
                    </span>
                  </div>
                  <div
                    className="flex items-center justify-center"
                    style={{ gridColumn: `${b.startCol + b.span}` }}
                  >
                    <Sparkles className="h-3.5 w-3.5 text-vishnje-soft" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -right-2 top-1/3 z-10 hidden max-w-[260px] rounded-2xl bg-white p-4 shadow-card md:block lg:-right-20">
            <div className="absolute -left-2 top-8 h-4 w-4 rotate-45 bg-white" aria-hidden />
            <div className="flex items-start gap-2">
              <Image src="https://i.pravatar.cc/40?img=12" alt="" width={32} height={32} className="rounded-full" />
              <p className="font-sans text-xs leading-relaxed text-charcoal">
                <strong>Upcoming booking:</strong> Simon Holland, 7 nights. Check-in Fri Jul 4. Check-out Fri
                Jul 11.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
