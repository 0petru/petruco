"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const BUSINESS_TYPES = [
  "Magazin Online (E-commerce)",
  "Software / SaaS / Aplicație Mobilă",
  "Info-produse / Cursuri Online",
  "Servicii High-Ticket",
];

const BUDGETS = [
  "Sub 1.500€ / lună",
  "1.500€ – 5.000€ / lună",
  "5.000€ – 15.000€ / lună",
  "Peste 15.000€ / lună",
];

const labelClass = "mb-1.5 block text-sm font-semibold text-zinc-300";

const inputClass =
  "w-full rounded-lg border border-zinc-700 bg-zinc-800/60 px-4 py-3 text-sm text-white outline-none transition [color-scheme:dark] placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

/**
 * Formularul de calificare din CTA-ul final.
 *
 * Trimite către `/api/audit` (aceeași rută ca restul formularelor din site),
 * mapând câmpurile pe coloanele din foaia „Audituri": tipul de business ajunge
 * în „Afacere / Cabinet", linkul în „Website / Profil actual", iar bugetul în
 * „Observații". `clinicOrName` și `city` sunt cerute de rută, de aceea sunt
 * trimise mereu.
 */
export function CtaForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const businessType = String(data.get("businessType") ?? "");
    const budget = String(data.get("budget") ?? "");
    const website = String(data.get("website") ?? "");

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
          // Câmpuri obligatorii pentru `/api/audit`:
          clinicOrName: businessType,
          city: "Nespecificat",
          // Coloanele din foaia „Audituri":
          currentWebsiteOrProfile: website,
          notes: `Buget lunar estimat: ${budget}`,
          // Câmpurile brute, pentru context complet în webhook:
          businessType,
          budget,
          website,
          source: "meta-ads-funnels-cta",
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error ?? "Cererea nu a putut fi trimisă.");
      }

      form.reset();
      setStatus("sent");
      setMessage("Mulțumim! Te contactăm în maximum 24 de ore.");
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
      id="contact-form"
      onSubmit={handleSubmit}
      className="scroll-mt-28 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-7"
    >
      <p className="text-[11px] font-semibold tracking-[0.16em] text-emerald-400 uppercase">
        Aplică pentru o discuție
      </p>

      <h3 className="mt-2 text-xl font-medium tracking-tight text-white sm:text-2xl">
        Spune-ne cu ce lucrezi și unde vrei să ajungi
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        Completează câmpurile de mai jos. Ne uităm la datele tale înainte de
        apel, ca discuția să fie concretă, nu introductivă.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="cta-fullName" className={labelClass}>
            Nume complet
          </label>
          <input
            id="cta-fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="Numele tău"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cta-email" className={labelClass}>
            Adresă de email (de business, de preferat)
          </label>
          <input
            id="cta-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="nume@firma.ro"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cta-phone" className={labelClass}>
            Număr de telefon / WhatsApp
          </label>
          <input
            id="cta-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07xx xxx xxx"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cta-website" className={labelClass}>
            Link către website-ul afacerii sau aplicația ta
          </label>
          <input
            id="cta-website"
            name="website"
            type="url"
            required
            inputMode="url"
            autoComplete="url"
            placeholder="https://afacereata.ro"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cta-businessType" className={labelClass}>
            Care este tipul tău principal de business?
          </label>
          <select
            id="cta-businessType"
            name="businessType"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Alege o opțiune
            </option>
            {BUSINESS_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="cta-budget" className={labelClass}>
            Care este bugetul tău lunar estimat pentru marketing/ads?
          </label>
          <select
            id="cta-budget"
            name="budget"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>
              Alege un interval
            </option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-900 shadow-[0_20px_45px_-26px_rgba(255,255,255,0.55)] transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending"
          ? "Se trimite..."
          : "Programează o discuție de 15 minute"}
        {status !== "sending" && (
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>

      {message ? (
        <p
          className={`mt-3 text-center text-sm font-medium ${
            status === "error" ? "text-red-400" : "text-emerald-400"
          }`}
        >
          {message}
        </p>
      ) : null}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
        <ShieldCheck className="size-3.5 shrink-0 text-emerald-400" />
        Fără spam. Te contactăm o singură dată, în maximum 24 de ore.
      </p>
    </form>
  );
}
