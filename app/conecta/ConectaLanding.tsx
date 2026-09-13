"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  CheckSquare,
  Contact,
  Handshake,
  Sparkles,
  X,
} from "lucide-react";

import { Layout } from "../components/Layout";
import { ConectaDemo, type ConectaView } from "./ConectaDemo";

const FEATURES: {
  id: ConectaView;
  title: string;
  eyebrow: string;
  body: string;
  points: string[];
  icon: typeof Contact;
}[] = [
  {
    id: "contacts",
    eyebrow: "Contacte",
    title: "Toți oamenii cu care vorbești, într-o singură fișă.",
    body: "Caută după nume, rol sau companie. Deschide istoricul, tag-urile și următorul pas fără să sari între Excel, WhatsApp și mail.",
    points: [
      "Fișă cu email, telefon, note și ultimul touch",
      "Favorite pentru lead-urile fierbinți",
      "Legătură directă către rezumatul AI",
    ],
    icon: Contact,
  },
  {
    id: "deals",
    eyebrow: "Oferte",
    title: "Pipeline vizibil. Mută etapa cu un click.",
    body: "Vezi valoarea deschisă, cine e în ofertă și ce s-a câștigat. Etapele se actualizează live, ca în produsul real.",
    points: [
      "Kanban Lead → Calificat → Ofertă → Câștigat",
      "Valoare și probabilitate pe fiecare deal",
      "Owner și companie legate de contact",
    ],
    icon: Handshake,
  },
  {
    id: "calendar",
    eyebrow: "Calendar",
    title: "Apeluri, demo-uri și follow-up-uri pe aceeași săptămână.",
    body: "Echipa vede ce urmează, nu ce s-a pierdut într-un thread. Click pe un eveniment ca să-i vezi tipul și ora.",
    points: [
      "Vedere săptămânală pentru vânzări",
      "Apeluri, întâlniri și follow-up-uri colorate",
      "Context gata de pregătit înainte de meeting",
    ],
    icon: CalendarDays,
  },
  {
    id: "ai",
    eyebrow: "AI",
    title: "Un asistent care citește CRM-ul, nu un chatbot generic.",
    body: "Întreabă cât valorează pipeline-ul, ce ai mâine sau cine e fierbinte. Răspunsurile vin din contacte, oferte și task-uri.",
    points: [
      "Rezumate de deal și next step",
      "Sugestii din calendarul săptămânii",
      "Prompts gata de folosit în demo",
    ],
    icon: Sparkles,
  },
  {
    id: "company",
    eyebrow: "Companii",
    title: "Contul, nu doar persoana.",
    body: "Industrie, oraș, dimensiune și cine e owner-ul intern. Contactele se leagă de firmă, ca să nu vinzi de două ori același client.",
    points: [
      "Fișă de companie cu context comercial",
      "Contacte asociate vizibile instant",
      "Owner intern pentru predare între colegi",
    ],
    icon: Building2,
  },
  {
    id: "tasks",
    eyebrow: "Task-uri",
    title: "Ce trebuie făcut azi, bifat din CRM.",
    body: "Adaugă, bifează sau șterge. Fiecare task e legat de un om, o firmă sau o ofertă — nu de un to-do separat.",
    points: [
      "Listă de echipă, nu inbox personal",
      "Termen, owner și relație cu deal-ul",
      "Adaugă un task nou chiar din demo",
    ],
    icon: CheckSquare,
  },
];

export function ConectaLanding() {
  const [view, setView] = useState<ConectaView>("contacts");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDemoView = (next: ConectaView) => {
    setView(next);
    document
      .getElementById("conecta-hero")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans text-zinc-950 antialiased">
      <main>
        <Layout>
          <section
            id="conecta-hero"
            className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-16"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top_left,rgba(79,70,229,0.12),transparent_55%)]" />

            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
              <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-indigo-700">
                  <Bot className="h-3.5 w-3.5" />
                  CRM cu AI · Conecta
                </span>
                <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                  Tot ce ține de clienți, oferte și echipă — plus un AI care
                  chiar citește datele.
                </h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Conecta e CRM-ul pentru echipe care vând. Contacte, companii,
                  pipeline, calendar, task-uri și un asistent care rezumă
                  următorul pas. Încearcă demo-ul din dreapta — e interactiv.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
                  >
                    Cere acces la Conecta
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                  >
                    Vezi funcțiile
                  </a>
                </div>
                <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-zinc-200 pt-6 text-left">
                  <div>
                    <p className="text-lg font-black">6</p>
                    <p className="text-[11px] font-medium text-zinc-500">
                      Module în demo
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-black">1 loc</p>
                    <p className="text-[11px] font-medium text-zinc-500">
                      Clienți + oferte
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-black">AI</p>
                    <p className="text-[11px] font-medium text-zinc-500">
                      Pe datele tale
                    </p>
                  </div>
                </div>
              </div>

              <ConectaDemo view={view} onViewChange={setView} />
            </div>
          </section>
        </Layout>

        <section className="border-y border-zinc-200 bg-white py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-6 lg:px-8">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const active = view === feature.id;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => openDemoView(feature.id)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    active
                      ? "border-indigo-300 bg-indigo-50"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <Icon className="mb-2 h-5 w-5 text-indigo-600" />
                  <p className="text-sm font-bold text-zinc-900">
                    {feature.eyebrow}
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-500">
                    Deschide în demo
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section id="features" className="py-20">
          <Layout>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Funcții
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Fiecare ecran din sidebar e un flux real de lucru
              </h2>
              <p className="mt-3 text-sm text-zinc-600 sm:text-base">
                Nu e un screenshot. Modulele de mai jos sunt aceleași pe care le
                poți deschide în demo-ul din hero.
              </p>
            </div>

            <div className="space-y-8">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.id}
                    className={`grid items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-10 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-700">
                        <Icon className="h-3.5 w-3.5" />
                        {feature.eyebrow}
                      </span>
                      <h3 className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {feature.body}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {feature.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-zinc-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <button
                        type="button"
                        onClick={() => openDemoView(feature.id)}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-indigo-500"
                      >
                        Încearcă {feature.eyebrow.toLowerCase()} în demo
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    <FeaturePreview
                      featureId={feature.id}
                      onOpen={() => openDemoView(feature.id)}
                    />
                  </article>
                );
              })}
            </div>
          </Layout>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-950 py-20 text-white">
          <Layout>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Vrei Conecta pe datele echipei tale?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Configurăm contacte, pipeline, calendar și asistentul AI pe
                fluxul vostru. Un apel de 15 minute e suficient ca să vedem dacă
                se potrivește.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-sm font-black uppercase tracking-wide text-white hover:bg-indigo-400"
              >
                Programează un demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Layout>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Conecta · petruco digital. CRM cu AI pentru
        echipe.
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-zinc-400 hover:text-zinc-700"
              aria-label="Închide"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Acces Conecta
            </p>
            <h3 className="mt-1 text-2xl font-black text-zinc-950">
              Cere un demo ghidat
            </h3>
            <p className="mt-2 text-xs text-zinc-500">
              Îți arătăm contacte, oferte, calendar și AI pe un flux apropiat de
              al tău.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-700">
                  Nume
                </label>
                <input
                  required
                  placeholder="Numele tău"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-700">
                  Telefon sau email
                </label>
                <input
                  required
                  placeholder="07xx sau email"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-bold text-zinc-700">
                  Echipă / firmă
                </label>
                <input
                  required
                  placeholder="ex: echipă de 8 vânzători"
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 py-3.5 text-sm font-black uppercase tracking-wide text-white hover:bg-indigo-500"
              >
                Vreau demo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturePreview({
  featureId,
  onOpen,
}: {
  featureId: ConectaView;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-left shadow-inner"
    >
      <div className="mb-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="ml-2 text-[10px] font-medium text-zinc-400">
          Preview · click ca să deschizi demo-ul
        </span>
      </div>
      {featureId === "contacts" && (
        <div className="space-y-2">
          {["Elena Popescu · Nordic Coffee", "Dr. Radu Neagu · Helix", "Mara Ionescu · Orbit"].map(
            (row) => (
              <div
                key={row}
                className="rounded-xl bg-white px-3 py-2 text-xs font-medium text-zinc-800 ring-1 ring-zinc-200"
              >
                {row}
              </div>
            ),
          )}
        </div>
      )}
      {featureId === "deals" && (
        <div className="grid grid-cols-2 gap-2">
          {["Lead", "Calificat", "Ofertă", "Câștigat"].map((col) => (
            <div
              key={col}
              className="rounded-xl bg-white p-2 ring-1 ring-zinc-200"
            >
              <p className="text-[10px] font-bold uppercase text-zinc-400">
                {col}
              </p>
              <div className="mt-2 h-10 rounded-lg bg-indigo-50" />
            </div>
          ))}
        </div>
      )}
      {featureId === "calendar" && (
        <div className="grid grid-cols-5 gap-1">
          {["L", "M", "M", "J", "V"].map((d, i) => (
            <div key={`${d}-${i}`} className="rounded-lg bg-white p-2 ring-1 ring-zinc-200">
              <p className="text-center text-[10px] font-bold text-zinc-400">{d}</p>
              <div
                className={`mt-2 rounded px-1 py-1 text-[9px] ${i === 1 ? "bg-indigo-600 text-white" : "bg-sky-100 text-sky-900"}`}
              >
                11:00
              </div>
            </div>
          ))}
        </div>
      )}
      {featureId === "ai" && (
        <div className="space-y-2">
          <div className="max-w-[85%] rounded-2xl bg-zinc-100 px-3 py-2 text-[11px] text-zinc-700">
            Pipeline-ul deschis este 46.100 lei. Cea mai avansată ofertă: CRM +
            AI inbox.
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl bg-indigo-600 px-3 py-2 text-[11px] text-white">
            Cât valorează pipeline-ul?
          </div>
        </div>
      )}
      {featureId === "company" && (
        <div className="rounded-xl bg-white p-4 ring-1 ring-zinc-200">
          <p className="text-sm font-bold">Helix Clinic</p>
          <p className="mt-1 text-[11px] text-zinc-500">
            Sănătate · București · 42 oameni
          </p>
          <p className="mt-3 text-[11px] text-zinc-600">
            Owner intern: Ioana R. · 1 contact principal
          </p>
        </div>
      )}
      {featureId === "tasks" && (
        <div className="space-y-2">
          {[
            "Trimite oferta către Elena",
            "Demo live Helix Clinic",
            "Actualizează etapa Orbit",
          ].map((t, i) => (
            <div
              key={t}
              className={`rounded-xl bg-white px-3 py-2 text-xs ring-1 ring-zinc-200 ${i === 2 ? "text-zinc-400 line-through" : "text-zinc-800"}`}
            >
              {t}
            </div>
          ))}
        </div>
      )}
    </button>
  );
}
