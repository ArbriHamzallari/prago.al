import Image from "next/image";
import Link from "next/link";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { SITE_FACTS } from "@/lib/site-facts";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.footer : SITE_COPY.sq.footer;
  const year = new Date().getFullYear();
  const otherLocaleHref = locale === "en" ? "/" : "/en";
  const localePrefix = locale === "en" ? "/en" : "";

  return (
    <footer id="site-footer" className="bg-vishnje-dark px-[20px] py-[64px] text-cream md:px-[24px] lg:px-[32px]">
      <div className="mx-auto grid max-w-content gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Image src="/logo/prago-logo-white.jpeg" alt="Prago" width={120} height={36} className="h-9 w-auto" />
          <p className="mt-4 font-serif text-lg">{copy.tagline}</p>
        </div>

        <div className="font-sans text-sm text-cream/80">
          <a href={`tel:+${SITE_FACTS.whatsappDigits}`} className="block hover:text-cream">
            {SITE_FACTS.whatsappDisplay}
          </a>
          <a href={`mailto:${SITE_FACTS.email}`} className="mt-2 block hover:text-cream">
            {SITE_FACTS.email}
          </a>
          <a
            href={SITE_FACTS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block hover:text-cream"
          >
            Instagram
          </a>
        </div>

        <div className="font-sans text-sm text-cream/80">{SITE_FACTS.serviceAreaSq}</div>

        <div className="font-sans text-sm text-cream/80">
          <Link href={`${localePrefix}/privacy`} className="block hover:text-cream">
            {copy.legalLinks.privacy}
          </Link>
          <Link href={`${localePrefix}/terms`} className="mt-2 block hover:text-cream">
            {copy.legalLinks.terms}
          </Link>
          <Link href={otherLocaleHref} className="mt-2 block hover:text-cream">
            {copy.legalLinks.otherLanguage}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-content border-t border-cream/20 pt-6 font-sans text-xs text-cream/60">
        {SITE_FACTS.legalName} · NIPT {SITE_FACTS.nipt} · © {year} Prago
      </div>
    </footer>
  );
}
