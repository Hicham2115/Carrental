import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  { question: "Comment réserver une voiture ?", answer: "Indiquez votre ville ainsi que vos dates dans le formulaire de réservation. Notre équipe pourra ensuite vous aider à choisir un véhicule et à confirmer les détails de votre location." },
  { question: "Quels documents faut-il prévoir ?", answer: "Les documents requis peuvent varier selon le véhicule et les conditions de location. Contactez notre équipe avant votre départ pour obtenir la liste correspondant à votre réservation." },
  { question: "Puis-je récupérer la voiture dans une autre ville ?", answer: "Les points de prise en charge disponibles dépendent de votre trajet et des véhicules. Indiquez votre ville de départ afin que nous puissions vous orienter." },
  { question: "Comment obtenir le tarif de ma location ?", answer: "Le tarif dépend du véhicule, de la durée et des dates. Envoyez-nous votre demande avec ces informations pour recevoir une proposition adaptée." },
  { question: "Que faire si j’ai besoin d’aide pendant la location ?", answer: "Vous pouvez joindre notre équipe avec les coordonnées communiquées lors de la confirmation de votre location." },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
      <div className="grid w-full gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 2xl:px-16">
        <div className="rounded-2xl bg-brand-strong p-7 text-white sm:p-9 lg:self-start lg:p-11">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              <span aria-hidden="true" className="h-px w-8 bg-white/70" />
              Questions fréquentes
            </p>
            <h2 className="mt-7 max-w-md text-3xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[2.7rem]">
              Vos questions,<br />
              <span className="text-[#b9d7fa]">nos réponses.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/75">
              Les informations essentielles pour préparer votre location en toute tranquillité.
            </p>
          </div>
          <div className="mt-10 border-t border-white/25 pt-6">
            <p className="text-sm text-white/75">Une question sur votre trajet ?</p>
            <a href="#contact" className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-lg bg-white px-4 text-sm font-semibold text-brand-strong transition-colors hover:bg-surface-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Contactez notre équipe
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <Accordion className="border-t border-border" defaultValue={["question-0"]}>
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`} className="border-b border-border">
              <AccordionTrigger className="gap-5 py-6 text-left text-base font-semibold text-slate-950 hover:text-brand hover:no-underline sm:py-7 sm:text-lg [&_[data-slot=accordion-trigger-icon]]:text-brand">
                <span className="shrink-0 font-mono text-xs font-semibold tracking-wide text-brand">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-xl pb-7 pl-10 pr-6 text-sm leading-7 text-slate-600 sm:pl-11">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
