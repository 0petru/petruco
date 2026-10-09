"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  Headphones,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
  Smartphone,
  Target,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const DELIVERABLES = [
  {
    icon: Target,
    title: "Definirea MVP-ului",
    text: "Împreună alegem funcția unică ce validează ideea. Ce nu intră în ea rămâne pe lista de „după validare”, nu în buget.",
  },
  {
    icon: LayoutDashboard,
    title: "Design UI/UX aprobat de tine",
    text: "Prototip clickabil pe care îl validezi înainte de prima linie de cod. Fără surprize la finalul săptămânii.",
  },
  {
    icon: Rocket,
    title: "Aplicație web funcțională",
    text: "Construită pe Next.js: se deschide din browser, se încarcă în sub o secundă și poate fi pusă în mâna utilizatorilor reali.",
  },
  {
    icon: Database,
    title: "Bază de date și conturi de utilizator",
    text: "Date reale, autentificare, roluri de bază și stocare sigură, în UE. Fără date de test care nu spun nimic.",
  },
  {
    icon: BarChart3,
    title: "Tracking de validare",
    text: "Evenimentele care contează: cine se înregistrează, cine ajunge la pasul cheie, unde abandonează. Analitica e inclusă.",
  },
  {
    icon: Smartphone,
    title: "Optimizat pentru mobil",
    text: "Oamenii testează pe telefon. MVP-ul tău arată și funcționează corect pe mobil, nu doar pe ecranul tău mare.",
  },
  {
    icon: ShieldCheck,
    title: "Cod și conturi pe numele tău",
    text: "Depozitul de cod, hostingul și datele sunt ale tale de la prima zi. Poți continua cu orice echipă, oricând.",
  },
  {
    icon: Headphones,
    title: "Lansare și 30 de zile suport",
    text: "Publicăm, monitorizăm și răspundem la erori. Primele ajustări pe baza utilizării reale sunt incluse.",
  },
];

const PROTOCOL = [
  {
    when: "Ziua 0 · 15 minute",
    title: "Apelul de definire",
    text: "Ne spui ideea și cui se adresează. Ieși cu ipoteza de validat, lista de funcții prioritizate și un preț fix, chiar dacă nu lucrăm împreună.",
  },
  {
    when: "Ziua 1-2",
    title: "Structură și prototip",
    text: "Definim fluxurile și ecranele esențiale, apoi construim prototipul clickabil. Tu validezi structura înainte să scriem cod de producție.",
  },
  {
    when: "Ziua 3-5",
    title: "Construcție și integrare",
    text: "Implementăm funcția de bază, conturile, baza de date și trackingul. La fiecare pas vezi o versiune funcțională, nu un status raport.",
  },
  {
    when: "Ziua 6-7",
    title: "Testare, lansare, predare",
    text: "Testăm cu utilizatori reali, publicăm și te învățăm să citești datele de validare. Din acest moment curge garanția.",
  },
];

const STATS = [
  { value: "7 zile", label: "Până la prima versiune funcțională" },
  { value: "1 funcție", label: "Construită în jurul ipotezei cheie" },
  { value: "Preț fix", label: "Comunicat înainte de prima linie de cod" },
  { value: "30 zile", label: "Suport și optimizări după lansare" },
];

export function Deliverables() {
  return (
    <>
      <Section id="livrare">
        <SectionIntro
          eyebrow="Ce primești"
          title="Un MVP real, nu o demonstrație care moare în Figma"
          description="Livrăm o aplicație funcțională, publicată, cu date reale și tracking de validare. Exact ce îți trebuie ca să decizi, pe bază de informații, dacă produsul merită construit mai departe."
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
            Protocolul de 7 zile
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            De la primul apel la MVP live, în 7 zile
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-base leading-relaxed text-zinc-400"
          >
            Nu îți cerem un caiet de sarcini de 40 de pagini. Îți cerem 15
            minute și două validări pe parcurs. Restul e treaba noastră.
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
            >
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 max-w-[14rem] text-xs leading-relaxed text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
