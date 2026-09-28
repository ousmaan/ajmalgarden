import { useEffect } from "react";

/** Per-route document title + meta description (SEO basics until full SSG). */
export function usePageMeta(title: string, description?: string): void {
  useEffect(() => {
    document.title = title;
    if (!description) return;
    let el = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "description");
      document.head.appendChild(el);
    }
    el.setAttribute("content", description);
  }, [title, description]);
}
