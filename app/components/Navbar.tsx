"use client";

import { useState } from "react";

import { MainNav } from "@/app/components/main-nav";
import { ContactModal } from "@/app/components/ContactModal";

export function Navbar() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-white/60 backdrop-blur dark:bg-[#09090b]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:gap-10 lg:px-8">
        <MainNav onOpenContact={() => setContactModalOpen(true)} />
        <button
          type="button"
          onClick={() => setContactModalOpen(true)}
          className="hidden shrink-0 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 md:inline-flex"
        >
          Contact
        </button>
      </div>
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        config={{
          eyebrow: "Contact",
          title: "Spune-ne cu ce te putem ajuta",
          description:
            "Completează câteva detalii și revenim cu o direcție clară pentru proiectul tău.",
          serviceOptions: [
            "Securitate",
            "Dezvoltare Web & Mobile",
            "Automatizări de Business",
            "Marketing & Performance",
            "Ventures / Co-Build",
            "Altceva",
          ],
          showCompany: false,
          showWebsite: false,
        }}
      />
    </header>
  );
}
