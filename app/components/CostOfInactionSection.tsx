import React from 'react';
import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface CostOfInactionSectionProps {
  onOpenAuditModal: () => void;
}

export const CostOfInactionSection: React.FC<CostOfInactionSectionProps> = ({
  onOpenAuditModal,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Realitatea Nevăzută</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ce costă să nu ai o prezență completă?
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="space-y-8 text-base sm:text-lg text-slate-300 leading-relaxed">
          <p className="text-xl sm:text-2xl font-bold text-white text-center max-w-2xl mx-auto leading-snug">
            Problema nu este doar lipsa unui website.
            <br />
            <span className="text-teal-400 font-semibold">
              Problema este ce se pierde înainte să afli vreodată.
            </span>
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 font-normal text-slate-200 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-slate-900/60 px-2 py-0.5 rounded">01</span>
              <span>Cineva primește recomandarea numelui tău și te caută pe Google.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-slate-900/60 px-2 py-0.5 rounded">02</span>
              <span>Nu găsește un spațiu oficial sau suficiente informații de contact.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-slate-900/60 px-2 py-0.5 rounded">03</span>
              <span>Nu înțelege exact abordarea și tipurile de terapie oferite.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-teal-400 bg-slate-900/60 px-2 py-0.5 rounded">04</span>
              <span>Nu găsește un mod facil și confidențial de programare.</span>
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-slate-700 text-rose-300 font-medium">
              <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded">05</span>
              <span>Și continuă căutarea către următorul coleg cu profil complet.</span>
            </div>
          </div>

          <div className="text-xl sm:text-2xl font-semibold text-slate-100 text-center py-2">
            Iar tu s-ar putea să nu știi vreodată că această persoană te-a căutat.
          </div>

          {/* Golden Core Copywriting Highlight */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-teal-500/30 text-center shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-3 font-mono">
              Adevărul Inacțiunii
            </span>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              „Nu poți recupera o oportunitate despre care nici măcar nu știi că ai pierdut-o.”
            </blockquote>
          </div>

          {/* Reassurance & Solution bridge */}
          <div className="pt-4 text-center space-y-6">
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Nu construim un simplu site de prezentare. Construim o punte de încredere care transformă o căutare întâmplătoare într-o programare fermă.
            </p>

            <div>
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-teal-600/30"
              >
                <span>Solicită o analiză a prezenței tale actuale</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


