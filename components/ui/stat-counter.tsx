"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          decimals > 0 ? latest.toFixed(decimals) : String(Math.round(latest));
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [decimals, prefix, spring, suffix]);

  return (
    <div className="text-center">
      <p className="font-serif text-4xl font-medium text-charcoal md:text-5xl">
        <span ref={ref}>
          {prefix}
          {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
          {suffix}
        </span>
      </p>
      <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.14em] text-stone">{label}</p>
    </div>
  );
}
