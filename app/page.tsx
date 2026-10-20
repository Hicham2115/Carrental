import { Toaster } from "sonner";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceSection } from "@/components/service-section";
import { VehicleCategoriesSection } from "@/components/vehicle-categories-section";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/components/layout/header";
import { SectionReveal } from "@/components/section-reveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionReveal><AboutSection /></SectionReveal>
        <SectionReveal><VehicleCategoriesSection /></SectionReveal>
        <SectionReveal><ServiceSection /></SectionReveal>
        <SectionReveal><ReviewsSection /></SectionReveal>
        <SectionReveal><FAQSection /></SectionReveal>
        <SectionReveal><ContactSection /></SectionReveal>
        <SectionReveal><CTASection /></SectionReveal>
      </main>
      <SiteFooter />
      <Toaster position="top-right" richColors />
    </>
  );
}
