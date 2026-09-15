"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, TrendingUp, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const SCENARIOS = [
  {
    tone: "bad" as const,
    icon: XCircle,
    title: "Azi, cu unelte închiriate",
    points: [
      "Patru abonamente lunare care nu comunică între ele. Ca să faci o situație, exporți CSV și o lipești manual în Excel.",
      "Procesul real al firmei stă în capul a două persoane și în șapte foi de calcul pe care le știe doar ele.",
      "Când volumul crește, singura soluție e să angajezi oameni ca să țină pasul cu munca repetitivă.",
    ],
    outcome:
      "Crești volumul, dar crește și costul. Marja scade, iar tu muncești mai mult ca să stai pe loc.",
  },
  {
    tone: "good" as const,
    icon: CheckCircle2,
    title: "Cu o aplicație construită pentru tine",
    points: [
      "Un singur loc unde intră tot: cereri, oferte, programări, facturi, rapoarte și istoricul fiecărui client.",
      "Regulile firmei tale sunt scrise în cod. Ce se făcea manual se întâmplă singur, în ordinea corectă.",
      "Volumul crește, echipa rămâne aceeași. Aplicația preia repetiția, oamenii rămân pe decizii.",
    ],
    outcome:
      "Crești volumul fără să crești proporțional costul. Și nu mai depinzi de cine știe Excelul cel mai bine.",
  },
];

/** Separator de mii determinist — fără Intl, ca să nu difere între server și client. */
function formatLei(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} lei`;
}

function SubscriptionCalculator() {
  const [tools, setTools] = useState(4);
  const [pricePerTool, setPricePerTool] = useState(250);

  const monthly = tools * pricePerTool;
  const yearly = monthly * 12;
  const threeYears = monthly * 36;

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h3 className="text-base font-semibold text-zinc-900">
          Fă calculul pe abonamentele tale
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Mută cele două valori. Sunt bani plătiți lunar pentru unelte pe care
          le închiriezi la nesfârșit — și care nu vorbesc între ele.
        </p>

        <div className="mt-7 space-y-7">
          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Abonamente active
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {tools}
              </span>
            </span>
            <input
              type="range"
              min={1}
              max={15}
              value={tools}
              onChange={(event) => setTools(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Cost mediu pe abonament / lună
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {formatLei(pricePerTool)}
              </span>
            </span>
            <input
              type="range"
              min={50}
              max={1500}
              step={10}
              value={pricePerTool}
              onChange={(event) => setPricePerTool(Number(event.target.value))}
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
            Ce plătești ca să închiriezi
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
          În 3 ani dai{" "}
          <strong className="font-semibold text-white">
            {formatLei(threeYears)}
          </strong>{" "}
          pe licențe care nu rămân niciodată ale tale. O aplicație proprie le
          înlocuiește, se plătește o singură dată și rămâne în contul tău.
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
        title="Nu ești în urmă cu tehnologia. Ești în urmă cu un proces care încă stă pe hârtie"
        description="Majoritatea firmelor care ne caută nu au nevoie de „digitalizare”. Au nevoie ca munca repetitivă să se facă singură și ca informația să fie într-un singur loc, nu în capul a două persoane."
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            <CreditCard className="size-3.5" />
            Costul real
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
            Abonamentele par ieftine lunar. Adunate pe 3 ani, nu mai par.
          </h2>
        </div>
      </motion.div>

      <SubscriptionCalculator />
    </Section>
  );
}
