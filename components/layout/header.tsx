"use client";

import { useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white">
      <div className="announcement-bar relative h-9 overflow-hidden border-b border-white/15 bg-[#084ea3] text-[10px] font-semibold tracking-[0.04em] text-white sm:h-10 sm:text-xs">
        <div className="announcement-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="announcement-group" key={copy}>
              {[0, 1, 2].map((cycle) => (
                <div className="announcement-cycle" key={cycle}>
                  {announcements.map((message) => (
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
          <Logo className="h-auto w-[118px] min-[380px]:w-[148px] sm:w-[190px] lg:w-[230px]" />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-10 xl:flex xl:justify-self-center 2xl:gap-12"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm py-2 text-sm font-semibold text-slate-800 underline decoration-2 decoration-transparent underline-offset-[7px] transition-colors hover:text-brand hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end sm:gap-3 lg:gap-7">
          <div className="hidden items-center md:flex">
            {/* <a
              href="#reservation"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <Search aria-hidden="true" className="size-4" />
              Rechercher
            </a> */}
            <a
              href="#a-propos"
              className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700 transition-colors hover:text-brand focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              Nos agences
            </a>
          </div>

          <Button
            render={<a href="#reservation" />}
            nativeButton={false}
            className="h-10 rounded-sm px-3 text-sm font-semibold shadow-none min-[380px]:px-4 sm:px-5 lg:h-11 lg:px-7"
          >
            Réserver
          </Button>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex size-10 items-center justify-center rounded-full border border-border text-slate-800 transition hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:hidden"
          >
            {menuOpen ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[2px] xl:hidden"
          />
          <nav
            id="mobile-navigation"
            aria-label="Navigation mobile"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,24rem)] flex-col bg-white px-6 pb-8 pt-6 shadow-2xl sm:px-8 xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-border pb-5">
              <span className="text-sm font-semibold text-slate-500">Navigation</span>
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setMenuOpen(false)}
                className="flex size-10 items-center justify-center rounded-full border border-border text-slate-700 hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-brand"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="mt-5 flex flex-col gap-1">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-14 items-center gap-4 border-b border-slate-100 text-lg font-semibold text-slate-800 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
                >
                  <span className="font-mono text-xs text-slate-400">0{index + 1}</span>
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#reservation"
              onClick={() => setMenuOpen(false)}
              className="mt-auto flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#084ea3] px-5 text-sm font-semibold text-white"
            >
              Réserver <span aria-hidden="true">→</span>
            </a>
          </nav>
        </>
      ) : null}
    </header>
  );
}
