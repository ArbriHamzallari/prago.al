"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const copy = locale === "en" ? SITE_COPY.en.nav : SITE_COPY.sq.nav;
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = locale === "en" ? "/en" : "/";
  const handleWhatsAppClick = () => track("cta_whatsapp_click", { position: "header", locale });

  return (
    <header
      className={`sticky top-0 z-50 h-[64px] bg-cream/94 backdrop-blur-[14px] transition-[border-color] duration-200 md:h-[76px] ${
        scrolled ? "border-b border-sand" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label={locale === "en" ? "Main navigation" : "Lundrimi kryesor"}
        className="mx-auto flex h-full max-w-content items-center justify-between gap-2 px-[20px] md:px-[24px] lg:px-[32px]"
      >
        <Link
          href={homeHref}
          aria-label="Prago"
          className={`flex min-h-[44px] min-w-[44px] shrink-0 items-center md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
        >
          <Image
            src="/logo/prago-mark-burgundy.png"
            alt="Prago"
            width={188}
            height={257}
            priority
            className="h-[36px] w-auto md:h-[42px]"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {copy.links.map((link) => {
            const linkClassName = `whitespace-nowrap font-sans text-sm font-medium uppercase tracking-wide text-charcoal transition hoverable:hover:text-vishnje ${FOCUS_RING}`;

            // Hash links stay same-page anchors (browser-native scroll); real page links
            // (e.g. the comparison page) use next/link for client-side navigation.
            if (link.href.startsWith("#")) {
              return (
                <a key={link.href} href={link.href} className={linkClassName}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wide">
            {locale === "sq" ? (
              <span className="text-charcoal" aria-current="page">
                SQ
              </span>
            ) : (
              <Link
                href="/"
                onClick={() => track("language_switch", { from: locale, to: "sq" })}
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-stone hoverable:hover:text-charcoal md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
              >
                SQ
              </Link>
            )}
            <span className="text-stone">|</span>
            {locale === "en" ? (
              <span className="text-charcoal" aria-current="page">
                EN
              </span>
            ) : (
              <Link
                href="/en"
                onClick={() => track("language_switch", { from: locale, to: "en" })}
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-stone hoverable:hover:text-charcoal md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
              >
                EN
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="compact"
              className="whitespace-nowrap"
              onClick={handleWhatsAppClick}
            >
              {copy.cta}
            </Button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={copy.cta}
            onClick={handleWhatsAppClick}
            className={`flex h-11 w-11 items-center justify-center rounded-card bg-vishnje text-cream transition hoverable:hover:bg-vishnje-soft md:hidden ${FOCUS_RING}`}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
          </a>
        </div>
      </nav>
    </header>
  );
}
