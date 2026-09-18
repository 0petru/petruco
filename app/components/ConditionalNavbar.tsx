"use client";

import { usePathname } from "next/navigation";

import { Navbar } from "@/app/components/Navbar";

/**
 * Rutele care își aduc propriul navbar sticky (în pagina lor) și nu trebuie să
 * primească și navbar-ul global din `app/layout.tsx` — altfel se suprapun.
 *
 * Atenție: orice navbar propriu trebuie să fie tot `sticky top-0` cu înălțimea
 * `h-16`, pentru ca elementele care se lipesc sub el (`sticky top-16`, ex.
 * barele `UrgencyBar` din `app/components/<slug>/Sticky.tsx`) să rămână aliniate.
 * Altfel, NU adăuga ruta aici.
 */
const ROUTES_WITH_OWN_NAV = ["/psychology-system", "/website-in-2-zile"];

/** Navbar-ul global, ascuns pe rutele care au deja navbar propriu. */
export function ConditionalNavbar() {
  const pathname = usePathname();

  const hasOwnNav = ROUTES_WITH_OWN_NAV.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (hasOwnNav) {
    return null;
  }

  return <Navbar />;
}
