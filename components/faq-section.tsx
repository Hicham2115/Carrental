import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

const questions = [
  { question: "Comment réserver une voiture ?", answer: "Indiquez votre ville ainsi que vos dates dans le formulaire de réservation. Notre équipe pourra ensuite vous aider à choisir un véhicule et à confirmer les détails de votre location." },
  { question: "Quels documents faut-il prévoir ?", answer: "Les documents requis peuvent varier selon le véhicule et les conditions de location. Contactez notre équipe avant votre départ pour obtenir la liste correspondant à votre réservation." },
  { question: "Puis-je récupérer la voiture dans une autre ville ?", answer: "Les points de prise en charge disponibles dépendent de votre trajet et des véhicules. Indiquez votre ville de départ afin que nous puissions vous orienter." },
  { question: "Comment obtenir le tarif de ma location ?", answer: "Le tarif dépend du véhicule, de la durée et des dates. Envoyez-nous votre demande avec ces informations pour recevoir une proposition adaptée." },
  { question: "Que faire si j’ai besoin d’aide pendant la location ?", answer: "Vous pouvez joindre notre équipe avec les coordonnées communiquées lors de la confirmation de votre location." },
];

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface-blue py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <div><SectionHeading eyebrow="FAQ" title="Vos questions, nos réponses." description="Les informations essentielles pour préparer votre location en toute tranquillité." /><a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-brand hover:underline">Une autre question ? Contactez-nous</a></div>
        <Accordion className="rounded-2xl border border-blue-100 bg-white px-5 sm:px-7" defaultValue={["question-0"]}>
          {questions.map((item, index) => (
            <AccordionItem key={item.question} value={`question-${index}`} className="border-slate-100">
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-slate-900 hover:text-brand sm:text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-slate-600">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
