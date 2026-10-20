import Image from "next/image";
import { ArrowRight, CarFront, Headset, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const commitments = [
  {
    icon: CarFront,
    title: "Des véhicules entretenus",
    description: "Chaque voiture est vérifiée avant votre départ.",
  },
  {
    icon: Headset,
    title: "Une équipe à votre écoute",
    description: "Un vrai interlocuteur, avant et pendant le trajet.",
  },
  {
    icon: ShieldCheck,
    title: "Au départ de votre ville",
    description: "Retrouvez-nous dans les grandes villes du Maroc.",
  },
];

export function Hero() {
  return (
    <section id="accueil" aria-label="Location de voiture au Maroc" className="pb-6 sm:pb-0">
      <div className="relative isolate h-[68svh] min-h-[360px] w-full overflow-hidden bg-slate-100 md:hidden">
        <Image
          src="/images/hero-casablanca-blue.png"
          alt="Une voiture bleue sur le front de mer de Casablanca, avec la mosquée Hassan II en arrière-plan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
      </div>

      <div className="bg-white px-5 pb-10 pt-7 text-brand-strong md:hidden">
        <div className="hero-copy-enter mx-auto max-w-[42rem]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
            Location de voiture au Maroc
          </p>
          <h1 className="text-[2.35rem] font-bold leading-[1.02] tracking-[-0.055em] min-[380px]:text-[2.65rem]">
            Partez sur la route l’esprit léger.
          </h1>
          <p className="mt-4 max-w-[26rem] text-sm font-semibold leading-relaxed text-slate-700">
            Le bon véhicule, au bon endroit et au bon moment, avec une équipe locale à vos côtés pour chaque trajet.
          </p>
          <Button
            render={<a href="#services" />}
            nativeButton={false}
            className="mt-6 h-12 rounded-sm px-6 text-sm font-semibold shadow-none"
          >
            Découvrir nos voitures
            <ArrowRight aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>

      <div className="relative isolate hidden h-[520px] overflow-hidden bg-slate-100 md:block md:h-[580px] lg:h-[560px]">
        <Image
          src="/images/hero-casablanca-blue.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[62%_57%]"
        />
        <div className="mx-auto flex h-full max-w-[100rem] items-start px-8 pt-16 text-brand-strong lg:px-14 lg:pt-24">
          <div className="hero-copy-enter max-w-[42rem]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand md:text-xs">
              Location de voiture au Maroc
            </p>
            <h1
              className="max-w-[42rem] text-[3.25rem] font-bold leading-[1.02] tracking-[-0.055em] lg:text-[4.25rem]"
            >
              Partez sur la route
              <br />
              <span className="text-[#084ea3]">l’esprit léger.</span>
            </h1>
            <p className="mt-6 max-w-[26rem] text-base font-semibold leading-relaxed text-slate-800">
              Le bon véhicule, au bon endroit et au bon moment, avec une équipe locale à vos côtés pour chaque trajet.
            </p>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              className="mt-8 h-14 rounded-sm px-7 text-base font-semibold shadow-none"
            >
              Découvrir nos voitures
              <ArrowRight aria-hidden="true" className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="relative z-10 mx-auto -mt-14 max-w-[100rem] px-4 sm:-mt-16 sm:px-8 lg:-mt-[68px] lg:px-14">
        <BookingForm />
      </div> */}
      <div className="border-y border-slate-200 bg-[#f1f6fc]">
        <ul
          aria-label="Les engagements Carrental.ma"
          className="mx-auto grid max-w-[76rem] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:px-10"
        >
          {commitments.map(({ icon: Icon, title, description }, index) => (
            <li key={title} className="relative flex gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:min-h-[126px] sm:flex-col sm:justify-between sm:border-b-0 sm:px-6 sm:py-4 sm:first:pl-0 sm:last:pr-0 sm:not-last:border-r sm:not-last:border-[#084ea3]/25 lg:px-8">
              <span aria-hidden="true" className="mt-0.5 flex size-9 shrink-0 items-center justify-center text-brand sm:mt-0">
                <Icon className="size-[21px]" strokeWidth={1.7} />
              </span>
              <span className="min-w-0 sm:pl-1">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">0{index + 1} / Notre engagement</span>
                <span className="block text-[15px] font-semibold leading-5 text-slate-900">{title}</span>
                <span className="mt-1.5 block max-w-[22rem] text-[13px] leading-[1.65] text-slate-600">{description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
