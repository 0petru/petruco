import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Despre noi | Petruco Digital",
  description:
    "Petruco Digital este o companie de software full-service: construim website-uri, aplicații și automatizări cu preț fix, termene scurte și garanție bani înapoi.",
  openGraph: {
    title: "Despre noi | Petruco Digital",
    description: "Cine suntem, cum lucrăm și de ce livrăm în zile, nu în luni.",
    type: "website",
    locale: "ro_RO",
  },
};

export default function DespreNoiPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased">
      <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:py-10">
        <h1 className="mt-4 text-3xl leading-[1.15] font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.1]">
          Despre PETRUCO DIGITAL
        </h1>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-600">
          <p>
            La PETRUCO DIGITAL, credem că tehnologia trebuie să fie un{" "}
            <strong className="font-semibold text-zinc-900">
              catalizator pentru toată lumea
            </strong>
            . Misiunea noastră este simplă, dar ambițioasă: construim un{" "}
            <strong className="font-semibold text-zinc-900">
              internet mai bun, sigur, orientat spre confidențialitate și
              accesibil financiar
            </strong>{" "}
            pentru afaceri și utilizatori deopotrivă.
          </p>

          <h3 className="text-xl font-semibold text-zinc-900">
            Viziunea Noastră
          </h3>

          <p>
            Internetul a nivelat terenul de joc, oferind oricui instrumentele
            necesare pentru a crea orice. Noi ducem această viziune mai departe:{" "}
            <strong className="font-semibold text-zinc-900">
              împuternicim oamenii și eliminăm barierele
            </strong>
            , fie că vorbim de obstacole tehnice, limitări de instrumente sau
            complexitate inutilă. Ajutăm clienții să implementeze servicii
            software gândite cu adevărat din perspectiva utilizatorului final,
            bazându-ne pe soluții în care avem încredere deplină și pe care le
            folosim la rândul nostru.
          </p>

          <h3 className="text-xl font-semibold text-zinc-900">
            Modelul Nostru de Creștere
          </h3>

          <p>
            Pentru noi, succesul nu se măsoară în cifre abstracte, ci în{" "}
            <strong className="font-semibold text-zinc-900">
              rezultate reale
            </strong>
            . Creșterea noastră se bazează strict pe succesul afacerilor și al
            persoanelor care aleg serviciile noastre.{" "}
            <strong className="font-semibold text-zinc-900">
              Când clienții noștri cresc, creștem și noi.
            </strong>
          </p>

          <h3 className="text-xl font-semibold text-zinc-900">
            Implicarea în Comunitate
          </h3>

          <p>
            Eforturile noastre nu se opresc la excelența tehnică. Credem cu
            tărie că o companie are responsabilitatea de a lăsa o{" "}
            <strong className="font-semibold text-zinc-900">
              amprentă pozitivă asupra lumii
            </strong>
            . De aceea, ne dedicăm anual{" "}
            <strong className="font-semibold text-zinc-900">
              5%–10% din profitul nostru
            </strong>{" "}
            unor cauze caritabile, susținând inițiative care fac bine acolo
            unde este cea mai mare nevoie.
          </p>

          <p>
            Alegând PETRUCO DIGITAL, nu investești doar într-un produs sau
            serviciu software de încredere, ci susții indirect și o{" "}
            <strong className="font-semibold text-zinc-900">
              schimbare în bine în comunitate
            </strong>
            .
          </p>
        </div>

        <div className="mt-14 space-y-4 border-t border-zinc-200 pt-10">
          <p className="text-sm text-zinc-500">
            Ai o întrebare?{" "}
            <Link
              href="/website-in-2-zile"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Programează un apel de 15 minute
            </Link>
          </p>

          <p className="text-sm text-zinc-500">
            Vrei să construim împreună?{" "}
            <Link
              href="/cariere"
              className="inline-flex items-center gap-1 font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Vezi pozițiile deschise
              <ArrowUpRight className="size-3.5" />
            </Link>
          </p>

          <p className="text-sm text-zinc-500">
            Vrei să citești mai mult?{" "}
            <Link
              href="/blog"
              className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-900"
            >
              Vizitează blogul
            </Link>
          </p>
        </div>
      </article>
    </main>
  );
}
