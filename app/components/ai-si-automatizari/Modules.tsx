"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Filter,
  GitFork,
  PhoneCall,
  Zap,
} from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

/* -------------------------------------------------------------------------- */
/*                              PIESE COMUNE                                  */
/* -------------------------------------------------------------------------- */

/** Ramă comună pentru toate simulările: antet de „consolă" + corp. */
function SimShell({
  title,
  status,
  children,
}: {
  title: string;
  status: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_60px_-32px_rgba(24,24,27,0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-zinc-50/80 px-4 py-3">
        <span className="flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
          <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
          {title}
        </span>
        <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-700">
          {status}
        </span>
      </div>

      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          1. RECEPȚIE VOCALĂ AI                             */
/* -------------------------------------------------------------------------- */

const WAVE = [40, 70, 30, 90, 60, 100, 45, 80, 20, 95, 50, 75, 30, 60];

function VoiceAgentSim() {
  return (
    <SimShell title="Apel live: +40 722 *** 119" status="00:24 · Live AI">
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-[85%] rounded-2xl rounded-bl-none border border-zinc-200 bg-zinc-50 p-3"
        >
          <span className="block text-[11px] font-semibold text-zinc-500">
            Client
          </span>
          <p className="mt-1 text-sm leading-relaxed text-zinc-700">
            „Bună ziua, aș dori o programare urgentă pentru o consultație joi la
            ora 14:00.”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-none border border-emerald-200 bg-emerald-50 p-3"
        >
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
            <Bot className="size-3.5" />
            Agent vocal AI · răspuns în 280 ms
          </span>
          <p className="mt-1 text-sm leading-relaxed text-emerald-900">
            „Desigur. Am verificat calendarul: joi la 14:00 este disponibil. Am
            rezervat intervalul și v-am trimis confirmarea prin SMS.”
          </p>
        </motion.div>
      </div>

      <div className="mt-4 flex h-8 items-center justify-center gap-1 border-t border-zinc-200 pt-3">
        {WAVE.map((height, i) => (
          <motion.span
            key={i}
            animate={{ height: ["20%", `${height}%`, "20%"] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.08,
              ease: "easeInOut",
            }}
            className="w-1 rounded-full bg-emerald-500/70"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </SimShell>
  );
}

/* -------------------------------------------------------------------------- */
/*                        2. CALIFICARE LEAD-URI                               */
/* -------------------------------------------------------------------------- */

const SCORES = [
  { label: "Buget declarat", value: "5.000 - 10.000 € / lună", score: 92 },
  { label: "Dimensiune firmă", value: "25 - 50 angajați", score: 84 },
  { label: "Urgență", value: "Imediat (sub 7 zile)", score: 98 },
];

function LeadQualificationSim() {
  return (
    <SimShell title="Lead scoring engine" status="Scor 94/100 · Tier A">
      <div className="space-y-3">
        {SCORES.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.35 }}
            className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-3"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] font-semibold tracking-wide text-zinc-500 uppercase">
                {item.label}
              </span>
              <Check className="size-4 shrink-0 text-emerald-600" />
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span className="flex-1 text-sm font-medium text-zinc-900">
                {item.value}
              </span>
              <span className="font-mono text-xs font-semibold text-zinc-500">
                {item.score}
              </span>
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-zinc-200">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${item.score}%` }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.35 }}
                className="block h-full rounded-full bg-emerald-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-4 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm font-medium text-emerald-800"
      >
        <Zap className="size-4 shrink-0 text-emerald-600" />
        Lead calificat automat → trimis direct la Directorul de Vânzări
      </motion.div>
    </SimShell>
  );
}

/* -------------------------------------------------------------------------- */
/*                            3. RUTARE DINAMICĂ                              */
/* -------------------------------------------------------------------------- */

const ROUTES = ["Vânzări", "Tehnic Tier 3", "Facturare"];

function RoutingSim() {
  return (
    <SimShell title="Smart router" status="Latență 12 ms">
      <div className="flex flex-col items-center gap-3">
        <div className="w-full rounded-xl border border-zinc-200 bg-zinc-50 p-3 text-center text-sm text-zinc-700">
          Tichet nou: „Problemă de integrare API pe mediul de producție”
        </div>

        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sm text-zinc-400"
        >
          ↓
        </motion.span>

        <div className="grid w-full grid-cols-3 gap-2">
          {ROUTES.map((route, i) => {
            const isTarget = i === 1;

            return (
              <motion.div
                key={route}
                initial={false}
                animate={
                  isTarget
                    ? {
                        borderColor: "rgb(167 243 208)",
                        backgroundColor: "rgb(236 253 245)",
                      }
                    : {}
                }
                transition={{ duration: 0.7, delay: 0.6 }}
                className={`rounded-xl border p-2.5 text-center text-xs font-semibold ${
                  isTarget
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-zinc-200 bg-white text-zinc-400"
                }`}
              >
                {route}
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-1 text-center text-xs text-zinc-500"
        >
          Notificare trimisă inginerului de gardă pe Slack în 1,2 secunde.
        </motion.p>
      </div>
    </SimShell>
  );
}

/* -------------------------------------------------------------------------- */
/*                          4. CHATBOT DE VÂNZĂRI                             */
/* -------------------------------------------------------------------------- */

function ChatbotSim() {
  return (
    <SimShell
      title="AI sales agent · antrenat pe documentația ta"
      status="3 conversații active"
    >
      <div className="space-y-3">
        <div className="max-w-[85%] rounded-2xl rounded-bl-none border border-zinc-200 bg-zinc-50 p-3 text-sm leading-relaxed text-zinc-700">
          Bună! Cu ce te pot ajuta legat de prețuri sau de implementare?
        </div>

        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-none border border-zinc-200 bg-white p-3 text-sm leading-relaxed text-zinc-700">
          Cât durează până e funcțional sistemul de programări?
        </div>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="max-w-[90%] rounded-2xl rounded-bl-none border border-emerald-200 bg-emerald-50 p-3 text-sm leading-relaxed text-emerald-900"
        >
          Sub 48 de ore. Ne conectăm la CRM-ul și la calendarul tău actual, fără
          să schimbi infrastructura. Vrei să programăm o sesiune de calibrare?
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center gap-1.5 pl-1"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ repeat: Infinity, duration: 1.1, delay: i * 0.18 }}
              className="size-1.5 rounded-full bg-zinc-400"
            />
          ))}
          <span className="ml-1 text-[11px] text-zinc-500">
            Clientul scrie…
          </span>
        </motion.div>
      </div>
    </SimShell>
  );
}

/* -------------------------------------------------------------------------- */
/*                    5. CONTACTARE INSTANTANEE (<30 SEC)                     */
/* -------------------------------------------------------------------------- */

const TIMELINE = [
  { time: "00:00", text: "Lead completat din Google Ads sau Facebook" },
  { time: "00:05", text: "Număr validat, verificat în baza de date" },
  { time: "00:18", text: "Mesaj WhatsApp personalizat + apel automat inițiat" },
];

function InstantLeadContactSim() {
  return (
    <SimShell title="Speed-to-lead tracker" status="Reacție: 18 secunde">
      <div className="relative space-y-5 pl-6 before:absolute before:top-2 before:bottom-2 before:left-2 before:w-0.5 before:bg-zinc-200">
        {TIMELINE.map((step, i) => {
          const isLast = i === TIMELINE.length - 1;

          return (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.5 }}
              className="relative"
            >
              <span
                className={`absolute top-1 -left-6 size-2.5 rounded-full ${
                  isLast ? "bg-emerald-500" : "bg-zinc-400"
                }`}
              />
              <p className="font-mono text-[11px] font-semibold text-zinc-400">
                {step.time}
              </p>
              <p
                className={`mt-0.5 text-sm leading-relaxed ${
                  isLast ? "font-medium text-emerald-800" : "text-zinc-600"
                }`}
              >
                {step.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50/70 p-3 text-xs text-zinc-500"
      >
        Media industriei: primul răspuns după 42 de ore. Diferența o ia primul
        care răspunde.
      </motion.div>
    </SimShell>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  MODULE                                    */
/* -------------------------------------------------------------------------- */

const MODULES = [
  {
    key: "voice",
    icon: PhoneCall,
    title: "Recepție vocală AI 24/7",
    desc: "Răspunde la apeluri cu voce naturală, în română sau engleză, și introduce programarea direct în calendar.",
    sim: <VoiceAgentSim />,
  },
  {
    key: "qualify",
    icon: Filter,
    title: "Calificare inteligentă a lead-urilor",
    desc: "Filtrează automat după buget, autoritate și urgență, înainte ca echipa ta să piardă ore în apeluri inutile.",
    sim: <LeadQualificationSim />,
  },
  {
    key: "routing",
    icon: GitFork,
    title: "Rutare și dispecerizare automată",
    desc: "Direcționează tichetele, comenzile și mesajele către persoana potrivită, în mai puțin de o secundă.",
    sim: <RoutingSim />,
  },
  {
    key: "chatbot",
    icon: Bot,
    title: "Chatbot de vânzări, nu de suport",
    desc: "Asistent instruit pe toată baza ta de cunoștințe, care răspunde la obiecții și transformă vizitatorii în clienți.",
    sim: <ChatbotSim />,
  },
  {
    key: "speed",
    icon: Zap,
    title: "Contactare instantanee, sub 30 de secunde",
    desc: "Când cineva completează un formular, sistemul îl sună sau îi scrie pe WhatsApp în timp ce e încă pe ecran.",
    sim: <InstantLeadContactSim />,
  },
];

export function Modules() {
  const [active, setActive] = useState(0);

  return (
    <Section id="module" className="bg-zinc-50/50">
      <SectionIntro
        eyebrow="Arhitectura soluției"
        title="Ce se poate automatiza, concret, în afacerea ta"
        description="Alege un modul din stânga și vezi fluxul de execuție în timp real. Fiecare modul funcționează și singur, dar împreună acoperă tot traseul dintre un client interesat și o întâlnire confirmată."
      />

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="space-y-3">
          {MODULES.map((module, index) => {
            const Icon = module.icon;
            const isActive = active === index;

            return (
              <motion.button
                key={module.key}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all ${
                  isActive
                    ? "border-zinc-900 bg-white shadow-[0_18px_40px_-28px_rgba(24,24,27,0.45)]"
                    : "border-zinc-200 bg-white/60 hover:border-zinc-300 hover:bg-white"
                }`}
              >
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                    isActive
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-zinc-200 bg-zinc-50 text-zinc-500"
                  }`}
                >
                  <Icon className="size-5" />
                </span>

                <span className="min-w-0">
                  <span
                    className={`block text-sm font-semibold ${
                      isActive ? "text-zinc-900" : "text-zinc-700"
                    }`}
                  >
                    {module.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-zinc-500">
                    {module.desc}
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="lg:sticky lg:top-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={MODULES[active].key}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              {MODULES[active].sim}
            </motion.div>
          </AnimatePresence>

          <p className="mt-4 text-center text-xs text-zinc-500">
            Simulare. Fluxul real se configurează pe uneltele tale.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
        >
          Vezi care modul se potrivește afacerii tale
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
        <span className="text-sm text-zinc-500">
          Îți spunem sincer și dacă răspunsul e „niciunul, încă”.
        </span>
      </motion.div>
    </Section>
  );
}
