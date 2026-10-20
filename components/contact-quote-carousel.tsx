"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const quotes = [
  { name: "Samira B.", city: "Casablanca", text: "Une prise en charge claire et une voiture agréable pour notre séjour." },
  { name: "Youssef A.", city: "Rabat", text: "Un échange simple avant le départ et un accompagnement disponible pendant notre voyage." },
  { name: "Nadia E.", city: "Marrakech", text: "Le véhicule correspondait à nos besoins pour la route." },
];

export function ContactQuoteCarousel() {
  const [active, setActive] = useState(0);
  const quote = quotes[active];

  function showQuote(direction: -1 | 1) {
    setActive((current) => (current + direction + quotes.length) % quotes.length);
  }

  return (
    <div className="mt-auto border-t border-white/20 pt-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">Sur la route avec vous</span>
        <span className="text-xs tabular-nums text-white/65">0{active + 1} / 0{quotes.length}</span>
      </div>

      <figure key={active} className="animate-[quote-in_350ms_ease-out] relative border-l-2 border-[#084ea3] px-5 py-5 text-white sm:px-7 sm:py-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/75 underline decoration-white/50 underline-offset-4">Témoignage</span>
          <Quote aria-hidden="true" className="size-6 fill-white/20 text-white/20" />
        </div>
        <blockquote className="min-h-[3.5rem] max-w-[38rem] text-base font-medium leading-7 tracking-[-0.01em] text-white sm:text-lg">{quote.text}</blockquote>
        <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-white/15 pt-4">
          <span className="text-sm font-semibold tracking-tight text-white"><span className="underline decoration-white/45 underline-offset-4">{quote.name}</span><span className="ml-2 font-normal text-white/60">{quote.city}</span></span>
          <span className="border border-white/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">Exemple non vérifié</span>
        </figcaption>
      </figure>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-label="Choisir un avis exemple">
          {quotes.map((item, index) => (
            <button key={item.name} type="button" onClick={() => setActive(index)} aria-label={`Voir l’avis exemple ${index + 1}`} aria-current={active === index ? "true" : undefined} className={`h-1.5 rounded-full transition-[width,background-color] ${active === index ? "w-7 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => showQuote(-1)} aria-label="Voir l’avis précédent" className="flex size-9 items-center justify-center rounded-md border border-white/35 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft aria-hidden="true" className="size-4" /></button>
          <button type="button" onClick={() => showQuote(1)} aria-label="Voir l’avis suivant" className="flex size-9 items-center justify-center rounded-md bg-white text-[#084ea3] transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowRight aria-hidden="true" className="size-4" /></button>
        </div>
      </div>
      <style jsx>{`@keyframes quote-in { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion: reduce) { figure { animation: none; } }`}</style>
    </div>
  );
}
