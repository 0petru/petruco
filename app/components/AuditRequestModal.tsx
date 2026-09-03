import React, { useState } from "react";
import {
  X,
  Check,
  User,
  Phone,
  Mail,
  Globe,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { AuditFormData } from "../psychology-system/types";
import { submitAudit } from "../lib/submitAudit";

interface AuditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditRequestModal: React.FC<AuditRequestModalProps> = ({
  isOpen,
  onClose,
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

  if (!isOpen) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 text-white">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-teal-600/20">
              Ψ
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight text-md">
                  Sistemul de Prezență
                  <br /> Digitală pentru Psihologi
                </span>
              </div>
            </div>
          </a>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 sm:pt-3 max-h-[85vh] overflow-y-auto bg-white">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-extrabold text-2xl text-slate-900">
                Am primit solicitarea ta!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Pregătim analiza inițială a vizibilității pe Google și te vom
                contacta în cel mai scurt timp pentru a stabili întâlnirea de 15
                minute.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Închide fereastra
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pb-3 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  Acces gratuit · Valoare 600 RON
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">
                  Obține auditul gratuit
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600">
                  Completează formularul, iar noi te contactăm pentru a programa
                  o intalnire.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nume &amp; Prenume *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="ex. Dr. Elena Radu"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="email@cabinet.ro"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nume Cabinet / Specializare *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex. Psiholog Clinician / Cabinet"
                    value={formData.clinicOrName}
                    onChange={(e) =>
                      setFormData({ ...formData, clinicOrName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Oraș cabinet *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="ex. București, Cluj..."
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Website actual / Profil existent (opțional)
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Dacă nu ai încă, lasă necompletat"
                    value={formData.currentWebsiteOrProfile}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentWebsiteOrProfile: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-teal-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-teal-600"
                  />
                  <span>
                    Sunt de acord ca echipa Sistemului de Prezență Digitală
                    pentru Psihologi să mă contacteze prin email, telefon sau
                    SMS, inclusiv prin tehnologii automatizate, în legătură cu
                    solicitarea mea. Se pot aplica tarifele operatorului. Pot
                    răspunde cu STOP pentru dezabonare.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
              >
                {isSubmitting ? (
                  <span>Se trimite...</span>
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

              <div className="text-[11px] text-center text-slate-400 pt-1">
                🔒 Datele sunt 100% confidențiale și nu sunt transmise terților.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
