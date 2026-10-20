import { MapPin, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navbar-components/logo";

const links = [
  { href: "#vehicules", label: "Nos voitures" },
  { href: "#services", label: "Services" },
  { href: "#a-propos", label: "À propos" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const announcements = [
  "Choisissez votre ville et vos dates",
  "Notre équipe vous accompagne pour préparer votre trajet",
  "Location de voiture au Maroc",
];

export function Header() {
  return (
    <header className="relative z-30 border-b border-slate-100 bg-white">
      <div className="announcement-bar relative h-9 overflow-hidden border-b border-white/15 bg-[#084ea3] text-[10px] font-semibold tracking-[0.04em] text-white sm:h-10 sm:text-xs">
        <div className="announcement-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              {[0, 1, 2].map((cycle) => (
                <div className="announcement-cycle" key={cycle}>
                  {announcements.map((message, index) => (
                    <span className="inline-flex items-center gap-5 sm:gap-7" key={`${cycle}-${message}`}>
                      <span className="transition-colors">{message}</span>
                      <span className="size-1 rounded-full bg-sky-300" aria-hidden="true" />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <span className="sr-only">Départs depuis : {announcements.join(", ")}.</span>
      </div>

      <div className="mx-auto grid h-[68px] max-w-[100rem] grid-cols-[1fr_auto] items-center px-4 sm:px-8 lg:h-[82px] lg:px-14 xl:grid-cols-[1fr_auto_1fr]">
        <a
          href="#accueil"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          aria-label="Carrental.ma, accueil"
        >
          <Logo className="h-auto w-[148px] sm:w-[190px] lg:w-[230px]" />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-10 xl:flex xl:justify-self-center 2xl:gap-12"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm py-2 text-sm font-medium text-slate-800 underline decoration-2 decoration-transparent underline-offset-[7px] transition-colors hover:text-brand hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end sm:gap-3 lg:gap-7">
          <div className="hidden items-center gap-6 md:flex">
            {/* <a
              href="#reservation"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Search aria-hidden="true" className="size-4" />
              Rechercher
            </a> */}
            <a
              href="#a-propos"
              className="hidden items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand xl:inline-flex"
            >
              <MapPin aria-hidden="true" className="size-4" />
              Nos agences
            </a>
          </div>

          <Button
            render={<a href="#reservation" />}
            nativeButton={false}
            className="h-10 rounded-sm px-4 text-sm font-semibold shadow-none sm:px-5 lg:h-11 lg:px-7"
          >
            Réserver
          </Button>

          <details className="group relative xl:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-lg border border-border text-slate-800 transition hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" className="size-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-[calc(100%+0.75rem)] w-56 rounded-xl border border-border bg-white p-2 shadow-xl"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-surface-blue hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
