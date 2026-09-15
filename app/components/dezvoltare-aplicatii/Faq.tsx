"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Plus, ShieldCheck, X } from "lucide-react";

import { Section } from "@/app/components/home/shared";
import { LeadForm } from "@/app/components/website-in-2-zile/LeadForm";
import { Brand } from "@/app/components/Brand";
import { siteConfig } from "@/config/site";

const FAQ_ITEMS = [
  {
    question: "Cât costă o aplicație?",
    answer:
      "Prețul fix se stabilește după apelul de 15 minute, în funcție de numărul de module, de integrările necesare și de platformele acoperite. Nu plătești pe ore și nu apar costuri pe parcurs: suma comunicată după estimare este suma finală.",
  },
  {
    question: "De ce 30 de zile și nu 6 luni?",
    answer:
      "Pentru că nu construim tot ce se poate construi, ci ce aduce rezultatul. Prioritizăm funcțiile care mută procesul din manual în automat, lansăm prima versiune funcțională, apoi extindem pe baza utilizării reale — nu a presupunerilor din ședințe.",
  },
  {
    question: "Nu știu exact ce vreau. Este o problemă?",
    answer:
      "Nu. De asta există apelul de estimare și prototipul din prima săptămână. Îți arătăm fluxurile pe ecran înainte să scriem cod de producție, iar tu validezi sau corectezi acolo, când schimbările costă câteva minute, nu câteva săptămâni.",
  },
  {
    question: "Aplicația mobilă chiar merge pe iOS și Android?",
    answer:
      "Da. Folosim o singură bază de cod care se compilează pentru ambele platforme, se publică în App Store și Google Play și suportă notificări push și funcționare offline. Nu plătești de două ori pentru aceeași aplicație.",
  },
  {
    question: "Cine deține codul la final?",
    answer:
      "Tu. Depozitul de cod, conturile de infrastructură, domeniile și cheile API sunt pe numele tău. La predare primești acces complet, documentație tehnică și o sesiune în care îți explicăm cum e structurat proiectul.",
  },
  {
    question: "Am nevoie de un CTO sau de echipă tehnică internă?",
    answer:
      "Nu. Acoperim arhitectura, dezvoltarea, testarea, lansarea și mentenanța. Dacă ai deja o echipă tehnică, lucrăm împreună și le predăm codul documentat, ca să poată continua fără noi.",
  },
  {
    question: "Ce se întâmplă după lansare?",
    answer:
      "Rămânem pe hosting, securitate, backup-uri, monitorizare și modificări de funcționalitate. Abonamentul de mentenanță se stabilește de la început, ca să nu apară costuri surpriză la finalul proiectului.",
  },
];

const CTA_POINTS = [
  "Apel de 15 minute, gratuit și fără obligații",
  "Ieși cu preț fix și termen, chiar dacă nu lucrăm împreună",
  "30 de zile lucrătoare sau avansul înapoi",
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Section id="intrebari">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Ce ne întreabă lumea înainte să spună „da”
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Dacă nu găsești răspunsul aici, întreabă-ne direct în apel. Nu
              avem răspunsuri pregătite, avem răspunsuri concrete.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <ShieldCheck className="size-3.5" /> 30 de zile sau avansul
                înapoi
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <Clock className="size-3.5" /> Prima versiune în 30 de zile
              </span>
            </div>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-zinc-900">
                      {item.question}
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
                      {isOpen ? (
                        <X className="size-3.5" />
                      ) : (
                        <Plus className="size-3.5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 pb-5 text-sm leading-relaxed text-zinc-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="contact" className="bg-zinc-50/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(16,185,129,0.14)_0%,transparent_70%)]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200">
                Ultimul pas
              </span>

              <h2 className="mt-5 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Află în 15 minute cât costă aplicația ta
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
                Lasă-ne datele și te sunăm în intervalul ales. Analizăm procesul
                pe care vrei să îl muți într-o aplicație și îți spunem exact ce
                construim, în cât timp și cu ce preț fix.
              </p>

              <ul className="mt-7 space-y-3">
                {CTA_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-zinc-300"
                  >
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {point}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-zinc-500">
                Sau scrie-ne direct pe{" "}
                <a
                  href={siteConfig.links.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-zinc-300 underline underline-offset-4 hover:text-white"
                >
                  Telegram
                </a>
                .
              </p>
            </div>

            <LeadForm
              idPrefix="apps-final"
              source="dezvoltare-aplicatii-final"
              eyebrow="Începem azi"
              heading="Vreau estimarea gratuită"
              subheading="Completează datele și alege intervalul. Te sună un om, nu un robot."
              ctaLabel="Trimite și sună-mă"
            />
          </div>
        </motion.div>
      </Section>

      <footer className="bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
          <Brand />

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
            <Link href="/" className="transition-colors hover:text-zinc-900">
              Toate serviciile
            </Link>
            <Link
              href="/website-in-2-zile"
              className="transition-colors hover:text-zinc-900"
            >
              Website în 2 zile
            </Link>
            <Link
              href="/ai-si-automatizari"
              className="transition-colors hover:text-zinc-900"
            >
              AI & Automatizări
            </Link>
            <Link
              href="/psychology-system"
              className="transition-colors hover:text-zinc-900"
            >
              Pentru psihologi
            </Link>
            <a
              href="#intrebari"
              className="transition-colors hover:text-zinc-900"
            >
              Întrebări
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Petruco Digital
          </p>
        </div>
      </footer>
    </>
  );
}
