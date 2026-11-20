import Link from "next/link";

export const metadata = {
  title: "Ventures — Petruco Digital",
  description:
    "Co-building și parteneriate 50/50 pentru idei digitale cu potențial.",
};

export default function VenturesPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
          Co-Build
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
          Construim împreună produse în care merită să crezi.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Pentru idei bune care au nevoie de execuție, intrăm în parteneriate
          50/50 sau în proiecte bazate pe procente negociabile.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-950">
              Co-building 50/50
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Tu vii cu problema, piața sau ideea. Noi contribuim cu produsul,
              tehnologia și execuția.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-zinc-950">
              Procente negociabile
            </h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Stabilim împreună structura potrivită pentru fiecare proiect,
              în funcție de contribuție și potențial.
            </p>
          </div>
        </div>

        <Link
          href="/#contact"
          className="mt-10 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
        >
          Hai să discutăm ideea
        </Link>
      </section>
    </main>
  );
}
