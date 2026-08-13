export type Locale = "sq" | "en";

export const SITE_COPY = {
  sq: {
    nav: {
      links: [
        { label: "Shërbimet", href: "#services" },
        { label: "Si funksionon", href: "#process" },
        { label: "Raportimi", href: "#reporting" },
        { label: "Tarifa", href: "#pricing" },
        { label: "Pyetje", href: "#faq" }
      ],
      cta: "Vlerësimi fillestar"
    },
    hero: {
      eyebrow: "MENAXHIM PROFESIONAL I QIRAVE AFATSHKURTRA",
      h1: "Ju zotëroni pronën. Ne menaxhojmë çdo detaj.",
      body: "Nga çmimi dhe rezervimet, te komunikimi me vizitorët, pastrimi dhe mirëmbajtja — me ekip lokal dhe raportim të qartë.",
      cta: "MERRNI VLERËSIMIN FILLESTAR",
      helper: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp."
    },
    trustBand: {
      // Visually hidden — this section has no visible title by design, but every section
      // needs a real heading relationship for screen-reader users (see rebuild-adaptation-plan.md).
      srHeading: "Pse Prago",
      items: [
        {
          title: "Ekip lokal në terren",
          body: "Një ekip që ndjek pronën, jo vetëm rezervimin."
        },
        {
          title: "Raportim i qartë për pronarin",
          body: "Rezervimet, të ardhurat dhe çështjet operative në një pasqyrë të kuptueshme."
        },
        {
          title: "Menaxhim nga fillimi në fund",
          body: "Nga listimi dhe çmimi, te pastrimi, kujdesi dhe komunikimi me vizitorët."
        }
      ]
    },
    serviceScope: {
      title: "Çdo detaj që kërkon një qëndrim i mirë.",
      intro: "Prago koordinon punën pas rezervimit, jo vetëm praninë e pronës në platforma.",
      columns: [
        {
          label: "LISTIMI & ÇMIMI",
          items: [
            "Përgatitja e listimit dhe fotografive",
            "Çmimi për natë i përshtatur sipas kërkesës",
            "Menaxhimi i kalendarit dhe kanaleve të shitjes"
          ]
        },
        {
          label: "VIZITORËT & REZERVIMET",
          items: [
            "Komunikimi me vizitorët",
            "Koordinimi i hyrjes dhe daljes",
            "Ndjekja e rezervimeve dhe kërkesave"
          ]
        },
        {
          label: "PRONA & OPERACIONET",
          items: [
            "Koordinimi i pastrimit dhe përgatitjes",
            "Ndjekja e mirëmbajtjes dhe problemeve",
            "Raportimi periodik për pronarin"
          ]
        }
      ],
      channelsNote: "Prona publikohet vetëm në kanalet që Prago menaxhon realisht për atë pronë."
    },
    process: {
      title: "Si fillon bashkëpunimi",
      steps: [
        {
          num: "01",
          title: "Na dërgoni pronën",
          body: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp."
        },
        {
          num: "02",
          title: "Ne bëjmë vlerësimin fillestar",
          body: "Vlerësojmë përshtatshmërinë, intervalin e çmimit për natë dhe periudhat me më shumë kërkesë."
        },
        {
          num: "03",
          title: "Takohemi dhe përgatisim propozimin",
          body: "Nëse prona përshtatet, organizojmë vizitën dhe përgatisim propozimin e menaxhimit."
        }
      ],
      cta: "MERRNI VLERËSIMIN FILLESTAR"
    },
    propertyStory: {
      eyebrow: "Rast në përgatitje",
      h2: "Coastal Paradise: nga prona te një eksperiencë e gatshme për vizitorë.",
      body: "Prago po dokumenton çdo hap të përgatitjes së kësaj prone — nga paraqitja dhe fotografitë, te organizimi i operacioneve dhe standardi i pritjes.",
      disclosure: "Rezultatet do të publikohen vetëm pasi të ketë të dhëna të verifikueshme.",
      gridLabel: "Punë në proces"
    },
    ownerVisibility: {
      eyebrow: "TRANSPARENCË PËR PRONARIN",
      h2: "Kontrolli mbetet te ju.",
      body: "Çdo muaj merrni një pasqyrë të rezervimeve, të ardhurave, kostove dhe çështjeve operative. Kur ka një vendim që kërkon miratimin tuaj, ju njoftojmë.",
      caption: "Shembull i raportit mujor — të dhënat janë anonimizuar.",
      items: ["Rezervimet", "Të ardhurat", "Kostot", "Çështjet operative"]
    },
    pricing: {
      eyebrow: "TARIFË E QARTË",
      // The "20%" itself is interpolated from SITE_FACTS.feePercent at render time, not
      // hardcoded here — see components/pricing.tsx. This is only the text that follows it.
      titleSuffix: "për menaxhimin e plotë.",
      includes: "Menaxhimi i listimit, çmimit, kalendarit, komunikimit me vizitorët, koordinimit të operacioneve dhe raportimit për pronarin.",
      disclosure: "Kostot e mirëmbajtjes, materialeve dhe shërbimeve të palëve të treta paraqiten veçmas kur aplikohen.",
      cta: "MERRNI VLERËSIMIN FILLESTAR"
    },
    faq: {
      title: "Pyetje të shpeshta",
      items: [
        {
          question: "Çfarë përfshin tarifa 20%?",
          answer:
            "Tarifa mbulon menaxhimin e listimit, çmimit, kalendarit, komunikimit me vizitorët, koordinimit të hyrje-daljeve, operacioneve dhe raportimit mujor. Kostot e mirëmbajtjes, materialeve dhe shërbimeve të palëve të treta paraqiten veçmas kur aplikohen."
        },
        {
          question: "Si e përcaktoni çmimin për natë?",
          answer:
            "Çmimi rishikohet sipas kërkesës, sezonit, ditëve të javës, eventeve dhe performancës reale të pronës. Prago nuk garanton të ardhura ose zënie fikse."
        },
        {
          question: "A mund ta përdor pronën kur dua?",
          answer:
            "Datat e përdorimit nga pronari bllokohen në kalendar me njoftim paraprak, sipas kushteve të marrëveshjes së menaxhimit."
        },
        {
          question: "Kush paguan pastrimin dhe mirëmbajtjen?",
          answer:
            "Tarifa e pastrimit dhe mënyra e faturimit përcaktohen në listim dhe në marrëveshje. Mirëmbajtja dhe materialet i komunikohen pronarit sipas procedurës së miratimit të përcaktuar në kontratë."
        },
        {
          question: "Çfarë pronash pranon Prago?",
          answer:
            "Vlerësojmë vendndodhjen, gjendjen, kapacitetin, aksesin, disponueshmërinë dhe potencialin operativ. Jo çdo pronë pranohet për menaxhim."
        },
        {
          question: "Sa zgjat procesi deri te publikimi?",
          answer:
            "Pas vlerësimit fillestar, nëse prona përshtatet, organizojmë vizitën dhe propozimin. Afati i publikimit përcaktohet pas inspektimit dhe varet nga puna e nevojshme për ta bërë pronën gati."
        }
      ]
    },
    finalCta: {
      h2: "Doni të dini nëse prona juaj përshtatet?",
      body: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp. Do t'ju përgjigjemi pasi ta shqyrtojmë.",
      cta: "MERRNI VLERËSIMIN FILLESTAR",
      disclaimer: "Vlerësimi është fillestar dhe nuk përbën garanci të ardhurash."
    },
    footer: {
      tagline: "Menaxhim profesional i qirave afatshkurtra.",
      legalLinks: {
        privacy: "Politika e privatësisë",
        terms: "Kushtet",
        otherLanguage: "English"
      }
    }
  },
  en: {
    nav: {
      links: [
        { label: "Services", href: "#services" },
        { label: "How it works", href: "#process" },
        { label: "Reporting", href: "#reporting" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ],
      cta: "Initial assessment"
    },
    hero: {
      eyebrow: "PROFESSIONAL SHORT-TERM RENTAL MANAGEMENT",
      h1: "You own the property. We manage every detail.",
      body: "From pricing and bookings to guest communication, cleaning and maintenance — with a local team and clear reporting.",
      cta: "GET AN INITIAL ASSESSMENT",
      helper: "Send us the location and 4–5 photos on WhatsApp."
    },
    trustBand: {
      srHeading: "Why Prago",
      items: [
        {
          title: "Local team on the ground",
          body: "A team that looks after the property, not just the booking."
        },
        {
          title: "Clear reporting for owners",
          body: "Bookings, income, and operational matters in one clear overview."
        },
        {
          title: "End-to-end management",
          body: "From listing and pricing to cleaning, upkeep, and guest communication."
        }
      ]
    },
    serviceScope: {
      title: "Every detail a good stay requires.",
      intro: "Prago coordinates the work behind each booking, not just the property's presence on platforms.",
      columns: [
        {
          label: "LISTING & PRICING",
          items: [
            "Listing and photo preparation",
            "Nightly rate adjusted to demand",
            "Calendar and sales-channel management"
          ]
        },
        {
          label: "GUESTS & BOOKINGS",
          items: [
            "Guest communication",
            "Check-in and check-out coordination",
            "Booking and inquiry follow-up"
          ]
        },
        {
          label: "PROPERTY & OPERATIONS",
          items: [
            "Cleaning and turnover coordination",
            "Maintenance and issue follow-up",
            "Periodic reporting for the owner"
          ]
        }
      ],
      channelsNote: "The property is published only on the channels Prago actually manages for it."
    },
    process: {
      title: "How the partnership begins",
      steps: [
        {
          num: "01",
          title: "You send us the property",
          body: "Send us the location and 4–5 photos on WhatsApp."
        },
        {
          num: "02",
          title: "We do the initial assessment",
          body: "We assess suitability, the nightly rate range, and higher-demand periods."
        },
        {
          num: "03",
          title: "We meet and prepare the proposal",
          body: "If the property is a fit, we arrange a visit and prepare the management proposal."
        }
      ],
      cta: "GET AN INITIAL ASSESSMENT"
    },
    propertyStory: {
      eyebrow: "Case in preparation",
      h2: "Coastal Paradise: from property to a guest-ready experience.",
      body: "Prago is documenting every step of preparing this property — from presentation and photography to operations setup and the hospitality standard.",
      disclosure: "Results will be published only once there is verifiable data.",
      gridLabel: "Work in progress"
    },
    ownerVisibility: {
      eyebrow: "TRANSPARENCY FOR OWNERS",
      h2: "You remain in control.",
      body: "Every month you receive an overview of bookings, income, costs, and operational matters. When a decision needs your approval, we let you know.",
      caption: "Example of the monthly report — data has been anonymized.",
      items: ["Bookings", "Income", "Costs", "Operational matters"]
    },
    pricing: {
      eyebrow: "A CLEAR FEE",
      // The "20%" itself is interpolated from SITE_FACTS.feePercent at render time, not
      // hardcoded here — see components/pricing.tsx. This is only the text that follows it.
      titleSuffix: "for full management.",
      includes: "Management of listing, pricing, calendar, guest communication, operations coordination, and owner reporting.",
      disclosure: "Maintenance, materials, and third-party service costs are itemized separately when they apply.",
      cta: "GET AN INITIAL ASSESSMENT"
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "What does the 20% fee include?",
          answer:
            "The fee covers management of the listing, pricing, calendar, guest communication, check-in/check-out coordination, operations, and monthly reporting. Maintenance, materials, and third-party service costs are itemized separately when they apply."
        },
        {
          question: "How do you determine the nightly rate?",
          answer:
            "The rate is reviewed based on demand, season, day of the week, events, and the property's actual performance. Prago does not guarantee fixed income or occupancy."
        },
        {
          question: "Can I use the property whenever I want?",
          answer:
            "Owner-use dates are blocked on the calendar with advance notice, according to the terms of the management agreement."
        },
        {
          question: "Who pays for cleaning and maintenance?",
          answer:
            "The cleaning fee and billing method are set out in the listing and the agreement. Maintenance and materials are communicated to the owner following the approval procedure defined in the contract."
        },
        {
          question: "What properties does Prago accept?",
          answer:
            "We assess location, condition, capacity, access, availability, and operational potential. Not every property is accepted for management."
        },
        {
          question: "How long does the process take until launch?",
          answer:
            "After the initial assessment, if the property is a fit, we arrange the visit and the proposal. The launch timeline is determined after inspection and depends on the work needed to get the property ready."
        }
      ]
    },
    finalCta: {
      h2: "Would you like to know whether your property is a fit?",
      body: "Send us the location and 4–5 photos on WhatsApp. We'll get back to you once we've reviewed it.",
      cta: "GET AN INITIAL ASSESSMENT",
      disclaimer: "The assessment is preliminary and does not constitute a guarantee of income."
    },
    footer: {
      tagline: "Professional short-term rental management.",
      legalLinks: {
        privacy: "Privacy Policy",
        terms: "Terms",
        otherLanguage: "Shqip"
      }
    }
  }
} as const;
