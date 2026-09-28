-- Local / Pakistani common name for each plant (Roman Urdu: Rose > Ghulab).
-- What customers actually ask for at the counter, so it belongs on the tile
-- next to the English name — not hidden behind the (currently off) lang toggle.
alter table media add column if not exists name_local text not null default '';
create index if not exists media_name_local_idx on media (name_local);
