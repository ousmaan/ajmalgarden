import Fuse from "fuse.js";
import { allProducts, type ProductHit } from "../data/catalog";
import { CATEGORIES, type Category } from "../data/site";

/**
 * Instant suggest search (plan §4, local phase): trilingual by construction —
 * product names, Urdu names, descriptions, group + category names and facet
 * tags all feed one Fuse index over the static catalog. No server, no cost,
 * works offline of Supabase. The snapshot index + semantic re-rank arrive later
 * without changing this API.
 */
export interface SearchResults {
  products: ProductHit[];
  categories: Category[];
}

let productIndex: Fuse<ProductHit> | null = null;
let categoryIndex: Fuse<Category> | null = null;

function getProductIndex(): Fuse<ProductHit> {
  if (!productIndex) {
    productIndex = new Fuse(allProducts(), {
      threshold: 0.38,
      ignoreLocation: true,
      minMatchCharLength: 2,
      keys: [
        { name: "product.name", weight: 3 },
        { name: "product.nameUr", weight: 3 },
        { name: "product.tags", weight: 2 },
        { name: "product.description", weight: 1 },
        { name: "groupTitle", weight: 1 },
      ],
    });
  }
  return productIndex;
}

function getCategoryIndex(): Fuse<Category> {
  if (!categoryIndex) {
    categoryIndex = new Fuse(CATEGORIES, {
      threshold: 0.38,
      ignoreLocation: true,
      minMatchCharLength: 2,
      keys: [
        { name: "name", weight: 3 },
        { name: "nameUr", weight: 3 },
        { name: "short", weight: 1 },
        { name: "highlights", weight: 1 },
      ],
    });
  }
  return categoryIndex;
}

export function searchCatalog(query: string, productLimit = 6, categoryLimit = 4): SearchResults {
  const q = query.trim();
  if (q.length < 2) return { products: [], categories: [] };
  return {
    products: getProductIndex().search(q, { limit: productLimit }).map((r) => r.item),
    categories: getCategoryIndex().search(q, { limit: categoryLimit }).map((r) => r.item),
  };
}
