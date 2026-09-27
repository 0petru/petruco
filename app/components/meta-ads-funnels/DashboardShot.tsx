"use client";

/**
 * Panoul din dreapta hero-ului, construit să arate ca tabelul de campanii din
 * Meta Ads Manager: aceleași coloane, aceeași ierarhie vizuală și rândul de
 * totaluri de jos.
 */

type CampaignRow = {
  spend: string;
  /** `null` = campanie încă activă, fără dată de încheiere. */
  endDate: string | null;
  roas: string;
  roasValue: number;
  conversionValue: string;
};

const CAMPAIGNS: CampaignRow[] = [
  {
    spend: "1.250,40 lei",
    endDate: "31 oct. 2026",
    roas: "4,85",
    roasValue: 4.85,
    conversionValue: "6.064,44 lei",
  },
  {
    spend: "940,20 lei",
    endDate: "15 nov. 2026",
    roas: "6,12",
    roasValue: 6.12,
    conversionValue: "5.754,02 lei",
  },
  {
    spend: "2.100,80 lei",
    endDate: "28 nov. 2026",
    roas: "3,20",
    roasValue: 3.2,
    conversionValue: "6.722,56 lei",
  },
  {
    spend: "1.345,60 lei",
    endDate: null,
    roas: "3,92",
    roasValue: 3.92,
    conversionValue: "5.274,75 lei",
  },
  {
    spend: "1.780,50 lei",
    endDate: "05 dec. 2026",
    roas: "5,40",
    roasValue: 5.4,
    conversionValue: "9.614,70 lei",
  },
  {
    spend: "860,00 lei",
    endDate: "12 dec. 2026",
    roas: "4,15",
    roasValue: 4.15,
    conversionValue: "3.569,00 lei",
  },
  {
    spend: "1.510,40 lei",
    endDate: null,
    roas: "3,45",
    roasValue: 3.45,
    conversionValue: "5.210,88 lei",
  },
];

const TOTAL = {
  spend: "9.787,90 lei",
  label: "Total cost",
  roas: "4,31 (medie)",
  conversionValue: "42.210,35 lei",
};

const TABS = ["Campanii", "Seturi de anunțuri", "Anunțuri"];

export function DashboardShot() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_30px_80px_-40px_rgba(24,24,27,0.55)]">
        {/* Bara de sus, ca în Ads Manager */}
        <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-4 py-3">
          <div className="flex items-center gap-2">
            {/*
              Logo-ul oficial Facebook, inline: lucide-react nu mai expune
              iconițe de brand. „f"-ul alb e decupat din cercul albastru, deci
              fundalul din spate trebuie să rămână deschis.
            */}
            <svg
              viewBox="0 0 24 24"
              className="size-6 shrink-0"
              role="img"
              aria-label="Facebook"
            >
              <path
                fill="#0866FF"
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
            <span className="text-xs font-semibold text-zinc-800">
              Meta Ads Manager
            </span>
          </div>
        </div>

        {/* Taburile de niveluri */}
        <div className="flex items-center gap-1 border-b border-zinc-200 bg-zinc-50/70 px-2.5">
          {TABS.map((tab, i) => (
            <span
              key={tab}
              className={`relative px-2 py-2.5 text-[11px] font-semibold ${
                i === 0 ? "text-[#0866FF]" : "text-zinc-500"
              }`}
            >
              {tab}
              {i === 0 ? (
                <span className="absolute inset-x-1.5 bottom-0 h-0.5 rounded-full bg-[#0866FF]" />
              ) : null}
            </span>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px] border-collapse text-left text-xs sm:min-w-[440px]">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/40">
                <th className="px-3 py-2.5 text-[10px] font-semibold tracking-wide text-zinc-500 uppercase sm:px-4">
                  Sumă cheltuită
                </th>
                <th className="hidden px-3 py-2.5 text-[10px] font-semibold tracking-wide text-zinc-500 uppercase sm:table-cell">
                  Data de încheiere
                </th>
                <th className="px-3 py-2.5 text-right text-[10px] font-semibold tracking-wide text-zinc-500 uppercase">
                  ROAS
                </th>
                <th className="px-3 py-2.5 text-right text-[10px] font-semibold tracking-wide text-zinc-500 uppercase sm:px-4">
                  Valoare conversii
                </th>
              </tr>
            </thead>

            <tbody>
              {CAMPAIGNS.map((row) => (
                <tr
                  key={row.spend}
                  className="border-b border-zinc-100 transition-colors hover:bg-zinc-50/70"
                >
                  <td className="px-3 py-3 font-medium text-zinc-900 tabular-nums sm:px-4">
                    {row.spend}
                  </td>

                  <td className="hidden px-3 py-3 whitespace-nowrap sm:table-cell">
                    {row.endDate ? (
                      <span className="text-zinc-600">{row.endDate}</span>
                    ) : (
                      <span className="text-zinc-400 italic">Continuu</span>
                    )}
                  </td>

                  <td className="px-3 py-3 text-right tabular-nums">
                    <span
                      className={`font-semibold ${
                        row.roasValue >= 4
                          ? "text-emerald-700"
                          : "text-zinc-900"
                      }`}
                    >
                      {row.roas}
                    </span>
                  </td>

                  <td className="px-3 py-3 text-right font-medium text-zinc-900 tabular-nums sm:px-4">
                    {row.conversionValue}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="border-t border-zinc-200 bg-zinc-50">
                <td className="px-3 py-3 text-sm font-bold text-zinc-900 tabular-nums sm:px-4">
                  {TOTAL.spend}
                </td>
                <td className="hidden px-3 py-3 text-xs font-semibold whitespace-nowrap text-zinc-700 sm:table-cell">
                  {TOTAL.label}
                </td>
                <td className="px-3 py-3 text-right text-sm font-bold text-emerald-700 tabular-nums">
                  {TOTAL.roas}
                </td>
                <td className="px-3 py-3 text-right text-sm font-bold text-zinc-900 tabular-nums sm:px-4">
                  {TOTAL.conversionValue}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <figcaption className="mt-3 text-center text-xs leading-relaxed text-zinc-500">
        Valorile variază în funcție de nișă, ofertă și bugetul de testare.
      </figcaption>
    </figure>
  );
}
