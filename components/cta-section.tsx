import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="mt-12 px-4 pb-12 sm:mt-16 sm:px-8 sm:pb-14 lg:mt-20 lg:px-10">
      <div className="relative isolate mx-auto max-w-[80rem] overflow-hidden rounded-[2rem] bg-brand-strong">
        <Image src="/images/cta-coast.jpg" alt="Route côtière marocaine au bord de l’océan" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1d336b]/95 via-[#1d336b]/75 to-[#1d336b]/20" />
        <div className="px-6 py-9 text-white sm:px-12 sm:py-12 lg:px-16 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Location de voiture au Maroc</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Votre prochaine aventure commence ici.</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">Choisissez vos dates et parlons ensemble de la voiture qui vous accompagnera.</p>
          <Button render={<a href="#reservation" />} nativeButton={false} className="group mt-6 h-14 rounded-sm bg-white px-6 text-sm font-semibold text-brand shadow-[0_8px_24px_rgba(3,24,57,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Réserver maintenant <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
