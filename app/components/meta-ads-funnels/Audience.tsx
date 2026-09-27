"use client";

import { motion } from "framer-motion";
import { Gem, GraduationCap, Laptop, ShoppingCart } from "lucide-react";

const AUDIENCE = [
  {
    icon: ShoppingCart,
    title: "Magazine Online (E-commerce)",
    text: "Scalăm vânzările direct din magazinul online, optimizăm ROAS-ul pe campaniile Meta, recuperăm coșurile abandonate și transformăm traficul rece în cumpărători recurenți.",
  },
  {
    icon: Laptop,
    title: "Companii Software, SaaS & Aplicații Mobile",
    text: "Generăm lead-uri calificate și descărcări, scădem costul de achiziție (CAC) pentru abonați sau utilizatori de aplicații mobile și construim pâlnii care convertesc vizitatorii în trial-uri gratuite, utilizatori activi sau abonați plătitori.",
  },
  {
    icon: GraduationCap,
    title: "Creatori de Info-produse & Cursuri Online",
    text: "Creăm ecosisteme de vânzare capabile să atragă audiența potrivită, să vândă programe educaționale, masterclass-uri sau comunități cu marje mari de profit.",
  },
  {
    icon: Gem,
    title: "Afaceri cu Servicii High-Ticket",
    text: "Atragem clienți premium prin funnel-uri de calificare riguroase, scăpând de lead-urile slabe și aducând în fața ta doar cumpărători gata de acțiune.",
  },
];

export function Audience() {
  return (
    <section id="audienta" className="relative overflow-hidden bg-zinc-900">
      {/*
        Tranziția din secțiunea albă de deasupra, în două straturi:

        1. Gradientul propriu-zis, interpolat în OKLab. Pe un alb → negru, sRGB
           face mijlocul gri-murdar și „rupt”; OKLab interpolează perceptiv, deci
           rampa e uniformă. Opririle sunt trecute prin scara zinc, ca să nu apară
           nici o schimbare bruscă de ton la capete.
        2. Un strat foarte fin de zgomot (grain), peste gradient. Un gradient atât
           de scurt are doar ~64 pași de culoare, iar ochiul vede benzile
           (banding); zgomotul le sparge fără să se vadă ca textură.

        `bg-gradient-to-b from-white to-zinc-900` rămâne doar ca fallback pentru
        browserele care nu știu `in oklab`.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-zinc-900 sm:h-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom in oklab, #ffffff 0%, #fafafa 12%, #d4d4d8 32%, #a1a1aa 50%, #52525b 70%, #27272a 88%, #18181b 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-[0.07] sm:h-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8 lg:pt-28 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-[0.16em] text-emerald-400 uppercase"
        >
          Pentru cine lucrăm
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-3 text-center text-3xl font-medium tracking-tight text-white sm:text-4xl"
        >
          Cui ne adresăm?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-zinc-400 sm:text-base"
        >
          Nu lucrăm cu toată lumea. Ne concentrăm exclusiv pe tipurile de
          afaceri unde marketingul bazat pe date și un sistem complet de
          achiziție pot genera o creștere masivă și măsurabilă:
        </motion.p>

        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {AUDIENCE.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="flex flex-col rounded-2xl border border-zinc-700/70 bg-zinc-800/50 p-5 transition-colors hover:border-zinc-600 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 text-emerald-400">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  <span className="font-semibold text-white">
                    Ce facem pentru tine:{" "}
                  </span>
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
