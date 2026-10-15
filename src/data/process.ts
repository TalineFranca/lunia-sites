import type { SectionCopy, TitledText } from "@/types/content";

export const processCopy: SectionCopy = {
  index: "05",
  label: "Como funciona",
  title: { start: "Do primeiro “oi” ao", highlight: "site no ar" },
  intro: "Um processo simples, em que você acompanha cada etapa e aprova tudo antes de o site ir ao ar.",
};

export const processSteps: TitledText[] = [
  {
    title: "Conversa inicial",
    description:
      "Pelo WhatsApp ou por chamada, entendemos o seu negócio, o seu público e o que você espera do site.",
  },
  {
    title: "Proposta e orçamento",
    description:
      "Você recebe uma proposta com o que será feito, o valor, o prazo e a forma de pagamento. Sem surpresas.",
  },
  {
    title: "Criação com a sua aprovação",
    description:
      "O site é desenhado e desenvolvido com você acompanhando. São 2 rodadas de ajustes para deixar tudo do seu jeito.",
  },
  {
    title: "Publicação do site",
    description: "Com tudo aprovado, o site vai ao ar no seu domínio e você recebe todos os acessos.",
  },
];
