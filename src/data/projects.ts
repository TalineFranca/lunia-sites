import type { Project } from "@/types/content";

/**
 * Projetos exibidos na seção "Projetos".
 * Para trocar, edite os campos abaixo e coloque as imagens em public/projects/.
 */
export const projects: Project[] = [
  {
    name: "Café Amora",
    category: "Landing page",
    description:
      "Página de lançamento para uma cafeteria de bairro, com cardápio, horários e pedidos direto pelo WhatsApp.",
    image: "/projects/cafe-amora.svg",
    imageAlt: "Prévia do site do Café Amora em tons de vinho e creme",
    url: "",
  },
  {
    name: "Studio Raiz",
    category: "Site institucional",
    description:
      "Site para um estúdio de pilates, com apresentação da equipe, modalidades e agendamento de aula experimental.",
    image: "/projects/studio-raiz.svg",
    imageAlt: "Prévia do site do Studio Raiz em tons de verde e areia",
    url: "",
  },
  {
    name: "Ateliê Flor de Sal",
    category: "Site para celular",
    description:
      "Vitrine pensada para o celular para uma confeitaria artesanal, com catálogo de bolos e encomendas rápidas.",
    image: "/projects/flor-de-sal.svg",
    imageAlt: "Prévia do site do Ateliê Flor de Sal em tons de rosa e azul",
    url: "",
  },
];
