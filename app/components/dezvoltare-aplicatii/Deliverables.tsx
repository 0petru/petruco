"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  Headphones,
  LayoutDashboard,
  Link2,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const DELIVERABLES = [
  {
    icon: LayoutDashboard,
    title: "Arhitectură și fluxuri",
    text: "Harta proceselor, a rolurilor și a datelor. Aici se decide dacă aplicația rezolvă problema sau doar arată bine în demo.",
  },
  {
    icon: Sparkles,
    title: "Design UI/UX aprobat de tine",
    text: "Prototip clickabil pe care îl vezi și îl validezi înainte de prima linie de cod. Fără surprize la final.",
  },
  {
    icon: Globe,
    title: "Aplicație web rapidă",
    text: "Construită pe Next.js: funcționează direct din browser, fără instalare, și se încarcă în sub o secundă.",
  },
  {
    icon: Smartphone,
    title: "Aplicație mobilă iOS & Android",
    text: "O singură bază de cod, publicată în App Store și Google Play, cu notificări push și funcționare offline.",
  },
  {
    icon: Link2,
    title: "Integrări cu ce folosești deja",
    text: "Plăți, facturare, CRM, email, SMS, Google Sheets, ERP-ul tău sau orice API intern. Nu ești obligat să schimbi unelte.",
  },
  {
    icon: ShieldCheck,
    title: "Conturi, roluri și securitate",
    text: "Autentificare, permisiuni pe rol, jurnal de activitate, backup-uri automate și date criptate în UE.",
  },
  {
    icon: BarChart3,
    title: "Dashboard și rapoarte",
    text: "Numerele care contează pentru decizii: utilizare, conversie, costuri pe proces. Nu grafice de decor.",
  },
  {
    icon: Headphones,
    title: "Lansare, hosting și mentenanță",
    text: "Publicăm, monitorizăm, actualizăm și răspundem la modificări. Infrastructura rămâne responsabilitatea noastră.",
  },
];

const PROTOCOL = [
  {
    when: "Ziua 0 · 15 minute",
    title: "Apelul de estimare",
    text: "Ne spui ce proces vrei să scoatem din Excel și din capul echipei. Ieși cu preț fix, termen și lista de funcții prioritizate, chiar dacă nu lucrăm împreună.",
  },
  {
    when: "Săptămâna 1",
    title: "Arhitectură și design",
    text: "Definim modulele, rolurile și datele, apoi construim prototipul clickabil. Tu validezi structura și interfața înainte să scriem cod de producție.",
  },
  {
    when: "Săptămâna 2-4",
    title: "Sprint-uri cu demo la fiecare final",
    text: "Construim pe module și îți arătăm ce merge la fiecare 3-4 zile. Tu validezi, noi ajustăm în mers. Fără proiecte care dispar 6 luni și reapar gata făcute.",
  },
  {
    when: "Săptămâna 4+",
    title: "Lansare, predare, mentenanță",
    text: "Publicăm, migrăm datele existente, instruim echipa și rămânem pe hosting, securitate, backup-uri și modificări de funcționalitate.",
  },
];

const STATS = [
  { value: "30 zile", label: "Până la prima versiune live" },
  { value: "Preț fix", label: "Comunicat înainte de prima linie de cod" },
  { value: "100%", label: "Cod, conturi și date pe numele tău" },
  { value: "24/7", label: "Monitorizare după lansare" },
];

export function Deliverables() {
  return (
    <>
      <Section id="livrare">
        <SectionIntro
          eyebrow="Ce primești"
          title="Un produs complet, nu un prototip care moare în Figma"
          description="Livrăm aplicația funcțională, conectată la datele și uneltele tale, cu echipa instruită și cu infrastructura configurată. Tot ce ține de partea tehnică rămâne responsabilitatea noastră."
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
            Protocolul de dezvoltare
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            De la primul apel la aplicația live, în 30 de zile
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
