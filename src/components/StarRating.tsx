import { cn } from "@/lib/utils";
import { formatRating } from "@/lib/format";

const STAR_PATH =
  "M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.8l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 2.8Z";

export function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true">
      <path
        d={STAR_PATH}
        fill={filled ? "#F3D98B" : "transparent"}
        stroke={filled ? "#C9A94A" : "currentColor"}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Exibição (somente leitura) de uma nota de 1 a 5. */
export function StarRating({ value, className }: { value: number; className?: string }) {
  const rounded = Math.round(value);
  return (
    <span
      className={cn("inline-flex items-center gap-0.5 text-ink/35", className)}
      role="img"
      aria-label={`Nota ${formatRating(value)} de 5`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} filled={n <= rounded} />
      ))}
    </span>
  );
}
