import { AIDifferenceSection } from "@/components/ai-difference-section";
import { AudienceSection } from "@/components/audience-section";
import { CalendarMockupSection } from "@/components/calendar-mockup-section";
import { EstimateSection } from "@/components/estimate-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { IncomeSection } from "@/components/income-section";
import { MultiPlatformSection } from "@/components/multi-platform-section";
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
      <AudienceSection />
      <ServicesPricingSection />
      <MultiPlatformSection />
      <CalendarMockupSection />
      <IncomeSection />
      <SoftwareSection />
      <AIDifferenceSection />
      <HowItWorksSection />
      <EstimateSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
