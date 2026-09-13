"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ContactRound,
  LayoutDashboard,
  ListTodo,
  Menu,
  Plus,
  Search,
  Sparkles,
  X,
} from "lucide-react";

type DemoView =
  | "Overview"
  | "Contacts"
  | "Deals"
  | "Calendar"
  | "AI assistant"
  | "Company"
  | "Tasks";

const navigation: { label: DemoView; icon: typeof LayoutDashboard }[] = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Contacts", icon: ContactRound },
  { label: "Deals", icon: CircleDollarSign },
  { label: "Calendar", icon: CalendarDays },
  { label: "AI assistant", icon: Bot },
  { label: "Company", icon: Building2 },
  { label: "Tasks", icon: ListTodo },
];

const stats = [
  {
    label: "Open pipeline",
    value: "$184.6k",
    change: "+18.4%",
    color: "bg-lime-400",
  },
  {
    label: "Won this month",
    value: "$42.8k",
    change: "+12.8%",
    color: "bg-cyan-400",
  },
  {
    label: "New contacts",
    value: "248",
    change: "+24.1%",
    color: "bg-amber-400",
  },
];

const contacts = [
  {
    name: "Sofia Martin",
    company: "Northstar Studio",
    status: "Warm lead",
    initials: "SM",
    color: "bg-cyan-500",
  },
  {
    name: "Ethan Cole",
    company: "Vertex Labs",
    status: "Meeting booked",
    initials: "EC",
    color: "bg-violet-500",
  },
  {
    name: "Maya Patel",
    company: "Arc & Co.",
    status: "Proposal sent",
    initials: "MP",
    color: "bg-amber-500",
  },
];

const featureSections = [
  {
    icon: ContactRound,
    eyebrow: "Contacts",
    title: "Every relationship, finally connected.",
    text: "Keep people, conversations, notes and next steps in one living profile. Conecta gives your team the context to follow up like they actually remember the conversation.",
    points: [
      "Smart contact timelines",
      "Automatic activity capture",
      "Segments that update themselves",
    ],
  },
  {
    icon: CircleDollarSign,
    eyebrow: "Deals",
    title: "See revenue before it happens.",
    text: "Move opportunities through a pipeline that stays current. Forecast with confidence, spot stalled deals early and know exactly where to focus today.",
    points: [
      "Visual pipeline stages",
      "Weighted revenue forecasts",
      "One-click deal handoffs",
    ],
  },
  {
    icon: CalendarDays,
    eyebrow: "Calendar",
    title: "Turn momentum into meetings.",
    text: "Your calendar, availability and customer context work together so every meeting has a purpose and every follow-up has a home.",
    points: [
      "Shared team availability",
      "Meeting preparation briefs",
      "Follow-up reminders",
    ],
  },
  {
    icon: Bot,
    eyebrow: "AI assistant",
    title: "Your best operator is always on.",
    text: "Ask Conecta to summarize a call, find a deal at risk, draft a follow-up or tell you what deserves attention next.",
    points: [
      "Natural-language search",
      "Instant call summaries",
      "Suggested next actions",
    ],
  },
  {
    icon: Building2,
    eyebrow: "Company",
    title: "Understand the account, not just the contact.",
    text: "See the full relationship around every business. Map stakeholders, open work and account health in one clear view.",
    points: [
      "Account relationship maps",
      "Shared company notes",
      "Health and activity signals",
    ],
  },
  {
    icon: ListTodo,
    eyebrow: "Tasks",
    title: "Make the next move obvious.",
    text: "Conecta turns good intentions into a focused workday. Every task is tied to a person, deal or meeting so nothing gets lost in a list.",
    points: [
      "Priority-based work queue",
      "Recurring workflows",
      "Team ownership and due dates",
    ],
  },
];

function DemoWorkspace() {
  const [activeView, setActiveView] = useState<DemoView>("Overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#101b25] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-3">
      <div className="flex h-[560px] overflow-hidden rounded-[1rem] border border-white/10 bg-[#f4f7f7] text-slate-900">
        <aside
          className={`${mobileMenuOpen ? "absolute inset-y-0 left-0 z-20 flex" : "hidden"} w-60 shrink-0 flex-col border-r border-slate-200 bg-[#f9fbfb] p-4 md:relative md:flex`}
        >
          <div className="mb-8 flex items-center justify-between px-2">
            <div className="flex items-center gap-2 tracking-tight text-slate-900">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0d766e] text-sm text-white">
                c
              </span>{" "}
              <h1 className="font-bold">conecta</h1>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </p>
          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActiveView(label);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs font-semibold transition ${activeView === label ? "bg-[#dff5f0] text-[#0d766e]" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
              >
                <Icon className="h-4 w-4" /> {label}
                {label === "AI assistant" && (
                  <span className="ml-auto rounded-full bg-[#0d766e] px-1.5 py-0.5 text-[9px] text-white">
                    AI
                  </span>
                )}
              </button>
            ))}
          </nav>
          <div className="mt-auto rounded-xl bg-[#eaf7f3] p-3">
            <div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#0d766e]">
              <Sparkles className="h-3.5 w-3.5" /> AI insights
            </div>
            <p className="text-[10px] leading-relaxed text-slate-500">
              You have 4 high-intent leads to follow up with today.
            </p>
          </div>
        </aside>
        {mobileMenuOpen && (
          <button
            className="absolute inset-0 z-10 bg-slate-900/20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          />
        )}
        <div className="min-w-0 flex-1 bg-white">
          <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div>
                <p className="text-sm font-bold">{activeView}</p>
                <p className="text-[10px] text-slate-400">
                  Monday, October 14, 2024
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="hidden rounded-lg border border-slate-200 p-2 text-slate-400 sm:block"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                JD
              </div>
            </div>
          </div>
          <div className="h-[calc(100%-4rem)] overflow-auto bg-[#f8fafb] p-5 sm:p-7">
            {activeView === "Overview" ? (
              <OverviewView />
            ) : (
              <DetailView view={activeView} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewView() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400">
            Good morning, Jordan
          </p>
          <h3 className="mt-1 text-2xl font-black tracking-tight">
            Here&apos;s your momentum.
          </h3>
        </div>
        <button className="hidden items-center gap-2 rounded-lg bg-[#0d766e] px-3 py-2 text-xs font-bold text-white sm:flex">
          <Plus className="h-3.5 w-3.5" /> Add activity
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-4"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {stat.label}
            </p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-xl font-black">{stat.value}</p>
              <span className="text-[10px] font-bold text-emerald-600">
                {stat.change}
              </span>
            </div>
            <div className="mt-3 h-1 rounded-full bg-slate-100">
              <div className={`h-1 w-3/4 rounded-full ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold">Pipeline health</h4>
              <p className="mt-1 text-[10px] text-slate-400">Last 30 days</p>
            </div>
            <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
              On track
            </span>
          </div>
          <div className="flex h-32 items-end gap-2">
            {[42, 55, 48, 68, 62, 82, 74, 96, 76, 90, 84, 100].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t bg-[#a7e6d9]"
                  style={{ height: `${height}%` }}
                />
              ),
            )}
          </div>
          <div className="mt-3 flex justify-between text-[9px] text-slate-400">
            <span>Sep 14</span>
            <span>Oct 14</span>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-sm font-bold">Today&apos;s focus</h4>
            <span className="text-[10px] font-bold text-[#0d766e]">
              4 tasks
            </span>
          </div>
          <div className="space-y-3">
            {[
              "Follow up with Northstar",
              "Send Vertex proposal",
              "Prepare Maya's brief",
            ].map((task) => (
              <div key={task} className="flex items-center gap-3">
                <span className="h-4 w-4 rounded border-2 border-slate-200" />
                <span className="text-xs text-slate-600">{task}</span>
              </div>
            ))}
          </div>
          <button className="mt-5 flex items-center gap-1 text-[10px] font-bold text-[#0d766e]">
            View all tasks <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-bold">Recent contacts</h4>
          <button className="text-[10px] font-bold text-[#0d766e]">
            View all
          </button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${contact.color} text-[10px] font-bold text-white`}
              >
                {contact.initials}
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold">{contact.name}</p>
                <p className="truncate text-[10px] text-slate-400">
                  {contact.company}
                </p>
              </div>
              <span className="ml-auto hidden text-[9px] font-bold text-[#0d766e] lg:block">
                {contact.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailView({ view }: { view: Exclude<DemoView, "Overview"> }) {
  const content = {
    Contacts: [
      "Contacts",
      "248 people in your network",
      "Import contacts",
      "Sofia Martin",
      "Ethan Cole",
      "Maya Patel",
    ],
    Deals: [
      "Deals",
      "$184.6k in open pipeline",
      "New deal",
      "Northstar Studio",
      "Vertex Labs",
      "Arc & Co.",
    ],
    Calendar: [
      "Calendar",
      "Your week at a glance",
      "Book meeting",
      "Product discovery · 10:00",
      "Proposal review · 13:30",
      "Team sync · 16:00",
    ],
    "AI assistant": [
      "AI assistant",
      "Ask anything about your CRM",
      "Start a prompt",
      "Which deals need my attention?",
      "Summarize my last five calls",
      "Draft a follow-up for Sofia",
    ],
    Company: [
      "Company",
      "12 accounts across your team",
      "Add company",
      "Northstar Studio",
      "Vertex Labs",
      "Arc & Co.",
    ],
    Tasks: [
      "Tasks",
      "4 priorities for today",
      "Add task",
      "Follow up with Northstar",
      "Send Vertex proposal",
      "Prepare Maya's brief",
    ],
  }[view];
  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs text-slate-400">Conecta workspace</p>
        <h3 className="mt-1 text-2xl font-black">{content[0]}</h3>
        <p className="mt-1 text-sm text-slate-500">{content[1]}</p>
      </div>
      <button className="flex items-center gap-2 rounded-lg bg-[#0d766e] px-3 py-2 text-xs font-bold text-white">
        <Plus className="h-3.5 w-3.5" /> {content[2]}
      </button>
      <div className="space-y-2">
        {content.slice(3).map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${index === 0 ? "bg-cyan-400" : index === 1 ? "bg-amber-400" : "bg-violet-400"}`}
              />
              <span className="text-sm font-semibold text-slate-700">
                {item}
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-slate-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ConectaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071117] font-sans text-white">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(38,190,166,0.16),transparent_30%),radial-gradient(circle_at_10%_20%,rgba(75,91,255,0.10),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg tracking-tight">
              <span className="flex h-8 w-8 items-center text-2xl justify-center rounded-lg bg-[#9bf1d9] text-[#071117]">
                c
              </span>{" "}
              conecta
            </div>
            <div className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
              <a href="#product" className="transition hover:text-white">
                Product
              </a>
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#ai" className="transition hover:text-white">
                AI for your team
              </a>
            </div>
            <button className="rounded-lg border border-white/15 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/10">
              Book a demo
            </button>
          </nav>
          <div className="w-full pt-20 lg:pt-28">
            <div className="block w-full max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#9bf1d9]/20 bg-[#9bf1d9]/10 px-3 py-1.5 text-xs font-bold text-[#9bf1d9]">
                <Sparkles className="h-3.5 w-3.5" /> The CRM that thinks with
                you
              </div>
              <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-7xl">
                Less admin.
                <br />
                <span className="text-[#9bf1d9]">More momentum.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-400">
                Conecta brings contacts, deals, meetings and intelligent next
                steps into one calm workspace built for teams that want to move.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#product"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#9bf1d9] px-5 py-3 text-sm font-black text-[#071117] transition hover:bg-white"
                >
                  Explore the workspace <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  See how it works
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#9bf1d9]" /> Setup in minutes
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#9bf1d9]" /> Built for humans
                </span>
              </div>
            </div>
            <div id="product" className="mt-20 block w-full">
              <DemoWorkspace />
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="bg-[#f4f6f5] py-24 text-slate-900 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0d766e]">
              Everything in one place
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Your whole customer motion, made visible.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Conecta replaces scattered tools and half-remembered follow-ups
              with a shared source of truth your team will actually use.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {featureSections.map(
              ({ icon: Icon, eyebrow, title, text, points }) => (
                <article
                  key={eyebrow}
                  className="bg-[#f4f6f5] p-7 transition hover:bg-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#dff5f0] text-[#0d766e]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-8 text-xs font-black uppercase tracking-widest text-[#0d766e]">
                    {eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {text}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-xs font-bold text-slate-700"
                      >
                        <Check className="h-3.5 w-3.5 text-[#0d766e]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>
        </div>
      </section>
      <section
        id="ai"
        className="bg-[#0d766e] px-5 py-24 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9bf1d9]">
              A quieter kind of intelligence
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Your CRM should tell you what matters next.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-emerald-50/70">
              Conecta watches the signal across your customer motion, then turns
              it into a clear recommendation. No dashboards to decode. No prompt
              engineering required.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-black text-[#0d766e] transition hover:bg-[#9bf1d9]">
              Meet your AI assistant <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-2xl border border-white/20 bg-[#075b55] p-5 shadow-2xl">
            <div className="rounded-xl bg-[#073f3c] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9bf1d9] text-[#075b55]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">Conecta AI</p>
                  <p className="text-xs text-emerald-100/60">
                    Your daily brief is ready
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-emerald-50">
                You have three high-intent opportunities today. Sofia at
                Northstar opened your proposal twice this morning. I drafted a
                follow-up and held a 15-minute slot tomorrow at 10:30.
              </div>
              <div className="mt-4 flex gap-2">
                <button className="rounded-md bg-[#9bf1d9] px-3 py-2 text-xs font-bold text-[#075b55]">
                  Review draft
                </button>
                <button className="rounded-md border border-white/20 px-3 py-2 text-xs font-bold">
                  Open deal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#071117] px-5 py-10 text-slate-500 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-black text-white">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#9bf1d9] text-[#071117]">
              c
            </span>{" "}
            conecta
          </div>
          <p className="text-xs">A CRM for teams in motion. © 2024 Conecta.</p>
        </div>
      </footer>
    </main>
  );
}
