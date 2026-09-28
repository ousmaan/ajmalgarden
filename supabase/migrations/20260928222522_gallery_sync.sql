-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs
create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);
