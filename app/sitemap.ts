import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

/**
 * Paginile publice pe care vrem să le găsească Google:
 * pagina principală + cele 4 servicii principale.
 *
 * Ca să adaugi o pagină nouă, adaugă o intrare în array-ul de mai jos.
 *
 * `lastModified` este omis intenționat: o valoare generată la fiecare request
 * ar face câmpul inutilizabil pentru crawler. `changeFrequency` și `priority`
 * sunt tratate de Google ca sugestii, dar le păstrăm ca documentație a
 * priorității reale din business.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/website-in-2-zile`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-si-automatizari`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dezvoltare-aplicatii`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/psychology-system`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
