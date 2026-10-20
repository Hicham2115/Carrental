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

      <figure key={active} className="animate-[quote-in_350ms_ease-out] rounded-[1.5rem] bg-white px-6 py-6 text-slate-950 shadow-[0_20px_48px_rgba(4,12,39,0.16)] sm:px-8">
        <Quote aria-hidden="true" className="mb-3 size-6 fill-[#dce8f8] text-[#dce8f8]" />
        <blockquote className="min-h-[3.5rem] text-base font-medium leading-7 tracking-[-0.015em]">{quote.text}</blockquote>
        <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4">
          <span className="text-sm font-semibold text-[#123e80]">{quote.name} <span className="font-normal text-slate-500">· {quote.city}</span></span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-500">Exemple non vérifié</span>
        </figcaption>
      </figure>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5" aria-label="Choisir un avis exemple">
          {quotes.map((item, index) => (
            <button key={item.name} type="button" onClick={() => setActive(index)} aria-label={`Voir l’avis exemple ${index + 1}`} aria-current={active === index ? "true" : undefined} className={`h-1.5 rounded-full transition-[width,background-color] ${active === index ? "w-7 bg-white" : "w-2 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => showQuote(-1)} aria-label="Voir l’avis précédent" className="flex size-9 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowLeft aria-hidden="true" className="size-4" /></button>
          <button type="button" onClick={() => showQuote(1)} aria-label="Voir l’avis suivant" className="flex size-9 items-center justify-center rounded-full bg-white text-[#123e80] transition-colors hover:bg-[#eaf1fa] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><ArrowRight aria-hidden="true" className="size-4" /></button>
        </div>
      </div>
      <style jsx>{`@keyframes quote-in { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion: reduce) { figure { animation: none; } }`}</style>
    </div>
  );
}
