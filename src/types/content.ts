export interface Project {
  name: string;
  description: string;
  /** Tecnologias usadas, exibidas como etiquetas no card */
  technologies: string[];
  /** Caminho a partir da pasta public/, ex.: "/projetos/meu-projeto.webp" */
  image: string;
  imageAlt: string;
  url: string;
}

export interface Technology {
  name: string;
  description: string;
  note?: string;
}

export interface Service {
  title: string;
  description: string;
}
