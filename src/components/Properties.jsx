import { useState, useEffect, useMemo } from "react";
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Loader2, SlidersHorizontal, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchProperties } from "../api";
import { useLang, useLocalizedHref } from "../LanguageContext";

const FALLBACK_PROPERTIES = [
  { id: 1, title: "Banesë moderne në Qendër", status: "shitje", type: "banese", formatted_price: "€120 000", neighborhood: "Qendër, Prishtinë", bedrooms: 2, bathrooms: 1, area: 75, image_src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Vilë luksoze në Arbëri", status: "shitje", type: "vile", formatted_price: "€280 000", neighborhood: "Arbëri, Prishtinë", bedrooms: 4, bathrooms: 3, area: 220, image_src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Zyrë premium në New Born", status: "qira", type: "zyre", formatted_price: "€800/muaj", neighborhood: "New Born, Prishtinë", bedrooms: 0, bathrooms: 1, area: 60, image_src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Penthouse me pamje panoramike", status: "shitje", type: "penthouse", formatted_price: "€195 000", neighborhood: "Dardania, Prishtinë", bedrooms: 3, bathrooms: 2, area: 130, image_src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Banesë e re në Ulpianë", status: "qira", type: "banese", formatted_price: "€350/muaj", neighborhood: "Ulpianë, Prishtinë", bedrooms: 2, bathrooms: 1, area: 68, image_src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Lokal tregtar në Pejë", status: "shitje", type: "lokal", formatted_price: "€85 000", neighborhood: "Qendër, Pejë", bedrooms: 0, bathrooms: 1, area: 45, image_src: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=800&q=80" },
  { id: 7, title: "Tokë ndërtimore në Fushë Kosovë", status: "shitje", type: "toke", formatted_price: "€45 000", neighborhood: "Fushë Kosovë", bedrooms: 0, bathrooms: 0, area: 500, image_src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
  { id: 8, title: "Banesë 3+1 në Veternik", status: "shitje", type: "banese", formatted_price: "€98 000", neighborhood: "Veternik, Prishtinë", bedrooms: 3, bathrooms: 2, area: 95, image_src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80" },
];

const STATUS_MAP = { 0: "", 1: "shitje", 2: "qira" };
const STATUS_LABEL_MAP = { 0: "", 1: "Shitje", 2: "Qira" };
const STATUS_TAB_INDEX = { shitje: 1, qira: 2 };

// Parse the formatted_price string from the fallback ("€120 000", "€800/muaj") to a number.
function parsePrice(str) {
  if (!str) return null;
  const digits = String(str).replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : null;
}

// Filter a property list against the hero-search criteria. Used to filter the local
// FALLBACK_PROPERTIES (the API already filters server-side, but running this on real
// results too is safe and lets price/location filtering work even if the backend
// doesn't honour every param yet).
function applyClientFilters(list, { status, type, location, priceMin, priceMax }) {
  return list.filter((p) => {
    if (status && p.status && p.status !== status) return false;
    if (type && p.type && p.type !== type) return false;
    if (location) {
      const hay = `${p.neighborhood || ""} ${p.location_display || ""}`.toLowerCase();
      if (!hay.includes(location.toLowerCase())) return false;
    }
    if (priceMin || priceMax) {
      const num = typeof p.price === "number" ? p.price : parsePrice(p.formatted_price);
      if (num == null) return true; // can't tell — don't drop it
      if (priceMin && num < Number(priceMin)) return false;
      if (priceMax && num > Number(priceMax)) return false;
    }
    return true;
  });
}

const STATUS_LABEL = {
  sq: { shitje: "Shitje", qira: "Qira" },
  en: { shitje: "For Sale", qira: "For Rent" },
  de: { shitje: "Kauf", qira: "Miete" },
};
const TYPE_LABEL = {
  sq: { banese: "Banesë", shtepi: "Shtëpi", penthouse: "Penthouse", vile: "Vilë", zyre: "Zyre", objekt: "Objekt", lokal: "Lokal", biznes: "Biznes", depo: "Depo", toke: "Tokë" },
  en: { banese: "Apartment", shtepi: "House", penthouse: "Penthouse", vile: "Villa", zyre: "Office", objekt: "Building", lokal: "Shop", biznes: "Business", depo: "Warehouse", toke: "Land" },
  de: { banese: "Wohnung", shtepi: "Haus", penthouse: "Penthouse", vile: "Villa", zyre: "Büro", objekt: "Gebäude", lokal: "Laden", biznes: "Geschäft", depo: "Lager", toke: "Grundstück" },
};

const BEDROOMS = ["Të gjitha", "1", "2", "3", "4", "5+"];

export default function Properties() {
  const { t } = useLang();
  const href = useLocalizedHref();
  const tabs = t.properties.tabs;

  const [searchParams, setSearchParams] = useSearchParams();
  const urlStatus = searchParams.get("status") || "";
  const urlType = searchParams.get("type") || "";
  const urlLocation = searchParams.get("location") || "";
  const urlPriceMin = searchParams.get("priceMin") || "";
  const urlPriceMax = searchParams.get("priceMax") || "";

  const [tab, setTab] = useState(STATUS_TAB_INDEX[urlStatus] ?? 0);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Detailed filters
  const [ownership, setOwnership] = useState(null);
  const [bedrooms, setBedrooms] = useState("Të gjitha");
  const [priceMin, setPriceMin] = useState(urlPriceMin);
  const [priceMax, setPriceMax] = useState(urlPriceMax);

  // Keep tab + price in sync if the URL params change (e.g. user re-submits the hero search).
  useEffect(() => {
    setTab(STATUS_TAB_INDEX[urlStatus] ?? 0);
    setPriceMin(urlPriceMin);
    setPriceMax(urlPriceMax);
  }, [urlStatus, urlPriceMin, urlPriceMax]);

  // When the user clicks a status tab, mirror it into the URL so refresh/back works.
  const handleTabClick = (i) => {
    setTab(i);
    const next = new URLSearchParams(searchParams);
    const code = STATUS_MAP[i];
    if (code) next.set("status", code);
    else next.delete("status");
    setSearchParams(next, { replace: true });
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    const filters = { status: STATUS_MAP[tab] };
    if (urlType) filters.type = urlType;
    if (urlLocation) filters.location = urlLocation;
    if (priceMin) filters.price_min = priceMin;
    if (priceMax) filters.price_max = priceMax;
    if (ownership !== null) filters.has_ownership_doc = ownership;
    if (bedrooms !== "Të gjitha") {
      if (bedrooms === "5+") filters.bedrooms_min = 5;
      else filters.bedrooms = bedrooms;
    }
    fetchProperties(filters)
      .then((data) => setProperties(applyClientFilters(data, { status: filters.status, type: urlType, location: urlLocation, priceMin, priceMax })))
      .catch(() => {
        setProperties(applyClientFilters(FALLBACK_PROPERTIES, { status: filters.status, type: urlType, location: urlLocation, priceMin, priceMax }));
      })
      .finally(() => setLoading(false));
  }, [tab, bedrooms, ownership, urlType, urlLocation, priceMin, priceMax]);

  const activeUrlFilters = useMemo(() => {
    const out = [];
    if (urlType) out.push(urlType);
    if (urlLocation) out.push(urlLocation);
    if (priceMin || priceMax) {
      const min = priceMin ? `€${Number(priceMin).toLocaleString("en-US")}` : "0";
      const max = priceMax ? `€${Number(priceMax).toLocaleString("en-US")}` : "∞";
      out.push(`${min} – ${max}`);
    }
    return out;
  }, [urlType, urlLocation, priceMin, priceMax]);

  const clearUrlFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  const resetFilters = () => {
    setOwnership(null);
    setBedrooms("Të gjitha");
    setPriceMin("");
    setPriceMax("");
  };

  const activeFiltersCount = [
    ownership !== null,
    bedrooms !== "Të gjitha",
    priceMin !== "",
    priceMax !== "",
  ].filter(Boolean).length;

  return (
    <section id="prona" className="section">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">{t.properties.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t.properties.title}
            </h2>
            <p className="mt-4 text-slate-600">{t.properties.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Status tabs */}
            <div className="inline-flex rounded-xl bg-slate-100 p-1">
              {tabs.map((tabLabel, i) => (
                <button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  className={`px-5 py-2 text-sm font-semibold rounded-lg transition ${
                    tab === i ? "bg-white text-brand-700 shadow-soft" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tabLabel}
                </button>
              ))}
            </div>

            {/* Filtra button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition ${
                showFilters || activeFiltersCount > 0
                  ? "bg-brand-600 text-white border-brand-600"
                  : "bg-white text-slate-700 border-slate-200 hover:border-brand-400"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtrat
              {activeFiltersCount > 0 && (
                <span className="bg-white text-brand-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Hero-search filter chips (from URL) */}
        {activeUrlFilters.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Filtra aktivë:
            </span>
            {activeUrlFilters.map((f) => (
              <span key={f} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                {f}
              </span>
            ))}
            <button
              onClick={clearUrlFilters}
              className="ml-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-500 transition"
            >
              <X className="h-3.5 w-3.5" /> Pastro
            </button>
          </div>
        )}

        {/* Filter panel */}
        {showFilters && (
          <div className="mt-4 bg-white rounded-2xl border border-slate-100 shadow-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-slate-900">Filtra të detajuar</h4>
              <div className="flex gap-2">
                {activeFiltersCount > 0 && (
                  <button onClick={resetFilters} className="text-sm text-slate-500 hover:text-red-500 transition">
                    Fshi të gjitha
                  </button>
                )}
                <button onClick={() => setShowFilters(false)} className="text-slate-400 hover:text-slate-700">
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fletë poseduese */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Fletë poseduese</p>
                <div className="flex gap-2">
                  {[{ label: "Me fletë", val: true }, { label: "Pa fletë", val: false }].map((o) => (
                    <button
                      key={String(o.val)}
                      onClick={() => setOwnership(ownership === o.val ? null : o.val)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
                        ownership === o.val ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dhoma gjumi */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Numri i dhomave</p>
                <div className="flex flex-wrap gap-2">
                  {BEDROOMS.map((b) => (
                    <button
                      key={b}
                      onClick={() => setBedrooms(b)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold border transition ${
                        bedrooms === b ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Diapazoni i çmimeve */}
              <div className="sm:col-span-2 lg:col-span-3">
                <p className="text-sm font-semibold text-slate-700 mb-2">Diapazoni i çmimeve (€)</p>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="Min. çmimi"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                  <span className="text-slate-400 font-bold shrink-0">—</span>
                  <input
                    type="number"
                    placeholder="Max. çmimi"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {loading && (
          <div className="mt-12 flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 text-brand-600 animate-spin" />
          </div>
        )}

        {error && (
          <div className="mt-12 text-center py-12 text-slate-500">{error}</div>
        )}

        {!loading && !error && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <PropertyCard key={p.id} p={p} />
            ))}
          </div>
        )}

        <div className="mt-14 rounded-2xl bg-slate-50 border border-slate-100 p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {t.properties.notFound}
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">{t.properties.notFoundSub}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to={href("/kontakti")} className="btn-primary">
              {t.properties.cta1} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/38349942941" target="_blank" rel="noreferrer" className="btn-outline">
              {t.properties.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ p }) {
  const { lang } = useLang();
  const href = useLocalizedHref();
  const imageSrc = p.image_src || p.image_url || '';
  const statusLabel = STATUS_LABEL[lang]?.[p.status] ?? p.status_display;
  const typeLabel = TYPE_LABEL[lang]?.[p.type] ?? p.type_display;
  const Wrapper = p.slug ? Link : 'article';
  const wrapperProps = p.slug
    ? { to: href(`/prona/${p.slug}`), className: "group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition block" }
    : { className: "group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition" };
  return (
    <Wrapper {...wrapperProps}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={imageSrc} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="rounded-full bg-brand-600 text-white text-xs font-bold px-3 py-1">{statusLabel}</span>
          <span className="rounded-full bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1">{typeLabel}</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white font-display font-extrabold text-2xl">{p.formatted_price}</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 line-clamp-1">{p.title}</h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-slate-500 text-sm">
          <MapPin className="h-4 w-4 text-brand-600" />
          {p.neighborhood || p.location_display}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-600">
          {p.bedrooms > 0 && <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-brand-600" /> {p.bedrooms}</span>}
          {p.bathrooms > 0 && <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-brand-600" /> {p.bathrooms}</span>}
          <span className="flex items-center gap-1.5"><Maximize2 className="h-4 w-4 text-brand-600" /> {p.area} m²</span>
        </div>
      </div>
    </Wrapper>
  );
}
