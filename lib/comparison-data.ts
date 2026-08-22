import { SITE_FACTS } from "./site-facts";

// Locked illustrative example — see docs conversation. Do not replace with market research or
// invent alternative figures; these are a single hypothetical property used to explain the
// mechanics of the fee stack, not a market average or a Prago performance claim.
export const COMPARISON_INPUTS = {
  longTermMonthlyRent: 500,
  airbnbGrossMonthly: 1200,
  platformFeePercent: 12,
  pragoFeePercent: SITE_FACTS.feePercent
} as const;

function computeComparison() {
  const { longTermMonthlyRent, airbnbGrossMonthly, platformFeePercent, pragoFeePercent } = COMPARISON_INPUTS;

  const platformFee = airbnbGrossMonthly * (platformFeePercent / 100);
  const afterPlatformFee = airbnbGrossMonthly - platformFee;
  // The Prago fee is calculated on revenue AFTER the platform commission, per SITE_FACTS.feeBasisSq/En —
  // never on the original gross figure.
  const pragoFee = afterPlatformFee * (pragoFeePercent / 100);
  const ownerNetMonthly = afterPlatformFee - pragoFee;

  const longTermAnnual = longTermMonthlyRent * 12;
  const ownerNetAnnual = ownerNetMonthly * 12;

  const monthlyDifference = ownerNetMonthly - longTermMonthlyRent;
  const annualDifference = monthlyDifference * 12;
  const percentageDifference = (monthlyDifference / longTermMonthlyRent) * 100;

  return {
    longTermMonthlyRent,
    longTermAnnual,
    airbnbGrossMonthly,
    platformFeePercent,
    platformFee,
    afterPlatformFee,
    pragoFeePercent,
    pragoFee,
    ownerNetMonthly,
    ownerNetAnnual,
    monthlyDifference,
    annualDifference,
    percentageDifference
  };
}

export const COMPARISON = computeComparison();

// Fixed comma-grouping regardless of locale, so displayed values match the locked example
// (€10,138) rather than varying by locale's number-formatting convention.
export function formatEUR(value: number): string {
  return `€${Math.round(value).toLocaleString("en-US")}`;
}

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}
