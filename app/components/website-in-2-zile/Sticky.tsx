"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUp, ShieldCheck } from "lucide-react";

const WEEKLY_SLOTS = 4;

/**
 * Locuri rămase în săptămâna curentă:
 * - luni → miercuri (începutul săptămânii): 3 locuri
 * - joi → duminică (sfârșitul săptămânii): 1 loc
 */
function getRemainingSlots(date: Date = new Date()) {
  const day = date.getDay(); // 0 = duminică, 1 = luni, ... 6 = sâmbătă
  const isEarlyWeek = day >= 1 && day <= 3;
  return isEarlyWeek ? 3 : 1;
}

/**
 * Bara de urgență + garanție, lipită chiar în vârful paginii (`top-0`).
 *
 * Pe landing page-ul „Website în 2 zile” nu există navbar (vezi `LpTop` și
 * `ConditionalNavbar`), deci bara e singurul element fix din capul paginii.
 * Pe celelalte rute, unde navbar-ul global e prezent, bara nu se folosește.
 */
export function UrgencyBar() {
  // null pe server → text stabil, apoi valoarea reală după montare (fără hydration mismatch).
  const [slots, setSlots] = useState<number | null>(null);

  useEffect(() => {
    setSlots(getRemainingSlots());

    // Reîmprospătează la fiecare oră, ca bara să rămână corectă peste noapte.
    const interval = setInterval(
      () => setSlots(getRemainingSlots()),
      60 * 60 * 1000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-900 px-4 py-2.5 text-center text-xs font-semibold text-white">
      <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <ShieldCheck className="size-3.5 shrink-0 text-emerald-400" />
        <span>
          Ca să livrăm fiecare site în 48h, acceptăm doar {WEEKLY_SLOTS}{" "}
          proiecte pe săptămână.
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300 ring-1 ring-emerald-500/30">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          {slots === null
            ? "Ultimele locuri disponibile"
            : slots === 1
              ? `Ultimul loc rămas din ${WEEKLY_SLOTS}`
              : `Mai rămân ${slots} locuri din ${WEEKLY_SLOTS}`}
        </span>
      </p>
    </div>
  );
}

/** CTA plutitor, apare după ce utilizatorul a trecut de hero. */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 700);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-4 z-30 flex items-center gap-2 sm:right-6 sm:bottom-6">
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-4 py-3 text-xs font-semibold text-white shadow-[0_18px_40px_-18px_rgba(24,24,27,0.7)] transition-all hover:bg-zinc-800"
      >
        Vreau site-ul live în 2 zile
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Înapoi sus"
        className="rounded-xl border border-zinc-200 bg-white p-3 text-zinc-700 shadow-[0_18px_40px_-22px_rgba(24,24,27,0.5)] transition-colors hover:bg-zinc-100"
      >
        <ArrowUp className="size-4" />
      </button>
    </div>
  );
}
