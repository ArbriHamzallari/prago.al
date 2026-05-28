"use client";

import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";
import { Button } from "./ui/button";
import { PhoneMockup } from "./ui/phone-mockup";

export function IncomeSection() {
  return (
    <Section bg="cream">
      <div className="mx-auto max-w-3xl text-center">
        <SerifHeading size="h1" className="text-charcoal">
          Your apartment is underearning. We can prove it.
        </SerifHeading>
        <p className="mt-6 font-sans text-lg leading-relaxed text-stone">
          Static prices in August. Empty nights in October. Replies that come too late. Every week you wait is
          revenue you will never get back.
        </p>
        <p className="mt-4 font-sans leading-relaxed text-stone">
          See what your property could really earn. Free estimate. No commitment.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#estimate" className="font-sans text-charcoal underline underline-offset-4">
            Find out how much you can earn ↓
          </a>
          <a href="#estimate" className="font-sans text-charcoal underline underline-offset-4">
            Book a free consultation
          </a>
        </div>
        <Button href="#estimate" variant="primary" className="mt-8">
          Earn more
        </Button>
      </div>

      <div className="-mx-4 mt-12 flex items-end gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:-mx-5 sm:mt-16 sm:px-5 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:gap-8 lg:px-0 [&::-webkit-scrollbar]:hidden">
        <PhoneMockup screen="bookings" />
        <PhoneMockup screen="performance" />
        <PhoneMockup screen="calendar" />
      </div>
    </Section>
  );
}
