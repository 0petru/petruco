"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/config/site";

import { CtaForm } from "./CtaForm";

const CALL_POINTS = [
  "Analizăm rapid situația actuală a campaniilor sau a businessului tău.",
  "Identificăm blocajele majore din funnel sau din procesul de tracking.",
  "Îți spunem clar dacă putem obține rezultate împreună și care este strategia recomandată.",
];

export function Cta() {
  return (
    <section id="contact" className="bg-zinc-900">
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8 lg:pb-28 lg:pt-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,460px)] lg:gap-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200"
            >
              Ultimul pas
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl"
            >
              Gata să scalezi afacerea ta în mod predictibil?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300"
            >
              Hai să analizăm cifrele tale actuale și să vedem cum putem
              construi un sistem de achiziție care să aducă clienți constanți,
              fără risipă de buget.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-8"
            >
              <p className="text-sm font-semibold text-white">
                Ce se întâmplă în apelul de 15 minute:
              </p>

              <ul className="mt-4 space-y-3">
                {CALL_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-6 max-w-xl border-l-2 border-emerald-500/60 pl-4 text-sm leading-relaxed text-zinc-300">
                <span className="font-semibold text-white">
                  Fără presiune de vânzare, fără obligații.
                </span>{" "}
                Doar o discuție tehnică între doi oameni de business.
              </p>
            </motion.div>

            {/*
              Pe mobil formularul e sub text, deci butonul duce la el. Pe desktop
              formularul e deja vizibil în dreapta, iar butonul ar fi redundant.
            */}
            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden"
            >
              Programează o discuție de 15 minute
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="mt-6 text-xs leading-relaxed text-zinc-500">
              Preferi să scrii direct? Scrie-ne pe{" "}
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
              >
                Telegram
              </a>{" "}
              și îți răspundem în maximum 24 de ore.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <CtaForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
