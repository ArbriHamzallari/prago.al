import type { Locale } from "./site-copy";
import { SITE_FACTS } from "./site-facts";

// Copy for the standalone /airbnb-vs-qera-mujore landing page. Kept out of the locked
// lib/site-copy.ts on purpose — same precedent as lib/site-copy-new.ts for WhyPrago.
export const COMPARISON_COPY: Record<
  Locale,
  {
    seo: { title: string; description: string };
    hero: { eyebrow: string; h1: string; body: string; cta: string };
    financial: {
      eyebrow: string;
      h2: string;
      intro: string;
      labels: { perMonth: string; perYear: string; inThisExample: string };
      longTerm: { label: string; note: string };
      airbnb: { label: string; grossLabel: string; platformFeeLabel: string; pragoFeeLabel: string; netLabel: string };
      profitabilityNote: string;
      feeExplanation: string;
      disclaimer: string;
    };
    propertyAlive: {
      eyebrow: string;
      h2: string;
      body: string;
      items: { label: string; description: string }[];
    };
    ownerComparison: {
      h2: string;
      longTerm: { label: string; items: string[] };
      airbnb: { label: string; items: string[] };
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
      eyebrow: "PËR PRONARËT",
      h1: "Airbnb apo qira mujore?",
      body: "Krahasoni qiranë mujore me menaxhimin afatshkurtër nga Prago — me një shembull të qartë financiar dhe përfitimet përtej të ardhurave.",
      cta: "MERRNI VLERËSIMIN FILLESTAR"
    },
    financial: {
      eyebrow: "KRAHASIM I THJESHTË",
      h2: "Qira mujore apo qira afatshkurtër?",
      intro:
        "E njëjta pronë mund të funksionojë në dy mënyra shumë të ndryshme. Shikoni si ndryshon rezultati në këtë shembull ilustrues.",
      labels: { perMonth: "/ muaj", perYear: "/ vit", inThisExample: "në këtë shembull" },
      longTerm: {
        label: "QIRA MUJORE",
        note: "Të ardhur fikse mujore, pa menaxhim afatshkurtër."
      },
      airbnb: {
        label: "AIRBNB + PRAGO",
        grossLabel: "Të ardhura bruto nga rezervimet",
        platformFeeLabel: "Komision platforme (12%)",
        pragoFeeLabel: `Tarifa e menaxhimit Prago (${SITE_FACTS.feePercent}%)`,
        netLabel: "Të ardhura neto për pronarin"
      },
      profitabilityNote:
        "Në varësi të pronës, sezonalitetit dhe kërkesës, menaxhimi afatshkurtër mund të jetë më fitimprurës se qiraja mujore.",
      feeExplanation: `Tarifa ${SITE_FACTS.feePercent}% e Prago llogaritet pas zbritjes së komisionit të platformës.`,
      disclaimer:
        "Shembull ilustrues. Shifrat reale varen nga prona, çmimi për natë, sezonaliteti, kërkesa, numri i rezervimeve dhe kostot përkatëse. Të ardhurat nuk janë të garantuara."
    },
    propertyAlive: {
      eyebrow: "NUK ËSHTË VETËM ÇËSHTJE TË ARDHURASH",
      h2: "Prona nuk lihet në pritje.",
      body: "Me qira mujore, prona mund të kalojë muaj të tërë pa u kontrolluar nga pronari. Me menaxhimin afatshkurtër nga Prago, prona përdoret, pastrohet dhe monitorohet vazhdimisht.",
      items: [
        { label: "PASTRIM PAS ÇDO QËNDRIMI", description: "Prona pastrohet dhe përgatitet për vizitorin e radhës." },
        {
          label: "KONTROLL I VAZHDUESHËM",
          description: "Gjendja e pronës ndiqet gjatë gjithë kohës dhe problemet identifikohen më herët."
        },
        { label: "MIRËMBAJTJE NË VEND", description: "Çështjet operative dhe mirëmbajtja koordinohen kur nevojiten." },
        {
          label: "PRONA MBETET AKTIVE",
          description: "Prona nuk lihet thjesht me një qiramarrës dhe një kontratë. Ajo përdoret, kontrollohet dhe kujdeset vazhdimisht."
        }
      ]
    },
    ownerComparison: {
      h2: "Çfarë merrni realisht si pronar?",
      longTerm: {
        label: "QIRA MUJORE",
        items: [
          "Të ardhura fikse",
          "Më pak ndërhyrje në menaxhim",
          "Kontroll më pak i shpeshtë i pronës",
          "Mirëmbajtja zakonisht reaktive",
          "Prona përdoret nga një qiramarrës për periudhë të gjatë"
        ]
      },
      airbnb: {
        label: "AIRBNB + PRAGO",
        items: [
          "Potencial për të ardhura më të larta",
          "Menaxhim i listimit dhe çmimeve",
          "Komunikim me vizitorët",
          "Pastrim dhe përgatitje pas qëndrimeve",
          "Ndjekje e mirëmbajtjes",
          "Raportim për pronarin",
          "Prona kontrollohet dhe përdoret vazhdimisht"
        ]
      }
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
      eyebrow: "FOR PROPERTY OWNERS",
      h1: "Airbnb or long-term rent?",
      body: "Compare long-term renting with short-term management by Prago — with a clear financial example and the benefits beyond income.",
      cta: "GET AN INITIAL ASSESSMENT ON WHATSAPP"
    },
    financial: {
      eyebrow: "SIMPLE COMPARISON",
      h2: "Long-term rent or short-term rental?",
      intro: "The same property can work in two very different ways. See how the result changes in this illustrative example.",
      labels: { perMonth: "/ month", perYear: "/ year", inThisExample: "in this example" },
      longTerm: {
        label: "LONG-TERM RENT",
        note: "Fixed monthly income, no short-term management."
      },
      airbnb: {
        label: "AIRBNB + PRAGO",
        grossLabel: "Gross revenue from bookings",
        platformFeeLabel: "Platform commission (12%)",
        pragoFeeLabel: `Prago management fee (${SITE_FACTS.feePercent}%)`,
        netLabel: "Net income for the owner"
      },
      profitabilityNote:
        "Depending on the property, seasonality, and demand, short-term management can be more profitable than long-term rent.",
      feeExplanation: `The Prago ${SITE_FACTS.feePercent}% fee is calculated after deducting the platform commission.`,
      disclaimer:
        "Illustrative example. Actual figures depend on the property, nightly rate, seasonality, demand, number of bookings, and related costs. Income is not guaranteed."
    },
    propertyAlive: {
      eyebrow: "IT'S NOT ONLY ABOUT INCOME",
      h2: "The property isn't left waiting.",
      body: "With long-term rent, a property can go months without the owner checking on it. With short-term management by Prago, the property is used, cleaned, and monitored continuously.",
      items: [
        { label: "CLEANED AFTER EVERY STAY", description: "The property is cleaned and prepared for the next guest." },
        {
          label: "CONTINUOUS OVERSIGHT",
          description: "The property's condition is tracked at all times, and issues are identified earlier."
        },
        { label: "ON-SITE MAINTENANCE", description: "Operational matters and maintenance are coordinated when needed." },
        {
          label: "THE PROPERTY STAYS ACTIVE",
          description: "The property isn't simply left with a tenant and a contract. It is used, checked, and cared for continuously."
        }
      ]
    },
    ownerComparison: {
      h2: "What do you actually get as an owner?",
      longTerm: {
        label: "LONG-TERM RENT",
        items: [
          "Fixed income",
          "Less involvement in management",
          "Less frequent property checks",
          "Maintenance is usually reactive",
          "The property is used by one tenant over a long period"
        ]
      },
      airbnb: {
        label: "AIRBNB + PRAGO",
        items: [
          "Potential for higher income",
          "Listing and pricing management",
          "Guest communication",
          "Cleaning and preparation after stays",
          "Maintenance follow-up",
          "Owner reporting",
          "The property is checked and used continuously"
        ]
      }
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
