"use client";

import { useEffect, useState } from "react";

/** Prag minim (px) înainte ca bara să se poată ascunde — 0 = chiar la primul scroll. */
const HIDE_AFTER = 0;
/** Diferență minimă (px) între două evenimente ca să reacționăm — anti-flicker. */
const MIN_DELTA = 2;

/**
 * Ascunde bara la scroll în jos și o readuce la scroll în sus.
 *
 * Se ascunde de la prima mișcare în jos (prag 0): pe un landing page fiecare
 * pixel de deasupra pliului contează, iar revenirea la prima urcare face
 * comportamentul previzibil.
 *
 * Folosită de `LpTop`, care ține împreună header-ul și bara de urgență:
 * la scroll în jos header-ul iese din ecran, iar bara de urgență rămâne
 * lipită în partea de sus a ecranului.
 */
export function useHideOnScroll() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;

      const y = window.scrollY;
      if (Math.abs(y - lastY) < MIN_DELTA) return;

      // Sus de tot sau scroll în sus → bara redevine vizibilă.
      setHidden(y > HIDE_AFTER && y > lastY);
      lastY = y;
    };

    // Throttle pe rAF: un singur calcul per cadru, indiferent cât de des
    // emite browserul evenimentul de scroll.
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return hidden;
}
