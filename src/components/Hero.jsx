import { Search, MapPin, Home, Tag } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="ballina"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
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
            Pasuri të paluajtshme • Investime • Besueshmëri
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Gjej shtëpinë e ëndrrave tuaja
            <span className="block text-brand-200">në Kosovë.</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Nga banesa juaj e parë deri te investimi që ju siguron të ardhmen —
            ju gjejmë pronën e duhur, me çmim të drejtë dhe kontrata të pastra.
            Pa humbje kohe. Pa surpriza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#prona" className="btn-primary">
              Shiko pronat
            </a>
            <a
              href="#kontakti"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
            >
              Konsultim falas
            </a>
          </div>
        </div>

        <div className="mt-14 max-w-5xl bg-white rounded-2xl shadow-2xl p-3 sm:p-4">
          <div className="px-3 pt-2 pb-1 flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
              Gjej pronën që ju përshtatet
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              Konsultimi i parë është gjithmonë falas
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            <Field
              icon={<Tag className="h-4 w-4" />}
              label="Qëllimi"
              options={["Shitje", "Qira", "Investim"]}
            />
            <Field
              icon={<Home className="h-4 w-4" />}
              label="Lloji i pronës"
              options={["Banesë", "Vilë", "Zyre", "Lokal", "Tokë"]}
            />
            <Field
              icon={<MapPin className="h-4 w-4" />}
              label="Lokacioni"
              options={[
                "Prishtinë",
                "Obiliq",
                "Fushë Kosovë",
                "Lipjan",
                "Graçanicë",
              ]}
            />
            <button className="btn-primary h-full w-full md:w-auto md:px-8">
              <Search className="h-4 w-4" />
              Gjej pronën
            </button>
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {[
            ["500+", "Prona të shitura"],
            ["1200+", "Klientë të kënaqur"],
            ["8 vite", "Përvojë në treg"],
            ["50+", "Partnerë investitorë"],
          ].map(([v, l]) => (
            <div
              key={l}
              className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-4"
            >
              <dt className="text-white text-2xl font-extrabold font-display">
                {v}
              </dt>
              <dd className="text-white/80 text-xs mt-1">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Field({ icon, label, options }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 cursor-pointer hover:bg-slate-100 transition">
      <span className="text-brand-600">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </div>
        <select className="w-full bg-transparent text-sm font-semibold text-slate-900 focus:outline-none cursor-pointer">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    </label>
  );
}
