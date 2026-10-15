import type { FaqItem, SectionCopy } from "@/types/content";

export const faqCopy: SectionCopy = {
  index: "09",
  label: "Perguntas frequentes",
  title: { start: "Ficou alguma", highlight: "dúvida", end: "?" },
  intro: "Reunimos as perguntas que mais aparecem. Se a sua não estiver aqui, é só chamar no WhatsApp.",
};

export const faqItems: FaqItem[] = [
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer:
      "Uma landing page leva em média de 7 a 10 dias úteis e um site institucional, de 15 a 20 dias úteis. O prazo começa a contar quando recebemos os textos e as fotos e pode variar conforme o tamanho do projeto. Ele fica definido na proposta, antes de começar.",
  },
  {
    question: "Preciso ter os textos e as fotos?",
    answer:
      "Ajuda, mas não é obrigatório. A gente orienta o que escrever e ajuda a organizar os textos a partir de uma conversa sobre o seu negócio. Se você ainda não tiver fotos, dá para usar imagens de bancos com licença de uso, mas fotos reais do seu negócio sempre passam mais confiança.",
  },
  {
    question: "O domínio e a hospedagem estão inclusos?",
    answer:
      "Não. O domínio (o endereço, como seunegocio.com.br) e a hospedagem são contratados à parte e ficam no seu nome, para que o site seja realmente seu. A gente indica as melhores opções para o seu caso e ajuda em toda a configuração.",
  },
  {
    question: "Posso pedir alterações depois?",
    answer:
      "Sim. Durante a criação, estão incluídas 2 rodadas de ajustes. Depois que o site está no ar, alterações pontuais são orçadas à parte ou ficam incluídas no plano de manutenção mensal.",
  },
  {
    question: "Vou conseguir editar o site sozinho?",
    answer:
      "Os sites são feitos sob medida, em código, e não em uma plataforma de arrastar e soltar. Por isso, as alterações normalmente são feitas por nós, de forma rápida, pela manutenção ou sob demanda. Se você precisa atualizar algo com frequência, como um cardápio ou um blog, dá para combinar uma solução específica, orçada separadamente.",
  },
  {
    question: "Vocês fazem loja virtual ou sistema?",
    answer:
      "O foco são landing pages e sites institucionais. Para vender de forma simples, dá para usar o WhatsApp ou um link de pagamento. Se você precisa de uma loja virtual completa ou de um sistema, conte o que precisa: se não for a nossa especialidade, a gente diz com sinceridade.",
  },
  {
    question: "O meu site vai aparecer no Google?",
    answer:
      "Todo site sai com o SEO básico configurado, para que o Google consiga entender e mostrar as suas páginas. A posição nas buscas, porém, depende de vários fatores e leva tempo, então ninguém pode garantir o primeiro lugar. Um perfil no Google Meu Negócio também ajuda muito quem atende na região.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito por Pix. O valor e os dados para pagamento vão junto com a proposta, combinados antes de começar.",
  },
];
