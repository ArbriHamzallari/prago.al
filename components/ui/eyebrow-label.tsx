import { ReactNode } from "react";

export function EyebrowLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-sans text-xs font-medium uppercase tracking-[0.16em] text-stone ${className}`}>
      {children}
    </p>
  );
}
