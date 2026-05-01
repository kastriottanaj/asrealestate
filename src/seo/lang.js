export const LANGS = ["sq", "en", "de"];
export const DEFAULT_LANG = "sq";

// Albanian is default and lives at root; en/de live under prefix
export function withLang(path, lang) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return clean;
  // /en + /  → /en
  // /en + /prona → /en/prona
  if (clean === "/") return `/${lang}`;
  return `/${lang}${clean}`;
}

// Strip /en or /de prefix from a pathname
export function stripLang(pathname) {
  const m = pathname.match(/^\/(en|de)(\/.*|$)/);
  if (!m) return pathname || "/";
  return m[2] || "/";
}

export function langFromPathname(pathname) {
  const m = pathname.match(/^\/(en|de)(\/|$)/);
  return m ? m[1] : DEFAULT_LANG;
}
