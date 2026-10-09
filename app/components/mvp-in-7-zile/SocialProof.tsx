"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Section, SectionIntro } from "@/app/components/home/shared";

/**
 * Portofoliu: fiecare intrare e un proiect livrat.
 * Ca să adaugi unul nou, adaugă un obiect în array — caruselul se adaptează
 * automat (butoane, puncte, lățimea slide-ului).
 */
type Project = {
  title: string;
  description: string;
  /** Link-ul către site-ul live. */
  href: string;
  /** Domeniul afișat sub titlu, fără protocol. */
  domain: string;
  /** Screenshot-ul afișat. Poate fi local (`/portfolio/...`) sau remote. */
  image: string;
  /** Etichetă scurtă de categorie, afișată peste imagine. */
  tag: string;
};

const PROJECTS: Project[] = [
  {
    title: "Conecta — CRM pentru echipe",
    description:
      "Platformă de gestionare a clienților, ofertelor și activităților echipei. Construită de la zero în 7 zile pentru prima versiune funcțională.",
    href: "/conecta",
    domain: "conecta.app",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tag: "SaaS · MVP în 7 zile",
  },
  {
    title: "Calendaro — Scheduler pentru programări",
    description:
      "Aplicație care îi lasă pe clienți să își aleagă singuri intervalul, reducând timpul pierdut cu programările la telefon.",
    href: "/calendaro",
    domain: "calendaro.app",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1600&auto=format&fit=crop",
    tag: "Web app · MVP în 7 zile",
  },
];

export function SocialProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /** Sincronizează indexul activ cu slide-ul cel mai vizibil din track. */
  const syncActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, clientWidth } = track;
    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(Math.max(0, Math.min(index, PROJECTS.length - 1)));
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("scroll", syncActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", syncActiveIndex);
  }, [syncActiveIndex]);

  /** Derulează la slide-ul `index` (clamp la marginile listei). */
  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, PROJECTS.length - 1));
    track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
  }, []);

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  // Cu un singur proiect nu are sens navigarea; ascundem controalele.
  const hasMultiple = PROJECTS.length > 1;

  return (
    <Section id="portofoliu">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionIntro
          eyebrow="Portofoliu"
          title="Site-uri și produse pe care le-am construit"
          description="O parte din proiectele livrate. Fiecare a plecat de la o problemă reală și a ajuns live în câteva zile, nu în câteva luni."
        />

        {hasMultiple ? (
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
              disabled={activeIndex === PROJECTS.length - 1}
              aria-label="Proiectul următor"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="relative mt-12">
        {/*
          Track cu scroll-snap. Fiecare slide ocupă 100% din lățime, astfel
          încât adăugarea de proiecte noi nu schimbă layout-ul.
        */}
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.href}
              className="w-full shrink-0 snap-center px-0.5 sm:px-1"
            >
              <motion.a
                href={project.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_24px_50px_-32px_rgba(24,24,27,0.5)] lg:grid-cols-2"
              >
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-zinc-200 bg-zinc-100 lg:aspect-auto lg:border-r lg:border-b-0">
                  <Image
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-zinc-900/80 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Conținut */}
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                    {project.domain}
                  </p>

                  <h3 className="mt-2 text-xl font-medium tracking-tight text-zinc-900 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {project.description}
                  </p>

                  <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900">
                    Vezi proiectul
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>
            </div>
          ))}
        </div>

        {hasMultiple ? (
          <div className="mt-6 flex items-center justify-center gap-2">
            {PROJECTS.map((project, i) => (
              <button
                key={project.href}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Mergi la proiectul ${i + 1}`}
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
