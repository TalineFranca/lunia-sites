import type { PaymentIcon as PaymentIconName } from "@/types/content";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Ícones simples, em traço, para as formas de pagamento. */
export function PaymentIcon({ name }: { name: PaymentIconName }) {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
      {name === "pix" && (
        <>
          <rect x="9" y="9" width="14" height="14" rx="3" transform="rotate(45 16 16)" {...stroke} />
          <path d="M12.5 16h7" {...stroke} />
        </>
      )}
      {name === "card" && (
        <>
          <rect x="4" y="8" width="24" height="16" rx="3" {...stroke} />
          <path d="M4 13h24M8 19.5h5" {...stroke} />
        </>
      )}
      {name === "split" && (
        <>
          <circle cx="16" cy="16" r="11" {...stroke} />
          <path d="M16 5a11 11 0 0 1 0 22Z" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
