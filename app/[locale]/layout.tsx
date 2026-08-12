import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
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

// Reuses already-locked hero copy rather than inventing new marketing text.
const METADATA_BY_LOCALE: Record<Locale, Metadata> = {
  sq: {
    title: "Prago | Menaxhim profesional i qirave afatshkurtra",
    description:
      "Nga çmimi dhe rezervimet, te komunikimi me vizitorët, pastrimi dhe mirëmbajtja — me ekip lokal dhe raportim të qartë."
  },
  en: {
    title: "Prago | AI-powered Airbnb management in Albania",
    description:
      "Prago helps Albanian property owners earn more with AI pricing, instant guest responses, and full-service local operations."
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
  return METADATA_BY_LOCALE[locale];
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
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
