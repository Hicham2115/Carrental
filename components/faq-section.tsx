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
    <section id="faq" className="scroll-mt-24 mx-3 my-4 rounded-xl bg-[#1d336b] bg-[radial-gradient(ellipse_at_18%_0%,rgba(255,255,255,0.09),transparent_44%)] py-8 text-white sm:mx-5 sm:my-6 sm:rounded-2xl sm:py-10 lg:mx-8 lg:my-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[100rem] gap-8 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 2xl:px-16">
        <div className="py-3 text-white sm:py-5 lg:py-8 lg:pr-8">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
              <span aria-hidden="true" className="h-px w-7 bg-sky-200" />
              Questions fréquentes
            </p>
            <h2 className="mt-6 max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-4xl lg:text-[2.45rem]">
              Vos questions,
              <span className="mt-1 block text-[#b9d7fa]">nos réponses.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base font-medium leading-7 text-white">
              Les informations essentielles pour préparer votre location en toute tranquillité.
            </p>
          </div>
          <div className="mt-8 border-t border-white/30 pt-6 sm:mt-9">
            <p className="text-base font-medium text-white">Une question sur votre trajet ?</p>
            <a href="#contact" className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-sm bg-white px-4 text-sm font-semibold text-[#084ea3] shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Contactez notre équipe
              <span className="flex size-7 items-center justify-center rounded-sm bg-[#084ea3]/10"><ArrowUpRight aria-hidden="true" className="size-4" /></span>
            </a>
          </div>
        </div>
        <Accordion className="border-t border-white/25 text-white [&_[data-slot=accordion-item]]:border-white/25" defaultValue={["question-0"]}>
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`} className="border-b border-border">
              <AccordionTrigger className="gap-5 py-6 text-left text-base font-semibold text-white hover:text-white hover:no-underline sm:py-7 sm:text-lg [&_[data-slot=accordion-trigger-icon]]:text-white">
                <span className="shrink-0 font-mono text-xs font-semibold tracking-wide text-white/75">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-7 pl-10 pr-6 text-sm font-medium leading-7 text-white sm:pl-11">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
