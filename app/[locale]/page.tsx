import { Faq } from "@/components/faq-section";
import { FinalCta } from "@/components/final-cta";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/how-it-works-section";
import { Pricing } from "@/components/pricing";
import { PropertyStory } from "@/components/property-story";
import { ServiceScope } from "@/components/services-pricing-section";
import { SiteHeader } from "@/components/site-header";
import { OwnerVisibility } from "@/components/software-section";
import { TrustBand } from "@/components/trust-band";
import type { Locale } from "@/lib/site-copy";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <main>
        <SiteHeader locale={locale} />
        <Hero locale={locale} />
        <TrustBand locale={locale} />
        <ServiceScope locale={locale} />
        <ProcessSteps locale={locale} />
        <PropertyStory locale={locale} />
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
