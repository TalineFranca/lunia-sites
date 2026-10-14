import type { Technology } from "@/types/content";

export const technologies: Technology[] = [
  { name: "React", description: "Interfaces rápidas, organizadas em componentes." },
  { name: "TypeScript", description: "Código mais seguro e fácil de manter." },
  { name: "Tailwind CSS", description: "Estilo consistente, do celular ao computador." },
  { name: "shadcn/ui", description: "Componentes acessíveis como base, com visual próprio." },
  { name: "TanStack Query", description: "Dados sempre atualizados, carregados com inteligência." },
  { name: "Vite", description: "Desenvolvimento ágil e sites leves no ar." },
  {
    name: "Claude",
    description: "IA da Anthropic, usada como apoio no desenvolvimento.",
    note: "uma ajudinha extra",
  },
];
