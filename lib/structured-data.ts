import { SITE_FACTS } from "./site-facts";
import type { Locale } from "./site-copy";

// Organization + WebSite only — no aggregateRating, reviewCount, priceRange, or
// employeeCount, since none of that is documented yet (see rebuild-adaptation-plan.md).
// No BreadcrumbList: the site is only /, /en, /privacy, /terms — not genuinely multi-page
// enough for breadcrumbs to add anything real.
//
// NOTE: legalName and serviceAreaSq are still bracketed placeholders in site-facts.ts, so
// this JSON-LD currently renders those placeholder strings verbatim until real values land.
export function getStructuredData(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_FACTS.legalName,
        url: SITE_FACTS.url,
        logo: `${SITE_FACTS.url}/logo/prago-logo-schema.png`,
        telephone: SITE_FACTS.whatsappDisplay,
        email: SITE_FACTS.email,
        areaServed: SITE_FACTS.serviceAreaSq
      },
      {
        "@type": "WebSite",
        name: "Prago",
        url: SITE_FACTS.url,
        inLanguage: locale === "en" ? "en" : "sq-AL"
      }
    ]
  };
}

// Scoped to /airbnb-vs-qera-mujore only — injected on that page, not site-wide. Does not
// touch or duplicate the Organization/WebSite graph above.
export function getComparisonPageStructuredData(locale: Locale, title: string, description: string) {
  const path = locale === "en" ? "/en/airbnb-vs-qera-mujore" : "/airbnb-vs-qera-mujore";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        url: `${SITE_FACTS.url}${path}`,
        inLanguage: locale === "en" ? "en" : "sq-AL",
        isPartOf: { "@type": "WebSite", name: "Prago", url: SITE_FACTS.url }
      }
    ]
  };
}
