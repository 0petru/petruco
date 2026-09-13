"use client";

import { Layout } from "./components/Layout";
import Hero from "./components/pages/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center font-sans">
      <Layout>
        <main className="flex w-full flex-1 flex-col bg-white py-32 sm:items-start">
          <Hero />

          <a
            href="/psychology-system"
            className="mt-10 text-blue-500 hover:underline"
          >
            Go to Psychology System
          </a>
        </main>
      </Layout>
    </div>
  );
}
