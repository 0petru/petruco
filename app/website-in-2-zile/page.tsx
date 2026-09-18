import type { Metadata } from "next";

import { Deliverables } from "@/app/components/website-in-2-zile/Deliverables";
import { Faq } from "@/app/components/website-in-2-zile/Faq";
import { Guarantee } from "@/app/components/website-in-2-zile/Guarantee";
import { Hero } from "@/app/components/website-in-2-zile/Hero";
import { LpTop } from "@/app/components/website-in-2-zile/LpTop";
import { Pain } from "@/app/components/website-in-2-zile/Pain";
import { FloatingCta } from "@/app/components/website-in-2-zile/Sticky";

export const metadata: Metadata = {
  title: "Website de prezentare în 2 zile | Petruco Digital",
  description:
    "Website de prezentare livrat în 2 zile lucrătoare: până la 10 pagini, SEO tehnic, sitemap, plăți online și sistem de rezervări. Sau primești 100% din bani înapoi.",
  openGraph: {
    title: "Website de prezentare în 2 zile | Petruco Digital",
    description:
      "Site live în 2 zile lucrătoare sau banii înapoi. Texte, design, plăți, programări și SEO incluse — fără să scrii nimic.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function WebsiteIn2ZilePage() {
  return (
    <>
      <LpTop />

      <main className="min-h-screen bg-white text-zinc-900 antialiased">
        <Hero />
        <Pain />
        <Deliverables />
        <Guarantee />
        <Faq />
        <FloatingCta />
      </main>
    </>
  );
}
