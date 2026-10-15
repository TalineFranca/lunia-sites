import type { RichTitle } from "@/types/content";

export const hero = {
  eyebrow: "Landing pages e sites institucionais",
  title: {
    start: "Seu negócio merece um",
    highlight: "espaço só seu",
    end: " na internet.",
  } satisfies RichTitle,
  description:
    "A Lunia cria sites e landing pages com a cara do seu negócio. Você acompanha cada etapa e sabe quanto vai pagar desde o início.",
  ctaLabel: "Pedir orçamento no WhatsApp",
  secondaryLink: { label: "Ver preços", href: "#precos" },
  /** Garantias curtas exibidas logo abaixo do botão */
  guarantees: ["Funciona no celular", "Botão direto para o WhatsApp", "Você recebe todos os acessos"],
  /** Anotação escrita à mão ao lado da lua */
  note: "feito à mão, sem pressa",
};
