import { MapPin, ExternalLink } from "lucide-react";
import { useLang } from "../LanguageContext";

const COPY = {
  sq: {
    eyebrow: "Na gjeni në hartë",
    title: "Zyra jonë në Prishtinë",
    subtitle:
      'Rruga "Ahmet Krasniqi" Nr. 15, Prishtinë 10000 — lehtësisht e arritshme, me parking pranë.',
    directions: "Hap në Google Maps",
    iframeTitle: "Harta — Zyra AS Capital Real Estate, Prishtinë",
  },
  en: {
    eyebrow: "Find us on the map",
    title: "Our office in Prishtina",
    subtitle:
      'Rruga "Ahmet Krasniqi" Nr. 15, Prishtinë 10000 — easy to reach, with parking nearby.',
    directions: "Open in Google Maps",
    iframeTitle: "Map — AS Capital Real Estate office, Prishtina",
  },
  de: {
    eyebrow: "Finden Sie uns auf der Karte",
    title: "Unser Büro in Prishtina",
    subtitle:
      'Rruga "Ahmet Krasniqi" Nr. 15, Prishtinë 10000 — gut erreichbar, mit Parkplatz in der Nähe.',
    directions: "In Google Maps öffnen",
    iframeTitle: "Karte — AS Capital Real Estate Büro, Prishtina",
  },
};

const MAPS_LINK = "https://www.google.com/maps/place/AS+Real+Estate/@42.6634393,21.1538127,17z";

export default function LocationMap({ className = "" }) {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;

  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {c.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {c.title}
          </h2>
          <p className="mt-4 text-slate-600">{c.subtitle}</p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {c.directions}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl shadow-soft border border-slate-100">
          <iframe
            title={c.iframeTitle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.901659751676!2d21.1538127!3d42.6634393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fbdde2e6aff%3A0x9b7cb6d4d529ed70!2sAS%20Real%20Estate!5e0!3m2!1sen!2s!4v1779712442986!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
