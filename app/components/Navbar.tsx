"use client";

import Link from "next/link";

// import { Facebook, Instagram, MessageSquare, Send } from "lucide-react"

import { siteConfig } from "@/config/site";

import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/app/components/main-nav";
// import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/60 backdrop-blur dark:bg-[#09090b]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                {/* <Instagram /> */}
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.facebook || "https://facebook.com"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                {/* <Facebook /> */}
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              aria-label="Telegram"
              title="Telegram"
            >
              <Link
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                {/* <Send className="h-5 w-5 text-[#2AABEE]" /> */}
              </Link>
            </div>
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
              aria-label="Discord"
              title="Discord"
            >
              <Link
                href={siteConfig.links.discord}
                target="_blank"
                rel="noreferrer"
                className="flex h-full w-full items-center justify-center"
              >
                {/* <MessageSquare className="h-5 w-5 text-[#5865F2]" /> */}
              </Link>
            </div>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
