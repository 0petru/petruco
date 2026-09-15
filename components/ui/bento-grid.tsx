import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 auto-rows-[22rem] gap-4 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300",
      "hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_18px_40px_-28px_rgba(24,24,27,0.4)]",
      className,
    )}
    {...props}
  >
    <div className="pointer-events-none absolute inset-0">{background}</div>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/95 to-transparent" />

    <div className="relative mt-auto p-6">
      <div className="z-10 flex transform-gpu flex-col transition-all duration-300 lg:group-hover:-translate-y-9">
        <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900">
          <Icon className="size-5" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-zinc-900">{name}</h3>
        <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-zinc-600">
          {description}
        </p>
      </div>

      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-500 lg:hidden"
      >
        {cta}
        <ArrowRight className="size-3.5" />
      </a>
    </div>

    <a
      href={href}
      className="absolute bottom-5 left-6 hidden translate-y-8 items-center gap-1.5 text-sm font-medium text-zinc-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:inline-flex"
    >
      {cta}
      <ArrowRight className="size-3.5" />
    </a>
  </div>
);

export { BentoCard, BentoGrid };
