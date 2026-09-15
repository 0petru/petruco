"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { siteConfig } from "@/config/site";

const TITLE_WORDS = "Produse digitale care îți aduc clienți".split(" ");

const FLIP_WORDS = [
  "website-uri",
  "aplicații",
  "agenți AI",
  "automatizări",
  "platforme SaaS",
];

const HIGHLIGHTS = [
  "Website de prezentare livrat în 2 zile",
  "Design, dezvoltare și lansare de la o singură echipă",
  "Mentenanță, găzduire și securitate incluse",
  "Date găzduite în Uniunea Europeană",
];

const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Stripe",
  "OpenAI",
  "n8n",
  "Tailwind CSS",
  "AWS",
  "Vercel",
  "Docker",
  "Figma",
];

/** Bandă infinită cu tehnologiile cu care lucrăm. */
function TechMarquee() {
  return (
    <div className="mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {TECH.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="px-5 text-sm font-medium whitespace-nowrap text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_50%_0%,#f4f4f5_0%,#ffffff_70%)]" />

      <div className="mx-auto w-full max-w-4xl px-4 pt-16 pb-14 text-center sm:px-6 sm:pt-24 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-[0_4px_8px_rgba(34,42,53,0.05)]"
        >
          <Sparkles className="size-3.5" />
          Companie de software full-service
        </motion.span>

        <h1 className="mt-7 text-4xl leading-[1.08] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          {TITLE_WORDS.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <motion.span
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>{" "}
            </Fragment>
          ))}
        </h1>

        {/* Div, nu <p>: ContainerTextFlip randează un <div>, iar un div în p
            este HTML invalid și provoacă eroare de hydration. */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-loose text-zinc-600 sm:text-lg"
        >
          <span>Facem design, construim, lansăm și menținem</span>{" "}
          <ContainerTextFlip
            words={FLIP_WORDS}
            interval={2800}
            animationDuration={600}
            className="mx-1 align-middle text-[0.78em]"
          />{" "}
          <span>
            — ca afacerea ta să se vadă, să vândă și să funcționeze singură.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="mt-9 flex flex-col items-center justify-center gap-2.5 sm:flex-row"
        >
          <a
            href={siteConfig.links.mainForm}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800 sm:w-auto"
          >
            Cere o ofertă
            <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-zinc-500/60 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-3" />
            </span>
          </a>

          <a
            href="#oferte"
            className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/80 px-5 py-3 text-sm font-medium text-zinc-800 shadow-[inset_0_2px_0_#ffffff] transition-all hover:from-white hover:to-zinc-200 sm:w-auto"
          >
            Vezi ofertele
          </a>
        </motion.div>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {HIGHLIGHTS.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.78 + i * 0.07 }}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-500"
            >
              <Check className="size-3.5 text-zinc-900" />
              {item}
            </motion.li>
          ))}
        </ul>

        <TechMarquee />
      </div>
    </section>
  );
}
