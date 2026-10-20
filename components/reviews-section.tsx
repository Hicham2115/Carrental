"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const examples = [
  { name: "Samira B.", city: "Casablanca", text: "Une prise en charge claire et une voiture agréable pour notre séjour. Nous avons pu organiser nos déplacements facilement." },
  { name: "Youssef A.", city: "Rabat", text: "Un échange simple avant le départ et un accompagnement disponible pendant notre voyage. Très pratique pour visiter la région." },
  { name: "Nadia E.", city: "Marrakech", text: "La location s’est bien intégrée à notre programme. Le véhicule correspondait à nos besoins pour la route." },
  { name: "Amine R.", city: "Tanger", text: "Nous avons trouvé une voiture adaptée à notre séjour en famille. Les échanges avant le départ étaient simples et utiles." },
  { name: "Salma K.", city: "Agadir", text: "Le véhicule était agréable à conduire et nous avons pu profiter de notre itinéraire sans complication." },
  { name: "Karim L.", city: "Fès", text: "Une organisation claire pour notre déplacement professionnel, avec des réponses rapides à nos questions." },
];

export function ReviewsSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous" | null>(null);
  const pageCount = Math.ceil(examples.length / 3);
  const visibleReviews = examples.slice(page * 3, page * 3 + 3);

  function changePage(nextDirection: "next" | "previous") {
    setDirection(nextDirection);
    setPage((current) => (current + (nextDirection === "next" ? 1 : -1) + pageCount) % pageCount);
  }

  return (
    <section id="avis" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-8">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Avis voyageurs
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl">
              Des trajets, des impressions.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Aperçu de la présentation des avis, en attendant des retours clients vérifiés.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <span className="rounded-md border border-border bg-surface-blue px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
              Exemples de présentation
            </span>
            <div className="flex items-center gap-3" aria-label="Navigation des avis">
              <span className="mr-1 text-xs font-semibold tabular-nums text-slate-500">
                {String(page + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => changePage("previous")}
                aria-label="Voir les avis précédents"
                className="flex size-9 items-center justify-center rounded-full border border-border text-brand transition-colors hover:border-brand hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <ArrowLeft aria-hidden="true" className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => changePage("next")}
                aria-label="Voir les avis suivants"
                className="flex size-9 items-center justify-center rounded-full border border-border text-brand transition-colors hover:border-brand hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <ArrowRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          key={page}
          className={`mt-10 grid gap-0 sm:grid-cols-3 ${direction ? `reviews-enter reviews-enter-${direction}` : ""}`}
          aria-live="polite"
        >
          {visibleReviews.map((review) => (
            <article
              key={review.name}
              className="group/review flex flex-col border-b border-border py-6 transition-colors duration-200 sm:border-b-0 sm:border-r sm:px-6 sm:py-0 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 motion-reduce:transition-none"
            >
              <div className="flex items-start justify-between gap-3">
                <span aria-hidden="true" className="h-10 text-6xl font-semibold leading-none text-brand transition-colors duration-200 group-hover/review:text-brand-strong">“</span>
                <div className="flex gap-0.5 text-brand transition-colors duration-200 group-hover/review:text-brand-strong" aria-label="Notation illustrative, cinq étoiles">
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star key={star} aria-hidden="true" className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-3 flex-1 text-base font-medium leading-7 text-black sm:text-lg">
                {review.text}
              </blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-blue text-sm font-bold text-brand">
                  {review.name[0]}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-950">{review.name}</p>
                  <p className="text-xs text-slate-500">{review.city}</p>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Exemple non vérifié
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
