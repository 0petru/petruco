"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const TIME_SLOTS = [
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 18:00",
];

const labelClass = "mb-1.5 block text-sm font-semibold text-zinc-800";

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10";

/**
 * Formular de lead partajat între hero și CTA-ul final.
 * Trimite către `/api/audit`, care validează câmpurile și le scrie în Google
 * Sheets prin webhook.
 */
export function LeadForm({
  idPrefix,
  source,
  eyebrow = "Zero birocrație",
  heading = "Te sunăm noi. Tu doar răspunzi.",
  subheading = "Completează datele și alege intervalul care îți convine. Apelul durează 15 minute.",
  ctaLabel = "Vreau să fiu sunat",
  className = "",
}: {
  idPrefix: string;
  /** Obligatoriu: ajunge în coloana „Sursă" din Google Sheets. */
  source: string;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          email: data.get("email"),
          phone: data.get("phone"),
          clinicOrName: data.get("business"),
          city: "Nespecificat",
          preferredTime: data.get("preferredTime"),
          source,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Cererea nu a putut fi trimisă.");
      }

      form.reset();
      setStatus("sent");
      setMessage("Mulțumim! Te sunăm în intervalul ales.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Nu am putut trimite cererea. Încearcă din nou.",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_24px_60px_-32px_rgba(24,24,27,0.45)] sm:p-7 ${className}`}
    >
      <p className="text-[11px] font-semibold tracking-[0.16em] text-emerald-600 uppercase">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl">
        {heading}
      </h2>

      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{subheading}</p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor={`${idPrefix}-fullName`} className={labelClass}>
            Nume
          </label>
          <input
            id={`${idPrefix}-fullName`}
            name="fullName"
            required
            autoComplete="name"
            placeholder="Numele tău"
            className={inputClass}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${idPrefix}-phone`} className={labelClass}>
              Telefon
            </label>
            <input
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="07xx xxx xxx"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-email`} className={labelClass}>
              Email
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="nume@firma.ro"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-business`} className={labelClass}>
            Afacerea ta
          </label>
          <input
            id={`${idPrefix}-business`}
            name="business"
            required
            placeholder="Numele afacerii sau serviciul pe care îl vinzi"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-preferredTime`} className={labelClass}>
            Când te putem suna?
          </label>
          <select
            id={`${idPrefix}-preferredTime`}
            name="preferredTime"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Alege un interval
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3.5 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Se trimite..." : ctaLabel}
        {status !== "sending" && (
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      {message ? (
        <p
          className={`mt-3 text-center text-sm font-medium ${
            status === "error" ? "text-red-600" : "text-emerald-700"
          }`}
        >
          {message}
        </p>
      ) : null}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
        <ShieldCheck className="size-3.5 shrink-0 text-emerald-600" />
        Fără spam. Te contactăm o singură dată, în intervalul ales.
      </p>
    </form>
  );
}
