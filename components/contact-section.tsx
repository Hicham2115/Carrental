import { ContactForm } from "@/components/contact-form";
import { ContactQuoteCarousel } from "@/components/contact-quote-carousel";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-2 py-8 min-[380px]:px-3 sm:px-6 sm:py-14 lg:px-10 2xl:px-14"
    >
      <div className="grid w-full gap-0 overflow-hidden rounded-2xl border-2 border-[#1b3169] bg-white shadow-[0_24px_60px_rgba(22,48,101,0.10)] sm:rounded-[2rem] lg:grid-cols-[0.98fr_1.02fr]">
        <div className="relative flex min-h-[480px] flex-col overflow-hidden rounded-xl bg-[#1d336b] px-5 py-7 text-white min-[380px]:min-h-[520px] min-[380px]:px-7 min-[380px]:py-9 sm:min-h-[560px] sm:rounded-[1.4rem] sm:px-11 sm:py-11 lg:min-h-[720px] lg:rounded-r-none lg:px-14 lg:py-14">
          <p className="w-fit border-b border-white/25 pb-2 text-base font-semibold tracking-tight">
            Carrental.ma
            <span className="text-white/55"> · Location de voiture</span>
          </p>

          <div className="mb-8 mt-12 min-[380px]:mt-16 sm:mb-10 sm:mt-20 lg:mt-24">
            <h2 className="max-w-xl text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.045em] min-[380px]:text-3xl sm:text-4xl lg:text-[2.7rem]">
              Parlons de votre prochain trajet.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/85">
              Dites-nous où vous souhaitez aller et ce dont vous avez besoin.
              Nous vous aiderons à préparer la suite.
            </p>
          </div>

          <ContactQuoteCarousel />
        </div>

        <div className="flex flex-col justify-center rounded-b-[calc(1rem-2px)] px-3 py-8 text-slate-950 min-[380px]:px-4 min-[380px]:py-9 sm:rounded-b-[calc(2rem-2px)] sm:px-8 sm:py-12 lg:rounded-b-none lg:rounded-r-[calc(2rem-2px)] lg:px-12 lg:py-14">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
