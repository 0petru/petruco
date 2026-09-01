import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  return (
    <section id="comparatie" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            Comparație Directă
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Două experiențe complet diferite
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Ce experimentează o persoană în momentul în care îți tastează numele pe Google:
          </p>

          {/* Quick Filter for Mobile View */}
          <div className="sm:hidden flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'both' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              Comparație
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'before' ? 'bg-red-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              ✕ Incomplet
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'after' ? 'bg-teal-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
              }`}
            >
              ✓ Profesional
            </button>
          </div>
        </div>

        {/* Side-by-Side Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: Incomplete Online Presence ❌ */}
          <div
            className={`bg-white rounded-2xl border border-red-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative transition-all ${
              activeTab === 'after' ? 'hidden sm:flex' : 'flex'
            }`}
          >
            <div className="absolute -top-3 right-4 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Momentul pierderii
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 block">
                Scenariul 01: Varianta Incompletă
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-5">
                „Caută și găsește…”
              </h3>

              {/* Checklist Items */}
              <ul className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Informații incomplete:</strong> Lipsesc specializările, onorariile sau tipul de psihoterapie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Un profil vechi:</strong> O pagină de Facebook abandonată din 2019 sau forumuri medicale vechi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Fără website profesional:</strong> Niciun spațiu dedicat unde persoana să înțeleagă atmosfera cabinetului.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Fără claritate:</strong> Nu este clar dacă mai primești pacienți noi sau unde profesezi exact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Contact dificil:</strong> Niciun buton direct de programare, doar telefoane fără orar.</span>
                </li>
              </ul>
            </div>

            {/* Visual Micro-Card Bad */}
            <div className="mt-4 p-4 rounded-xl bg-red-50/60 border border-red-200/60 text-xs text-red-900">
              <div className="text-[11px] uppercase font-bold text-red-700 tracking-wider mb-1">
                Efect psihologic:
              </div>
              <p className="italic leading-relaxed">
                Persoana se simte nesigură dacă ești disponibil, ezită să sune și își continuă căutarea pe Google către următorul psiholog recomandat.
              </p>
            </div>
          </div>

          {/* RIGHT: Professional Online Presence ✓ */}
          <div
            className={`bg-white rounded-2xl border-2 border-teal-600 p-6 sm:p-8 flex flex-col justify-between shadow-xl ring-4 ring-teal-50 relative transition-all ${
              activeTab === 'before' ? 'hidden sm:flex' : 'flex'
            }`}
          >
            {/* Recommended Tag */}
            <div className="absolute -top-3 right-4 bg-teal-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Standardul de Aur
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2 block">
                Scenariul 02: Cabinet Premium
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-5">
                „Caută și găsește…”
              </h3>

              {/* Checklist Items */}
              <ul className="space-y-3.5 mb-6 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Website profesional:</strong> Modern, securizat, optimizat pe mobil și cu design primitor.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Informații clare:</strong> Acreditări COPSI, experiență clinică și valorile tale terapeutice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Servicii structurate:</strong> Fiecare tip de intervenție (individuală, cuplu, evaluare) explicat simplu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Google Maps optimizat:</strong> Pin precis, fotografii din cabinet, orar actualizat și recenzii.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Modalitate simplă de contact:</strong> Buton de WhatsApp, apel direct și formular confidențial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span><strong className="text-slate-900 font-semibold">Programare rapidă:</strong> Ghid pas cu pas despre cum decurge prima ședință.</span>
                </li>
              </ul>
            </div>

            {/* Visual Micro-Card Good */}
            <div className="mt-4 p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 text-xs text-teal-900">
              <div className="text-[11px] uppercase font-bold text-teal-700 tracking-wider mb-1">
                Efect psihologic:
              </div>
              <p className="italic leading-relaxed font-medium">
                Persoana simte siguranță și profesionalism încă din primul moment și trimite direct solicitarea de programare.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Powerful Callout Message */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
            <span className="text-xs uppercase tracking-wider text-teal-400 font-bold block mb-4">
              Principiul Fundamental
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-snug text-white">
              „Prima impresie nu începe atunci când intrați în cabinet.
              <br />
              <span className="text-teal-400 font-bold">
                Pentru mulți oameni, începe înainte — atunci când vă caută online.”
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};


