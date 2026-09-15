import Image from "next/image";

import { cn } from "@/lib/utils";

interface BrandProps {
  /** Textul afișat lângă marcă. */
  text?: string;
  /** `sm` (28px) pentru footer, `md` (36px) pentru navbar. */
  size?: "sm" | "md";
  /** `dark` pentru fundaluri închise (ex. footer pe `zinc-900`). */
  tone?: "light" | "dark";
  /** Încarcă imaginea cu prioritate — logo-ul din navbar e deasupra pliului. */
  priority?: boolean;
  className?: string;
  textClassName?: string;
}

/**
 * Marca Petruco Digital: logo-ul din `public/logo/logo.png` într-o casetă
 * rounded închisă la culoare, urmată de numele brandului.
 */
export function Brand({
  text = "Petruco Digital",
  size = "sm",
  tone = "light",
  priority = false,
  className,
  textClassName,
}: BrandProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-900 ring-1 ring-inset",
          tone === "light" ? "ring-black/5" : "ring-white/10",
          size === "sm" ? "size-7" : "size-9",
        )}
      >
        <Image
          src="/logo/logo.png"
          alt=""
          width={72}
          height={72}
          priority={priority}
          sizes={size === "sm" ? "28px" : "36px"}
          className="size-full object-cover"
        />
      </span>

      <span
        className={cn(
          "font-semibold tracking-tight",
          size === "sm" ? "text-[15px]" : "text-xl",
          tone === "light" ? "text-zinc-900" : "text-white",
          textClassName,
        )}
      >
        {text}
      </span>
    </span>
  );
}
