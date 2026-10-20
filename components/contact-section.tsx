import { ContactForm } from "@/components/contact-form";
import { ContactQuoteCarousel } from "@/components/contact-quote-carousel";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24  px-3 py-10 sm:px-6 sm:py-14 lg:px-10 2xl:px-14"
    >
      <div className="grid w-full gap-0 overflow-hidden rounded-[2rem] border-2 border-[#1b3169] bg-white shadow-[0_24px_64px_-44px_rgba(27,49,105,0.45)] lg:grid-cols-[0.98fr_1.02fr]">
        <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[1.4rem] bg-[#1d336b] px-7 py-9 text-white sm:px-11 sm:py-11 lg:min-h-[720px] lg:rounded-r-none lg:px-14 lg:py-14">
          <p className="text-base font-semibold tracking-tight">
            Carrental.ma
            <span className="text-white/55"> · Location de voiture</span>
          </p>

          <div className="mb-10 mt-16 sm:mt-20 lg:mt-24">
            <h2 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[2.7rem]">
              Parlons de votre prochain trajet.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/75">
              Dites-nous où vous souhaitez aller et ce dont vous avez besoin.
              Nous vous aiderons à préparer la suite.
            </p>
          </div>

          <ContactQuoteCarousel />
        </div>

        <div className="flex flex-col justify-center rounded-b-[calc(2rem-2px)] px-4 py-9 text-slate-950 sm:px-8 sm:py-12 lg:rounded-b-none lg:rounded-r-[calc(2rem-2px)] lg:px-12 lg:py-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
