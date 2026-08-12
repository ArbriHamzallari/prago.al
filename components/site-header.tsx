"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vishnje";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  // TODO(Prompt 6): SITE_COPY.en not implemented yet — falls back to sq either way.
  const copy = locale === "en" ? SITE_COPY.sq.nav : SITE_COPY.sq.nav;
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <header
      className={`sticky top-0 z-50 h-[64px] bg-cream/94 backdrop-blur-[14px] transition-[border-color] duration-200 md:h-[76px] ${
        scrolled ? "border-b border-sand" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-full max-w-content items-center justify-between gap-2 px-[20px] md:px-[24px] lg:px-[32px]">
        <Link
          href={homeHref}
          aria-label="Prago"
          className={`flex min-h-[44px] min-w-[44px] shrink-0 items-center md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
        >
          <Image
            src="/logo/prago-logo-burgundy.jpeg"
            alt="Prago"
            width={160}
            height={42}
            priority
            className="h-[36px] w-auto mix-blend-multiply md:h-[42px]"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {copy.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap font-sans text-sm font-medium uppercase tracking-wide text-charcoal transition hover:text-vishnje ${FOCUS_RING}`}
            >
              {link.label}
            </a>
          ))}
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
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-stone hover:text-charcoal md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
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
                className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-stone hover:text-charcoal md:min-h-0 md:min-w-0 ${FOCUS_RING}`}
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
            >
              {copy.cta}
            </Button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={copy.cta}
            className={`flex h-11 w-11 items-center justify-center rounded-card bg-vishnje text-cream transition hover:bg-vishnje-soft md:hidden ${FOCUS_RING}`}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
          </a>
        </div>
      </nav>
    </header>
  );
}
