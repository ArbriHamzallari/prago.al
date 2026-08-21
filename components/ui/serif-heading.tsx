import { ReactNode } from "react";

// Max flowing-text width for h1 where it wraps as a headline paragraph, not a fixed label.
export const H1_MAX_WIDTH = "680px";

const SIZES = {
  h1: "text-[38px] font-medium leading-[42px] md:text-[52px] md:leading-[56px] lg:text-[64px] lg:leading-[68px]",
  h2: "text-[32px] font-medium leading-[36px] md:text-[40px] md:leading-[44px] lg:text-[48px] lg:leading-[52px]",
  h3: "text-[24px] font-medium leading-[30px] md:text-[26px] md:leading-[32px] lg:text-[30px] lg:leading-[36px]"
};

export function SerifHeading({
  children,
  size = "h2",
  as: Tag = "h2",
  className = "",
  id
}: {
  children: ReactNode;
  size?: keyof typeof SIZES;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={`font-serif ${SIZES[size]} ${className}`}>
      {children}
    </Tag>
  );
}
