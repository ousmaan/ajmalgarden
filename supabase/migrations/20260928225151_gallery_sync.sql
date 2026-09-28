-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs
create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0001', 'organized/AGN-0001.jpg', 'Pink Ti Cordyline', '', '', 'Foliage', 'Colourful Foliage Plants', '["Foliage"]'::jsonb, 0, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0002', 'organized/AGN-0002.jpg', 'Curly red and yellow croton foliage at Ajmal Garden Nursery', '', 'Twisted red, yellow and green croton leaves in nursery pots.', '', 'Colourful Foliage Plants', '[]'::jsonb, 1, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0003', 'organized/AGN-0003.jpg', 'Red purple cordyline plants in a nursery bed', '', 'Magenta and deep purple cordyline bed, ready for lawns and borders.', '', 'Colourful Foliage Plants', '[]'::jsonb, 2, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0004', 'organized/AGN-0004.jpg', 'Snow white variegated aglaonema foliage', '', 'White-variegated Chinese evergreen for bright indoor corners.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 3, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0005', 'organized/AGN-0005.jpg', 'Yellow striped Song of India dracaena leaves', '', 'Yellow and green striped dracaena, easy indoor statement plant.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 4, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0006', 'organized/AGN-0006.jpg', 'Gold dust croton with yellow speckled leaves', '', 'Narrow green leaves dusted gold — vivid all-season foliage.', '', 'Colourful Foliage Plants', '[]'::jsonb, 5, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0007', 'organized/AGN-0007.jpg', 'Lemon lime striped dracaena foliage', '', 'Broad lime-striped dracaena leaves for homes and offices.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 6, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0008', 'organized/AGN-0008.jpg', 'Aglaonema Speckled', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 7, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0009', 'organized/AGN-0009.jpg', 'Variegated dieffenbachia leaves in nursery pots', '', 'Bold green and cream dumb-cane foliage for shaded verandas.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 8, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0010', 'organized/AGN-0010.jpg', 'Lemon lime philodendron climbing moss poles', '', 'Neon lemon philodendron trained on coir poles, with monstera alongside.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 9, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0011', 'organized/AGN-0011.jpg', 'Bed of variegated dracaena plants', '', 'Cream and green variegated dracaena stock in all sizes.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 10, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0012', 'organized/AGN-0012.jpg', 'Mixed red green and orange Petra croton foliage', '', 'Classic red, orange and green Petra crotons for vivid borders.', '', 'Colourful Foliage Plants', '[]'::jsonb, 11, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0013', 'organized/AGN-0013.jpg', 'Cream striped cordyline plants', '', 'Cream-striped cordyline with purple new growth for entrances.', '', 'Colourful Foliage Plants', '[]'::jsonb, 12, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0014', 'organized/AGN-0014.jpg', 'Pink Ti cordyline with maroon rosettes', '', 'Hot pink Ti leaves over deep maroon rosettes — high-drama foliage.', '', 'Colourful Foliage Plants', '[]'::jsonb, 13, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0015', 'organized/AGN-0015.jpg', 'Red edged dracaena marginata foliage', '', 'Narrow red-edged dragon tree leaves, a forgiving indoor classic.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 14, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0016', 'organized/AGN-0016.jpg', 'Variegated Pothos', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 15, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0017', 'organized/AGN-0017.jpg', 'Variegated spider plants in nursery rows', '', 'Striped spider plants for baskets, table pots and shaded edges.', '', 'Leafy Indoor Favourites', '[]'::jsonb, 16, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0018', 'organized/AGN-0018.jpg', 'Pink and green coleus bedding plants', '', 'Pink and green coleus trays for instant seasonal colour.', '', 'Seasonal Bedding', '[]'::jsonb, 17, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0019', 'organized/AGN-0019.jpg', 'Burgundy and white bicolor dahlia flower', '', 'Bold burgundy and white bicolor dahlia in full bloom.', '', 'Dahlia Collection', '[]'::jsonb, 18, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0020', 'organized/AGN-0020.jpg', 'Speckled cream and crimson dahlia', '', 'Cream petals flecked crimson on a collector dahlia.', '', 'Dahlia Collection', '[]'::jsonb, 19, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0021', 'organized/AGN-0021.jpg', 'Yellow and green variegated ginger leaves', '', 'Yellow striped shell ginger for lush tropical corners.', '', 'Colourful Foliage Plants', '[]'::jsonb, 20, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0022', 'organized/AGN-0022.jpg', 'Lavender pink dahlia bloom', '', 'Soft lavender pink dinner-plate dahlia on the stem.', '', 'Dahlia Collection', '[]'::jsonb, 21, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0023', 'organized/AGN-0023.jpg', 'Red Dinner-Plate Dahlia', '', '', 'Flowering Plant', 'Dahlia Collection', '["Flowering Plant"]'::jsonb, 22, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0024', 'organized/AGN-0024.jpg', 'Bronze orange chrysanthemum blooms', '', 'Bronze orange gul-e-daudi heads for winter beds and pots.', '', 'Winter Flower Favourites', '[]'::jsonb, 23, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0025', 'organized/AGN-0025.jpg', 'Red dahlia flower close-up', '', 'Velvet red dahlia with dew-fresh petals.', '', 'Dahlia Collection', '[]'::jsonb, 24, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0026', 'organized/AGN-0026.jpg', 'Orange and gold chrysanthemum cluster', '', 'Orange and gold gul-e-daudi cluster for seasonal colour.', '', 'Winter Flower Favourites', '[]'::jsonb, 25, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0027', 'organized/AGN-0027.jpg', 'Red and pink chrysanthemum blooms with buds', '', 'Cherry red and rose pink gul-e-daudi side by side.', '', 'Winter Flower Favourites', '[]'::jsonb, 26, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0028', 'organized/AGN-0028.jpg', 'Lilac chrysanthemum flowers with yellow centres', '', 'Soft lilac daisy-type gul-e-daudi with gold centres.', '', 'Winter Flower Favourites', '[]'::jsonb, 27, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0029', 'organized/AGN-0029.jpg', 'Cream double gerbera daisy', '', 'Cream double gerbera with a green heart.', '', 'Winter Flower Favourites', '[]'::jsonb, 28, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0030', 'organized/AGN-0030.jpg', 'Blush peach gerbera daisy', '', 'Blush peach gerbera with a honey gold centre.', '', 'Winter Flower Favourites', '[]'::jsonb, 29, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0031', 'organized/AGN-0031.jpg', 'Magenta Gerbera', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 30, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0032', 'organized/AGN-0032.jpg', 'Light pink double gerbera blooms', '', 'Soft pink double gerbera pair, morning fresh.', '', 'Winter Flower Favourites', '[]'::jsonb, 31, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0033', 'organized/AGN-0033.jpg', 'Red and white bicolor gerbera daisy', '', 'Quilled red petals tipped white on a bold gerbera.', '', 'Winter Flower Favourites', '[]'::jsonb, 32, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0034', 'organized/AGN-0034.jpg', 'White gerbera daisy with pink centre', '', 'Layered white gerbera blushing pink at the heart.', '', 'Winter Flower Favourites', '[]'::jsonb, 33, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0035', 'organized/AGN-0035.jpg', 'Pink gerbera with cream centre', '', 'Candy pink gerbera around a cream green centre.', '', 'Winter Flower Favourites', '[]'::jsonb, 34, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0036', 'organized/AGN-0036.jpg', 'Peach Gerbera', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 35, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0037', 'organized/AGN-0037.jpg', 'Pink Primula', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 36, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0038', 'organized/AGN-0038.jpg', 'Magenta Primula', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 37, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0039', 'organized/AGN-0039.jpg', 'White Primula', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 38, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0040', 'organized/AGN-0040.jpg', 'Deep Pink Gerbera', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 39, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0041', 'organized/AGN-0041.jpg', 'Marigold Bed', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 40, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0042', 'organized/AGN-0042.jpg', 'Purple Primula', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 41, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0043', 'organized/AGN-0043.jpg', 'Petunia Beds', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 42, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0044', 'organized/AGN-0044.jpg', 'Jacaranda Tree', '', '', 'Flowering Tree', 'Tropical Plants', '["Flowering Tree"]'::jsonb, 43, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0045', 'organized/AGN-0045.jpg', 'Pink Primula Pots', '', '', 'Flowering Plant', 'Winter Flower Favourites', '["Flowering Plant"]'::jsonb, 44, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0047', 'organized/AGN-0047.jpg', 'Mixed Bedding Plants', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 45, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0048', 'organized/AGN-0048.jpg', 'Spring Bedding Mix', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 46, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0049', 'organized/AGN-0049.jpg', 'Yellow Marigold', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 47, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0050', 'organized/AGN-0050.jpg', 'Red Petunias', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 48, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0051', 'organized/AGN-0051.jpg', 'Pansy Mix', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 49, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0052', 'organized/AGN-0052.jpg', 'White Alyssum', '', '', 'Flowering Plant', 'Seasonal Bedding', '["Flowering Plant"]'::jsonb, 50, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0053', 'organized/AGN-0053.jpg', 'Bougainvillea', '', '', 'Flowering Climber', 'Leafy Indoor Favourites', '["Flowering Climber"]'::jsonb, 51, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0054', 'organized/AGN-0054.jpg', 'AGN-0054', '', '', '', 'Nursery', '[]'::jsonb, 52, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0055', 'organized/AGN-0055.jpg', 'AGN-0055', '', '', '', 'Nursery', '[]'::jsonb, 53, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0056', 'organized/AGN-0056.jpg', 'AGN-0056', '', '', '', 'Nursery', '[]'::jsonb, 54, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0057', 'organized/AGN-0057.jpg', 'AGN-0057', '', '', '', 'Nursery', '[]'::jsonb, 55, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0058', 'organized/AGN-0058.jpg', 'AGN-0058', '', '', '', 'Nursery', '[]'::jsonb, 56, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0059', 'organized/AGN-0059.jpg', 'AGN-0059', '', '', '', 'Nursery', '[]'::jsonb, 57, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0060', 'organized/AGN-0060.jpg', 'AGN-0060', '', '', '', 'Nursery', '[]'::jsonb, 58, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0061', 'organized/AGN-0061.jpg', 'AGN-0061', '', '', '', 'Nursery', '[]'::jsonb, 59, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0062', 'organized/AGN-0062.jpg', 'AGN-0062', '', '', '', 'Nursery', '[]'::jsonb, 60, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0063', 'organized/AGN-0063.jpg', 'AGN-0063', '', '', '', 'Nursery', '[]'::jsonb, 61, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0064', 'organized/AGN-0064.jpg', 'AGN-0064', '', '', '', 'Nursery', '[]'::jsonb, 62, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0065', 'organized/AGN-0065.jpg', 'AGN-0065', '', '', '', 'Nursery', '[]'::jsonb, 63, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0066', 'organized/AGN-0066.jpg', 'Large brown textured planter', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 64, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0067', 'organized/AGN-0067.jpg', 'Stack of 3 brown ribbed planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 65, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0068', 'organized/AGN-0068.jpg', 'Tall rectangular planter with leaf/fern carving', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 66, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0069', 'organized/AGN-0069.jpg', 'Tall cylindrical planter with wavy wood-grain pattern', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 67, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0070', 'organized/AGN-0070.jpg', 'Stack of 3 grey geometric planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 68, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0071', 'organized/AGN-0071.jpg', 'Stack of 4 reddish-brown rectangular planters with ornate swirl carvings', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 69, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0072', 'organized/AGN-0072.jpg', 'Stack of 2 grey square planters with star/flower carvings and Greek key border', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 70, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0073', 'organized/AGN-0073.jpg', 'Vertical wall fountain with 4 tiers and yellow border', '', '', 'Fountains & Water Features', 'Garden Decor', '["Fountains & Water Features"]'::jsonb, 71, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0074', 'organized/AGN-0074.jpg', 'Stack of grey stone-textured planters with rock pattern', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 72, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0075', 'organized/AGN-0075.jpg', 'Geometric diamond-shaped planter with 4 bowl-shaped tiers', '', '', 'Fountains & Water Features', 'Garden Decor', '["Fountains & Water Features"]'::jsonb, 73, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0076', 'organized/AGN-0076.jpg', 'Large stone planter with carved leaf patterns', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 74, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0077', 'organized/AGN-0077.jpg', 'Stack of square planters with floral/snowflake patterns', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 75, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0078', 'organized/AGN-0078.jpg', 'Tiered fountain with bowl shapes', '', '', 'Fountains & Water Features', 'Garden Decor', '["Fountains & Water Features"]'::jsonb, 76, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0079', 'organized/AGN-0079.jpg', 'Tiered fountain with curved water flow', '', '', 'Fountains & Water Features', 'Garden Decor', '["Fountains & Water Features"]'::jsonb, 77, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0080', 'organized/AGN-0080.jpg', 'Stack of stone planters with rope pattern', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 78, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0081', 'organized/AGN-0081.jpg', 'Tall grey planter on brown base', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 79, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0082', 'organized/AGN-0082.jpg', 'Stack of grey stone planters with circular patterns', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 80, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0083', 'organized/AGN-0083.jpg', 'Yellow bench with black frame', '', '', 'Garden Furniture', 'Garden Decor', '["Garden Furniture"]'::jsonb, 81, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0084', 'organized/AGN-0084.jpg', 'Tall ribbed planter with pedestal base', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 82, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0085', 'organized/AGN-0085.jpg', 'Tall grey planter on brown base', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 83, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0086', 'organized/AGN-0086.jpg', 'Stack of decorative stone planters with circular patterns', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 84, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0087', 'organized/AGN-0087.jpg', 'Thai pink guava', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 85, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0088', 'organized/AGN-0088.jpg', 'Red liner', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 86, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0089', 'organized/AGN-0089.jpg', 'Jackfruit', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 87, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0090', 'organized/AGN-0090.jpg', 'Pineapple', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 88, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0091', 'organized/AGN-0091.jpg', 'Yellow bench', '', '', 'Garden Furniture', 'Garden Decor', '["Garden Furniture"]'::jsonb, 89, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0092', 'organized/AGN-0092.jpg', 'Fig on tree', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 90, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0093', 'organized/AGN-0093.jpg', 'Red fruit', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 91, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0094', 'organized/AGN-0094.jpg', 'Yellow flowers on plant', '', '', 'Flowering Plant', 'Garden Decor', '["Flowering Plant"]'::jsonb, 92, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0095', 'organized/AGN-0095.jpg', 'Large tropical leaves', '', '', 'Foliage', 'Tropical Plants', '["Foliage"]'::jsonb, 93, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0096', 'organized/AGN-0096.jpg', 'Red orange flowers', '', '', 'Flowering Plant', 'Garden Decor', '["Flowering Plant"]'::jsonb, 94, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0097', 'organized/AGN-0097.jpg', 'Green plant with berries', '', '', 'Shrub', 'Ornamental Plants', '["Shrub"]'::jsonb, 95, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0098', 'organized/AGN-0098.jpg', 'Purple flowers', '', '', 'Flowering Plant', 'Garden Decor', '["Flowering Plant"]'::jsonb, 96, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0099', 'organized/AGN-0099.jpg', 'Palm tree', '', '', 'Tropical Plant', 'Tropical Plants', '["Tropical Plant"]'::jsonb, 97, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0100', 'organized/AGN-0100.jpg', 'Mulberries on tree', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 98, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0101', 'organized/AGN-0101.jpg', 'Blackberries in bowl', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 99, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0102', 'organized/AGN-0102.jpg', 'Pomegranates', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 100, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0103', 'organized/AGN-0103.jpg', 'Cherry plum on branch', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 101, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0104', 'organized/AGN-0104.jpg', 'Red mango', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 102, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0105', 'organized/AGN-0105.jpg', 'Buddha''s hand citron', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 103, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0106', 'organized/AGN-0106.jpg', 'Greenhouse with seedlings', '', '', 'Nursery', 'Garden Decor', '["Nursery"]'::jsonb, 104, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0107', 'organized/AGN-0107.jpg', 'White flamingo sculptures', '', '', 'Garden Ornament', 'Garden Decor', '["Garden Ornament"]'::jsonb, 105, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0108', 'organized/AGN-0108.jpg', 'Marble Queen pothos', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 106, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0109', 'organized/AGN-0109.jpg', 'Fern', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 107, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0110', 'organized/AGN-0110.jpg', 'Dieffenbachia', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 108, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0111', 'organized/AGN-0111.jpg', 'Concrete planters stacked', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 109, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0112', 'organized/AGN-0112.jpg', 'White decorative stones', '', '', 'Garden Decor', 'Garden Decor', '["Garden Decor"]'::jsonb, 110, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0113', 'organized/AGN-0113.jpg', 'Rangoon creeper', '', '', 'Flowering Climber', 'Flowering Plants', '["Flowering Climber"]'::jsonb, 111, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0114', 'organized/AGN-0114.jpg', 'Greenhouse with various plants', '', '', 'Nursery', 'Garden Decor', '["Nursery"]'::jsonb, 112, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0115', 'organized/AGN-0115.jpg', 'Topiary trees', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 113, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0116', 'organized/AGN-0116.jpg', 'Topiary tree with swan bench', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 114, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0117', 'organized/AGN-0117.jpg', 'Braided trunk topiary', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 115, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0118', 'organized/AGN-0118.jpg', 'Topiary trees in pots', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 116, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0119', 'organized/AGN-0119.jpg', 'Large topiary tree', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 117, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0120', 'organized/AGN-0120.jpg', 'Aerial view of nursery', '', '', 'Nursery', 'Garden Decor', '["Nursery"]'::jsonb, 118, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0121', 'organized/AGN-0121.jpg', 'Concrete planter stack', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 119, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0122', 'organized/AGN-0122.jpg', 'Red hibiscus flowers', '', '', 'Flowering Plant', 'Garden Decor', '["Flowering Plant"]'::jsonb, 120, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0123', 'organized/AGN-0123.jpg', 'Stone tiered fountain', '', '', 'Fountains & Water Features', 'Garden Decor', '["Fountains & Water Features"]'::jsonb, 121, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0124', 'organized/AGN-0124.jpg', 'Concrete garden bench', '', '', 'Garden Furniture', 'Garden Decor', '["Garden Furniture"]'::jsonb, 122, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0125', 'organized/AGN-0125.jpg', 'Concrete planters row', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 123, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0126', 'organized/AGN-0126.jpg', 'Stone planters display', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 124, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0127', 'organized/AGN-0127.jpg', 'Concrete planter group', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 125, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0128', 'organized/AGN-0128.jpg', 'Tall concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 126, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0129', 'organized/AGN-0129.jpg', 'Decorative concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 127, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0130', 'organized/AGN-0130.jpg', 'Square concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 128, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0131', 'organized/AGN-0131.jpg', 'Round concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 129, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0132', 'organized/AGN-0132.jpg', 'Rectangular concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 130, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0133', 'organized/AGN-0133.jpg', 'Textured concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 131, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0134', 'organized/AGN-0134.jpg', 'Concrete planter collection', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 132, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0135', 'organized/AGN-0135.jpg', 'Large concrete urn planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 133, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0136', 'organized/AGN-0136.jpg', 'Concrete bowl planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 134, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0137', 'organized/AGN-0137.jpg', 'Fluted concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 135, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0138', 'organized/AGN-0138.jpg', 'Concrete planter varieties', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 136, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0139', 'organized/AGN-0139.jpg', 'Stone finish planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 137, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0140', 'organized/AGN-0140.jpg', 'Concrete planter assortment', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 138, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0141', 'organized/AGN-0141.jpg', 'Garden planter display', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 139, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0142', 'organized/AGN-0142.jpg', 'Decorative planter group', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 140, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0143', 'organized/AGN-0143.jpg', 'Planter arrangement', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 141, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0144', 'organized/AGN-0144.jpg', 'Concrete planter series', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 142, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0145', 'organized/AGN-0145.jpg', 'Garden urn planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 143, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0146', 'organized/AGN-0146.jpg', 'Planter collection view', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 144, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0147', 'organized/AGN-0147.jpg', 'Stone planters grouping', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 145, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0148', 'organized/AGN-0148.jpg', 'Large planter display', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 146, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0149', 'organized/AGN-0149.jpg', 'Planter varieties', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 147, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0150', 'organized/AGN-0150.jpg', 'Concrete planter selection', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 148, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0151', 'organized/AGN-0151.jpg', 'Garden planters stacked', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 149, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0152', 'organized/AGN-0152.jpg', 'Planter assortment', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 150, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0153', 'organized/AGN-0153.jpg', 'Decorative planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 151, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0154', 'organized/AGN-0154.jpg', 'Planter display', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 152, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0155', 'organized/AGN-0155.jpg', 'Concrete planters', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 153, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0156', 'organized/AGN-0156.jpg', 'Planter grouping', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 154, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0157', 'organized/AGN-0157.jpg', 'Garden planter varieties', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 155, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0159', 'organized/AGN-0159.jpg', 'Planter detail', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 156, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0160', 'organized/AGN-0160.jpg', 'Planter texture closeup', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 157, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0161', 'organized/AGN-0161.jpg', 'Ranunculus pink', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 158, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0162', 'organized/AGN-0162.jpg', 'Ranunculus red', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 159, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0163', 'organized/AGN-0163.jpg', 'Ranunculus white', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 160, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0164', 'organized/AGN-0164.jpg', 'Ranunculus yellow', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 161, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0165', 'organized/AGN-0165.jpg', 'Ranunculus orange', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 162, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0167', 'organized/AGN-0167.jpg', 'Plastic planters stack', '', '', 'Planters & Pots', 'Garden Decor', '["Planters & Pots"]'::jsonb, 163, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0168', 'organized/AGN-0168.jpg', 'Topiary tree shaped', '', '', 'Ornamental Plants', 'Garden Decor', '["Ornamental Plants"]'::jsonb, 164, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0169', 'organized/AGN-0169.jpg', 'Garden trellis', '', '', 'Garden Structure', 'Garden Decor', '["Garden Structure"]'::jsonb, 165, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0170', 'organized/AGN-0170.jpg', 'Senetti cineraria purple', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 166, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0171', 'organized/AGN-0171.jpg', 'Senetti cineraria blue', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 167, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0172', 'organized/AGN-0172.jpg', 'Senetti cineraria pink', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 168, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0173', 'organized/AGN-0173.jpg', 'Senetti cineraria white', '', '', 'Flowering Plant', 'Flowering Plants', '["Flowering Plant"]'::jsonb, 169, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0174', 'organized/AGN-0174.jpg', 'Flowering shrub', '', '', 'Flowering Plant', 'Garden Decor', '["Flowering Plant"]'::jsonb, 170, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0175', 'organized/AGN-0175.jpg', 'Bougainvillea vine', '', '', 'Flowering Climber', 'Flowering Plants', '["Flowering Climber"]'::jsonb, 171, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0176', 'organized/AGN-0176.jpg', 'Jasmine vine', '', '', 'Flowering Climber', 'Flowering Plants', '["Flowering Climber"]'::jsonb, 172, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0177', 'organized/AGN-0177.jpg', 'Passion flower vine', '', '', 'Flowering Climber', 'Flowering Plants', '["Flowering Climber"]'::jsonb, 173, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0178', 'organized/AGN-0178.jpg', 'Citrus tree', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 174, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0179', 'organized/AGN-0179.jpg', 'Mango tree', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 175, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0180', 'organized/AGN-0180.jpg', 'Guava tree', '', '', 'Fruit Tree', 'Tropical Plants', '["Fruit Tree"]'::jsonb, 176, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0181', 'organized/AGN-0181.jpg', 'Indoor plant collection', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 177, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0182', 'organized/AGN-0182.jpg', 'Snake plant', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 178, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, collection, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0183', 'organized/AGN-0183.jpg', 'ZZ plant', '', '', 'Foliage', 'Leafy Indoor Favourites', '["Foliage"]'::jsonb, 179, true, 900, 1600, 0)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, collection = excluded.collection, tags = excluded.tags, sort = excluded.sort, visible = true;
