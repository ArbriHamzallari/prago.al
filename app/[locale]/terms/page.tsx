import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { SerifHeading } from "@/components/ui/serif-heading";
import { SITE_FACTS } from "@/lib/site-facts";
import type { Locale } from "@/lib/site-copy";

// Draft legal content — flagged for Arbri/counsel review before this is treated as final;
// see rebuild-adaptation-plan.md. The one substantive claim this page must never soften is
// the preliminary-assessment disclaimer below — it mirrors the locked copy already used
// throughout the site (see finalCta.disclaimer, faq answers, and pricing.disclosure).

type Section = { title: string; body: string[] };

const SECTIONS_SQ: Section[] = [
  {
    title: "Kompania",
    body: [
      `Kjo faqe operohet nga ${SITE_FACTS.legalName} (NIPT ${SITE_FACTS.nipt}), që ofron shërbime menaxhimi për qira afatshkurtra në ${SITE_FACTS.serviceAreaSq} nën emrin "Prago".`
    ]
  },
  {
    title: "Shërbimi",
    body: [
      "Prago ofron menaxhim të listimit, çmimit, kalendarit, komunikimit me vizitorët, koordinimit të operacioneve dhe raportimit për pronarë të pronave me qira afatshkurtër, kundrejt një tarife prej 20% të të ardhurave nga rezervimet, siç përshkruhet në faqen kryesore."
    ]
  },
  {
    title: "Vlerësimi fillestar është paraprak",
    body: [
      "Çdo vlerësim që jepet përmes kësaj faqeje ose në WhatsApp — përfshirë intervalin e çmimit për natë, potencialin e zënies apo pranimin për menaxhim — është vetëm një vlerësim fillestar bazuar në informacionin e dhënë nga pronari. Ai nuk përbën garanci të ardhurash, zënieje apo pranimi përfundimtar, dhe mund të ndryshojë pas inspektimit të pronës."
    ]
  },
  {
    title: "Marrëveshja e menaxhimit",
    body: [
      "Nëse një pronë pranohet për menaxhim, kushtet e sakta — përfshirë tarifat, përgjegjësitë dhe procedurat e miratimit — përcaktohen në një marrëveshje menaxhimi të nënshkruar veçmas. Kjo faqe nuk zëvendëson atë marrëveshje."
    ]
  },
  {
    title: "Përgjegjësia",
    body: [
      "Prago nuk mban përgjegjësi për vendime të marra vetëm mbi bazën e vlerësimit fillestar paraprak të dhënë përmes kësaj faqeje ose WhatsApp, para nënshkrimit të marrëveshjes së menaxhimit."
    ]
  },
  {
    title: "Ligji zbatues",
    body: ["Këto kushte rregullohen nga legjislacioni i Republikës së Shqipërisë."]
  },
  {
    title: "Kontakt",
    body: [`Për pyetje rreth këtyre kushteve na shkruani në ${SITE_FACTS.email}.`]
  }
];

const SECTIONS_EN: Section[] = [
  {
    title: "The company",
    body: [
      `This site is operated by ${SITE_FACTS.legalName} (NIPT ${SITE_FACTS.nipt}), which provides short-term rental management services in ${SITE_FACTS.serviceAreaSq} under the name "Prago".`
    ]
  },
  {
    title: "The service",
    body: [
      "Prago manages listing, pricing, calendar, guest communication, operations coordination, and owner reporting for short-term rental properties, for a fee of 20% of booking revenue, as described on the main page."
    ]
  },
  {
    title: "The initial assessment is preliminary",
    body: [
      "Any assessment given through this site or on WhatsApp — including the nightly rate range, occupancy potential, or acceptance for management — is only a preliminary estimate based on the information the owner provides. It does not constitute a guarantee of income, occupancy, or final acceptance, and may change after the property is inspected."
    ]
  },
  {
    title: "The management agreement",
    body: [
      "If a property is accepted for management, the exact terms — including fees, responsibilities, and approval procedures — are set out in a separately signed management agreement. This page does not replace that agreement."
    ]
  },
  {
    title: "Liability",
    body: [
      "Prago is not liable for decisions made solely on the basis of the preliminary initial assessment given through this site or WhatsApp, prior to signing the management agreement."
    ]
  },
  {
    title: "Governing law",
    body: ["These terms are governed by the laws of the Republic of Albania."]
  },
  {
    title: "Contact",
    body: [`For questions about these terms, write to us at ${SITE_FACTS.email}.`]
  }
];

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const heading = locale === "en" ? "Terms" : "Kushtet";
  const intro =
    locale === "en"
      ? "These terms describe the website and Prago's short-term rental management service."
      : "Këto kushte përshkruajnë faqen dhe shërbimin e menaxhimit të qirave afatshkurtra të Prago.";
  const sections = locale === "en" ? SECTIONS_EN : SECTIONS_SQ;

  return (
    <>
      <main id="main-content">
        <SiteHeader locale={locale} />
        <section className="mx-auto max-w-content px-[20px] py-[64px] md:px-[24px] md:py-[80px] lg:px-[32px] lg:py-[112px]">
          <SerifHeading as="h1" size="h2" className="text-charcoal">
            {heading}
          </SerifHeading>
          <p className="mt-4 max-w-[640px] font-sans text-base leading-relaxed text-stone">{intro}</p>

          <div className="mt-12 max-w-[720px] space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <SerifHeading as="h2" size="h3" className="text-charcoal">
                  {section.title}
                </SerifHeading>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="mt-3 font-sans text-base leading-relaxed text-stone">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
