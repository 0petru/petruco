import React, { useState } from 'react';
import { Check, ShieldCheck, Phone, Mail, User, Globe, MapPin, Sparkles, Send } from 'lucide-react';
import { AuditFormData } from '../types';

interface OfferSectionProps {
  onOpenAuditModal: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenAuditModal }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    email: '',
    phone: '',
    clinicOrName: '',
    currentWebsiteOrProfile: '',
    city: '',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const checklist = [
    'Website-ul actual (sau lipsa acestuia)',
    'Cum apari în Google la căutarea numelui tău',
    'Google Business Profile și poziționarea pe Google Maps',
    'Informațiile disponibile unui potențial client la primul contact',
    'Ce oportunități există pentru creșterea încrederii și a numărului de pacienți'
  ];

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Pasul 1 Fără Risc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Înainte de orice propunere, realizăm analiza gratuită
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Analizăm modul în care arată în prezent prezența ta online și îți arătăm exact ce vede o persoană interesată de serviciile tale.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What We Analyze & The Golden Guarantee Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl mb-5">
                Ce verificăm în cadrul analizei:
              </h3>

              <div className="space-y-3.5">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                      ✓
                    </div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-600 leading-relaxed">
                <p className="font-bold text-slate-900 mb-3">
                  Apoi îți prezentăm analiza într-o scurtă întâlnire de 15 minute:
                </p>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-teal-600 block text-xs font-mono font-bold mb-1">01</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Ce ai</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-teal-600 block text-xs font-mono font-bold mb-1">02</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Ce lipsește</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-teal-600 block text-xs font-mono font-bold mb-1">03</span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm">Ce construim</span>
                  </div>
                </div>
              </div>
            </div>

            {/* VERY VISIBLE GUARANTEE (Explicitly required in prompt) */}
            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
              
              <div className="flex items-center gap-2 text-teal-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Garanție Fără Nicio Obligație</span>
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-200 font-medium">
                  Dacă decidem să colaborăm, construim întregul ecosistem digital.
                </p>
                <div className="h-px bg-slate-800" />
                <p className="text-base sm:text-lg font-semibold text-teal-300">
                  Dacă decizi să nu continuăm, rămâi cu analiza completă și toate recomandările — 100% gratuit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-lg">
              <div className="mb-6 border-b border-slate-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600 font-mono">
                  Formular Solicitare
                </span>
                <h3 className="font-extrabold text-2xl text-slate-900 mt-1">
                  Solicită analiza gratuită
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Descoperă ce vede în prezent o persoană atunci când îți caută numele pe Google.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-teal-50/70 rounded-2xl border border-teal-200/80 text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-extrabold text-xl text-slate-900">
                    Solicitarea a fost trimisă cu succes!
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Te vom contacta în maximum 24 de ore pentru a stabili scurtul interval de 15 minute pentru prezentarea raportului de analiză.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-teal-700 font-bold uppercase tracking-wider underline pt-2 cursor-pointer hover:text-teal-800"
                  >
                    Trimite altă solicitare
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nume &amp; Prenume *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="ex. Dr. Maria Popescu"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Telefon *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="07xx xxx xxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="contact@cabinet.ro"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Nume Cabinet / Specializare *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="ex. Cabinet Psihoterapie Popescu"
                          value={formData.clinicOrName}
                          onChange={(e) => setFormData({ ...formData, clinicOrName: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Oraș cabinet *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="ex. București, Cluj, etc."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Website actual sau profil Facebook (opțional)
                    </label>
                    <div className="relative">
                      <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="ex. www.site-vechi.ro sau lasă gol dacă nu ai"
                        value={formData.currentWebsiteOrProfile}
                        onChange={(e) => setFormData({ ...formData, currentWebsiteOrProfile: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span>Se procesează...</span>
                    ) : (
                      <span>SOLICITĂ ANALIZA GRATUITĂ →</span>
                    )}
                  </button>

                  <p className="text-xs text-center text-slate-400 mt-2">
                    Confidențialitate garantată · Fără costuri ascunse · Fără obligații contractuale
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


