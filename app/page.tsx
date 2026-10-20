import { Toaster } from "sonner";
import { AboutSection } from "@/components/about-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ReviewsSection } from "@/components/reviews-section";
import { ServiceSection } from "@/components/service-section";
import { SiteFooter } from "@/components/site-footer";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServiceSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>
      <SiteFooter />
      <Toaster position="top-right" richColors />
    </>
  );
}
