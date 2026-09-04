import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenAuditModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuditModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-600/20">
            Ψ
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 tracking-tight text-xs sm:text-sm lg:text-base leading-tight">
                Sistemul de Prezență <br />
                Digitală pentru Psihologi
              </span>
            </div>
          </div>
        </a>

        {/* Quick Nav & Direct CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-md font-medium text-slate-600">
            <a
              href="#problema"
              className="hover:text-teal-600 transition-colors"
            >
              Cum pierzi clienți
            </a>
            <a
              href="#prezenta-online"
              className="hover:text-teal-600 transition-colors"
            >
              Solutia
            </a>

            <a
              href="#solutie"
              className="hover:text-teal-600 transition-colors"
            >
              Sistemul Complet
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
