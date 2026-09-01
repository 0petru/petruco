import React from 'react';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-base mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                Ψ
              </div>
              <span className="tracking-tight">Prezență Digitală</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dezvoltăm și administrăm întreaga prezență online a cabinetelor de psihologie: de la căutarea pe Google până la programare directă.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono">
              Navigare Rapidă
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#problema" className="hover:text-teal-400 transition-colors">Problema căutării pe Google</a></li>
              <li><a href="#comparatie" className="hover:text-teal-400 transition-colors">Before vs After</a></li>
              <li><a href="#exemple" className="hover:text-teal-400 transition-colors">Exemple de website-uri</a></li>
              <li><a href="#solutie" className="hover:text-teal-400 transition-colors">Sistemul complet</a></li>
              <li><a href="#testimoniale" className="hover:text-teal-400 transition-colors">Testimoniale video &amp; scrise</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">Întrebări frecvente</a></li>
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono">
              Ce Includem
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><span className="text-teal-400">•</span> Website adaptat eticii psihologice</li>
              <li className="flex items-center gap-1.5"><span className="text-teal-400">•</span> Profil Google Business &amp; Maps</li>
              <li className="flex items-center gap-1.5"><span className="text-teal-400">•</span> Optimizare căutări locale SEO</li>
              <li className="flex items-center gap-1.5"><span className="text-teal-400">•</span> Sistem simplu de programare</li>
              <li className="flex items-center gap-1.5"><span className="text-teal-400">•</span> Asistență și mentenanță continuă</li>
            </ul>
          </div>

          {/* Free Audit Card */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 shadow-sm">
            <h4 className="font-bold text-white text-sm mb-1">
              Analizează gratuit cabinetul
            </h4>
            <p className="text-xs text-slate-400 mb-3.5 leading-relaxed">
              Descoperă ce găsesc pacienții când îți caută numele online.
            </p>
            <button
              onClick={onOpenAuditModal}
              className="w-full py-2.5 px-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Solicită Analiza Gratuită
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Sistem de Prezență Digitală pentru Psihologi. Toate drepturile rezervate.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer">Confidențialitate &amp; GDPR</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Termeni &amp; Condiții</span>
          </div>
        </div>
      </div>
    </footer>
  );
};


