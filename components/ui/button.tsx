import Link from "next/link";
import { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-vishnje text-cream hover:bg-vishnje-soft",
  ghost: "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal/5",
  cream: "bg-cream text-vishnje hover:bg-white",
  charcoal: "bg-charcoal text-cream hover:bg-charcoal/90"
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
  const base =
    "inline-flex items-center justify-center rounded-card font-sans font-medium uppercase tracking-wide transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vishnje";

  const classes = `${base} ${SIZES[size]} ${VARIANTS[variant]} ${className}`;

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
