import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLang, useLocalizedHref } from "../LanguageContext";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.43-4.94 8.43-9.94z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLang();
  const href = useLocalizedHref();
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            {t.footer.desc}
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100069607270512"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-brand-600 transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/asrealestate.rks/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-brand-600 transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/as-real-estate-rks/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-brand-600 transition"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">{t.footer.nav}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to={href("/")} className="hover:text-white">Ballina</Link></li>
            <li><Link to={href("/prona")} className="hover:text-white">Prona</Link></li>
            <li><Link to={href("/sherbimet")} className="hover:text-white">Shërbimet</Link></li>
            <li><Link to={href("/rreth-nesh")} className="hover:text-white">Rreth Nesh</Link></li>
            <li><Link to={href("/kontakti")} className="hover:text-white">Kontakti</Link></li>
            <li><Link to={href("/ofroni-pronen")} className="hover:text-white">Ofroni Pronën</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <a href="tel:+38349942941" className="hover:text-white">+383 49 942 941</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <a href="mailto:asrealestaterks@gmail.com" className="hover:text-white">asrealestaterks@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <span>Rruga "Ahmet Krasniqi" Nr. 15, Prishtinë, Kosovë 10000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AS Capital Real Estate. {t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <Link to={href("/privatesia")} className="hover:text-white transition">
              {t.footer.privacy || "Privatësia"}
            </Link>
            <span className="hidden sm:inline">•</span>
            <p className="hidden sm:block">Pasuri të paluajtshme • Investime të sigurta • Besueshmëri</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
