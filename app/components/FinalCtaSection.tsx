import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenAuditModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAuditModal }) => {
  return (
    <section className="py-24 sm:py-32 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Concluzie &amp; Pasul Următor</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ce vede cineva atunci când te caută pe Google?
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Poți afla cu exactitate în cadrul unei analize gratuite a prezenței tale online.
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


