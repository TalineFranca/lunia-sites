import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** "dark" para fundos claros, "light" para fundos escuros */
  tone?: "dark" | "light";
}

/** Lua crescente + "lunia sites" em minúsculo. */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const text = tone === "dark" ? "#1E1B2E" : "#F5F1EA";
  const moon = tone === "dark" ? "#4B3BB0" : "#D9D1F7";

  return (
    <svg
      viewBox="0 0 172 40"
      className={cn("h-9 w-auto", className)}
      role="img"
      aria-label="Lunia Sites"
    >
      <MoonMark color={moon} />
      <text
        x="44"
        y="27"
        fill={text}
        fontFamily="Fraunces, Georgia, serif"
        fontSize="24"
        fontStyle="italic"
        fontWeight="500"
        letterSpacing="-0.5"
      >
        lunia
      </text>
      <text
        x="105"
        y="27"
        fill={text}
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="17"
        fontWeight="500"
        letterSpacing="0.5"
      >
        sites
      </text>
    </svg>
  );
}

/** Apenas o símbolo da lua, num quadro de 40x40. */
export function MoonMark({ color = "#4B3BB0" }: { color?: string }) {
  return (
    <g>
      <path
        d="M24.5 5.2A15 15 0 1 0 35 27.4 12 12 0 0 1 24.5 5.2Z"
        fill={color}
      />
      <circle cx="33" cy="9" r="2.2" fill="#F3D98B" />
    </g>
  );
}
