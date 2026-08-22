import type { Locale } from "./site-copy";
import { SITE_FACTS } from "./site-facts";

// Copy for the standalone /airbnb-vs-qera-mujore landing page. Kept out of the locked
// lib/site-copy.ts on purpose — same precedent as lib/site-copy-new.ts for WhyPrago.
export const COMPARISON_COPY: Record<
  Locale,
  {
    seo: { title: string; description: string };
    hero: { h1: string; body: string; cta: string };
    table: {
      airbnbLabel: string;
      longTermLabel: string;
      monthlyIncomeLabel: string;
      annualIncomeLabel: string;
      rows: { label: string; airbnb: "check" | "cross"; longTerm: "check" | "cross" }[];
      footnote: string;
      feeExplanation: string;
      profitabilityNote: string;
    };
    ownerStory: { h2: string; body: string };
    finalCta: { eyebrow: string; h2: string; body: string; cta: string };
  }
> = {
  sq: {
    seo: {
      title: "Prago | Airbnb apo qira mujore? Krahasimi për pronarët",
      description:
        "Zbuloni ndryshimin mes qirasë mujore dhe menaxhimit afatshkurtër me Prago, me një shembull të qartë të të ardhurave, kostove dhe mirëmbajtjes së pronës."
    },
    hero: {
      h1: "Airbnb apo qira mujore?",
      body: "Krahasoni qiranë mujore me menaxhimin afatshkurtër nga Prago — me një shembull të qartë financiar dhe përfitimet përtej të ardhurave.",
      cta: "MERRNI VLERËSIMIN FILLESTAR"
    },
    table: {
      airbnbLabel: "AIRBNB + PRAGO",
      longTermLabel: "QIRA MUJORE",
      monthlyIncomeLabel: "Të ardhura neto në muaj",
      annualIncomeLabel: "Të ardhura neto në vit",
      rows: [
        { label: "Të ardhura fikse, të garantuara me kontratë", airbnb: "cross", longTerm: "check" },
        { label: "Pastrim pas çdo qëndrimi", airbnb: "check", longTerm: "cross" },
        { label: "Kontroll i vazhdueshëm i pronës", airbnb: "check", longTerm: "cross" },
        { label: "Mirëmbajtje e koordinuar", airbnb: "check", longTerm: "cross" },
        { label: "Komunikim me vizitorët", airbnb: "check", longTerm: "cross" },
        { label: "Menaxhim listimi dhe çmimi", airbnb: "check", longTerm: "cross" },
        { label: "Raportim mujor për pronarin", airbnb: "check", longTerm: "cross" },
        { label: "Prona përdoret në mënyrë aktive", airbnb: "check", longTerm: "cross" }
      ],
      footnote:
        "*Shembull ilustrues. Shifrat reale varen nga prona, çmimi për natë, sezonaliteti, kërkesa, numri i rezervimeve dhe kostot përkatëse. Të ardhurat nuk janë të garantuara.",
      feeExplanation: `Tarifa ${SITE_FACTS.feePercent}% e Prago llogaritet pas zbritjes së komisionit të platformës.`,
      profitabilityNote:
        "Në varësi të pronës, sezonalitetit dhe kërkesës, menaxhimi afatshkurtër mund të jetë më fitimprurës se qiraja mujore."
    },
    ownerStory: {
      h2: "Prona juaj mund të bëjë më shumë se të presë qiranë.",
      body: "Qiraja mujore ju jep një shumë fikse. Menaxhimi afatshkurtër ju jep mundësinë ta përdorni pronën në mënyrë më aktive, ndërsa Prago merret me punën e përditshme pas rezervimit."
    },
    finalCta: {
      eyebrow: "PO PRONA JUAJ?",
      h2: "Le të shohim çfarë mund të bëjë prona juaj.",
      body: "Na dërgoni vendndodhjen dhe 4–5 foto të pronës në WhatsApp. Do ta shqyrtojmë dhe do t'ju japim një vlerësim fillestar.",
      cta: "MERRNI VLERËSIMIN FILLESTAR"
    }
  },
  en: {
    seo: {
      title: "Prago | Airbnb or long-term rent? A comparison for owners",
      description:
        "See the difference between long-term renting and short-term management with Prago, with a clear example of income, costs, and property upkeep."
    },
    hero: {
      h1: "Airbnb or long-term rent?",
      body: "Compare long-term renting with short-term management by Prago — with a clear financial example and the benefits beyond income.",
      cta: "GET AN INITIAL ASSESSMENT ON WHATSAPP"
    },
    table: {
      airbnbLabel: "AIRBNB + PRAGO",
      longTermLabel: "LONG-TERM RENT",
      monthlyIncomeLabel: "Net income per month",
      annualIncomeLabel: "Net income per year",
      rows: [
        { label: "Fixed income, guaranteed by contract", airbnb: "cross", longTerm: "check" },
        { label: "Cleaned after every stay", airbnb: "check", longTerm: "cross" },
        { label: "Continuous property oversight", airbnb: "check", longTerm: "cross" },
        { label: "Coordinated maintenance", airbnb: "check", longTerm: "cross" },
        { label: "Guest communication", airbnb: "check", longTerm: "cross" },
        { label: "Listing and price management", airbnb: "check", longTerm: "cross" },
        { label: "Monthly owner reporting", airbnb: "check", longTerm: "cross" },
        { label: "Property used actively", airbnb: "check", longTerm: "cross" }
      ],
      footnote:
        "*Illustrative example. Actual figures depend on the property, nightly rate, seasonality, demand, number of bookings, and related costs. Income is not guaranteed.",
      feeExplanation: `The Prago ${SITE_FACTS.feePercent}% fee is calculated after deducting the platform commission.`,
      profitabilityNote:
        "Depending on the property, seasonality, and demand, short-term management can be more profitable than long-term rent."
    },
    ownerStory: {
      h2: "Your property can do more than wait for the rent.",
      body: "Long-term rent gives you a fixed amount. Short-term management gives you the opportunity to use the property more actively, while Prago handles the day-to-day work behind each booking."
    },
    finalCta: {
      eyebrow: "WHAT ABOUT YOUR PROPERTY?",
      h2: "Let's see what your property could do.",
      body: "Send us the location and 4–5 photos of the property on WhatsApp. We'll review it and give you an initial assessment.",
      cta: "GET AN INITIAL ASSESSMENT ON WHATSAPP"
    }
  }
} as const;
