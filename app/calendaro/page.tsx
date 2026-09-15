"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Clock,
  CreditCard,
  Globe,
  Headphones,
  Link2,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Mic,
  Plus,
  ShieldCheck,
  Share2,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Video,
  X,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

/* -------------------------------------------------------------------------- */
/*                                   DATE                                     */
/* -------------------------------------------------------------------------- */

const MONTHS_RO = [
  "Ianuarie",
  "Februarie",
  "Martie",
  "Aprilie",
  "Mai",
  "Iunie",
  "Iulie",
  "August",
  "Septembrie",
  "Octombrie",
  "Noiembrie",
  "Decembrie",
];

const WEEKDAYS_RO = ["LUN", "MAR", "MIE", "JOI", "VIN", "SÂM", "DUM"];

const BASE_YEAR = 2026;
const BASE_MONTH = 9; // Mai (0-indexat)

/** Disponibilitate deterministă (același rezultat pe server și pe client). */
function isAvailable(day: number, month: number): boolean {
  const seed = (day * 37 + month * 11 + BASE_YEAR) % 100;
  return seed % 9 !== 0 && day % 7 !== 3;
}

/** Construiește grila lunii, cu săptămâna începând de luni. */
function buildMonth(year: number, month: number): (number | null)[] {
  const first = new Date(Date.UTC(year, month, 1));
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const offset = (first.getUTCDay() + 6) % 7;

  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function addMonths(monthIndex: number): { year: number; month: number } {
  const total = BASE_MONTH + monthIndex;
  return {
    year: BASE_YEAR + Math.floor(total / 12),
    month: ((total % 12) + 12) % 12,
  };
}

/* -------------------------------------------------------------------------- */
/*                                   LOGO                                     */
/* -------------------------------------------------------------------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-900 text-white">
        <CalendarDays className="size-4" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-zinc-900">
        Calendaro
      </span>
    </span>
  );
}

function GoogleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.16 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.7 0 3.99 2.47 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

/**
 * Logo-urile brandurilor sunt SVG-uri din `public/brands`, servite ca atare
 * (`unoptimized`), ca să nu treacă prin optimizatorul de imagini al Next.js.
 */
function GoogleCalendarLogo({ className = "size-5" }: { className?: string }) {
  return (
    <Image
      src="/brands/google-calendar.svg"
      alt=""
      width={20}
      height={20}
      unoptimized
      aria-hidden="true"
      className={className}
    />
  );
}

function OutlookLogo({ className = "size-5" }: { className?: string }) {
  return (
    <Image
      src="/brands/microsoft-outlook.svg"
      alt=""
      width={20}
      height={20}
      unoptimized
      aria-hidden="true"
      className={className}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                                 NAVIGARE                                   */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  { label: "Funcții", href: "#functii" },
  { label: "Cum funcționează", href: "#cum-functioneaza" },
  { label: "Comparație", href: "#comparatie" },
  { label: "Prețuri", href: "#preturi" },
  { label: "Întrebări", href: "#intrebari" },
];

function ProductNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#incepe"
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            Autentificare
          </a>
          <a
            href="#incepe"
            className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-900/10 bg-zinc-900 px-3.5 py-2 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
          >
            Începe gratuit
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Deschide meniul"
          className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-700 hover:bg-zinc-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#incepe"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-zinc-900 px-3.5 py-2.5 text-sm font-medium text-white"
            >
              Începe gratuit
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              MOCK: PROGRAMARE                              */
/* -------------------------------------------------------------------------- */

const DURATIONS = ["15m", "30m", "45m", "1h"] as const;

function BookingMock() {
  const [duration, setDuration] = useState<(typeof DURATIONS)[number]>("1h");
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const { year, month } = useMemo(() => addMonths(monthOffset), [monthOffset]);
  const cells = useMemo(() => buildMonth(year, month), [year, month]);
  const today = 27;

  const goToMonth = (delta: number) => {
    setMonthOffset((prev) => prev + delta);
    setSelectedDay(null);
  };

  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-zinc-100 via-white to-zinc-100" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-[0_18px_50px_-24px_rgba(24,24,27,0.35)]"
      >
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          {/* ---------- Coloana stângă: detalii întâlnire ---------- */}
          <div className="flex flex-col gap-6 p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white">
                AP
              </span>
              <p className="text-sm font-medium text-zinc-900">
                Dr. Andrei Popescu
              </p>
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl leading-tight font-medium tracking-tight text-zinc-900">
                Consultație inițială
              </h3>
              <p className="text-sm text-zinc-500">
                Bine ai venit la Clinica Sfânta Maria. Alege intervalul orar
                care ți se potrivește.
              </p>
            </div>

            <div className="space-y-4">
              {/* Durată */}
              <div className="flex items-start gap-3">
                <Clock className="mt-2 size-4 shrink-0 text-zinc-900" />
                <div className="flex flex-wrap gap-1 rounded-[10px] bg-zinc-100 p-1">
                  {DURATIONS.map((d) => {
                    const active = d === duration;
                    return (
                      <button
                        key={d}
                        type="button"
                        onClick={() => setDuration(d)}
                        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                          active
                            ? "bg-white text-zinc-900 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.06)]"
                            : "text-zinc-500 hover:text-zinc-700"
                        }`}
                      >
                        {d}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Locație */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-zinc-900" />
                <p className="text-sm font-medium text-zinc-800">
                  Str. Franceză 22, București
                </p>
              </div>

              {/* Fus orar */}
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-md text-left"
              >
                <Globe className="size-4 shrink-0 text-zinc-900" />
                <span className="flex items-center gap-1 text-sm font-medium text-zinc-800">
                  Europe/București
                  <ChevronDown className="size-3.5 text-zinc-500" />
                </span>
              </button>
            </div>

            <div className="mt-auto space-y-2 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <Video className="size-3.5" />
                Se adaugă automat link de Google Meet
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                <Bell className="size-3.5" />
                Memento prin SMS și email, cu 24h înainte
              </div>
            </div>
          </div>

          {/* ---------- Coloana dreaptă: calendar ---------- */}
          <div className="border-t border-zinc-200 bg-white p-5 sm:p-6 md:border-t-0 md:border-l">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-baseline gap-1.5">
                <p className="text-sm font-semibold text-zinc-900">
                  {MONTHS_RO[month]}
                </p>
                <p className="text-sm font-medium text-zinc-500">{year}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => goToMonth(-1)}
                  aria-label="Luna anterioară"
                  className="flex size-7 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  <ChevronLeft className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => goToMonth(1)}
                  aria-label="Luna următoare"
                  className="flex size-7 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100"
                >
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1">
              {WEEKDAYS_RO.map((day, i) => (
                <div
                  key={day}
                  className={`flex items-center justify-center py-1 text-center text-[11px] font-medium ${
                    i > 4 ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {day}
                </div>
              ))}

              {cells.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="size-9" />;
                }

                const available = isAvailable(day, month);
                const isSelected = selectedDay === day;
                const isToday = day === today && monthOffset === 0;

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={!available}
                    onClick={() => setSelectedDay(day)}
                    className={`relative flex size-9 items-center justify-center rounded-md text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-zinc-700 text-white"
                        : available
                          ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
                          : "text-zinc-400"
                    }`}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <span className="absolute bottom-1 size-1 rounded-full bg-zinc-900" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-1.5">
              <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase">
                {MONTHS_RO[month]} {year}
              </p>
              {selectedDay ? (
                <div className="flex flex-wrap gap-1.5">
                  {["09:30", "11:00", "14:30"].map((slot) => (
                    <span
                      key={slot}
                      className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-800"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-zinc-500">
                  Selectează o zi pentru a vedea orele libere.
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* <p className="mt-3 text-center text-xs text-zinc-500">
        calendaro.ro/andrei-popescu/consultație
      </p> */}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   HERO                                     */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200/80">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,#f4f4f5_0%,#ffffff_60%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8">
          {/* Text */}
          <div>
            <motion.a
              href="#functii"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-zinc-100 px-3 py-1.5 text-xs font-light text-zinc-700 shadow-[0_4px_8px_rgba(34,42,53,0.05)] transition-colors hover:bg-zinc-200/70"
            >
              <Sparkles className="size-3.5" />
              Calendaro s-a lansat oficial!{" "}
              <span className="text-zinc-500">Vezi noutățile</span>
              <ChevronRight className="size-3.5 text-zinc-500" />
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl leading-[1.05] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3rem]"
            >
              Cea mai bună cale de a-ți programa întâlnirile
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg"
            >
              Software de programări complet personalizabil pentru freelanceri,
              firme care lucrează cu clienți și dezvoltatori care construiesc
              platforme unde oamenii se întâlnesc cu oameni.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 max-w-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href="#incepe"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-4 py-2.5 text-sm font-light text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
                >
                  <GoogleIcon />
                  Înscrie-te cu Google
                </a>

                <a
                  href="#incepe"
                  className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/80 px-4 py-2.5 text-sm font-light tracking-[-0.2px] text-zinc-800 shadow-[inset_0_2px_0_#ffffff] transition-all hover:from-white hover:to-zinc-200"
                >
                  Înscrie-te cu email
                  <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-zinc-400/80 text-white transition-transform group-hover:translate-x-0.5">
                    <ChevronRight className="size-3" />
                  </span>
                </a>
              </div>

              <p className="mt-3 text-sm text-zinc-500">
                14 zile gratuit. Anulezi oricând.
              </p>
            </motion.div>
          </div>

          {/* Mock */}
          <BookingMock />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                          PROGRAMARE FĂRĂ EFORT                              */
/* -------------------------------------------------------------------------- */

const ORBIT_DURATION = 36;

/** Icoanele care orbitează în jurul logo-ului, pe inelul exterior. */
const ORBIT_PROVIDERS = [
  {
    key: "google-calendar",
    left: "calc(50% + 38% - 20px)",
    top: "calc(50% - 20px)",
    icon: <GoogleCalendarLogo />,
  },
  {
    key: "outlook",
    left: "calc(50% - 19% - 20px)",
    top: "calc(50% - 32.9% - 20px)",
    icon: <OutlookLogo />,
  },
  {
    key: "icloud",
    left: "calc(50% - 19% - 20px)",
    top: "calc(50% + 32.9% - 20px)",
    icon: <CalendarDays className="size-5 text-zinc-800" />,
  },
];

function CalendarOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[13.5rem]">
      {["76%", "54%", "32%"].map((size) => (
        <span
          key={size}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200"
          style={{ width: size, height: size }}
        />
      ))}

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: ORBIT_DURATION,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {ORBIT_PROVIDERS.map((provider) => (
          <motion.span
            key={provider.key}
            aria-hidden="true"
            className="absolute flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 shadow-[0_10px_20px_-14px_rgba(24,24,27,0.7)]"
            style={{ left: provider.left, top: provider.top }}
            animate={{ rotate: -360 }}
            transition={{
              duration: ORBIT_DURATION,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {provider.icon}
          </motion.span>
        ))}
      </motion.div>

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-zinc-100 px-3.5 py-1.5 text-sm font-semibold tracking-tight text-zinc-900">
        Calendaro
      </span>
    </div>
  );
}

const AVAILABILITY_ROWS = [
  { day: "Lun", from: "8:30", to: "17:00", on: true },
  { day: "Mar", from: "9:00", to: "18:30", on: false },
  { day: "Mie", from: "10:00", to: "19:00", on: true },
];

function AvailabilityMock() {
  return (
    <div className="mx-auto w-full max-w-[15rem] overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_16px_34px_-26px_rgba(24,24,27,0.55)]">
      <div className="border-b border-zinc-200 bg-zinc-50/80 px-3 py-2">
        <p className="text-[11px] font-medium tracking-[0.12em] text-zinc-500 uppercase">
          Disponibilitate
        </p>
      </div>

      <div className="divide-y divide-zinc-100">
        {AVAILABILITY_ROWS.map((row) => (
          <div
            key={row.day}
            className={`flex items-center gap-2 px-3 py-2.5 ${
              row.on ? "" : "opacity-50"
            }`}
          >
            <span
              className={`flex h-4 w-7 shrink-0 items-center rounded-full px-0.5 ${
                row.on
                  ? "justify-end bg-zinc-900"
                  : "justify-start bg-zinc-900/20"
              }`}
            >
              <span className="block size-3 rounded-full bg-white shadow-[0_1px_2px_rgba(24,24,27,0.35)]" />
            </span>

            <span className="w-7 text-[11px] font-medium text-zinc-500">
              {row.day}
            </span>

            <span className="rounded-md border border-zinc-200 bg-white px-1.5 py-1 text-[11px] text-zinc-600">
              {row.from}
            </span>

            <span className="h-px flex-1 bg-zinc-200" />

            <span className="rounded-md border border-zinc-200 bg-white px-1.5 py-1 text-[11px] text-zinc-600">
              {row.to}
            </span>

            <Plus className="size-3 shrink-0 text-zinc-400" />
          </div>
        ))}
      </div>
    </div>
  );
}

const MEETING_TOOLS = [Video, Mic, MessageSquare, Share2];

const MEETING_MODES = [
  {
    key: "video",
    icon: Video,
    title: "Apel video",
    detail: "Link de Google Meet, generat automat",
  },
  {
    key: "phone",
    icon: Smartphone,
    title: "Apel telefonic",
    detail: "Clientul primește numărul tău",
  },
  {
    key: "location",
    icon: MapPin,
    title: "La locație",
    detail: "Str. Franceză 22, București",
  },
] as const;

type MeetingMode = (typeof MEETING_MODES)[number]["key"];

/** Cât timp stă selectată fiecare opțiune înainte de a trece la următoarea. */
const MEETING_ROTATE_MS = 2800;
/** Cât timp pauză rotația după ce utilizatorul alege manual o opțiune. */
const MEETING_PAUSE_MS = 7000;

function MeetingMock() {
  const [mode, setMode] = useState<MeetingMode>("video");
  const [manual, setManual] = useState(false);

  // Rotație automată între opțiuni.
  useEffect(() => {
    if (manual) return;

    const id = setInterval(() => {
      setMode((current) => {
        const index = MEETING_MODES.findIndex((item) => item.key === current);
        return MEETING_MODES[(index + 1) % MEETING_MODES.length].key;
      });
    }, MEETING_ROTATE_MS);

    return () => clearInterval(id);
  }, [manual]);

  // După o alegere manuală, rotația automată reia singură.
  useEffect(() => {
    if (!manual) return;

    const id = setTimeout(() => setManual(false), MEETING_PAUSE_MS);
    return () => clearTimeout(id);
  }, [manual]);

  const selectMode = (next: MeetingMode) => {
    setMode(next);
    setManual(true);
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-[15rem] flex-col justify-end gap-2">
      <div className="flex flex-col gap-1.5">
        {MEETING_MODES.map((option) => {
          const active = mode === option.key;
          const Icon = option.icon;

          return (
            <button
              key={option.key}
              type="button"
              aria-pressed={active}
              onClick={() => selectMode(option.key)}
              className={`flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-1.5 text-left transition-all duration-300 ${
                active
                  ? "border-zinc-900/20 bg-white shadow-[0_10px_24px_-18px_rgba(24,24,27,0.6)] ring-1 ring-zinc-900"
                  : "border-zinc-200 bg-white/60 hover:bg-white"
              }`}
            >
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                  active
                    ? "border-transparent bg-zinc-900 text-white"
                    : "border-zinc-200 bg-zinc-50 text-zinc-600"
                }`}
              >
                <Icon className="size-3" />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] leading-tight font-semibold text-zinc-900">
                  {option.title}
                </span>
                <span className="block truncate text-[10px] leading-tight text-zinc-500">
                  {option.detail}
                </span>
              </span>

              <span
                className={`flex size-4 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  active
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300"
                }`}
              >
                {active && <Check className="size-2.5" />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Preview în funcție de opțiunea aleasă */}
      <div className="relative h-[4.5rem] w-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_16px_34px_-26px_rgba(24,24,27,0.55)]">
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {mode === "video" && (
            <div className="flex h-full flex-col items-center justify-center gap-1.5">
              <div className="flex items-center justify-center gap-0.5">
                {MEETING_TOOLS.map((Icon, i) => (
                  <span
                    key={i}
                    className="flex size-6 items-center justify-center rounded-lg text-zinc-900"
                  >
                    <Icon className="size-3" />
                  </span>
                ))}
                <span className="flex size-6 items-center justify-center">
                  <span className="size-2.5 rounded-full bg-red-500" />
                </span>
              </div>

              <span className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] text-zinc-600">
                <Link2 className="size-2.5" />
                meet.calendaro.ro/andrei
              </span>
            </div>
          )}

          {mode === "phone" && (
            <div className="flex h-full flex-col items-center justify-center gap-1.5">
              <div className="flex items-center justify-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-900">
                  <Smartphone className="size-3.5" />
                </span>
                <span className="text-[11px] font-semibold text-zinc-900">
                  +40 21 555 0198
                </span>
              </div>
              <span className="text-[10px] text-zinc-500">
                Te sunăm noi la ora stabilită
              </span>
            </div>
          )}

          {mode === "location" && (
            <div className="relative flex h-full items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #f4f4f5 1px, transparent 1px), linear-gradient(to bottom, #f4f4f5 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <span className="absolute top-1/2 left-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-900/10" />
              <span className="relative flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2 py-1 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.6)]">
                <MapPin className="size-3 text-zinc-900" />
                <span className="text-[10px] font-medium text-zinc-800">
                  Str. Franceză 22, București
                </span>
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

const SETUP_STEPS = [
  {
    number: "01",
    title: "Conectează-ți calendarul",
    text: "Ne ocupăm noi de toată verificarea suprapunerilor, ca să nu-ți mai faci griji pentru duble programări.",
  },
  {
    number: "02",
    title: "Setează-ți disponibilitatea",
    text: "Vrei să blochezi weekendul? Vrei intervale tampon între întâlniri? Se configurează în câteva secunde.",
  },
  {
    number: "03",
    title: "Alege cum vă întâlniți",
    text: "Apel video cu link de Meet, discuție la telefon sau întâlnire față în față, la adresa ta: clientul vede toate detaliile automat.",
  },
];

function EasyScheduling() {
  const visuals = [<CalendarOrbit />, <AvailabilityMock />, <MeetingMock />];

  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto flex flex-col items-center text-center">
          <a
            href="#cum-functioneaza"
            className="inline-flex items-center rounded-full border border-zinc-900/10 bg-white px-3 py-1.5 text-xs font-light text-zinc-700 shadow-[0_4px_8px_rgba(34,42,53,0.05)] transition-colors hover:bg-zinc-100"
          >
            Cum funcționează
          </a>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl"
          >
            Cu noi, programarea întâlnirilor este simplă
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-base leading-relaxed text-zinc-600"
          >
            Programări fără efort pentru firme și persoane, soluții puternice
            pentru companii moderne aflate în creștere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-8 flex flex-col gap-2 sm:flex-row"
          >
            <a
              href="#incepe"
              className="group inline-flex items-center justify-center gap-1.5 rounded-xl border border-zinc-900/60 bg-zinc-900 px-4 py-2.5 text-sm font-light text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
            >
              Începe acum
              <span className="ml-1 flex size-5 items-center justify-center rounded-full bg-zinc-500/60 text-white transition-transform group-hover:translate-x-0.5">
                <ChevronRight className="size-3" />
              </span>
            </a>

            <a
              href="#incepe"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-gradient-to-b from-zinc-50 to-zinc-200/80 px-4 py-2.5 text-sm font-light tracking-[-0.2px] text-zinc-800 shadow-[inset_0_2px_0_#ffffff] transition-all hover:from-white hover:to-zinc-200"
            >
              Programează un demo
            </a>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {SETUP_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-semibold text-zinc-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {step.text}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex h-60 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50/70 p-3">
                {visuals[i]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SOCIAL PROOF                                  */
/* -------------------------------------------------------------------------- */

const PROOF = [
  {
    name: "Trustpilot",
    detail: "Excelent · 4,9/5",
    meta: "1.240 recenzii",
  },
  { name: "Product Hunt", detail: "#1 Produsul zilei", meta: "3.100 upvotes" },
  { name: "G2", detail: "Lider 2025", meta: "Programări" },
];

function SocialProof() {
  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-[0.16em] text-zinc-500 uppercase">
          Peste 12.000 de echipe își programează întâlnirile cu Calendaro
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {PROOF.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center justify-between gap-4 rounded-xl border border-zinc-200 bg-zinc-50/60 px-4 py-3"
            >
              <div>
                <p className="text-sm font-semibold text-zinc-800">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500">{item.meta}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-3.5 fill-zinc-900 text-zinc-900"
                    />
                  ))}
                </div>
                <p className="mt-0.5 text-xs font-medium text-zinc-700">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCȚII                                   */
/* -------------------------------------------------------------------------- */

const FEATURES = [
  {
    icon: Link2,
    title: "Un singur link pentru tot",
    text: "Trimite un link, primești programări confirmate automat. Fără șiruri de emailuri, fără suprapuneri în agendă.",
  },
  {
    icon: CalendarDays,
    title: "Sincronizare bidirecțională",
    text: "Conectează Google, Outlook, iCloud și CalDAV. Blochează automat intervalele ocupate din toate calendarele.",
  },
  {
    icon: CreditCard,
    title: "Plăți la programare",
    text: "Încasează avansul cu Stripe sau PayPal înainte de întâlnire. Mai puține anulări, mai multă predictibilitate.",
  },
  {
    icon: Globe,
    title: "Embed pe site",
    text: "Adaugă calendarul direct în pagina ta cu un simplu snippet de cod sau iframe. Fără redirecționări, fără lead-uri pierdute.",
  },
  {
    icon: Sparkles,
    title: "Personalizare simplă",
    text: "Culori, logo, texte și tipuri de întâlniri schimbate în câteva minute, fără designer. Pagina arată ca brandul tău.",
  },
  {
    icon: ClipboardCheck,
    title: "Formular de precalificare",
    text: "Pui întrebări înainte de programare, ca să ajungi doar la întâlnirile potrivite și să intri pregătit în discuție.",
  },
  {
    icon: Bell,
    title: "Memento-uri automate",
    text: "Email și SMS cu 24 de ore și 1 oră înainte. Reduce anulările cu până la 38%.",
  },
  {
    icon: BarChart3,
    title: "Statistici",
    text: "Vezi câte programări primești, din ce surse vin și cine le confirmă, actualizat în timp real.",
  },
  {
    icon: TrendingUp,
    title: "Raport de conversie",
    text: "Urmărești câți vizitatori ajung pe pagina de programare și câți devin întâlniri confirmate.",
  },
];

function Features() {
  return (
    <section id="functii" className="border-b border-zinc-200/80 bg-zinc-50/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Funcții
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Tot ce ai nevoie ca să nu mai pierzi nicio întâlnire
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            De la linkul de programare până la automatizările din fundal,
            Calendaro acoperă întregul flux operațional al unui business care
            lucrează cu clienți.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
                <feature.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             BENTO: PLATFORMA                               */
/* -------------------------------------------------------------------------- */

const MEETING_LINKS = [
  { name: "Consultație inițială", meta: "1h · 250 lei" },
  { name: "Demo produs", meta: "30m · gratuit" },
  { name: "Ședință de onboarding", meta: "45m" },
  { name: "Review lunar", meta: "30m · 150 lei" },
];

/** Bandă infinită cu tipurile de întâlnire. */
function LinkMarquee() {
  const items = [...MEETING_LINKS, ...MEETING_LINKS];

  return (
    <div className="absolute inset-x-0 top-8 [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)]">
      <motion.div
        className="flex w-max gap-4 px-4"
        animate={{ x: [0, -192] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <figure
            key={`${item.name}-${i}`}
            className="w-44 shrink-0 rounded-xl border border-zinc-200 bg-white p-3 shadow-[0_2px_4px_rgba(24,24,27,0.04)]"
          >
            <figcaption className="truncate text-xs font-medium text-zinc-900">
              {item.name}
            </figcaption>
            <p className="mt-1 text-[11px] text-zinc-500">{item.meta}</p>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

const NOTIFICATIONS = [
  {
    icon: Check,
    title: "Programare confirmată",
    text: "Mihai Pop · marți, 11:00",
  },
  {
    icon: CreditCard,
    title: "Avans încasat — 250 lei",
    text: "Ioana Marinescu · Stripe",
  },
  {
    icon: Video,
    title: "Link Google Meet generat",
    text: "Consultație inițială · 1h",
  },
  {
    icon: Calendar,
    title: "Reprogramare acceptată",
    text: "Interval nou: joi, 15:30",
  },
];

/** Listă animată de notificări care defilează continuu. */
function NotificationsStack() {
  return (
    <div className="absolute inset-x-6 top-5 [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]">
      <div className="flex flex-col gap-3">
        {NOTIFICATIONS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: [0, 1, 1, 0], y: [16, 0, 0, -12] }}
            transition={{
              duration: 5,
              times: [0, 0.14, 0.82, 1],
              delay: i * 0.9,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white/95 p-3 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.5)] backdrop-blur"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900">
              <item.icon className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-xs font-medium text-zinc-900">
                {item.title}
              </p>
              <p className="mt-0.5 truncate text-[11px] text-zinc-500">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const INTEGRATIONS_LEFT = ["Google Calendar", "Zoom", "Stripe"];
const INTEGRATIONS_RIGHT = ["Slack", "HubSpot", "Google Meet"];

/** Hub central cu raze animate către integrări. */
function IntegrationsDiagram() {
  const chipY = [24, 106, 188];
  const chipW = 120;
  const chipH = 34;
  const hub = { x: 150, y: 110, w: 120, h: 40 };
  const hubCenterY = hub.y + hub.h / 2;

  const beams = [
    ...chipY.map((y) => ({
      d: `M ${hub.x} ${hubCenterY} Q 96 ${
        (y + chipH / 2 + hubCenterY) / 2
      } ${8 + chipW} ${y + chipH / 2}`,
      end: { x: 8 + chipW, y: y + chipH / 2 },
    })),
    ...chipY.map((y) => ({
      d: `M ${hub.x + hub.w} ${hubCenterY} Q 324 ${
        (y + chipH / 2 + hubCenterY) / 2
      } 292 ${y + chipH / 2}`,
      end: { x: 292, y: y + chipH / 2 },
    })),
  ];

  const renderChips = (labels: string[], x: number, keyPrefix: string) =>
    chipY.map((y, i) => (
      <g key={`${keyPrefix}-${y}`}>
        <rect
          x={x}
          y={y}
          width={chipW}
          height={chipH}
          rx={8}
          fill="#ffffff"
          stroke="#e4e4e7"
        />
        <text
          x={x + chipW / 2}
          y={y + chipH / 2 + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="11"
          fill="#52525b"
        >
          {labels[i]}
        </text>
      </g>
    ));

  return (
    <div className="absolute inset-x-4 top-4 h-[19rem] [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]">
      <svg viewBox="0 0 420 250" className="h-full w-full" aria-hidden="true">
        {beams.map((beam, i) => (
          <motion.path
            key={beam.d}
            d={beam.d}
            fill="none"
            stroke="#d4d4d8"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 0.9, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.8, 1],
              delay: i * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <rect
          x={hub.x}
          y={hub.y}
          width={hub.w}
          height={hub.h}
          rx={10}
          fill="#18181b"
        />
        <text
          x={hub.x + hub.w / 2}
          y={hubCenterY + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="13"
          fontWeight="500"
          fill="#ffffff"
        >
          Calendaro
        </text>

        {renderChips(INTEGRATIONS_LEFT, 8, "left")}
        {renderChips(INTEGRATIONS_RIGHT, 292, "right")}
      </svg>
    </div>
  );
}

/** Calendar compact, în stilul cardului din hero. */
function MiniCalendar() {
  const cells = buildMonth(BASE_YEAR, BASE_MONTH);
  const selectedDay = 27;

  return (
    <div className="absolute inset-x-8 top-10 origin-top scale-90 rounded-xl border border-zinc-200 bg-white p-3 shadow-[0_12px_32px_-22px_rgba(24,24,27,0.45)] [mask-image:linear-gradient(to_top,transparent_35%,#000_100%)]">
      <div className="mb-2 flex items-baseline justify-between">
        <p className="text-xs font-semibold text-zinc-900">
          {MONTHS_RO[BASE_MONTH]}{" "}
          <span className="font-medium text-zinc-500">{BASE_YEAR}</span>
        </p>
        <div className="flex gap-1">
          <span className="flex size-5 items-center justify-center rounded-md border border-zinc-200 text-zinc-500">
            <ChevronLeft className="size-3" />
          </span>
          <span className="flex size-5 items-center justify-center rounded-md border border-zinc-200 text-zinc-500">
            <ChevronRight className="size-3" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
          <div
            key={`${day}-${i}`}
            className="flex items-center justify-center text-[10px] font-medium text-zinc-400"
          >
            {day}
          </div>
        ))}

        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`mini-empty-${index}`} className="size-6" />;
          }

          const available = isAvailable(day, BASE_MONTH);
          const isSelected = day === selectedDay;

          return (
            <div
              key={`mini-${day}`}
              className={`flex size-6 items-center justify-center rounded-[5px] text-[11px] font-medium ${
                isSelected
                  ? "bg-zinc-700 text-white"
                  : available
                    ? "bg-zinc-100 text-zinc-900"
                    : "text-zinc-400"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BentoShowcase() {
  const cards = [
    {
      Icon: Link2,
      name: "Un link pentru fiecare serviciu",
      description:
        "Fiecare tip de întâlnire are linkul lui, cu durată, preț și formular propriu. Le partajezi o singură dată.",
      href: "#cum-functioneaza",
      cta: "Vezi cum funcționează",
      className: "lg:col-span-1",
      background: <LinkMarquee />,
    },
    {
      Icon: Bell,
      name: "Notificări care te țin la curent",
      description:
        "Confirmări, plăți și reprogramări apar instant în dashboard și pe telefon, fără să verifici manual agende.",
      href: "#functii",
      cta: "Află mai mult",
      className: "lg:col-span-2",
      background: <NotificationsStack />,
    },
    {
      Icon: Share2,
      name: "Peste 100 de integrări",
      description:
        "Google Calendar, Zoom, Stripe, Slack, HubSpot și orice altceva ai nevoie prin API-ul și webhook-urile noastre.",
      href: "#preturi",
      cta: "Vezi integrările",
      className: "lg:col-span-2",
      background: <IntegrationsDiagram />,
    },
    {
      Icon: CalendarDays,
      name: "Calendarul tău, sincronizat",
      description:
        "Filtrezi pe zi, echipă sau tip de întâlnire, iar intervalele ocupate se blochează automat în toate calendarele.",
      href: "#intrebari",
      cta: "Descoperă calendarul",
      className: "lg:col-span-1",
      background: <MiniCalendar />,
    },
  ];

  return (
    <section id="platforma" className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Platforma
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            O platformă, toate uneltele de programare
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Linkuri, notificări, integrări și calendar — toate lucrând împreună,
            fără să schimbi între cinci aplicații diferite.
          </p>
        </div>

        <BentoGrid className="mt-12">
          {cards.map((card) => (
            <BentoCard key={card.name} {...card} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             CUM FUNCȚIONEAZĂ                               */
/* -------------------------------------------------------------------------- */

const STEPS = [
  {
    number: "01",
    title: "Creezi tipul de întâlnire",
    text: "Alegi durata, locația, regulile de programare și întrebările din formular. Două minute, fără cod.",
  },
  {
    number: "02",
    title: "Distribui linkul",
    text: "Îl pui în bio, în semnătura de email sau îl trimiți direct clientului. Fiecare coleg are linkul lui.",
  },
  {
    number: "03",
    title: "Primești programarea",
    text: "Clientul alege ora, plata se procesează, iar evenimentul ajunge în Google Calendar cu link de Meet.",
  },
];

function HowItWorks() {
  return (
    <section
      id="cum-functioneaza"
      className="border-b border-zinc-200/80 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Cum funcționează
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              De la link la întâlnire confirmată, în trei pași
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              Fără instalări, fără training pentru echipă, fără sincronizări
              manuale. Configurezi o dată și funcționează în fundal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <ShieldCheck className="size-3.5" /> Date stocate în UE
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <Globe className="size-3.5" /> Produs realizat în România
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700">
                <Headphones className="size-3.5" /> Suport în română
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-5 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6"
              >
                <span className="text-sm font-semibold text-zinc-400">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COMPARAȚIE                                  */
/* -------------------------------------------------------------------------- */

const COMPARISON = [
  {
    label: "Programări nelimitate în primul plan",
    calendly: false,
    calendaro: true,
  },
  {
    label: "Calendarul tău, brandat integral",
    calendly: false,
    calendaro: true,
  },
  { label: "Plăți online incluse (Stripe)", calendly: false, calendaro: true },
  { label: "Round-robin pentru echipe", calendly: true, calendaro: true },
  { label: "Fusuri orare multiple", calendly: true, calendaro: true },
  { label: "API complet + webhooks", calendly: false, calendaro: true },
  { label: "Date găzduite în UE", calendly: false, calendaro: true },
  { label: "Suport în limba română", calendly: false, calendaro: true },
];

function Comparison() {
  return (
    <section
      id="comparatie"
      className="border-b border-zinc-200/80 bg-zinc-50/50"
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Comparație
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Calendaro sau Calendly?
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Am construit Calendaro pornind de la lucrurile care ne enervau cel
            mai mult la instrumentele de programare existente.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-zinc-200 bg-white">
          <div className="grid grid-cols-[minmax(0,1fr)_88px_88px] items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-5 py-4 text-xs font-semibold tracking-wide text-zinc-500 uppercase sm:grid-cols-[minmax(0,1fr)_120px_120px]">
            <span>Funcție</span>
            <span className="text-center">Calendly</span>
            <span className="text-center text-zinc-900">Calendaro</span>
          </div>

          {COMPARISON.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[minmax(0,1fr)_88px_88px] items-center gap-2 px-5 py-4 text-sm sm:grid-cols-[minmax(0,1fr)_120px_120px] ${
                i % 2 === 1 ? "bg-zinc-50/60" : "bg-white"
              }`}
            >
              <span className="pr-2 text-zinc-700">{row.label}</span>
              <span className="flex justify-center">
                {row.calendly ? (
                  <Check className="size-4 text-zinc-400" />
                ) : (
                  <X className="size-4 text-zinc-300" />
                )}
              </span>
              <span className="flex justify-center">
                <span className="flex size-5 items-center justify-center rounded-full bg-zinc-900 text-white">
                  <Check className="size-3" />
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#incepe"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-colors hover:bg-zinc-800"
          >
            Migrează gratuit în 5 minute
            <ArrowRight className="size-3.5" />
          </a>
          <span className="text-sm text-zinc-500">
            Importăm automat tipurile de întâlnire existente.
          </span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                TESTIMONIALE                                */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS = [
  {
    quote:
      "Am mutat toată clinica pe Calendaro într-o după-amiază. Receptura nu mai pierde niciun apel, iar pacienții primesc confirmare instant.",
    name: "Ioana Marinescu",
    role: "Manager, Clinica Sfânta Maria",
    initials: "IM",
  },
  {
    quote:
      "Programările cu avans plătit online ne-au tăiat anulările la jumătate. Pentru un studio de consultanță asta contează direct în cifra de afaceri.",
    name: "Radu Iliescu",
    role: "Fondator, Iliescu Advisory",
    initials: "RI",
  },
  {
    quote:
      "Am integrat API-ul în platforma proprie în două zile. Webhook-urile sunt stabile, iar documentația e scrisă de oameni care chiar au folosit-o.",
    name: "Andrei Dobre",
    role: "CTO, BookEasy",
    initials: "AD",
  },
];

function Testimonials() {
  return (
    <section className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Testimoniale
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Echipe care nu mai pierd timp cu agende
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <TrendingUp className="size-4 text-zinc-900" />
            <span>4,9/5 din 1.240 de recenzii verificate</span>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6"
            >
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-3.5 fill-zinc-900 text-zinc-900"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-700">
                  „{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-semibold text-white">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium text-zinc-900">
                    {item.name}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   PREȚURI                                  */
/* -------------------------------------------------------------------------- */

const PLANS = [
  {
    name: "Pro",
    monthly: 39,
    annual: 31,
    description: "Ideal pentru profesioniști independenți și consultanți.",
    features: [
      "Tipuri de întâlniri nelimitate",
      //   "Plăți online cu Stripe",
      "Statistici și raport de activitate",
      "Memento prin email",
      "Formulare de pre-calificare",
      "Integrări cu Google Calendar, Zoom și Slack",
      "Webhooks și API",
      "Iframe pentru site și white-label",
    ],
    cta: "Încearcă 14 zile gratuit",
    highlight: true,
  },
  {
    name: "Business",
    monthly: 89,
    annual: 71,
    description: "Pentru firme cu mai mulți colegi în agendă.",
    features: [
      "Tot ce include planul Pro",
      "Round-robin și echipe",
      "Roluri și permisiuni",
      "Raport de conversie",
      "Domain Custom și white-label",
      "Memento SMS și email custom",
      "Amintire automată",
      "SSO și audit log",
      "Manager de cont dedicat",
    ],
    cta: "Vorbește cu echipa",
    highlight: false,
  },
];

const CUSTOM_PLAN = {
  name: "Custom",
  badge: "Automatizări & AI",
  description:
    "Pentru firme care vor programări complet automatizate, pe procesele lor.",
  priceLabel: "La cerere",
  priceNote: "Preț lunar, dimensionat pe volumul tău",
  features: [
    "Recepționist automat 24/7 si follow-up cu AI",
    "Follow-up și reminder-e custom per client cu AI",
    "Integrări custom: CRM, ERP, API intern",
    "Fluxuri de programare personalizate",
    "White-label complet și aplicație mobilă",
    "SLA, SSO și manager de cont dedicat",
  ],
  cta: "Programează o discuție",
};

function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="preturi" className="border-b border-zinc-200/80 bg-zinc-50/50">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
            Prețuri
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Prețuri simple, fără surprize
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            Toate planurile includ 14 zile de probă. Poți anula oricând, direct
            din cont.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
                !annual
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Lunar
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all ${
                annual
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Anual
              <span className="ml-1.5 text-xs opacity-80">-20%</span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.highlight
                    ? "border-zinc-900 bg-white shadow-[0_24px_60px_-32px_rgba(24,24,27,0.5)]"
                    : "border-zinc-200 bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white">
                    <Sparkles className="size-3" />
                    Cel mai popular
                  </span>
                )}

                <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase">
                  {plan.name}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-500">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-medium tracking-tight text-zinc-900">
                    {price === 0 ? "0" : price}
                  </span>
                  <span className="text-sm text-zinc-500">
                    lei / lună{annual && price > 0 ? ", facturat anual" : ""}
                  </span>
                </div>

                <a
                  href="#incepe"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    plan.highlight
                      ? "bg-zinc-900 text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] hover:bg-zinc-800"
                      : "border border-zinc-300 bg-zinc-50 text-zinc-800 hover:bg-zinc-100"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="size-3.5" />
                </a>

                <ul className="mt-6 space-y-3 border-t border-zinc-200 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-zinc-700"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-zinc-900" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

          {/* ------------- Plan custom: automatizări & AI (dark) ------------- */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(70%_50%_at_80%_0%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

            <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white">
              <Sparkles className="size-3" />
              {CUSTOM_PLAN.badge}
            </span>

            <h3 className="relative text-sm font-semibold tracking-wide text-white uppercase">
              {CUSTOM_PLAN.name}
            </h3>
            <p className="relative mt-1.5 text-sm text-zinc-400">
              {CUSTOM_PLAN.description}
            </p>

            <div className="relative mt-5">
              <p className="text-3xl font-medium tracking-tight text-white">
                {CUSTOM_PLAN.priceLabel}
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                {CUSTOM_PLAN.priceNote}
              </p>
            </div>

            <a
              href="#incepe"
              className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              {CUSTOM_PLAN.cta}
              <ArrowRight className="size-3.5" />
            </a>

            <ul className="relative mt-6 space-y-3 border-t border-white/10 pt-6">
              {CUSTOM_PLAN.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-zinc-300"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-white" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    FAQ                                     */
/* -------------------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    question: "Pot migra din Calendly fără să pierd programările existente?",
    answer:
      "Da. Importul preia tipurile de întâlnire, disponibilitatea și linkurile publicate. Programările viitoare rămân în calendarele tale, iar clienții primesc automat linkul nou în memento-ul de confirmare.",
  },
  {
    question: "Ce se întâmplă dacă doi clienți aleg același interval?",
    answer:
      "Calendaro verifică disponibilitatea în timp real, pe toate calendarele conectate, înainte de a afișa orele libere. În momentul în care un interval este rezervat, dispare din listă pentru toți ceilalți vizitatori.",
  },
  {
    question: "Pot încasa avansul pentru o programare?",
    answer:
      "Da. În planul Pro conectezi contul Stripe sau PayPal și setezi un avans fix ori un procent. Intervalul se blochează doar după ce plata este confirmată, iar factura se emite automat.",
  },
  {
    question: "Unde sunt găzduite datele?",
    answer:
      "Toate datele sunt găzduite în centre de date din Uniunea Europeană, criptate AES-256 în repaus și TLS 1.3 în tranzit. Suntem conformi GDPR și semnăm DPA la cerere.",
  },
  {
    question: "Funcționează cu fusuri orare diferite?",
    answer:
      "Da. Clientul își vede orele în fusul lui orar, iar tu lucrezi în fusul tău. Conversia se face automat, inclusiv pentru schimbările de oră de vară.",
  },
  {
    question: "Există reducere pentru ONG-uri și instituții de învățământ?",
    answer:
      "Da, oferim 50% reducere pentru organizații non-profit, clinici publice și universități. Scrie-ne din formularul de contact și activăm reducerea în aceeași zi.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="intrebari" className="border-b border-zinc-200/80 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Întrebări frecvente
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Răspunsuri la ce ne întreabă cel mai des
            </h2>
            <p className="mt-4 text-base text-zinc-600">
              Nu ți-am răspuns la întrebare? Scrie-ne la{" "}
              <a
                href="mailto:salut@calendaro.ro"
                className="font-medium text-zinc-900 underline underline-offset-4"
              >
                salut@calendaro.ro
              </a>{" "}
              și revenim în aceeași zi lucrătoare.
            </p>
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
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-zinc-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CTA FINAL                                   */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section id="incepe" className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.12)_0%,transparent_70%)]" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-light text-zinc-200">
              <Sparkles className="size-3.5" />
              14 zile gratuit, fără card bancar
            </span>

            <h2 className="mt-6 text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Începe să primești programări în ritmul tău
            </h2>
            <p className="mt-4 text-base text-zinc-300">
              Creează-ți primul tip de întâlnire în mai puțin de două minute și
              trimite linkul clientului următor.
            </p>

            <div className="mx-auto mt-8 grid max-w-lg gap-2 sm:grid-cols-2">
              <a
                href="#incepe"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                <GoogleIcon />
                Continuă cu Google
              </a>
              <a
                href="#incepe"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                <Mail className="size-4" />
                Înscrie-te cu email
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5" /> GDPR, date în UE
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Smartphone className="size-3.5" /> Aplicație iOS & Android
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Building2 className="size-3.5" /> Facturare pentru firme
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  FOOTER                                    */
/* -------------------------------------------------------------------------- */

const FOOTER_COLUMNS = [
  {
    title: "Produs",
    links: ["Funcții", "Prețuri", "Integrări", "Aplicații mobile", "Noutăți"],
  },
  {
    title: "Soluții",
    links: [
      "Clinici și cabinete",
      "Consultanță",
      "Vânzări B2B",
      "Educație",
      "Resurse umane",
    ],
  },
  {
    title: "Dezvoltatori",
    links: [
      "Documentație API",
      "Webhooks",
      "SDK JavaScript",
      "Status",
      "Changelog",
    ],
  },
  {
    title: "Companie",
    links: [
      "Despre noi",
      "Blog",
      "Cariere",
      "Contact",
      "Termeni și confidențialitate",
    ],
  },
];

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/70">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
              Software de programări construit în România, pentru echipe care
              lucrează cu oameni.
            </p>
            <a
              href="#incepe"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              Creează cont gratuit
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold tracking-[0.14em] text-zinc-900 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#incepe"
                        className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {BASE_YEAR} Calendaro. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <Globe className="size-3.5" /> Română
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="size-3.5" /> Status: operațional
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    PAGE                                    */
/* -------------------------------------------------------------------------- */

export default function CalendaroPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <ProductNav />
      <Hero />
      <EasyScheduling />
      {/* <SocialProof /> */}
      <Features />

      <HowItWorks />
      {/* <Comparison /> */}
      {/* <Testimonials /> */}
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
