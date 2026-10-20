import Image from "next/image";
import { ArrowUpRight, CalendarCheck2, CarFront, Headset } from "lucide-react";

const services = [
  {
    icon: CarFront,
    step: "01 / Choisir",
    title: "Des voitures bien entretenues",
    text: "Trouvez le format adapté à votre trajet parmi des véhicules suivis avec soin.",
  },
  {
    icon: CalendarCheck2,
    step: "02 / Organiser",
    title: "Une réservation sans détour",
    text: "Indiquez votre ville et vos dates. Nous vous aidons à préparer la suite.",
  },
  {
    icon: Headset,
    step: "03 / Prendre la route",
    title: "Une équipe disponible",
    text: "Une équipe à votre écoute avant le départ et pendant votre location.",
  },
];

export function ServiceSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-surface-blue py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch lg:gap-12 lg:px-10">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Nos services
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-[2.7rem]">
              Tout est pensé pour prendre la route{" "}
              <span className="text-brand">sereinement.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              Le bon véhicule, une réservation claire et une équipe présente
              tout au long du trajet.
            </p>
          </div>

          <div className="relative mt-7 divide-y divide-border border-y border-border before:pointer-events-none before:absolute before:bottom-9 before:left-[1.375rem] before:top-9 before:w-px before:bg-brand/20 sm:mt-8 sm:before:left-6">
            {services.map(({ icon: Icon, step, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 py-4 sm:gap-5 sm:py-5"
              >
                <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white sm:size-12">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.8}
                  />
                </span>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                    {step}
                  </p>
                  <h3 className="text-base font-bold tracking-tight text-slate-950 sm:text-lg">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-6 inline-flex min-h-12 w-fit items-center gap-3 rounded-xl bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Parlons de votre trajet
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={2}
            />
          </a>
        </div>

        <figure className="relative min-h-[340px] rounded-[1.75rem] border border-border bg-white p-2 shadow-[0_28px_55px_-42px_rgba(7,59,122,0.45)] sm:min-h-[420px] lg:min-h-[560px]">
          <div className="absolute inset-2 overflow-hidden rounded-[1.25rem]">
            <Image
              src="/images/services-interior.webp"
              alt="Intérieur d’une voiture avec vue sur le front de mer de Casablanca"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="absolute bottom-6 left-6 rounded-lg border border-white/30 bg-brand/95 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-sm sm:bottom-8 sm:left-8">
            Casablanca · Maroc
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
