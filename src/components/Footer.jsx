import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

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

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-x py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm">
            Partneri juaj i besueshëm për shitje, qira dhe investime në pasuri
            të paluajtshme në Kosovë. Vlerë afatgjatë, rezultate të qëndrueshme.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-brand-600 transition"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 hover:bg-brand-600 transition"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Navigimi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#ballina" className="hover:text-white">Ballina</a></li>
            <li><a href="#prona" className="hover:text-white">Prona</a></li>
            <li><a href="#sherbimet" className="hover:text-white">Shërbimet</a></li>
            <li><a href="#rreth" className="hover:text-white">Rreth Nesh</a></li>
            <li><a href="#kontakti" className="hover:text-white">Kontakti</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Kontakti</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <a href="tel:+38349579992" className="hover:text-white">+383 49 579 992</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <a href="mailto:info@ascapital-re.com" className="hover:text-white">info@ascapital-re.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-400 shrink-0" />
              <span>Hasan Prishtina, Obiliq, Kosovë 15000</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AS Capital Real Estate. Të gjitha të drejtat e rezervuara.</p>
          <p>Pasuri të paluajtshme • Investime të sigurta • Besueshmëri</p>
        </div>
      </div>
    </footer>
  );
}
