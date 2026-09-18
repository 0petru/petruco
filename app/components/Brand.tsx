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
 * Marca Petruco Digital: numele brandului, folosit identic în navbar, footer
 * și bara de urgență. Trecerea prin această componentă ține marca sincronizată
 * în toate locurile.
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
