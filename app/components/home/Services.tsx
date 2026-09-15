"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Globe,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Reveal, Section, SectionIntro } from "./shared";

const SERVICES = [
  {
    icon: Bot,
    title: "AI & automatizări",
    text: "Agenți AI, recepționist vocal 24/7, chatbot-uri, calificare automată de lead-uri și fluxuri care leagă uneltele tale între ele.",
    href: "/ai-si-automatizari",
  },
  {
    icon: Globe,
    title: "Website-uri de prezentare",
    text: "Site-uri rapide, curate și ușor de editat, de la o singură pagină până la 10 pagini, livrate cu tot cu găzduire și domeniu configurat.",
    href: "/website-in-2-zile",
  },
  {
    icon: Smartphone,
    title: "Aplicații web & mobile",
    text: "Platforme SaaS, portaluri de clienți, dashboard-uri și aplicații pentru iOS și Android, construite să crească odată cu afacerea.",
    href: "/dezvoltare-aplicatii",
  },
  {
    icon: Sparkles,
    title: "Design UI/UX",
    text: "Prototipuri, interfețe și design systems care fac produsul ușor de folosit și care arată ca brandul tău, nu ca un template.",
  },
  {
    icon: TrendingUp,
    title: "SEO & vizibilitate",
    text: "SEO tehnic, sitemap XML, indexare în Google Search Console, optimizare pentru căutări locale și conținut care aduce trafic real.",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructură & securitate",
    text: "Găzduire, certificate SSL, backup-uri automate, monitorizare și date stocate în centre de date din Uniunea Europeană.",
  },
];

const PROCESS = [
  {
    number: "01",
    title: "Descoperire",
    text: "Un apel scurt în care înțelegem ce vinzi, cui vinzi și unde pierzi clienți acum. De acolo iese planul, nu din șabloane.",
  },
  {
    number: "02",
    title: "Design",
    text: "Vezi structura și interfața înainte să scriem linia de cod, ca să nu descoperi la final că arăta altfel în capul tău.",
  },
  {
    number: "03",
    title: "Construcție",
    text: "Dezvoltăm pe bucăți și îți arătăm progresul la fiecare pas. Tu validezi, noi ajustăm — fără surprize la livrare.",
  },
  {
    number: "04",
    title: "Lansare & mentenanță",
    text: "Publicăm, măsurăm și rămânem aproape. Actualizări, securitate și modificări de conținut intră în pachet.",
  },
];

export function Services() {
  return (
    <>
      <Section id="servicii">
        <SectionIntro
          eyebrow="Ce facem"
          title="O echipă pentru tot produsul digital, nu patru furnizori diferiți"
          description="Acoperim tot lanțul: strategie, design, dezvoltare, lansare și mentenanță. Un singur punct de contact, același standard de la început până la final."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;

            const body = (
              <>
                <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-4 text-base font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {service.text}
                </p>

                {service.href ? (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
                    Vezi serviciul
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                ) : null}
              </>
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                {service.href ? (
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6">
                    {body}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section id="proces" className="bg-zinc-50/50">
        <SectionIntro
          eyebrow="Cum lucrăm"
          title="De la primul apel la produsul live, în patru pași"
          description="Fără instalări, fără training pentru echipă și fără sincronizări manuale. Configurezi o dată, apoi funcționează în fundal."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <span className="font-mono text-sm font-semibold text-zinc-400">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5" /> Cod și infrastructură rămân
              ale tale
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Search className="size-3.5" /> Predare cu documentație și acces
              complet
            </span>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
