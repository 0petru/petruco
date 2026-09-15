"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, TrendingUp, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const SCENARIOS = [
  {
    tone: "bad" as const,
    icon: XCircle,
    title: "Azi, cu totul pe mână",
    points: [
      "Un lead nou intră la 21:40 pe WhatsApp sau pe formular. Nimeni nu răspunde până dimineață.",
      "A doua zi la 11:00 suni — clientul a semnat deja cu cineva care a răspuns primul.",
      "Echipa pierde ore întregi pe aceleași întrebări: prețuri, disponibilitate, program.",
    ],
    outcome:
      "Vânzările depind de cine e la birou în momentul potrivit. Adică de noroc.",
  },
  {
    tone: "good" as const,
    icon: CheckCircle2,
    title: "Cu sistemul automatizat",
    points: [
      "Lead-ul primește răspuns în 18 secunde, personalizat, pe canalul pe care a scris.",
      "Agentul AI îl califică, răspunde la obiecții și îl programează direct în calendar.",
      "Tu primești doar notificarea: întâlnire confirmată, cu tot contextul discuției.",
    ],
    outcome:
      "Vânzările depind de sistem, nu de cine se uită la telefon la ora 22:00.",
  },
];

/** Separator de mii determinist — fără Intl, ca să nu difere între server și client. */
function formatLei(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} lei`;
}

function ManualWorkCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(80);

  const monthly = hoursPerWeek * hourlyCost * 4;
  const yearly = monthly * 12;
  const hoursPerYear = hoursPerWeek * 52;

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h3 className="text-base font-semibold text-zinc-900">
          Fă calculul pentru echipa ta
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Mută cele două valori. Sunt ore plătite pentru muncă repetitivă, pe
          care un sistem automat le face gratuit și fără greșeli.
        </p>

        <div className="mt-7 space-y-7">
          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Ore pierdute pe săptămână
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {hoursPerWeek} h
              </span>
            </span>
            <input
              type="range"
              min={5}
              max={60}
              value={hoursPerWeek}
              onChange={(event) => setHoursPerWeek(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Cost mediu pe oră
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {formatLei(hourlyCost)}
              </span>
            </span>
            <input
              type="range"
              min={30}
              max={400}
              step={10}
              value={hourlyCost}
              onChange={(event) => setHourlyCost(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(16,185,129,0.16)_0%,transparent_70%)]" />

        <div className="relative">
          <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-emerald-400 uppercase">
            <TrendingUp className="size-3.5" />
            Ce plătești ca să nu faci nimic
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Cost lunar
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                {formatLei(monthly)}
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Cost anual
              </p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-emerald-400">
                {formatLei(yearly)}
              </p>
            </div>
          </div>
        </div>

        <p className="relative mt-8 text-sm leading-relaxed text-zinc-300">
          Adică{" "}
          <strong className="font-semibold text-white">
            {hoursPerYear} de ore pe an
          </strong>{" "}
          în care nimeni nu vinde, nu construiește și nu se ocupă de clienți.
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
        title="Nu pierzi clienți pentru că ești scump. Îi pierzi pentru că răspui târziu"
        description="Aproape jumătate dintre lead-uri aleg firma care le răspunde prima, nu firma care e mai bună. Iar dacă răspunsul vine peste noapte, conversația s-a terminat deja."
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

      <ManualWorkCalculator />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="mt-6 flex items-center gap-2 text-sm text-zinc-500"
      >
        <Clock className="size-4 shrink-0 text-zinc-400" />
        Nu trebuie să automatizezi tot. Trebuie să automatizezi primul lucru
        care te costă bani.
      </motion.p>
    </Section>
  );
}
