import { EstimateSection } from "@/components/estimate-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { ServicesPricingSection } from "@/components/services-pricing-section";
import { SoftwareSection } from "@/components/software-section";
import { StatsBar } from "@/components/stats-bar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <ServicesPricingSection />
      <SoftwareSection />
      <HowItWorksSection />
      <EstimateSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
