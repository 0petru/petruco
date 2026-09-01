import React from 'react';
import { X, MapPin, Phone, ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { WebsiteExample } from '../types';

interface WebsitePreviewModalProps {
  example: WebsiteExample | null;
  onClose: () => void;
  onOpenAuditModal: () => void;
}

export const WebsitePreviewModal: React.FC<WebsitePreviewModalProps> = ({
  example,
  onClose,
  onOpenAuditModal,
}) => {
  if (!example) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-slate-200">
        {/* Browser Mockup Top Chrome */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-1 text-xs font-mono text-slate-300">
              <span className="text-teal-400 font-bold">https://</span>
              <span>{example.id}.cabinet-psihologie.ro</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {example.tag}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Live Interactive Prototype Window */}
        <div className="flex-1 overflow-y-auto bg-slate-50">
          {/* Mock Website Navigation */}
          <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                Ψ
              </div>
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                {example.mockupContent.heroTitle.split('—')[0]}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="hidden md:inline hover:text-teal-700 cursor-pointer">Despre</span>
              <span className="hidden md:inline hover:text-teal-700 cursor-pointer">Servicii</span>
              <span className="hidden md:inline hover:text-teal-700 cursor-pointer">Cabinet &amp; Locație</span>
              <button className="px-3.5 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-700 transition-colors cursor-pointer">
                Programare
              </button>
            </div>
          </div>

          {/* Mock Website Hero */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-teal-50/50 to-white border-b border-slate-200/80">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>Cabinet Acreditat COPSI</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {example.mockupContent.heroTitle}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {example.mockupContent.heroSubtitle}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-5 py-2.5 rounded-xl bg-teal-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-teal-700 transition-colors shadow-sm">
                  {example.mockupContent.contactAction}
                </button>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-xs">
                  <Phone className="w-3.5 h-3.5 text-teal-600" />
                  <span>07xx xxx xxx</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mock Website Specialties */}
          <div className="p-6 sm:p-10 bg-white border-b border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
              Arii de competență &amp; Servicii dedicate
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {example.mockupContent.specialties.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center font-bold text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Website Details & Address */}
          <div className="p-6 sm:p-10 bg-slate-50 grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2 font-mono">
                Despre Abordare
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {example.mockupContent.aboutExcerpt}
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2 flex items-center gap-1.5 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>Locație Cabinet</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900">
                {example.mockupContent.address}
              </p>
              <div className="mt-2 text-xs text-slate-500">
                ✓ Indicații rutiere &amp; acces facil mijloace de transport
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Callout */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div>
            <div className="font-bold text-sm text-white">
              Vrei o prezență similară adaptată cabinetului tău?
            </div>
            <div className="text-xs text-slate-400">
              Inclus în Sistemul de Prezență Digitală pentru Psihologi.
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Închide previzualizarea
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAuditModal();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              <span>Solicită analiza gratuită →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


