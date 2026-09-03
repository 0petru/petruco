import React from "react";
import {
  AlertTriangle,
  ArrowDown,
  Bookmark,
  Camera,
  CarFront,
  Globe,
  MapPin,
  MapPinOff,
  Mic,
  Phone,
  Search,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";

export const HowItShouldLookSection: React.FC = () => {
  return (
    <section
      id="prezenta-online"
      className="py-20 sm:py-20 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="pb-10 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Așa arată o prezență bună
          </h1>

          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <div className="border-b border-[#ebebeb] px-4 pt-5 sm:px-10 sm:pt-6">
              <div className="flex items-center gap-4 sm:gap-8">
                <Image
                  src="/logo/google.png"
                  alt="Google"
                  width={94}
                  height={32}
                  className="h-auto w-[70px] shrink-0 object-contain sm:w-[94px]"
                />
                <div className="flex h-11 min-w-0 flex-1 items-center gap-3 rounded-full border border-[#dfe1e5] px-4 shadow-[0_1px_6px_rgba(32,33,36,0.20)]">
                  <span className="min-w-0 flex-1 truncate text-sm text-[#202124] sm:text-base">
                    Dr. Elena Radu Psiholog București
                  </span>
                  <Search className="h-4 w-4 shrink-0 text-[#4285f4]" />
                </div>
              </div>
              <div className="ml-[86px] mt-5 flex gap-5 text-[11px] text-[#5f6368] sm:gap-6 sm:text-xs">
                <span className="border-b-[3px] border-[#1a73e8] pb-3 font-medium text-[#1a73e8]">
                  Toate
                </span>
                <span className="pb-3">Hărți</span>
                <span className="pb-3">Imagini</span>
                <span className="hidden pb-3 sm:block">Mai multe</span>
              </div>
            </div>

            <div className="grid gap-8 px-5 py-6 sm:px-10 sm:py-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-12">
              <div className="min-w-0">
                <p className="mb-5 text-xs text-[#70757a]">
                  Aproximativ 21.400 de rezultate (0,41 secunde)
                </p>
                <div className="space-y-7">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe] text-xs font-bold text-[#1a73e8]">
                        P
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs text-[#202124]">
                          Dr. Elena Radu - Psihoterapeut &amp; Psiholog
                        </p>
                        <p className="text-[11px] text-[#4d5156]">
                          https://www.elenaradu-psiholog.ro
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-2 text-lg font-medium leading-snug text-[#1a0dab] sm:text-xl">
                      Dr. Elena Radu | Psihoterapeut &amp; Psiholog Acreditat
                      CPR București
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#4d5156]">
                      Cabinet Individual de Psihologie Dr. Elena Radu.
                      Tratamente validate științific pentru anxietate, atacuri
                      de panică, depresie și terapie de cuplu în București.
                      Programează-te online!
                    </p>
                    <div className="mt-4 grid gap-3 border-l-2 border-[#dadce0] pl-3 text-sm sm:grid-cols-2">
                      <span className="font-medium text-[#1a0dab]">
                        Psihoterapie individuală
                      </span>
                      <span className="font-medium text-[#1a0dab]">
                        Terapie de cuplu &amp; familie
                      </span>
                      <span className="font-medium text-[#1a0dab]">
                        Tarife &amp; programări online
                      </span>
                      <span className="font-medium text-[#1a0dab]">
                        Despre &amp; acreditări CPR
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-xs font-bold text-white">
                        f
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs text-[#202124]">Facebook</p>
                        <p className="text-[11px] text-[#4d5156]">
                          facebook.com › dr.elena.radu.psiholog
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-2 text-lg font-medium leading-snug text-[#1a0dab]">
                      Psiholog Dr. Elena Radu | București - Facebook
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#4d5156]">
                      Dr. Elena Radu - Psihoterapeut București. Cabinet
                      Individual de Psihologie acreditat CPR. Sfaturi despre
                      sănătate mintală, gestionarea stresului și...
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-50 text-xs font-bold text-sky-700">
                        Ψ
                      </span>
                      <div className="leading-tight">
                        <p className="text-xs text-[#202124]">La-Psiholog.ro</p>
                        <p className="text-[11px] text-[#4d5156]">
                          la-psiholog.ro › cabinet › dr-elena-radu
                        </p>
                      </div>
                    </div>
                    <h2 className="mt-2 text-lg font-medium leading-snug text-[#1a0dab]">
                      Dr. Elena Radu - Psiholog, Psihoterapeut București
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-[#4d5156]">
                      Profil specialist, recenzii, competențe profesionale,
                      adresă cabinet și opțiuni de contact rapid.
                    </p>
                  </div>
                </div>
              </div>

              <aside className="overflow-hidden rounded-xl border border-[#dadce0] bg-white">
                <div className="grid h-35 grid-cols-[2fr_1fr] gap-0.5 bg-[#f1f3f4]">
                  <div
                    className="relative bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.28)), url('https://images.unsplash.com/photo-1631377307475-9acfa929b062?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                  >
                    <span className="absolute bottom-2 left-2 rounded bg-slate-900/70 px-2 py-1 text-[10px] text-white">
                      Vezi 14 fotografii
                    </span>
                  </div>
                  <div className="relative flex items-center justify-center overflow-hidden bg-[#e5e3df] bg-[linear-gradient(25deg,transparent_45%,#c4d4c7_46%,#c4d4c7_50%,transparent_51%),linear-gradient(115deg,transparent_43%,#fff_44%,#fff_48%,transparent_49%),linear-gradient(160deg,transparent_42%,#b8cbdc_43%,#b8cbdc_48%,transparent_49%)]">
                    <span className="absolute h-10 w-10 rounded-full bg-red-500/20" />
                    <MapPin className="relative h-8 w-8 fill-red-500 text-red-700 drop-shadow-md" />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-normal leading-snug text-[#202124]">
                    Cabinet Psihologie Dr. Elena Radu
                  </h2>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#70757a]">
                    <strong className="text-[#e37400]">4,9</strong>
                    <span className="flex text-[#fbbc04]">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                      <Star className="h-3.5 w-3.5 fill-current" />
                    </span>
                    <span>(48 de recenzii Google)</span>
                  </div>
                  <div className="my-4 grid grid-cols-4 border-y border-[#ebebeb] py-3 text-[#1a73e8]">
                    <span className="flex flex-col items-center gap-1 text-[10px]">
                      <Globe className="h-5 w-5" />
                      Site web
                    </span>
                    <span className="flex flex-col items-center gap-1 text-[10px]">
                      <CarFront className="h-5 w-5" />
                      Indicații
                    </span>
                    <span className="flex flex-col items-center gap-1 text-[10px]">
                      <Bookmark className="h-5 w-5" />
                      Salvează
                    </span>
                    <span className="flex flex-col items-center gap-1 text-[10px]">
                      <Phone className="h-5 w-5" />
                      Apelează
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs leading-relaxed text-[#3c4043]">
                    <p>
                      <strong>Servicii:</strong> La fața locului · Programări
                      online
                    </p>
                    <p>
                      <strong>Adresă:</strong> Bulevardul Unirii 15, București
                    </p>
                    <p>
                      <strong>Program:</strong>{" "}
                      <span className="font-semibold text-[#188038]">
                        Deschis
                      </span>{" "}
                      · Închide la 20:00
                    </p>
                    <p>
                      <strong>Telefon:</strong> 0722 000 000
                    </p>
                    <p>
                      <strong>Programări:</strong> elenaradu-psiholog.ro/tarife
                    </p>
                  </div>
                  <div className="mt-4 border-t border-[#ebebeb] pt-3 text-md leading-relaxed text-[#4d5156]">
                    <strong className="text-[#202124]">
                      Andreea M.{" "}
                      <span className="ml-1 text-[#fbbc04] text-lg">★★★★★</span>
                    </strong>
                    <br />
                    <i>
                      „M-a ajutat enorm să depășesc episoadele severe de
                      anxietate cu mult profesionalism și empatie.”
                    </i>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl text-left">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Ce este bine la această prezență?
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <p className="rounded-xl border border-teal-200/80 bg-teal-50/70 p-5 text-base font-semibold leading-relaxed text-slate-700 shadow-sm sm:text-lg">
                Identitatea și profesia sunt clare din primul rezultat.
              </p>
              <p className="rounded-xl border border-teal-200/80 bg-teal-50/70 p-5 text-base font-semibold leading-relaxed text-slate-700 shadow-sm sm:text-lg">
                Serviciile oferite răspund direct întrebărilor clientului.
              </p>
              <p className="rounded-xl border border-teal-200/80 bg-teal-50/70 p-5 text-base font-semibold leading-relaxed text-slate-700 shadow-sm sm:text-lg">
                Website-ul transmite încredere și profesionalism.
              </p>
              <p className="rounded-xl border border-teal-200/80 bg-teal-50/70 p-5 text-base font-semibold leading-relaxed text-slate-700 shadow-sm sm:text-lg">
                Programarea este simplă, rapidă și ușor de găsit.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden">
          <h1 className="underline mb-6 text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Nimic
          </h1>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <div className="border-b border-[#ebebeb] px-4 pt-5 sm:px-10 sm:pt-6">
              <div className="flex items-center gap-4 sm:gap-8">
                <Image
                  src="/logo/google.png"
                  alt="Google"
                  width={94}
                  height={32}
                  className="h-auto w-[70px] shrink-0 object-contain sm:w-[94px]"
                />
                <div className="flex h-11 min-w-0 flex-1 items-center gap-3 rounded-full border border-[#dfe1e5] px-4 shadow-[0_1px_6px_rgba(32,33,36,0.20)]">
                  <span className="min-w-0 flex-1 truncate text-sm text-[#202124] sm:text-base">
                    Dr. Elena Radu Psiholog București
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-slate-500">
                    <X className="h-4 w-4" />
                    <Mic className="hidden h-4 w-4 sm:block" />
                    <Camera className="hidden h-4 w-4 sm:block" />
                    <Search className="h-4 w-4 text-[#4285f4]" />
                  </span>
                </div>
              </div>

              <div className="ml-[86px] mt-5 flex gap-5 overflow-hidden whitespace-nowrap text-[11px] text-[#5f6368] sm:gap-6 sm:text-xs">
                <span className="border-b-[3px] border-[#1a73e8] pb-3 font-medium text-[#1a73e8]">
                  Toate
                </span>
                <span className="pb-3">Hărți</span>
                <span className="pb-3">Imagini</span>
                <span className="hidden pb-3 sm:block">Știri</span>
                <span className="hidden pb-3 sm:block">Videoclipuri</span>
                <span className="pb-3">Mai multe</span>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-16 sm:py-8">
              <p className="mb-7 text-xs text-[#70757a] sm:text-sm">
                Aproximativ 0 rezultate (0,28 secunde)
              </p>
              <p className="text-sm leading-relaxed text-[#202124] sm:text-base">
                Căutarea dvs. -{" "}
                <strong>Dr. Elena Radu Psiholog București</strong> - nu a găsit
                niciun document.
              </p>
              <div className="mt-7">
                <p className="mb-3 text-sm text-[#202124]">Sugestii:</p>
                <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-[#3c4043]">
                  <li>Asigurați-vă că toate cuvintele sunt scrise corect.</li>
                  <li>Încercați alte cuvinte cheie.</li>
                  <li>Încercați cuvinte cheie mai generale.</li>
                  <li>Încercați mai puține cuvinte cheie.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h1 className="hidden mb-8 text-center text-3xl font-bold italic text-slate-600 sm:text-4xl">
          sau...
        </h1>

        <div className="hidden grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md relative flex-1 overflow-hidden">
              <div className="border-b border-slate-200 px-4 sm:px-6 pt-5 pb-0">
                <div className="flex items-center gap-5 sm:gap-8 mb-5">
                  <div className="text-[25px] sm:text-[28px] font-bold tracking-tight select-none leading-none">
                    <Image
                      src="/logo/google.png"
                      alt="Google Logo"
                      width={94}
                      height={32}
                      className="mr-1 h-auto w-auto object-contain"
                    />
                  </div>
                  <div className="h-10 flex-1 max-w-[430px] rounded-full border border-slate-200 shadow-[0_1px_5px_rgba(32,33,36,0.2)] flex items-center px-4 gap-3">
                    <span className="text-[13px] sm:text-[15px] text-slate-800 truncate">
                      Dr. Elena Radu Psiholog București
                    </span>
                    <span className="ml-auto flex items-center gap-2 text-slate-500 shrink-0">
                      <X className="w-3.5 h-3.5" />
                      <Mic className="w-3.5 h-3.5" />
                      <Camera className="w-3.5 h-3.5 hidden sm:block" />
                      <Search className="w-4 h-4 text-[#4285f4]" />
                    </span>
                  </div>
                </div>
                <div className="flex gap-5 sm:gap-7 ml-[88px] text-[11px] sm:text-[12px] text-slate-500 whitespace-nowrap overflow-hidden">
                  <span className="text-[#1a73e8] border-b-2 border-[#1a73e8] pb-2 font-medium">
                    Toate
                  </span>
                  <span className="pb-2">Hărți</span>
                  <span className="pb-2">Imagini</span>
                  <span className="pb-2 hidden sm:block">Știri</span>
                  <span className="pb-2 hidden sm:block">Mai multe</span>
                </div>
              </div>

              <div className="bg-white px-5 sm:px-10 py-5 sm:py-3">
                <div className="text-[11px] text-slate-400">
                  Aproximativ 94 de rezultate (0,31 secunde)
                </div>
                <div className="space-y-7">
                  <div>
                    <div className="mt-3 bg-red-50/80 border border-red-200 rounded-lg px-3 py-2.5 flex items-center gap-2 text-sm text-red-800">
                      <MapPinOff className="w-4 h-4 text-red-600 shrink-0 " />
                      <span className="font-semibold">
                        Google Maps: locație inexistentă sau neverificată
                      </span>
                      <span className="ml-auto text-[9px] font-bold text-red-600 uppercase hidden sm:block">
                        Lipsă orar
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1 mt-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[11px] font-bold">
                        ⚖
                      </span>
                      <div className="leading-tight">
                        <div className="text-[11px] text-slate-800">
                          Baroul București
                        </div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[270px]">
                          baroul-bucuresti.ro › tablou-avocati
                        </div>
                      </div>
                    </div>
                    <div className="text-[16px] sm:text-[18px] leading-snug text-[#1a0dab] font-medium">
                      Cabinet de Avocat <strong>Elena Radu</strong> - Baroul{" "}
                      <strong>București</strong>
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-relaxed text-slate-600 mt-1">
                      Tabloul avocaților definitivi din Baroul București. Avocat
                      Elena Radu, specializare în drept civil și contencios
                      administrativ...
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-md font-semibold text-red-700 bg-red-50 border border-red-200 rounded px-2 py-1">
                        ✕ Numele duce la altă profesie
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-xs font-bold">
                        f
                      </span>
                      <div className="leading-tight">
                        <div className="text-[11px] text-slate-800">
                          Facebook
                        </div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[270px]">
                          facebook.com › elena.radu.3910
                        </div>
                      </div>
                    </div>
                    <div className="text-[16px] sm:text-[18px] leading-snug text-[#1a0dab] font-medium">
                      <strong>Elena Radu</strong> (<strong>Psiholog</strong>) |
                      Facebook
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-relaxed text-slate-600 mt-1">
                      <strong className="text-slate-800">Elena Radu</strong>{" "}
                      este pe Facebook. Înscrie-te pentru a intra în legătură cu
                      Elena Radu şi cu alţii pe care s-ar putea să-i cunoşti...
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded px-2 py-1">
                        ✕ Profil personal, nu cabinet
                      </span>
                      <span className="text-sm font-semibold text-red-700 bg-red-50 border border-red-200 rounded px-2 py-1">
                        ✕ Fără informații despre servicii
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-[11px]">
                        ✍
                      </span>
                      <div className="leading-tight">
                        <div className="text-[11px] text-slate-800">
                          UrbanLife Blog
                        </div>
                        <div className="text-[10px] text-slate-500 truncate max-w-[270px]">
                          urbanlife.ro › sanatate › psiholog-bun
                        </div>
                      </div>
                    </div>
                    <div className="text-[16px] sm:text-[18px] leading-snug text-[#1a0dab] font-medium">
                      Ghid: Cum să găsești un <strong>psiholog</strong> bun în{" "}
                      <strong>București</strong>
                    </div>
                    <p className="text-[11px] sm:text-[12px] leading-relaxed text-slate-600 mt-1">
                      Când cauți un terapeut sau un psiholog în București,
                      verifică întotdeauna acreditarea. Există sute de cabinete
                      private...
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-md font-semibold text-red-700 bg-red-50 border border-red-200 rounded px-2 py-1">
                        ✕ Articol general, nu profilul tău
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-800">
                Momentul pierderii clientului
              </h2>
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </span>
                <p className="text-xs sm:text-lg font-semibold text-slate-800">
                  Persoana nu știe exact cine ești și ce experiență ai.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </span>
                <p className="text-xs sm:text-lg font-semibold text-slate-800">
                  Nu știe cu ce lucrezi (anxietate, cuplu, adolescenți, traume).
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </span>
                <p className="text-xs sm:text-lg font-semibold text-slate-800">
                  Nu știe unde ai cabinetul și dacă oferi și ședințe online.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  4
                </span>
                <p className="text-xs sm:text-lg font-semibold text-slate-800">
                  Nu știe cum să facă o programare fără să te deranjeze.
                </p>
              </div>

              <div className="mt-4 flex justify-center" aria-hidden="true">
                <ArrowDown className="h-8 w-8" strokeWidth={2.5} />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50 via-white to-orange-50 p-6 shadow-[0_16px_35px_rgba(220,38,38,0.14)]">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-red-100/70" />
              <span className="relative mb-2 block text-xs font-bold uppercase tracking-wider text-red-700">
                Concluzia Naturală
              </span>
              <p className="relative text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                Urmarea? Se duce direct la{" "}
                <span className="text-red-700 underline decoration-red-300 underline-offset-4">
                  concurență
                </span>
                .
              </p>
              <p className="relative mt-3 text-xs font-normal leading-relaxed text-slate-600">
                Nu este o decizie împotriva ta ca profesionist, ci o reacție
                firească la nesiguranța generată de lipsa unei prezențe clare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
