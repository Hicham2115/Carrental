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
    <section id="faq" className="scroll-mt-24 mx-2 my-3 rounded-xl bg-[#1d336b] py-6 text-white min-[380px]:mx-3 sm:my-6 sm:rounded-2xl sm:py-10 lg:mx-8 lg:my-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-[100rem] gap-6 px-4 min-[380px]:px-5 sm:gap-8 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 2xl:px-16">
        <div className="py-2 text-white sm:py-5 lg:py-8 lg:pr-8">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
              <span aria-hidden="true" className="h-px w-7 bg-white/60" />
              Questions fréquentes
            </p>
            <h2 className="mt-4 max-w-md text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:mt-6 sm:text-4xl lg:text-[2.45rem]">
              Vos questions,
              <span className="mt-1 block text-white/80">nos réponses.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-white sm:mt-5 sm:text-base sm:leading-7">
              Les informations essentielles pour préparer votre location en toute tranquillité.
            </p>
          </div>
          <div className="mt-6 border-t border-white/30 pt-5 sm:mt-9 sm:pt-6">
            <p className="text-sm font-medium text-white sm:text-base">Une question sur votre trajet ?</p>
            <a href="#contact" className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-sm bg-white px-3.5 text-sm font-semibold text-[#084ea3] transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-4 sm:gap-3 sm:px-4">
              Contactez notre équipe
              <span className="flex size-7 items-center justify-center rounded-sm bg-[#eaf2fb] text-[#084ea3]"><ArrowUpRight aria-hidden="true" className="size-4" /></span>
            </a>
          </div>
        </div>
        <Accordion className="border-t border-white/25 text-white [&_[data-slot=accordion-item]]:border-white/25" defaultValue={["question-0"]}>
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`} className="border-b border-border">
              <AccordionTrigger className="min-h-14 gap-3 py-4 text-left text-sm font-semibold leading-6 text-white hover:cursor-pointer hover:text-white hover:no-underline min-[380px]:gap-4 sm:gap-5 sm:py-7 sm:text-lg [&_[data-slot=accordion-trigger-icon]]:text-white">
                <span className="shrink-0 font-mono text-[11px] font-semibold tracking-wide text-white/75 sm:text-xs">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-5 pl-8 pr-2 text-sm font-medium leading-6 text-white sm:pb-7 sm:pl-11 sm:pr-6 sm:leading-7">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
