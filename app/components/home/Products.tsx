"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarDays,
  Clock,
  Globe,
  Headphones,
  Lock,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section, SectionIntro } from "./shared";

const PRODUCTS = [
  {
    icon: CalendarDays,
    name: "Calendaro",
    badge: "Se lansează în curând",
    description:
      "Alternativa modernă la Calendly, construită de noi: link unic de programare, sincronizare cu calendarul, plăți online și automatizări.",
    href: "/calendaro",
    cta: "Vezi produsul",
    external: false,
  },
  {
    icon: Building2,
    name: "Conecta",
    badge: "Disponibil",
    description:
      "CRM pentru echipe mici și mijlocii: clienți, oferte, task-uri și activitatea echipei într-un singur loc, fără instalare.",
    href: "/conecta",
    cta: "Vezi produsul",
    external: false,
  },
  {
    icon: Search,
    name: "Detector AI & Plagiat",
    badge: "Disponibil",
    description:
      "Verifică rapid un text și identifică ce e generat de AI sau preluat din alte surse. Deja folosit în fluxurile noastre de conținut.",
    href: siteConfig.links.mainForm,
    cta: "Cere acces",
    external: true,
  },
];

const MANAGED = [
  {
    icon: Globe,
    title: "Găzduire & infrastructură",
    text: "Ne ocupăm de servere, domeniu, DNS și scalare. Tu nu atingi niciodată un panou de control.",
  },
  {
    icon: ShieldCheck,
    title: "Securitate & SSL",
    text: "Certificate SSL, protecție anti-abuz, actualizări de securitate și verificări periodice.",
  },
  {
    icon: Lock,
    title: "Backup-uri automate",
    text: "Copii de siguranță zilnice, cu restaurare rapidă dacă ceva merge prost. Testate, nu doar promise.",
  },
  {
    icon: Clock,
    title: "Monitorizare 24/7",
    text: "Aflăm noi primii când ceva cade. Timp de răspuns măsurat, nu „revenim noi când putem”.",
  },
  {
    icon: Zap,
    title: "Actualizări & mentenanță",
    text: "Patch-uri, optimizări de viteză și îmbunătățiri continue, incluse în abonamentul lunar.",
  },
  {
    icon: Headphones,
    title: "Modificări de conținut",
    text: "Vrei alt text, altă poză, o pagină nouă? Ne scrii și ne ocupăm noi. Nu-ți trebuie cineva tehnic.",
  },
  {
    icon: BarChart3,
    title: "Raportare lunară",
    text: "Vezi trafic, surse de lead-uri și ce merită îmbunătățit luna următoare, pe limba afacerii.",
  },
];

export function Products() {
  return (
    <>
      <Section id="produse">
        <SectionIntro
          eyebrow="Produse proprii"
          title="Nu doar construim pentru alții — ne construim și produsele noastre"
          description="Faptul că trăim din soft propriu ne schimbă felul în care lucrăm pentru clienți: gândim fiecare proiect ca pe un produs care trebuie să reziste peste ani."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => {
            const Icon = product.icon;

            const body = (
              <>
                <div className="flex items-center justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                    <Icon className="size-5" />
                  </span>

                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-zinc-600 uppercase">
                    {product.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-zinc-900">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {product.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-zinc-900">
                  {product.cta}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </>
            );

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
                  >
                    {body}
                  </a>
                ) : (
                  <Link
                    href={product.href}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
                  >
                    {body}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section id="mentenanta" className="bg-zinc-50/50">
        <SectionIntro
          eyebrow="Mentenanță & suport"
          title="Nu ești o persoană tehnică? Ne ocupăm noi de absolut tot"
          description="Nu primești un produs și apoi ești lăsat singur cu el. Rămânem aproape: infrastructură, securitate, mentenanță și toate modificările de care ai nevoie."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MANAGED.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <span className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
