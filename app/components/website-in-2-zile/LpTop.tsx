"use client";

import { useEffect } from "react";

import { UrgencyBar } from "./Sticky";

/**
 * Zona de sus a landing page-ului: doar bara de urgență, fără navbar.
 *
 * Landing page-ul nu are deloc navigare (nici globală — vezi
 * `ConditionalNavbar` — nici proprie): singura cale de ieșire din pagină e
 * CTA-ul, iar ancorele interne sunt deja în hero. Tot ce rămâne sus e bara
 * de urgență, lipită la `top-0`.
 *
 * `scroll-padding-top` global (7rem) acoperă navbar + bară și e corect pe
 * celelalte rute. Aici navbar-ul nu mai există, deci îl reducem cât timp e
 * afișată pagina, ca ancorele interne să nu lase un gol mare sub bară.
 */
const LP_SCROLL_PADDING = "4.5rem";

export function LpTop() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollPaddingTop;

    root.style.scrollPaddingTop = LP_SCROLL_PADDING;
    return () => {
      root.style.scrollPaddingTop = previous;
    };
  }, []);

  return <UrgencyBar />;
}
