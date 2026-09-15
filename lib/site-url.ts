/**
 * URL-ul public al site-ului, folosit pentru sitemap, robots.txt și metadata.
 *
 * Se citește din `NEXT_PUBLIC_SITE_URL`. Dacă variabila lipsește (de exemplu pe
 * un deploy Vercel), folosim domeniul de producție injectat automat de platformă,
 * iar în development cădem pe localhost.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel.replace(/\/+$/, "")}`;

  return "http://localhost:3000";
}
