import Image from "next/image";
import { ArrowRight, CarFront, Headset, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const commitments = [
  {
    icon: CarFront,
    title: "Des véhicules entretenus",
    description: "Une flotte suivie pour rouler sereinement.",
  },
  {
    icon: Headset,
    title: "Un service humain",
    description: "Une équipe disponible à chaque étape.",
  },
  {
    icon: ShieldCheck,
    title: "Présents dans les principales villes",
    description: "Des départs depuis les grandes villes du Maroc.",
  },
];

export function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="pb-6 sm:pb-0">
      <div className="relative isolate h-[520px] overflow-hidden bg-slate-100 sm:h-[580px] lg:h-[560px]">
        <Image
          src="/images/hero-casablanca-blue.png"
          alt="Une voiture bleue sur le front de mer de Casablanca, avec la mosquée Hassan II en arrière-plan"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[62%_57%]"
        />
        <div className="mx-auto flex h-full max-w-[100rem] items-start px-5 pt-12 text-brand-strong sm:px-8 sm:pt-16 lg:px-14 lg:pt-24">
          <div className="hero-copy-enter max-w-[42rem]">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand sm:text-xs">
              Location de voiture au Maroc
            </p>
            <h1
              id="hero-title"
              className="max-w-[42rem] text-[2.65rem] font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-[3.25rem] lg:text-[4.25rem]"
            >
              Partez sur la route
              <br />
              <span className="text-[#084ea3]">l’esprit léger.</span>
            </h1>
            <p className="mt-4 max-w-[34rem] text-[0.95rem] font-medium leading-relaxed text-slate-800 sm:mt-6 sm:text-base sm:leading-relaxed">
              Le bon véhicule, au bon endroit et au bon moment, avec une équipe locale à vos côtés pour chaque trajet.
            </p>
            <Button
              render={<a href="#services" />}
              nativeButton={false}
              className="mt-6 h-12 rounded-sm px-6 text-sm font-semibold shadow-none sm:mt-8 sm:h-14 sm:px-7 sm:text-base"
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
      <div className="border-y border-[#084ea3]/15 bg-[#f1f6fc]">
        <ul
          aria-label="Les engagements Carrental.ma"
          className="mx-auto grid max-w-[76rem] grid-cols-1 divide-y divide-[#084ea3]/15 px-5 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:px-8 lg:px-10"
        >
          {commitments.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex min-h-[88px] items-center gap-4 px-3 py-4 sm:px-5 lg:px-7">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-brand shadow-sm">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold leading-5 text-slate-900">{title}</span>
                <span className="mt-1 block text-xs leading-5 text-slate-600">{description}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
