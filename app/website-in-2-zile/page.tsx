"use client";

import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  ArrowUp,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  XCircle,
  Calendar,
  CreditCard,
  Search,
  FileText,
  ChevronDown,
  X,
} from "lucide-react";
import { Layout } from "../components/Layout";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false);
  const [heroSubmitMessage, setHeroSubmitMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitHeroLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsHeroSubmitting(true);
    setHeroSubmitMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          phone: formData.get("phone"),
          clinicOrName: formData.get("business"),
          preferredTime: formData.get("preferredTime"),
          email: "lead-hero@launch48.local",
          city: "Nespecificat",
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      event.currentTarget.reset();
      setHeroSubmitMessage("Mulțumim! Te sunăm în intervalul ales.");
    } catch {
      setHeroSubmitMessage(
        "Nu am putut trimite cererea. Încearcă din nou sau sună-ne direct.",
      );
    } finally {
      setIsHeroSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-[#1E3A2F] selection:text-white flex flex-col antialiased">
      {/* Top Banner de Urgență & Garanție */}
      <div className="fixed inset-x-0 top-16 z-30 bg-[#1E3A2F] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white">
        🛡️{" "}
        <span className="underline underline-offset-4 decoration-amber-400">
          Garanție de Fier:
        </span>{" "}
        Site live în 48 de ore sau primești 100% din bani înapoi. Fără discuții.
      </div>

      <main className="flex-1 pt-8">
        <Layout>
          {/* 1. HERO SECTION */}
          <section className="relative mx-auto max-w-7xl overflow-hidden pb-24 pt-16 sm:pb-28 sm:pt-24">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_top,rgba(30,58,47,0.10),transparent_68%)]" />

            <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(400px,480px)] lg:gap-0">
              <div className="text-left">
                <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1E3A2F] shadow-sm">
                  <Clock className="h-3.5 w-3.5" /> Zero Timp Pierdut · Serviciu
                  100% Done-For-You
                </span>

                <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl lg:text-6xl">
                  Website complet gata de vânzare în{" "}
                  <span className="text-emerald-700  underline">48 de ore</span>{" "}
                  <span className="text-[40px] underline">
                    <span className="whitespace-nowrap">sau primești 100%</span>{" "}
                    din bani înapoi.
                  </span>
                </h1>

                <p className="mx-auto mb-10 mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg lg:mx-0">
                  Nu scrii texte. Nu cauți programatori. Nu pierzi săptămâni
                  întregi. Stabilim ce vrei în apel, stabilim prețul fix, iar
                  noi livrăm totul la cheie: plăți, programări, SEO și texte
                  care vând.
                </p>

                <div className="mx-auto mt-12 grid max-w-3xl divide-y divide-zinc-200 border-y border-zinc-200 py-1 text-left sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mx-0">
                  <div className="px-4 py-4 sm:text-center">
                    <p className="text-2xl font-black text-[#1E3A2F]">15 min</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Apel strategic
                    </p>
                  </div>
                  <div className="px-4 py-4 sm:text-center">
                    <p className="text-2xl font-black text-[#1E3A2F]">48 ore</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Până la lansare
                    </p>
                  </div>
                  <div className="px-4 py-4 sm:text-center">
                    <p className="text-2xl font-black text-[#1E3A2F]">100%</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Garanție bani înapoi
                    </p>
                  </div>
                </div>

                <a
                  href="#proces"
                  className="inline-flex rounded-xl border border-zinc-300 bg-white px-8 py-4 text-base font-bold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50"
                >
                  Vezi cum funcționează
                </a>
              </div>

              <form
                onSubmit={submitHeroLead}
                className="w-full rounded-2xl border border-zinc-200 bg-white p-6 text-left shadow-xl shadow-zinc-200/60 sm:p-9"
              >
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1E3A2F]">
                    Te sunăm noi direct.
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-zinc-950">
                    Doar intri la un apel de 15 minute si noi ne ocupam de tot.
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    Completează doar câteva detalii și alege când îți este cel
                    mai comod.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="hero-fullName"
                      className="mb-1.5 block text-sm font-bold text-zinc-800"
                    >
                      Nume
                    </label>
                    <input
                      id="hero-fullName"
                      name="fullName"
                      required
                      placeholder="Numele tău"
                      className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#1E3A2F] focus:ring-2 focus:ring-emerald-900/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hero-phone"
                      className="mb-1.5 block text-sm font-bold text-zinc-800"
                    >
                      Telefon
                    </label>
                    <input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="07xx xxx xxx"
                      className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#1E3A2F] focus:ring-2 focus:ring-emerald-900/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hero-business"
                      className="mb-1.5 block text-sm font-bold text-zinc-800"
                    >
                      Afacere
                    </label>
                    <input
                      id="hero-business"
                      name="business"
                      required
                      placeholder="Numele afacerii sau serviciul tău"
                      className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#1E3A2F] focus:ring-2 focus:ring-emerald-900/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="hero-preferredTime"
                      className="mb-1.5 block text-sm font-bold text-zinc-800"
                    >
                      Când te putem suna?
                    </label>
                    <select
                      id="hero-preferredTime"
                      name="preferredTime"
                      required
                      defaultValue=""
                      className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#1E3A2F] focus:ring-2 focus:ring-emerald-900/10"
                    >
                      <option value="" disabled>
                        Alege un interval
                      </option>
                      <option value="09:00 - 11:00">09:00 - 11:00</option>
                      <option value="11:00 - 13:00">11:00 - 13:00</option>
                      <option value="13:00 - 15:00">13:00 - 15:00</option>
                      <option value="15:00 - 18:00">15:00 - 18:00</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isHeroSubmitting}
                  className="mt-6 w-full rounded-xl bg-[#1E3A2F] px-5 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-md transition hover:bg-[#2A5243] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isHeroSubmitting ? "Se trimite..." : "Vreau să fiu sunat"}
                </button>
                {heroSubmitMessage && (
                  <p className="mt-3 text-center text-sm font-semibold text-[#1E3A2F]">
                    {heroSubmitMessage}
                  </p>
                )}
                <p className="mt-4 text-center text-xs text-zinc-500">
                  Fără spam. Te contactăm o singură dată, în intervalul ales.
                </p>
              </form>
            </div>
          </section>

          {/* 2. SCENARIU: CE SE ÎNTÂMPLĂ ACUM (DUREREA) */}
          <section className="py-16 px-6 bg-zinc-100/70 border-y border-zinc-200">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-red-600">
                  Scenariul de care profită concurența
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-zinc-900 mt-2">
                  Un client aude de tine și te caută pe Google chiar acum.
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-red-200 shadow-sm">
                  <div className="flex items-center gap-2 text-red-600 font-bold mb-3">
                    <XCircle className="w-5 h-5" /> Fără site sau site
                    neoptimizat
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Găsește doar o pagină veche de social media sau un site greu
                    de navigat pe telefon, fără prețuri, fără posibilitate de
                    plată directă și fără un calendar clar de programări.
                  </p>
                  <div className="mt-4 p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-lg">
                    Rezultat: Închide tab-ul și cumpără de la concurentul clasat
                    pe primul loc.
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-2 text-[#1E3A2F] font-bold mb-3">
                    <CheckCircle2 className="w-5 h-5" /> Cu Sistemul Launch48
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Intră pe un site rapid, citește direct oferta formulată
                    clar, vede autoritatea afacerii tale și își blochează
                    programarea sau plătește serviciul în sub 60 de secunde.
                  </p>
                  <div className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-lg">
                    Rezultat: Client convertit direct, fără efort din partea ta.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PACHETUL COMPLET (CE INCLUDE WEBSITE-UL) */}
          <section className="py-20 px-6 max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A2F]">
                Pachetul Executiv Complet
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-2">
                Tot ce are nevoie afacerea ta pentru a vinde online
              </h2>
              <p className="text-zinc-600 text-sm mt-3">
                Nu plătești extra pentru funcții elementare. Totul este inclus
                și configurat de noi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <FileText className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  Până la 5 Pagini Personalizate
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Acasă, Despre, Servicii Detaliate, Portofoliu/Recenzii și
                  Contact optimizate strict pe conversie.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <CreditCard className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  Integrare Plăți cu Cardul
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Configurare procesator de plăți (Stripe / Netopia). Clienții
                  pot achita servicii sau avansuri direct online.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <Calendar className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  Sistem Integrat de Programări
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Calendar automatizat conectat direct cu telefonul tău pentru
                  sesiuni de consultanță sau întâlniri.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <Search className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  SEO Tehnic & Sitemap XML
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Indexare prioritară în Google Search Console, meta-taguri
                  optimizate și viteză de încărcare sub o secundă.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <Zap className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  Copywriting Inclus
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Nu trebuie să ne trimiți documente cu texte. Noi formulăm
                  argumentele de vânzare pe baza discuției din apel.
                </p>
              </div>

              <div className="bg-white border border-zinc-200 p-6 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-[#1E3A2F] mb-4" />
                <h3 className="font-bold text-zinc-900 text-base mb-2">
                  Găzduire & Domeniu Configurat
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Conectăm domeniul, instalăm certificatele SSL de securitate și
                  publicăm versiunea live fără bătăi de cap.
                </p>
              </div>
            </div>
          </section>

          {/* 4. PROCESUL: DE CE NU FACI ABSOLUT NIMIC */}
          <section id="proces" className="py-16 px-6 bg-zinc-900 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Protocolul de Execuție
                </span>
                <h2 className="text-3xl font-black mt-2">
                  Cum colaborăm fără să-ți pierzi timpul
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-zinc-800/80 border border-zinc-700 p-6 rounded-xl flex items-start gap-4">
                  <span className="font-black text-amber-400 text-lg">01</span>
                  <div>
                    <h4 className="font-bold text-base text-white">
                      Apelul Telefonic Strategic (15 Minute)
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1">
                      Discutăm specificul afacerii tale, prețurile și stilul
                      vizual. Stabilim prețul fix și batem palma.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-800/80 border border-zinc-700 p-6 rounded-xl flex items-start gap-4">
                  <span className="font-black text-amber-400 text-lg">02</span>
                  <div>
                    <h4 className="font-bold text-base text-white">
                      Execuția Totală în 48 de Ore
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1">
                      Noi scriem textele, asamblăm codul Next.js, integrăm
                      calendarul și plățile online.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-800/80 border border-zinc-700 p-6 rounded-xl flex items-start gap-4">
                  <span className="font-black text-amber-400 text-lg">03</span>
                  <div>
                    <h4 className="font-bold text-base text-white">
                      Lansarea Live & Garanția
                    </h4>
                    <p className="text-xs text-zinc-300 mt-1">
                      Site-ul este online și funcțional. Dacă am depășit cele
                      48h, primești toți banii înapoi pe loc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. SECȚIUNEA DE GARANȚIE EXECUTIVĂ */}
          <section className="py-16 px-6 max-w-4xl mx-auto text-center">
            <div className="bg-white border-2 border-[#1E3A2F] p-8 sm:p-12 rounded-3xl shadow-lg">
              <div className="w-12 h-12 bg-[#1E3A2F]/10 text-[#1E3A2F] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                ✓
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mb-3">
                Garanția „48 de Ore sau Gratuit”
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
                Dacă în 48 de ore de la terminarea apelului nostru telefonic
                website-ul tău nu este complet funcțional și live pe internet,
                îți virăm înapoi <strong>100% din suma achitată</strong>. Fără
                întrebări, fără justificări. Riscul este 100% al nostru.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 bg-[#1E3A2F] hover:bg-[#2A5243] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition"
              >
                Activează Oferta la Telefon
              </button>
            </div>
          </section>

          {/* 6. FAQ (ÎNTREBĂRI FRECVENTE) */}
          <section className="py-16 px-6 bg-zinc-100/50 border-t border-zinc-200">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-center text-zinc-900 mb-10">
                Întrebări Frecvente
              </h2>

              <div className="space-y-4">
                <details className="bg-white p-5 rounded-xl border border-zinc-200 cursor-pointer">
                  <summary className="font-bold text-sm text-zinc-900 flex justify-between items-center">
                    Chiar nu trebuie să scriu niciun text?
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  </summary>
                  <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                    Exact. În apelul telefonic de 15 minute extragem toate
                    detaliile cheie despre serviciile și prețurile tale, iar
                    echipa noastră redactează întregul conținut comercial.
                  </p>
                </details>

                <details className="bg-white p-5 rounded-xl border border-zinc-200 cursor-pointer">
                  <summary className="font-bold text-sm text-zinc-900 flex justify-between items-center">
                    Cum funcționează garanția de retur?
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  </summary>
                  <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                    Timpul începe să curgă din momentul încheierii apelului
                    inițial. Dacă după 48 de ore site-ul nu este public și gata
                    de utilizare, primești rambursarea integrală pe loc.
                  </p>
                </details>

                <details className="bg-white p-5 rounded-xl border border-zinc-200 cursor-pointer">
                  <summary className="font-bold text-sm text-zinc-900 flex justify-between items-center">
                    Ce se întâmplă dacă vreau modificări după lansare?
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  </summary>
                  <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                    După predarea site-ului ai inclusă o sesiune de ajustări
                    finale pentru texte, culori sau imagini pentru a ne asigura
                    că rezultatul final corespunde 100% viziunii tale.
                  </p>
                </details>
              </div>
            </div>
          </section>

          {/* 7. FINAL CTA */}
          <section className="py-20 px-6 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
              Oprește pierderea clienților către competitori.
            </h2>
            <p className="text-zinc-600 text-base max-w-xl mx-auto mb-8">
              Lasă-ne datele de contact sau sună acum pentru a începe
              construcția site-ului tău în regim de urgență.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-[#1E3A2F] hover:bg-[#2A5243] text-white font-black text-lg uppercase tracking-wider rounded-xl transition shadow-xl hover:scale-105"
            >
              Vreau Site-ul Live în 48 de Ore →
            </button>
          </section>
        </Layout>
      </main>

      {/* FOOTER */}
      <footer className="py-8 bg-white border-t border-zinc-200 text-center text-xs text-zinc-500">
        <p>
          © {new Date().getFullYear()} Launch48. Toate drepturile rezervate.
          Livrare garantată sau banii înapoi.
        </p>
      </footer>

      {/* Floating Action Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-3 bg-[#1E3A2F] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-[#2A5243] transition"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Apel Rapid</span>
          </button>
          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 text-white rounded-lg shadow-lg hover:bg-zinc-800 transition"
            title="Înapoi sus"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modal de Contact / Apel Strategic */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative border border-zinc-200 shadow-2xl animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-700"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#1E3A2F] uppercase tracking-wider">
              Lansare în 48 de Ore
            </span>
            <h3 className="text-2xl font-black text-zinc-900 mt-1 mb-2">
              Programează Apelul de 15 Min
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Te sunăm noi pentru a stabili cerințele și prețul fix. Nu te costă
              nimic să vorbim.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cerere recepționată! Te sunăm în cel mai scurt timp.");
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Nume Prenume
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Alexandru Radu"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#1E3A2F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Număr de Telefon
                </label>
                <input
                  type="tel"
                  required
                  placeholder="ex: 0721 000 000"
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#1E3A2F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Afacerea / Serviciul Tău
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Cabinet Stomatologic, Servicii Curățenie..."
                  className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-lg text-sm text-zinc-900 focus:outline-none focus:border-[#1E3A2F]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#1E3A2F] hover:bg-[#2A5243] text-white font-black text-sm uppercase tracking-wider rounded-xl transition shadow-md"
              >
                Vreau să fiu sunat acum
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
