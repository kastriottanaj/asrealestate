import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontakti" className="section bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Konsultim falas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Një bisedë. Zero detyrime.
          </h2>
          <p className="mt-4 text-slate-600">
            Na tregoni çfarë po kërkoni — shtëpinë tuaj të parë, një banesë me qira,
            ose mundësinë e duhur për të investuar. Ne ju dëgjojmë, ju këshillojmë,
            dhe ju nuk paguani asgjë për bisedën e parë.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <InfoCard
              icon={Phone}
              title="Telefoni"
              value="+383 49 579 992"
              href="tel:+38349579992"
            />
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              value="Na shkruani tani"
              href="https://wa.me/38349579992"
            />
            <InfoCard
              icon={Mail}
              title="Email"
              value="info@ascapital-re.com"
              href="mailto:info@ascapital-re.com"
            />
            <InfoCard
              icon={MapPin}
              title="Zyra"
              value="Hasan Prishtina, Obiliq, Kosovë 15000"
            />
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-3 bg-white rounded-2xl shadow-soft p-6 sm:p-8 border border-slate-100"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Emri" placeholder="Emri juaj" required />
              <Input label="Mbiemri" placeholder="Mbiemri juaj" required />
              <Input
                label="Email"
                type="email"
                placeholder="ju@example.com"
                required
              />
              <Input label="Telefoni" type="tel" placeholder="+383 ..." />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Interesim
              </label>
              <select className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none">
                <option>Dua të blej një pronë</option>
                <option>Dua të shes një pronë</option>
                <option>Kërkoj me qira</option>
                <option>Kam pronë për qira</option>
                <option>Konsultim për investim</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                Mesazhi
              </label>
              <textarea
                rows={4}
                placeholder="Na tregoni se çfarë kërkoni..."
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
              />
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {sent ? "Mesazhi u dërgua ✓" : (
                <>
                  Dërgo mesazhin <Send className="h-4 w-4" />
                </>
              )}
            </button>
            <p className="mt-3 text-xs text-slate-500">
              Përgjigjemi brenda 24 orësh, zakonisht brenda 2. Informacionet tuaja
              mbesin private — nuk i ndajmë me palë të treta, asnjëherë.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, value, href }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-slate-100 shadow-soft hover:shadow-card transition"
    >
      <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
          {title}
        </div>
        <div className="mt-0.5 font-semibold text-slate-900">{value}</div>
      </div>
    </Tag>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-slate-800 mb-1.5">
        {label}
      </span>
      <input
        {...props}
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none"
      />
    </label>
  );
}
