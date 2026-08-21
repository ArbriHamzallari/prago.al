import type { Locale } from "./site-copy";

// WhyPrago's copy — not in the locked lib/site-copy.ts, so it lives here instead
// (see the redesign guardrails and docs/rebuild-adaptation-plan.md).
export const SITE_COPY_NEW: Record<
  Locale,
  {
    chaosOrder: {
      eyebrow: string;
      h2: string;
      withoutLabel: string;
      withoutItems: string[];
      withLabel: string;
      withItems: string[];
    };
  }
> = {
  sq: {
    chaosOrder: {
      eyebrow: "PSE PRAGO",
      h2: "Një pronë nuk duhet të bëhet një punë e dytë.",
      withoutLabel: "PA PRAGO",
      withoutItems: [
        "Mesazh në WhatsApp",
        "Njoftim rezervimi",
        "Kërkesë pastrimi",
        "Mesazh vizitori",
        "Çështje mirëmbajtjeje",
        "Vendim çmimi"
      ],
      withLabel: "ME PRAGO",
      withItems: ["Rezervimet", "Të ardhurat", "Statusi i pronës", "Raportimi"]
    }
  },
  en: {
    chaosOrder: {
      eyebrow: "WHY PRAGO",
      h2: "A property shouldn't become a second job.",
      withoutLabel: "WITHOUT PRAGO",
      withoutItems: [
        "WhatsApp message",
        "Booking notification",
        "Cleaning request",
        "Guest message",
        "Maintenance issue",
        "Pricing decision"
      ],
      withLabel: "WITH PRAGO",
      withItems: ["Bookings", "Income", "Property status", "Reporting"]
    }
  }
} as const;
