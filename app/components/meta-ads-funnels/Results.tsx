"use client";

import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Target, TrendingUp } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const RESULTS = [
  {
    icon: Target,
    title: "Cost per rezultat în scădere",
    text: "Primele săptămâni sunt de testare. După ce strângem date, tăiem ad-urile slabe și costul per lead sau per comandă scade constant.",
  },
  {
    icon: LineChart,
    title: "Buget crescut doar când merge",
    text: "Mărim cheltuiala în pași controlați, doar cât timp ROAS-ul o susține. Fără să ardem contul într-o singură zi bună.",
  },
  {
    icon: ShieldCheck,
    title: "Contul rămâne al tău",
    text: "Acces complet la cont de ads, pixel, creative și structura campaniilor. Nu depinzi de noi ca să îți vezi datele.",
  },
];

export function Results() {
  return (
    <Section id="rezultate" className="bg-zinc-50/50">
      <SectionIntro
        eyebrow="Rezultate"
        title="ROAS e singurul indicator care contează la finalul lunii"
        description="Impresiile și reach-ul arată bine în rapoarte, dar nu plătesc facturi. Urmărim cheltuiala, venitul generat și costul per rezultat — și optimizăm strict pe ele."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.16)_0%,transparent_70%)]" />

          <div className="relative">
            <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-emerald-400 uppercase">
              <TrendingUp className="size-3.5" />
              Record
            </p>

            <p className="mt-6 text-6xl font-semibold tracking-tight text-white">
              12x
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Cel mai bun ROAS obținut într-un cont gestionat de noi — peste 12
              lei înapoi pentru fiecare leu investit în ads.
            </p>

            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-zinc-400">
              Rezultatele depind de ofertă, marjă și piață. Îți spunem din prima
              dacă cifrele pe care le vrei sunt realiste pentru nișa ta.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {RESULTS.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.08 + i * 0.08 }}
                className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
