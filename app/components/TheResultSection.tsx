import React from "react";

export const TheResultSection: React.FC = () => {
  return (
    <section
      id="comparatie"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Rezultatul?
        </h1>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-red-700 underline decoration-red-300 underline-offset-8">
          Un cabinet gol și bani pierduți definitiv.
        </h1>

        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-xl">
          <p>
            Un potențial client pe termen lung era la un singur click distanță,
            dar profilul tău i-a dat bătăi de cap.
          </p>
          <p>
            A închis pagina și a plătit ședința la{" "}
            <strong className="text-red-700 underline decoration-red-300 underline-offset-4">
              concurență
            </strong>
            .
          </p>
          <p>
            Iar cel mai frustrant lucru?{" "}
            <span className="underline font-extrabold text-slate-900">
              Ești mult mai bine pregătit decât ei
            </span>
            , dar nu ai reușit să transmiți asta.
          </p>
          <p>
            Nu a ales pe altcineva din motive de competență, ci pentru că l-ai
            forțat să depună prea mult efort.{" "}
            <strong className="font-bold text-slate-900">
              Fiecare secundă de confuzie pe profilul tău înseamnă un client{" "}
              <span className="underline">pierdut definitiv.</span>
            </strong>
          </p>
          <p>
            În timp ce tu te întrebi de ce nu se fac programări, alți terapeuți
            își umplu agenda cu clienți care ar fi trebuit să fie ai tăi.
          </p>
        </div>
      </div>
    </section>
  );
};
