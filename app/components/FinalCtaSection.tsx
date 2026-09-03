import React from "react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

interface FinalCtaSectionProps {
  onOpenAuditModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenAuditModal,
}) => {
  return (
    <section className="py-24 sm:py-32 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ce vede cineva atunci când te caută pe{" "}
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Primești analiza, explicația pașilor și recomandările concrete. Apoi
          alegi singur dacă vrei să lucrăm împreună. Dacă nu, pleci cu totul
          gratuit și fără nicio obligație.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-teal-500/25 active:scale-[0.99]"
          >
            <span>SOLICITĂ ANALIZA GRATUITĂ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400" />
            <span>Fără costuri ascunse</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Raport confidențial</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>15 minute prezentare</span>
          </div>
        </div>
      </div>
    </section>
  );
};
