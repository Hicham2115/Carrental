"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
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
  const [topic, setTopic] = useState<"location" | "question">("location");
  const form = useForm({
    defaultValues: { firstName: "", lastName: "", email: "", message: "" },
    onSubmit: async ({ value }) => {
      const result = contactSchema.safeParse(value);
      if (!result.success) {
        toast.error(result.error.issues[0]?.message ?? "Vérifiez les informations saisies.");
        return;
      }
      toast.info("Votre demande est prête.", { description: "L’envoi en ligne sera disponible prochainement. Contactez-nous directement pour le moment." });
    },
  });

  return (
    <form noValidate onSubmit={(event) => { event.preventDefault(); void form.handleSubmit(); }} className="space-y-5">
      <fieldset className="mb-8 grid grid-cols-2 rounded-xl bg-slate-100 p-1.5">
        <legend className="sr-only">Type de demande</legend>
        <button type="button" aria-pressed={topic === "location"} onClick={() => setTopic("location")} className={`min-h-11 rounded-lg px-3 text-xs font-semibold transition-colors sm:text-sm ${topic === "location" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>
          Projet de location
        </button>
        <button type="button" aria-pressed={topic === "question"} onClick={() => setTopic("question")} className={`min-h-11 rounded-lg px-3 text-xs font-semibold transition-colors sm:text-sm ${topic === "question" ? "bg-white text-slate-950 shadow-sm" : "text-slate-500 hover:text-slate-900"}`}>
          Question générale
        </button>
      </fieldset>

      <form.Field name="firstName" validators={{ onBlur: ({ value }) => value.trim().length < 2 ? "Saisissez votre prénom (2 caractères minimum)." : undefined }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-first-name" className="mb-2 block text-sm font-medium">Votre prénom</Label><Input id="contact-first-name" autoComplete="given-name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-first-name-error" : undefined} placeholder="Ex. : Amine" className="h-12 rounded-lg border-slate-200 px-4" /><FieldError id="contact-first-name-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="lastName" validators={{ onBlur: ({ value }) => value.trim().length < 2 ? "Saisissez votre nom (2 caractères minimum)." : undefined }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-last-name" className="mb-2 block text-sm font-medium">Votre nom</Label><Input id="contact-last-name" autoComplete="family-name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-last-name-error" : undefined} placeholder="Ex. : El Amrani" className="h-12 rounded-lg border-slate-200 px-4" /><FieldError id="contact-last-name-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="email" validators={{ onBlur: ({ value }) => z.email().safeParse(value).success ? undefined : "Saisissez une adresse e-mail valide." }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Votre adresse e-mail</Label><Input id="contact-email" type="email" autoComplete="email" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-email-error" : undefined} placeholder="vous@exemple.com" className="h-12 rounded-lg border-slate-200 px-4" /><FieldError id="contact-email-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="message" validators={{ onBlur: ({ value }) => value.trim().length < 10 ? "Votre message doit contenir au moins 10 caractères." : undefined }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Comment pouvons-nous vous aider ?</Label><Textarea id="contact-message" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-message-error" : undefined} placeholder={topic === "location" ? "Parlez-nous de votre ville, de vos dates et du véhicule souhaité…" : "Posez-nous votre question…"} className="min-h-36 resize-y rounded-lg border-slate-200 px-4 py-3" /><FieldError id="contact-message-error" message={error} /></div>; }}
      </form.Field>
      <Button type="submit" className="h-12 w-full rounded-lg bg-brand-strong text-sm font-semibold hover:bg-brand">Envoyer ma demande</Button>
      <p className="text-center text-xs leading-5 text-slate-500">La messagerie en ligne est en préparation. Aucune donnée n’est envoyée pour le moment.</p>
    </form>
  );
}
