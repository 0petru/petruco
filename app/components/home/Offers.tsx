"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Check, Globe, Sparkles } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section, SectionIntro } from "./shared";

const OFFERS = [
  {
    icon: Globe,
    badge: "Livrare în 2 zile lucrătoare",
    title: "Website de prezentare în 2 zile",
    description:
      "Pentru afaceri care nu au nevoie de un proiect complex, dar vor o prezență online profesionistă care începe să lucreze imediat.",
    audience:
      "Ideal dacă vinzi servicii și ai nevoie ca lumea să te găsească rapid.",
    features: [
      "Până la 10 pagini, structurate pe serviciile tale",
      "SEO on-page complet: titluri, descrieri, date structurate",
      "Sitemap XML și indexare în Google Search Console",
      "Integrare procesator de plăți (Stripe / Netopia)",
      "Sistem de rezervări și programări online",
      "Design responsive, optimizat pentru mobil",
      "Domeniu, găzduire și certificat SSL configurate",
    ],
    href: "/website-in-2-zile",
    cta: "Vezi oferta completă",
  },
  {
    icon: CalendarDays,
    badge: "Pentru cabinete de psihologie",
    title: "Sistemul de Prezență Digitală pentru Psihologi",
    description:
      "Un sistem complet care rezolvă exact problema cabinetelor: oamenii caută un psiholog, dar ajung pe un profil gol sau nu te găsesc deloc.",
    audience:
      "Construit împreună cu psihologi, pentru programări, nu doar vizite.",
    features: [
      "Website dedicat pentru cabinet, cu pagini de specialitate",
      "Optimizare pentru căutări locale și Google Maps",
      "Profil Google Business complet, cu recenzii și program",
      "Programări online, fără apeluri pierdute",
      "Conținut care inspiră încredere din prima secundă",
      "Analiză gratuită a prezenței tale online actuale",
    ],
    href: "/psychology-system",
    cta: "Vezi sistemul",
  },
];

export function Offers() {
  return (
    <Section id="oferte">
      <SectionIntro
        eyebrow="Oferte"
        title="Două pachete gândite pentru rezultate, nu pentru facturi mari"
        description="Amândouă pornesc de la aceeași întrebare: ce trebuie să se întâmple ca afacerea ta să primească mai mulți clienți? De acolo vine restul."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {OFFERS.map((offer, i) => {
          const Icon = offer.icon;

          return (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-900/10 bg-zinc-50 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-zinc-700 uppercase">
                <Sparkles className="size-3" />
                {offer.badge}
              </span>

              <span className="mt-5 flex size-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                <Icon className="size-5" />
              </span>

              <h3 className="mt-4 text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl">
                {offer.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {offer.description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-zinc-200 pt-6">
                {offer.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-zinc-700"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-zinc-900" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-zinc-500">{offer.audience}</p>

              <Link
                href={offer.href}
                className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-4 py-3 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
              >
                {offer.cta}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/60 p-6 sm:flex-row sm:items-center"
      >
        <div>
          <h3 className="text-base font-semibold text-zinc-900">
            Ai nevoie de ceva mai complex?
          </h3>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Construim și produse custom: platforme SaaS, portaluri, API-uri,
            integrări și automatizări care nu există deja pe piață. Ne spui
            problema, noi venim cu arhitectura.
          </p>
        </div>

        <a
          href={siteConfig.links.mainForm}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
        >
          Cere o estimare
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </Section>
  );
}
