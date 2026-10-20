import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/navbar-components/logo";
import { CurrentYear } from "@/components/current-year";

const links = [
  { href: "#reservation", label: "Réservation" },
  { href: "#vehicules", label: "Nos voitures" },
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Nos services" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#aventure", label: "Votre prochaine aventure" },
];

export function SiteFooter() {
  return (
    <footer className="bg-white px-4 py-7 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] bg-[#0d1727] px-6 shadow-[0_24px_60px_rgba(22,48,101,0.10)] sm:px-10 lg:px-[5.5vw]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 py-12 sm:gap-x-10 sm:py-14 lg:grid-cols-[1.65fr_1fr_1fr_1fr] lg:gap-10 lg:py-[66px]">
          <div className="col-span-2 max-w-[380px] lg:col-span-1">
            <a
              href="#accueil"
              aria-label="Carrental.ma, retour à l’accueil"
              className="inline-flex text-2xl font-bold tracking-tight text-white"
            >
              Carrental.ma
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Votre mobilité, simplement. Louez une voiture et découvrez le
              Maroc à votre rythme, avec une équipe locale à vos côtés.
            </p>
          </div>
          <nav aria-label="Navigation principale">
            <h2 className="text-[11px] font-bold uppercase tracking-[.12em]">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
                    {links.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm leading-7 text-white/90 underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:text-white focus-visible:decoration-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Plus d’informations">
            <h2 className="text-[11px] font-bold uppercase tracking-[.12em]">
              À découvrir
            </h2>
            <ul className="mt-4 space-y-3">
                    {links.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm leading-7 text-white/90 underline decoration-transparent decoration-1 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:text-white focus-visible:decoration-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[.12em]">
              À votre service
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Une équipe à votre écoute pour vous aider à préparer vos trajets
              au Maroc.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline"
            >
              Nous contacter{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© <CurrentYear /> Carrental.ma. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-[12px] text-white/70">
              Designed &amp; developed by{" "}
              <a
                href="https://www.stallionadvertising.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-transparent underline-offset-2 transition-colors duration-200 hover:text-white hover:decoration-white"
              >
                Stallion Advertising
              </a>
            </p>
            <a
              href="#accueil"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              Retour en haut{" "}
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
