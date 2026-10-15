import { cn } from "@/lib/utils";

/** Círculo tracejado, usado como ornamento orgânico. */
export function DashedCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={cn("pointer-events-none", className)} aria-hidden="true">
      <circle
        cx="100"
        cy="100"
        r="97"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 7"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Seta desenhada à mão, para acompanhar as anotações em Caveat. */
export function HandArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" className={cn("pointer-events-none", className)} aria-hidden="true" fill="none">
      <path
        d="M4 8c18-4 40 2 52 18 6 8 8 17 8 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M55 44l9 10 7-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Pequena estrela de quatro pontas (brilho), usada com moderação. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("pointer-events-none", className)} aria-hidden="true">
      <path d="M12 1c.6 5.6 2.4 8.4 11 11-8.6 2.6-10.4 5.4-11 11-.6-5.6-2.4-8.4-11-11 8.6-2.6 10.4-5.4 11-11Z" fill="currentColor" />
    </svg>
  );
}

/** Borda superior ondulada para seções com fundo colorido (a cor é a da seção de cima). */
export function WaveTop({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute -top-px left-0 h-8 w-full text-cream md:h-12", className)}
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
    >
      <path d="M0 0h1440v18c-240 30-480 30-720 12S240 0 0 24V0Z" fill="currentColor" />
    </svg>
  );
}
