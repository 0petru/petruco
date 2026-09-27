"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Plus, ShieldCheck, X } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Cât de repede văd rezultate?",
    answer:
      "Primele ad-uri sunt live în 7 zile lucrătoare de la apelul de start. Primele semnale apar în prima săptămână de rulare, dar optimizarea serioasă începe după 2-4 săptămâni de cheltuială, când algoritmul are suficiente date ca să iasă din faza de învățare.",
  },
  {
    question: "Cine produce ad-urile?",
    answer:
      "Noi. Venim cu unghiurile, scenariile, textele, montajul și variantele statice. Pentru conținutul UGC lucrăm cu creatori care filmează natural, ca pe telefon. Tu aprobi tot înainte să intre în campanie.",
  },
  {
    question: "Trebuie să am deja site și funnel?",
    answer:
      "Nu. Dacă nu ai, construim pagina de destinație și fluxul de conversie de la zero. Dacă ai, îl analizăm și reparăm exact punctele în care se pierd clicurile, înainte să creștem bugetul.",
  },
  {
    question: "Ce buget de testare am nevoie?",
    answer:
      "Îți spunem concret după audit, în funcție de nișă, de prețul produsului și de marjă. Nu pornim niciodată o campanie fără un buget minim care poate produce date relevante — altfel am arunca banii pe presupuneri.",
  },
  {
    question: "Lucrați și pe e-commerce?",
    answer:
      "Da. Rulăm Advantage+ Shopping, remarketing dinamic pe catalog și creative construite pe produs. Obiectivul rămâne același: ROAS și profit, nu trafic sau like-uri.",
  },
  {
    question: "Cine deține contul și datele?",
    answer:
      "Tu. Contul de ads, pixelul, creativele și accesul rămân pe numele tău. La finalul colaborării primești totul, inclusiv structura campaniilor și documentația, ca să poți continua și singur dacă vrei.",
  },
  {
    question: "Cum arată raportarea?",
    answer:
      "Un raport clar, săptămânal: cât s-a cheltuit, cât venit a generat, care e ROAS-ul și costul per rezultat, ce tăiem și ce scalăm săptămâna următoare. Fără dashboard pe care nu îl deschide nimeni.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="intrebari" className="bg-zinc-900">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.16em] text-emerald-400 uppercase"
            >
              Întrebări frecvente
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl"
            >
              Ce ne întreabă lumea înainte să spună „da”
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-4 text-base leading-relaxed text-zinc-400"
            >
              Dacă nu găsești răspunsul aici, întreabă-ne direct. Nu avem
              răspunsuri pregătite, avem răspunsuri concrete.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
                <ShieldCheck className="size-3.5 text-emerald-400" /> Creative
                live în 7 zile
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-300">
                <Clock className="size-3.5 text-emerald-400" /> Raportare
                săptămânală
              </span>
            </div>
          </div>

          <div className="divide-y divide-zinc-800 border-y border-zinc-800">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-base font-medium text-white">
                      {item.question}
                    </span>
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white">
                      {isOpen ? (
                        <X className="size-3.5" />
                      ) : (
                        <Plus className="size-3.5" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 pb-5 text-sm leading-relaxed text-zinc-400">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
