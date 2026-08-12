import Image from "next/image";
import { EyebrowLabel } from "./ui/eyebrow-label";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-[72px]">
      <div className="absolute inset-0 top-[72px] -z-10">
        <Image
          src="/images/hero.png"
          alt="Modern Albanian villa with infinity pool"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle gradient overlay so the card stays legible over busy photos */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 via-charcoal/5 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-10 sm:px-5 sm:py-12 md:min-h-[calc(100vh-72px)] md:px-8 md:py-16">
        <div className="w-full max-w-[560px] rounded-2xl bg-cream p-5 shadow-card sm:p-8 md:p-10">
          <EyebrowLabel className="text-[10px] leading-relaxed tracking-[0.12em] text-charcoal sm:text-xs sm:tracking-[0.16em]">
            AI-POWERED PROPERTY MANAGEMENT · ALBANIA
          </EyebrowLabel>
          {/* TODO: headline, subline, and CTAs rebuilt in Prompt 3 */}
        </div>
      </div>
    </section>
  );
}
