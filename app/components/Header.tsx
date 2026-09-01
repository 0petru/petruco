import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenAuditModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-600/20">
            Ψ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 tracking-tight text-lg">
                PsyDigital
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-teal-50 text-teal-700 border border-teal-200/60">
                pentru Psihologi
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Prezență Digitală · Google Maps · SEO · Programări
            </p>
          </div>
        </div>

        {/* Quick Nav & Direct CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#problema" className="hover:text-teal-600 transition-colors">
              Problema căutării
            </a>
            <a href="#comparatie" className="hover:text-teal-600 transition-colors">
              Before & After
            </a>
            <a href="#exemple" className="hover:text-teal-600 transition-colors">
              Exemple Website
            </a>
            <a href="#solutie" className="hover:text-teal-600 transition-colors">
              Sistemul Complet
            </a>
            <a href="#testimoniale" className="hover:text-teal-600 transition-colors">
              Testimoniale
            </a>
            <a href="#faq" className="hover:text-teal-600 transition-colors">
              FAQ
            </a>
          </nav>

          <button
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow shadow-teal-600/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Solicită Analiză Gratuită</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </button>
        </div>
      </div>
    </header>
  );
};


