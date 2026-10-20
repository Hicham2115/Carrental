"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Saisissez votre prénom (2 caractères minimum)."),
  lastName: z.string().trim().min(2, "Saisissez votre nom (2 caractères minimum)."),
  email: z.email("Saisissez une adresse e-mail valide."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères."),
});

function FieldError({ id, message }: { id: string; message?: unknown }) {
  if (!message) return null;
  return <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-destructive">{String(message)}</p>;
}

export function ContactForm() {
  const form = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
    validationLogic: revalidateLogic({ mode: "submit", modeAfterSubmission: "change" }),
    validators: { onDynamic: contactSchema },
    onSubmit: async () => {
      toast.info("Votre demande est prête.", { description: "L’envoi en ligne sera disponible prochainement. Contactez-nous directement pour le moment." });
    },
  });

  return (
    <form noValidate onSubmit={(event) => { event.preventDefault(); void form.handleSubmit(); }} className="space-y-5">
      <div className="mb-7 flex items-start gap-4 border-b border-slate-200 pb-6">
        <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#eaf2fb] text-[#084ea3] ring-1 ring-inset ring-[#084ea3]/10"><Mail className="size-5" strokeWidth={1.9} /></span>
        <div className="pt-0.5">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">Votre message</h3>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">Un projet de location ou une question ? Décrivez votre besoin ci-dessous.</p>
        </div>
      </div>

      <form.Field name="firstName">
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-first-name" className="mb-2 block text-sm font-medium">Votre prénom</Label><Input id="contact-first-name" autoComplete="given-name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-first-name-error" : undefined} placeholder="Ex. : Amine" className="h-12 rounded-sm border border-slate-300 px-4 transition-colors focus-visible:border-[#084ea3] focus-visible:ring-2 focus-visible:ring-[#084ea3]/20" /><FieldError id="contact-first-name-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="lastName">
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-last-name" className="mb-2 block text-sm font-medium">Votre nom</Label><Input id="contact-last-name" autoComplete="family-name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-last-name-error" : undefined} placeholder="Ex. : El Amrani" className="h-12 rounded-sm border border-slate-300 px-4 transition-colors focus-visible:border-[#084ea3] focus-visible:ring-2 focus-visible:ring-[#084ea3]/20" /><FieldError id="contact-last-name-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="email">
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Votre adresse e-mail</Label><Input id="contact-email" type="email" autoComplete="email" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-email-error" : undefined} placeholder="vous@exemple.com" className="h-12 rounded-sm border border-slate-300 px-4 transition-colors focus-visible:border-[#084ea3] focus-visible:ring-2 focus-visible:ring-[#084ea3]/20" /><FieldError id="contact-email-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="message">
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Comment pouvons-nous vous aider ?</Label><Textarea id="contact-message" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-message-error" : undefined} placeholder="Parlez-nous de votre trajet ou posez votre question…" className="min-h-36 resize-y rounded-sm border border-slate-300 px-4 py-3 transition-colors focus-visible:border-[#084ea3] focus-visible:ring-2 focus-visible:ring-[#084ea3]/20" /><FieldError id="contact-message-error" message={error} /></div>; }}
      </form.Field>
      <Button type="submit" className="h-12 w-full cursor-pointer rounded-sm bg-[#1d336b] text-sm font-semibold hover:bg-[#172956]">Envoyer ma demande</Button>
      <p className="text-center text-xs leading-5 text-slate-500">La messagerie en ligne est en préparation. Aucune donnée n’est envoyée pour le moment.</p>
    </form>
  );
}
