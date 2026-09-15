"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const SCENARIOS = [
  {
    tone: "bad" as const,
    icon: XCircle,
    title: "Fără site, sau cu un site lăsat de izbeliște",
    points: [
      "Găsește o pagină de social media veche sau un site care se încarcă greu pe telefon.",
      "Nu vede prețuri, nu vede servicii clare, nu poate plăti și nu poate rezerva nimic.",
      "Nu are niciun motiv să creadă că ești serios.",
    ],
    outcome:
      "Închide tab-ul și sună la următoarea firmă din listă. Adică la concurență.",
  },
  {
    tone: "good" as const,
    icon: CheckCircle2,
    title: "Cu website-ul tău de prezentare",
    points: [
      "Intră pe un site rapid, care arată impecabil pe telefon.",
      "Citește exact ce vinzi, pentru cine și cât costă.",
      "Plătește avansul sau își rezervă o programare în mai puțin de 60 de secunde.",
    ],
    outcome: "Client convertit direct, fără ca tu să ridici un deget.",
  },
];

/** Separator de mii determinist — fără Intl, ca să nu difere între server și client. */
function formatLei(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} lei`;
}

function LossCalculator() {
  const [clients, setClients] = useState(10);
  const [value, setValue] = useState(300);

  const monthly = clients * value;
  const yearly = monthly * 12;

  return (
    <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h3 className="text-base font-semibold text-zinc-900">
          Fă calculul pentru afacerea ta
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600">
          Mută cele două valori. Sunt clienți care ajung la altcineva pentru
          simplul motiv că nu te-au găsit la timp.
        </p>

        <div className="mt-7 space-y-7">
          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Clienți pierduți pe lună
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {clients}
              </span>
            </span>
            <input
              type="range"
              min={1}
              max={50}
              value={clients}
              onChange={(event) => setClients(Number(event.target.value))}
              className="mt-3 w-full accent-zinc-900"
            />
          </label>

          <label className="block">
            <span className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-zinc-700">
                Valoarea medie a unui client
              </span>
              <span className="font-mono text-sm font-semibold text-zinc-900">
                {formatLei(value)}
              </span>
            </span>
            <input
              type="range"
              min={100}
              max={5000}
              step={100}
              value={value}
              onChange={(event) => setValue(Number(event.target.value))}
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
            Ce lași pe masă
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Pierdere lunară
              </p>
              <p className="mt-1 text-3xl font-semibold tracking-tight text-white">
                {formatLei(monthly)}
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <p className="text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Pierdere anuală
              </p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-emerald-400">
                {formatLei(yearly)}
              </p>
            </div>
          </div>
        </div>

        <p className="relative mt-8 text-sm leading-relaxed text-zinc-300">
          Costul website-ului se recuperează din primii clienți recâștigați. Un
          singur client în plus pe lună plătește diferența, iar restul e profit
          curat.
        </p>
      </div>
    </div>
  );
}

export function Pain() {
  return (
    <>
      <Section className="bg-zinc-50/50">
        <SectionIntro
          align="center"
          eyebrow="Scenariul de care profită concurența"
          title="Cineva a auzit de tine și te caută pe Google chiar acum"
          description="Diferenta dintre a fi găsit și a fi ignorat nu ține de noroc. Ține de ce găsește omul în primele 10 secunde."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {SCENARIOS.map((scenario, i) => {
            const Icon = scenario.icon;
            const bad = scenario.tone === "bad";

            return (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`flex flex-col rounded-2xl border bg-white p-6 sm:p-7 ${
                  bad ? "border-red-200" : "border-emerald-200"
                }`}
              >
                <span
                  className={`flex size-10 items-center justify-center rounded-xl border ${
                    bad
                      ? "border-red-100 bg-red-50 text-red-600"
                      : "border-emerald-100 bg-emerald-50 text-emerald-700"
                  }`}
                >
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {scenario.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {scenario.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-600"
                    >
                      <span
                        className={`mt-2 size-1.5 shrink-0 rounded-full ${
                          bad ? "bg-red-400" : "bg-emerald-500"
                        }`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <p
                  className={`mt-6 rounded-xl px-4 py-3 text-sm font-semibold ${
                    bad
                      ? "bg-red-50 text-red-700"
                      : "bg-emerald-50 text-emerald-800"
                  }`}
                >
                  {scenario.outcome}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Costul inacțiunii"
          title="Cât te costă, de fapt, fiecare lună fără un site care vinde?"
          description="Cel mai scump lucru nu este website-ul. Este timpul în care clienții tăi caută, nu te găsesc, și cumpără de la altcineva."
        />

        <LossCalculator />
      </Section>
    </>
  );
}
