import { ReactNode } from "react";

const BG: Record<string, string> = {
  cream: "bg-cream",
  vishnje: "bg-vishnje",
  sand: "bg-sand",
  white: "bg-white"
};

const PADDING: Record<string, string> = {
  lg: "py-16 sm:py-24 md:py-32",
  md: "py-12 sm:py-16 md:py-24"
};

export function Section({
  id,
  children,
  bg = "cream",
  padding = "lg",
  className = ""
}: {
  id?: string;
  children: ReactNode;
  bg?: keyof typeof BG;
  padding?: keyof typeof PADDING;
  className?: string;
}) {
  return (
    <section id={id} className={`${BG[bg]} ${PADDING[padding]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">{children}</div>
    </section>
  );
}
