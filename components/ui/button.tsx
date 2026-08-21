import Link from "next/link";
import { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-vishnje text-cream hoverable:hover:bg-vishnje-soft",
  ghost: "border border-charcoal bg-transparent text-charcoal hoverable:hover:bg-charcoal/5",
  cream: "bg-cream text-vishnje hoverable:hover:bg-white",
  charcoal: "bg-charcoal text-cream hoverable:hover:bg-charcoal/90"
};

// "cream" is the only variant used on a burgundy section background (Pricing) — its ring
// needs to stay visible against that background, so it gets the cream ring instead of vishnje.
const FOCUS_RING: Record<keyof typeof VARIANTS, string> = {
  primary: "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje",
  ghost: "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje",
  charcoal: "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje",
  cream: "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream"
};

// "default" meets the Prompt 2 primary-CTA spec (52px min height, 24px horizontal padding).
// "compact" is for tight contexts like the sticky header, kept as a real size — not a class override.
const SIZES = {
  default: "min-h-[52px] px-[24px] py-3 text-sm",
  compact: "min-h-[44px] px-3 py-2 text-[11px]"
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  type = "button",
  className = "",
  onClick,
  target,
  rel,
  id,
  "aria-label": ariaLabel
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  id?: string;
  "aria-label"?: string;
}) {
  const base = "inline-flex items-center justify-center rounded-card font-sans font-medium uppercase tracking-[0.08em] transition";

  const classes = `${base} ${SIZES[size]} ${VARIANTS[variant]} ${FOCUS_RING[variant]} ${className}`;

  if (href) {
    return (
      <Link
        id={id}
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button id={id} type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
