"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, ShieldCheck, Sparkles } from "lucide-react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LeadForm } from "@/app/components/website-in-2-zile/LeadForm";

const FLIP_WORDS = [
  "apelurile",
  "lead-urile",
  "chat-urile",
  "programările",
  "follow-up-ul",
];

const STATS = [
  { value: "18 sec", label: "Timp de reacție la un lead nou" },
  { value: "24/7", label: "Fără apeluri sau mesaje pierdute" },
  { value: "7 zile", label: "Până când sistemul e live" },
];

const BULLETS = [
  "Nu angajezi oameni în plus",
  "Nu schimbi uneltele pe care lucrezi deja",
  "Nu scrii tu nicio linie de cod",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_0%,#f4f4f5_0%,#ffffff_70%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-start gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-10 lg:px-8 lg:py-24">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.12em] text-emerald-800 uppercase"
          >
            <Sparkles className="size-3.5" />
            Automatizare AI 100% done-for-you
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-4xl leading-[1.08] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[4rem]"
          >
            Agenți AI care răspund, califică și programează.{" "}
            <span className="text-emerald-600 underline">
              Non-stop, în 18 secunde.
            </span>
          </motion.h1>

          {/* Div, nu <p>: ContainerTextFlip randează un <div>. */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-loose text-zinc-600 sm:text-lg"
          >
            <span>Construim sisteme care preiau automat</span>{" "}
            <ContainerTextFlip
              words={FLIP_WORDS}
              interval={2400}
              animationDuration={600}
              className="mx-1 align-middle text-[0.78em]"
            />{" "}
            <span>
              — ca niciun client să nu mai aștepte și nimeni din echipă să nu
              mai piardă ore pe întrebări repetitive.
            </span>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
          >
            {BULLETS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-600"
              >
                <Check className="size-4 text-emerald-600" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 grid max-w-lg divide-y divide-zinc-200 border-y border-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="px-1 py-4 sm:px-4 sm:text-center"
              >
                <p className="text-2xl font-semibold tracking-tight text-zinc-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
            >
              Cere auditul gratuit de automatizare
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#module"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/80 px-5 py-3 text-sm font-medium text-zinc-800 shadow-[inset_0_2px_0_#ffffff] transition-all hover:from-white hover:to-zinc-200"
            >
              Vezi modulele live
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500"
          >
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" /> Apel de 15 minute, fără obligații
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" /> 7 zile sau banii înapoi
            </span>
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:sticky lg:top-32"
        >
          <LeadForm
            idPrefix="ai-hero"
            source="ai-si-automatizari-hero"
            eyebrow="Audit gratuit de automatizare"
            heading="Îți arătăm exact ce poți automatiza."
            subheading="În 15 minute identificăm cele mai consumatoare 3 procese din afacerea ta și îți spunem ce se poate automatiza profitabil."
            ctaLabel="Vreau auditul gratuit"
          />
        </motion.div>
      </div>
    </section>
  );
}
