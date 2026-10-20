import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section id="aventure" className="mt-12 scroll-mt-24 px-4 pb-12 sm:mt-16 sm:px-8 sm:pb-14 lg:mt-20 lg:px-10">
      <div className="relative isolate mx-auto min-h-[32rem] max-w-[80rem] overflow-hidden rounded-[1.5rem] bg-brand sm:min-h-0 sm:rounded-[2rem]">
        <Image
          src="/images/cta-coast.jpg"
          alt="Route côtière marocaine au bord de l’océan"
          fill
          sizes="(max-width: 639px) 100vw, 80rem"
          className="-z-20 hidden object-cover object-center sm:block"
        />
        <Image
          src="/images/cta-coast-mobile.png"
          alt=""
          fill
          sizes="(max-width: 639px) 100vw, 1px"
          className="-z-20 object-cover object-[center_65%] sm:hidden"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1d336b]/70 via-[#1d336b]/35 to-[#1d336b]/75 sm:bg-[#1d336b]/75" />
        <div className="flex min-h-[32rem] flex-col justify-end px-6 py-8 text-white sm:min-h-0 sm:block sm:px-12 sm:py-12 lg:px-16 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Location de voiture au Maroc</p>
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
