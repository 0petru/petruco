import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Code2,
  ChevronDown,
  LockKeyhole,
  Megaphone,
  Menu,
  Newspaper,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Brand } from "@/app/components/Brand";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function MainNav({ onOpenContact }: { onOpenContact: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="relative flex w-full flex-1 items-center gap-2 md:gap-5">
      <Link href="/" className="flex items-center">
        <Brand size="md" text="petruco digital" priority />
      </Link>

      <NavigationMenu className="hidden min-w-0 flex-1 md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Securitate</NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-[#09090b]">
              <ul className="w-[460px] p-2">
                {securityServices.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    icon={service.icon}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Software &amp; Growth</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[420px] p-2">
                {softwareGrowthServices.map((service) => (
                  <ListItem
                    key={service.title}
                    title={service.title}
                    href={service.href}
                    icon={service.icon}
                  >
                    {service.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/ventures" />}
              className="relative font-medium"
            >
              Ventures
              <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                Co-Build
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produse software</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[420px] p-2">
                <ListItem href="/conecta" title="Conecta - CRM pentru echipe">
                  Gestionează clienții, ofertele și activitățile echipei
                  dintr-un singur loc.
                </ListItem>
                <ListItem
                  href="/calendaro"
                  title="Calendaro - Scheduler pentru programări"
                >
                  Permite clienților să aleagă un interval și redu timpul
                  pierdut cu programările.
                </ListItem>
                <ListItem href="/#contact" title="Detector AI și plagiat">
                  Verifică rapid conținutul și identifică textele generate sau
                  preluate din alte surse.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Despre noi</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[360px] p-2">
                {aboutPages.map((page) => (
                  <ListItem
                    key={page.title}
                    title={page.title}
                    href={page.href}
                    icon={page.icon}
                  >
                    {page.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <button
        type="button"
        className="ml-auto inline-flex size-10 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100 md:hidden"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={mobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-zinc-200 bg-white p-4 shadow-lg md:hidden"
          aria-label="Navigație mobilă"
        >
          <MobileMenuGroup title="Securitate">
            {securityServices.map((service) => (
              <MobileMenuLink
                key={service.title}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{service.title}</span>
                <span className="text-xs text-zinc-500">
                  {service.description}
                </span>
              </MobileMenuLink>
            ))}
          </MobileMenuGroup>
          <MobileMenuGroup title="Software & Growth">
            {softwareGrowthServices.map((service) => (
              <MobileMenuLink
                key={service.title}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{service.title}</span>
                <span className="text-xs text-zinc-500">
                  {service.description}
                </span>
              </MobileMenuLink>
            ))}
          </MobileMenuGroup>
          <MobileMenuLink
            href="/ventures"
            onClick={() => setMobileMenuOpen(false)}
            className="flex-row items-center gap-2 font-medium"
          >
            <span>Ventures</span>
            <span className="w-fit rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
              Co-Build
            </span>
          </MobileMenuLink>
          <MobileMenuGroup title="Produse software">
            <MobileMenuLink
              href="/conecta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Conecta - CRM pentru echipe</span>
            </MobileMenuLink>
            <MobileMenuLink
              href="/calendaro"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Calendaro - Scheduler pentru programări</span>
            </MobileMenuLink>
            <MobileMenuLink
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Detector AI și plagiat</span>
            </MobileMenuLink>
          </MobileMenuGroup>
          <MobileMenuGroup title="Despre noi">
            {aboutPages.map((page) => (
              <MobileMenuLink
                key={page.title}
                href={page.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{page.title}</span>
                <span className="text-xs text-zinc-500">
                  {page.description}
                </span>
              </MobileMenuLink>
            ))}
          </MobileMenuGroup>
          <div className="border-t border-zinc-100 pt-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Contact
            </button>
          </div>
        </nav>
      )}

    </div>
  );
}

function MobileMenuGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-b border-zinc-100 py-1 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3 text-sm font-medium text-zinc-900 [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown className="size-4 text-zinc-500 transition-transform group-open:rotate-180" />
      </summary>
      <div className="pb-2">{children}</div>
    </details>
  );
}

function MobileMenuLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "flex flex-col gap-1 rounded-md px-2 py-2 text-sm text-zinc-700 hover:bg-zinc-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}

const securityServices: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Penetration Testing & Code Audit",
    href: "/#contact",
    description: "Testare de intrusism și analize de cod sursă.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-rose-600 text-white shadow-md shadow-rose-600/20">
        <ShieldCheck className="size-5" />
      </div>
    ),
  },
  {
    title: "Securitate Fizică & Digitală",
    href: "/#contact",
    description: "Audituri la sedii, camere, rețele și control acces.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-700 text-white shadow-md shadow-slate-700/20">
        <Building2 className="size-5" />
      </div>
    ),
  },
  {
    title: "Consultanță & Hardening",
    href: "/#contact",
    description: "Arhitectură securizată și protecția datelor.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500 text-white shadow-md shadow-amber-500/20">
        <LockKeyhole className="size-5" />
      </div>
    ),
  },
];

const softwareGrowthServices: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Dezvoltare Web & Mobile",
    href: "/dezvoltare-aplicatii",
    description:
      "Site-uri și aplicații custom, cu accent pe securitate.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-700 text-white shadow-md shadow-blue-700/20">
        <Code2 className="size-5" />
      </div>
    ),
  },
  {
    title: "Automatizări de Business",
    href: "/ai-si-automatizari",
    description:
      "Integrări CRM, ERP și fluxuri interne.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-violet-600 text-white shadow-md shadow-violet-600/20">
        <Workflow className="size-5" />
      </div>
    ),
  },
  {
    title: "Marketing & Performance",
    href: "/meta-ads-funnels",
    description:
      "Campanii, funneluri de vânzări și trafic.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-white shadow-md shadow-orange-500/20">
        <Megaphone className="size-5" />
      </div>
    ),
  },
];

const aboutPages: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Despre noi",
    href: "/despre-noi",
    description:
      "Cine suntem, cum lucrăm și de ce livrăm în zile, nu în luni.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
        <Users className="size-5" />
      </div>
    ),
  },
  {
    title: "Cariere",
    href: "/cariere",
    description:
      "Pozițiile deschise și motivele pentru care merită să lucrezi cu noi.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800 text-white shadow-md shadow-zinc-800/20">
        <Briefcase className="size-5" />
      </div>
    ),
  },
  {
    title: "Blog",
    href: "/blog",
    description:
      "Idei practice despre website-uri, SEO, plăți online și automatizări.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-500 text-white shadow-md shadow-amber-500/20">
        <Newspaper className="size-5" />
      </div>
    ),
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { href: string; icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink
        render={<Link {...props} ref={ref} />}
        className={cn(
          "flex select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
      >
        <div className="flex items-center justify-center">
          <div className="flex h-[40px] w-[40px] items-center justify-center">
            {icon}
          </div>
        </div>
        <div>
          <div className="block select-none space-y-1 pl-3 leading-none no-underline outline-none transition-colors">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
