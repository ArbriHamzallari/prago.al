import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/site-copy";

// TODO(Prompt 7): replace with the real privacy policy.
export default async function PrivacyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const heading = locale === "en" ? "Privacy Policy" : "Politika e privatësisë";
  const body =
    locale === "en"
      ? "This page is in preparation and will be filled in with the full content soon."
      : "Kjo faqe është në përgatitje dhe do të plotësohet me përmbajtjen e plotë së shpejti.";

  return (
    <>
      <main>
        <SiteHeader locale={locale} />
        <section className="mx-auto max-w-content px-[20px] py-[64px] md:px-[24px] md:py-[80px] lg:px-[32px] lg:py-[112px]">
          <h1 className="font-serif text-[32px] font-medium text-charcoal">{heading}</h1>
          <p className="mt-4 max-w-[640px] font-sans text-base leading-relaxed text-stone">{body}</p>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
