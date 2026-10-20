"use client";

import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { CalendarDays, ChevronDown, MapPin, Search } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = ["Casablanca", "Marrakech", "Rabat", "Tanger", "Agadir"];

const bookingSchema = z
  .object({
    location: z.enum(locations),
    pickupDate: z.string().min(1, "Choisissez une date de départ."),
    returnDate: z.string().min(1, "Choisissez une date de retour."),
  })
  .refine((value) => value.returnDate > value.pickupDate, {
    path: ["returnDate"],
    message: "La date de retour doit suivre la date de départ.",
  });

function BookingFieldError({ id, error }: { id: string; error?: unknown }) {
  if (!error) return null;

  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-destructive" role="alert">
      {String(error)}
    </p>
  );
}

export function BookingForm() {
  const [locationOpen, setLocationOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      location: "Casablanca" as (typeof locations)[number],
      pickupDate: "2026-10-24",
      returnDate: "2026-10-28",
    },
    onSubmit: async ({ value }) => {
      const result = bookingSchema.safeParse(value);
      if (!result.success) {
        toast.error(result.error.issues[0]?.message ?? "Vérifiez vos dates.");
        return;
      }

      toast.info("La réservation en ligne arrive bientôt.", {
        description: "Contactez-nous pour organiser votre location.",
      });
    },
  });

  return (
    <form
      id="reservation"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_36px_-26px_rgba(15,43,78,0.42)] sm:grid-cols-2 sm:p-5 lg:grid-cols-[1.15fr_1fr_1fr_auto] lg:items-center lg:gap-0 lg:rounded-xl lg:px-6 lg:py-4 xl:px-8"
    >
      <form.Field name="location">
        {(field) => (
          <div className="min-w-0 lg:pr-4">
            <Label id="pickup-location-label" className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
              Lieu de prise en charge
            </Label>
            <Popover open={locationOpen} onOpenChange={setLocationOpen}>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  aria-haspopup="listbox"
                  aria-expanded={locationOpen}
                  aria-labelledby="pickup-location-label"
                  onBlur={field.handleBlur}
                  className="h-11 w-full justify-between rounded-lg border-transparent bg-white px-2 text-left text-sm font-semibold text-slate-800 hover:bg-surface-blue hover:text-brand"
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <MapPin aria-hidden="true" className="size-4 shrink-0 text-brand" />
                    <span className="truncate">{field.state.value}</span>
                  </span>
                  <ChevronDown aria-hidden="true" className="size-4 text-slate-400" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                className="w-[var(--radix-popover-trigger-width)] rounded-xl p-1.5"
                role="listbox"
                aria-label="Choisir une ville"
              >
                {locations.map((place) => (
                  <button
                    key={place}
                    type="button"
                    role="option"
                    aria-selected={field.state.value === place}
                    onClick={() => {
                      field.handleChange(place);
                      setLocationOpen(false);
                    }}
                    className="flex min-h-11 w-full cursor-pointer items-center justify-between rounded-lg px-3 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-surface-blue hover:text-brand focus-visible:outline-2 focus-visible:outline-brand aria-selected:bg-surface-blue aria-selected:text-brand"
                  >
                    {place}
                    {field.state.value === place ? (
                      <span aria-hidden="true" className="text-brand">✓</span>
                    ) : null}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
        )}
      </form.Field>

      <form.Field
        name="pickupDate"
        validators={{
          onBlur: ({ value }) =>
            value ? undefined : "Choisissez une date de départ.",
        }}
      >
        {(field) => {
          const error = field.state.meta.errors[0];
          return (
            <div className="min-w-0">
              <Label htmlFor="pickup-date" className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                Date de départ
              </Label>
              <div className="relative lg:border-l lg:border-slate-200 lg:pl-4">
                <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand" />
                <Input
                  id="pickup-date"
                  type="date"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "pickup-date-error" : undefined}
                  className="h-11 rounded-lg border-transparent bg-white pl-9 pr-2 text-sm font-semibold text-slate-800 focus-visible:border-brand focus-visible:ring-brand/20"
                />
              </div>
              {error ? <BookingFieldError id="pickup-date-error" error={error} /> : null}
            </div>
          );
        }}
      </form.Field>

      <form.Field
        name="returnDate"
        validators={{
          onBlur: ({ value }) =>
            value ? undefined : "Choisissez une date de retour.",
        }}
      >
        {(field) => {
          const error = field.state.meta.errors[0];
          return (
            <div className="min-w-0">
              <Label htmlFor="return-date" className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                Date de retour
              </Label>
              <div className="relative lg:border-l lg:border-slate-200 lg:pl-4">
                <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-brand" />
                <Input
                  id="return-date"
                  type="date"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "return-date-error" : undefined}
                  className="h-11 rounded-lg border-transparent bg-white pl-9 pr-2 text-sm font-semibold text-slate-800 focus-visible:border-brand focus-visible:ring-brand/20"
                />
              </div>
              {error ? <BookingFieldError id="return-date-error" error={error} /> : null}
            </div>
          );
        }}
      </form.Field>

      <Button type="submit" className="h-12 rounded-sm px-5 text-sm font-semibold shadow-none sm:col-span-2 lg:col-span-1 lg:ml-5">
        <Search aria-hidden="true" className="size-4" />
        Rechercher
      </Button>
    </form>
  );
}
