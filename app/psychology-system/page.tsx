"use client";

import React, { useState, useEffect } from "react";
import { Header } from "./../components/Header";
import { HeroSection } from "./../components/HeroSection";
import { SearchScenarioSection } from "./../components/SearchScenarioSection";
import { WhatTheyFindSection } from "./../components/WhatTheyFindSection";
import { BeforeAfterSection } from "./../components/BeforeAfterSection";
import { WebsiteExamplesSection } from "./../components/WebsiteExamplesSection";
import { EcosystemSection } from "./../components/EcosystemSection";
import { CostOfInactionSection } from "./../components/CostOfInactionSection";
import { SolutionSection } from "./../components/SolutionSection";
import { TestimonialsSection } from "./../components/TestimonialsSection";
import { OfferSection } from "./../components/OfferSection";
import { FaqSection } from "./../components/FaqSection";
import { FinalCtaSection } from "./../components/FinalCtaSection";
import { Footer } from "./../components/Footer";
import { VslPlayerModal } from "./../components/VslPlayerModal";
import { WebsitePreviewModal } from "./../components/WebsitePreviewModal";
import { AuditRequestModal } from "./../components/AuditRequestModal";
import { TheResultSection } from "./../components/TheResultSection";
import { WebsiteExample } from "./types";
import { ArrowUp, Play, Sparkles } from "lucide-react";
import { HowItShouldLookSection } from "../components/HowItShouldLookSection";

export default function App() {
  const [isVslModalOpen, setIsVslModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<WebsiteExample | null>(
    null,
  );
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#2D5A27] selection:text-white flex flex-col">
      {/* 0. Sticky Top Navigation Header */}
      <Header onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Main Landing Page Flow in Exact Requested Order */}
      <main className="flex-1">
        {/* 1. HERO + VSL */}
        <HeroSection
          onOpenVslModal={() => setIsVslModalOpen(true)}
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* 2. TE CAUTĂ PE GOOGLE (DUREREA — „Acesta este momentul în care te poate pierde”) */}
        <SearchScenarioSection />

        {/* 3. CE GĂSEȘTE? (Varianta 1 ❌ - Mockup urât / incomplet) */}
        <WhatTheyFindSection />

        <TheResultSection />

        <HowItShouldLookSection />

        {/* 4. BEFORE vs AFTER (Două experiențe complet diferite) */}
        <BeforeAfterSection />

        {/* 5. EXEMPLE DE WEBSITE-URI (3 Exemple de prezență online de cabinet)
        <WebsiteExamplesSection
          onSelectExample={(example) => setSelectedExample(example)}
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        /> */}

        {/* 6. SEARCH + MAPS + WEBSITE („NU ESTE DOAR DESPRE UN WEBSITE”) */}
        <EcosystemSection />

        {/* 7. CE SE POATE ÎNTÂMPLA CÂND LIPSESC? („CE COSTĂ SĂ NU AI ASTA?”) */}
        {/* <CostOfInactionSection
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        /> */}

        {/* 8. SOLUȚIA TA (Sistemul de Prezență Digitală pentru Psihologi) */}
        <SolutionSection onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 9 & 10. REVIEWS / TESTIMONIALE (Video Testimoniale înaintea celor scrise + Testimoniale scrise) */}
        {/* <TestimonialsSection
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        /> */}

        {/* 11. ANALIZA GRATUITĂ (Oferta fără risc + Formular) */}
        <OfferSection onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 12. FAQ (Întrebări Frecvente) */}
        <FaqSection />

        {/* 13. FINAL CTA (Pe fundal contrastant simplu) */}
        <FinalCtaSection onOpenAuditModal={() => setIsAuditModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Floating Action Bar / Scroll to Top */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2 animate-fadeIn">
          <button
            onClick={() => setIsAuditModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#2D5A27] hover:bg-[#3E7B36] text-white font-bold text-[10px] uppercase tracking-widest shadow-md transition-all cursor-pointer border border-[#2D5A27]"
          >
            <span>Analiză Gratuită →</span>
          </button>
          <button
            onClick={scrollToTop}
            className="p-3 bg-[#1A1A1A] text-white hover:bg-[#333] border border-[#333] shadow-md transition-all cursor-pointer"
            title="Înapoi sus"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modals */}
      <VslPlayerModal
        isOpen={isVslModalOpen}
        onClose={() => setIsVslModalOpen(false)}
        onOpenAuditModal={() => {
          setIsVslModalOpen(false);
          setIsAuditModalOpen(true);
        }}
      />

      <WebsitePreviewModal
        example={selectedExample}
        onClose={() => setSelectedExample(null)}
        onOpenAuditModal={() => {
          setSelectedExample(null);
          setIsAuditModalOpen(true);
        }}
      />

      <AuditRequestModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
