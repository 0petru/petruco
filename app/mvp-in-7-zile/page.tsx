import type { Metadata } from "next";

import { Deliverables } from "@/app/components/mvp-in-7-zile/Deliverables";
import { Faq } from "@/app/components/mvp-in-7-zile/Faq";
import { Guarantee } from "@/app/components/mvp-in-7-zile/Guarantee";
import { Hero } from "@/app/components/mvp-in-7-zile/Hero";
import { Pain } from "@/app/components/mvp-in-7-zile/Pain";
import { SocialProof } from "@/app/components/mvp-in-7-zile/SocialProof";
import {
  FloatingCta,
  UrgencyBar,
} from "@/app/components/mvp-in-7-zile/Sticky";

export const metadata: Metadata = {
  title: "MVP în 7 zile | Petruco Digital",
  description:
    "Construim un MVP funcțional în 7 zile lucrătoare: o funcție care validează ideea, cont utilizator, bază de date și tracking. Sau primești 100% din avans înapoi.",
  openGraph: {
    title: "MVP în 7 zile | Petruco Digital",
    description:
      "Testează-ți ideea în piață în 7 zile, nu în 6 luni. Preț fix stabilit înainte de prima linie de cod, lansare în 7 zile sau avansul înapoi.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function MvpInSapteZilePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <UrgencyBar />
      <Hero />
      <Pain />
      <Deliverables />
      <SocialProof />
      <Guarantee />
      <Faq />
      <FloatingCta />
    </main>
  );
}
