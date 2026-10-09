import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Coffee,
  GraduationCap,
  Heart,
  Laptop,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type Job = {
  title: string;
  department: string;
  location: string;
  type: string;
  /** Nivelul de experiență cerut, afișat ca etichetă. */
  level: string;
  description: string;
  requirements: string[];
};

const JOBS: Job[] = [
  {
    title: "Dezvoltator Frontend (React / Next.js)",
    department: "Inginerie",
    location: "Remote (România)",
    type: "Full-time",
    level: "Mid / Senior",
    description:
      "Construiești interfețe rapide și curate pentru website-urile și aplicațiile clienților noștri, cu termene de livrare scurte.",
    requirements: [
      "Minimum 2 ani de experiență cu React și TypeScript",
      "Experiență cu Next.js și Tailwind CSS",
      "Atenție la detalii de design și performanță",
    ],
  },
  {
    title: "Designer UI/UX",
    department: "Design",
    location: "Remote (România)",
    type: "Full-time",
    level: "Mid",
    description:
      "Traduci obiectivele de business în interfețe clare, care arată impecabil pe telefon și convertesc vizitatori în clienți.",
    requirements: [
      "Portofoliu cu proiecte web reale",
      "Stăpânirea Figma și a sistemelor de design",
      "Gândire orientată spre conversie, nu doar estetică",
    ],
  },
  {
    title: "Copywriter (română)",
    department: "Marketing",
    location: "Remote (România)",
    type: "Full-time",
    level: "Mid",
    description:
      "Scrii textele care vând pentru website-urile clienților, pornind de la un singur apel de descoperire.",
    requirements: [
      "Română nativă, scriere impecabilă",
      "Experiență în copywriting pentru web sau landing page-uri",
      "Capacitatea de a extrage esența dintr-o discuție scurtă",
    ],
  },
  {
    title: "Specialist Meta Ads",
    department: "Marketing",
    location: "Remote (România)",
    type: "Full-time",
    level: "Mid / Senior",
    description:
      "Gestionezi campanii de la creative până la optimizare, cu obiectiv clar: ROAS care crește lună de lună.",
    requirements: [
      "Minimum 2 ani de experiență cu Meta Ads",
      "Capacitatea de a citi datele și de a lua decizii rapide",
      "Experiență cu funnel-uri și tracking corect",
    ],
  },
  {
    title: "Project Manager",
    department: "Operațiuni",
    location: "Remote (România)",
    type: "Full-time",
    level: "Mid",
    description:
      "Ții proiectele în termen, coordonezi echipa și ești punctul de contact care se asigură că nimic nu se pierde pe drum.",
    requirements: [
      "Experiență în coordonarea de proiecte digitale",
      "Organizare exemplară și comunicare limpede",
      "Familiaritate cu instrumente de tip board și ticketing",
    ],
  },
  {
    title: "Dezvoltator Backend (Node.js)",
    department: "Inginerie",
    location: "Remote (România)",
    type: "Full-time",
    level: "Senior",
    description:
      "Construiești integrările, API-urile și automatizările care stau în spatele produselor și sistemelor noastre.",
    requirements: [
      "Minimum 3 ani de experiență cu Node.js și baze de date",
      "Experiență cu integrări de plăți și servicii externe",
      "Preocupare pentru securitate și cod curat",
    ],
  },
];

const BENEFITS = [
  {
    icon: Laptop,
    title: "Remote, cu program flexibil",
    text: "Lucrezi de oriunde ai internet stabil. Ne interesează rezultatul, nu ora la care intri pe chat.",
  },
  {
    icon: TrendingUp,
    title: "Bonus pe rezultate",
    text: "Proiectele livrate la timp aduc bonusuri reale. Munca bună se vede în salariu, nu doar în ședințe.",
  },
  {
    icon: GraduationCap,
    title: "Buget de învățare",
    text: "Suportăm cursuri, cărți și abonamente la unelte. Vrem să crești împreună cu noi.",
  },
  {
    icon: Coffee,
    title: "Echipă mică, zero birocrație",
    text: "Fără ședințe inutile și fără aprobări interminabile. Propunerile bune se pun în practică imediat.",
  },
  {
    icon: Heart,
    title: "Concediu plătit generos",
    text: "25 de zile pe an, pentru că odihna bună e parte din livrarea bună.",
  },
  {
    icon: Sparkles,
    title: "Proiecte variate",
    text: "Clinici, studiouri, SaaS, automatizări AI. Nu te plictisești făcând același lucru la nesfârșit.",
  },
];

export const metadata: Metadata = {
  title: "Cariere | Petruco Digital",
  description:
    "Poziții deschise la Petruco Digital: inginerie, design, marketing și operațiuni. Lucru remote, program flexibil și proiecte digitale livrate rapid.",
  openGraph: {
    title: "Cariere | Petruco Digital",
    description:
      "Alătură-te unei echipe mici care livră în zile, nu în luni. Vezi pozițiile deschise.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function CarierePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/80">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_0%,#f4f4f5_0%,#ffffff_70%)]" />

        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.12em] text-emerald-800 uppercase">
            <Briefcase className="size-3.5" />
            {JOBS.length} poziții deschise
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.75rem]">
            Vino să construiești lucruri care{" "}
            <span className="font-bold">ajung live în zile, nu în luni.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Suntem o echipă{" "}
            <strong className="font-semibold text-zinc-900">
              mică, rapidă și fără birocrație
            </strong>
            . Livrăm website-uri, aplicații, automatizări și campanii pentru
            afaceri reale. Dacă îți place să vezi rezultatul muncii tale
            publicat rapid și să ai responsabilitate reală, ești binevenit.
          </p>

          <div className="mt-8">
            <Link
              href="#pozitii"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
            >
              Vezi pozițiile deschise
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-zinc-200/80 bg-zinc-50/50">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              De ce Petruco
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Ce primești lucrând cu noi
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Nu promitem perne de masaj și mese de ping-pong. Promitem lucruri
              care contează cu adevărat pentru{" "}
              <strong className="font-semibold text-zinc-900">
                cariera și viața ta
              </strong>
              .
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-700">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-zinc-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {benefit.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section id="pozitii" className="scroll-mt-24 border-b border-zinc-200/80">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Poziții deschise
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
              Găsește rolul potrivit pentru tine
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Toate pozițiile sunt{" "}
              <strong className="font-semibold text-zinc-900">
                remote, cu program flexibil
              </strong>
              . Nu găsești ce cauți? Trimite-ne oricum un mesaj — căutăm mereu
              oameni buni.
            </p>
          </div>

          <ul className="mt-12 space-y-4">
            {JOBS.map((job) => (
              <li key={job.title}>
                <details className="group rounded-2xl border border-zinc-200 bg-white transition-colors open:border-zinc-300 hover:border-zinc-300">
                  <summary className="flex cursor-pointer list-none flex-col gap-4 p-6 sm:p-7 [&::-webkit-details-marker]:hidden">
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-800 uppercase">
                          {job.department}
                        </span>
                        <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-zinc-600 uppercase">
                          {job.level}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium text-zinc-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase className="size-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900 group-open:text-emerald-700">
                      <span className="group-open:hidden">Vezi detalii</span>
                      <span className="hidden group-open:inline">
                        Ascunde detaliile
                      </span>
                      <ArrowRight className="size-4 transition-transform group-open:rotate-90" />
                    </span>
                  </summary>

                  <div className="border-t border-zinc-200 px-6 py-6 sm:px-7">
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {job.description}
                    </p>

                    <h4 className="mt-5 text-xs font-semibold tracking-wide text-zinc-500 uppercase">
                      Ce căutăm
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {job.requirements.map((requirement) => (
                        <li
                          key={requirement}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                          {requirement}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`mailto:cariere@petruco.ro?subject=${encodeURIComponent(
                        `Aplicare: ${job.title}`,
                      )}`}
                      className="group/cta mt-6 inline-flex items-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
                    >
                      Aplică pentru acest rol
                      <ArrowRight className="size-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                    </a>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-600 bg-white p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.09)_0%,transparent_70%)]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
                <Sparkles className="size-6" />
              </span>

              <h2 className="mt-5 text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
                Nu vezi rolul potrivit?
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Trimite-ne portofoliul tău și spune-ne ce ai vrea să faci. Dacă
                ești bun, găsim noi un loc pentru tine.
              </p>

              <div className="mt-7 flex justify-center">
                <a
                  href="mailto:cariere@petruco.ro?subject=Aplicare%20spontan%C4%83"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
                >
                  Trimite o aplicare spontană
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
