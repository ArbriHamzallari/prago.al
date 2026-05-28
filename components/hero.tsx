"use client";

import { Camera, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HERO_IMAGE } from "@/lib/constants";
import { Button } from "./ui/button";
import { EyebrowLabel } from "./ui/eyebrow-label";

export function Hero() {
  const [bedrooms, setBedrooms] = useState(1);

  return (
    <section className="relative w-full overflow-hidden pt-[72px]">
      <div className="absolute inset-0 top-[72px] -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Modern Albanian villa with infinity pool"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle gradient overlay so the card stays legible over busy photos */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-charcoal/5 to-transparent" />
      </div>

      {/* Content row: card on left, photography badge floating top-right on desktop */}
      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-10 sm:px-5 sm:py-12 md:min-h-[calc(100vh-72px)] md:px-8 md:py-16">
        <div className="w-full max-w-[560px] rounded-2xl bg-cream p-5 shadow-card sm:p-8 md:p-10">
          <EyebrowLabel className="text-[10px] leading-relaxed tracking-[0.12em] text-charcoal sm:text-xs sm:tracking-[0.16em]">
            AI-POWERED PROPERTY MANAGEMENT · ALBANIA
          </EyebrowLabel>
          <h1 className="mt-4 font-serif text-[1.75rem] font-medium leading-[1.08] text-charcoal min-[400px]:text-3xl sm:text-5xl xl:text-6xl">
            We run your property better than you do.
          </h1>
          <p className="mt-5 max-w-md font-sans text-base leading-relaxed text-stone">
            Your apartment, run by AI and a local team that never sleeps. Smart pricing. 24/7 guests.
            Spotless turnovers. You keep 80%.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a href="#estimate" className="font-sans text-charcoal underline underline-offset-4">
              Find out how much you can earn ↓
            </a>
            <a href="#estimate" className="font-sans text-charcoal underline underline-offset-4">
              Book a free consultation
            </a>
          </div>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "#estimate";
            }}
          >
            <div className="flex flex-col overflow-hidden rounded-xl border border-sand sm:flex-row">
              <input
                type="text"
                placeholder="Start typing your address..."
                className="min-w-0 flex-1 bg-white px-4 py-3.5 font-sans text-sm text-charcoal placeholder:text-stone outline-none"
                aria-label="Property address"
              />
              <div className="flex items-center justify-between gap-3 border-t border-sand bg-white px-4 py-2.5 text-charcoal sm:border-l sm:border-t-0">
                <span className="font-sans text-xs font-medium uppercase tracking-wide text-charcoal">
                  Bedrooms
                </span>
                <div className="flex items-center">
                  <button
                    type="button"
                    aria-label="Decrease bedrooms"
                    className="rounded-full border border-sand p-1 hover:bg-sand/50"
                    onClick={() => setBedrooms((b) => Math.max(1, b - 1))}
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="mx-3 w-5 text-center font-sans text-sm font-semibold">{bedrooms}</span>
                  <button
                    type="button"
                    aria-label="Increase bedrooms"
                    className="rounded-full border border-sand p-1 hover:bg-sand/50"
                    onClick={() => setBedrooms((b) => b + 1)}
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
            <Button type="submit" variant="primary" className="mt-4 w-full">
              Get my free estimate
            </Button>
          </form>
        </div>

        {/* Floating photography badge — Houst-style */}
        <div className="absolute right-6 top-24 hidden rounded-full bg-cream p-6 text-center shadow-card lg:right-12 lg:top-28 lg:block">
          <Camera className="mx-auto h-8 w-8 text-vishnje" strokeWidth={1.5} />
          <p className="mt-3 max-w-[150px] font-sans text-xs leading-snug text-charcoal">
            We include <strong className="font-semibold">free professional photography</strong> with every
            onboarding
          </p>
        </div>
      </div>
    </section>
  );
}
