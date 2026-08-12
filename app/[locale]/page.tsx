import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/how-it-works-section";
import { ServiceScope } from "@/components/services-pricing-section";
import { SiteHeader } from "@/components/site-header";
import { TrustBand } from "@/components/trust-band";
import type { Locale } from "@/lib/site-copy";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <main>
      <SiteHeader locale={locale} />
      <Hero locale={locale} />
      <TrustBand locale={locale} />
      <ServiceScope locale={locale} />
      <ProcessSteps locale={locale} />
    </main>
  );
}
