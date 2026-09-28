import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { STRINGS, type Lang, type LangKey } from "./dict";

/**
 * Bilingual foundation (owner decision: full English / Latin-Urdu toggle —
 * Roman Urdu like "hum khush hain", NOT Urdu script).
 * - Preference persists in localStorage; `<html lang>` follows the choice.
 * - Layout stays LTR in both modes (Latin script needs no mirroring), which
 *   keeps every absolute-positioned surface correct for free.
 * - Missing Urdu falls back to English — never blank.
 */
interface LangApi {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: LangKey) => string;
}

const Ctx = createContext<LangApi | null>(null);
const STORE_KEY = "ag:lang:v1";

function initial(): Lang {
  try {
    return localStorage.getItem(STORE_KEY) === "ur" ? "ur" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial);

  useEffect(() => {
    document.documentElement.lang = lang === "ur" ? "ur-Latn" : "en";
    document.documentElement.dir = "ltr";
    try {
      localStorage.setItem(STORE_KEY, lang);
    } catch {
      // Private mode — preference simply doesn't persist.
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "ur" : "en")), []);
  const t = useCallback((key: LangKey) => STRINGS[lang][key] ?? STRINGS.en[key], [lang]);

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>;
}

export function useLang(): LangApi {
  const api = useContext(Ctx);
  if (!api) throw new Error("useLang must be used inside LanguageProvider");
  return api;
}

/** Compact EN | اردو pill for the navbar (both canvases). */
export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLang();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "en" ? "Urdu mein dekhein" : "View in English"}
      aria-pressed={lang === "ur"}
      className={`inline-flex h-9 shrink-0 items-center gap-1 rounded-full px-3 text-xs font-bold ring-1 transition active:scale-95 ${className} ${
        lang === "ur"
          ? "bg-leaf-900 text-white ring-leaf-900"
          : "text-leaf-800 ring-leaf-200 hover:bg-leaf-100"
      }`}
    >
      <span className={lang === "en" ? "text-leaf-900" : "text-white/60"}>EN</span>
      <span aria-hidden className="opacity-40">|</span>
      <span className={lang === "ur" ? "text-white" : "text-leaf-800/50"}>URDU</span>
    </button>
  );
}
