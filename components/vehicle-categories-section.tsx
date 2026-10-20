import Image from "next/image";
import { ArrowRight, Fuel, Gauge, Info, Settings2, UsersRound } from "lucide-react";

const categories = [
  {
    name: "Citadines",
    description: "Idéales en ville, économiques et faciles à garer.",
    price: 29,
    specs: { mileage: "32 000 km", transmission: "Manuelle", fuel: "Essence", seats: "5 places" },
    image: "/images/category-city.webp",
    imageAlt: "Voiture citadine blanche",
  },
  {
    name: "Compactes",
    description: "Confortables et polyvalentes pour vos trajets du quotidien.",
    price: 39,
    specs: { mileage: "24 500 km", transmission: "Automatique", fuel: "Diesel", seats: "5 places" },
    image: "/images/category-compact.webp",
    imageAlt: "Voiture compacte argentée",
  },
  {
    name: "SUV & 4x4",
    description: "Plus d’espace et de puissance pour partir à l’aventure.",
    price: 59,
    specs: { mileage: "18 000 km", transmission: "Automatique", fuel: "Diesel", seats: "5 places" },
    image: "/images/category-suv.webp",
    imageAlt: "SUV bleu",
  },
  {
    name: "Berlines",
    description: "Confort et élégance pour vos déplacements professionnels.",
    price: 69,
    specs: { mileage: "29 000 km", transmission: "Automatique", fuel: "Diesel", seats: "5 places" },
    image: "/images/category-berline.webp",
    imageAlt: "Berline noire",
  },
  {
    name: "Utilitaires",
    description: "Le volume qu’il vous faut pour transporter vos affaires.",
    price: 49,
    specs: { mileage: "41 000 km", transmission: "Manuelle", fuel: "Diesel", seats: "3 places" },
    image: "/images/category-utility.webp",
    imageAlt: "Utilitaire blanc",
  },
  {
    name: "Monospaces",
    description: "Plus de place pour voyager ensemble et emporter vos bagages.",
    price: null,
    specs: { mileage: "21 000 km", transmission: "Automatique", fuel: "Diesel", seats: "7 places" },
    image: "/images/category-monospace.webp",
    imageAlt: "Monospace argenté",
  },
];

const vehicleDetails = [
  { label: "Kilométrage", key: "mileage", icon: Gauge },
  { label: "Transmission", key: "transmission", icon: Settings2 },
  { label: "Carburant", key: "fuel", icon: Fuel },
  { label: "Places", key: "seats", icon: UsersRound },
] as const;

export function VehicleCategoriesSection() {
  return (
    <section
      id="vehicules"
      className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12 2xl:px-16">
        <div className="grid items-end gap-5 border-b border-slate-200 pb-7 sm:pb-8 lg:grid-cols-[1fr_0.6fr] lg:gap-12">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#084ea3]">
              <span aria-hidden="true" className="h-px w-6 bg-[#084ea3]" />
              Nos véhicules
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Trouvez la voiture faite pour votre trajet.
            </h2>
          </div>
          <div className="max-w-md lg:justify-self-end lg:border-l-2 lg:border-[#084ea3]/30 lg:pl-6">
            <p className="text-sm font-medium leading-7 text-slate-700 lg:text-base lg:leading-8">
              De la citadine agile au grand utilitaire, choisissez le format qui
              vous accompagne au Maroc.
            </p>
            <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-[#084ea3]" />
              <span>Caractéristiques illustratives, à confirmer lors de la réservation.</span>
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {categories.map(({ name, description, price, specs, image, imageAlt }) => (
            <article
              key={name}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_30px_-24px_rgba(8,78,163,0.16)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#084ea3]/40 hover:shadow-[0_22px_46px_-26px_rgba(8,78,163,0.24)] motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="relative aspect-[2/1] overflow-hidden border-b border-border bg-surface-blue">
                <span className="absolute left-4 top-4 z-10 rounded-md border border-[#084ea3]/15 bg-white/90 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#084ea3]">
                  Catégorie
                </span>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
                  className="scale-[0.96] object-contain px-8 py-5 transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transition-none"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="text-lg font-bold tracking-tight text-slate-950">
                  {name}
                </h3>
                <p className="mt-1.5 min-h-10 text-sm leading-5 text-slate-600">
                  {description}
                </p>
                <ul
                  aria-label={`Caractéristiques des ${name}`}
                  className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-border pt-4"
                >
                  {vehicleDetails.map(({ label, key, icon: Icon }) => (
                    <li key={label} className="flex min-w-0 items-start gap-2.5">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-surface-blue text-[#084ea3]">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                      <span className="flex min-w-0 flex-col text-xs leading-4">
                        <span className="font-semibold text-slate-800">{label}</span>
                        <span className="text-slate-500">{specs[key]}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-end justify-between gap-3 border-t border-border pt-4">
                  {price === null ? (
                    <p className="text-base font-bold text-[#084ea3]">Tarif sur demande</p>
                  ) : (
                    <p className="flex flex-col gap-0.5 text-xs font-medium text-slate-500">
                      À partir de
                      <span className="text-2xl font-bold tracking-tight text-[#084ea3]">{price} € <span className="text-xs font-medium tracking-normal text-slate-500">/ jour</span></span>
                    </p>
                  )}
                  <a
                    href="#reservation"
                    className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm bg-[#084ea3] px-4 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#084ea3]"
                  >
                    {price === null ? "Demander un tarif" : "Réserver"}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
