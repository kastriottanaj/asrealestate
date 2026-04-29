import { useState, useEffect } from "react";
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Loader2, SlidersHorizontal, X } from "lucide-react";
import { fetchProperties } from "../api";
import { useLang } from "../LanguageContext";

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
const FURNISHING = ["Të gjitha", "Salloni", "Dhoma gjumi", "Kuzhina", "Banjo", "Pa mobilim"];

export default function Properties() {
  const { t, lang } = useLang();
  const tabs = t.properties.tabs;

  const [tab, setTab] = useState(0);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  // Detailed filters
  const [ownership, setOwnership] = useState(null);
  const [bedrooms, setBedrooms] = useState("Të gjitha");
  const [furnishing, setFurnishing] = useState("Të gjitha");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    const filters = { status: STATUS_MAP[tab] };
    if (bedrooms !== "Të gjitha") {
      if (bedrooms === "5+") filters.bedrooms_min = 5;
      else filters.bedrooms = bedrooms;
    }
    fetchProperties(filters)
      .then(setProperties)
      .catch(() => {
        const label = STATUS_LABEL_MAP[tab];
        const filtered = label
          ? FALLBACK_PROPERTIES.filter((p) => p.status_display === label)
          : FALLBACK_PROPERTIES;
        setProperties(filtered);
      })
      .finally(() => setLoading(false));
  }, [tab, bedrooms]);

  const resetFilters = () => {
    setOwnership(null);
    setBedrooms("Të gjitha");
    setFurnishing("Të gjitha");
    setPriceMin("");
    setPriceMax("");
  };

  const activeFiltersCount = [
    ownership !== null,
    bedrooms !== "Të gjitha",
    furnishing !== "Të gjitha",
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
                  onClick={() => setTab(i)}
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

              {/* Mobilimi */}
              <div>
                <p className="text-sm font-semibold text-slate-700 mb-2">Mobilimi</p>
                <div className="flex flex-wrap gap-2">
                  {FURNISHING.map((f) => (
                    <button
                      key={f}
                      onClick={() => setFurnishing(f)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold border transition ${
                        furnishing === f ? "bg-slate-900 text-white border-slate-900" : "border-slate-200 text-slate-600 hover:border-slate-400"
                      }`}
                    >
                      {f}
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
            <a href="#kontakti" className="btn-primary">
              {t.properties.cta1} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/38349579992" target="_blank" rel="noreferrer" className="btn-outline">
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
  const imageSrc = p.image_src || p.image_url || '';
  const statusLabel = STATUS_LABEL[lang]?.[p.status] ?? p.status_display;
  const typeLabel = TYPE_LABEL[lang]?.[p.type] ?? p.type_display;
  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition">
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
    </article>
  );
}
