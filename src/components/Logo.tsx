import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** "dark" para fundos claros, "light" para fundos escuros */
  tone?: "dark" | "light";
}

/** "lunia sites" em minúsculo, com o quadradinho amarelo no lugar do ponto. */
export function Logo({ className, tone = "dark" }: LogoProps) {
  return (
    <span
      role="img"
      aria-label="Lunia Sites"
      className={cn(
        "inline-flex items-baseline font-sans text-2xl leading-none tracking-[-0.02em]",
        tone === "dark" ? "text-ink" : "text-cream",
        className,
      )}
    >
      <span aria-hidden="true" className="font-extrabold">
        lunia
      </span>
      <span aria-hidden="true" className="ml-[0.25em] font-normal">
        sites
      </span>
      <span aria-hidden="true" className="ml-[0.08em] inline-block h-[0.2em] w-[0.24em] bg-[#FFC83D]" />
    </span>
  );
}
