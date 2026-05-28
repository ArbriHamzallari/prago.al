import { ReactNode } from "react";

const SIZES = {
  display: "text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4rem]",
  h1: "text-3xl font-medium leading-tight sm:text-4xl md:text-5xl lg:text-[3.5rem]",
  h2: "text-3xl font-medium leading-tight md:text-4xl lg:text-[2.75rem]",
  h3: "text-2xl font-medium leading-snug md:text-3xl"
};

export function SerifHeading({
  children,
  size = "h2",
  as: Tag = "h2",
  className = ""
}: {
  children: ReactNode;
  size?: keyof typeof SIZES;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
}) {
  return <Tag className={`font-serif ${SIZES[size]} ${className}`}>{children}</Tag>;
}
