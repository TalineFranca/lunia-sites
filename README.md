# Lunia Sites

Site institucional da Lunia Sites, feito com React, TypeScript, Vite, Tailwind CSS, shadcn/ui, TanStack Query, Framer Motion, React Three Fiber e Supabase.

## Como rodar localmente

Você precisa do [Node.js](https://nodejs.org) 18 ou mais recente.

```bash
npm install
cp .env.example .env   # no Windows (PowerShell): copy .env.example .env
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção: `npm run build` (os arquivos ficam em `dist/`). Para conferir essa versão: `npm run preview`.

## Configurando as avaliações (Supabase)

1. Crie um projeto em [supabase.com](https://supabase.com).
2. No painel, abra **SQL Editor**, cole o conteúdo de [`supabase/schema.sql`](supabase/schema.sql) e clique em **Run**. Isso cria a tabela `reviews` com RLS (leitura e inserção públicas).
3. Em **Project Settings > API**, copie a **Project URL** e a chave pública (**anon** ou **publishable**) para o arquivo `.env`.
4. Reinicie o `npm run dev`.

Sem o `.env`, o site funciona normalmente e a seção de avaliações mostra um aviso.

> Como a inserção é pública, qualquer visitante pode enviar uma avaliação. Para apagar alguma, use o **Table Editor** do Supabase.

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| WhatsApp, e-mail, Instagram, foto da fundadora | `src/data/site.ts` |
| Projetos (imagem, nome, descrição, link) | `src/data/projects.ts` (imagens em `public/projects/`) |
| Tecnologias | `src/data/technologies.ts` |
| Serviços | `src/data/services.ts` |
| Título, descrição e Open Graph | `index.html` |

**Foto:** coloque a imagem em `public/` (por exemplo `public/taline.jpg`) e preencha `photo: "/taline.jpg"` em `src/data/site.ts`.

**Imagem de compartilhamento:** as redes sociais não aceitam SVG. Exporte `public/og-image.svg` como `public/og-image.png` (1200×630) e, quando tiver o domínio, troque `/og-image.png` no `index.html` pelo endereço completo (ex.: `https://seudominio.com.br/og-image.png`).

## Estrutura

```
src/
  components/   componentes do site + ui/ (shadcn)
  sections/     uma pasta por seção da página
  hooks/        hooks (avaliações, rolagem, movimento reduzido)
  lib/          cliente do Supabase, React Query, utilitários
  services/     chamadas ao Supabase
  types/        tipos TypeScript
  data/         conteúdo editável
supabase/       SQL da tabela de avaliações
```
