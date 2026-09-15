"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Eyebrow, Section } from "./shared";

const FAQ_ITEMS = [
  {
    question: "Cât durează de fapt un proiect?",
    answer:
      "Website-ul de prezentare se livrează în 2 zile lucrătoare de la primirea materialelor. Pentru aplicații, platforme sau automatizări pornim cu o primă versiune funcțională în 2-4 săptămâni, în funcție de complexitate, și extindem de acolo.",
  },
  {
    question: "Nu mă pricep la partea tehnică. Este o problemă?",
    answer:
      "Nu. Ne ocupăm de domeniu, găzduire, configurare, lansare și tot ce ține de partea tehnică. Tu primești un produs funcțional și un om pe care îl întrebi oricând orice, pe limba ta.",
  },
  {
    question: "Ce include mentenanța lunară?",
    answer:
      "Găzduire, certificat SSL, backup-uri automate, monitorizare, actualizări de securitate, optimizări de viteză, modificări de conținut și un raport lunar cu ce s-a întâmplat și ce merită îmbunătățit.",
  },
  {
    question: "Cât costă?",
    answer:
      "Website-ul de prezentare în 2 zile are preț fix, comunicat înainte de start, fără costuri ascunse. Pentru proiectele custom primești o estimare clară după un apel de 30 de minute în care înțelegem ce ai nevoie.",
  },
  {
    question: "Cine deține codul și datele la final?",
    answer:
      "Tu. La finalul proiectului primești acces complet la cod, repository, infrastructură și conturile create. Nu te ținem niciodată blocat într-un sistem pe care nu îl poți controla.",
  },
  {
    question: "Lucrați și cu firme din afara României?",
    answer:
      "Da. Lucrăm remote cu clienți din România și din Uniunea Europeană, facturăm pentru firme și găzduim datele în centre de date din UE, conform GDPR. Comunicarea se poate face în română sau engleză.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="intrebari">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <Eyebrow>Întrebări frecvente</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
            Ce ne întreabă cel mai des clienții
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            Nu ți-am răspuns la întrebare? Scrie-ne și revenim în aceeași zi
            lucrătoare, cu un răspuns concret, nu cu un PDF de prezentare.
          </p>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
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
                  <span className="text-base font-medium text-zinc-900">
                    {item.question}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700">
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
                    <p className="pr-10 pb-5 text-sm leading-relaxed text-zinc-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
