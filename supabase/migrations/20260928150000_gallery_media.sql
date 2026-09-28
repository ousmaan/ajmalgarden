-- Generated gallery sync — regenerate via scripts/sync-gallery-media.mjs
create unique index if not exists media_cloudinary_id_uidx on media (cloudinary_id);
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0001', 'organized/AGN-0001.jpg', 'AGN-0001', '', '', '', '[]'::jsonb, 0, true, 900, 1600, 239925)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0002', 'organized/AGN-0002.jpg', 'AGN-0002', '', '', '', '[]'::jsonb, 1, true, 844, 1500, 192467)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0003', 'organized/AGN-0003.jpg', 'AGN-0003', '', '', '', '[]'::jsonb, 2, true, 900, 1600, 292095)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0004', 'organized/AGN-0004.jpg', 'AGN-0004', '', '', '', '[]'::jsonb, 3, true, 1200, 1600, 385254)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0005', 'organized/AGN-0005.jpg', 'AGN-0005', '', '', '', '[]'::jsonb, 4, true, 1200, 1600, 464694)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0006', 'organized/AGN-0006.jpg', 'AGN-0006', '', '', '', '[]'::jsonb, 5, true, 844, 1500, 200283)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0007', 'organized/AGN-0007.jpg', 'AGN-0007', '', '', '', '[]'::jsonb, 6, true, 1200, 1600, 333328)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0008', 'organized/AGN-0008.jpg', 'AGN-0008', '', '', '', '[]'::jsonb, 7, true, 1200, 1600, 391855)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0009', 'organized/AGN-0009.jpg', 'AGN-0009', '', '', '', '[]'::jsonb, 8, true, 1200, 1600, 544469)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0010', 'organized/AGN-0010.jpg', 'AGN-0010', '', '', '', '[]'::jsonb, 9, true, 1200, 1600, 353343)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0011', 'organized/AGN-0011.jpg', 'AGN-0011', '', '', '', '[]'::jsonb, 10, true, 1200, 1600, 321848)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0012', 'organized/AGN-0012.jpg', 'AGN-0012', '', '', '', '[]'::jsonb, 11, true, 1200, 1600, 510580)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0013', 'organized/AGN-0013.jpg', 'AGN-0013', '', '', '', '[]'::jsonb, 12, true, 1200, 1600, 383709)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0014', 'organized/AGN-0014.jpg', 'AGN-0014', '', '', '', '[]'::jsonb, 13, true, 1200, 1600, 372850)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0015', 'organized/AGN-0015.jpg', 'AGN-0015', '', '', '', '[]'::jsonb, 14, true, 1200, 1600, 328004)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0016', 'organized/AGN-0016.jpg', 'AGN-0016', '', '', '', '[]'::jsonb, 15, true, 1200, 1600, 368453)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0017', 'organized/AGN-0017.jpg', 'AGN-0017', '', '', '', '[]'::jsonb, 16, true, 1200, 1600, 529006)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0018', 'organized/AGN-0018.jpg', 'AGN-0018', '', '', '', '[]'::jsonb, 17, true, 1200, 1600, 415055)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0019', 'organized/AGN-0019.jpg', 'AGN-0019', '', '', '', '[]'::jsonb, 18, true, 747, 1328, 140378)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0020', 'organized/AGN-0020.jpg', 'AGN-0020', '', '', '', '[]'::jsonb, 19, true, 747, 1328, 148637)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0021', 'organized/AGN-0021.jpg', 'AGN-0021', '', '', '', '[]'::jsonb, 20, true, 1200, 1600, 387057)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0022', 'organized/AGN-0022.jpg', 'AGN-0022', '', '', '', '[]'::jsonb, 21, true, 747, 1328, 152050)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0023', 'organized/AGN-0023.jpg', 'AGN-0023', '', '', '', '[]'::jsonb, 22, true, 747, 1328, 156265)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0024', 'organized/AGN-0024.jpg', 'AGN-0024', '', '', '', '[]'::jsonb, 23, true, 747, 1328, 148683)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0025', 'organized/AGN-0025.jpg', 'AGN-0025', '', '', '', '[]'::jsonb, 24, true, 747, 1328, 132368)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0026', 'organized/AGN-0026.jpg', 'AGN-0026', '', '', '', '[]'::jsonb, 25, true, 1328, 747, 156796)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0027', 'organized/AGN-0027.jpg', 'AGN-0027', '', '', '', '[]'::jsonb, 26, true, 1328, 747, 129598)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0028', 'organized/AGN-0028.jpg', 'AGN-0028', '', '', '', '[]'::jsonb, 27, true, 747, 1328, 131910)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0029', 'organized/AGN-0029.jpg', 'AGN-0029', '', '', '', '[]'::jsonb, 28, true, 747, 1328, 107051)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0030', 'organized/AGN-0030.jpg', 'AGN-0030', '', '', '', '[]'::jsonb, 29, true, 747, 1328, 138504)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0031', 'organized/AGN-0031.jpg', 'AGN-0031', '', '', '', '[]'::jsonb, 30, true, 1328, 747, 140769)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0032', 'organized/AGN-0032.jpg', 'AGN-0032', '', '', '', '[]'::jsonb, 31, true, 1328, 747, 125809)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0033', 'organized/AGN-0033.jpg', 'AGN-0033', '', '', '', '[]'::jsonb, 32, true, 747, 1328, 115052)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0034', 'organized/AGN-0034.jpg', 'AGN-0034', '', '', '', '[]'::jsonb, 33, true, 747, 1328, 90825)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0035', 'organized/AGN-0035.jpg', 'AGN-0035', '', '', '', '[]'::jsonb, 34, true, 747, 1328, 106955)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0036', 'organized/AGN-0036.jpg', 'AGN-0036', '', '', '', '[]'::jsonb, 35, true, 747, 1328, 116365)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0037', 'organized/AGN-0037.jpg', 'AGN-0037', '', '', '', '[]'::jsonb, 36, true, 1200, 1600, 194399)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0038', 'organized/AGN-0038.jpg', 'AGN-0038', '', '', '', '[]'::jsonb, 37, true, 1200, 1600, 173071)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0039', 'organized/AGN-0039.jpg', 'AGN-0039', '', '', '', '[]'::jsonb, 38, true, 1200, 1600, 120411)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0040', 'organized/AGN-0040.jpg', 'AGN-0040', '', '', '', '[]'::jsonb, 39, true, 747, 1328, 112922)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0041', 'organized/AGN-0041.jpg', 'AGN-0041', '', '', '', '[]'::jsonb, 40, true, 1200, 1600, 404273)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0042', 'organized/AGN-0042.jpg', 'AGN-0042', '', '', '', '[]'::jsonb, 41, true, 1200, 1600, 242090)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0043', 'organized/AGN-0043.jpg', 'AGN-0043', '', '', '', '[]'::jsonb, 42, true, 1200, 1600, 575641)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0044', 'organized/AGN-0044.jpg', 'AGN-0044', '', '', '', '[]'::jsonb, 43, true, 1280, 960, 167488)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0045', 'organized/AGN-0045.jpg', 'AGN-0045', '', '', '', '[]'::jsonb, 44, true, 1200, 1600, 335010)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0047', 'organized/AGN-0047.jpg', 'AGN-0047', '', '', '', '[]'::jsonb, 46, true, 1225, 856, 290398)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0048', 'organized/AGN-0048.jpg', 'AGN-0048', '', '', '', '[]'::jsonb, 47, true, 554, 554, 89934)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0049', 'organized/AGN-0049.jpg', 'AGN-0049', '', '', '', '[]'::jsonb, 48, true, 324, 455, 37595)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0050', 'organized/AGN-0050.jpg', 'AGN-0050', '', '', '', '[]'::jsonb, 49, true, 500, 334, 41646)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0051', 'organized/AGN-0051.jpg', 'AGN-0051', '', '', '', '[]'::jsonb, 50, true, 169, 300, 18659)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0052', 'organized/AGN-0052.jpg', 'AGN-0052', '', '', '', '[]'::jsonb, 51, true, 554, 554, 68484)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0053', 'organized/AGN-0053.jpg', 'AGN-0053', '', '', '', '[]'::jsonb, 52, true, 721, 1600, 279918)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0054', 'organized/AGN-0054.jpg', 'AGN-0054', '', '', '', '[]'::jsonb, 53, true, 450, 509, 65539)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0055', 'organized/AGN-0055.jpg', 'AGN-0055', '', '', '', '[]'::jsonb, 54, true, 350, 260, 30519)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0056', 'organized/AGN-0056.jpg', 'AGN-0056', '', '', '', '[]'::jsonb, 55, true, 554, 554, 78982)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0057', 'organized/AGN-0057.jpg', 'AGN-0057', '', '', '', '[]'::jsonb, 56, true, 900, 1600, 256452)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0058', 'organized/AGN-0058.jpg', 'AGN-0058', '', '', '', '[]'::jsonb, 57, true, 900, 1600, 228355)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0059', 'organized/AGN-0059.jpg', 'AGN-0059', '', '', '', '[]'::jsonb, 58, true, 900, 1600, 209283)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0060', 'organized/AGN-0060.jpg', 'AGN-0060', '', '', '', '[]'::jsonb, 59, true, 523, 663, 44552)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0061', 'organized/AGN-0061.jpg', 'AGN-0061', '', '', '', '[]'::jsonb, 60, true, 900, 1600, 232586)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0062', 'organized/AGN-0062.jpg', 'AGN-0062', '', '', '', '[]'::jsonb, 61, true, 900, 1600, 231190)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0063', 'organized/AGN-0063.jpg', 'AGN-0063', '', '', '', '[]'::jsonb, 62, true, 900, 1600, 238241)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0064', 'organized/AGN-0064.jpg', 'AGN-0064', '', '', '', '[]'::jsonb, 63, true, 900, 1600, 319061)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0065', 'organized/AGN-0065.jpg', 'AGN-0065', '', '', '', '[]'::jsonb, 64, true, 900, 1600, 324687)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0066', 'organized/AGN-0066.jpg', 'AGN-0066', '', '', '', '[]'::jsonb, 65, true, 900, 1600, 325029)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0067', 'organized/AGN-0067.jpg', 'AGN-0067', '', '', '', '[]'::jsonb, 66, true, 900, 1600, 271358)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0068', 'organized/AGN-0068.jpg', 'AGN-0068', '', '', '', '[]'::jsonb, 67, true, 900, 1600, 322524)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0069', 'organized/AGN-0069.jpg', 'AGN-0069', '', '', '', '[]'::jsonb, 68, true, 900, 1600, 275934)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0070', 'organized/AGN-0070.jpg', 'AGN-0070', '', '', '', '[]'::jsonb, 69, true, 720, 1280, 193456)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0071', 'organized/AGN-0071.jpg', 'AGN-0071', '', '', '', '[]'::jsonb, 70, true, 900, 1600, 358812)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0072', 'organized/AGN-0072.jpg', 'AGN-0072', '', '', '', '[]'::jsonb, 71, true, 900, 1600, 351267)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0073', 'organized/AGN-0073.jpg', 'AGN-0073', '', '', '', '[]'::jsonb, 72, true, 1200, 1600, 465046)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0074', 'organized/AGN-0074.jpg', 'AGN-0074', '', '', '', '[]'::jsonb, 73, true, 900, 1600, 351869)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0075', 'organized/AGN-0075.jpg', 'AGN-0075', '', '', '', '[]'::jsonb, 74, true, 1200, 1600, 459759)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0076', 'organized/AGN-0076.jpg', 'AGN-0076', '', '', '', '[]'::jsonb, 75, true, 900, 1600, 311058)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0077', 'organized/AGN-0077.jpg', 'AGN-0077', '', '', '', '[]'::jsonb, 76, true, 1600, 900, 218001)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0078', 'organized/AGN-0078.jpg', 'AGN-0078', '', '', '', '[]'::jsonb, 77, true, 1200, 1600, 385250)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0079', 'organized/AGN-0079.jpg', 'AGN-0079', '', '', '', '[]'::jsonb, 78, true, 1200, 1600, 398987)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0080', 'organized/AGN-0080.jpg', 'AGN-0080', '', '', '', '[]'::jsonb, 79, true, 1600, 900, 301919)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0081', 'organized/AGN-0081.jpg', 'AGN-0081', '', '', '', '[]'::jsonb, 80, true, 1200, 1600, 450483)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0082', 'organized/AGN-0082.jpg', 'AGN-0082', '', '', '', '[]'::jsonb, 81, true, 898, 1598, 236846)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0083', 'organized/AGN-0083.jpg', 'AGN-0083', '', '', '', '[]'::jsonb, 82, true, 720, 1280, 214221)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0084', 'organized/AGN-0084.jpg', 'AGN-0084', '', '', '', '[]'::jsonb, 83, true, 900, 1600, 218303)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0085', 'organized/AGN-0085.jpg', 'AGN-0085', '', '', '', '[]'::jsonb, 84, true, 900, 1600, 274876)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0086', 'organized/AGN-0086.jpg', 'AGN-0086', '', '', '', '[]'::jsonb, 85, true, 900, 1600, 209772)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0087', 'organized/AGN-0087.jpg', 'AGN-0087', '', '', '', '[]'::jsonb, 86, true, 1074, 1430, 104991)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0088', 'organized/AGN-0088.jpg', 'AGN-0088', '', '', '', '[]'::jsonb, 87, true, 1080, 1266, 91075)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0089', 'organized/AGN-0089.jpg', 'AGN-0089', '', '', '', '[]'::jsonb, 88, true, 720, 960, 81082)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0090', 'organized/AGN-0090.jpg', 'AGN-0090', '', '', '', '[]'::jsonb, 89, true, 900, 1600, 146230)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0091', 'organized/AGN-0091.jpg', 'AGN-0091', '', '', '', '[]'::jsonb, 90, true, 899, 1599, 237972)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0092', 'organized/AGN-0092.jpg', 'AGN-0092', '', '', '', '[]'::jsonb, 91, true, 940, 1428, 103185)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0093', 'organized/AGN-0093.jpg', 'AGN-0093', '', '', '', '[]'::jsonb, 92, true, 720, 1600, 81939)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0094', 'organized/AGN-0094.jpg', 'AGN-0094', '', '', '', '[]'::jsonb, 93, true, 1284, 1546, 191644)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0095', 'organized/AGN-0095.jpg', 'AGN-0095', '', '', '', '[]'::jsonb, 94, true, 719, 1280, 155104)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0096', 'organized/AGN-0096.jpg', 'AGN-0096', '', '', '', '[]'::jsonb, 95, true, 900, 1600, 128391)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0097', 'organized/AGN-0097.jpg', 'AGN-0097', '', '', '', '[]'::jsonb, 96, true, 1080, 1430, 103348)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0098', 'organized/AGN-0098.jpg', 'AGN-0098', '', '', '', '[]'::jsonb, 97, true, 900, 1600, 173479)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0099', 'organized/AGN-0099.jpg', 'AGN-0099', '', '', '', '[]'::jsonb, 98, true, 1080, 1434, 126140)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0100', 'organized/AGN-0100.jpg', 'AGN-0100', '', '', '', '[]'::jsonb, 99, true, 1080, 1032, 140430)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0101', 'organized/AGN-0101.jpg', 'AGN-0101', '', '', '', '[]'::jsonb, 100, true, 844, 1500, 127978)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0102', 'organized/AGN-0102.jpg', 'AGN-0102', '', '', '', '[]'::jsonb, 101, true, 1080, 804, 87244)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0103', 'organized/AGN-0103.jpg', 'AGN-0103', '', '', '', '[]'::jsonb, 102, true, 900, 1600, 129832)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0104', 'organized/AGN-0104.jpg', 'AGN-0104', '', '', '', '[]'::jsonb, 103, true, 1200, 1600, 137033)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0105', 'organized/AGN-0105.jpg', 'AGN-0105', '', '', '', '[]'::jsonb, 104, true, 598, 1080, 95085)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0106', 'organized/AGN-0106.jpg', 'AGN-0106', '', '', '', '[]'::jsonb, 105, true, 1200, 1600, 446060)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0107', 'organized/AGN-0107.jpg', 'AGN-0107', '', '', '', '[]'::jsonb, 106, true, 1200, 1600, 248010)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0108', 'organized/AGN-0108.jpg', 'AGN-0108', '', '', '', '[]'::jsonb, 107, true, 1200, 1600, 347262)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0109', 'organized/AGN-0109.jpg', 'AGN-0109', '', '', '', '[]'::jsonb, 108, true, 1200, 1600, 377164)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0110', 'organized/AGN-0110.jpg', 'AGN-0110', '', '', '', '[]'::jsonb, 109, true, 1200, 1600, 288474)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0111', 'organized/AGN-0111.jpg', 'AGN-0111', '', '', '', '[]'::jsonb, 110, true, 1600, 1200, 424029)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0112', 'organized/AGN-0112.jpg', 'AGN-0112', '', '', '', '[]'::jsonb, 111, true, 1200, 1600, 324621)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0113', 'organized/AGN-0113.jpg', 'AGN-0113', '', '', '', '[]'::jsonb, 112, true, 1200, 1600, 309618)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0114', 'organized/AGN-0114.jpg', 'AGN-0114', '', '', '', '[]'::jsonb, 113, true, 1600, 1200, 515208)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0115', 'organized/AGN-0115.jpg', 'AGN-0115', '', '', '', '[]'::jsonb, 114, true, 1200, 1600, 438860)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0116', 'organized/AGN-0116.jpg', 'AGN-0116', '', '', '', '[]'::jsonb, 115, true, 1200, 1600, 431640)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0117', 'organized/AGN-0117.jpg', 'AGN-0117', '', '', '', '[]'::jsonb, 116, true, 1200, 1600, 442079)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0118', 'organized/AGN-0118.jpg', 'AGN-0118', '', '', '', '[]'::jsonb, 117, true, 1200, 1600, 354432)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0119', 'organized/AGN-0119.jpg', 'AGN-0119', '', '', '', '[]'::jsonb, 118, true, 1200, 1600, 362580)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0120', 'organized/AGN-0120.jpg', 'AGN-0120', '', '', '', '[]'::jsonb, 119, true, 1600, 1200, 391459)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0121', 'organized/AGN-0121.jpg', 'AGN-0121', '', '', '', '[]'::jsonb, 120, true, 1600, 1200, 324868)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0122', 'organized/AGN-0122.jpg', 'AGN-0122', '', '', '', '[]'::jsonb, 121, true, 1200, 1600, 482081)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0123', 'organized/AGN-0123.jpg', 'AGN-0123', '', '', '', '[]'::jsonb, 122, true, 1600, 1200, 390999)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0124', 'organized/AGN-0124.jpg', 'AGN-0124', '', '', '', '[]'::jsonb, 123, true, 1200, 1600, 527853)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0125', 'organized/AGN-0125.jpg', 'AGN-0125', '', '', '', '[]'::jsonb, 124, true, 1200, 1600, 353287)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0126', 'organized/AGN-0126.jpg', 'AGN-0126', '', '', '', '[]'::jsonb, 125, true, 1200, 1600, 341702)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0127', 'organized/AGN-0127.jpg', 'AGN-0127', '', '', '', '[]'::jsonb, 126, true, 1200, 1600, 236214)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0128', 'organized/AGN-0128.jpg', 'AGN-0128', '', '', '', '[]'::jsonb, 127, true, 1200, 1600, 376583)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0129', 'organized/AGN-0129.jpg', 'AGN-0129', '', '', '', '[]'::jsonb, 128, true, 1200, 1600, 379353)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0130', 'organized/AGN-0130.jpg', 'AGN-0130', '', '', '', '[]'::jsonb, 129, true, 1200, 1600, 354963)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0131', 'organized/AGN-0131.jpg', 'AGN-0131', '', '', '', '[]'::jsonb, 130, true, 1200, 1600, 206766)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0132', 'organized/AGN-0132.jpg', 'AGN-0132', '', '', '', '[]'::jsonb, 131, true, 1200, 1600, 218392)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0133', 'organized/AGN-0133.jpg', 'AGN-0133', '', '', '', '[]'::jsonb, 132, true, 1200, 1600, 270126)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0134', 'organized/AGN-0134.jpg', 'AGN-0134', '', '', '', '[]'::jsonb, 133, true, 1200, 1600, 200071)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0135', 'organized/AGN-0135.jpg', 'AGN-0135', '', '', '', '[]'::jsonb, 134, true, 1200, 1600, 297285)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0136', 'organized/AGN-0136.jpg', 'AGN-0136', '', '', '', '[]'::jsonb, 135, true, 1200, 1600, 366125)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0137', 'organized/AGN-0137.jpg', 'AGN-0137', '', '', '', '[]'::jsonb, 136, true, 1200, 1600, 429452)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0138', 'organized/AGN-0138.jpg', 'AGN-0138', '', '', '', '[]'::jsonb, 137, true, 1200, 1600, 378373)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0139', 'organized/AGN-0139.jpg', 'AGN-0139', '', '', '', '[]'::jsonb, 138, true, 1200, 1600, 358854)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0140', 'organized/AGN-0140.jpg', 'AGN-0140', '', '', '', '[]'::jsonb, 139, true, 1200, 1600, 419075)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0141', 'organized/AGN-0141.jpg', 'AGN-0141', '', '', '', '[]'::jsonb, 140, true, 1200, 1600, 310324)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0142', 'organized/AGN-0142.jpg', 'AGN-0142', '', '', '', '[]'::jsonb, 141, true, 1200, 1600, 297159)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0143', 'organized/AGN-0143.jpg', 'AGN-0143', '', '', '', '[]'::jsonb, 142, true, 1200, 1600, 310756)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0144', 'organized/AGN-0144.jpg', 'AGN-0144', '', '', '', '[]'::jsonb, 143, true, 1200, 1600, 365752)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0145', 'organized/AGN-0145.jpg', 'AGN-0145', '', '', '', '[]'::jsonb, 144, true, 1200, 1600, 345185)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0146', 'organized/AGN-0146.jpg', 'AGN-0146', '', '', '', '[]'::jsonb, 145, true, 1200, 1600, 367851)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0147', 'organized/AGN-0147.jpg', 'AGN-0147', '', '', '', '[]'::jsonb, 146, true, 1200, 1600, 344003)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0148', 'organized/AGN-0148.jpg', 'AGN-0148', '', '', '', '[]'::jsonb, 147, true, 1200, 1600, 475907)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0149', 'organized/AGN-0149.jpg', 'AGN-0149', '', '', '', '[]'::jsonb, 148, true, 1200, 1600, 348982)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0150', 'organized/AGN-0150.jpg', 'AGN-0150', '', '', '', '[]'::jsonb, 149, true, 1200, 1600, 364545)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0151', 'organized/AGN-0151.jpg', 'AGN-0151', '', '', '', '[]'::jsonb, 150, true, 1200, 1600, 284004)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0152', 'organized/AGN-0152.jpg', 'AGN-0152', '', '', '', '[]'::jsonb, 151, true, 1200, 1600, 335683)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0153', 'organized/AGN-0153.jpg', 'AGN-0153', '', '', '', '[]'::jsonb, 152, true, 1200, 1600, 367697)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0154', 'organized/AGN-0154.jpg', 'AGN-0154', '', '', '', '[]'::jsonb, 153, true, 1200, 1600, 293948)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0155', 'organized/AGN-0155.jpg', 'AGN-0155', '', '', '', '[]'::jsonb, 154, true, 1200, 1600, 300187)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0156', 'organized/AGN-0156.jpg', 'AGN-0156', '', '', '', '[]'::jsonb, 155, true, 1200, 1600, 244674)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0157', 'organized/AGN-0157.jpg', 'AGN-0157', '', '', '', '[]'::jsonb, 156, true, 1200, 1600, 313117)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0159', 'organized/AGN-0159.jpg', 'AGN-0159', '', '', '', '[]'::jsonb, 158, true, 960, 1280, 132707)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0160', 'organized/AGN-0160.jpg', 'AGN-0160', '', '', '', '[]'::jsonb, 159, true, 720, 1280, 136297)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0161', 'organized/AGN-0161.jpg', 'AGN-0161', '', '', '', '[]'::jsonb, 160, true, 1200, 1600, 186167)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0162', 'organized/AGN-0162.jpg', 'AGN-0162', '', '', '', '[]'::jsonb, 161, true, 960, 1280, 227986)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0163', 'organized/AGN-0163.jpg', 'AGN-0163', '', '', '', '[]'::jsonb, 162, true, 1200, 1600, 477013)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0164', 'organized/AGN-0164.jpg', 'AGN-0164', '', '', '', '[]'::jsonb, 163, true, 960, 1280, 256606)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0165', 'organized/AGN-0165.jpg', 'AGN-0165', '', '', '', '[]'::jsonb, 164, true, 576, 1280, 73439)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0167', 'organized/AGN-0167.jpg', 'AGN-0167', '', '', '', '[]'::jsonb, 166, true, 576, 1280, 63639)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0168', 'organized/AGN-0168.jpg', 'AGN-0168', '', '', '', '[]'::jsonb, 167, true, 576, 1280, 52998)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0169', 'organized/AGN-0169.jpg', 'AGN-0169', '', '', '', '[]'::jsonb, 168, true, 576, 1280, 69242)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0170', 'organized/AGN-0170.jpg', 'AGN-0170', '', '', '', '[]'::jsonb, 169, true, 576, 1280, 66506)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0171', 'organized/AGN-0171.jpg', 'AGN-0171', '', '', '', '[]'::jsonb, 170, true, 576, 1280, 66887)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0172', 'organized/AGN-0172.jpg', 'AGN-0172', '', '', '', '[]'::jsonb, 171, true, 576, 1280, 63165)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0173', 'organized/AGN-0173.jpg', 'AGN-0173', '', '', '', '[]'::jsonb, 172, true, 576, 1280, 81601)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0174', 'organized/AGN-0174.jpg', 'AGN-0174', '', '', '', '[]'::jsonb, 173, true, 576, 1280, 96292)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0175', 'organized/AGN-0175.jpg', 'AGN-0175', '', '', '', '[]'::jsonb, 174, true, 576, 1280, 210552)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0176', 'organized/AGN-0176.jpg', 'AGN-0176', '', '', '', '[]'::jsonb, 175, true, 576, 1280, 81857)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0177', 'organized/AGN-0177.jpg', 'AGN-0177', '', '', '', '[]'::jsonb, 176, true, 576, 1280, 76828)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0178', 'organized/AGN-0178.jpg', 'AGN-0178', '', '', '', '[]'::jsonb, 177, true, 576, 1280, 163515)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0179', 'organized/AGN-0179.jpg', 'AGN-0179', '', '', '', '[]'::jsonb, 178, true, 1280, 720, 262208)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0180', 'organized/AGN-0180.jpg', 'AGN-0180', '', '', '', '[]'::jsonb, 179, true, 1280, 720, 279193)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0181', 'organized/AGN-0181.jpg', 'AGN-0181', '', '', '', '[]'::jsonb, 180, true, 720, 1280, 189996)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0182', 'organized/AGN-0182.jpg', 'AGN-0182', '', '', '', '[]'::jsonb, 181, true, 720, 1280, 212786)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
insert into media (cloudinary_id, local_path, alt, title, description, category, tags, sort, visible, width, height, bytes)
  values ('ajmal-garden/AGN-0183', 'organized/AGN-0183.jpg', 'AGN-0183', '', '', '', '[]'::jsonb, 182, true, 720, 1280, 217145)
  on conflict (cloudinary_id) do update set alt = excluded.alt, title = excluded.title, description = excluded.description, category = excluded.category, tags = excluded.tags, sort = excluded.sort, visible = true;
