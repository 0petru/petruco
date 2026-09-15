import type { Metadata } from "next";

import { Faq } from "@/app/components/ai-si-automatizari/Faq";
import { Guarantee } from "@/app/components/ai-si-automatizari/Guarantee";
import { Hero } from "@/app/components/ai-si-automatizari/Hero";
import { Modules } from "@/app/components/ai-si-automatizari/Modules";
import { Pain } from "@/app/components/ai-si-automatizari/Pain";
import {
  FloatingCta,
  UrgencyBar,
} from "@/app/components/ai-si-automatizari/Sticky";
import { Steps } from "@/app/components/ai-si-automatizari/Steps";

export const metadata: Metadata = {
  title: "AI & Automatizări pentru afaceri | Petruco Digital",
  description:
    "Agenți AI care răspund la apeluri, califică lead-uri și programează întâlniri 24/7. Implementare completă în 7 zile lucrătoare sau primești 100% din onorariu înapoi.",
  openGraph: {
    title: "AI & Automatizări pentru afaceri | Petruco Digital",
    description:
      "Recepție vocală AI, calificare de lead-uri, rutare automată și contactare în 18 secunde. Sistem funcțional în 7 zile sau banii înapoi.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function AiSiAutomatizariPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <UrgencyBar />
      <Hero />
      <Pain />
      <Modules />
      <Steps />
      <Guarantee />
      <Faq />
      <FloatingCta />
    </main>
  );
}
