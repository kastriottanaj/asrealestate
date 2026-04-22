import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { useLang } from "../LanguageContext";

const LANGS = [
  { code: "sq", label: "Shqip" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#ballina", label: t.nav.home },
    { href: "#prona", label: t.nav.properties },
    { href: "#sherbimet", label: t.nav.services },
    { href: "#rreth", label: t.nav.about },
    { href: "#kontakti", label: t.nav.contact },
    { href: "#ofroni", label: t.nav.offer, outline: true },
  ];

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) =>
            l.outline ? (
              <a
                key={l.href}
                href={l.href}
                className={`ml-1 px-4 py-2 text-sm font-semibold rounded-lg border transition ${
                  scrolled
                    ? "border-brand-600 text-brand-600 hover:bg-brand-50"
                    : "border-white/70 text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm font-semibold transition ${
                  scrolled ? "text-slate-700 hover:text-brand-700" : "text-white/90 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition ${scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}>
              <Globe className="h-4 w-4" />
              {LANGS.find(l => l.code === lang)?.label}
              <ChevronDown className="h-3.5 w-3.5 opacity-70" />
            </button>
            <div className="absolute right-0 top-full mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-semibold transition ${lang === l.code ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-slate-50"}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="tel:+38349579992"
            className={`flex items-center gap-2 text-sm font-semibold ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            <Phone className="h-4 w-4" />
            +383 49 579 992
          </a>
          <a href="#kontakti" className="btn-primary">
            {t.nav.cta}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden rounded-lg p-2 ${scrolled ? "text-slate-900" : "text-white"}`}
          aria-label="Hap menynë"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-soft">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-50"
              >
                {l.label}
              </a>
            ))}
            {/* Mobile language switcher */}
            <div className="flex gap-2 px-3 py-2 border-t border-slate-100 mt-1">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setOpen(false); }}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold border transition ${
                    lang === l.code ? "bg-brand-600 text-white border-brand-600" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a href="#kontakti" onClick={() => setOpen(false)} className="btn-primary mt-1">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
