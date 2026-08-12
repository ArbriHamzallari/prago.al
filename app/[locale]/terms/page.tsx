import { SiteFooter } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/site-copy";

// TODO(Prompt 7): replace with the real terms of service.
export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <>
      <main>
        <SiteHeader locale={locale} />
        <section className="mx-auto max-w-content px-[20px] py-[64px] md:px-[24px] md:py-[80px] lg:px-[32px] lg:py-[112px]">
          <h1 className="font-serif text-[32px] font-medium text-charcoal">Kushtet</h1>
          <p className="mt-4 max-w-[640px] font-sans text-base leading-relaxed text-stone">
            Kjo faqe është në përgatitje dhe do të plotësohet me përmbajtjen e plotë së shpejti.
          </p>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
