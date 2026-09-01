import React from 'react';
import { Eye, CheckCircle2, Layout, Sparkles, ArrowRight } from 'lucide-react';
import { WEBSITE_EXAMPLES } from '../psychology-system/data';
import { WebsiteExample } from '../psychology-system/types';

interface WebsiteExamplesSectionProps {
  onSelectExample: (example: WebsiteExample) => void;
  onOpenAuditModal: () => void;
}

export const WebsiteExamplesSection: React.FC<WebsiteExamplesSectionProps> = ({
  onSelectExample,
  onOpenAuditModal,
}) => {
  return (
    <section id="exemple" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Portofoliu &amp; Structură</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Așa arată o prezență concepută cu respect pentru profesie
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Arhitecturi curate, concepute special pentru psihologi: transmit încredere, căldură și respect deontologic.
          </p>
        </div>

        {/* 3 Examples Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {WEBSITE_EXAMPLES.map((example, index) => (
            <div
              key={example.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Header / Mockup Representation */}
                <div className="bg-slate-900 p-5 text-white relative aspect-[16/10] flex flex-col justify-between border-b border-slate-800">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-medium text-slate-400">
                      Model 0{index + 1}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 uppercase tracking-wider">
                      {example.tag}
                    </span>
                  </div>

                  {/* Visual Layout Inside Card */}
                  <div className="my-auto z-10 py-2">
                    <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                      {example.mockupContent.heroTitle.split('—')[0]}
                    </div>
                    <div className="text-sm font-bold text-white line-clamp-2 mt-1">
                      {example.mockupContent.heroSubtitle}
                    </div>
                  </div>

                  {/* Micro Footer Inside Card */}
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-800 pt-2 z-10">
                    <span>Acreditat COPSI</span>
                    <span className="text-teal-400 font-semibold">Programări Online ✓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                      {example.title.split(':')[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {example.title.split(':')[1] || example.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {example.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {example.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {example.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectExample(example)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>VEZI STRUCTURA COMPLETĂ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-teal-50/70 border border-teal-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-teal-200 flex items-center justify-center text-teal-700 shrink-0 shadow-xs">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl text-slate-900">
                Fiecare website este configurat individual pentru abordarea ta
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Texte redactate în deplină concordanță cu codul deontologic COPSI, design aerisit și viteză optimă de încărcare.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAuditModal}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            Solicită analiza gratuită
          </button>
        </div>
      </div>
    </section>
  );
};


