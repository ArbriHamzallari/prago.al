import { ReactNode } from "react";

// A large-radius inset color block sitting inside a Section's cream/sand field, with visible
// page margin on all sides — distinct from Section's own bg (TrustBand, Pricing), which spans
// full-bleed edge to edge. Use Panel for the "product/feature block" moments that should read
// as a card floating in the page, not a palette statement spanning the viewport.
const BG = {
  vishnje: "bg-vishnje",
  "vishnje-dark": "bg-vishnje-dark",
  sand: "bg-sand",
  charcoal: "bg-charcoal"
};

export function Panel({
  children,
  bg = "vishnje-dark",
  padding = true,
  className = ""
}: {
  children: ReactNode;
  bg?: keyof typeof BG;
  padding?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-panel ${BG[bg]} ${padding ? "p-8 md:p-12 lg:p-16" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
