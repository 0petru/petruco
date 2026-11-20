import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Hero } from "@/app/components/meta-ads-funnels/Hero";

import { Audience } from "@/app/components/meta-ads-funnels/Audience";
import { Cta } from "@/app/components/meta-ads-funnels/Cta";
import { Faq } from "@/app/components/meta-ads-funnels/Faq";
import { Process } from "@/app/components/meta-ads-funnels/Process";
import { Results } from "@/app/components/meta-ads-funnels/Results";
import { Services } from "@/app/components/meta-ads-funnels/Services";
import { FloatingCta } from "@/app/components/meta-ads-funnels/Sticky";

/**
 * Fontul paginii. Restul site-ului folosește Inter (setat pe `body`), dar aici
 * forțăm Inter doar pe conținutul acestei rute, fără să atingem `globals.css`.
 */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Meta Ads & Funnels | Petruco Digital",
  description:
    "Campanii Meta Ads care aduc ROAS: creative noi (static, video, UGC), funnel și user journey optimizate, tracking curat. Am scos și ROAS 12x. Audit gratuit de cont.",
  openGraph: {
    title: "Meta Ads & Funnels | Petruco Digital",
    description:
      "Producem ad-urile, construim funnel-ul și optimizăm până când ROAS-ul crește. Lead-uri calificate și mai multe vânzări, inclusiv pe e-commerce.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function MetaAdsFunnelsPage() {
  return (
    <main
      className={`${inter.variable} min-h-screen bg-white text-zinc-900 antialiased`}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <Hero />

      <Services />
      <Audience />
      <Faq />
      <Cta />
    </main>
  );
}
