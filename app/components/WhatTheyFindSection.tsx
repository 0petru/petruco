import React from 'react';
import { AlertTriangle, MapPinOff, HelpCircle } from 'lucide-react';

export const WhatTheyFindSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200/80 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Scenariul 01 · Situația comună</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ce găsește un potențial client în 80% din cazuri?
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Visual Mockup: Incomplete / Outdated Online Footprint */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-md relative flex-1 flex flex-col justify-between">
              {/* Mockup Badge */}
              <div className="absolute -top-3 right-4 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Momentul pierderii
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 block">
                  Rezultate Google: „Maria Popescu psiholog”
                </span>

                {/* Bad Snippet 1: Outdated FB page */}
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1 font-mono">
                      <span className="font-semibold text-slate-700">facebook.com</span>
                      <span>› Cabinet-Psihologie-Maria-Popescu</span>
                    </div>
                    <div className="text-blue-700 text-base font-bold hover:underline cursor-pointer">
                      Cabinet Psihologie Maria Popescu | Facebook
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Cabinet Psihologie Maria Popescu, București. 82 de aprecieri. Ultima postare: 14 octombrie 2019. „Vă rugăm să ne trimiteți mesaj pentru informații.”...
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200/60">
                        ✕ Facebook vechi / inactiv
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200/60">
                        ✕ Fără website oficial
                      </span>
                    </div>
                  </div>

                  {/* Bad Snippet 2: Vague Directory Entry */}
                  <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1 font-mono">
                      <span className="font-semibold text-slate-700">catalog-medici.ro</span>
                      <span>› bucuresti › medici-psihologi</span>
                    </div>
                    <div className="text-blue-700 text-base font-bold hover:underline cursor-pointer">
                      Popescu Maria - Cabinet Individual de Psihologie
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Sector 3, București. Nr. telefon indisponibil sau neactualizat. Specializări: Nespecificat. Program: Nespecificat.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200/60">
                        ✕ Fără informații clare servicii
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200/60">
                        ✕ Fără orar sau programare
                      </span>
                    </div>
                  </div>

                  {/* Bad Snippet 3: Missing Google Maps verification */}
                  <div className="p-3.5 bg-red-50/80 rounded-xl border border-red-200/80 flex items-center justify-between text-xs text-red-800">
                    <div className="flex items-center gap-2">
                      <MapPinOff className="w-4 h-4 text-red-600 shrink-0" />
                      <span className="font-semibold">Google Maps: Locație neverificată sau inexistentă</span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-red-600 uppercase">Lipsă orar</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
                „Informații incomplete, profil abandonat, fără website dedicat. Persoana continuă căutarea.”
              </div>
            </div>
          </div>

          {/* Copy Explanation: The direct human reaction */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Persoana nu știe exact cine ești și ce experiență ai.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Nu știe cu ce lucrezi (anxietate, cuplu, adolescenți, traume).
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Nu știe unde ai cabinetul și dacă oferi și ședințe online.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  4
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-800">
                  Nu știe cum să facă o programare fără să deranjeze.
                </p>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl shadow-xl border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block mb-1">
                Concluzia Naturală
              </span>
              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                Poate pur și simplu să continue căutarea.
              </p>
              <p className="text-xs text-slate-300 mt-2 font-normal leading-relaxed">
                Nu este o decizie împotriva ta ca profesionist, ci o reacție firească la nesiguranța generată de lipsa unei prezențe clare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


