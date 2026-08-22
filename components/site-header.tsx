"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_COPY, type Locale } from "@/lib/site-copy";
import { Button } from "./ui/button";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-vishnje";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = locale === "en" ? SITE_COPY.en.nav : SITE_COPY.sq.nav;
  const whatsappUrl = getWhatsAppUrl();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes (e.g. a link inside it navigated).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const homeHref = locale === "en" ? "/en" : "/";
  const isHome = pathname === homeHref;
  const handleWhatsAppClick = () => track("cta_whatsapp_click", { position: "header", locale });

  // Hash links only work as same-page anchors while already on the homepage — elsewhere
  // (e.g. the comparison page) they need to navigate back to the homepage first.
  const resolveHref = (href: string) => (href.startsWith("#") && !isHome ? `${homeHref}${href}` : href);

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
            const href = resolveHref(link.href);

            if (link.href.startsWith("#") && isHome) {
              return (
                <a key={link.href} href={href} className={linkClassName}>
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={href} className={linkClassName}>
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

          <button
            type="button"
            aria-label={menuOpen ? (locale === "en" ? "Close menu" : "Mbyll menynë") : locale === "en" ? "Open menu" : "Hap menynë"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-11 w-11 items-center justify-center rounded-card border border-charcoal/15 text-charcoal transition hoverable:hover:bg-charcoal/5 md:hidden ${FOCUS_RING}`}
          >
            {menuOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        className={`fixed inset-0 top-[64px] z-40 bg-vishnje transition-opacity duration-200 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-[20px] pb-[calc(24px+env(safe-area-inset-bottom))] pt-[24px]">
          <ul className="flex flex-col">
            {copy.links.map((link) => (
              <li key={link.href} className="border-b border-cream/15">
                <Link
                  href={resolveHref(link.href)}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 font-serif text-2xl font-medium text-cream transition hoverable:hover:text-cream/70 ${FOCUS_RING}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="cream"
              className="w-full"
              onClick={() => {
                handleWhatsAppClick();
                setMenuOpen(false);
              }}
            >
              {copy.cta}
            </Button>
          </div>

          <div className="mt-auto flex items-center gap-2 pt-8 font-sans text-sm font-semibold uppercase tracking-wide">
            {locale === "sq" ? (
              <span className="text-cream" aria-current="page">
                SQ
              </span>
            ) : (
              <Link
                href="/"
                onClick={() => {
                  track("language_switch", { from: locale, to: "sq" });
                  setMenuOpen(false);
                }}
                className={`inline-flex min-h-[44px] items-center text-cream/60 hoverable:hover:text-cream ${FOCUS_RING}`}
              >
                SQ
              </Link>
            )}
            <span className="text-cream/40">|</span>
            {locale === "en" ? (
              <span className="text-cream" aria-current="page">
                EN
              </span>
            ) : (
              <Link
                href="/en"
                onClick={() => {
                  track("language_switch", { from: locale, to: "en" });
                  setMenuOpen(false);
                }}
                className={`inline-flex min-h-[44px] items-center text-cream/60 hoverable:hover:text-cream ${FOCUS_RING}`}
              >
                EN
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
