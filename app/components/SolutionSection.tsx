import React from "react";
import {
  Monitor,
  MapPin,
  Search,
  TrendingUp,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface SolutionSectionProps {
  onOpenAuditModal: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({
  onOpenAuditModal,
}) => {
  const pillars = [
    {
      icon: <Monitor className="w-5 h-5" />,
      num: "01",
      title: "Website profesional dedicat",
      badge: "Design & Conținut",
      description:
        "Structură creată special pentru servicii psihologice: design minimalist, cald, adaptat eticii profesionale, optimizat pe telefon și cu texte clare despre abordarea ta.",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      num: "02",
      title: "Google Business & Maps",
      badge: "Localizare Precisă",
      description:
        "Configurare, verificare și optimizare a profilului de pe Google Maps cu pin exact, fotografii primitoare din cabinet, orar corect și categorii medicale adecvate.",
    },
    {
      icon: <Search className="w-5 h-5" />,
      num: "03",
      title: "Indexare & Vizibilitate Google",
      badge: "Căutare după Nume",
      description:
        "Asigurăm că numele tău și cabinetul apar imediat pe prima poziție atunci când o persoană îți caută numele după o recomandare primită.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      num: "04",
      title: "SEO local specializat",
      badge: "Căutări Locale",
      description:
        "Optimizare pentru căutări relevante în orașul sau sectorul tău (ex: „psihoterapeut anxietate București”, „psiholog copii Sector 1”).",
    },
    {
      icon: <PhoneCall className="w-5 h-5" />,
      num: "05",
      title: "Contact & programare confidențială",
      badge: "Conversie Pacient",
      description:
        "Formular securizat, buton rapid de WhatsApp, apel direct și explicații despre pașii primei ședințe pentru a elimina orice barieră de comunicare.",
    },
  ];

  return (
    <section
      id="solutie"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Sistemul Complet de Prezență</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sistemul de Prezență Digitală pentru Psihologi
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Construim întreaga experiență online a unui cabinet. De la prima
            tastare a numelui pe Google până la primul mesaj de programare.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                  <span className="text-xl font-bold text-teal-700 font-mono">
                    {pillar.num}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {pillar.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: All-in-one Management */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className="text-xl font-bold text-teal-400 font-mono">
                  06
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Zero Mentenanță
                </span>
              </div>
              <h3 className="font-bold text-lg text-white mb-2 leading-snug">
                Tu ai grijă de pacienți, noi avem grijă de tot ce e tehnic
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Găzduire ultra-rapidă, securitate SSL, actualizări continue și
                respectarea strictă a normelor deontologice.
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                <span>Solicită Analiza Gratuită</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
