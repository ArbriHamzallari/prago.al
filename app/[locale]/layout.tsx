import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import { SITE_FACTS } from "@/lib/site-facts";
import { getStructuredData } from "@/lib/structured-data";
import type { Locale } from "@/lib/site-copy";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const OG_IMAGE = {
  url: "/og/prago-owner-management-1200x630.jpg",
  width: 1200,
  height: 630
};

// Reuses already-locked hero/pricing copy rather than inventing new marketing text. The en
// title/description are a sentence-for-sentence translation of the sq ones — not the old
// AI-differentiator/earnings-claim copy this rebuild explicitly removed (see Prompt 6).
const CORE_METADATA_BY_LOCALE: Record<Locale, { title: string; description: string }> = {
  sq: {
    title: "Prago | Menaxhim profesional i qirave afatshkurtra",
    description:
      "Prago menaxhon listimin, çmimin, rezervimet, komunikimin me vizitorët dhe operacionet e pronës. Kërkoni një vlerësim fillestar në WhatsApp."
  },
  en: {
    title: "Prago | Professional short-term rental management",
    description:
      "Prago manages listing, pricing, bookings, guest communication, and property operations. Request an initial assessment on WhatsApp."
  }
};

export function generateStaticParams() {
  return [{ locale: "sq" }, { locale: "en" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { title, description } = CORE_METADATA_BY_LOCALE[locale];
  const canonical = locale === "en" ? "/en" : "/";

  return {
    metadataBase: new URL(SITE_FACTS.url),
    title,
    description,
    alternates: {
      canonical,
      languages: { "sq-AL": "/", en: "/en" }
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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData(locale as Locale)) }}
        />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-card bg-vishnje px-4 py-3 font-sans text-sm font-medium text-cream transition focus:translate-y-0 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream"
        >
          {locale === "en" ? "Skip to content" : "Kalo te përmbajtja"}
        </a>
        {children}
      </body>
    </html>
  );
}
