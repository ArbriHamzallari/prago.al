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
        logo: `${SITE_FACTS.url}/logo/prago-logo-burgundy.jpeg`,
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
