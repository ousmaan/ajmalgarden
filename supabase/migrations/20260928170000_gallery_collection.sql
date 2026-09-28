-- Gallery collection column: chips read real product collections
-- (Dahlia Collection, Leafy Indoor Favourites, …) instead of departments.
alter table media add column if not exists collection text not null default '';
create index if not exists media_collection_idx on media (collection);
