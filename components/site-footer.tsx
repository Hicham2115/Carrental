import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/navbar-components/logo";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Nos services" },
  { href: "#avis", label: "Avis" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#071b33] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div><a href="#accueil" aria-label="Carrental.ma, retour à l’accueil" className="inline-flex rounded bg-white p-2"><Logo className="w-40" /></a><p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">Votre mobilité, simplement. Louez une voiture et découvrez le Maroc à votre rythme.</p></div>
          <div><h2 className="text-sm font-semibold">Navigation</h2><ul className="mt-4 space-y-3">{links.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-slate-300 transition-colors hover:text-white">{link.label}</a></li>)}</ul></div>
          <div><h2 className="text-sm font-semibold">À votre service</h2><p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">Une équipe à votre écoute pour vous aider à préparer vos trajets au Maroc.</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white hover:underline">Nous contacter <ArrowUpRight aria-hidden="true" className="size-4" /></a></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Carrental.ma. Tous droits réservés.</p><a href="#accueil" className="inline-flex items-center gap-1 hover:text-white">Retour en haut <ArrowUpRight aria-hidden="true" className="size-3.5" /></a></div>
      </div>
    </footer>
  );
}
