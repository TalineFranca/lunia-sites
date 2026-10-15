import type { FaqItem, SectionCopy } from "@/types/content";

export const whyCopy: SectionCopy = {
  index: "01",
  label: "Por que ter um site",
  title: { start: "Um bom site responde", highlight: "três perguntas", end: "." },
  intro:
    "Quem procura o seu negócio quer decidir rápido. Se o site responde a estas três perguntas logo de cara, a visita vira conversa.",
};

/** As perguntas que o cliente faz e como o site responde cada uma */
export const whyQuestions: FaqItem[] = [
  {
    question: "O que vocês fazem?",
    answer: "Logo na primeira tela, o cliente entende o que você oferece, para quem e onde atende.",
  },
  {
    question: "Por que eu deveria confiar?",
    answer:
      "Fotos reais, avaliações de clientes e um visual cuidadoso mostram que existe um negócio sério por trás.",
  },
  {
    question: "Como eu falo com vocês?",
    answer: "WhatsApp, endereço e horários sempre à vista, a um toque de distância.",
  },
];
