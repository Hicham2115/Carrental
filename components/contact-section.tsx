import { Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <div><SectionHeading eyebrow="Contact" title="Parlons de votre prochain trajet." description="Une question ou un besoin particulier ? Présentez-nous votre projet de location." /><div className="mt-8 space-y-5"><div className="flex items-start gap-4"><span className="flex size-11 items-center justify-center rounded-xl bg-surface-blue text-brand"><Mail aria-hidden="true" className="size-5" /></span><div><p className="text-sm font-semibold text-slate-900">Écrivez-nous</p><p className="mt-1 text-sm text-slate-600">Utilisez le formulaire pour nous décrire votre demande.</p></div></div><div className="flex items-start gap-4"><span className="flex size-11 items-center justify-center rounded-xl bg-surface-blue text-brand"><MapPin aria-hidden="true" className="size-5" /></span><div><p className="text-sm font-semibold text-slate-900">Au Maroc</p><p className="mt-1 text-sm text-slate-600">Une présence pensée pour vos trajets à travers le royaume.</p></div></div></div></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_25px_70px_-50px_rgba(15,43,78,0.45)] sm:p-8"><ContactForm /></div>
      </div>
    </section>
  );
}
