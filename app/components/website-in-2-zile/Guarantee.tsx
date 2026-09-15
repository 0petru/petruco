"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const FOR_YOU = [
  "Ai o afacere de servicii care are deja clienți și vrea mai mulți.",
  "Știi ce vinzi și la ce preț, chiar dacă nu ai totul așezat pe hârtie.",
  "Vrei rezultate în zile, nu proiecte care se întind pe luni.",
  "Nu vrei să scrii texte și nu vrei să te ocupi de partea tehnică.",
];

const NOT_FOR_YOU = [
  "Ai nevoie de un magazin online cu mii de produse și logistică.",
  "Cauți exclusiv cel mai mic preț de pe piață, indiferent de rezultat.",
  "Vrei să administrezi tu serverul, codul și actualizările.",
  "Nu poți aloca 15 minute pentru un singur apel telefonic.",
];

export function Guarantee() {
  return (
    <Section id="garantie" className="bg-zinc-50/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="relative overflow-hidden rounded-3xl border-2 border-emerald-600 bg-white p-8 text-center sm:p-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.09)_0%,transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
            <ShieldCheck className="size-6" />
          </span>

          <h2 className="mt-5 text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
            Garanția „2 zile sau gratuit”
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Dacă în 2 zile lucrătoare de la încheierea apelului website-ul tău
            nu este complet funcțional și live pe internet, îți virăm înapoi{" "}
            <strong className="font-semibold text-zinc-900">
              100% din suma achitată
            </strong>
            . Fără întrebări, fără justificări, fără termeni ascunși în
            contract. Riscul este integral al nostru.
          </p>

          <a
            href="#contact"
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
          >
            Vreau site-ul live în 2 zile
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            Apelul de 15 minute este gratuit și nu te obligă la nimic.
          </p>
        </div>
      </motion.div>

      <div className="mt-20">
        <SectionIntro
          align="center"
          eyebrow="Potrivire"
          title="Ca să nu pierdem timpul niciunul dintre noi"
          description="Nu suntem potriviți pentru orice tip de proiect, iar asta e o veste bună pentru ambele părți. Iată exact unde ne încadrăm."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-emerald-200 bg-white p-6 sm:p-7"
          >
            <h3 className="flex items-center gap-2 text-base font-semibold text-emerald-800">
              <CheckCircle2 className="size-5" />
              Este pentru tine dacă
            </h3>
            <ul className="mt-5 space-y-3.5">
              {FOR_YOU.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7"
          >
            <h3 className="flex items-center gap-2 text-base font-semibold text-zinc-700">
              <XCircle className="size-5 text-zinc-400" />
              Nu este pentru tine dacă
            </h3>
            <ul className="mt-5 space-y-3.5">
              {NOT_FOR_YOU.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-600"
                >
                  <XCircle className="mt-0.5 size-4 shrink-0 text-zinc-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
