"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Smartphone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Brand } from "@/app/components/Brand";

type FooterLink = { label: string; href: string; external?: boolean };

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Servicii",
    links: [
      { label: "AI & automatizări", href: "/ai-si-automatizari" },
      { label: "Website în 2 zile", href: "/website-in-2-zile" },
      {
        label: "Prezență digitală pentru psihologi",
        href: "/psychology-system",
      },
      { label: "Mentenanță & suport", href: "#mentenanta" },
    ],
  },
  {
    title: "Produse",
    links: [
      { label: "Calendaro", href: "/calendaro" },
      { label: "Conecta", href: "/conecta" },
      {
        label: "Detector AI & Plagiat",
        href: siteConfig.links.mainForm,
        external: true,
      },
    ],
  },
  {
    title: "Companie",
    links: [
      {
        label: "Cere o ofertă",
        href: siteConfig.links.mainForm,
        external: true,
      },
      {
        label: "Scrie-ne pe Telegram",
        href: siteConfig.links.telegram,
        external: true,
      },
      { label: "Întrebări frecvente", href: "#intrebari" },
    ],
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    "text-sm text-zinc-600 transition-colors hover:text-zinc-900";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function Closing() {
  return (
    <>
      <section id="contact" className="border-b border-zinc-200/80 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 px-6 py-14 text-center sm:px-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_70%)]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-light text-zinc-200">
                Companie de software full-service
              </span>

              <h2 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Hai să construim următorul tău produs digital
              </h2>

              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Ne spui unde ești acum și unde vrei să ajungi. Revenim cu un
                plan concret, un termen și un preț fix — nu cu o prezentare de
                40 de slide-uri.
              </p>

              <div className="mx-auto mt-8 grid max-w-lg gap-2 sm:grid-cols-2">
                <a
                  href={siteConfig.links.mainForm}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  Cere o ofertă
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#oferte"
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  Vezi ofertele
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5" /> GDPR, date în UE
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="size-3.5" /> Facturare pentru firme
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Smartphone className="size-3.5" /> Suport în română
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-zinc-50/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
            <div>
              <Brand />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
                Construim, lansăm și întreținem produse digitale: website-uri,
                aplicații, agenți AI și automatizări. Din România, pentru
                afaceri care vor să crească.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="text-xs font-semibold tracking-[0.14em] text-zinc-900 uppercase">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterLinkItem link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Petruco Digital. Toate drepturile
              rezervate.
            </p>
            <p className="text-xs text-zinc-500">
              Design, dezvoltare și mentenanță — de la o singură echipă.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
