"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  FileText,
  GitFork,
  Headphones,
  Link2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const DELIVERABLES = [
  {
    icon: Bot,
    title: "Agenții AI configurați",
    text: "Vocal, chat, WhatsApp și email — antrenați pe serviciile, prețurile și tonul tău, nu pe texte generice.",
  },
  {
    icon: Link2,
    title: "Integrări cu uneltele tale",
    text: "CRM, calendar, WhatsApp Business, email, Google Sheets, Stripe. Nu ești obligat să schimbi ce folosești deja.",
  },
  {
    icon: BarChart3,
    title: "Dashboard și raportare",
    text: "Vezi câte conversații au fost preluate, câte lead-uri au fost calificate și exact unde se pierd celelalte.",
  },
  {
    icon: GitFork,
    title: "Scenarii de escaladare",
    text: "Când un caz iese din tipar, sistemul știe cui și când să îl dea mai departe, cu tot contextul discuției.",
  },
  {
    icon: FileText,
    title: "Documentație și proceduri",
    text: "Scriem pașii, ca oricine din echipă să înțeleagă ce face sistemul și ce rămâne de făcut manual.",
  },
  {
    icon: Headphones,
    title: "Training pentru echipă",
    text: "O sesiune live cu oamenii care vând și răspund, ca tranziția să fie fără frecare și fără resentimente.",
  },
  {
    icon: ShieldCheck,
    title: "Cod și conturi pe numele tău",
    text: "Infrastructura, cheile API și integrările rămân ale tale. Nu depinzi de noi ca să îți accesezi sistemul.",
  },
  {
    icon: TrendingUp,
    title: "Optimizare 30 de zile",
    text: "După lansare urmărim conversațiile reale și rescriem răspunsurile care nu conving. Inclus, fără costuri extra.",
  },
];

const PROTOCOL = [
  {
    when: "Ziua 0 · 15 minute",
    title: "Auditul de automatizare",
    text: "Ne uităm la fluxurile tale: pe unde intră clienții, cine răspunde, ce întrebări se repetă. Ieșim cu o listă prioritizată, nu cu o prezentare.",
  },
  {
    when: "Ziua 1-2",
    title: "Harta sistemului",
    text: "Stabilim ce agent face ce, pe ce canale vorbește și cum se leagă de uneltele pe care le folosești deja. Tu validezi, noi construim.",
  },
  {
    when: "Ziua 3-5",
    title: "Configurare și integrare",
    text: "Construim agenții, îi antrenăm pe datele tale și îi conectăm la sistemele reale. Fiecare scenariu are testele lui înainte să ajungă la client.",
  },
  {
    when: "Ziua 6-7",
    title: "Testare, lansare, predare",
    text: "Testăm cu lead-uri reale, măsurăm timpii de reacție și te învățăm cum să citești rapoartele. Din acest moment curge garanția.",
  },
];

const STATS = [
  {
    value: "18 sec",
    label: "Timp de reacție la un lead nou",
    highlight: false,
  },
  {
    value: "24/7",
    label: "Conversații preluate, inclusiv noaptea",
    highlight: true,
  },
  { value: "0 ore", label: "Muncă manuală de rutină", highlight: false },
  { value: "3,4x", label: "Rată de conversie, în medie", highlight: true },
];

export function Steps() {
  return (
    <>
      <Section id="livrare">
        <SectionIntro
          eyebrow="Ce primești"
          title="Un sistem complet, nu un chatbot lipit pe site"
          description="Nu îți livrăm o demonstrație care merge în video. Îți livrăm un sistem conectat la afacerea ta, cu proceduri scrise și oameni instruiți să lucreze cu el."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERABLES.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
              >
                <span className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

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
            De la primul apel la sistem live, în 7 zile
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-base leading-relaxed text-zinc-400"
          >
            Tu ai o singură responsabilitate: apelul de 15 minute și validările
            intermediare. Restul calendarului e problema noastră.
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

        <div className="mt-14 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="px-1 lg:px-4 lg:text-center"
            >
              <p
                className={`font-mono text-3xl font-semibold tracking-tight sm:text-4xl ${
                  stat.highlight ? "text-emerald-400" : "text-white"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-semibold tracking-wide text-zinc-400 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Programează apelul de 15 minute
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </motion.div>
      </Section>
    </>
  );
}
