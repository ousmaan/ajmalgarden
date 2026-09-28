import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { findProduct } from "../data/catalog";
import { CATEGORIES } from "../data/site";

/**
 * Wishlist (marketing-only "cart"): visitors collect plants across the catalog
 * and send the whole list as ONE WhatsApp message — the landscaper/bulk flow
 * from the plan, with zero checkout. Persists in localStorage.
 */
export interface WishlistEntry {
  key: string;
  categoryId: string;
  productId: string;
  name: string;
  categoryName: string;
}

interface WishlistApi {
  entries: WishlistEntry[];
  count: number;
  has: (categoryId: string, productId: string) => boolean;
  toggle: (categoryId: string, productId: string) => void;
  clear: () => void;
  message: () => string;
}

const Ctx = createContext<WishlistApi | null>(null);
const STORE_KEY = "ag:wishlist:v1";

function toEntry(categoryId: string, productId: string): WishlistEntry | null {
  const hit = findProduct(categoryId, productId);
  if (!hit) return null;
  const categoryName = CATEGORIES.find((c) => c.id === categoryId)?.name ?? categoryId;
  return { key: `${categoryId}:${productId}`, categoryId, productId, name: hit.product.name, categoryName };
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [keys, setKeys] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const parsed: unknown = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed.filter((k): k is string => typeof k === "string") : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(keys));
    } catch {
      // Private mode — wishlist simply doesn't persist.
    }
  }, [keys]);

  const toggle = useCallback((categoryId: string, productId: string) => {
    const key = `${categoryId}:${productId}`;
    setKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }, []);

  const clear = useCallback(() => setKeys([]), []);

  const api = useMemo<WishlistApi>(() => {
    const entries = keys
      .map((key) => {
        const [categoryId, productId] = key.split(":");
        return toEntry(categoryId, productId);
      })
      .filter((e): e is WishlistEntry => e !== null);
    return {
      entries,
      count: entries.length,
      has: (categoryId, productId) => keys.includes(`${categoryId}:${productId}`),
      toggle,
      clear,
      message: () =>
        `Assalam-o-Alaikum! I'd like to ask about these plants at Ajmal Garden Nursery:\n\n${entries
          .map((e, i) => `${i + 1}. ${e.name} (${e.categoryName})`)
          .join("\n")}\n\nPlease share availability and prices.`,
    };
  }, [keys, toggle, clear]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useWishlist(): WishlistApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useWishlist must be used inside WishlistProvider");
  return api;
}
