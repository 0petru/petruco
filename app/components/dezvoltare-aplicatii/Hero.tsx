"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, ShieldCheck, Sparkles } from "lucide-react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { LeadForm } from "@/app/components/website-in-2-zile/LeadForm";

const FLIP_WORDS = [
  "platforme SaaS",
  "portaluri de clienți",
  "aplicații mobile",
  "dashboard-uri",
  "integrări API",
];

const STATS = [
  { value: "30 zile", label: "Până la prima versiune live" },
  { value: "Preț fix", label: "Fără costuri pe ore, fără surprize" },
  { value: "3 platforme", label: "Web, iOS și Android" },
];

const BULLETS = [
  "Nu trebuie să angajezi o echipă tehnică",
  "Nu plătești pe ore, ci pe rezultat livrat",
  "Nu rămâi blocat cu un cod pe care nu îl deții",
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
            Dezvoltare aplicații web & mobile, done-for-you
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mt-6 text-4xl leading-[1.08] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.75rem]"
          >
            Aplicația care scoate Excelul din firma ta.{" "}
            <span className="text-emerald-600 underline">
              Live în 30 de zile.
            </span>
          </motion.h1>

          {/* Div, nu <p>: ContainerTextFlip randează un <div>. */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-loose text-zinc-600 sm:text-lg"
          >
            <span>Construim</span>{" "}
            <ContainerTextFlip
              words={FLIP_WORDS}
              interval={2400}
              animationDuration={600}
              className="mx-1 align-middle text-[0.78em]"
            />{" "}
            <span>
              — de la arhitectură și design până la lansare, mentenanță și
              facturare. Tu vii cu problema, noi venim cu produsul.
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
              Cere estimarea gratuită
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#livrare"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/80 px-5 py-3 text-sm font-medium text-zinc-800 shadow-[inset_0_2px_0_#ffffff] transition-all hover:from-white hover:to-zinc-200"
            >
              Vezi ce primești
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
              <ShieldCheck className="size-3.5" /> 30 de zile sau avansul înapoi
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
            idPrefix="apps-hero"
            source="dezvoltare-aplicatii-hero"
            eyebrow="Estimare gratuită"
            heading="Îți spunem exact cât costă și cât durează."
            subheading="În 15 minute înțelegem procesul pe care vrei să îl muți într-o aplicație și ieși cu preț fix, termen și lista de funcții prioritizate."
            ctaLabel="Vreau estimarea gratuită"
          />
        </motion.div>
      </div>
    </section>
  );
}
