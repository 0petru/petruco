"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PhoneCall,
  Bot,
  Filter,
  GitFork,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Play,
  Check,
  Building2,
  ChevronRight,
  TrendingUp,
  Clock,
  Send,
} from "lucide-react";

// --- SIMULĂRI ANIMATE PENTRU FIECARE MODUL AI ---

// 1. Simulare Recepție Vocală AI
function VoiceAgentSim() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-sm font-mono text-zinc-300 shadow-xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider">
            Apel în curs: +40 722 *** 119
          </span>
        </div>
        <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
          00:24 • Live AI
        </span>
      </div>

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-800/60 p-3 rounded-lg border border-zinc-700/50"
        >
          <span className="text-xs text-zinc-400 block font-sans font-bold">
            Client:
          </span>
          „Bună ziua, aș dori o programare urgentă pentru o consultație joi la
          ora 14:00.”
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="bg-emerald-950/30 p-3 rounded-lg border border-emerald-800/40 text-emerald-100"
        >
          <span className="text-xs text-emerald-400 block font-sans font-bold flex items-center gap-1">
            <Bot className="w-3.5 h-3.5" /> Agent Vocal AI (Sinteză 280ms):
          </span>
          „Desigur! Am verificat calendarul, joi la 14:00 este disponibil. V-am
          rezervat intervalul și v-am trimis confirmarea prin SMS.”
        </motion.div>
      </div>

      {/* Undă audio animată */}
      <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-center gap-1 h-8">
        {[40, 70, 30, 90, 60, 100, 45, 80, 20, 95, 50, 75, 30, 60].map(
          (h, i) => (
            <motion.span
              key={i}
              animate={{ height: ["20%", `${h}%`, "20%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.08,
                ease: "easeInOut",
              }}
              className="w-1 bg-emerald-400/80 rounded-full"
              style={{ height: `${h}%` }}
            />
          ),
        )}
      </div>
    </div>
  );
}

// 2. Simulare Calificare Lead-uri
function LeadQualificationSim() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-sm shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
        <span className="text-xs font-mono text-zinc-400 uppercase">
          Lead Scoring Engine
        </span>
        <span className="text-xs bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded border border-amber-400/20 font-mono">
          Scor: 94/100 (Tier A)
        </span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center bg-zinc-800/40 p-2.5 rounded border border-zinc-700/40"
        >
          <span className="text-zinc-400">Buget declarat:</span>
          <span className="text-zinc-100 font-bold">€5,000 - €10,000/lună</span>
          <Check className="w-4 h-4 text-emerald-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex justify-between items-center bg-zinc-800/40 p-2.5 rounded border border-zinc-700/40"
        >
          <span className="text-zinc-400">Dimensiune companie:</span>
          <span className="text-zinc-100 font-bold">25-50 angajați</span>
          <Check className="w-4 h-4 text-emerald-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="flex justify-between items-center bg-zinc-800/40 p-2.5 rounded border border-zinc-700/40"
        >
          <span className="text-zinc-400">Timp de decizie:</span>
          <span className="text-zinc-100 font-bold">Imediat (&lt; 7 zile)</span>
          <Check className="w-4 h-4 text-emerald-400" />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-4 p-3 bg-emerald-950/30 border border-emerald-600/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2"
      >
        <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Lead Calificat Automat ➔ Trimis direct la Director Vânzări</span>
      </motion.div>
    </div>
  );
}

// 3. Simulare Rutare Inteligentă (Routing)
function RoutingSim() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-xs font-mono shadow-xl relative">
      <div className="text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2 flex justify-between">
        <span>Smart Router Dispatch</span>
        <span className="text-zinc-500">Latency: 12ms</span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-lg text-zinc-100 text-center w-full">
          Incoming Ticket: „Problemă integrare API pe mediul de producție”
        </div>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-zinc-500 text-base"
        >
          ↓
        </motion.div>

        <div className="w-full grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800 text-zinc-600">
            Vânzări
          </div>
          <motion.div
            initial={{ borderColor: "rgb(39 39 42)" }}
            animate={{
              borderColor: "rgb(16 185 129)",
              backgroundColor: "rgba(6, 78, 59, 0.4)",
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-2 rounded border text-emerald-300 font-bold shadow-md shadow-emerald-900/20"
          >
            Senior Tech Tier 3
          </motion.div>
          <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800 text-zinc-600">
            Billing
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-zinc-400 text-[11px] mt-2 text-center"
        >
          ➔ Notificare trimisă pe Slack/Teams inginerului de gardă în 1.2
          secunde.
        </motion.p>
      </div>
    </div>
  );
}

// 4. Simulare Chatbot Conversațional de Conversie
function ChatbotSim() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-xs font-sans shadow-xl">
      <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
        <span className="font-bold text-zinc-200">
          AI Sales Agent • Antrenat pe documentația ta
        </span>
      </div>

      <div className="space-y-3">
        <div className="bg-zinc-800 text-zinc-300 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
          Bună! Cu ce informație legată de prețuri sau implementare te pot ajuta
          astăzi?
        </div>
        <div className="bg-emerald-900/40 text-emerald-100 border border-emerald-700/30 p-3 rounded-2xl rounded-tr-none ml-auto max-w-[85%]">
          Cât durează instalarea sistemului de programări?
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-zinc-800 text-zinc-300 p-3 rounded-2xl rounded-tl-none max-w-[85%]"
        >
          Durează sub 48 de ore. Ne conectăm direct la CRM-ul și calendarul tău
          curent fără să schimbi infrastructura. Vrei să programăm o sesiune de
          calibrare?
        </motion.div>
      </div>
    </div>
  );
}

// 5. Simulare Contactare Instantanee a Lead-urilor (<30s)
function InstantLeadContactSim() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-xs font-mono shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
        <span className="text-zinc-400 uppercase">Speed-to-Lead Tracker</span>
        <span className="text-emerald-400 font-bold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60">
          Timp de reacție: 18 secunde
        </span>
      </div>

      <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-800">
        <div className="relative">
          <span className="absolute -left-6 top-0.5 w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
          <p className="text-zinc-400">
            00:00 - Lead completat pe Facebook / Google Ads
          </p>
        </div>
        <div className="relative">
          <span className="absolute -left-6 top-0.5 w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
          <p className="text-zinc-400">
            00:05 - Validare număr telefon & verificare bază de date
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="relative"
        >
          <span className="absolute -left-6 top-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
          <p className="text-emerald-300 font-bold">
            00:18 - WhatsApp personalizat trimis + apel automat inițiat
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// --- PAGINA PRINCIPALĂ ---
export default function LandingPageAI() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      id: 0,
      title: "Recepție Vocală AI 24/7",
      desc: "Răspunde instantaneu la apeluri, vorbește natural în limba română/engleză și introduce programările direct în calendar.",
      icon: PhoneCall,
      component: <VoiceAgentSim />,
    },
    {
      id: 1,
      title: "Calificare Inteligentă a Lead-urilor",
      desc: "Filtrează automat oportunitățile după buget, autoritate și urgență înainte ca echipa ta să piardă ore în apeluri.",
      icon: Filter,
      component: <LeadQualificationSim />,
    },
    {
      id: 2,
      title: "Rutare & Dispecerizare Dinamică",
      desc: "Direcționează tichetele, comenzile sau mesajele către persoana sau departamentul potrivit în sub o secundă.",
      icon: GitFork,
      component: <RoutingSim />,
    },
    {
      id: 3,
      title: "Chatboți Conversaționali de Vânzare",
      desc: "Asistenți instruiți pe toată baza ta de cunoștințe care răspund la obiecții și convertesc vizitatorii în clienți.",
      icon: Bot,
      component: <ChatbotSim />,
    },
    {
      id: 4,
      title: "Contactare Instantanee (<30 secunde)",
      desc: "Când un client completează un formular, sistemul îl sună sau îi scrie pe WhatsApp în timp ce se află încă pe ecran.",
      icon: Zap,
      component: <InstantLeadContactSim />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
      {/* Top Banner Garanție */}
      <div className="bg-zinc-900/90 border-b border-zinc-800/80 text-zinc-300 text-xs py-2.5 px-4 text-center">
        ⚡{" "}
        <span className="text-emerald-400 font-semibold">
          Garanție Contractuală:
        </span>{" "}
        Sistem complet integrat în 7 zile sau ai 100% din bani înapoi. Fără
        riscuri.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-zinc-800/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-lg tracking-tight text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span>
              NEXUS<span className="text-emerald-400">.AI</span>
            </span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
          >
            Audit Gratuit de Automatizare
          </button>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="px-6 pt-20 pb-20 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Automatizare de Vânzări & Operațiuni pentru Afaceri</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-6 text-white"
          >
            Înlocuiește munca manuală cu{" "}
            <span className="text-emerald-400">agenți AI</span> care vând și
            răspund non-stop.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Fiecare minut în care nu răspunzi la un apel sau la un lead este un
            client pierdut în favoarea concurenței. Construim sisteme autonome
            de calificare, apelare și suport.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              Cere o simulare pentru afacerea ta →
            </button>
            <a
              href="#module"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-semibold text-sm rounded-xl transition-all"
            >
              Vezi exemplele live
            </a>
          </motion.div>
        </section>

        {/* SECȚIUNEA INTERACTIVĂ DE EXEMPLE / MODULE */}
        <section
          id="module"
          className="py-20 px-6 max-w-6xl mx-auto border-t border-zinc-900"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
              Arhitectura Soluției
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
              Cum funcționează automatizările în practică
            </h2>
            <p className="text-zinc-400 text-sm mt-3">
              Alege un modul de mai jos pentru a vedea fluxul de execuție în
              timp real.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Lista Butoanelor / Tab-uri */}
            <div className="lg:col-span-5 space-y-3">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = activeTab === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-zinc-900 border-emerald-500/50 shadow-md shadow-emerald-950/30"
                        : "bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/60 text-zinc-400"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg shrink-0 ${
                        isSelected
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-zinc-800 text-zinc-400"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-sm ${isSelected ? "text-white" : "text-zinc-300"}`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Ecranul cu Animația Activă */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    {features[activeTab].component}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* SECȚIUNEA DE IMPACT / CIFRE */}
        <section className="py-16 px-6 bg-zinc-950 border-y border-zinc-900">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-black text-white font-mono">
                &lt; 30 sec
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1 block">
                Timp de contactare lead
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                100%
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1 block">
                Apeluri preluate (24/7)
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-black text-white font-mono">
                0 Ore
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1 block">
                Muncă manuală de rutină
              </span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                3.4x
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider mt-1 block">
                Creștere rată de conversie
              </span>
            </div>
          </div>
        </section>

        {/* SECȚIUNEA DE OFERTĂ & GARANȚIE */}
        <section className="py-20 px-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-emerald-500/40 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/60 border border-emerald-800/40 px-3 py-1 rounded-full mb-4">
                <ShieldCheck className="w-4 h-4" /> Garanție ROI Fără Risc
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Implementare Completă în 7 Zile sau Nu Plătești Nimic.
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                Construim, testăm și integrăm agenții AI direct în afacerea ta.
                Dacă în primele 30 de zile de la lansare sistemul nu îți
                economisește cel puțin 20 de ore de muncă sau nu generează
                rezultate măsurabile, îți returnăm{" "}
                <span className="text-emerald-400 font-bold">
                  100% din onorariul de configurare
                </span>
                .
              </p>

              <div className="grid sm:grid-cols-2 gap-3 text-left mb-8 max-w-lg mx-auto font-mono text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Configurare completă Done-For-You</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Integrare WhatsApp, CRM & Calendar</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instruire personalizată pe datele tale</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garanție de funcționare 99.9%</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm uppercase tracking-wider rounded-xl transition shadow-xl cursor-pointer"
              >
                Solicită Auditul Gratuit de 15 Min →
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © 2026 Nexus AI Systems. Automatizări inteligente pentru afaceri
        performante.
      </footer>

      {/* MODAL AUDIT STRATEGIC */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 cursor-pointer"
            >
              ✕
            </button>

            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
              Pasul 1
            </span>
            <h3 className="text-2xl font-black text-white mt-1 mb-2">
              Audit Gratuit de Automatizare
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Identificăm în 15 minute ce procese din afacerea ta pot fi
              delegate către AI pentru a opri pierderea de lead-uri.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Date recepționate! Te contactăm în cel mai scurt timp.");
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Nume și Prenume
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Andrei Ionescu"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Număr de Telefon
                </label>
                <input
                  type="tel"
                  required
                  placeholder="ex: 0722 000 000"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Domeniu de activitate / Website
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Clinică Medicală, Imobiliare, E-commerce..."
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg cursor-pointer mt-2"
              >
                Trimite Solicitarea de Audit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
