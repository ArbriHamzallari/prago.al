import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { SerifHeading } from "@/components/ui/serif-heading";
import { SITE_FACTS } from "@/lib/site-facts";
import type { Locale } from "@/lib/site-copy";

// Draft legal content — reflects the codebase's actual current behavior (no cookies, no
// third-party analytics, WhatsApp-only contact collection) as of this prompt. Flagged for
// Arbri/counsel review before this is treated as final; see rebuild-adaptation-plan.md.

type Section = { title: string; body: string[] };

const SECTIONS_SQ: Section[] = [
  {
    title: "Kush jemi",
    body: [
      `${SITE_FACTS.legalName} (NIPT ${SITE_FACTS.nipt}), që operon si "Prago", ofron shërbime menaxhimi për qira afatshkurtra në ${SITE_FACTS.serviceAreaSq}. Për çështje privatësie na kontaktoni në ${SITE_FACTS.email}.`
    ]
  },
  {
    title: "Çfarë të dhënash mbledhim",
    body: [
      `Nuk kemi një formular në faqe. Kur na shkruani në WhatsApp (${SITE_FACTS.whatsappDisplay}) për një vlerësim fillestar, ju na dërgoni vullnetarisht të dhëna si numri i telefonit, vendndodhja e pronës dhe fotot që na bashkëngjitni. Këto të dhëna mblidhen drejtpërdrejt nga WhatsApp, jo nga vetë faqja.`
    ]
  },
  {
    title: "Analitika e faqes",
    body: [
      "Faqja aktualisht nuk përdor cookies dhe nuk instalon asnjë mjet analitik apo gjurmues të palëve të treta (p.sh. Google Analytics apo Meta Pixel).",
      "Regjistrojmë vetëm disa ngjarje anonime ndërveprimi — cilin buton keni shtypur, cila pyetje e shpeshtë është hapur, ndërrimi i gjuhës — pa asnjë numër telefoni, mesazh, adresë prone apo emër skedari foto. Këto të dhëna nuk lidhen me identitetin tuaj."
    ]
  },
  {
    title: "Si i përdorim të dhënat",
    body: [
      "Të dhënat që na dërgoni në WhatsApp përdoren vetëm për të vlerësuar përshtatshmërinë e pronës suaj dhe, nëse vazhdoni me ne, për të menaxhuar marrëdhënien. Nuk i shesim dhe nuk i ndajmë të dhënat tuaja me palë të treta për qëllime marketingu."
    ]
  },
  {
    title: "Ruajtja e të dhënave",
    body: [
      "Të dhënat e bashkëbisedimit në WhatsApp ruhen për aq kohë sa është e nevojshme për të përfunduar vlerësimin ose, nëse bëheni klient, sipas kushteve të marrëveshjes së menaxhimit. Mund të kërkoni fshirjen e të dhënave tuaja në çdo kohë."
    ]
  },
  {
    title: "Të drejtat tuaja",
    body: [
      `Keni të drejtë të kërkoni akses, korrigjim ose fshirje të të dhënave tuaja personale. Na shkruani në ${SITE_FACTS.email} për çdo kërkesë të tillë.`
    ]
  }
];

const SECTIONS_EN: Section[] = [
  {
    title: "Who we are",
    body: [
      `${SITE_FACTS.legalName} (NIPT ${SITE_FACTS.nipt}), operating as "Prago", provides short-term rental management services in ${SITE_FACTS.serviceAreaSq}. For privacy questions, contact us at ${SITE_FACTS.email}.`
    ]
  },
  {
    title: "What data we collect",
    body: [
      `The site has no contact form. When you message us on WhatsApp (${SITE_FACTS.whatsappDisplay}) to request an initial assessment, you voluntarily send us data such as your phone number, the property's location, and any photos you attach. This data is collected directly through WhatsApp, not by the site itself.`
    ]
  },
  {
    title: "Website analytics",
    body: [
      "The site currently uses no cookies and installs no third-party analytics or tracking tool (e.g. Google Analytics or Meta Pixel).",
      "We log only a small number of anonymous interaction events — which button was clicked, which FAQ item was opened, language switches — with no phone numbers, message content, property addresses, or photo filenames. This data cannot be tied to your identity."
    ]
  },
  {
    title: "How we use the data",
    body: [
      "Data sent to us on WhatsApp is used only to assess whether your property is a fit and, if you proceed with us, to manage the relationship. We do not sell your data or share it with third parties for marketing purposes."
    ]
  },
  {
    title: "Data retention",
    body: [
      "WhatsApp conversation data is kept for as long as needed to complete the assessment or, if you become a client, per the terms of the management agreement. You may request deletion of your data at any time."
    ]
  },
  {
    title: "Your rights",
    body: [
      `You have the right to request access to, correction of, or deletion of your personal data. Write to us at ${SITE_FACTS.email} for any such request.`
    ]
  }
];

export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const heading = locale === "en" ? "Privacy Policy" : "Politika e privatësisë";
  const intro =
    locale === "en"
      ? "This page explains what data Prago collects and how it is used."
      : "Kjo faqe shpjegon çfarë të dhënash mbledh Prago dhe si i përdor ato.";
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
