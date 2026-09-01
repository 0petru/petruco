import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Volume2, VolumeX, ArrowRight, Video, Sparkles } from 'lucide-react';

interface VslPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuditModal: () => void;
}

export const VslPlayerModal: React.FC<VslPlayerModalProps> = ({
  isOpen,
  onClose,
  onOpenAuditModal,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);

  const chapters = [
    { time: '0:00', title: 'Problema căutării pe Google a unui psiholog' },
    { time: '1:45', title: 'De ce se pierd recomandările din lipsă de claritate' },
    { time: '3:20', title: 'Sistemul complet: Search + Maps + Website' },
    { time: '5:10', title: 'Ce include analiza gratuită a cabinetului tău' },
  ];

  const presentationScreens = [
    {
      badge: 'Capitolul 1 din 4',
      title: 'Scenariul cel mai frecvent:',
      highlight: '„Mi-a fost recomandat numele tău. Te caut pe Google. Ce găsesc?”',
      bullets: [
        '87% dintre pacienții recomandați caută numele psihologului înainte de a suna',
        'Dacă găsesc un profil inactiv sau informații ambigue, ezită',
        'Prima impresie se formează în primele 4 secunde ale căutării'
      ],
      diagram: 'Căutare Google → Profil Neclar ❌ → Căutarea continuă'
    },
    {
      badge: 'Capitolul 2 din 4',
      title: 'Costul tăcut al oportunităților pierdute',
      highlight: '„Nu poți recupera o oportunitate despre care nu știi că ai pierdut-o.”',
      bullets: [
        'Persoana are nevoie reală de psihoterapie sau evaluare',
        'Nu găsește adresa cabinetului, onorariile sau abordarea clinică',
        'Alege alt cabinet cu informații clare și programare directă'
      ],
      diagram: 'Recomandare primită → Lipsă detalii → Pierdut către alt cabinet'
    },
    {
      badge: 'Capitolul 3 din 4',
      title: 'Sistemul de Prezență Digitală pentru Psihologi',
      highlight: 'O experiență coerentă de la primul click până la prima ședință.',
      bullets: [
        'Website profesional adaptat eticii psihologice (COPSI)',
        'Google Business Profile & Google Maps verificat',
        'Optimizare SEO local pentru orașul și specializările tale',
        'Sistem simplu și discret de programări online'
      ],
      diagram: 'Google Search + Maps + Website → Încredere → Programare confirmată ✓'
    },
    {
      badge: 'Capitolul 4 din 4',
      title: 'Următorul pas: Analiza Gratuită',
      highlight: 'Verificăm exact ce vede o persoană acum când îți caută numele.',
      bullets: [
        'Primești raportul detaliat cu punctele tari și cele care lipsesc',
        'Scurtă întâlnire de 15 minute pentru prezentarea concluziilor',
        'Fără nicio obligație: dacă nu lucrăm împreună, analiza rămâne a ta gratuit'
      ],
      diagram: 'Analiză Gratuită → Claritate Totală → Fără Risc'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentContent = presentationScreens[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden text-white flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Prezentare Video: Sistemul de Prezență Digitală
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Stage / Presentation Canvas */}
        <div className="relative bg-slate-900 p-6 sm:p-10 flex-1 flex flex-col justify-between overflow-y-auto">
          {/* Presenter Badge Overlay */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5 bg-slate-800/80 border border-slate-700/80 rounded-xl px-3.5 py-1.5 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span>Prezentare ghidată pentru psihologi (6:30 min)</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
              {currentContent.badge}
            </span>
          </div>

          {/* Main Presentation Slide View */}
          <div className="bg-slate-800/60 rounded-2xl border border-slate-700/70 p-6 sm:p-8 my-auto shadow-lg">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold mb-2">
              {currentContent.title}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
              {currentContent.highlight}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="space-y-3">
                {currentContent.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-teal-400 font-bold text-xs shrink-0 mt-0.5">✓</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex flex-col justify-center items-center text-center">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider mb-2">Fluxul vizual explicat:</span>
                <div className="font-bold text-xs sm:text-sm text-teal-300 bg-slate-900 px-3.5 py-2.5 rounded-lg border border-slate-700">
                  {currentContent.diagram}
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Quick Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6 pt-4 border-t border-slate-800">
            {chapters.map((ch, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgress((idx / chapters.length) * 100 + 10);
                }}
                className={`text-left p-3 rounded-xl text-xs transition-all cursor-pointer ${
                  currentSlide === idx
                    ? 'bg-teal-600 text-white font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-750 hover:text-white border border-slate-700/60'
                }`}
              >
                <div className="font-mono text-[10px] text-teal-300">{ch.time}</div>
                <div className="truncate text-xs mt-0.5">{ch.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Player Controls Bar */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col gap-3">
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden cursor-pointer">
            <div
              className="bg-teal-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-lg bg-teal-600 text-white hover:bg-teal-500 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => {
                  setCurrentSlide(0);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Reia de la început"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs text-slate-400 font-mono">
                {Math.floor((progress / 100) * 6)}:{String(Math.floor(((progress / 100) * 390) % 60)).padStart(2, '0')} / 6:30
              </span>
            </div>

            {/* In-Video Call to Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenAuditModal();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <span>Solicită Analiza Gratuită →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


