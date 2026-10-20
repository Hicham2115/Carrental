import Image from "next/image";
import { ArrowRight, BadgeCheck, MapPinned, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Des véhicules entretenus",
    text: "Une flotte suivie pour prendre la route avec sérénité.",
  },
  {
    icon: MapPinned,
    title: "Présents au Maroc",
    text: "Des départs simples depuis les principales villes du royaume.",
  },
  {
    icon: BadgeCheck,
    title: "Un service humain",
    text: "Une équipe disponible pour vous accompagner à chaque étape.",
  },
];

export function AboutSection() {
  return (
    <section
      id="a-propos"
      className="scroll-mt-24 pb-12 pt-8 sm:pb-16 sm:pt-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeading
            align="left"
            eyebrow="À propos de nous"
            title="Carrental.ma, votre partenaire de route"
            description="Chez Carrental.ma, nous simplifions la location de voiture au Maroc pour que vous puissiez profiter pleinement de chaque trajet, avec des véhicules adaptés et un service à votre écoute."
          />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Pour un voyage, un déplacement professionnel ou une escapade le
            temps d’un week-end, nous vous aidons à trouver la voiture qui
            correspond à votre trajet.
          </p>
          <div className="mt-8 space-y-5">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-blue text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
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
            href="#services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong"
          >
            Découvrir nos services{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="relative min-h-[390px] overflow-hidden rounded-[2rem] bg-surface-blue sm:min-h-[510px]">
          <Image
            src="/images/about-traveler.jpg"
            alt="Un voyageur prêt à prendre la route au Maroc"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur sm:bottom-7 sm:left-7">
            <p className="text-2xl font-bold tracking-tight text-brand">
              Carrental.ma
            </p>
            <p className="mt-1 text-xs font-medium text-slate-600">
              Votre mobilité, simplement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
