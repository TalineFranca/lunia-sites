import type { Project, SectionCopy } from "@/types/content";

export const projectsCopy: SectionCopy = {
  index: "04",
  label: "Projetos",
  title: { start: "Projetos", highlight: "demonstrativos" },
  intro: "Sites desenvolvidos para explorar novas tecnologias.",
};

/** Texto da etiqueta exibida em cada card */
export const projectTag = "Projeto demonstrativo";

/**
 * Projetos exibidos na seção "Projetos demonstrativos".
 * São sites fictícios, feitos para estudo e teste de tecnologias (não são clientes reais).
 * Para trocar uma imagem, substitua o arquivo em public/projetos/ ou mude o caminho abaixo.
 */
export const projects: Project[] = [
  {
    name: "Sorveteria Arte Gelato",
    description:
      "Projeto criado para testar o uso de um elemento 3D em um site. O sorvete reage ao mouse, à rolagem e ao celular.",
    technologies: ["Three.js", "React Three Fiber", "Drei", "WebGL"],
    image: "/projetos/arte-gelato.webp",
    imageAlt: "Página inicial do site da Sorveteria Arte Gelato, com um sorvete 3D em fundo vinho",
    url: "https://site-sorvete-interativo.vercel.app/",
  },
  {
    name: "Pet shop Focinho Feliz",
    description:
      "Projeto criado para testar as versões mais novas das ferramentas, com desenhos e texturas próprios.",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4", "Framer Motion"],
    image: "/projetos/focinho-feliz.webp",
    imageAlt: "Página inicial do site do Pet shop Focinho Feliz, com a ilustração de um cachorro",
    url: "https://demo-petshop-ochre.vercel.app/",
  },
];
