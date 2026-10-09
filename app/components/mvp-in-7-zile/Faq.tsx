"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Plus, Rocket, ShieldCheck, X } from "lucide-react";

import { Section } from "@/app/components/home/shared";
import { LeadForm } from "@/app/components/website-in-2-zile/LeadForm";
import { Brand } from "@/app/components/Brand";
import { siteConfig } from "@/config/site";

const FAQ_ITEMS = [
  {
    question: "Ce intră exact într-un MVP în 7 zile?",
    answer:
      "O singură funcție principală care validează ipoteza ta, cu partea de cont utilizator, bază de date, interfață responsive și tracking de validare. Nu construim tot ce se poate construi, ci ce îți dovedește dacă ideea merită construită mai departe.",
  },
  {
    question: "Chiar se poate livra ceva utilizabil în 7 zile?",
    answer:
      "Da, pentru că pornim de la o singură funcție și nu de la o listă de 40. Prototipul e validat în prima zi, construcția merge pe module cu versiuni funcționale la fiecare pas, iar în ultimele două zile testăm și lansăm. Ce nu intră în MVP rămâne pe lista de după validare.",
  },
  {
    question: "Nu știu exact ce funcție să aleg. Este o problemă?",
    answer:
      "Nu. De asta există apelul de definire. Îți punem întrebările care separă „ar fi frumos să avem” de „fără asta nu putem valida ideea” și ieși cu o recomandare clară, chiar dacă nu lucrăm împreună.",
  },
  {
    question: "Cât costă?",
    answer:
      "Prețul fix se stabilește după apelul de 15 minute, în funcție de complexitatea funcției de bază și de integrările necesare. Nu plătești pe ore și nu apar costuri pe parcurs: suma comunicată după definire este suma finală.",
  },
  {
    question: "Ce se întâmplă după cele 7 zile?",
    answer:
      "Ai un MVP funcțional și datele primilor utilizatori. Rămânem disponibili 30 de zile pentru erori și primele ajustări pe baza utilizării reale. Dacă datele arată că produsul merită, continuăm cu versiunea completă; dacă nu, ai răspunsul la o fracțiune din costul unei lansări mari.",
  },
  {
    question: "Cine deține codul la final?",
    answer:
      "Tu. Depozitul de cod, conturile de hosting, domeniile și datele sunt pe numele tău de la prima zi. La predare primești acces complet, documentație tehnică și o sesiune în care îți explicăm cum e structurat proiectul.",
  },
  {
    question: "Poate crește MVP-ul într-un produs complet?",
    answer:
      "Da. Construim MVP-ul pe aceleași unelte pe care le vom folosi la versiunea completă, cu structură curată și cod documentat. Ce validezi în 7 zile devine fundația, nu un prototip aruncat.",
  },
];

const CTA_POINTS = [
  "Apel de 15 minute, gratuit și fără obligații",
  "Ieși cu ipoteza de validat și funcția prioritară, chiar dacă nu lucrăm împreună",
  "7 zile lucrătoare sau avansul înapoi",
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
                <ShieldCheck className="size-3.5" /> 7 zile sau avansul înapoi
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <Rocket className="size-3.5" /> MVP livrat în 7 zile lucrătoare
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
                Află în 15 minute ce intră în MVP-ul tău
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
                Lasă-ne datele și te sunăm în intervalul ales. Analizăm ideea
                împreună, o transformăm în ipoteza care merită testată și îți
                spunem exact ce se construiește în 7 zile, cât costă și când e
                live.
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
              idPrefix="mvp-final"
              source="mvp-in-7-zile-final"
              eyebrow="Începem azi"
              heading="Vreau planul de 7 zile"
              subheading="Completează datele și alege intervalul. Te sună un om, nu un robot."
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
              href="/dezvoltare-aplicatii"
              className="transition-colors hover:text-zinc-900"
            >
              Dezvoltare aplicații
            </Link>
            <Link
              href="/website-in-2-zile"
              className="transition-colors hover:text-zinc-900"
            >
              Website în 2 zile
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
