import React from "react";
import { Play, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenVslModal: () => void;
  onOpenAuditModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVslModal,
  onOpenAuditModal,
}) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-teal-50/40 via-white to-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Category Label */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-100/70 text-teal-800 border border-teal-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Sistem de Prezență Digitală pentru Psihologi</span>
          </span>
        </div>

        {/* 1. HERO Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mx-auto">
          Când un potențial client te caută pe{" "}
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>,{" "}
          <span className="underline decoration-4">ce găsește?</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed mx-auto font-normal">
          Descoperă în doar câteva minute de ce pierzi clienți din cauza unei
          prezențe online slabe și cum poți construi un brand digital care
          inspiră încredere și aduce clienți.
        </p>

        {/* Video Player Preview (Modern Glassmorphic Stage) */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 aspect-video shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/1224082447?title=0&byline=0&portrait=0"
              title="Prezentare video pentru cabinete de psihologie"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Direct CTA Buttons under video preview */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-sky-300/40 bg-[#1a2b6a] px-8 py-4 text-md font-bold text-white shadow-[0_14px_30px_rgba(37,99,235,0.45)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(37,99,235,0.52)] cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#243b8f] opacity-90" />
              <span className="absolute -top-10 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-sky-200/20 blur-xl" />
              <span className="absolute inset-x-3 bottom-1 h-5 rounded-full bg-blue-950/40 blur-md" />
              <span className="relative inline-flex items-center gap-3">
                <span>Solicită Analiza Gratuită</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </button>

            <button
              onClick={onOpenVslModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-[#1a2b6a] bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-[#1a2b6a]" />
              <span>Vezi Prezentarea (6 min)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
