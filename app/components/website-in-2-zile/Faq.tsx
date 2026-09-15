"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Plus, ShieldCheck, X } from "lucide-react";

import { Section } from "@/app/components/home/shared";
import { siteConfig } from "@/config/site";
import { LeadForm } from "./LeadForm";
import { Brand } from "@/app/components/Brand";

const FAQ_ITEMS = [
  {
    question: "Chiar nu trebuie să scriu niciun text?",
    answer:
      "Exact. În apelul de 15 minute extragem tot ce e nevoie: ce servicii vinzi, la ce preț, ce te diferențiază și cum vrei să vorbești cu clientul. Restul textelor le redactăm noi, pe baza discuției.",
  },
  {
    question: "Cum funcționează, concret, garanția de retur?",
    answer:
      "Cronometrul pornește din momentul în care se încheie apelul inițial. Dacă după 2 zile lucrătoare site-ul nu este public și complet funcțional, primești rambursarea integrală, fără să justifici nimic.",
  },
  {
    question: "Ce se întâmplă dacă vreau modificări după lansare?",
    answer:
      "Ai inclusă o sesiune de ajustări finale pentru texte, culori și imagini, ca rezultatul să fie exact cum ți-ai imaginat. După aceea, mentenanța lunară acoperă modificările de conținut, fără costuri suplimentare.",
  },
  {
    question: "Nu am logo, poze sau materiale. Este o problemă?",
    answer:
      "Nu. Textele le scriem noi, iar pentru imagini folosim resurse profesionale licențiate potrivite domeniului tău. Dacă nu ai un logo, îți propunem o variantă simplă și curată, pe care o poți folosi și în restul comunicării.",
  },
  {
    question: "Cât costă și cum se stabilește prețul?",
    answer:
      "Prețul fix se stabilește în apel, în funcție de numărul de pagini și de integrările de care ai nevoie. Nu există costuri pe parcurs și nu plătești nimic până nu ești de acord cu suma.",
  },
  {
    question: "Site-ul și domeniul rămân ale mele?",
    answer:
      "Da. Domeniul, codul, conturile de plăți și de găzduire sunt pe numele tău. La predare primești acces complet, ca să nu depinzi niciodată de noi pentru a-ți accesa propria afacere.",
  },
  {
    question: "Ce se întâmplă dacă nu reușesc să ajung la apel?",
    answer:
      "Reprogramăm o singură dată, în alt interval ales de tine. Cele 2 zile de execuție încep din momentul apelului, nu din momentul în care trimiți formularul.",
  },
];

const CTA_POINTS = [
  "Apel de 15 minute, gratuit și fără obligații",
  "Preț fix comunicat înainte să începem",
  "2 zile lucrătoare sau banii înapoi",
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Section id="intrebari">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Ce ne întreabă lumea înainte să spună „da”
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Dacă nu găsești răspunsul aici, întreabă-ne direct în apel. Nu
              avem răspunsuri pregătite, avem răspunsuri concrete.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <ShieldCheck className="size-3.5" /> Garanție 2 zile sau gratuit
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <Clock className="size-3.5" /> Livrare în 2 zile lucrătoare
              </span>
            </div>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-zinc-900">
                      {item.question}
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                      {isOpen ? (
                        <X className="size-3.5" />
                      ) : (
                        <Plus className="size-3.5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 pb-5 text-sm leading-relaxed text-zinc-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="contact" className="bg-zinc-50/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.14)_0%,transparent_70%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200">
                Ultimul pas
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Oprește pierderea clienților către concurență
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
                Lasă-ne datele de contact și te sunăm în intervalul ales. În 15
                minute știi exact ce primești, cât costă și când e live.
              </p>

              <ul className="mt-7 space-y-3">
                {CTA_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                  >
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-zinc-500">
                Sau scrie-ne direct pe{" "}
                <a
                  href={siteConfig.links.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                >
                  Telegram
                </a>
                .
              </p>
            </div>

            <LeadForm
              idPrefix="final"
              source="website-in-2-zile-final"
              eyebrow="Începem azi"
              heading="Vreau site-ul live în 2 zile"
              subheading="Completează datele și alege intervalul. Te sunăm noi, fără robot automat."
              ctaLabel="Trimite și sună-mă"
            />
          </div>
        </motion.div>
      </Section>

      <footer className="bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <Brand />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <Link href="/" className="transition-colors hover:text-zinc-900">
              Toate serviciile
            </Link>
            <Link
              href="/psychology-system"
              className="transition-colors hover:text-zinc-900"
            >
              Pentru psihologi
            </Link>
            <a
              href="#intrebari"
              className="transition-colors hover:text-zinc-900"
            >
              Întrebări
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Petruco Digital
          </p>
        </div>
      </footer>
    </>
  );
}
