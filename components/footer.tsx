import Image from "next/image";
import Link from "next/link";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { SITE_FACTS } from "@/lib/site-facts";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje";
const LINK = `-mx-2 flex min-h-[44px] w-fit items-center px-2 text-charcoal/70 hoverable:hover:text-charcoal ${FOCUS_RING}`;

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = locale === "en" ? SITE_COPY.en.footer : SITE_COPY.sq.footer;
  const year = new Date().getFullYear();
  const otherLocaleHref = locale === "en" ? "/" : "/en";
  const localePrefix = locale === "en" ? "/en" : "";

  return (
    <footer id="site-footer" className="bg-sand px-[20px] py-[64px] text-charcoal md:px-[24px] lg:px-[32px]">
      <div className="mx-auto grid max-w-content gap-10 sm:grid-cols-3 lg:gap-8">
        <div>
          <Image src="/logo/prago-mark-burgundy.png" alt="Prago" width={188} height={257} className="h-9 w-auto" />
          <p className="mt-4 font-sans text-base text-charcoal/80">{copy.tagline}</p>
        </div>

        <div className="font-sans text-sm">
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

        <div className="font-sans text-sm">
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

      <div className="mx-auto mt-10 max-w-content border-t border-charcoal/10 pt-6 font-sans text-xs text-charcoal/50">
        © {year} Prago
      </div>
    </footer>
  );
}
