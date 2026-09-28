-- Ajmal Garden catalog schema (plan §3). Public catalog reads are open;
-- writes require an authenticated owner (Phase 2 /admin, magic-link login).
-- Service role (Edge Functions) bypasses RLS as always.

create extension if not exists "pgcrypto";

-- ---------- updated_at ----------
create or replace function ag_touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ---------- categories ----------
create table categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references categories (id) on delete set null,
  slug text not null unique,
  name_en text not null,
  name_ur text,
  image text,
  sort int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create trigger categories_touch before update on categories
  for each row execute function ag_touch_updated_at();

-- ---------- products ----------
create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references categories (id) on delete cascade,
  slug text not null,
  name_en text not null,
  name_ur text,
  botanical_name text,
  description text not null default '',
  attrs jsonb not null default '{}',
  care jsonb not null default '{}',
  bulk_tiers jsonb not null default '[]',
  price_rs numeric,
  featured boolean not null default false,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  images jsonb not null default '[]',
  faqs jsonb not null default '[]',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (category_id, slug)
);
create index products_category_status_idx on products (category_id, status);
create index products_updated_idx on products (updated_at desc);
create trigger products_touch before update on products
  for each row execute function ag_touch_updated_at();

-- ---------- media (shared library: products + site sections) ----------
create table media (
  id uuid primary key default gen_random_uuid(),
  cloudinary_id text,
  local_path text,
  alt text not null default '',
  used_by jsonb not null default '[]',
  created_at timestamptz not null default now()
);

-- ---------- site_settings (single source; snapshot covers it) ----------
create table site_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default now()
);
create trigger site_settings_touch before update on site_settings
  for each row execute function ag_touch_updated_at();

-- ---------- site_sections (homepage slots, banners, FAQs) ----------
create table site_sections (
  id uuid primary key default gen_random_uuid(),
  page text not null default 'home',
  slot text not null,
  rank int not null default 0,
  payload jsonb not null default '{}',
  visible boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (page, slot)
);
create trigger site_sections_touch before update on site_sections
  for each row execute function ag_touch_updated_at();

-- ---------- RLS ----------
alter table categories enable row level security;
alter table products enable row level security;
alter table media enable row level security;
alter table site_settings enable row level security;
alter table site_sections enable row level security;

-- Public storefront: published products, everything else structural.
create policy "public read categories" on categories for select using (true);
create policy "public read published products" on products for select using (status = 'published');
create policy "public read media" on media for select using (true);
create policy "public read settings" on site_settings for select using (true);
create policy "public read visible sections" on site_sections for select using (visible = true);

-- Owner (any authenticated user until staff roles exist): full write.
create policy "owner write categories" on categories for all to authenticated using (true) with check (true);
create policy "owner write products" on products for all to authenticated using (true) with check (true);
create policy "owner write media" on media for all to authenticated using (true) with check (true);
create policy "owner write settings" on site_settings for all to authenticated using (true) with check (true);
create policy "owner write sections" on site_sections for all to authenticated using (true) with check (true);
