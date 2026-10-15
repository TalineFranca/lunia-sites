import type { RichTitle } from "@/types/content";

export const hero = {
  eyebrow: "Landing pages e sites institucionais",
  title: {
    start: "Um site",
    highlight: "profissional",
    end: " para o seu negócio ser encontrado e escolhido.",
  } satisfies RichTitle,
  description:
    "Sites com a cara da sua marca, pensados para o celular e com botão direto para o WhatsApp. Você acompanha cada etapa e sabe quanto vai pagar desde o início.",
  ctaLabel: "Pedir orçamento no WhatsApp",
  secondaryLink: { label: "Ver preços", href: "#precos" },
  /** Garantias curtas exibidas logo abaixo do botão */
  guarantees: ["Funciona no celular", "Botão direto para o WhatsApp", "Você recebe todos os acessos"],
  /** Anotação escrita à mão ao lado da lua */
  note: "feito à mão, sem pressa",
};
