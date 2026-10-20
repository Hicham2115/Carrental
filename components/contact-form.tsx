"use client";

import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Saisissez votre nom (2 caractères minimum)."),
  email: z.email("Saisissez une adresse e-mail valide."),
  message: z.string().trim().min(10, "Votre message doit contenir au moins 10 caractères."),
});

function FieldError({ id, message }: { id: string; message?: unknown }) {
  if (!message) return null;
  return <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-destructive">{String(message)}</p>;
}

export function ContactForm() {
  const form = useForm({
    defaultValues: { name: "", email: "", message: "" },
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
    <form noValidate onSubmit={(event) => { event.preventDefault(); void form.handleSubmit(); }} className="space-y-4">
      <form.Field name="name" validators={{ onBlur: ({ value }) => value.trim().length < 2 ? "Saisissez votre nom (2 caractères minimum)." : undefined }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Votre nom</Label><Input id="contact-name" autoComplete="name" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-name-error" : undefined} placeholder="Ex. : Amine El Amrani" className="h-12 rounded-xl border-slate-200 px-4" /><FieldError id="contact-name-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="email" validators={{ onBlur: ({ value }) => z.email().safeParse(value).success ? undefined : "Saisissez une adresse e-mail valide." }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Votre adresse e-mail</Label><Input id="contact-email" type="email" autoComplete="email" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-email-error" : undefined} placeholder="vous@exemple.com" className="h-12 rounded-xl border-slate-200 px-4" /><FieldError id="contact-email-error" message={error} /></div>; }}
      </form.Field>
      <form.Field name="message" validators={{ onBlur: ({ value }) => value.trim().length < 10 ? "Votre message doit contenir au moins 10 caractères." : undefined }}>
        {(field) => { const error = field.state.meta.errors[0]; return <div><Label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Comment pouvons-nous vous aider ?</Label><Textarea id="contact-message" value={field.state.value} onBlur={field.handleBlur} onChange={(event) => field.handleChange(event.target.value)} aria-invalid={Boolean(error)} aria-describedby={error ? "contact-message-error" : undefined} placeholder="Parlez-nous de votre trajet ou de votre question…" className="min-h-32 resize-y rounded-xl border-slate-200 px-4 py-3" /><FieldError id="contact-message-error" message={error} /></div>; }}
      </form.Field>
      <Button type="submit" className="h-12 w-full rounded-xl text-sm font-semibold">Envoyer ma demande</Button>
      <p className="text-center text-xs leading-5 text-slate-500">La messagerie en ligne est en préparation. Aucune donnée n’est envoyée pour le moment.</p>
    </form>
  );
}
