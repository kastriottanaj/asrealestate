import { useState } from "react";
import { Home, Loader2, Send, CheckCircle } from "lucide-react";
import { submitListingRequest } from "../api";

const PROPERTY_TYPES = [
  { value: "banese", label: "Banesë" },
  { value: "penthouse", label: "Penthouse" },
  { value: "vile", label: "Vilë" },
  { value: "zyre", label: "Zyre" },
  { value: "lokal", label: "Lokal" },
  { value: "toke", label: "Tokë" },
];

export default function OfferProperty() {
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", phone: "",
    property_type: "banese", property_status: "shitje",
    location: "", area: "", price: "", description: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitListingRequest({
        ...form,
        area: form.area ? parseInt(form.area) : null,
        price: form.price ? parseFloat(form.price) : null,
      });
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
            <h2 className="text-2xl font-extrabold text-slate-900">Kërkesa u dërgua!</h2>
            <p className="mt-3 text-slate-600">
              Ekipi ynë do t'ju kontaktojë brenda 24 orësh për të vlerësuar pronën tuaj falas.
            </p>
            <button
              onClick={() => { setStatus("idle"); setForm({ first_name: "", last_name: "", email: "", phone: "", property_type: "banese", property_status: "shitje", location: "", area: "", price: "", description: "" }); }}
              className="mt-6 btn-primary"
            >
              Dërgo kërkesë tjetër
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
          <span className="eyebrow">Listoni pronën tuaj</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ofroni pronën tuaj
          </h2>
          <p className="mt-4 text-slate-600">
            Keni një pronë për shitje ose qira? Na tregoni detajet — ekipi ynë e vlerëson falas
            dhe e publikon për mijëra blerës të mundshëm.
          </p>
        </div>

        <form onSubmit={submit} className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-soft border border-slate-100 p-6 sm:p-10">
          <h3 className="font-bold text-slate-900 text-lg mb-5 pb-3 border-b border-slate-100">Të dhënat tuaja</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Emri" placeholder="Emri juaj" required value={form.first_name} onChange={update("first_name")} />
            <Input label="Mbiemri" placeholder="Mbiemri juaj" required value={form.last_name} onChange={update("last_name")} />
            <Input label="Email" type="email" placeholder="ju@example.com" required value={form.email} onChange={update("email")} />
            <Input label="Telefoni" type="tel" placeholder="+383 ..." required value={form.phone} onChange={update("phone")} />
          </div>

          <h3 className="font-bold text-slate-900 text-lg mt-8 mb-5 pb-3 border-b border-slate-100">Detajet e pronës</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">Lloji i pronës</label>
              <select value={form.property_type} onChange={update("property_type")} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none">
                {PROPERTY_TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">Qëllimi</label>
              <select value={form.property_status} onChange={update("property_status")} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none">
                <option value="shitje">Shitje</option>
                <option value="qira">Qira</option>
              </select>
            </div>
            <Input label="Lokacioni" placeholder="p.sh. Qendër, Prishtinë" required value={form.location} onChange={update("location")} />
            <Input label="Sipërfaqja (m²)" type="number" placeholder="p.sh. 85" value={form.area} onChange={update("area")} />
            <Input label="Çmimi (€)" type="number" placeholder="p.sh. 120000" value={form.price} onChange={update("price")} />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-slate-800 mb-1.5">Përshkrimi</label>
            <textarea
              rows={4}
              placeholder="Përshkruani pronën — kati, gjendja, veçoritë kryesore..."
              value={form.description}
              onChange={update("description")}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
            />
          </div>

          {status === "error" && (
            <p className="mt-3 text-sm text-red-600 font-medium">{errorMsg}</p>
          )}

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
              {status === "loading" ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Duke dërguar...</>
              ) : (
                <><Send className="h-4 w-4" /> Dërgo kërkesën</>
              )}
            </button>
            <p className="text-xs text-slate-500">Vlerësim falas. Pa asnjë detyrim.</p>
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
