import { Search, MapPin, Home, Tag, Euro } from "lucide-react";
import { useLang } from "../LanguageContext";

const STATS = {
  sq: [["500+", "Prona të shitura"], ["1200+", "Klientë të kënaqur"], ["8 vite", "Përvojë në treg"], ["50+", "Partnerë investitorë"]],
  en: [["500+", "Properties sold"], ["1200+", "Satisfied clients"], ["8 years", "Market experience"], ["50+", "Investor partners"]],
  de: [["500+", "Verkaufte Immobilien"], ["1200+", "Zufriedene Kunden"], ["8 Jahre", "Markterfahrung"], ["50+", "Investitionspartner"]],
};

const TAGLINE = {
  sq: "Pasuri të paluajtshme • Investime • Besueshmëri",
  en: "Real Estate • Investments • Reliability",
  de: "Immobilien • Investitionen • Vertrauenswürdigkeit",
};

const PROPERTY_TYPES = {
  sq: ["Banesë", "Shtëpi", "Penthouse", "Vilë", "Zyre", "Objekt", "Lokal", "Biznes", "Depo", "Tokë"],
  en: ["Apartment", "House", "Penthouse", "Villa", "Office", "Building", "Shop", "Business", "Warehouse", "Land"],
  de: ["Wohnung", "Haus", "Penthouse", "Villa", "Büro", "Gebäude", "Laden", "Geschäft", "Lager", "Grundstück"],
};

const LOCATIONS = ["Prishtinë", "Obiliq", "Fushë Kosovë", "Lipjan", "Graçanicë"];

const PRICE_RANGES = {
  sq: ["0 – 50,000 €", "50,000 – 100,000 €", "100,000 – 150,000 €", "150,000 – 250,000 €", "250,000 – 500,000 €", "500,000+ €"],
  en: ["0 – 50,000 €", "50,000 – 100,000 €", "100,000 – 150,000 €", "150,000 – 250,000 €", "250,000 – 500,000 €", "500,000+ €"],
  de: ["0 – 50,000 €", "50,000 – 100,000 €", "100,000 – 150,000 €", "150,000 – 250,000 €", "250,000 – 500,000 €", "500,000+ €"],
};

const PRICE_LABEL = { sq: "Diapazoni i çmimeve", en: "Price range", de: "Preisbereich" };

const SEARCH_LABEL = {
  sq: "Gjej pronën që ju përshtatet",
  en: "Find the property that suits you",
  de: "Finden Sie die passende Immobilie",
};

const FREE_LABEL = {
  sq: "Konsultimi i parë është gjithmonë falas",
  en: "First consultation is always free",
  de: "Erstberatung ist immer kostenlos",
};

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section id="ballina" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-grad" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />

      <div className="container-x relative z-10 pt-32 pb-20 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border border-white/20">
            {TAGLINE[lang]}
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            {t.hero.title.split("Kosovo").length > 1 ? (
              <>
                {t.hero.title.split(/(Kosovo|Kosovë|Kosovo\.)/)[0]}
                <span className="block text-brand-200">
                  {t.hero.title.includes("Kosovë") ? "në Kosovë." : t.hero.title.includes("Kosovo.") ? "Kosovo." : "im Kosovo."}
                </span>
              </>
            ) : (
              t.hero.title
            )}
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#prona" className="btn-primary">{t.hero.cta1}</a>
            <a href="#kontakti" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="mt-14 max-w-5xl bg-white rounded-2xl shadow-2xl p-3 sm:p-4">
          <div className="px-3 pt-2 pb-1 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{SEARCH_LABEL[lang]}</span>
            <span className="text-[11px] font-semibold text-slate-500">{FREE_LABEL[lang]}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <Field icon={<Tag className="h-4 w-4" />} label={t.hero.search.purpose} options={t.hero.purposes} />
            <Field icon={<Home className="h-4 w-4" />} label={t.hero.search.type} options={PROPERTY_TYPES[lang]} />
            <Field icon={<MapPin className="h-4 w-4" />} label={t.hero.search.location} options={LOCATIONS} />
            <Field icon={<Euro className="h-4 w-4" />} label={PRICE_LABEL[lang]} options={PRICE_RANGES[lang]} placeholder=" " />
            <button className="btn-primary h-full w-full md:w-auto md:px-8">
              <Search className="h-4 w-4" />
              {t.hero.search.btn}
            </button>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {STATS[lang].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4">
              <dt className="text-white text-2xl font-extrabold font-display">{v}</dt>
              <dd className="text-white/80 text-xs mt-1">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Field({ icon, label, options, placeholder }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100 transition">
      <span className="text-brand-600">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
        <select className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer">
          {placeholder && <option value="" disabled selected>{placeholder}</option>}
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      </div>
    </label>
  );
}
