import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-vishnje-dark px-5 py-16 text-cream lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image src="/logo/prago-logo-white.jpeg" alt="Prago" width={120} height={36} />
          <p className="mt-4 font-serif text-lg">We manage. You earn.</p>
          <p className="mt-4 font-sans text-sm text-cream/75">
            <a href="mailto:stay@prago.al" className="hover:text-cream">
              stay@prago.al
            </a>
            {" · "}
            <a
              href="https://www.instagram.com/prago.al/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cream"
            >
              Instagram
            </a>
            {" · "}
            prago.al
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
