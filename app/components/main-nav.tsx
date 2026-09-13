import * as React from "react";
import Link from "next/link";
import { Bot, Globe2, Rocket, ShoppingCart } from "lucide-react";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block text-xl font-semibold tracking-tight">
          petruco
        </span>
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Ce construim</NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-[#09090b]">
              <ul className="grid w-[600px] gap-3 p-2 md:grid-cols-2">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    icon={component.icon}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produse software</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[420px] p-2">
                <ListItem href="/docs" title="CRM pentru echipe">
                  Gestionează clienții, ofertele și activitățile echipei
                  dintr-un singur loc.
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="Scheduler pentru programări"
                >
                  Permite clienților să aleagă un interval și redu timpul
                  pierdut cu programările.
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Detector AI și plagiat"
                >
                  Verifică rapid conținutul și identifică textele generate sau
                  preluate din alte surse.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Despre noi
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "Dezvoltare Aplicații Web și Mobile",
    href: "/",
    description:
      "Transformăm ideea ta într-un produs digital rapid, clar și pregătit să crească odată cu afacerea.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-yellow-100 text-xl font-bold text-white shadow-md shadow-teal-600/20">
        🔨
      </div>
    ),
  },
  {
    title: "MVP în 7 zile",
    href: "/",
    description:
      "Testează piața cu o primă versiune funcțională, construită pentru feedback real și decizii rapide.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-800 text-xl font-bold text-white shadow-md shadow-teal-600/20">
        <Rocket fill="white" />
      </div>
    ),
  },
  {
    title: "Website de prezentare în 2 zile",
    href: "/",
    description:
      "Un website profesionist, rapid și ușor de înțeles, care explică valoarea ta și îi ajută pe clienți să facă următorul pas.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-300 text-xl font-bold text-white shadow-md shadow-teal-600/20">
        <Globe2 />
      </div>
    ),
  },
  {
    title: "AI și Automatizări",
    href: "/",
    description:
      "Receptionist 24/7 AI, Lead Qualification & Routing, Chatbot, Sales Development Rep, Onboarding automat",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-300 text-xl font-bold text-white shadow-md shadow-teal-600/20">
        🤖
      </div>
    ),
  },
  {
    title: "Prezență Digitală pentru Psihologi",
    href: "/psychology-system",
    description: "Un sistem complet pentru cabinete de psihologie.",
    icon: (
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-600 text-xl font-bold text-white shadow-md shadow-teal-600/20">
        Ψ
      </div>
    ),
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <Link
          {...props}
          ref={ref}
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
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
