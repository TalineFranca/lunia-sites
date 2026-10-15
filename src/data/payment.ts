import type { PaymentMethod, SectionCopy } from "@/types/content";

export const paymentCopy: SectionCopy = {
  index: "07",
  label: "Forma de pagamento",
  title: { start: "Pagamento", highlight: "simples", end: ", por Pix" },
};

/** Ícones disponíveis: "pix", "card" (cartão) e "split" (50% + 50%) */
export const paymentMethods: PaymentMethod[] = [
  {
    icon: "pix",
    title: "Pix",
    description: "Rápido e direto. Os dados para pagamento vão junto com a proposta.",
  },
];
