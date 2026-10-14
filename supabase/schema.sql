-- Tabela de avaliações da Lunia Sites
-- Rode este script no Supabase: SQL Editor > New query > cole e clique em "Run".

create table if not exists public.reviews (
  id          uuid primary key default gen_random_uuid(),
  name        text        not null check (char_length(trim(name)) between 2 and 60),
  rating      smallint    not null check (rating between 1 and 5),
  comment     text        not null check (char_length(trim(comment)) between 5 and 500),
  created_at  timestamptz not null default now()
);

create index if not exists reviews_created_at_idx on public.reviews (created_at desc);

-- Segurança em nível de linha (RLS)
alter table public.reviews enable row level security;

-- Qualquer visitante pode ler as avaliações
drop policy if exists "Leitura pública das avaliações" on public.reviews;
create policy "Leitura pública das avaliações"
  on public.reviews
  for select
  to anon, authenticated
  using (true);

-- Qualquer visitante pode enviar uma avaliação (os limites acima continuam valendo)
drop policy if exists "Inserção pública de avaliações" on public.reviews;
create policy "Inserção pública de avaliações"
  on public.reviews
  for insert
  to anon, authenticated
  with check (true);

-- Não há políticas de update/delete: ninguém edita ou apaga pelo site.
-- Para remover uma avaliação, use o Table Editor do painel do Supabase.
