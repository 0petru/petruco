"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/** Shell comun pentru secțiuni: lățime, padding și linia de separare. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("border-b border-zinc-200/80", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  );
}

/** Eticheta mică, uppercase, de deasupra titlului de secțiune. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
      {children}
    </p>
  );
}

/** Bloc animat de titlu + descriere, folosit în capul fiecărei secțiuni. */
export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

/** Element care apare cu un mic fade + slide când intră în viewport. */
export function Reveal({
  children,
  delay = 0,
  amount = 0.25,
  className,
}: {
  children: ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
