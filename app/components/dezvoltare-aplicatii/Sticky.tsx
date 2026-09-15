"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUp, ShieldCheck } from "lucide-react";

/** Bara de urgență + garanție, lipită sub navbar-ul global (h-16). */
export function UrgencyBar() {
  return (
    <div className="sticky top-16 z-30 border-b border-zinc-800 bg-zinc-900 px-4 py-2.5 text-center text-xs font-semibold text-white">
      <ShieldCheck className="mr-1.5 -mt-0.5 inline size-3.5 text-emerald-400" />
      Prima versiune live în 30 de zile lucrătoare sau primești{" "}
      <span className="text-emerald-400">100% din avans înapoi</span>.
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
        Cere estimarea gratuită
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
