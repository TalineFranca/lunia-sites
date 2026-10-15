/**
 * Título com uma palavra em destaque (itálico roxo com o traço amarelo embaixo).
 * Ex.: { start: "Quanto", highlight: "custa", end: "?" } vira "Quanto *custa*?".
 * Coloque um espaço no começo de `end` quando ele começar com uma palavra.
 */
export interface RichTitle {
  start?: string;
  highlight: string;
  end?: string;
}

/** Cabeçalho padrão de cada seção: número, etiqueta, título e texto de apoio. */
export interface SectionCopy {
  index: string;
  label: string;
  title: RichTitle;
  intro?: string;
}

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

export interface TitledText {
  title: string;
  description: string;
}

export interface SiteType {
  name: string;
  summary: string;
  idealFor: string[];
}

export interface PricingPlan {
  name: string;
  /** Etiqueta pequena acima do nome, ex.: "Opcional" */
  tag?: string;
  /** Texto antes do valor, ex.: "a partir de" */
  pricePrefix?: string;
  price: string;
  /** Texto depois do valor, ex.: "/mês" */
  priceSuffix?: string;
  summary: string;
  includes: string[];
  /** Linhas de detalhe, como rodadas de ajuste e prazo */
  details: { label: string; value: string }[];
  ctaLabel: string;
  /** Mensagem pronta enviada no WhatsApp ao clicar no botão do card */
  whatsappMessage: string;
}

export type PaymentIcon = "pix" | "card" | "split";

export interface PaymentMethod {
  icon: PaymentIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
