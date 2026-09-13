"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  CalendarDays,
  Check,
  CheckSquare,
  Circle,
  Contact,
  Handshake,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Trash2,
  UserRound,
} from "lucide-react";

export type ConectaView =
  | "contacts"
  | "deals"
  | "calendar"
  | "ai"
  | "company"
  | "tasks";

type ContactRecord = {
  id: string;
  name: string;
  role: string;
  companyId: string;
  email: string;
  phone: string;
  tags: string[];
  lastTouch: string;
  notes: string;
};

type CompanyRecord = {
  id: string;
  name: string;
  industry: string;
  city: string;
  employees: string;
  owner: string;
};

type DealRecord = {
  id: string;
  title: string;
  companyId: string;
  contactId: string;
  value: number;
  stage: DealStage;
  probability: number;
};

type DealStage = "lead" | "qualified" | "proposal" | "won";

type TaskRecord = {
  id: string;
  title: string;
  due: string;
  owner: string;
  done: boolean;
  related: string;
};

type CalendarEvent = {
  id: string;
  day: number;
  time: string;
  title: string;
  type: "call" | "meeting" | "followup";
};

const STAGES: { id: DealStage; label: string }[] = [
  { id: "lead", label: "Lead" },
  { id: "qualified", label: "Calificat" },
  { id: "proposal", label: "Ofertă" },
  { id: "won", label: "Câștigat" },
];

const NAV: {
  id: ConectaView;
  label: string;
  icon: typeof Contact;
}[] = [
  { id: "contacts", label: "Contacte", icon: Contact },
  { id: "deals", label: "Oferte", icon: Handshake },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "ai", label: "AI", icon: Sparkles },
  { id: "company", label: "Companii", icon: Building2 },
  { id: "tasks", label: "Task-uri", icon: CheckSquare },
];

const COMPANIES: CompanyRecord[] = [
  {
    id: "nordic",
    name: "Nordic Coffee",
    industry: "HoReCa",
    city: "Cluj-Napoca",
    employees: "18",
    owner: "Andrei M.",
  },
  {
    id: "helix",
    name: "Helix Clinic",
    industry: "Sănătate",
    city: "București",
    employees: "42",
    owner: "Ioana R.",
  },
  {
    id: "orbit",
    name: "Orbit Logistics",
    industry: "Transport",
    city: "Timișoara",
    employees: "60",
    owner: "Mihai P.",
  },
  {
    id: "lumen",
    name: "Lumen Studio",
    industry: "Design",
    city: "Brașov",
    employees: "9",
    owner: "Andrei M.",
  },
];

const INITIAL_CONTACTS: ContactRecord[] = [
  {
    id: "c1",
    name: "Elena Popescu",
    role: "Director comercial",
    companyId: "nordic",
    email: "elena@nordic.ro",
    phone: "0721 445 190",
    tags: ["hot", "retail"],
    lastTouch: "Ieri",
    notes: "Vrea automatizare lead-uri din Instagram. Decizie în 10 zile.",
  },
  {
    id: "c2",
    name: "Dr. Radu Neagu",
    role: "Fondator",
    companyId: "helix",
    email: "radu@helixclinic.ro",
    phone: "0733 201 884",
    tags: ["healthcare"],
    lastTouch: "Azi",
    notes: "Caută CRM + programări. Preferă demo live, nu prezentare PDF.",
  },
  {
    id: "c3",
    name: "Mara Ionescu",
    role: "Operations lead",
    companyId: "orbit",
    email: "mara@orbitlog.ro",
    phone: "0744 118 002",
    tags: ["ops", "enterprise"],
    lastTouch: "3 zile",
    notes: "Pipeline mare, dar follow-up-urile se pierd între WhatsApp și Excel.",
  },
  {
    id: "c4",
    name: "Vlad Serban",
    role: "Creative director",
    companyId: "lumen",
    email: "vlad@lumen.studio",
    phone: "0755 909 441",
    tags: ["agency"],
    lastTouch: "Săptămâna trecută",
    notes: "Echipă mică. Vrea task-uri legate de fiecare proiect client.",
  },
];

const INITIAL_DEALS: DealRecord[] = [
  {
    id: "d1",
    title: "CRM + AI inbox",
    companyId: "nordic",
    contactId: "c1",
    value: 14800,
    stage: "proposal",
    probability: 70,
  },
  {
    id: "d2",
    title: "Programări + contacte",
    companyId: "helix",
    contactId: "c2",
    value: 9200,
    stage: "qualified",
    probability: 55,
  },
  {
    id: "d3",
    title: "Pipeline operațiuni",
    companyId: "orbit",
    contactId: "c3",
    value: 22100,
    stage: "lead",
    probability: 25,
  },
  {
    id: "d4",
    title: "Workspace studio",
    companyId: "lumen",
    contactId: "c4",
    value: 4800,
    stage: "won",
    probability: 100,
  },
];

const INITIAL_TASKS: TaskRecord[] = [
  {
    id: "t1",
    title: "Trimite oferta către Elena",
    due: "Azi, 16:00",
    owner: "Andrei",
    done: false,
    related: "Nordic Coffee",
  },
  {
    id: "t2",
    title: "Demo live Helix Clinic",
    due: "Mâine, 11:00",
    owner: "Ioana",
    done: false,
    related: "Helix Clinic",
  },
  {
    id: "t3",
    title: "Actualizează etapa Orbit",
    due: "Miercuri",
    owner: "Mihai",
    done: true,
    related: "Orbit Logistics",
  },
];

const EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    day: 1,
    time: "09:30",
    title: "Stand-up echipă",
    type: "meeting",
  },
  {
    id: "e2",
    day: 1,
    time: "11:00",
    title: "Demo Helix",
    type: "call",
  },
  {
    id: "e3",
    day: 2,
    time: "14:00",
    title: "Follow-up Elena",
    type: "followup",
  },
  {
    id: "e4",
    day: 3,
    time: "16:30",
    title: "QBR Orbit",
    type: "meeting",
  },
  {
    id: "e5",
    day: 4,
    time: "10:00",
    title: "Onboarding Lumen",
    type: "call",
  },
];

const WEEKDAYS = ["Lun", "Mar", "Mie", "Joi", "Vin"];

function companyName(id: string) {
  return COMPANIES.find((c) => c.id === id)?.name ?? "—";
}

function formatLei(value: number) {
  return `${value.toLocaleString("ro-RO")} lei`;
}

type AiMessage = { role: "user" | "assistant"; text: string };

function aiReply(prompt: string, deals: DealRecord[]) {
  const q = prompt.toLowerCase();
  const pipeline = deals
    .filter((d) => d.stage !== "won")
    .reduce((sum, d) => sum + d.value, 0);
  const hot = deals.find((d) => d.stage === "proposal");

  if (q.includes("pipeline") || q.includes("valoare") || q.includes("oferte")) {
    return `Pipeline-ul deschis este ${formatLei(pipeline)}. Cea mai avansată ofertă: ${hot ? `${hot.title} (${companyName(hot.companyId)}, ${hot.probability}%)` : "niciuna în ofertă"}.`;
  }
  if (q.includes("elena") || q.includes("nordic")) {
    return "Elena Popescu (Nordic Coffee) e lead fierbinte. Ultimul touch: ieri. Următorul pas: trimite oferta azi la 16:00 și confirmă apelul de follow-up marți 14:00.";
  }
  if (q.includes("calendar") || q.includes("mâine") || q.includes("maine")) {
    return "Mâine ai Demo Helix la 11:00. Pregătește fluxul de programări + importul de contacte. Dr. Radu Neagu preferă demo live, nu PDF.";
  }
  if (q.includes("task") || q.includes("azi")) {
    return "Task-uri deschise azi: 1) Trimite oferta către Elena. 2) Pregătește demo-ul Helix. Pot muta follow-up-ul Orbit pe miercuri dacă vrei.";
  }
  return "Am citit contactele, ofertele și calendarul. Întreabă-mă cine e fierbinte, ce valoare are pipeline-ul sau ce urmează mâine — îți răspund din datele din Conecta.";
}

interface ConectaDemoProps {
  view: ConectaView;
  onViewChange: (view: ConectaView) => void;
}

export function ConectaDemo({ view, onViewChange }: ConectaDemoProps) {
  const contacts = INITIAL_CONTACTS;
  const [selectedContactId, setSelectedContactId] = useState("c1");
  const [query, setQuery] = useState("");
  const [starred, setStarred] = useState<Record<string, boolean>>({ c1: true });
  const [deals, setDeals] = useState(INITIAL_DEALS);
  const [selectedDealId, setSelectedDealId] = useState("d1");
  const [selectedCompanyId, setSelectedCompanyId] = useState("nordic");
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");
  const [selectedEventId, setSelectedEventId] = useState("e2");
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState<AiMessage[]>([
    {
      role: "assistant",
      text: "Salut. Sunt asistentul Conecta. Pot rezuma pipeline-ul, pregăti un follow-up sau scoate următorul task din calendar.",
    },
  ]);

  const selectedContact = contacts.find((c) => c.id === selectedContactId);
  const selectedDeal = deals.find((d) => d.id === selectedDealId);
  const selectedCompany = COMPANIES.find((c) => c.id === selectedCompanyId);
  const selectedEvent = EVENTS.find((e) => e.id === selectedEventId);

  const filteredContacts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        companyName(c.companyId).toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q),
    );
  }, [contacts, query]);

  const openPipeline = deals
    .filter((d) => d.stage !== "won")
    .reduce((sum, d) => sum + d.value, 0);

  const sendAi = (text: string) => {
    const prompt = text.trim();
    if (!prompt) return;
    setAiMessages((prev) => [
      ...prev,
      { role: "user", text: prompt },
      { role: "assistant", text: aiReply(prompt, deals) },
    ]);
    setAiInput("");
  };

  return (
    <div
      id="conecta-demo"
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_24px_80px_-24px_rgba(15,23,42,0.45)]"
    >
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[11px] text-zinc-500 ring-1 ring-zinc-200">
          app.conecta.ro / {NAV.find((n) => n.id === view)?.label.toLowerCase()}
        </div>
      </div>

      <div className="grid h-[540px] grid-cols-[72px_minmax(0,1fr)] sm:grid-cols-[148px_minmax(0,1fr)]">
        <aside className="flex flex-col border-r border-zinc-200 bg-[#0F172A] text-zinc-300">
          <div className="flex items-center gap-2 px-3 py-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-xs font-black text-white">
              C
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-bold leading-none text-white">
                Conecta
              </p>
              <p className="mt-1 text-[10px] text-zinc-400">CRM + AI</p>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-0.5 px-1.5">
            {NAV.map((item) => {
              const Icon = item.icon;
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onViewChange(item.id)}
                  className={`flex items-center gap-2 rounded-lg px-2 py-2 text-left text-[11px] font-medium transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="hidden border-t border-white/10 px-3 py-3 sm:block">
            <p className="text-[10px] text-zinc-500">Pipeline deschis</p>
            <p className="text-xs font-semibold text-white">
              {formatLei(openPipeline)}
            </p>
          </div>
        </aside>

        <div className="min-w-0 bg-zinc-50">
          {view === "contacts" && selectedContact && (
            <div className="grid h-full grid-cols-1 md:grid-cols-[minmax(0,1fr)_210px]">
              <div className="flex min-w-0 flex-col">
                <div className="flex items-center gap-2 border-b border-zinc-200 bg-white px-3 py-2">
                  <Search className="h-3.5 w-3.5 text-zinc-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Caută contact sau companie"
                    className="w-full bg-transparent text-xs outline-none placeholder:text-zinc-400"
                  />
                </div>
                <ul className="flex-1 overflow-y-auto p-2">
                  {filteredContacts.map((contact) => (
                    <li key={contact.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedContactId(contact.id)}
                        className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                          selectedContactId === contact.id
                            ? "bg-white ring-1 ring-indigo-200 shadow-sm"
                            : "hover:bg-white/80"
                        }`}
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-[11px] font-bold text-indigo-700">
                          {contact.name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-xs font-semibold text-zinc-900">
                            {contact.name}
                          </p>
                          <p className="truncate text-[11px] text-zinc-500">
                            {contact.role} · {companyName(contact.companyId)}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setStarred((prev) => ({
                              ...prev,
                              [contact.id]: !prev[contact.id],
                            }));
                          }}
                          className="text-zinc-300 hover:text-amber-400"
                          aria-label="Marchează favorit"
                        >
                          <Star
                            className={`h-3.5 w-3.5 ${starred[contact.id] ? "fill-amber-400 text-amber-400" : ""}`}
                          />
                        </button>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="hidden border-l border-zinc-200 bg-white p-3 md:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Fișă contact
                </p>
                <h3 className="mt-2 text-sm font-bold text-zinc-950">
                  {selectedContact.name}
                </h3>
                <p className="text-[11px] text-zinc-500">
                  {selectedContact.role}
                </p>
                <dl className="mt-3 space-y-2 text-[11px]">
                  <div>
                    <dt className="text-zinc-400">Companie</dt>
                    <dd className="font-medium text-zinc-800">
                      {companyName(selectedContact.companyId)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Email</dt>
                    <dd className="font-medium text-zinc-800">
                      {selectedContact.email}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Telefon</dt>
                    <dd className="font-medium text-zinc-800">
                      {selectedContact.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Ultimul touch</dt>
                    <dd className="font-medium text-zinc-800">
                      {selectedContact.lastTouch}
                    </dd>
                  </div>
                </dl>
                <div className="mt-3 flex flex-wrap gap-1">
                  {selectedContact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-zinc-600">
                  {selectedContact.notes}
                </p>
                <button
                  type="button"
                  onClick={() => onViewChange("ai")}
                  className="mt-4 w-full rounded-lg bg-indigo-600 px-3 py-2 text-[11px] font-semibold text-white hover:bg-indigo-500"
                >
                  Cere rezumat AI
                </button>
              </aside>
            </div>
          )}

          {view === "deals" && (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-zinc-200 bg-white px-3 py-2">
                <p className="text-xs font-semibold text-zinc-900">Pipeline</p>
                <p className="text-[11px] text-zinc-500">
                  Deschis: {formatLei(openPipeline)}
                </p>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2 overflow-y-auto p-2 lg:grid-cols-4">
                {STAGES.map((stage) => (
                  <div key={stage.id} className="min-w-0">
                    <p className="mb-1.5 px-1 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                      {stage.label}{" "}
                      {deals.filter((d) => d.stage === stage.id).length}
                    </p>
                    <div className="space-y-2">
                      {deals
                        .filter((d) => d.stage === stage.id)
                        .map((deal) => (
                          <button
                            key={deal.id}
                            type="button"
                            onClick={() => setSelectedDealId(deal.id)}
                            className={`w-full rounded-xl bg-white p-2.5 text-left shadow-sm ring-1 transition ${
                              selectedDealId === deal.id
                                ? "ring-indigo-300"
                                : "ring-zinc-200 hover:ring-zinc-300"
                            }`}
                          >
                            <p className="truncate text-[11px] font-semibold text-zinc-900">
                              {deal.title}
                            </p>
                            <p className="truncate text-[10px] text-zinc-500">
                              {companyName(deal.companyId)}
                            </p>
                            <p className="mt-1 text-[11px] font-bold text-indigo-700">
                              {formatLei(deal.value)}
                            </p>
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              {selectedDeal && (
                <div className="flex flex-wrap items-center gap-2 border-t border-zinc-200 bg-white px-3 py-2">
                  <span className="text-[11px] text-zinc-500">Mută etapa:</span>
                  {STAGES.map((stage) => (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() =>
                        setDeals((prev) =>
                          prev.map((d) =>
                            d.id === selectedDeal.id
                              ? { ...d, stage: stage.id }
                              : d,
                          ),
                        )
                      }
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                        selectedDeal.stage === stage.id
                          ? "bg-indigo-600 text-white"
                          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                      }`}
                    >
                      {stage.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {view === "calendar" && (
            <div className="flex h-full flex-col">
              <div className="border-b border-zinc-200 bg-white px-3 py-2">
                <p className="text-xs font-semibold text-zinc-900">
                  Săptămâna 15–19 septembrie
                </p>
              </div>
              <div className="grid flex-1 grid-cols-5 gap-px overflow-hidden bg-zinc-200">
                {WEEKDAYS.map((day, index) => (
                  <div key={day} className="bg-zinc-50">
                    <p className="border-b border-zinc-200 px-1 py-1.5 text-center text-[10px] font-bold uppercase text-zinc-500">
                      {day}
                    </p>
                    <div className="space-y-1 p-1">
                      {EVENTS.filter((event) => event.day === index + 1).map(
                        (event) => (
                          <button
                            key={event.id}
                            type="button"
                            onClick={() => setSelectedEventId(event.id)}
                            className={`w-full rounded-md px-1.5 py-1 text-left text-[10px] leading-tight ${
                              selectedEventId === event.id
                                ? "bg-indigo-600 text-white"
                                : event.type === "call"
                                  ? "bg-sky-100 text-sky-900"
                                  : event.type === "followup"
                                    ? "bg-amber-100 text-amber-900"
                                    : "bg-white text-zinc-800 ring-1 ring-zinc-200"
                            }`}
                          >
                            <span className="block font-semibold">
                              {event.time}
                            </span>
                            {event.title}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {selectedEvent && (
                <div className="border-t border-zinc-200 bg-white px-3 py-2 text-[11px] text-zinc-600">
                  <span className="font-semibold text-zinc-900">
                    {selectedEvent.title}
                  </span>{" "}
                  · {selectedEvent.time} ·{" "}
                  {selectedEvent.type === "call"
                    ? "Apel"
                    : selectedEvent.type === "followup"
                      ? "Follow-up"
                      : "Întâlnire"}
                </div>
              )}
            </div>
          )}

          {view === "ai" && (
            <div className="flex h-full flex-col bg-white">
              <div className="flex items-center gap-2 border-b border-zinc-200 px-3 py-2">
                <Sparkles className="h-4 w-4 text-indigo-600" />
                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    Asistent Conecta
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    Citește contacte, oferte, calendar și task-uri
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-2 overflow-y-auto p-3">
                {aiMessages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`max-w-[90%] rounded-2xl px-3 py-2 text-[12px] leading-relaxed ${
                      message.role === "assistant"
                        ? "bg-zinc-100 text-zinc-800"
                        : "ml-auto bg-indigo-600 text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 border-t border-zinc-100 px-3 pt-2">
                {[
                  "Cât valorează pipeline-ul?",
                  "Ce am mâine în calendar?",
                  "Rezumă Nordic Coffee",
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => sendAi(chip)}
                    className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-700 hover:bg-indigo-100"
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <form
                className="flex gap-2 p-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendAi(aiInput);
                }}
              >
                <input
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="Întreabă asistentul..."
                  className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 p-2 text-white hover:bg-indigo-500"
                  aria-label="Trimite"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}

          {view === "company" && selectedCompany && (
            <div className="grid h-full md:grid-cols-[minmax(0,1fr)_220px]">
              <ul className="overflow-y-auto p-2">
                {COMPANIES.map((company) => (
                  <li key={company.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedCompanyId(company.id)}
                      className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${
                        selectedCompanyId === company.id
                          ? "bg-white shadow-sm ring-1 ring-indigo-200"
                          : "hover:bg-white/80"
                      }`}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-[11px] font-bold text-white">
                        {company.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-zinc-900">
                          {company.name}
                        </p>
                        <p className="text-[11px] text-zinc-500">
                          {company.industry} · {company.city}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <aside className="hidden border-l border-zinc-200 bg-white p-3 md:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                  Companie
                </p>
                <h3 className="mt-2 text-sm font-bold">{selectedCompany.name}</h3>
                <p className="mt-3 text-[11px] text-zinc-500">Industrie</p>
                <p className="text-xs font-medium">{selectedCompany.industry}</p>
                <p className="mt-2 text-[11px] text-zinc-500">Oraș</p>
                <p className="text-xs font-medium">{selectedCompany.city}</p>
                <p className="mt-2 text-[11px] text-zinc-500">Echipă</p>
                <p className="text-xs font-medium">
                  {selectedCompany.employees} oameni
                </p>
                <p className="mt-2 text-[11px] text-zinc-500">Owner intern</p>
                <p className="text-xs font-medium">{selectedCompany.owner}</p>
                <p className="mt-4 text-[11px] text-zinc-500">Contacte legate</p>
                <ul className="mt-1 space-y-1">
                  {contacts
                    .filter((c) => c.companyId === selectedCompany.id)
                    .map((c) => (
                      <li
                        key={c.id}
                        className="flex items-center gap-2 text-[11px] text-zinc-700"
                      >
                        <UserRound className="h-3 w-3" /> {c.name}
                      </li>
                    ))}
                </ul>
              </aside>
            </div>
          )}

          {view === "tasks" && (
            <div className="flex h-full flex-col bg-white">
              <div className="border-b border-zinc-200 px-3 py-2">
                <p className="text-xs font-semibold text-zinc-900">
                  Task-uri echipă
                </p>
              </div>
              <ul className="flex-1 space-y-1 overflow-y-auto p-2">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="flex items-start gap-2 rounded-xl px-2 py-2 hover:bg-zinc-50"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setTasks((prev) =>
                          prev.map((t) =>
                            t.id === task.id ? { ...t, done: !t.done } : t,
                          ),
                        )
                      }
                      className="mt-0.5 text-indigo-600"
                      aria-label={
                        task.done ? "Marchează nedone" : "Marchează done"
                      }
                    >
                      {task.done ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Circle className="h-4 w-4 text-zinc-300" />
                      )}
                    </button>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-xs font-medium ${task.done ? "text-zinc-400 line-through" : "text-zinc-900"}`}
                      >
                        {task.title}
                      </p>
                      <p className="text-[10px] text-zinc-500">
                        {task.due} · {task.owner} · {task.related}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setTasks((prev) => prev.filter((t) => t.id !== task.id))
                      }
                      className="text-zinc-300 hover:text-red-500"
                      aria-label="Șterge task"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
              <form
                className="flex gap-2 border-t border-zinc-200 p-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const title = newTask.trim();
                  if (!title) return;
                  setTasks((prev) => [
                    {
                      id: `t${Date.now()}`,
                      title,
                      due: "Azi",
                      owner: "Tu",
                      done: false,
                      related: "Manual",
                    },
                    ...prev,
                  ]);
                  setNewTask("");
                }}
              >
                <input
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Adaugă un task..."
                  className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs outline-none focus:border-indigo-400"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-zinc-900 p-2 text-white hover:bg-zinc-800"
                  aria-label="Adaugă"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
