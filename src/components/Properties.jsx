import { useState, useEffect } from "react";
import { Bed, Bath, Maximize2, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { fetchProperties } from "../api";

const STATUS_MAP = { "Të gjitha": "", "Shitje": "shitje", "Qira": "qira" };
const tabs = ["Të gjitha", "Shitje", "Qira"];

export default function Properties() {
  const [tab, setTab] = useState("Të gjitha");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProperties({ status: STATUS_MAP[tab] })
      .then(setProperties)
      .catch(() => setError("Nuk mund të ngarkohen pronat. Provoni përsëri."))
      .finally(() => setLoading(false));
  }, [tab]);

  return (
    <section id="prona" className="section">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Prona të përzgjedhura</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pronat që po kërkon tregu — përpara se të zhduken
            </h2>
            <p className="mt-4 text-slate-600">
              Një përzgjedhje e kujdesshme e pronave më të kërkuara në Prishtinë
              dhe rreth Kosovës — të verifikuara ligjërisht dhe teknikisht nga
              ekipi ynë. Pa agjentë ndërmjetës, pa surpriza.
            </p>
          </div>
          <div className="inline-flex rounded-xl bg-slate-100 p-1 self-start">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition ${
                  tab === t
                    ? "bg-white text-brand-700 shadow-soft"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

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
            Nuk e gjetët pronën e duhur?
          </h3>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Na tregoni se çfarë po kërkoni — ekipi ynë ju dërgon një listë
            personale me prona që ju përshtaten, brenda 24 orësh.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#kontakti" className="btn-primary">
              Kërko pronën time personale <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://wa.me/38349579992" target="_blank" rel="noreferrer" className="btn-outline">
              Më shkruaj në WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ p }) {
  const imageSrc = p.image_src || p.image_url || '';
  const priceSuffix = p.status === "qira" ? "/muaj" : "";

  return (
    <article className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="rounded-full bg-brand-600 text-white text-xs font-bold px-3 py-1">
            {p.status_display}
          </span>
          <span className="rounded-full bg-white/95 text-slate-800 text-xs font-semibold px-3 py-1">
            {p.type_display}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white font-display font-extrabold text-2xl">
            {p.formatted_price}
            <span className="text-sm font-semibold opacity-80">{priceSuffix}</span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg text-slate-900 line-clamp-1">{p.title}</h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-slate-500 text-sm">
          <MapPin className="h-4 w-4 text-brand-600" />
          {p.neighborhood || p.location_display}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-600">
          {p.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-brand-600" /> {p.bedrooms}
            </span>
          )}
          {p.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-brand-600" /> {p.bathrooms}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-brand-600" /> {p.area} m²
          </span>
        </div>
      </div>
    </article>
  );
}
