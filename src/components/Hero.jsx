import { useState } from "react";
import { Search, MapPin, Home, Tag, Euro } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLang, useLocalizedHref } from "../LanguageContext";
import { search as trackSearch } from "../lib/pixel";

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

// Canonical backend codes per index — must stay aligned with PROPERTY_TYPES above.
const TYPE_CODES = ["banese", "shtepi", "penthouse", "vile", "zyre", "objekt", "lokal", "biznes", "depo", "toke"];

// Index-aligned with t.hero.purposes (Shitje/Qira/Investim).
// Investim has no backend status — leave empty so the listing shows all.
const STATUS_CODES = ["shitje", "qira", ""];

const LOCATIONS = ["Prishtinë", "Obiliq", "Fushë Kosovë", "Lipjan", "Graçanicë"];

// "Any" labels per field per language — selecting these submits with no filter.
const ANY = {
  sq: { purpose: "Të gjitha", type: "Të gjitha tipet", location: "Të gjitha lokacionet", price: "Çdo çmim" },
  en: { purpose: "All",       type: "All types",       location: "All locations",         price: "Any price" },
  de: { purpose: "Alle",      type: "Alle Typen",      location: "Alle Standorte",        price: "Jeder Preis" },
};

const PRICE_RANGES = [
  { label: "0 – 50,000 €", min: 0, max: 50000 },
  { label: "50,000 – 100,000 €", min: 50000, max: 100000 },
  { label: "100,000 – 150,000 €", min: 100000, max: 150000 },
  { label: "150,000 – 250,000 €", min: 150000, max: 250000 },
  { label: "250,000 – 500,000 €", min: 250000, max: 500000 },
  { label: "500,000+ €", min: 500000, max: null },
];

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
  const href = useLocalizedHref();
  const navigate = useNavigate();

  // -1 = "Any/All" — selecting this submits with no filter on that field.
  const [purposeIdx, setPurposeIdx] = useState(-1);
  const [typeIdx, setTypeIdx] = useState(-1);
  const [locationIdx, setLocationIdx] = useState(-1);
  const [priceIdx, setPriceIdx] = useState(-1);

  const handleSearch = () => {
    trackSearch();
    const params = new URLSearchParams();
    if (purposeIdx >= 0) {
      const status = STATUS_CODES[purposeIdx];
      if (status) params.set("status", status);
      if (purposeIdx === 2) params.set("purpose", "investim");
    }
    if (typeIdx >= 0) params.set("type", TYPE_CODES[typeIdx]);
    if (locationIdx >= 0) params.set("location", LOCATIONS[locationIdx]);
    if (priceIdx >= 0) {
      const r = PRICE_RANGES[priceIdx];
      params.set("priceMin", String(r.min));
      if (r.max !== null) params.set("priceMax", String(r.max));
    }
    const qs = params.toString();
    navigate(qs ? `${href("/prona")}?${qs}` : href("/prona"));
  };

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
            {t.hero.title.includes("AS Real Estate") ? (
              <>
                {t.hero.title.split("AS Real Estate")[0].replace(/[-–—]\s*$/, "")}
                <span className="block text-brand-200">AS Real Estate</span>
              </>
            ) : (
              t.hero.title
            )}
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={href("/prona")} className="btn-primary">{t.hero.cta1}</Link>
            <Link to={href("/kontakti")} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        <div className="mt-14 max-w-5xl bg-white rounded-2xl shadow-2xl p-3 sm:p-4">
          <div className="px-3 pt-2 pb-1 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{SEARCH_LABEL[lang]}</span>
            <span className="text-[11px] font-semibold text-slate-500">{FREE_LABEL[lang]}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            <Field icon={<Tag className="h-4 w-4" />} label={t.hero.search.purpose}>
              <select
                value={purposeIdx}
                onChange={(e) => setPurposeIdx(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value={-1}>{ANY[lang].purpose}</option>
                {t.hero.purposes.map((p, i) => <option key={p} value={i}>{p}</option>)}
              </select>
            </Field>
            <Field icon={<Home className="h-4 w-4" />} label={t.hero.search.type}>
              <select
                value={typeIdx}
                onChange={(e) => setTypeIdx(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value={-1}>{ANY[lang].type}</option>
                {PROPERTY_TYPES[lang].map((p, i) => <option key={p} value={i}>{p}</option>)}
              </select>
            </Field>
            <Field icon={<MapPin className="h-4 w-4" />} label={t.hero.search.location}>
              <select
                value={locationIdx}
                onChange={(e) => setLocationIdx(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value={-1}>{ANY[lang].location}</option>
                {LOCATIONS.map((l, i) => <option key={l} value={i}>{l}</option>)}
              </select>
            </Field>
            <Field icon={<Euro className="h-4 w-4" />} label={PRICE_LABEL[lang]}>
              <select
                value={priceIdx}
                onChange={(e) => setPriceIdx(Number(e.target.value))}
                className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value={-1}>{ANY[lang].price}</option>
                {PRICE_RANGES.map((r, i) => <option key={r.label} value={i}>{r.label}</option>)}
              </select>
            </Field>
            <button onClick={handleSearch} className="btn-primary h-full w-full md:w-auto md:px-8">
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

function Field({ icon, label, children }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100 transition">
      <span className="text-brand-600">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
        {children}
      </div>
    </label>
  );
}
