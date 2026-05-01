import { ArrowRight, MessageCircle, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalizedHref } from "../LanguageContext";

export default function BigCta({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryPath = "/kontakti",
  whatsappLabel = "WhatsApp",
  whatsappHref = "https://wa.me/38349579992",
  phoneLabel = "+383 49 579 992",
  phoneHref = "tel:+38349579992",
  addressLabel = "Hasan Prishtina, Obiliq",
  reassurance,
  className = "",
}) {
  const href = useLocalizedHref();
  return (
    <section className={`section bg-gradient-to-br from-slate-900 via-brand-900 to-brand-700 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-400 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-600 blur-3xl" />
      </div>
      <div className="container-x relative grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          {eyebrow && (
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-200">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg text-white/85 max-w-xl">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={href(primaryPath)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-card hover:bg-brand-50 transition">
              {primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition"
            >
              <MessageCircle className="h-4 w-4" />
              {whatsappLabel}
            </a>
          </div>
          {reassurance && (
            <p className="mt-5 text-sm text-brand-100/90">{reassurance}</p>
          )}
        </div>
        <div className="grid gap-3">
          <a href={phoneHref} className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4 hover:bg-white/15 transition">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-200">Telefon</div>
              <div className="font-bold text-white">{phoneLabel}</div>
            </div>
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4 hover:bg-white/15 transition">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-200">WhatsApp</div>
              <div className="font-bold text-white">{phoneLabel}</div>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/15 p-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-white">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-brand-200">Zyra</div>
              <div className="font-bold text-white">{addressLabel}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
