import type { SectionCopy, SiteType } from "@/types/content";

export const siteTypesCopy: SectionCopy = {
  index: "03",
  label: "Tipos de site",
  title: { start: "Landing page ou", highlight: "site institucional", end: "?" },
  intro: "Os dois funcionam bem. A escolha depende do que você quer que o cliente faça quando chegar.",
};

export const siteTypes: SiteType[] = [
  {
    name: "Landing page",
    summary:
      "Uma página única, com começo, meio e fim, focada em um objetivo só: fazer o visitante chamar no WhatsApp, agendar ou comprar.",
    idealFor: [
      "Quem está começando e quer estar na internet rápido",
      "Divulgar um serviço, produto ou evento específico",
      "Receber contatos vindos de anúncios no Instagram ou no Google",
      "Profissionais autônomos, como manicures, personal trainers e fotógrafos",
    ],
  },
  {
    name: "Site institucional",
    summary:
      "Um site com várias páginas para apresentar a empresa por completo: história, serviços, equipe, localização e contato.",
    idealFor: [
      "Empresas com vários serviços ou produtos para mostrar",
      "Negócios que precisam transmitir mais credibilidade, como clínicas e escritórios",
      "Lojas físicas que querem mostrar endereço, horários e estrutura",
      "Quem quer crescer nas buscas do Google com o tempo",
    ],
  },
];

/** Anotação escrita à mão abaixo da comparação */
export const siteTypesNote = "na dúvida? a gente ajuda você a escolher na primeira conversa.";
