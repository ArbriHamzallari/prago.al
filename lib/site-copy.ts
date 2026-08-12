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
    }
  }
  // TODO(Prompt 6): add an `en` key with the same shape once English copy is locked.
} as const;
