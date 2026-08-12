import Link from "next/link";
import { ReactNode } from "react";

const VARIANTS = {
  primary: "bg-vishnje text-cream hover:bg-vishnje-soft",
  ghost: "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal/5",
  cream: "bg-cream text-vishnje hover:bg-white",
  charcoal: "bg-charcoal text-cream hover:bg-charcoal/90"
};

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
  onClick
}: {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    "inline-flex min-h-[52px] items-center justify-center rounded-card px-[24px] py-3 font-sans text-sm font-medium uppercase tracking-wide transition hover:-translate-y-0.5";

  const classes = `${base} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
