import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  shadow = true,
  padding = true
}: {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  padding?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl ${shadow ? "shadow-card" : ""} ${padding ? "p-6 md:p-8" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
