"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Clapperboard,
  Megaphone,
  PenLine,
  Route,
  Zap,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

const PILLARS = [
  {
    number: "01",
    icon: Megaphone,
    title: "Meta Ads Campaigns",
    text: "Administrăm și optimizăm campanii avansate pe Facebook și Instagram, structurate pe obiective de performanță, scalare și maximizarea profitului (ROAS).",
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "Creative care vând (Videos, UGC, Bannere, Carousele)",
    text: "Producem și testăm constant materiale vizuale concepute să oprească scroll-ul: de la clipuri native de tip User Generated Content (UGC) și videouri de produs, până la bannere și carusele performante.",
  },
  {
    number: "03",
    icon: Route,
    title: "Funnel & User Journey",
    text: "Proiectăm și optimizăm pas cu pas parcursul utilizatorului — de la prima interacțiune cu brandul tău, trecând prin pagina de produs sau landing page, până la finalizarea comenzii sau a abonamentului.",
  },
  {
    number: "04",
    icon: Activity,
    title: "Tracking & Măsurare Avansată",
    text: "Implementăm pixelul, Conversions API și server-side tracking pentru a ne asigura că nicio conversie nu se pierde și că luăm decizii bazate pe date 100% reale.",
  },
  {
    number: "05",
    icon: Zap,
    title: "Instant Follow-ups & Automations",
    text: "Setăm fluxuri automate inteligente pentru recuperarea coșurilor abandonate, mesaje de bun venit și secvențe de nurturing, maximizând valoarea fiecărui lead generat.",
  },
  {
    number: "06",
    icon: PenLine,
    title: "Copywriting de Conversie",
    text: "Scriem mesaje persuasive, adaptate psihologiei clientului tău ideal, fie că vorbim de texte pentru reclame, pagini de destinație sau emailuri de vânzare.",
  },
];

export function Services() {
  return (
    // Fără `border-b` (implicit din `Section`): granița spre secțiunea întunecată
    // de dedesubt e făcută de gradientul din `Audience`, nu de o linie de 1px.
    <Section id="servicii" className="border-b-0">
      <SectionIntro
        align="center"
        eyebrow="Ce facem"
        title="Ecosistemul complet pentru creșterea ta digitală"
        description="Nu ne oprim doar la butoane de „Boost”. Construim un sistem integrat de achiziție, gândit special pentru a aduce clienți în mod predictibil și profitabil."
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;

          return (
            <motion.li
              key={pillar.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 pl-7 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-[0_20px_45px_-30px_rgba(16,185,129,0.55)]"
            >
              {/* Pilónul: coloana verticală din stânga cardului. */}
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-500 via-emerald-500/40 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-700 transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-100">
                  <Icon className="size-4" />
                </span>
                <span className="font-mono text-xs font-bold tracking-[0.16em] text-emerald-700">
                  {pillar.number}
                </span>
                <span className="h-px flex-1 bg-zinc-200" />
              </div>

              <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-900">
                {pillar.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                {pillar.text}
              </p>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
