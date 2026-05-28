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

      <div className="mt-16 flex flex-wrap items-end justify-center gap-4 md:gap-8">
        <PhoneMockup screen="bookings" />
        <PhoneMockup screen="performance" />
        <PhoneMockup screen="calendar" />
      </div>
    </Section>
  );
}
