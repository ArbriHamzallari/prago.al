import { ReactNode } from "react";

const BG: Record<string, string> = {
  cream: "bg-cream",
  vishnje: "bg-vishnje",
  sand: "bg-sand",
  white: "bg-white"
};

export function Section({
  id,
  children,
  bg = "cream",
  className = ""
}: {
  id?: string;
  children: ReactNode;
  bg?: keyof typeof BG;
  className?: string;
}) {
  return (
    <section id={id} className={`${BG[bg]} py-[64px] md:py-[80px] lg:py-[112px] ${className}`}>
      <div className="mx-auto max-w-content px-[20px] md:px-[24px] lg:px-[32px]">{children}</div>
    </section>
  );
}
