import type { Metadata } from "next";
import { ComparisonFinalCta } from "@/components/comparison-final-cta";
import { ComparisonHero } from "@/components/comparison-hero";
import { ComparisonOwnerStory } from "@/components/comparison-owner-story";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import { COMPARISON_COPY } from "@/lib/comparison-copy";
import type { Locale } from "@/lib/site-copy";
import { getComparisonPageStructuredData } from "@/lib/structured-data";

// Same OG image as the rest of the site (app/[locale]/layout.tsx) — not a page-specific asset.
const OG_IMAGE = {
  url: "/og/prago-owner-management-1200x630.jpg",
  width: 1200,
  height: 630
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = COMPARISON_COPY[locale].seo;
  const path = "/airbnb-vs-qera-mujore";
  const canonical = locale === "en" ? `/en${path}` : path;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { "sq-AL": path, en: `/en${path}` }
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "sq_AL",
      title,
      description,
      images: [OG_IMAGE]
    }
  };
}

export default async function AirbnbVsLongTermRentPage({
  params
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const { title, description } = COMPARISON_COPY[locale].seo;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getComparisonPageStructuredData(locale, title, description))
        }}
      />
      <main id="main-content">
        <SiteHeader locale={locale} />
        <ComparisonHero locale={locale} />
        <ComparisonOwnerStory locale={locale} />
        <ComparisonFinalCta locale={locale} />
      </main>
      <SiteFooter locale={locale} />
      <FloatingWhatsApp locale={locale} />
    </>
  );
}
