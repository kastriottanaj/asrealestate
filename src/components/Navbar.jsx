import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "#ballina", label: "Ballina" },
  { href: "#prona", label: "Prona" },
  { href: "#sherbimet", label: "Shërbimet" },
  { href: "#rreth", label: "Rreth Nesh" },
  { href: "#kontakti", label: "Kontakti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo variant={scrolled ? "dark" : "light"} />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:text-brand-700"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+38349579992"
            className={`flex items-center gap-2 text-sm font-semibold ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            +383 49 579 992
          </a>
          <a href="#kontakti" className="btn-primary">
            Konsultim falas
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden rounded-lg p-2 ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
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
            <a href="#kontakti" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Konsultim falas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
