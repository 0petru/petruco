import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-url";
import { ConditionalNavbar } from "./components/ConditionalNavbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Petruco Digital — Software, AI și automatizări pentru afaceri",
  description:
    "Companie de software full-service: facem design, construim, lansăm și menținem website-uri, aplicații, agenți AI și automatizări pentru afaceri.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
