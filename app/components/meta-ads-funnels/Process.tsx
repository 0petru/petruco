"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Section } from "@/app/components/home/shared";

const PROTOCOL = [
  {
    when: "Ziua 0 · 15 minute",
    title: "Auditul de cont",
    text: "Ne uităm la ce ai rulat, ce a funcționat și unde s-a ars buget. Plecăm cu o listă de priorități, nu cu o prezentare.",
  },
  {
    when: "Ziua 1-3",
    title: "Strategie și creative",
    text: "Definim oferta, unghiurile și structura campaniilor. Producem primele seturi de ad-uri: static, video și UGC.",
  },
  {
    when: "Ziua 4-7",
    title: "Funnel și tracking",
    text: "Construim sau reparăm pagina, formularul și checkout-ul. Curățăm pixelul și evenimentele înainte de lansare.",
  },
  {
    when: "Continuu",
    title: "Testare și scalare",
    text: "Testăm unghiuri noi în fiecare săptămână, tăiem ce nu performează și creștem bugetul pe ce aduce ROAS.",
  },
];

const JOURNEY = [
  {
    step: "01",
    title: "Ad-ul",
    text: "Video, UGC sau static care oprește scroll-ul și promite clar un rezultat.",
  },
  {
    step: "02",
    title: "Oferta",
    text: "Pagina dedicată, construită în jurul unei singure acțiuni, nu a întregii firme.",
  },
  {
    step: "03",
    title: "Conversia",
    text: "Lead calificat prin formular sau comandă finalizată la checkout.",
  },
  {
    step: "04",
    title: "Follow-up",
    text: "Contactare rapidă și reminder automat, ca lead-ul să nu se răcească.",
  },
  {
    step: "05",
    title: "Date înapoi în ads",
    text: "Evenimentele se întorc în Meta, iar algoritmul învață cine chiar cumpără.",
  },
];

const STATS = [
  {
    value: "12x",
    label: "Cel mai bun ROAS obținut într-un cont",
    highlight: true,
  },
  { value: "7 zile", label: "Până la primele ad-uri live", highlight: false },
  {
    value: "4 tipuri",
    label: "De creative testate în paralel",
    highlight: false,
  },
  {
    value: "0",
    label: "Rapoarte pe care să le descifrezi singur",
    highlight: true,
  },
];

export function Process() {
  return (
    <Section id="proces" className="border-zinc-800 bg-zinc-900">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.16em] text-emerald-400 uppercase"
        >
          Protocolul de implementare
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
        >
          De la primul apel la campanii care scalează, în 7 zile
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-4 text-base leading-relaxed text-zinc-400"
        >
          Tu ai o singură responsabilitate: apelul de 15 minute și aprobările.
          Restul calendarului — creative, funnel, tracking, optimizare — e
          problema noastră.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROTOCOL.map((step, i) => (
          <motion.div
            key={step.when}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-2xl border border-zinc-700/70 bg-zinc-800/50 p-6"
          >
            <span className="font-mono text-[11px] font-semibold tracking-wide text-emerald-400 uppercase">
              {step.when}
            </span>
            <h3 className="mt-3 text-base font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 border-t border-white/10 pt-12">
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium tracking-tight text-white sm:text-2xl"
        >
          Funnel-ul și user journey-ul pe care îl construim
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400"
        >
          Fiecare pas are un singur scop: să ducă omul mai aproape de comandă.
          Dacă un pas pierde mai mult decât câștigă, îl rescriem.
        </motion.p>

        <ol className="mt-8 grid gap-3 lg:grid-cols-5">
          {JOURNEY.map((node, i) => (
            <motion.li
              key={node.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="relative rounded-2xl border border-zinc-700/70 bg-zinc-800/40 p-5"
            >
              <span className="font-mono text-[11px] font-semibold tracking-wide text-emerald-400">
                {node.step}
              </span>
              <h4 className="mt-2 text-sm font-semibold text-white">
                {node.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {node.text}
              </p>

              {i < JOURNEY.length - 1 ? (
                <ArrowRight className="absolute top-1/2 -right-3 hidden size-4 -translate-y-1/2 text-zinc-600 lg:block" />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="px-1"
          >
            <p
              className={`text-3xl font-semibold tracking-tight ${
                stat.highlight ? "text-emerald-400" : "text-white"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
