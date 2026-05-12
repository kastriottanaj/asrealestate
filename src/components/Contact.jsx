import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { submitContact } from "../api";
import { useLang } from "../LanguageContext";
import { lead, contact as trackContact } from "../lib/pixel";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", phone: "",
    interest: "blej", message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitContact(form);
      lead({ content_name: "Contact form", content_category: form.interest });
      setStatus("success");
      setForm({ first_name: "", last_name: "", email: "", phone: "", interest: "blej", message: "" });
    } catch (err) {
      setStatus("error");
      const msgs = Object.values(err || {}).flat();
      setErrorMsg(msgs[0] || t.contact.error);
    }
  };

  const interestValues = ["blej", "shes", "qira-kerkoje", "qira-ofroj", "investim"];

  return (
    <section id="kontakti" className="section bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-slate-600">{t.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={Phone} title={t.contact.cards.phone} value="+383 49 579 992" href="tel:+38349579992" onClick={() => trackContact({ method: "phone" })} />
            <InfoCard icon={MessageCircle} title={t.contact.cards.whatsapp} value={t.contact.cards.whatsappVal} href="https://wa.me/38349579992" onClick={() => trackContact({ method: "whatsapp" })} />
            <InfoCard icon={Mail} title={t.contact.cards.email} value="asrealestaterks@gmail.com" href="mailto:asrealestaterks@gmail.com" onClick={() => trackContact({ method: "email" })} />
            <InfoCard icon={MapPin} title={t.contact.cards.office} value="Hasan Prishtina, Obiliq, Kosovë 15000" />
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-3 bg-white rounded-2xl shadow-soft p-6 sm:p-8 border border-slate-100"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label={t.contact.fields.first} placeholder={t.contact.placeholder.first} required value={form.first_name} onChange={update("first_name")} />
              <Input label={t.contact.fields.last} placeholder={t.contact.placeholder.last} required value={form.last_name} onChange={update("last_name")} />
              <Input label={t.contact.fields.email} type="email" placeholder="ju@example.com" required value={form.email} onChange={update("email")} />
              <Input label={t.contact.fields.phone} type="tel" placeholder="+383 ..." value={form.phone} onChange={update("phone")} />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">{t.contact.fields.interest}</label>
              <select
                value={form.interest}
                onChange={update("interest")}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none"
              >
                {t.contact.interests.map((label, i) => (
                  <option key={interestValues[i]} value={interestValues[i]}>{label}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">{t.contact.fields.message}</label>
              <textarea
                rows={4}
                placeholder={t.contact.placeholder.message}
                required
                value={form.message}
                onChange={update("message")}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
              />
            </div>

            {status === "error" && (
              <p className="mt-3 text-sm text-red-600 font-medium">{errorMsg}</p>
            )}

            <button type="submit" disabled={status === "loading"} className="btn-primary mt-6 w-full sm:w-auto disabled:opacity-60">
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : status === "success" ? (
                t.contact.success
              ) : (
                <><Send className="h-4 w-4" /> {t.contact.submit}</>
              )}
            </button>

            {status === "success" && (
              <p className="mt-3 text-sm text-green-700 font-medium">{t.contact.successMsg}</p>
            )}

            <p className="mt-3 text-xs text-slate-500">{t.contact.privacy}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value, href, onClick }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-slate-100 shadow-soft hover:shadow-card transition"
    >
      <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</div>
        <div className="mt-0.5 font-semibold text-slate-900">{value}</div>
      </div>
    </Tag>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</span>
      <input
        {...props}
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none"
      />
    </label>
  );
}
