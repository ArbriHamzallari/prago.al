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
      withItems: { label: string; detail: string }[];
    };
    serviceSwitcher: {
      eyebrow: string;
      h2: string;
      intro: string;
      imageDisclosure: string;
      features: { tag: string; label: string; description: string }[];
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
      withItems: [
        {
          label: "Rezervimet",
          detail: "Çdo rezervim sinkronizohet automatikisht, pa ju dashur t'i ndiqni një nga një."
        },
        {
          label: "Të ardhurat",
          detail: "Qartësi në kohë reale se sa fiton çdo pronë, pa llogaritje manuale."
        },
        {
          label: "Statusi i pronës",
          detail: "Dini menjëherë nëse prona është e zënë, në pastrim, apo gati për vizitorin tjetër."
        },
        {
          label: "Raportimi",
          detail: "Raporte mujore për pronarin, të gjeneruara automatikisht — pa Excel."
        }
      ]
    },
    serviceSwitcher: {
      eyebrow: "SHËRBIMET",
      h2: "Çdo detaj që kërkon një qëndrim i mirë.",
      intro: "Prago koordinon punën pas rezervimit, jo vetëm praninë e pronës në platforma.",
      imageDisclosure: "Pamje ilustruese",
      features: [
        {
          tag: "LISTIMI & ÇMIMI",
          label: "Kalendar dhe çmim gjithmonë të përditësuar",
          description:
            "Listimi, fotot dhe çmimi për natë përditësohen vazhdimisht në çdo kanal — sipas kërkesës reale, jo me hamendje."
        },
        {
          tag: "VIZITORËT & REZERVIMET",
          label: "Komunikim i vazhdueshëm me vizitorët",
          description:
            "Çdo mesazh, hyrje dhe kërkesë rezervimi trajtohet drejtpërdrejt me vizitorët — ju mbeteni të informuar, jo të përfshirë."
        },
        {
          tag: "PRONA & OPERACIONET",
          label: "Pastrim dhe mirëmbajtje e koordinuar",
          description:
            "Pastrimi, përgatitja mes rezervimeve dhe çështjet e mirëmbajtjes koordinohen në terren — prona është gjithmonë gati."
        },
        {
          tag: "RAPORTIMI",
          label: "Pasqyrë e qartë çdo muaj",
          description:
            "Çdo muaj merrni një pasqyrë të rezervimeve, të ardhurave, kostove dhe çështjeve operative — pa pasur nevojë të kërkoni."
        }
      ]
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
      withItems: [
        {
          label: "Bookings",
          detail: "Every reservation synced automatically — nothing to chase or reconcile by hand."
        },
        {
          label: "Income",
          detail: "Clear, real-time visibility into what each property is earning."
        },
        {
          label: "Property status",
          detail: "Know instantly if a property is occupied, being cleaned, or ready for the next guest."
        },
        {
          label: "Reporting",
          detail: "Monthly owner reports generated automatically — no spreadsheets required."
        }
      ]
    },
    serviceSwitcher: {
      eyebrow: "SERVICES",
      h2: "Every detail a good stay requires.",
      intro: "Prago coordinates the work behind the booking, not just the property's presence on platforms.",
      imageDisclosure: "Illustrative preview",
      features: [
        {
          tag: "LISTING & PRICING",
          label: "Calendar & pricing, always current",
          description:
            "Your listing, photos, and nightly rate stay current across every channel — priced to actual demand, not guesswork."
        },
        {
          tag: "GUESTS & BOOKINGS",
          label: "Guest communication, handled",
          description:
            "Every message, check-in, and booking request is handled directly with your guests — you stay informed, not involved."
        },
        {
          tag: "PROPERTY & OPERATIONS",
          label: "Cleaning & maintenance, coordinated",
          description:
            "Cleaning, turnovers, and maintenance issues are coordinated on the ground — so the property is always ready."
        },
        {
          tag: "REPORTING",
          label: "A clear report, every month",
          description:
            "Every month you get a clear overview of bookings, income, costs, and operational matters — no digging required."
        }
      ]
    }
  }
} as const;
