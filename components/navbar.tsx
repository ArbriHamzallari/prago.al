"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_1px_0_rgba(28,25,23,0.08)]" : ""
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 transition-all duration-300 lg:px-8 ${
          isScrolled ? "h-[60px]" : "h-[72px]"
        }`}
      >
        <Link
          href="#"
          aria-label="Prago home"
          className={`shrink-0 transition-all duration-300 ${
            isScrolled ? "h-7 opacity-70" : "h-9 opacity-100"
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
            href="tel:+35500000000"
            className="rounded-xl border border-charcoal px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-wide text-charcoal transition hover:bg-charcoal/5"
          >
            +355 XX XXX XXXX
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle menu"
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
            className="fixed inset-0 z-40 bg-vishnje p-8 text-cream lg:hidden"
          >
            <div className="flex justify-end">
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-8 w-8" />
              </button>
            </div>
            <div className="mt-12 flex flex-col gap-6 font-serif text-3xl">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#estimate" onClick={() => setMenuOpen(false)} className="font-sans text-lg uppercase">
                Free estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
