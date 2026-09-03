import React, { useState } from "react";
import {
  Check,
  ShieldCheck,
  Phone,
  Mail,
  User,
  Globe,
  MapPin,
  Sparkles,
  Send,
} from "lucide-react";
import { AuditFormData } from "../psychology-system/types";
import { submitAudit } from "../lib/submitAudit";

interface OfferSectionProps {
  onOpenAuditModal: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({
  onOpenAuditModal,
}) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: "",
    email: "",
    phone: "",
    clinicOrName: "",
    currentWebsiteOrProfile: "",
    city: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await submitAudit(formData);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "A apărut o eroare la trimiterea formularului.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const checklist = [
    {
      label: "Analiza al website-ului actual sau lipsa acestuia",
      price: "120 RON",
    },
    {
      label: "Cum apari în Google când cineva îți caută numele",
      price: "120 RON",
    },
    {
      label: "Google Business Profile și poziționarea pe Google Maps",
      price: "120 RON",
    },
    {
      label: "Ce informații găsește un potențial client la primul contact",
      price: "80 RON",
    },
    {
      label: "Ce poate crește încrederea și numărul de programări",
      price: "80 RON",
    },
    {
      label: "Cum să construiești un brand digital care inspiră încredere",
      price: "80 RON",
    },
  ];

  return (
    <section
      id="oferta"
      className="py-20 sm:py-28 bg-white border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Analiză Gratuită</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Află ce trebuie îmbunătățit și cum poți face asta
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Analizăm prezența ta online, îți arătăm ce vede un potențial client
            și te învățăm concret ce trebuie îmbunătățit și cum poți face asta.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What We Analyze & The Golden Guarantee Box */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-slate-900 text-2xl mb-5">
                Ce primești în cadrul auditului:
              </h3>

              <div className="space-y-3.5">
                {checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-lg text-slate-700"
                  >
                    <div className="w-6 h-6 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                      ✓
                    </div>
                    <span className="flex flex-1 items-start justify-between gap-4 leading-snug">
                      <span>{item.label}</span>
                      <span className="shrink-0 text-sm font-semibold py-2 px-4 bg-black text-white rounded-full shadow-sm">
                        {item.price}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
                <span>Valoare totală audit</span>
                <span className="text-2xl line-through text-slate-500">
                  600 RON
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-base font-bold text-slate-900">
                <span>Pret Astazi</span>
                <span className="text-3xl font-bold  text-[#149a53]">
                  GRATUIT
                </span>
              </div>
            </div>

            {/* VERY VISIBLE GUARANTEE (Explicitly required in prompt) */}

            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3 text-teal-400 text-xl font-mono font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-8 h-8" />
                <span>Garanție Fără Nicio Obligație</span>
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-lg text-slate-200 font-medium">
                  Dacă decidem să colaborăm, construim întregul ecosistem
                  digital.
                </p>
                <div className="h-px bg-slate-800" />
                <p className="text-base sm:text-lg font-semibold text-teal-300">
                  Dacă decizi să nu continuăm, pleci cu analiza completă,
                  recomandările și informația necesară ca să știi ce ai de făcut
                  100% gratuit, fără nicio obligație.
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
                  Descoperă ce vede în prezent o persoană atunci când îți caută
                  numele pe Google.
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
                    Te vom contacta în maximum 24 de ore pentru a stabili
                    scurtul interval de 15 minute pentru prezentarea raportului
                    de analiză.
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
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
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
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
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
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              clinicOrName: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
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
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            currentWebsiteOrProfile: e.target.value,
                          })
                        }
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

                  {submitError && (
                    <p
                      role="alert"
                      className="text-center text-xs font-medium text-red-600"
                    >
                      {submitError}
                    </p>
                  )}

                  <p className="text-xs text-center text-slate-400 mt-2">
                    Confidențialitate garantată · Fără costuri ascunse · Fără
                    obligații contractuale
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
