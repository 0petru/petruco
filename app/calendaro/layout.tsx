import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendaro — Alternativa modernă la Calendly",
  description:
    "Calendaro este software-ul de programări complet personalizabil pentru freelanceri, echipe și dezvoltatori. Link unic de programare, sincronizare calendar, plăți online și automatizări.",
  openGraph: {
    title: "Calendaro — Alternativa modernă la Calendly",
    description:
      "Programări fără fricțiune: link unic, sincronizare cu calendarul, plăți online și automatizări. Fără card bancar la înscriere.",
    type: "website",
  },
};

export default function CalendaroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
