import Image from "next/image";
import Link from "next/link";
import { CONTACT_PHONE, CONTACT_WHATSAPP } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-vishnje-dark px-5 py-12 text-cream sm:py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image src="/logo/prago-logo-white.jpeg" alt="Prago" width={120} height={36} />
          <p className="mt-4 font-serif text-lg">We manage. You earn.</p>
          <p className="mt-4 flex flex-col gap-1 font-sans text-sm text-cream/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1">
            <a href={`tel:${CONTACT_PHONE.tel}`} className="hover:text-cream">
              {CONTACT_PHONE.display}
            </a>
            <span className="hidden sm:inline"> · </span>
            <a
              href={CONTACT_WHATSAPP.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream"
            >
              {CONTACT_WHATSAPP.label}
            </a>
            <span className="hidden sm:inline"> · </span>
            <a href="mailto:stay@prago.al" className="hover:text-cream">
              stay@prago.al
            </a>
            <span className="hidden sm:inline"> · </span>
            <a
              href="https://www.instagram.com/prago.al/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream"
            >
              Instagram
            </a>
          </p>
        </div>

        <div className="font-sans text-sm text-cream/60">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="#how-it-works">How it works</Link>
            <Link href="#services">Services</Link>
            <Link href="#why-prago">Why Prago</Link>
            <Link href="#faq">FAQ</Link>
          </div>
          <p className="mt-4">© 2026 Prago. Property management, Albania.</p>
        </div>
      </div>
    </footer>
  );
}
