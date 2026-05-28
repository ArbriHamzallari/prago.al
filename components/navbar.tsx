"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT_PHONE } from "@/lib/constants";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Why Prago", href: "#why-prago" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_0_rgba(28,25,23,0.08)]" : ""
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-5 lg:px-8 ${
          isScrolled ? "h-[60px]" : "h-[72px]"
        }`}
      >
        <Link
          href="#"
          aria-label="Prago home"
          className={`shrink-0 transition-all duration-300 ${
            isScrolled ? "h-7 opacity-70" : "h-8 sm:h-9 opacity-100"
          }`}
        >
          <Image
            src="/logo/prago-logo-burgundy.jpeg"
            alt="Prago"
            width={140}
            height={36}
            priority
            className="h-full w-auto mix-blend-multiply"
          />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium uppercase tracking-wide text-charcoal transition hover:text-vishnje"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="#estimate" variant="primary" className="px-5 py-2.5 text-xs">
            Free estimate
          </Button>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="whitespace-nowrap rounded-xl border border-charcoal px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wide text-charcoal transition hover:bg-charcoal/5"
          >
            {CONTACT_PHONE.display}
          </a>
        </div>

        <button
          type="button"
          className="relative z-[61] -mr-1 p-2 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((p) => !p)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-vishnje p-6 text-cream sm:p-8 lg:hidden"
            style={{ paddingTop: "max(1.5rem, env(safe-area-inset-top))" }}
          >
            <div className="flex justify-end">
              <button type="button" aria-label="Close menu" className="p-2" onClick={closeMenu}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-8 flex flex-1 flex-col gap-6 overflow-y-auto font-serif text-3xl sm:text-4xl">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 border-t border-cream/20 pt-8">
              <Button href="#estimate" variant="cream" className="w-full" onClick={closeMenu}>
                Free estimate
              </Button>
              <a
                href={`tel:${CONTACT_PHONE.tel}`}
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-xl border border-cream/40 px-6 py-3.5 font-sans text-sm font-medium uppercase tracking-wide text-cream transition hover:bg-cream/10"
              >
                {CONTACT_PHONE.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
