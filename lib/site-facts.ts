export const SITE_FACTS = {
  url: "https://www.prago.al",
  whatsappDisplay: "+355 68 666 9060",
  whatsappDigits: "355686669060",
  email: "stay@prago.al",
  instagram: "https://www.instagram.com/prago.al/",
  feePercent: 20,
  feeBasisSq:
    "Tarifa e menaxhimit është 20% e të ardhurave nga rezervimet, e llogaritur pas zbritjes së komisioneve të platformës dhe kostos së pastrimit.",
  // Direct translation of feeBasisSq, not a separately drafted legal sentence — keep the two
  // in sync by hand if feeBasisSq ever changes. Same verification caveat applies: confirm
  // against the signed agreement before this ships (see rebuild-adaptation-plan.md).
  feeBasisEn:
    "The management fee is 20% of booking revenue, calculated after deducting platform commissions and cleaning costs.",
  legalName: "[INSERT EXACT REGISTERED NAME]",
  nipt: "[INSERT NIPT]",
  serviceAreaSq: "[INSERT CURRENT SERVICE AREA]"
} as const;
