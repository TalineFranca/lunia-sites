import type { SectionCopy, TitledText } from "@/types/content";

export const includedCopy: SectionCopy = {
  index: "02",
  label: "O que está incluso",
  title: { start: "O que vem em", highlight: "todo site" },
  intro: "Não importa o tipo de site: estes itens fazem parte de todos os projetos, sem custo extra.",
};

export const includedItems: TitledText[] = [
  {
    title: "Design pensado para a sua marca",
    description: "Cores, fontes e textos escolhidos a partir da identidade do seu negócio. Nada de modelo pronto.",
  },
  {
    title: "Versão para celular",
    description: "O site é planejado primeiro para a tela pequena, onde está a maior parte dos seus clientes.",
  },
  {
    title: "Carregamento rápido",
    description: "Páginas leves, que abrem rápido mesmo com a internet do celular.",
  },
  {
    title: "SEO básico",
    description:
      "Títulos, descrições e estrutura organizados para o Google entender o seu site e mostrá-lo nas buscas.",
  },
  {
    title: "Botão de WhatsApp",
    description: "Um toque e o cliente já está conversando com você, com uma mensagem pronta para começar.",
  },
  {
    title: "Formulário de contato",
    description: "Para quem prefere escrever: as mensagens chegam direto no seu e-mail.",
  },
];
