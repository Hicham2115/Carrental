import { CarFront, Clock3, Headset } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const services = [
  { icon: CarFront, title: "Des voitures bien entretenues", text: "Une flotte suivie pour rouler en toute sérénité." },
  { icon: Clock3, title: "Une réservation sans détour", text: "Un parcours simple pour organiser votre location." },
  { icon: Headset, title: "Une équipe disponible", text: "Une équipe à votre écoute à chaque étape." },
];

export function ServiceSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface-blue py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><SectionHeading eyebrow="Nos services" title="Tout est pensé pour prendre la route sereinement." description="Un accompagnement simple, du choix de votre véhicule jusqu’à la fin de votre trajet." /></div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-16 lg:gap-0">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className={`text-center sm:px-6 lg:px-10 ${index < services.length - 1 ? "sm:border-r sm:border-blue-200" : ""}`}>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-white text-brand"><Icon aria-hidden="true" className="size-5" /></div>
              <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
