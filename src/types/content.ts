export interface Project {
  name: string;
  category: string;
  description: string;
  /** Caminho a partir da pasta public/, ex.: "/projects/meu-projeto.jpg" */
  image: string;
  imageAlt: string;
  /** Deixe vazio enquanto o projeto não estiver no ar */
  url?: string;
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
