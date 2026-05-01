import { createContext, useContext, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations } from "./i18n";
import { langFromPathname, stripLang, withLang, DEFAULT_LANG } from "./seo/lang";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const lang = langFromPathname(pathname);
  const t = translations[lang] || translations[DEFAULT_LANG];

  const setLang = useCallback(
    (next) => {
      const neutral = stripLang(pathname);
      const target = withLang(neutral, next);
      navigate(`${target}${search}${hash}`);
    },
    [pathname, search, hash, navigate]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}

// Returns a function that prefixes a language-neutral path with the current lang
export function useLocalizedHref() {
  const { lang } = useLang();
  return useCallback((path) => withLang(path, lang), [lang]);
}
