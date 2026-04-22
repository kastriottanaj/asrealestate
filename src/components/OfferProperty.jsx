import { useState } from "react";
import { Home, Loader2, Send, CheckCircle } from "lucide-react";
import { submitListingRequest } from "../api";
import { useLang } from "../LanguageContext";

const PROPERTY_TYPES = {
  sq: [{ value: "banese", label: "Banesë" }, { value: "penthouse", label: "Penthouse" }, { value: "vile", label: "Vilë" }, { value: "zyre", label: "Zyre" }, { value: "lokal", label: "Lokal" }, { value: "toke", label: "Tokë" }],
  en: [{ value: "banese", label: "Apartment" }, { value: "penthouse", label: "Penthouse" }, { value: "vile", label: "Villa" }, { value: "zyre", label: "Office" }, { value: "lokal", label: "Shop" }, { value: "toke", label: "Land" }],
  de: [{ value: "banese", label: "Wohnung" }, { value: "penthouse", label: "Penthouse" }, { value: "vile", label: "Villa" }, { value: "zyre", label: "Büro" }, { value: "lokal", label: "Laden" }, { value: "toke", label: "Grundstück" }],
};

const COPY = {
  sq: {
    eyebrow: "Listoni pronën tuaj", title: "Ofroni pronën tuaj",
    subtitle: "Keni një pronë për shitje ose qira? Na tregoni detajet — ekipi ynë e vlerëson falas dhe e publikon për mijëra blerës të mundshëm.",
    yourData: "Të dhënat tuaja", propertyDetails: "Detajet e pronës",
    fields: { first: "Emri", last: "Mbiemri", email: "Email", phone: "Telefoni", type: "Lloji i pronës", purpose: "Qëllimi", location: "Lokacioni", area: "Sipërfaqja (m²)", price: "Çmimi (€)", desc: "Përshkrimi" },
    placeholders: { first: "Emri juaj", last: "Mbiemri juaj", phone: "+383 ...", location: "p.sh. Qendër, Prishtinë", area: "p.sh. 85", price: "p.sh. 120000", desc: "Përshkruani pronën — kati, gjendja, veçoritë kryesore..." },
    purposes: [{ value: "shitje", label: "Shitje" }, { value: "qira", label: "Qira" }],
    submit: "Dërgo kërkesën", sending: "Duke dërguar...", free: "Vlerësim falas. Pa asnjë detyrim.",
    successTitle: "Kërkesa u dërgua!", successMsg: "Ekipi ynë do t'ju kontaktojë brenda 24 orësh për të vlerësuar pronën tuaj falas.",
    another: "Dërgo kërkesë tjetër",
  },
  en: {
    eyebrow: "List your property", title: "Offer your property",
    subtitle: "Have a property for sale or rent? Tell us the details — our team will value it for free and publish it to thousands of potential buyers.",
    yourData: "Your details", propertyDetails: "Property details",
    fields: { first: "First name", last: "Last name", email: "Email", phone: "Phone", type: "Property type", purpose: "Purpose", location: "Location", area: "Area (m²)", price: "Price (€)", desc: "Description" },
    placeholders: { first: "Your first name", last: "Your last name", phone: "+383 ...", location: "e.g. City Centre, Prishtina", area: "e.g. 85", price: "e.g. 120000", desc: "Describe the property — floor, condition, key features..." },
    purposes: [{ value: "shitje", label: "For Sale" }, { value: "qira", label: "For Rent" }],
    submit: "Send request", sending: "Sending...", free: "Free valuation. No obligations.",
    successTitle: "Request sent!", successMsg: "Our team will contact you within 24 hours to value your property for free.",
    another: "Send another request",
  },
  de: {
    eyebrow: "Immobilie inserieren", title: "Immobilie anbieten",
    subtitle: "Haben Sie eine Immobilie zum Verkauf oder zur Vermietung? Geben Sie uns die Details — unser Team bewertet sie kostenlos und veröffentlicht sie für Tausende von potenziellen Käufern.",
    yourData: "Ihre Daten", propertyDetails: "Immobiliendetails",
    fields: { first: "Vorname", last: "Nachname", email: "E-Mail", phone: "Telefon", type: "Immobilientyp", purpose: "Zweck", location: "Standort", area: "Fläche (m²)", price: "Preis (€)", desc: "Beschreibung" },
    placeholders: { first: "Ihr Vorname", last: "Ihr Nachname", phone: "+383 ...", location: "z.B. Stadtzentrum, Prishtina", area: "z.B. 85", price: "z.B. 120000", desc: "Beschreiben Sie die Immobilie — Etage, Zustand, Hauptmerkmale..." },
    purposes: [{ value: "shitje", label: "Zum Verkauf" }, { value: "qira", label: "Zur Miete" }],
    submit: "Anfrage senden", sending: "Wird gesendet...", free: "Kostenlose Bewertung. Keine Verpflichtungen.",
    successTitle: "Anfrage gesendet!", successMsg: "Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre Immobilie kostenlos zu bewerten.",
    another: "Weitere Anfrage senden",
  },
};

export default function OfferProperty() {
  const { lang } = useLang();
  const c = COPY[lang];
  const types = PROPERTY_TYPES[lang];

  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", property_type: "banese", property_status: "shitje", location: "", area: "", price: "", description: "" });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitListingRequest({ ...form, area: form.area ? parseInt(form.area) : null, price: form.price ? parseFloat(form.price) : null });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      const msgs = Object.values(err || {}).flat();
      setErrorMsg(msgs[0] || "Ndodhi një gabim. Provoni përsëri.");
    }
  };

  if (status === "success") {
    return (
      <section id="ofroni" className="section bg-slate-50">
        <div className="container-x">
          <div className="max-w-lg mx-auto text-center py-16">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-slate-900">{c.successTitle}</h2>
            <p className="mt-3 text-slate-600">{c.successMsg}</p>
            <button onClick={() => { setStatus("idle"); setForm({ first_name: "", last_name: "", email: "", phone: "", property_type: "banese", property_status: "shitje", location: "", area: "", price: "", description: "" }); }} className="mt-6 btn-primary">
              {c.another}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="ofroni" className="section bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 mb-4">
            <Home className="h-7 w-7 text-brand-600" />
          </div>
          <span className="eyebrow">{c.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{c.title}</h2>
          <p className="mt-4 text-slate-600">{c.subtitle}</p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-soft border border-slate-100 p-6 sm:p-10">
          <h3 className="font-bold text-slate-900 text-lg mb-5 pb-3 border-b border-slate-100">{c.yourData}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label={c.fields.first} placeholder={c.placeholders.first} required value={form.first_name} onChange={update("first_name")} />
            <Input label={c.fields.last} placeholder={c.placeholders.last} required value={form.last_name} onChange={update("last_name")} />
            <Input label={c.fields.email} type="email" placeholder="ju@example.com" required value={form.email} onChange={update("email")} />
            <Input label={c.fields.phone} type="tel" placeholder={c.placeholders.phone} required value={form.phone} onChange={update("phone")} />
          </div>

          <h3 className="font-bold text-slate-900 text-lg mt-8 mb-5 pb-3 border-b border-slate-100">{c.propertyDetails}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">{c.fields.type}</label>
              <select value={form.property_type} onChange={update("property_type")} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none">
                {types.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">{c.fields.purpose}</label>
              <select value={form.property_status} onChange={update("property_status")} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none">
                {c.purposes.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
            <Input label={c.fields.location} placeholder={c.placeholders.location} required value={form.location} onChange={update("location")} />
            <Input label={c.fields.area} type="number" placeholder={c.placeholders.area} value={form.area} onChange={update("area")} />
            <Input label={c.fields.price} type="number" placeholder={c.placeholders.price} value={form.price} onChange={update("price")} />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-slate-800 mb-1.5">{c.fields.desc}</label>
            <textarea rows={4} placeholder={c.placeholders.desc} value={form.description} onChange={update("description")} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none resize-none" />
          </div>

          {status === "error" && <p className="mt-3 text-sm text-red-600 font-medium">{errorMsg}</p>}

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> {c.sending}</> : <><Send className="h-4 w-4" /> {c.submit}</>}
            </button>
            <p className="text-xs text-slate-500">{c.free}</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</span>
      <input {...props} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none" />
    </label>
  );
}
