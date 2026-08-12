import { ReactNode } from "react";

export function EyebrowLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-sans text-[13px] font-semibold leading-[18px] uppercase tracking-[0.16em] text-stone ${className}`}
    >
      {children}
    </p>
  );
}
