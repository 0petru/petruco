import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock, Newspaper, Tag } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  category: string;
  /** Data publicării, în format afișabil (ro-RO). */
  date: string;
  /** Timpul estimat de citire. */
  readingTime: string;
  href: string;
  /** Dacă e `true`, articolul e scos în evidență ca principal. */
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    title: "De ce un site de prezentare îți aduce clienți în primele 10 secunde",
    excerpt:
      "Un vizitator decide în câteva secunde dacă are încredere în tine. Îți arătăm exact ce caută și ce îl face să închidă tab-ul.",
    category: "Website",
    date: "12 martie 2026",
    readingTime: "6 min",
    href: "#",
    featured: true,
  },
  {
    title: "Cât costă, de fapt, un website de prezentare în 2026",
    excerpt:
      "Prețul unui site nu vine din numărul de pagini, ci din ce trebuie să facă pentru afacerea ta. Descoperă structura reală a costurilor.",
    category: "Business",
    date: "5 martie 2026",
    readingTime: "5 min",
    href: "#",
  },
  {
    title: "Plăți online pe site: Stripe sau Netopia?",
    excerpt:
      "Comparăm cele două soluții folosite cel mai des în România, cu avantaje, comisioane și situațiile în care fiecare are sens.",
    category: "Integrări",
    date: "27 februarie 2026",
    readingTime: "7 min",
    href: "#",
  },
  {
    title: "SEO tehnic pentru firme mici: ce contează cu adevărat",
    excerpt:
      "Fără jargon. Ce trebuie să fie corect pe site-ul tău ca Google să te indexeze repede și să te arate în căutări locale.",
    category: "SEO",
    date: "18 februarie 2026",
    readingTime: "8 min",
    href: "#",
  },
  {
    title: "Cum îți transformi programările telefonice în rezervări online",
    excerpt:
      "Fiecare apel pierdut e un client pierdut. Un sistem de rezervări corect lucrează pentru tine chiar și după program.",
    category: "Automatizări",
    date: "9 februarie 2026",
    readingTime: "5 min",
    href: "#",
  },
  {
    title: "De ce majoritatea proiectelor digitale se întind pe luni",
    excerpt:
      "Analizăm cele mai frecvente blocaje dintr-un proiect web și cum le evităm ca să livrăm în zile, nu în trimestre.",
    category: "Business",
    date: "1 februarie 2026",
    readingTime: "6 min",
    href: "#",
  },
];

export const metadata: Metadata = {
  title: "Blog | Petruco Digital",
  description:
    "Articole despre website-uri, SEO, plăți online, automatizări și cum să îți construiești o prezență online care aduce clienți.",
  openGraph: {
    title: "Blog | Petruco Digital",
    description:
      "Idei practice despre website-uri, SEO și automatizări pentru afaceri mici și mijlocii.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/80">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_30%_0%,#f4f4f5_0%,#ffffff_70%)]" />

        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.12em] text-emerald-800 uppercase">
            <Newspaper className="size-3.5" />
            Blog
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.08] font-medium tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.75rem]">
            Idei practice despre cum vinzi{" "}
            <span className="font-bold">online, fără complicații.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Articole scrise pe baza{" "}
            <strong className="font-semibold text-zinc-900">
              proiectelor reale
            </strong>{" "}
            pe care le livrăm. Website-uri, SEO, plăți, automatizări și decizii
            de business — pe scurt, ca să le poți aplica imediat.
          </p>
        </div>
      </section>

      <section className="border-b border-zinc-200/80">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          {/* Featured */}
          <Link
            href={featured.href}
            className="group grid overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_24px_50px_-32px_rgba(24,24,27,0.5)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
          >
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-emerald-800 uppercase">
                <Tag className="size-3" />
                {featured.category}
              </span>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
                {featured.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-zinc-600">
                {featured.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {featured.readingTime} citire
                </span>
              </div>

              <span className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900">
                Citește articolul
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>

            <div className="pointer-events-none relative hidden items-center justify-center overflow-hidden bg-zinc-900 lg:flex">
              <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_70%_20%,rgba(16,185,129,0.35)_0%,transparent_70%)]" />
              <span className="relative px-10 text-center text-sm font-semibold tracking-[0.16em] text-white/80 uppercase">
                Articol recomandat
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.45)]"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-zinc-600 uppercase">
                  {post.category}
                </span>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                  {post.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-zinc-200 pt-4 text-xs font-medium text-zinc-500">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <span className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-700">
                  Citește
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-600 bg-white p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.09)_0%,transparent_70%)]" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-medium tracking-tight text-zinc-900 sm:text-3xl">
                Vrei să aplici ce ai citit, dar fără să scrii nimic?
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Un apel de 15 minute, gratuit și fără obligații. Îți spunem exact
                ce are nevoie afacerea ta și pornim imediat.
              </p>

              <div className="mt-7 flex justify-center">
                <Link
                  href="/website-in-2-zile"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-900/60 bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.15)] transition-all hover:bg-zinc-800"
                >
                  Programează apelul de 15 minute
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
