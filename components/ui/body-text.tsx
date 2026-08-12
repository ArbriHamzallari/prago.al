import { ReactNode } from "react";

export function BodyText({
  children,
  as: Tag = "p",
  className = ""
}: {
  children: ReactNode;
  as?: "p" | "span" | "div";
  className?: string;
}) {
  return (
    <Tag
      className={`max-w-[640px] font-sans text-[17px] font-normal leading-[27px] md:leading-[28px] lg:text-[18px] lg:leading-[30px] ${className}`}
    >
      {children}
    </Tag>
  );
}
