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
        english: "English"
      }
    }
  }
  // TODO(Prompt 6): add an `en` key with the same shape once English copy is locked.
} as const;
