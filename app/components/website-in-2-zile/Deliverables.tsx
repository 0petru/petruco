"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  CreditCard,
  FileText,
  Headphones,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const DELIVERABLES = [
  {
    icon: FileText,
    title: "Până la 10 pagini",
    text: "Acasă, Despre, Servicii detaliate, Portofoliu, Recenzii și Contact — structurate pe ce vinzi, nu pe un șablon.",
  },
  {
    icon: Sparkles,
    title: "Copywriting inclus",
    text: "Nu ne trimiți documente. Extragem tot din apelul de 15 minute și scriem noi toate textele care vând.",
  },
  {
    icon: Search,
    title: "SEO tehnic & sitemap",
    text: "Meta-taguri, date structurate, sitemap XML trimis în Google Search Console și indexare cât mai rapidă.",
  },
  {
    icon: CreditCard,
    title: "Plăți online integrate",
    text: "Stripe sau Netopia, configurate de noi. Clienții plătesc serviciul sau avansul direct pe site.",
  },
  {
    icon: CalendarDays,
    title: "Sistem de rezervări",
    text: "Calendar conectat la agenda ta. Clientul își alege singur ora, tu primești programarea confirmată.",
  },
  {
    icon: Smartphone,
    title: "Design responsive & rapid",
    text: "Arată impecabil pe telefon și se încarcă în sub o secundă. Majoritatea vizitatorilor vin de pe mobil.",
  },
  {
    icon: ShieldCheck,
    title: "Domeniu, găzduire, SSL",
    text: "Cumpărăm domeniul, configurăm DNS-ul, instalăm certificatul SSL și publicăm versiunea live.",
  },
  {
    icon: Headphones,
    title: "Mentenanță inclusă",
    text: "După lansare rămânem aproape: securitate, backup-uri, actualizări și modificări de conținut.",
  },
];

const PROTOCOL = [
  {
    when: "Ziua 0 · 15 minute",
    title: "Apelul strategic",
    text: "Discutăm ce vinzi, cui vinzi, ce prețuri practici și cum vrei să arate. Stabilim prețul fix și pornim imediat. Aici se termină implicarea ta.",
  },
  {
    when: "Ziua 1 · primele ore",
    title: "Structură, texte și design",
    text: "Construim arhitectura paginilor, scriem argumentele de vânzare și facem designul. Fără briefinguri interminabile, fără ședințe.",
  },
  {
    when: "Ziua 1 → Ziua 2",
    title: "Construcție, plăți, rezervări, SEO",
    text: "Asamblăm site-ul, integrăm procesatorul de plăți și calendarul, configurăm SEO-ul tehnic, viteza și găzduirea.",
  },
  {
    when: "Ziua 2",
    title: "Live și predare",
    text: "Site-ul e public și funcțional, cu o sesiune de ajustări finale inclusă. Din acest moment curge garanția.",
  },
];

export function Deliverables() {
  return (
    <>
      <Section id="ce-include">
        <SectionIntro
          eyebrow="Ce primești"
          title="Pachetul complet, fără costuri surpriză la final"
          description="Nu plătești extra pentru funcții elementare. Tot ce are nevoie o afacere de servicii ca să vândă online este inclus și configurat de noi."
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
            Protocolul de execuție
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Cele 2 zile, ora cu ora
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-base leading-relaxed text-zinc-400"
          >
            Tu ai o singură responsabilitate: 15 minute de apel. Restul
            calendarului e problema noastră.
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
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
