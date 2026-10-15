import type { PricingPlan, SectionCopy } from "@/types/content";

/*
 * Valores ainda não definidos podem ser escritos entre colchetes, como [PREÇO] ou [PRAZO]:
 * eles aparecem destacados em amarelo no site até serem preenchidos.
 */

export const pricingCopy: SectionCopy = {
  index: "06",
  label: "Preços",
  title: { start: "Quanto", highlight: "custa", end: "?" },
  intro:
    "Valores de referência para você se planejar. O orçamento final é definido depois da conversa inicial, de acordo com o seu projeto.",
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Landing page",
    pricePrefix: "a partir de",
    price: "R$ 300",
    summary: "Uma página completa, focada em transformar visitas em contatos.",
    includes: [
      "Página única com seções planejadas para o seu objetivo",
      "Design pensado para a sua marca",
      "Versão para celular",
      "Botão de WhatsApp e formulário de contato",
      "SEO básico",
      "Publicação do site",
    ],
    details: [
      { label: "Rodadas de ajuste", value: "2" },
      { label: "Prazo médio de entrega", value: "7 a 10 dias úteis" },
    ],
    ctaLabel: "Quero uma landing page",
    whatsappMessage: "Olá, Taline! Vim pelo site e tenho interesse em uma landing page.",
  },
  {
    name: "Site institucional",
    pricePrefix: "a partir de",
    price: "R$ 380",
    summary: "Várias páginas para apresentar o seu negócio por completo.",
    includes: [
      "Até 5 páginas, como Início, Sobre, Serviços e Contato",
      "Design pensado para a sua marca",
      "Versão para celular",
      "Botão de WhatsApp e formulário de contato",
      "SEO básico em todas as páginas",
      "Publicação do site",
    ],
    details: [
      { label: "Rodadas de ajuste", value: "2" },
      { label: "Prazo médio de entrega", value: "15 a 20 dias úteis" },
    ],
    ctaLabel: "Quero um site institucional",
    whatsappMessage: "Olá, Taline! Vim pelo site e tenho interesse em um site institucional.",
  },
  {
    name: "Manutenção mensal",
    tag: "Opcional",
    price: "R$ 69",
    priceSuffix: "/mês",
    summary: "Para manter o site sempre atualizado, sem você precisar se preocupar.",
    includes: [
      "Ajustes de textos, fotos e preços",
      "Correções caso algo pare de funcionar",
      "Atualizações técnicas do site",
      "Atendimento pelo WhatsApp",
    ],
    details: [],
    ctaLabel: "Quero a manutenção",
    whatsappMessage: "Olá, Taline! Vim pelo site e quero saber mais sobre a manutenção mensal.",
  },
];

/** Avisos exibidos abaixo dos cards de preço */
export const pricingNotes = [
  "Domínio (o endereço do site, como seunegocio.com.br) e hospedagem são contratados à parte, sempre no seu nome. A gente orienta e ajuda em todo o processo.",
  "Funcionalidades extras, como agendamento online, área de clientes, blog ou integrações com outros sistemas, são orçadas separadamente.",
];
