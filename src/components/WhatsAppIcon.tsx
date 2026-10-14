import { cn } from "@/lib/utils";

/** Ícone do WhatsApp desenhado em traço, para combinar com o resto do site. */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} aria-hidden="true" fill="none">
      <path
        d="M12 2.75a9.25 9.25 0 0 0-7.98 13.92L2.9 21.1l4.55-1.1A9.25 9.25 0 1 0 12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.6 7.6c.25-.5.5-.55.8-.55h.55c.2 0 .45.05.65.5l.85 2c.08.2.07.4-.05.58l-.5.66c-.15.2-.15.4-.02.62.5.85 1.2 1.55 2.05 2.05.22.13.44.13.62-.03l.66-.57c.18-.15.38-.17.58-.07l1.9.93c.25.12.37.3.37.52 0 .65-.3 1.3-.85 1.7-.6.43-1.45.6-2.5.2-1.55-.58-2.9-1.55-3.95-2.8-.95-1.13-1.5-2.3-1.7-3.3-.12-.85.05-1.55.29-2.04Z"
        fill="currentColor"
      />
    </svg>
  );
}
