"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import type { Locale } from "@/lib/site-copy";

export function FloatingWhatsApp({ locale }: { locale: Locale }) {
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);
  const [blocked, setBlocked] = useState(false);
  const whatsappUrl = getWhatsAppUrl();
  const label = locale === "en" ? "WhatsApp · Assessment" : "WhatsApp · Vlerësimi";

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta-mobile");
    const finalCta = document.getElementById("final-cta");
    const footer = document.getElementById("site-footer");

    const observers: IntersectionObserver[] = [];

    if (heroCta) {
      const heroObserver = new IntersectionObserver(([entry]) => setHeroCtaVisible(entry.isIntersecting), {
        threshold: 0
      });
      heroObserver.observe(heroCta);
      observers.push(heroObserver);
    }

    const blockingTargets = [finalCta, footer].filter((el): el is HTMLElement => el !== null);
    if (blockingTargets.length > 0) {
      const blockingState = new Map<Element, boolean>();
      const blockingObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            blockingState.set(entry.target, entry.isIntersecting);
          }
          setBlocked(Array.from(blockingState.values()).some(Boolean));
        },
        { threshold: 0 }
      );
      blockingTargets.forEach((el) => blockingObserver.observe(el));
      observers.push(blockingObserver);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const visible = !heroCtaVisible && !blocked;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      onClick={() => track("cta_whatsapp_click", { position: "floating_mobile", locale })}
      className={`fixed inset-x-4 bottom-[calc(12px+env(safe-area-inset-bottom))] z-40 flex min-h-[56px] items-center justify-center gap-2 rounded-card bg-vishnje text-cream shadow-card transition-opacity duration-200 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-cream md:hidden ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      <span className="font-sans text-sm font-semibold uppercase tracking-wide">{label}</span>
    </a>
  );
}
