"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const STEPS = [
  {
    num: "01",
    title: "Talk to us.",
    body: "Free call or visit. We tell you exactly what your property can earn. No fluff."
  },
  {
    num: "02",
    title: "We set it up.",
    body: "Photos, listing, pricing, smart lock, AI. All configured. Live in days, not months."
  },
  {
    num: "03",
    title: "You earn.",
    body: "Bookings roll in. Payouts hit your account. You watch the numbers grow."
  }
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" bg="sand">
      <SerifHeading size="h1" className="text-charcoal">
        From keys to cash in three steps.
      </SerifHeading>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="font-serif text-5xl font-medium text-vishnje/30">{step.num}</p>
            <h3 className="mt-4 font-serif text-2xl font-medium text-charcoal">{step.title}</h3>
            <p className="mt-3 font-sans leading-relaxed text-stone">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
