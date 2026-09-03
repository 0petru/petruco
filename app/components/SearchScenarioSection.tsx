import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  HeartHandshake,
  UserCheck,
  Stethoscope,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

const SEARCH_QUERY = "Maria Popescu psiholog București";

export const SearchScenarioSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView || typedText.length >= SEARCH_QUERY.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTypedText(SEARCH_QUERY.slice(0, typedText.length + 1));
    }, 90);

    return () => window.clearTimeout(timer);
  }, [hasEnteredView, typedText]);

  useEffect(() => {
    if (typedText.length !== SEARCH_QUERY.length) {
      return;
    }

    const pointerTimer = window.setTimeout(() => {
      setShowCursor(false);
    }, 1400);

    return () => {
      window.clearTimeout(pointerTimer);
    };
  }, [typedText]);

  return (
    <section
      ref={sectionRef}
      id="problema"
      className={`py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200/80 mb-3">
            Momentul critic al deciziei
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Momentul critic în care pierzi chiar și clienții veniți din{" "}
            <span className="underline">recomandări</span>.
          </h2>
        </div>

        {/* Narrative Box */}
        <div
          className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-lg relative transition-all duration-700 ease-out delay-150 ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-[0.99]"
          }`}
        >
          <p className="text-lg sm:text-3xl font-bold text-slate-900 mb-6">
            Imaginează-ți următorul scenariu:
          </p>

          <div className="text-base text-slate-600 leading-relaxed space-y-4 font-normal">
            <p className="font-medium text-slate-800 text-base sm:text-xl">
              Cineva primește o recomandare călduroasă pentru serviciile tale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-9 h-9" />
                </div>
                <span className="text-xs sm:text-lg font-semibold text-slate-800">
                  De la un prieten apropiat.
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                  <UserCheck className="w-9 h-9" />
                </div>
                <span className="text-xs sm:text-lg font-semibold text-slate-800">
                  De la un fost client mulțumit.
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-9 h-9" />
                </div>
                <span className="text-xs sm:text-lg font-semibold text-slate-800">
                  De la un medic specialist.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-slate-500 text-sm uppercase tracking-wider font-bold">
                Primul lucru pe care îl face?
              </p>
              <p className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Te caută pe Google.
              </p>
            </div>
          </div>

          {/* High-Fidelity Mockup: Google Search */}
          <div className="mt-5 border-slate-100">
            <div className="mx-auto bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-inner">
              {/* Google Brand Header */}
              <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
                <div className="flex items-center font-bold tracking-tight text-2xl">
                  <Image
                    src="/logo/google.png"
                    alt="Google Logo"
                    width={94}
                    height={32}
                    className="mr-1 h-auto w-auto object-contain"
                  />
                </div>
              </div>

              {/* Realistic Search Input Bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-full border border-slate-300 shadow-sm">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="flex-1 min-w-0 font-medium text-slate-800 text-sm sm:text-base whitespace-nowrap overflow-hidden">
                  <span>{typedText}</span>
                  {showCursor && typedText.length < SEARCH_QUERY.length && (
                    <span className="ml-0.5 inline-block h-5 w-[2px] bg-slate-800 align-middle animate-pulse rounded-full" />
                  )}
                </div>
                <div className="flex items-center justify-end min-w-[96px] text-xs text-slate-400">
                  <span className="inline-flex items-center justify-center px-2.5 py-1 bg-slate-100 rounded-full text-[14px] font-semibold text-slate-600">
                    Căutare
                  </span>
                </div>
              </div>
            </div>

            {/* Transition Question */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-1 text-slate-500 font-semibold text-md uppercase tracking-wider mb-1">
                <span>Și acum apare întrebarea</span>
              </div>
              <h3 className="text-2xl sm:text-5xl font-extrabold text-gray-800 tracking-tight ">
                Ce vede pe ecran?
              </h3>

              {/* Wide downward arrow below the heading */}
              <div className="mt-10 flex justify-center text-slate-600">
                <svg
                  className="w-16 h-8 animate-bounce"
                  viewBox="0 0 48 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6 L24 18 L44 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
