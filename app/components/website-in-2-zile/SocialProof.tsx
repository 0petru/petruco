"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

/**
 * Portofoliu: fiecare intrare e un site livrat.
 * Ca să adaugi unul nou, adaugă un obiect în array — caruselul se adaptează
 * automat (butoane, puncte, poziții de scroll).
 */
type Project = {
  title: string;
  description: string;
  /** Link-ul către site-ul live. */
  href: string;
  /** Domeniul afișat peste imagine, lângă titlu. */
  domain: string;
  /** Screenshot-ul afișat. Poate fi local (`/portfolio/...`) sau remote. */
  image: string;
  /** Etichetă scurtă de categorie, afișată sus peste imagine. */
  tag: string;
};

const PROJECTS: Project[] = [
  {
    title: "Studio Dentar Aurelia",
    description:
      "Site de prezentare pentru o clinică stomatologică: servicii, echipă și programări online, cu plata avansului direct pe site.",
    href: "https://studioul.ro",
    domain: "studioul.ro",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600&auto=format&fit=crop",
    tag: "Clinică",
  },
  {
    title: "Nordic Interiors",
    description:
      "Portofoliu pentru un studio de design interior, cu galerie de proiecte, formular de ofertă și SEO tehnic configurat complet.",
    href: "https://nordicinteriors.ro",
    domain: "nordicinteriors.ro",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1600&auto=format&fit=crop",
    tag: "Design interior",
  },
];

export function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  /** Câte slide-uri încap pe ecran, în funcție de lățimea disponibilă. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateVisibleCount = () => {
      const slide = track.firstElementChild as HTMLElement | null;
      if (!slide) return;

      const perView = Math.round(track.clientWidth / slide.clientWidth);
      setVisibleCount(Math.max(1, Math.min(perView, PROJECTS.length)));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // Când toate slide-urile sunt vizibile simultan, nu mai există ce derula.
  const maxIndex = Math.max(0, PROJECTS.length - visibleCount);
  const canNavigate = maxIndex > 0;

  /** Sincronizează indexul activ cu slide-ul cel mai vizibil din track. */
  const syncActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.firstElementChild as HTMLElement | null;
    if (!slide) return;

    const perView = Math.round(track.clientWidth / slide.clientWidth) || 1;
    const max = Math.max(0, PROJECTS.length - perView);
    const index = Math.round(track.scrollLeft / slide.clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, max)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", syncActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", syncActiveIndex);
  }, [syncActiveIndex]);

  /** Derulează astfel încât slide-ul `index` să ajungă în stânga. */
  const scrollToIndex = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;

      const slide = track.firstElementChild as HTMLElement | null;
      if (!slide) return;

      const max = Math.max(0, PROJECTS.length - visibleCount);
      const clamped = Math.max(0, Math.min(index, max));
      track.scrollTo({ left: clamped * slide.clientWidth, behavior: "smooth" });
    },
    [visibleCount],
  );

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  return (
    <Section id="portofoliu" className="bg-zinc-50/50">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          eyebrow="Portofoliu"
          title="Site-uri de prezentare pe care le-am construit"
          description="Afaceri reale, live pe internet în 2 zile lucrătoare. Fiecare a plecat de la un apel de 15 minute și a ajuns la un site care vinde."
        />

        {canNavigate ? (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              aria-label="Proiectul anterior"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex >= maxIndex}
              aria-label="Proiectul următor"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="relative mt-12">
        {/* Track cu scroll-snap. Fiecare slide are lățime fixă pe breakpoint
            (1 pe mobil, 2 pe desktop), astfel încât adăugarea de proiecte noi
            nu schimbă layout-ul. */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_24px_50px_-32px_rgba(24,24,27,0.5)] sm:w-[calc((100%-1.25rem)/2)]"
            >
              {/* Screenshot-ul rămâne complet vizibil — nu îl acoperim cu text. */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100">
                <Image
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-zinc-900/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {project.tag}
                </span>
              </div>

              {/* Conținut sub imagine: domeniu, titlu, descriere, link. */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <p className="text-xs font-semibold tracking-[0.14em] text-emerald-600 uppercase">
                  {project.domain}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {project.description}
                </p>

                <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-700">
                  Vezi site-ul live
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {canNavigate ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Mergi la poziția ${i + 1}`}
                aria-current={activeIndex === i}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i
                    ? "w-6 bg-zinc-900"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </Section>
  );
}
