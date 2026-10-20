import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 pb-12 sm:px-8 sm:pb-14 lg:px-10">
      <div className="relative isolate mx-auto max-w-[80rem] overflow-hidden rounded-[2rem] bg-brand-strong">
        <Image src="/images/cta-coast.jpg" alt="Route côtière marocaine au bord de l’océan" fill sizes="100vw" className="-z-20 object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062c5d]/95 via-[#062c5d]/75 to-[#062c5d]/20" />
        <div className="px-6 py-8 text-white sm:px-12 sm:py-10 lg:px-16 lg:py-12"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-100">Location de voiture au Maroc</p><h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Votre prochaine aventure commence ici.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-white/85 sm:text-base">Choisissez vos dates et parlons ensemble de la voiture qui vous accompagnera.</p><Button render={<a href="#reservation" />} nativeButton={false} className="mt-5 h-12 rounded-xl bg-white px-5 text-sm font-semibold text-brand shadow-none hover:bg-blue-50">Réserver maintenant <ArrowRight aria-hidden="true" className="size-4" /></Button></div>
      </div>
    </section>
  );
}
