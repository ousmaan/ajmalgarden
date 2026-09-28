import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Public Supabase client (catalog + gallery reads). Null-safe: until the owner
 * pastes VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY, pages render their
 * designed empty states instead of crashing. The anon key is public by design
 * (RLS guards everything); the service key must NEVER enter this codebase.
 */
const url = import.meta.env.VITE_SUPABASE_URL ?? "";
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

let client: SupabaseClient | null = null;
export function supabase(): SupabaseClient | null {
  if (!url || !anon) return null;
  if (!client) client = createClient(url, anon);
  return client;
}

export interface GalleryRow {
  id: string;
  cloudinary_id: string | null;
  local_path: string | null;
  alt: string;
  title: string;
  description: string;
  category: string;
  /** Real product collection from the tagging pass (may be empty → "Nursery"). */
  collection: string;
  /** Local/Pakistani common name — what customers ask for (Rose → Ghulab). */
  name_local: string;
  tags: string[];
  sort: number;
  visible: boolean;
  width: number | null;
  height: number | null;
}

/** Public gallery feed — visible rows first, stable sort order. */
export async function fetchGallery(): Promise<GalleryRow[]> {
  const db = supabase();
  if (!db) return [];
  const { data, error } = await db
    .from("media")
    .select("id,cloudinary_id,local_path,alt,title,description,category,collection,name_local,tags,sort,visible,width,height")
    .eq("visible", true)
    .order("sort", { ascending: true })
    .order("created_at", { ascending: true })
    .limit(1000);
  // Throw (don't swallow): the Gallery page distinguishes load failure
  // ("couldn't load" + retry) from genuinely-empty ("being planted").
  if (error) throw error;
  if (!data) return [];
  return data as GalleryRow[];
}

/** Cloudinary delivery URL (f_auto/q_auto, capped width) — 2-size discipline per plan. */
export function cloudinaryUrl(cloudinaryId: string, width: number = 900): string {
  const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ?? "";
  if (!cloud) return "";
  return `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto,w_${width}/${cloudinaryId}`;
}
