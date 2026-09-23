import { Brand } from "@/app/components/Brand";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type FooterLink = { label: string; href: string; external?: boolean };

const FOOTER_COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Servicii",
    links: [
      { label: "AI & automatizări", href: "/ai-si-automatizari" },
      { label: "Website în 2 zile", href: "/website-in-2-zile" },
      {
        label: "Prezență digitală pentru psihologi",
        href: "/psychology-system",
      },
      { label: "Mentenanță & suport", href: "#mentenanta" },
    ],
  },
  {
    title: "Produse",
    links: [
      { label: "Calendaro", href: "/calendaro" },
      { label: "Conecta", href: "/conecta" },
      {
        label: "Detector AI & Plagiat",
        href: siteConfig.links.mainForm,
        external: true,
      },
    ],
  },
  {
    title: "Companie",
    links: [
      {
        label: "Cere o ofertă",
        href: siteConfig.links.mainForm,
        external: true,
      },
      {
        label: "Scrie-ne pe Telegram",
        href: siteConfig.links.telegram,
        external: true,
      },
      { label: "Întrebări frecvente", href: "#intrebari" },
    ],
  },
];


function FooterLinkItem({ link }: { link: FooterLink }) {
  const className =
    "text-sm text-zinc-600 transition-colors hover:text-zinc-900";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {link.label}
      </a>
    );
  }

  if (link.href.startsWith("#")) {
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function Footer() {
  return (
    <>
       <footer className="bg-zinc-50/70">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
            <div>
              <Brand />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600">
                Construim, lansăm și întreținem produse digitale: website-uri,
                aplicații, agenți AI și automatizări. Din România, pentru
                afaceri care vor să crească.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/logo/GDPR-logo.png"
                  alt="GDPR – General Data Protection Regulation"
                  width={897}
                  height={402}
                  sizes="320px"
                  className="h-18 w-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {FOOTER_COLUMNS.map((column) => (
                <div key={column.title}>
                  <h3 className="text-xs font-semibold tracking-[0.14em] text-zinc-900 uppercase">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterLinkItem link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} PETRUCO DIGITAL S.R.L. | Toate drepturile
              rezervate.
            </p>
            <p className="text-xs text-zinc-500">
              Design, dezvoltare și mentenanță — de la o singură echipă.
            </p>
          </div>
        </div>
      </footer>
     
    </>
  );
}
