"use client";

import { motion } from "framer-motion";
import { Brain, ChartNoAxesCombined, MessageSquareReply, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { AI_FEATURES, AI_FEED_MESSAGES } from "@/lib/constants";
import { EyebrowLabel } from "./ui/eyebrow-label";
import { Section } from "./ui/section";
import { SerifHeading } from "./ui/serif-heading";

const ICONS = [ChartNoAxesCombined, MessageSquareReply, Brain, Users];

export function AIDifferenceSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % AI_FEED_MESSAGES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="why-prago" bg="vishnje">
      <EyebrowLabel className="text-cream/60">THE PRAGO DIFFERENCE</EyebrowLabel>
      <SerifHeading size="h1" className="mt-4 max-w-3xl text-cream">
        Hotels priced rooms by the night for a century. Now your apartment does too.
      </SerifHeading>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {AI_FEATURES.map((feature, i) => {
          const Icon = ICONS[i];
          return (
            <motion.article
              key={feature.title}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-cream p-6 text-charcoal shadow-card"
            >
              <Icon className="mb-4 h-6 w-6 text-vishnje" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">{feature.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-stone">{feature.body}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-cream/20 bg-vishnje-dark/50 p-6 shadow-card backdrop-blur-sm">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-cream/60">
          Live AI activity
        </p>
        <motion.p
          key={AI_FEED_MESSAGES[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-3 font-sans text-lg text-cream"
        >
          {AI_FEED_MESSAGES[index]}
        </motion.p>
      </div>
    </Section>
  );
}
