import Image from "next/image";
import Link from "next/link";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { SITE_FACTS } from "@/lib/site-facts";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream";
const LINK = `-mx-2 flex min-h-[44px] w-fit items-center px-2 hover:text-cream ${FOCUS_RING}`;

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.footer : SITE_COPY.sq.footer;
  const year = new Date().getFullYear();
  const otherLocaleHref = locale === "en" ? "/" : "/en";
  const localePrefix = locale === "en" ? "/en" : "";

  return (
    <footer id="site-footer" className="bg-vishnje-dark px-[20px] py-[64px] text-cream md:px-[24px] lg:px-[32px]">
      <div className="mx-auto grid max-w-content gap-10 sm:grid-cols-3 lg:gap-8">
        <div>
          <Image src="/logo/prago-logo-white.jpeg" alt="Prago" width={120} height={36} className="h-9 w-auto" />
          <p className="mt-4 font-serif text-lg">{copy.tagline}</p>
        </div>

        <div className="font-sans text-sm text-cream/80">
          <a href={`tel:+${SITE_FACTS.whatsappDigits}`} className={LINK}>
            {SITE_FACTS.whatsappDisplay}
          </a>
          <a href={`mailto:${SITE_FACTS.email}`} className={LINK}>
            {SITE_FACTS.email}
          </a>
          <a href={SITE_FACTS.instagram} target="_blank" rel="noopener noreferrer" className={LINK}>
            Instagram
          </a>
        </div>

        <div className="font-sans text-sm text-cream/80">
          <Link href={`${localePrefix}/privacy`} className={LINK}>
            {copy.legalLinks.privacy}
          </Link>
          <Link href={`${localePrefix}/terms`} className={LINK}>
            {copy.legalLinks.terms}
          </Link>
          <Link href={otherLocaleHref} className={LINK}>
            {copy.legalLinks.otherLanguage}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-content border-t border-cream/20 pt-6 font-sans text-xs text-cream/60">
        © {year} Prago
      </div>
    </footer>
  );
}
