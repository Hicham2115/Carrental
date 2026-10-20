import { Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const examples = [
  { name: "Samira B.", city: "Casablanca", text: "Une prise en charge claire et une voiture agréable pour notre séjour. Nous avons pu organiser nos déplacements facilement." },
  { name: "Youssef A.", city: "Rabat", text: "Un échange simple avant le départ et un accompagnement disponible pendant notre voyage. Très pratique pour visiter la région." },
  { name: "Nadia E.", city: "Marrakech", text: "La location s’est bien intégrée à notre programme. Le véhicule correspondait à nos besoins pour la route." },
];

export function ReviewsSection() {
  return (
    <section id="avis" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="Ils en parlent" title="Des trajets plus simples, des voyageurs sereins." description="L’expérience que nous voulons offrir à chaque location." /><p className="max-w-xs text-xs leading-5 text-slate-500 sm:text-right">Exemples de présentation — à remplacer par des avis clients vérifiés.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {examples.map((review) => (
            <figure key={review.name} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
              <div className="flex gap-1 text-star" aria-label="5 étoiles"><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /><Star className="size-4 fill-current" /></div>
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-slate-700">« {review.text} »</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5"><span className="flex size-10 items-center justify-center rounded-full bg-surface-blue text-sm font-bold text-brand">{review.name[0]}</span><span><span className="block text-sm font-semibold text-slate-900">{review.name}</span><span className="mt-0.5 block text-xs text-slate-500">{review.city}</span></span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
