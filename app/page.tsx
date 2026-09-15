import type { Metadata } from "next";

import { Closing } from "./components/home/Closing";
import { Faq } from "./components/home/Faq";
import { Hero } from "./components/home/Hero";
import { Offers } from "./components/home/Offers";
import { Products } from "./components/home/Products";
import { Services } from "./components/home/Services";

export const metadata: Metadata = {
  title: "Petruco Digital — Software, AI și automatizări pentru afaceri",
  description:
    "Companie de software full-service: facem design, construim, lansăm și menținem website-uri, aplicații, agenți AI și automatizări. Website de prezentare livrat în 2 zile, cu SEO, plăți și rezervări incluse.",
  openGraph: {
    title: "Petruco Digital — Software, AI și automatizări pentru afaceri",
    description:
      "Design, dezvoltare, lansare și mentenanță pentru produse digitale. Website de prezentare în 2 zile sau sistem complet de prezență digitală.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <Hero />
      <Services />
      <Offers />
      <Products />
      <Faq />
      <Closing />
    </main>
  );
}
