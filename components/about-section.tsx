import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="a-propos" className="scroll-mt-24 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 bg-white px-5 sm:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:px-10">
        <div className="max-w-xl py-2 lg:py-0">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#084ea3]">
            À propos de nous
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl">
            <span className="text-[#084ea3]">Carrental.ma,</span> <br /> votre
            partenaire de route
          </h2>
          <p className="mt-4 text-sm font-medium leading-5 text-slate-600 sm:text-base sm:leading-6">
            Chez Carrental.ma, nous simplifions la location de voiture au Maroc
            pour que vous puissiez profiter pleinement de chaque trajet. Des
            véhicules fiables, un service transparent et une équipe locale à
            votre écoute, où que vous soyez.
          </p>
          <p className="mt-3 text-sm font-medium leading-5 text-slate-600 sm:text-base sm:leading-6">
            Que vous voyagiez pour le travail, les vacances ou une escapade le
            temps d’un week-end, nous vous aidons à choisir un véhicule adapté à
            votre itinéraire. De la réservation jusqu’au retour, notre équipe
            reste disponible pour rendre chaque étape simple et agréable.
          </p>
          <a
            href="#a-propos"
            className="mt-5 inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-sm bg-[#084ea3] px-5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#084ea3]"
          >
            Découvrir notre histoire
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-surface-blue sm:aspect-[1.45/1] lg:aspect-[1.28/1]">
          <Image
            src="/images/about-traveler.jpg"
            alt="Un voyageur prêt à prendre la route au Maroc"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
