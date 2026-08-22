"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { useFineHover } from "@/lib/use-fine-hover";

const HOVER_SPRING = { type: "spring", bounce: 0, duration: 0.3 } as const;

// Shared restrained hover feedback for anything that reads as a "card" but isn't boxed —
// a passive hover, not a flick, so critically damped with no bounce (see apple-design skill).
export function HoverLift({
  children,
  y = -4,
  className = ""
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  const fineHover = useFineHover();
  const reduceMotion = useReducedMotion();
  const whileHover = !reduceMotion && fineHover ? { y, transition: HOVER_SPRING } : undefined;

  return (
    <motion.div whileHover={whileHover} className={className}>
      {children}
    </motion.div>
  );
}
