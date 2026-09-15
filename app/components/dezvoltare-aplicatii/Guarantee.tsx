"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, XCircle } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const FOR_YOU = [
  "Ai un proces clar în firmă, dar el trăiește în Excel, emailuri și WhatsApp.",
  "Crești și simți că echipa nu mai poate ține pasul cu munca repetitivă.",
  "Ai nevoie de o aplicație care vorbește cu uneltele pe care le folosești deja.",
  "Vrei un produs pe care îl deții, nu o licență pe care o plătești la nesfârșit.",
];

const NOT_FOR_YOU = [
  "Compari doar prețul, nu rezultatul livrat.",
  "Nu poți aloca 15 minute pentru un apel de estimare.",
  "Nu ai încă un proces definit — mai întâi are sens un website care aduce clienți.",
  "Vrei un proiect pe 12 luni, cu 40 de ședințe de aliniere și comitete de decizie.",
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
            Garanția „30 de zile sau avansul înapoi”
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Dacă în 30 de zile lucrătoare de la încheierea apelului de estimare
            prima versiune funcțională nu este live, îți virăm înapoi{" "}
            <strong className="font-semibold text-zinc-900">
              100% din avansul plătit
            </strong>
            . Fără întrebări, fără justificări, fără clauze ascunse în contract.
            Riscul termenului e integral al nostru.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Și după lansare rămânem în joc: dacă în primele 60 de zile apare o
            eroare care blochează fluxul de lucru, o reparăm prioritar și
            gratuit. Primele optimizări pe baza utilizării reale sunt incluse,
            nu facturate separat.
          </p>

          <a
            href="#contact"
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
          >
            Cere estimarea gratuită
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
          description="Dezvoltarea unei aplicații dă cele mai bune rezultate acolo unde există deja un proces care funcționează, doar că se face manual."
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
