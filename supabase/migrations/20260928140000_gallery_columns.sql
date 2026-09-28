-- Gallery columns on the shared media library (plan: gallery before products).
-- Public read already open via "public read media"; owner writes via
-- authenticated policy from the schema migration. Safe to re-push.
alter table media
  add column if not exists title text not null default '',
  add column if not exists description text not null default '',
  add column if not exists category text not null default '',
  add column if not exists tags jsonb not null default '[]',
  add column if not exists sort int not null default 0,
  add column if not exists visible boolean not null default true,
  add column if not exists width int,
  add column if not exists height int,
  add column if not exists bytes bigint;

create index if not exists media_visible_sort_idx on media (visible, sort);
create index if not exists media_category_idx on media (category);
