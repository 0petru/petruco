"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, TrendingDown, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const SCENARIOS = [
  {
    tone: "bad" as const,
    icon: XCircle,
    title: "Azi, cu ideea în cap",
    points: [
      "Ideea stă în Notion și în conversații. Toată lumea o consideră bună, dar nimeni nu a plătit pentru ea.",
      "Ca să afli dacă merge, trebuie să angajezi developeri, să scrii zeci de pagini de specificații și să aștepți luni.",
      "Până la lansare, ai investit timp și bani într-o versiune completă pe care poate piața nu o vrea.",
    ],
    outcome:
      "Fiecare lună de dezvoltare înainte de primul client e o lună în care arzi bani pe presupuneri.",
  },
  {
    tone: "good" as const,
    icon: CheckCircle2,
    title: "Cu un MVP în 7 zile",
    points: [
      "Pornim de la ipoteza care contează: ce trebuie să fie adevărat ca produsul să merite construit mai departe.",
      "În 7 zile ai o versiune funcțională pe care o pun și oamenii reali în mână, nu doar tu în demo.",
      "Vezi cu date, nu cu păreri: ce folosesc, unde se blochează, ce ar plăti pentru următoarea versiune.",
    ],
    outcome:
      "Decizi rapid ce construiești în continuare — cu feedback de la utilizatori, nu cu estimări de ședință.",
  },
];

/** Separator de mii determinist — fără Intl, ca să nu difere între server și client. */
function formatLei(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} lei`;
}

function DelayCalculator() {
  const [months, setMonths] = useState(4);
  const [monthlyCost, setMonthlyCost] = useState(15000);

  const wasted = months * monthlyCost;

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h3 className="text-base font-semibold text-zinc-900">
          Fă calculul pentru ideea ta
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Mută cele două valori. Sunt banii pe care îi arzi înainte să afli
          dacă cineva chiar vrea produsul.
        </p>

        <div className="mt-7 space-y-7">
          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Luni de dezvoltare până la prima lansare
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {months} luni
              </span>
            </span>
            <input
              type="range"
              min={1}
              max={12}
              value={months}
              onChange={(event) => setMonths(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Cost lunar de dezvoltare și oportunitate
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {formatLei(monthlyCost)}
              </span>
            </span>
            <input
              type="range"
              min={3000}
              max={50000}
              step={1000}
              value={monthlyCost}
              onChange={(event) => setMonthlyCost(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(16,185,129,0.16)_0%,transparent_70%)]" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-emerald-400 uppercase">
            <TrendingDown className="size-3.5" />
            Ce plătești ca să amâni validarea
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Investiție fără feedback de piață
              </p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-emerald-400">
                {formatLei(wasted)}
              </p>
            </div>
          </div>
        </div>

        <p className="relative mt-8 text-sm leading-relaxed text-zinc-300">
          Un MVP în 7 zile îți dă aceeași informație cheie —{" "}
          <strong className="font-semibold text-white">
            dacă ideea merită continuată
          </strong>{" "}
          — la o fracțiune din costul și timpul unei lansări complete.
        </p>
      </div>
    </div>
  );
}

export function Pain() {
  return (
    <Section id="problema">
      <SectionIntro
        eyebrow="Problema"
        title="Nu ai nevoie de produsul complet. Ai nevoie să afli dacă cineva îl vrea"
        description="Cea mai scumpă greșeală într-un produs nou nu e codul scris prost, ci codul scris mult pentru o presupunere care nu a fost testată niciodată pe oameni reali."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {SCENARIOS.map((scenario, i) => {
          const Icon = scenario.icon;
          const isGood = scenario.tone === "good";

          return (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl border p-6 sm:p-7 ${
                isGood
                  ? "border-emerald-200 bg-white"
                  : "border-zinc-200 bg-zinc-50/60"
              }`}
            >
              <h3
                className={`flex items-center gap-2 text-base font-semibold ${
                  isGood ? "text-emerald-800" : "text-zinc-700"
                }`}
              >
                <Icon
                  className={`size-5 ${isGood ? "text-emerald-600" : "text-zinc-400"}`}
                />
                {scenario.title}
              </h3>

              <ul className="mt-5 flex-1 space-y-3.5">
                {scenario.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700"
                  >
                    <span
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                        isGood ? "bg-emerald-600" : "bg-zinc-400"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <p
                className={`mt-6 border-t pt-4 text-sm font-medium ${
                  isGood
                    ? "border-emerald-100 text-emerald-800"
                    : "border-zinc-200 text-zinc-600"
                }`}
              >
                {scenario.outcome}
              </p>
            </motion.div>
          );
        })}
      </div>

      <DelayCalculator />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex items-center gap-2 text-sm text-zinc-500"
      >
        <Clock className="size-4 shrink-0 text-zinc-400" />
        Un MVP nu e un produs mic. E cel mai ieftin experiment care îți spune
        dacă merită să construiești produsul mare.
      </motion.p>
    </Section>
  );
}
