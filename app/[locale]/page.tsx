import { BehindEveryStay } from "@/components/behind-every-stay";
import { Faq } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/how-it-works-section";
import { Pricing } from "@/components/pricing";
import { ProblemSolution } from "@/components/problem-solution";
import { ServiceScope } from "@/components/services-pricing-section";
import { SiteHeader } from "@/components/site-header";
import { OwnerVisibility } from "@/components/software-section";
import { TrustBand } from "@/components/trust-band";
import type { Locale } from "@/lib/site-copy";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <main id="main-content">
        <SiteHeader locale={locale} />
        <Hero locale={locale} />
        <TrustBand locale={locale} />
        <ProblemSolution locale={locale} />
        <ServiceScope locale={locale} />
        <ProcessSteps locale={locale} />
        <BehindEveryStay locale={locale} />
        <OwnerVisibility locale={locale} />
        <Pricing locale={locale} />
        <Faq locale={locale} />
        <FinalCta locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <FloatingWhatsApp locale={locale} />
    </>
  );
}
