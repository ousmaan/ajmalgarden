-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs
create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0001', 'organized/AGN-0001.jpg', 'AGN-0001', '', '', '', '["green-foliage"]'::jsonb, 0, true, 900, 1600, 239925)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0002', 'organized/AGN-0002.jpg', 'Curly red and yellow croton foliage at Ajmal Garden Nursery', 'Curly Red Croton', 'Twisted red, yellow and green croton leaves in nursery pots.', 'outdoor', '["dark"]'::jsonb, 1, true, 844, 1500, 192467)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0003', 'organized/AGN-0003.jpg', 'Red purple cordyline plants in a nursery bed', 'Red Purple Cordyline', 'Magenta and deep purple cordyline bed, ready for lawns and borders.', 'outdoor', '["stone-grey"]'::jsonb, 2, true, 900, 1600, 292095)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0004', 'organized/AGN-0004.jpg', 'Snow white variegated aglaonema foliage', 'Snow White Aglaonema', 'White-variegated Chinese evergreen for bright indoor corners.', 'indoor', '["green-foliage"]'::jsonb, 3, true, 1200, 1600, 385254)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0005', 'organized/AGN-0005.jpg', 'Yellow striped Song of India dracaena leaves', 'Song of India Dracaena', 'Yellow and green striped dracaena, easy indoor statement plant.', 'indoor', '["green-foliage"]'::jsonb, 4, true, 1200, 1600, 464694)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0006', 'organized/AGN-0006.jpg', 'Gold dust croton with yellow speckled leaves', 'Gold-Dust Croton', 'Narrow green leaves dusted gold — vivid all-season foliage.', 'outdoor', '["green-foliage"]'::jsonb, 5, true, 844, 1500, 200283)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0007', 'organized/AGN-0007.jpg', 'Lemon lime striped dracaena foliage', 'Lemon Lime Dracaena', 'Broad lime-striped dracaena leaves for homes and offices.', 'indoor', '["green-foliage"]'::jsonb, 6, true, 1200, 1600, 333328)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0008', 'organized/AGN-0008.jpg', 'AGN-0008', '', '', '', '["green-foliage"]'::jsonb, 7, true, 1200, 1600, 391855)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0009', 'organized/AGN-0009.jpg', 'Variegated dieffenbachia leaves in nursery pots', 'Variegated Dieffenbachia', 'Bold green and cream dumb-cane foliage for shaded verandas.', 'indoor', '["green-foliage"]'::jsonb, 8, true, 1200, 1600, 544469)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0010', 'organized/AGN-0010.jpg', 'Lemon lime philodendron climbing moss poles', 'Lemon Philodendron on Moss Pole', 'Neon lemon philodendron trained on coir poles, with monstera alongside.', 'indoor', '["green-foliage"]'::jsonb, 9, true, 1200, 1600, 353343)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0011', 'organized/AGN-0011.jpg', 'Bed of variegated dracaena plants', 'Variegated Dracaena Bed', 'Cream and green variegated dracaena stock in all sizes.', 'indoor', '["green-foliage"]'::jsonb, 10, true, 1200, 1600, 321848)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0012', 'organized/AGN-0012.jpg', 'Mixed red green and orange Petra croton foliage', 'Petra Croton Mix', 'Classic red, orange and green Petra crotons for vivid borders.', 'outdoor', '["purple"]'::jsonb, 11, true, 1200, 1600, 510580)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0013', 'organized/AGN-0013.jpg', 'Cream striped cordyline plants', 'Striped Cordyline', 'Cream-striped cordyline with purple new growth for entrances.', 'outdoor', '["green-foliage"]'::jsonb, 12, true, 1200, 1600, 383709)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0014', 'organized/AGN-0014.jpg', 'Pink Ti cordyline with maroon rosettes', 'Pink Ti Cordyline', 'Hot pink Ti leaves over deep maroon rosettes — high-drama foliage.', 'outdoor', '["stone-grey"]'::jsonb, 13, true, 1200, 1600, 372850)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0015', 'organized/AGN-0015.jpg', 'Red edged dracaena marginata foliage', 'Red-Edged Dracaena', 'Narrow red-edged dragon tree leaves, a forgiving indoor classic.', 'indoor', '["dark"]'::jsonb, 14, true, 1200, 1600, 328004)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0016', 'organized/AGN-0016.jpg', 'AGN-0016', '', '', '', '["green-foliage"]'::jsonb, 15, true, 1200, 1600, 368453)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0017', 'organized/AGN-0017.jpg', 'Variegated spider plants in nursery rows', 'Variegated Spider Plants', 'Striped spider plants for baskets, table pots and shaded edges.', 'indoor', '["green-foliage"]'::jsonb, 16, true, 1200, 1600, 529006)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0018', 'organized/AGN-0018.jpg', 'Pink and green coleus bedding plants', 'Coleus Bed Mix', 'Pink and green coleus trays for instant seasonal colour.', 'outdoor', '["stone-grey"]'::jsonb, 17, true, 1200, 1600, 415055)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0019', 'organized/AGN-0019.jpg', 'Burgundy and white bicolor dahlia flower', 'Burgundy White Dahlia', 'Bold burgundy and white bicolor dahlia in full bloom.', 'flowering', '["green-foliage"]'::jsonb, 18, true, 747, 1328, 140378)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0020', 'organized/AGN-0020.jpg', 'Speckled cream and crimson dahlia', 'Speckled Cream Dahlia', 'Cream petals flecked crimson on a collector dahlia.', 'flowering', '["green-foliage"]'::jsonb, 19, true, 747, 1328, 148637)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0021', 'organized/AGN-0021.jpg', 'Yellow and green variegated ginger leaves', 'Variegated Ginger', 'Yellow striped shell ginger for lush tropical corners.', 'outdoor', '["green-foliage"]'::jsonb, 20, true, 1200, 1600, 387057)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0022', 'organized/AGN-0022.jpg', 'Lavender pink dahlia bloom', 'Lavender Pink Dahlia', 'Soft lavender pink dinner-plate dahlia on the stem.', 'flowering', '["green-foliage"]'::jsonb, 21, true, 747, 1328, 152050)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0023', 'organized/AGN-0023.jpg', 'AGN-0023', '', '', '', '["red"]'::jsonb, 22, true, 747, 1328, 156265)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0024', 'organized/AGN-0024.jpg', 'Bronze orange chrysanthemum blooms', 'Bronze Chrysanthemum', 'Bronze orange gul-e-daudi heads for winter beds and pots.', 'flowering', '["red"]'::jsonb, 23, true, 747, 1328, 148683)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0025', 'organized/AGN-0025.jpg', 'Red dahlia flower close-up', 'Red Dahlia', 'Velvet red dahlia with dew-fresh petals.', 'flowering', '["red"]'::jsonb, 24, true, 747, 1328, 132368)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0026', 'organized/AGN-0026.jpg', 'Orange and gold chrysanthemum cluster', 'Orange Chrysanthemum Mix', 'Orange and gold gul-e-daudi cluster for seasonal colour.', 'flowering', '["red"]'::jsonb, 25, true, 1328, 747, 156796)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0027', 'organized/AGN-0027.jpg', 'Red and pink chrysanthemum blooms with buds', 'Red Pink Chrysanthemum', 'Cherry red and rose pink gul-e-daudi side by side.', 'flowering', '["red"]'::jsonb, 26, true, 1328, 747, 129598)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0028', 'organized/AGN-0028.jpg', 'Lilac chrysanthemum flowers with yellow centres', 'Lilac Chrysanthemum', 'Soft lilac daisy-type gul-e-daudi with gold centres.', 'flowering', '["purple"]'::jsonb, 27, true, 747, 1328, 131910)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0029', 'organized/AGN-0029.jpg', 'Cream double gerbera daisy', 'Cream Gerbera Daisy', 'Cream double gerbera with a green heart.', 'flowering', '["green-foliage"]'::jsonb, 28, true, 747, 1328, 107051)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0030', 'organized/AGN-0030.jpg', 'Blush peach gerbera daisy', 'Blush Peach Gerbera', 'Blush peach gerbera with a honey gold centre.', 'flowering', '["red"]'::jsonb, 29, true, 747, 1328, 138504)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0031', 'organized/AGN-0031.jpg', 'AGN-0031', '', '', '', '["red"]'::jsonb, 30, true, 1328, 747, 140769)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0032', 'organized/AGN-0032.jpg', 'Light pink double gerbera blooms', 'Light Pink Gerbera', 'Soft pink double gerbera pair, morning fresh.', 'flowering', '["red"]'::jsonb, 31, true, 1328, 747, 125809)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0033', 'organized/AGN-0033.jpg', 'Red and white bicolor gerbera daisy', 'Red White Gerbera', 'Quilled red petals tipped white on a bold gerbera.', 'flowering', '["green-foliage"]'::jsonb, 32, true, 747, 1328, 115052)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0034', 'organized/AGN-0034.jpg', 'White gerbera daisy with pink centre', 'White Gerbera Daisy', 'Layered white gerbera blushing pink at the heart.', 'flowering', '["stone-grey"]'::jsonb, 33, true, 747, 1328, 90825)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0035', 'organized/AGN-0035.jpg', 'Pink gerbera with cream centre', 'Pink Cream Gerbera', 'Candy pink gerbera around a cream green centre.', 'flowering', '["green-foliage"]'::jsonb, 34, true, 747, 1328, 106955)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0036', 'organized/AGN-0036.jpg', 'AGN-0036', '', '', '', '["pink"]'::jsonb, 35, true, 747, 1328, 116365)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0037', 'organized/AGN-0037.jpg', 'AGN-0037', '', '', '', '["purple"]'::jsonb, 36, true, 1200, 1600, 194399)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0038', 'organized/AGN-0038.jpg', 'AGN-0038', '', '', '', '["red"]'::jsonb, 37, true, 1200, 1600, 173071)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0039', 'organized/AGN-0039.jpg', 'AGN-0039', '', '', '', '["white"]'::jsonb, 38, true, 1200, 1600, 120411)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0040', 'organized/AGN-0040.jpg', 'AGN-0040', '', '', '', '["red"]'::jsonb, 39, true, 747, 1328, 112922)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0041', 'organized/AGN-0041.jpg', 'AGN-0041', '', '', '', '["red"]'::jsonb, 40, true, 1200, 1600, 404273)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0042', 'organized/AGN-0042.jpg', 'AGN-0042', '', '', '', '["purple"]'::jsonb, 41, true, 1200, 1600, 242090)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0043', 'organized/AGN-0043.jpg', 'AGN-0043', '', '', '', '["terracotta"]'::jsonb, 42, true, 1200, 1600, 575641)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0044', 'organized/AGN-0044.jpg', 'AGN-0044', '', '', '', '["blue"]'::jsonb, 43, true, 1280, 960, 167488)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0045', 'organized/AGN-0045.jpg', 'AGN-0045', '', '', '', '["green-foliage"]'::jsonb, 44, true, 1200, 1600, 335010)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0047', 'organized/AGN-0047.jpg', 'AGN-0047', '', '', '', '["pink"]'::jsonb, 46, true, 1225, 856, 290398)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0048', 'organized/AGN-0048.jpg', 'AGN-0048', '', '', '', '["green-foliage"]'::jsonb, 47, true, 554, 554, 89934)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0049', 'organized/AGN-0049.jpg', 'AGN-0049', '', '', '', '["red"]'::jsonb, 48, true, 324, 455, 37595)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0050', 'organized/AGN-0050.jpg', 'AGN-0050', '', '', '', '["red"]'::jsonb, 49, true, 500, 334, 41646)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0051', 'organized/AGN-0051.jpg', 'AGN-0051', '', '', '', '["purple"]'::jsonb, 50, true, 169, 300, 18659)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0052', 'organized/AGN-0052.jpg', 'AGN-0052', '', '', '', '["red"]'::jsonb, 51, true, 554, 554, 68484)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0053', 'organized/AGN-0053.jpg', 'AGN-0053', '', '', '', '["terracotta"]'::jsonb, 52, true, 721, 1600, 279918)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0054', 'organized/AGN-0054.jpg', 'AGN-0054', '', '', '', '["green-foliage"]'::jsonb, 53, true, 450, 509, 65539)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0055', 'organized/AGN-0055.jpg', 'AGN-0055', '', '', '', '["purple"]'::jsonb, 54, true, 350, 260, 30519)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0056', 'organized/AGN-0056.jpg', 'AGN-0056', '', '', '', '["purple"]'::jsonb, 55, true, 554, 554, 78982)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0057', 'organized/AGN-0057.jpg', 'AGN-0057', '', '', '', '["dark"]'::jsonb, 56, true, 900, 1600, 256452)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0058', 'organized/AGN-0058.jpg', 'AGN-0058', '', '', '', '["stone-grey"]'::jsonb, 57, true, 900, 1600, 228355)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0059', 'organized/AGN-0059.jpg', 'AGN-0059', '', '', '', '["dark"]'::jsonb, 58, true, 900, 1600, 209283)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0060', 'organized/AGN-0060.jpg', 'AGN-0060', '', '', '', '["red"]'::jsonb, 59, true, 523, 663, 44552)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0061', 'organized/AGN-0061.jpg', 'AGN-0061', '', '', '', '["dark"]'::jsonb, 60, true, 900, 1600, 232586)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0062', 'organized/AGN-0062.jpg', 'AGN-0062', '', '', '', '["dark"]'::jsonb, 61, true, 900, 1600, 231190)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0063', 'organized/AGN-0063.jpg', 'AGN-0063', '', '', '', '["stone-grey"]'::jsonb, 62, true, 900, 1600, 238241)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0064', 'organized/AGN-0064.jpg', 'AGN-0064', '', '', '', '["stone-grey"]'::jsonb, 63, true, 900, 1600, 319061)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0065', 'organized/AGN-0065.jpg', 'AGN-0065', '', '', '', '["stone-grey"]'::jsonb, 64, true, 900, 1600, 324687)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0066', 'organized/AGN-0066.jpg', 'AGN-0066', '', '', '', '["dark"]'::jsonb, 65, true, 900, 1600, 325029)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0067', 'organized/AGN-0067.jpg', 'AGN-0067', '', '', '', '["dark"]'::jsonb, 66, true, 900, 1600, 271358)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0068', 'organized/AGN-0068.jpg', 'AGN-0068', '', '', '', '["red"]'::jsonb, 67, true, 900, 1600, 322524)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0069', 'organized/AGN-0069.jpg', 'AGN-0069', '', '', '', '["stone-grey"]'::jsonb, 68, true, 900, 1600, 275934)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0070', 'organized/AGN-0070.jpg', 'AGN-0070', '', '', '', '["purple"]'::jsonb, 69, true, 720, 1280, 193456)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0071', 'organized/AGN-0071.jpg', 'AGN-0071', '', '', '', '["stone-grey"]'::jsonb, 70, true, 900, 1600, 358812)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0072', 'organized/AGN-0072.jpg', 'AGN-0072', '', '', '', '["stone-grey"]'::jsonb, 71, true, 900, 1600, 351267)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0073', 'organized/AGN-0073.jpg', 'AGN-0073', '', '', '', '["green-foliage"]'::jsonb, 72, true, 1200, 1600, 465046)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0074', 'organized/AGN-0074.jpg', 'AGN-0074', '', '', '', '["dark"]'::jsonb, 73, true, 900, 1600, 351869)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0075', 'organized/AGN-0075.jpg', 'AGN-0075', '', '', '', '["green-foliage"]'::jsonb, 74, true, 1200, 1600, 459759)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0076', 'organized/AGN-0076.jpg', 'AGN-0076', '', '', '', '["stone-grey"]'::jsonb, 75, true, 900, 1600, 311058)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0077', 'organized/AGN-0077.jpg', 'AGN-0077', '', '', '', '["dark"]'::jsonb, 76, true, 1600, 900, 218001)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0078', 'organized/AGN-0078.jpg', 'AGN-0078', '', '', '', '["red"]'::jsonb, 77, true, 1200, 1600, 385250)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0079', 'organized/AGN-0079.jpg', 'AGN-0079', '', '', '', '["terracotta"]'::jsonb, 78, true, 1200, 1600, 398987)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0080', 'organized/AGN-0080.jpg', 'AGN-0080', '', '', '', '["purple"]'::jsonb, 79, true, 1600, 900, 301919)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0081', 'organized/AGN-0081.jpg', 'AGN-0081', '', '', '', '["green-foliage"]'::jsonb, 80, true, 1200, 1600, 450483)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0082', 'organized/AGN-0082.jpg', 'AGN-0082', '', '', '', '["blue"]'::jsonb, 81, true, 898, 1598, 236846)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0083', 'organized/AGN-0083.jpg', 'AGN-0083', '', '', '', '["dark"]'::jsonb, 82, true, 720, 1280, 214221)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0084', 'organized/AGN-0084.jpg', 'AGN-0084', '', '', '', '["purple"]'::jsonb, 83, true, 900, 1600, 218303)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0085', 'organized/AGN-0085.jpg', 'AGN-0085', '', '', '', '["purple"]'::jsonb, 84, true, 900, 1600, 274876)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0086', 'organized/AGN-0086.jpg', 'AGN-0086', '', '', '', '["blue"]'::jsonb, 85, true, 900, 1600, 209772)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0087', 'organized/AGN-0087.jpg', 'AGN-0087', '', '', '', '["green-foliage"]'::jsonb, 86, true, 1074, 1430, 104991)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0088', 'organized/AGN-0088.jpg', 'AGN-0088', '', '', '', '["red"]'::jsonb, 87, true, 1080, 1266, 91075)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0089', 'organized/AGN-0089.jpg', 'AGN-0089', '', '', '', '["terracotta"]'::jsonb, 88, true, 720, 960, 81082)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0090', 'organized/AGN-0090.jpg', 'AGN-0090', '', '', '', '["terracotta"]'::jsonb, 89, true, 900, 1600, 146230)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0091', 'organized/AGN-0091.jpg', 'AGN-0091', '', '', '', '["blue"]'::jsonb, 90, true, 899, 1599, 237972)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0092', 'organized/AGN-0092.jpg', 'AGN-0092', '', '', '', '["green-foliage"]'::jsonb, 91, true, 940, 1428, 103185)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0093', 'organized/AGN-0093.jpg', 'AGN-0093', '', '', '', '["green-foliage"]'::jsonb, 92, true, 720, 1600, 81939)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0094', 'organized/AGN-0094.jpg', 'AGN-0094', '', '', '', '["red"]'::jsonb, 93, true, 1284, 1546, 191644)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0095', 'organized/AGN-0095.jpg', 'AGN-0095', '', '', '', '["blue"]'::jsonb, 94, true, 719, 1280, 155104)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0096', 'organized/AGN-0096.jpg', 'AGN-0096', '', '', '', '["red"]'::jsonb, 95, true, 900, 1600, 128391)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0097', 'organized/AGN-0097.jpg', 'AGN-0097', '', '', '', '["red"]'::jsonb, 96, true, 1080, 1430, 103348)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0098', 'organized/AGN-0098.jpg', 'AGN-0098', '', '', '', '["green-foliage"]'::jsonb, 97, true, 900, 1600, 173479)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0099', 'organized/AGN-0099.jpg', 'AGN-0099', '', '', '', '["red"]'::jsonb, 98, true, 1080, 1434, 126140)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0100', 'organized/AGN-0100.jpg', 'AGN-0100', '', '', '', '["green-foliage"]'::jsonb, 99, true, 1080, 1032, 140430)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0101', 'organized/AGN-0101.jpg', 'AGN-0101', '', '', '', '["stone-grey"]'::jsonb, 100, true, 844, 1500, 127978)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0102', 'organized/AGN-0102.jpg', 'AGN-0102', '', '', '', '["red"]'::jsonb, 101, true, 1080, 804, 87244)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0103', 'organized/AGN-0103.jpg', 'AGN-0103', '', '', '', '["purple"]'::jsonb, 102, true, 900, 1600, 129832)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0104', 'organized/AGN-0104.jpg', 'AGN-0104', '', '', '', '["stone-grey"]'::jsonb, 103, true, 1200, 1600, 137033)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0105', 'organized/AGN-0105.jpg', 'AGN-0105', '', '', '', '["green-foliage"]'::jsonb, 104, true, 598, 1080, 95085)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0106', 'organized/AGN-0106.jpg', 'AGN-0106', '', '', '', '["green-foliage"]'::jsonb, 105, true, 1200, 1600, 446060)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0107', 'organized/AGN-0107.jpg', 'AGN-0107', '', '', '', '["green-foliage"]'::jsonb, 106, true, 1200, 1600, 248010)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0108', 'organized/AGN-0108.jpg', 'AGN-0108', '', '', '', '["green-foliage"]'::jsonb, 107, true, 1200, 1600, 347262)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0109', 'organized/AGN-0109.jpg', 'AGN-0109', '', '', '', '["green-foliage"]'::jsonb, 108, true, 1200, 1600, 377164)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0110', 'organized/AGN-0110.jpg', 'AGN-0110', '', '', '', '["green-foliage"]'::jsonb, 109, true, 1200, 1600, 288474)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0111', 'organized/AGN-0111.jpg', 'AGN-0111', '', '', '', '["dark"]'::jsonb, 110, true, 1600, 1200, 424029)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0112', 'organized/AGN-0112.jpg', 'AGN-0112', '', '', '', '["white"]'::jsonb, 111, true, 1200, 1600, 324621)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0113', 'organized/AGN-0113.jpg', 'AGN-0113', '', '', '', '["green-foliage"]'::jsonb, 112, true, 1200, 1600, 309618)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0114', 'organized/AGN-0114.jpg', 'AGN-0114', '', '', '', '["green-foliage"]'::jsonb, 113, true, 1600, 1200, 515208)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0115', 'organized/AGN-0115.jpg', 'AGN-0115', '', '', '', '["green-foliage"]'::jsonb, 114, true, 1200, 1600, 438860)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0116', 'organized/AGN-0116.jpg', 'AGN-0116', '', '', '', '["dark"]'::jsonb, 115, true, 1200, 1600, 431640)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0117', 'organized/AGN-0117.jpg', 'AGN-0117', '', '', '', '["green-foliage"]'::jsonb, 116, true, 1200, 1600, 442079)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0118', 'organized/AGN-0118.jpg', 'AGN-0118', '', '', '', '["purple"]'::jsonb, 117, true, 1200, 1600, 354432)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0119', 'organized/AGN-0119.jpg', 'AGN-0119', '', '', '', '["green-foliage"]'::jsonb, 118, true, 1200, 1600, 362580)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0120', 'organized/AGN-0120.jpg', 'AGN-0120', '', '', '', '["purple"]'::jsonb, 119, true, 1600, 1200, 391459)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0121', 'organized/AGN-0121.jpg', 'AGN-0121', '', '', '', '["purple"]'::jsonb, 120, true, 1600, 1200, 324868)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0122', 'organized/AGN-0122.jpg', 'AGN-0122', '', '', '', '["green-foliage"]'::jsonb, 121, true, 1200, 1600, 482081)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0123', 'organized/AGN-0123.jpg', 'AGN-0123', '', '', '', '["green-foliage"]'::jsonb, 122, true, 1600, 1200, 390999)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0124', 'organized/AGN-0124.jpg', 'AGN-0124', '', '', '', '["green-foliage"]'::jsonb, 123, true, 1200, 1600, 527853)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0125', 'organized/AGN-0125.jpg', 'AGN-0125', '', '', '', '["green-foliage"]'::jsonb, 124, true, 1200, 1600, 353287)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0126', 'organized/AGN-0126.jpg', 'AGN-0126', '', '', '', '["green-foliage"]'::jsonb, 125, true, 1200, 1600, 341702)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0127', 'organized/AGN-0127.jpg', 'AGN-0127', '', '', '', '["green-foliage"]'::jsonb, 126, true, 1200, 1600, 236214)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0128', 'organized/AGN-0128.jpg', 'AGN-0128', '', '', '', '["green-foliage"]'::jsonb, 127, true, 1200, 1600, 376583)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0129', 'organized/AGN-0129.jpg', 'AGN-0129', '', '', '', '["green-foliage"]'::jsonb, 128, true, 1200, 1600, 379353)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0130', 'organized/AGN-0130.jpg', 'AGN-0130', '', '', '', '["green-foliage"]'::jsonb, 129, true, 1200, 1600, 354963)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0131', 'organized/AGN-0131.jpg', 'AGN-0131', '', '', '', '["green-foliage"]'::jsonb, 130, true, 1200, 1600, 206766)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0132', 'organized/AGN-0132.jpg', 'AGN-0132', '', '', '', '["green-foliage"]'::jsonb, 131, true, 1200, 1600, 218392)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0133', 'organized/AGN-0133.jpg', 'AGN-0133', '', '', '', '["green-foliage"]'::jsonb, 132, true, 1200, 1600, 270126)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0134', 'organized/AGN-0134.jpg', 'AGN-0134', '', '', '', '["green-foliage"]'::jsonb, 133, true, 1200, 1600, 200071)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0135', 'organized/AGN-0135.jpg', 'AGN-0135', '', '', '', '["green-foliage"]'::jsonb, 134, true, 1200, 1600, 297285)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0136', 'organized/AGN-0136.jpg', 'AGN-0136', '', '', '', '["green-foliage"]'::jsonb, 135, true, 1200, 1600, 366125)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0137', 'organized/AGN-0137.jpg', 'AGN-0137', '', '', '', '["green-foliage"]'::jsonb, 136, true, 1200, 1600, 429452)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0138', 'organized/AGN-0138.jpg', 'AGN-0138', '', '', '', '["green-foliage"]'::jsonb, 137, true, 1200, 1600, 378373)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0139', 'organized/AGN-0139.jpg', 'AGN-0139', '', '', '', '["green-foliage"]'::jsonb, 138, true, 1200, 1600, 358854)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0140', 'organized/AGN-0140.jpg', 'AGN-0140', '', '', '', '["green-foliage"]'::jsonb, 139, true, 1200, 1600, 419075)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0141', 'organized/AGN-0141.jpg', 'AGN-0141', '', '', '', '["green-foliage"]'::jsonb, 140, true, 1200, 1600, 310324)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0142', 'organized/AGN-0142.jpg', 'AGN-0142', '', '', '', '["green-foliage"]'::jsonb, 141, true, 1200, 1600, 297159)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0143', 'organized/AGN-0143.jpg', 'AGN-0143', '', '', '', '["green-foliage"]'::jsonb, 142, true, 1200, 1600, 310756)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0144', 'organized/AGN-0144.jpg', 'AGN-0144', '', '', '', '["green-foliage"]'::jsonb, 143, true, 1200, 1600, 365752)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0145', 'organized/AGN-0145.jpg', 'AGN-0145', '', '', '', '["green-foliage"]'::jsonb, 144, true, 1200, 1600, 345185)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0146', 'organized/AGN-0146.jpg', 'AGN-0146', '', '', '', '["green-foliage"]'::jsonb, 145, true, 1200, 1600, 367851)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0147', 'organized/AGN-0147.jpg', 'AGN-0147', '', '', '', '["green-foliage"]'::jsonb, 146, true, 1200, 1600, 344003)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0148', 'organized/AGN-0148.jpg', 'AGN-0148', '', '', '', '["green-foliage"]'::jsonb, 147, true, 1200, 1600, 475907)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0149', 'organized/AGN-0149.jpg', 'AGN-0149', '', '', '', '["green-foliage"]'::jsonb, 148, true, 1200, 1600, 348982)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0150', 'organized/AGN-0150.jpg', 'AGN-0150', '', '', '', '["green-foliage"]'::jsonb, 149, true, 1200, 1600, 364545)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0151', 'organized/AGN-0151.jpg', 'AGN-0151', '', '', '', '["green-foliage"]'::jsonb, 150, true, 1200, 1600, 284004)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0152', 'organized/AGN-0152.jpg', 'AGN-0152', '', '', '', '["green-foliage"]'::jsonb, 151, true, 1200, 1600, 335683)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0153', 'organized/AGN-0153.jpg', 'AGN-0153', '', '', '', '["green-foliage"]'::jsonb, 152, true, 1200, 1600, 367697)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0154', 'organized/AGN-0154.jpg', 'AGN-0154', '', '', '', '["green-foliage"]'::jsonb, 153, true, 1200, 1600, 293948)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0155', 'organized/AGN-0155.jpg', 'AGN-0155', '', '', '', '["green-foliage"]'::jsonb, 154, true, 1200, 1600, 300187)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0156', 'organized/AGN-0156.jpg', 'AGN-0156', '', '', '', '["yellow"]'::jsonb, 155, true, 1200, 1600, 244674)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0157', 'organized/AGN-0157.jpg', 'AGN-0157', '', '', '', '["green-foliage"]'::jsonb, 156, true, 1200, 1600, 313117)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0159', 'organized/AGN-0159.jpg', 'AGN-0159', '', '', '', '["green-foliage"]'::jsonb, 158, true, 960, 1280, 132707)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0160', 'organized/AGN-0160.jpg', 'AGN-0160', '', '', '', '["white"]'::jsonb, 159, true, 720, 1280, 136297)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0161', 'organized/AGN-0161.jpg', 'AGN-0161', '', '', '', '["red"]'::jsonb, 160, true, 1200, 1600, 186167)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0162', 'organized/AGN-0162.jpg', 'AGN-0162', '', '', '', '["blue"]'::jsonb, 161, true, 960, 1280, 227986)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0163', 'organized/AGN-0163.jpg', 'AGN-0163', '', '', '', '["green-foliage"]'::jsonb, 162, true, 1200, 1600, 477013)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0164', 'organized/AGN-0164.jpg', 'AGN-0164', '', '', '', '["stone-grey"]'::jsonb, 163, true, 960, 1280, 256606)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0165', 'organized/AGN-0165.jpg', 'AGN-0165', '', '', '', '["red"]'::jsonb, 164, true, 576, 1280, 73439)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0167', 'organized/AGN-0167.jpg', 'AGN-0167', '', '', '', '["red"]'::jsonb, 166, true, 576, 1280, 63639)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0168', 'organized/AGN-0168.jpg', 'AGN-0168', '', '', '', '["green-foliage"]'::jsonb, 167, true, 576, 1280, 52998)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0169', 'organized/AGN-0169.jpg', 'AGN-0169', '', '', '', '["red"]'::jsonb, 168, true, 576, 1280, 69242)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0170', 'organized/AGN-0170.jpg', 'AGN-0170', '', '', '', '["red"]'::jsonb, 169, true, 576, 1280, 66506)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0171', 'organized/AGN-0171.jpg', 'AGN-0171', '', '', '', '["purple"]'::jsonb, 170, true, 576, 1280, 66887)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0172', 'organized/AGN-0172.jpg', 'AGN-0172', '', '', '', '["dark"]'::jsonb, 171, true, 576, 1280, 63165)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0173', 'organized/AGN-0173.jpg', 'AGN-0173', '', '', '', '["purple"]'::jsonb, 172, true, 576, 1280, 81601)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0174', 'organized/AGN-0174.jpg', 'AGN-0174', '', '', '', '["purple"]'::jsonb, 173, true, 576, 1280, 96292)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0175', 'organized/AGN-0175.jpg', 'AGN-0175', '', '', '', '["stone-grey"]'::jsonb, 174, true, 576, 1280, 210552)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0176', 'organized/AGN-0176.jpg', 'AGN-0176', '', '', '', '["red"]'::jsonb, 175, true, 576, 1280, 81857)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0177', 'organized/AGN-0177.jpg', 'AGN-0177', '', '', '', '["dark"]'::jsonb, 176, true, 576, 1280, 76828)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0178', 'organized/AGN-0178.jpg', 'AGN-0178', '', '', '', '["purple"]'::jsonb, 177, true, 576, 1280, 163515)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0179', 'organized/AGN-0179.jpg', 'AGN-0179', '', '', '', '["green-foliage"]'::jsonb, 178, true, 1280, 720, 262208)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0180', 'organized/AGN-0180.jpg', 'AGN-0180', '', '', '', '["terracotta"]'::jsonb, 179, true, 1280, 720, 279193)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0181', 'organized/AGN-0181.jpg', 'AGN-0181', '', '', '', '["dark"]'::jsonb, 180, true, 720, 1280, 189996)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0182', 'organized/AGN-0182.jpg', 'AGN-0182', '', '', '', '["green-foliage"]'::jsonb, 181, true, 720, 1280, 212786)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0183', 'organized/AGN-0183.jpg', 'AGN-0183', '', '', '', '["green-foliage"]'::jsonb, 182, true, 720, 1280, 217145)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
