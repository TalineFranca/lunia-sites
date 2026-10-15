import type { PaymentMethod, SectionCopy } from "@/types/content";

export const paymentCopy: SectionCopy = {
  index: "07",
  label: "Formas de pagamento",
  title: { start: "Do jeito que for", highlight: "melhor", end: " para você" },
};

/** Ícones disponíveis: "pix", "card" (cartão) e "split" (50% + 50%) */
export const paymentMethods: PaymentMethod[] = [
  { icon: "pix", title: "Pix", description: "Pagamento rápido e à vista." },
  { icon: "card", title: "Cartão de crédito", description: "Parcelado no cartão." },
  { icon: "split", title: "50% + 50%", description: "Metade de entrada para começar e metade na entrega do site." },
];
