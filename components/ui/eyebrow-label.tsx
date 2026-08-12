import { ReactNode } from "react";

// A real tone variant, not a className override — see Button's `size` prop for why:
// overriding a hardcoded color class from the caller's className is not a reliable
// cascade win in Tailwind v4.
const TONES = {
  stone: "text-stone",
  cream: "text-cream/70"
};

export function EyebrowLabel({
  children,
  tone = "stone",
  className = ""
}: {
  children: ReactNode;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <p
      className={`font-sans text-[13px] font-semibold leading-[18px] uppercase tracking-[0.16em] ${TONES[tone]} ${className}`}
    >
      {children}
    </p>
  );
}
