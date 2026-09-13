import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
