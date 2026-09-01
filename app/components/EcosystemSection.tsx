import React from 'react';
import { Search, MapPin, Globe, PhoneCall, ShieldCheck, ArrowDown, Layers } from 'lucide-react';

export const EcosystemSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Ecosistemul Digital Integrat</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            „Nu este vorba doar despre un simplu website”
          </h2>
          <div className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed space-y-1">
            <p>Un website singur, izolat, nu este suficient.</p>
            <p>Poți avea cel mai elegant website din lume.</p>
            <p className="text-teal-700 font-semibold">
              Dar dacă nimeni nu te găsește în căutare sau pe hartă, conexiunea se pierde.
            </p>
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden mb-12">
          <div className="text-center mb-8 border-b border-slate-800 pb-4">
            <span className="text-xs uppercase tracking-wider text-teal-400 font-mono font-semibold">
              Traseul Complet al Pacientului Nou · De la Căutare la Programare
            </span>
          </div>

          <div className="flex flex-col items-center max-w-2xl mx-auto">
            {/* Step 1: Persoana Cauta */}
            <div className="w-full max-w-xs text-center p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
              01 · Persoana Te Caută
            </div>

            <ArrowDown className="w-4 h-4 text-teal-400 my-2.5 animate-pulse" />

            {/* Step 2: Google */}
            <div className="w-full max-w-xs text-center p-3.5 rounded-xl bg-white text-slate-900 font-bold text-base border border-slate-200 shadow-md">
              Google Search &amp; Maps
            </div>

            <ArrowDown className="w-4 h-4 text-teal-400 my-2.5 animate-pulse" />

            {/* Step 3: Triada Search, Maps, Website */}
            <div className="w-full grid grid-cols-3 gap-3 sm:gap-4 my-2">
              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-center flex flex-col items-center justify-center shadow-xs">
                <Search className="w-4 h-4 text-teal-400 mb-1.5" />
                <span className="text-xs font-bold text-white">SEARCH</span>
                <span className="text-[11px] text-slate-400 hidden sm:block mt-0.5">Indexare &amp; Nume</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-center flex flex-col items-center justify-center shadow-xs">
                <MapPin className="w-4 h-4 text-teal-400 mb-1.5" />
                <span className="text-xs font-bold text-white">MAPS</span>
                <span className="text-[11px] text-slate-400 hidden sm:block mt-0.5">Locație &amp; Recenzii</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-center flex flex-col items-center justify-center shadow-xs">
                <Globe className="w-4 h-4 text-teal-400 mb-1.5" />
                <span className="text-xs font-bold text-white">WEBSITE</span>
                <span className="text-[11px] text-slate-400 hidden sm:block mt-0.5">Servicii &amp; Terapie</span>
              </div>
            </div>

            <ArrowDown className="w-4 h-4 text-teal-400 my-2.5 animate-pulse" />

            {/* Step 4: Trust */}
            <div className="w-full max-w-xs text-center p-3.5 rounded-xl bg-slate-800 border border-teal-500/50 text-teal-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Încredere Deontologică (Trust)</span>
            </div>

            <ArrowDown className="w-4 h-4 text-teal-400 my-2.5 animate-pulse" />

            {/* Step 5: Contact */}
            <div className="w-full max-w-xs text-center p-4 rounded-xl bg-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-teal-600/30 flex items-center justify-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>Contact &amp; Programare Directă</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Simple Explanation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <span className="text-xl font-bold text-teal-700 font-mono block mb-2">
              01
            </span>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Google Search
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">
              Găsire rapidă
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Informații complete și actualizate despre tine atunci când te caută după nume sau specializare.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <span className="text-xl font-bold text-teal-700 font-mono block mb-2">
              02
            </span>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Google Maps
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">
              Locație &amp; Încredere
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Cabinetul verificat, fotografii calde, orar exact și recenzii profesionale organizate respectuos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <span className="text-xl font-bold text-teal-700 font-mono block mb-2">
              03
            </span>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Website Dedicat
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">
              Claritate &amp; Respect
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Pacientul înțelege cine ești, care este abordarea ta terapeutică și ce tipuri de intervenție oferi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs">
            <span className="text-xl font-bold text-teal-700 font-mono block mb-2">
              04
            </span>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Modul Programare
            </div>
            <h4 className="font-bold text-slate-900 text-base mb-2">
              Pasul decisiv
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Următorul pas fără nicio barieră de comunicare, prin canalul cel mai confortabil pentru pacient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


