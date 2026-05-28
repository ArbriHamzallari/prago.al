"use client";

import { FAQS } from "@/lib/constants";
import { Accordion } from "./ui/accordion";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

export function FAQSection() {
  const items = FAQS.map((faq, i) => ({
    id: `faq-${i}`,
    label: faq.question,
    description: faq.answer
  }));

  return (
    <Section id="faq" bg="cream">
      <div className="mx-auto max-w-3xl">
        <SerifHeading size="h1" className="text-charcoal">
          Questions owners ask before they sign.
        </SerifHeading>
        <div className="mt-10">
          <Accordion items={items} defaultOpen={0} variant="faq" />
        </div>
      </div>
    </Section>
  );
}
