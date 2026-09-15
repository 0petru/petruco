import type { Metadata } from "next";

import { Deliverables } from "@/app/components/dezvoltare-aplicatii/Deliverables";
import { Faq } from "@/app/components/dezvoltare-aplicatii/Faq";
import { Guarantee } from "@/app/components/dezvoltare-aplicatii/Guarantee";
import { Hero } from "@/app/components/dezvoltare-aplicatii/Hero";
import { Pain } from "@/app/components/dezvoltare-aplicatii/Pain";
import {
  FloatingCta,
  UrgencyBar,
} from "@/app/components/dezvoltare-aplicatii/Sticky";

export const metadata: Metadata = {
  title: "Dezvoltare aplicații web și mobile | Petruco Digital",
  description:
    "Construim aplicații web și mobile pentru afaceri: arhitectură, design, integrări, lansare în 30 de zile lucrătoare sau primești 100% din avans înapoi. Preț fix, cod predat pe numele tău.",
  openGraph: {
    title: "Dezvoltare aplicații web și mobile | Petruco Digital",
    description:
      "Web, iOS și Android dintr-un singur proiect. Preț fix stabilit înainte de prima linie de cod, lansare în 30 de zile sau avansul înapoi.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function DezvoltareAplicatiiPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <UrgencyBar />
      <Hero />
      <Pain />
      <Deliverables />
      <Guarantee />
      <Faq />
      <FloatingCta />
    </main>
  );
}
