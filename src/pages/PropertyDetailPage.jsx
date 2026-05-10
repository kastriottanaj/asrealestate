import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Bed, Bath, Maximize2, MapPin, Phone, MessageCircle,
  ChevronLeft, ChevronRight, X, ArrowLeft, ShieldCheck,
  Loader2, Send, CheckCircle, ArrowRight,
} from "lucide-react";
import { fetchProperty, fetchSimilarProperties, submitContact } from "../api";
import { useLang, useLocalizedHref } from "../LanguageContext";
import Seo from "../components/Seo";
import { breadcrumbJsonLd, propertyProductJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";
import { lead, contact as trackContact, viewContent } from "../lib/pixel";

const COPY = {
  sq: {
    home: "Ballina",
    properties: "Prona",
    backToList: "Kthehu te lista e pronave",
    notFoundTitle: "Kjo pronë nuk është më aktive",
    notFoundDesc: "Mund të jetë shitur, dhënë me qira ose çpublikuar nga listat tona. Shihni pronat aktuale që përshtaten me kriteret e juaja.",
    notFoundCta: "Shih të gjitha pronat aktive",
    statusLabel: { shitje: "Shitje", qira: "Qira" },
    typeLabel: { banese: "Banesë", shtepi: "Shtëpi", penthouse: "Penthouse", vile: "Vilë", zyre: "Zyre", objekt: "Objekt", lokal: "Lokal", biznes: "Biznes", depo: "Depo", toke: "Tokë" },
    stats: { area: "m²", bedrooms: "dhoma gjumi", bathrooms: "banjo", ownership: "Fletë poseduese" },
    descriptionTitle: "Përshkrimi i pronës",
    descriptionEmpty: "Detajet e plota i ndajmë gjatë konsultimit. Na shkruani dhe ekipi do t'ju përgjigjet brenda 1–2 orësh në orarin e punës.",
    trustEyebrow: "Çfarë verifikojmë",
    trustTitle: "Pa befasi pas blerjes",
    trustItems: [
      { title: "Fletë poseduese e verifikuar", desc: "Pronari aktual, sipërfaqja reale dhe çdo barrë në kadastër." },
      { title: "Çmim sipas kompeve të lagjes", desc: "8 vite njohje tregu — paguani vlerën e drejtë, asnjë euro më shumë." },
      { title: "Kontratë e rishikuar", desc: "Kontrata, noteri dhe regjistrimi — koordinuar nga ekipi ynë ligjor." },
      { title: "Vlerësim falas para vizitës", desc: "Konsultimi i parë është gjithmonë falas, pa angazhim." },
    ],
    formEyebrow: "Bisedoni me agjentin",
    formTitle: "Konsultim falas për këtë pronë",
    formSubtitle: "Ekipi ynë ju kontakton brenda 1–2 orësh me përgjigje konkrete. Pa angazhim, pa kosto.",
    fields: { name: "Emri i plotë", email: "Email", phone: "Telefoni", message: "Mesazhi juaj" },
    placeholders: { name: "Emri dhe mbiemri", email: "ju@example.com", phone: "+383 ..." },
    submit: "Dërgo mesazhin",
    sending: "Duke dërguar...",
    success: "Mesazhi u dërgua!",
    successMsg: "Faleminderit. Ekipi do t'ju kontaktojë brenda 1–2 orësh në orarin e punës.",
    errorDefault: "Ndodhi një gabim. Provoni përsëri ose na shkruani në WhatsApp.",
    similar: "Prona të ngjashme",
    similarSub: "Të zgjedhura nga ekipi sipas tipit dhe lagjes",
    sticky: { whatsapp: "WhatsApp", call: "Telefononi" },
    prefill: (title, url) => `Përshëndetje, jam i interesuar për pronën "${title}" (${url}). Mund të më kontaktoni ju lutem?`,
  },
  en: {
    home: "Home",
    properties: "Properties",
    backToList: "Back to property list",
    notFoundTitle: "This property is no longer active",
    notFoundDesc: "It may have been sold, rented, or removed from our listings. See current active properties that match your criteria.",
    notFoundCta: "See all active properties",
    statusLabel: { shitje: "For Sale", qira: "For Rent" },
    typeLabel: { banese: "Apartment", shtepi: "House", penthouse: "Penthouse", vile: "Villa", zyre: "Office", objekt: "Building", lokal: "Shop", biznes: "Business", depo: "Warehouse", toke: "Land" },
    stats: { area: "m²", bedrooms: "bedrooms", bathrooms: "bathrooms", ownership: "Title deed" },
    descriptionTitle: "Property description",
    descriptionEmpty: "We share full details during the consultation. Send us a message and our team will reply within 1–2 hours during business hours.",
    trustEyebrow: "What we verify",
    trustTitle: "No surprises after purchase",
    trustItems: [
      { title: "Verified title deed", desc: "Current owner, real surface area, any encumbrances in the cadastre." },
      { title: "Fair neighbourhood price", desc: "8 years of market knowledge — you pay fair value, not a euro more." },
      { title: "Reviewed contract", desc: "Contract, notary and registration — coordinated by our legal team." },
      { title: "Free assessment before viewing", desc: "First consultation is always free, no commitment." },
    ],
    formEyebrow: "Talk to the agent",
    formTitle: "Free consultation for this property",
    formSubtitle: "Our team will get back to you within 1–2 hours with specific answers. No commitment, no cost.",
    fields: { name: "Full name", email: "Email", phone: "Phone", message: "Your message" },
    placeholders: { name: "First and last name", email: "you@example.com", phone: "+383 ..." },
    submit: "Send message",
    sending: "Sending...",
    success: "Message sent!",
    successMsg: "Thank you. Our team will reach out within 1–2 hours during business hours.",
    errorDefault: "Something went wrong. Please try again or message us on WhatsApp.",
    similar: "Similar properties",
    similarSub: "Hand-picked by our team based on type and area",
    sticky: { whatsapp: "WhatsApp", call: "Call" },
    prefill: (title, url) => `Hello, I'm interested in the property "${title}" (${url}). Could you please get in touch?`,
  },
  de: {
    home: "Startseite",
    properties: "Immobilien",
    backToList: "Zurück zur Immobilienliste",
    notFoundTitle: "Diese Immobilie ist nicht mehr aktiv",
    notFoundDesc: "Sie wurde möglicherweise verkauft, vermietet oder aus unseren Listings entfernt. Aktuelle aktive Objekte, die zu Ihren Kriterien passen.",
    notFoundCta: "Alle aktiven Immobilien ansehen",
    statusLabel: { shitje: "Zum Verkauf", qira: "Zur Miete" },
    typeLabel: { banese: "Wohnung", shtepi: "Haus", penthouse: "Penthouse", vile: "Villa", zyre: "Büro", objekt: "Gebäude", lokal: "Laden", biznes: "Geschäft", depo: "Lager", toke: "Grundstück" },
    stats: { area: "m²", bedrooms: "Zimmer", bathrooms: "Bäder", ownership: "Grundbuchauszug" },
    descriptionTitle: "Beschreibung der Immobilie",
    descriptionEmpty: "Vollständige Details teilen wir in der Beratung. Schreiben Sie uns — unser Team antwortet innerhalb von 1–2 Stunden zu Bürozeiten.",
    trustEyebrow: "Was wir prüfen",
    trustTitle: "Keine Überraschungen nach dem Kauf",
    trustItems: [
      { title: "Geprüfter Grundbuchauszug", desc: "Aktueller Eigentümer, reale Fläche und alle Belastungen im Kataster." },
      { title: "Fairer Quartiers-Preis", desc: "8 Jahre Marktkenntnis — Sie zahlen fairen Wert, keinen Euro mehr." },
      { title: "Geprüfter Vertrag", desc: "Vertrag, Notar und Eintragung — von unserem Rechtsteam koordiniert." },
      { title: "Kostenlose Bewertung vor der Besichtigung", desc: "Erstberatung ist immer kostenlos, ohne Verpflichtung." },
    ],
    formEyebrow: "Mit dem Makler sprechen",
    formTitle: "Kostenlose Beratung zu dieser Immobilie",
    formSubtitle: "Unser Team meldet sich innerhalb von 1–2 Stunden mit konkreten Antworten. Unverbindlich, kostenlos.",
    fields: { name: "Vollständiger Name", email: "E-Mail", phone: "Telefon", message: "Ihre Nachricht" },
    placeholders: { name: "Vor- und Nachname", email: "sie@example.com", phone: "+383 ..." },
    submit: "Nachricht senden",
    sending: "Wird gesendet...",
    success: "Nachricht gesendet!",
    successMsg: "Vielen Dank. Unser Team meldet sich innerhalb von 1–2 Stunden zu Bürozeiten.",
    errorDefault: "Etwas ist schiefgelaufen. Bitte erneut versuchen oder per WhatsApp schreiben.",
    similar: "Ähnliche Immobilien",
    similarSub: "Von unserem Team nach Typ und Lage ausgewählt",
    sticky: { whatsapp: "WhatsApp", call: "Anrufen" },
    prefill: (title, url) => `Hallo, ich interessiere mich für die Immobilie "${title}" (${url}). Können Sie mich bitte kontaktieren?`,
  },
};

const AGENT_PHONE = "+38349579992";
const AGENT_PHONE_DISPLAY = "+383 49 579 992";

function cloudinaryTransform(url, transforms) {
  if (!url || typeof url !== "string") return url;
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  return url.replace("/upload/", `/upload/${transforms}/`);
}

function getImageUrls(property) {
  const fromImages = (property.images || []).map((i) => i.url).filter(Boolean);
  if (fromImages.length > 0) return fromImages;
  const fallback = property.image_src || property.image_url;
  return fallback ? [fallback] : [];
}

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const { lang } = useLang();
  const href = useLocalizedHref();
  const c = COPY[lang] || COPY.sq;

  const [property, setProperty] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    setProperty(null);
    setSimilar([]);

    fetchProperty(slug)
      .then((data) => {
        if (cancelled) return;
        setProperty(data);
        setLoading(false);
        fetchSimilarProperties(slug).then((s) => {
          if (!cancelled) setSimilar(s);
        });
      })
      .catch((err) => {
        if (cancelled) return;
        setLoading(false);
        if (err.notFound) setNotFound(true);
      });

    return () => { cancelled = true; };
  }, [slug]);

  if (loading) return <DetailSkeleton />;
  if (notFound || !property) return <NotFoundState c={c} backHref={href("/prona")} />;

  return <DetailContent property={property} similar={similar} c={c} lang={lang} />;
}

function DetailContent({ property, similar, c, lang }) {
  const href = useLocalizedHref();
  const images = getImageUrls(property);
  const statusLabel = c.statusLabel[property.status] || property.status_display;
  const typeLabel = c.typeLabel[property.type] || property.type_display;
  const detailUrl = typeof window !== "undefined"
    ? `${window.location.origin}${href(`/prona/${property.slug}`)}`
    : "";
  const prefilledMessage = c.prefill(property.title, detailUrl);
  const whatsappHref = `https://wa.me/38349579992?text=${encodeURIComponent(prefilledMessage)}`;
  const interestForStatus = property.status === "qira" ? "qira-kerkoje" : "blej";

  useEffect(() => {
    viewContent({
      content_ids: [property.slug],
      content_name: property.title,
      content_type: "product",
      content_category: property.type,
      value: parseFloat(property.price),
      currency: "EUR",
    });
  }, [property.slug, property.title, property.type, property.price]);

  const seoTitle = `${property.title} — ${property.formatted_price}`;
  const seoDescription = (property.description?.trim().slice(0, 160))
    || `${property.title} — ${property.neighborhood}, ${property.area} m². ${property.formatted_price}. Verifikim ligjor falas, kontratë e rishikuar nga ekipi ynë.`;
  const ogImage = images[0] || undefined;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: c.home, url: withLang("/", lang) },
      { name: c.properties, url: withLang("/prona", lang) },
      { name: property.title, url: withLang(`/prona/${property.slug}`, lang) },
    ]),
    propertyProductJsonLd(property, lang),
  ];

  const trackPhone = (source) => trackContact({ method: "phone", source, content_ids: [property.slug] });
  const trackWhatsapp = (source) => trackContact({ method: "whatsapp", source, content_ids: [property.slug] });

  return (
    <>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={`/prona/${property.slug}`}
        image={ogImage}
        lang={lang}
        ogType="article"
        jsonLd={jsonLd}
      />
      <article className="pt-24 pb-32 md:pb-20">
        <div className="container-x">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-6 flex items-center flex-wrap gap-1">
            <Link to={href("/")} className="hover:text-brand-600 transition">{c.home}</Link>
            <span className="text-slate-300">/</span>
            <Link to={href("/prona")} className="hover:text-brand-600 transition">{c.properties}</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-700 font-medium line-clamp-1">{property.title}</span>
          </nav>

          {/* Title + status + price */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="rounded-full bg-brand-600 text-white text-xs font-bold px-3 py-1">{statusLabel}</span>
                <span className="rounded-full bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1">{typeLabel}</span>
                {property.has_ownership_doc && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5" /> {c.stats.ownership}
                  </span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">{property.title}</h1>
              <div className="mt-3 flex items-center gap-1.5 text-slate-600">
                <MapPin className="h-4 w-4 text-brand-600" />
                <span>{property.neighborhood}</span>
              </div>
            </div>
            <div className="lg:text-right shrink-0">
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand-700">{property.formatted_price}</div>
            </div>
          </div>

          {/* Gallery */}
          <Gallery images={images} title={property.title} />

          {/* Stat chips */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatChip icon={Maximize2} value={`${property.area} ${c.stats.area}`} label={c.stats.area} />
            {property.bedrooms > 0 && <StatChip icon={Bed} value={property.bedrooms} label={c.stats.bedrooms} />}
            {property.bathrooms > 0 && <StatChip icon={Bath} value={property.bathrooms} label={c.stats.bathrooms} />}
            {property.has_ownership_doc && <StatChip icon={ShieldCheck} value="✓" label={c.stats.ownership} />}
          </div>

          {/* Description */}
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">{c.descriptionTitle}</h2>
            <div className="prose prose-slate max-w-none text-slate-700 whitespace-pre-line leading-relaxed">
              {property.description?.trim() || (
                <p className="text-slate-500 italic">{c.descriptionEmpty}</p>
              )}
            </div>
          </section>

          {/* Trust strip */}
          <section className="mt-14 rounded-2xl bg-slate-50 border border-slate-100 p-6 sm:p-10">
            <span className="eyebrow">{c.trustEyebrow}</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">{c.trustTitle}</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              {c.trustItems.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inline lead form */}
          <LeadForm
            c={c}
            interest={interestForStatus}
            prefilledMessage={prefilledMessage}
            property={property}
            onWhatsapp={() => trackWhatsapp("detail_form")}
            onPhone={() => trackPhone("detail_form")}
          />

          {/* Similar properties */}
          {similar.length > 0 && <SimilarProperties items={similar} c={c} lang={lang} />}
        </div>
      </article>

      {/* Mobile sticky CTA bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(15,23,42,0.08)] p-3 grid grid-cols-2 gap-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackWhatsapp("detail_sticky")}
          className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle className="h-4 w-4" />
          {c.sticky.whatsapp}
        </a>
        <a
          href={`tel:${AGENT_PHONE}`}
          onClick={() => trackPhone("detail_sticky")}
          className="btn-primary"
        >
          <Phone className="h-4 w-4" />
          {c.sticky.call}
        </a>
      </div>
    </>
  );
}

function StatChip({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl bg-white border border-slate-100 shadow-soft px-4 py-3 flex items-center gap-3">
      <div className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-lg font-extrabold text-slate-900 leading-none">{value}</div>
        <div className="text-xs text-slate-500 mt-0.5">{label}</div>
      </div>
    </div>
  );
}

function Gallery({ images, title }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const safeImages = images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
  ];

  const mainSrc = cloudinaryTransform(safeImages[active], "w_1600,c_limit,q_auto,f_auto");
  const thumbs = safeImages.map((u) => cloudinaryTransform(u, "w_300,h_300,c_fill,q_auto,f_auto"));

  return (
    <>
      <div className="grid lg:grid-cols-[1fr_120px] gap-3">
        <button
          onClick={() => setLightbox(active)}
          className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 group"
          aria-label="Open gallery"
        >
          <img src={mainSrc} alt={title} className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
        </button>
        {safeImages.length > 1 && (
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-2 lg:max-h-[480px] lg:overflow-y-auto">
            {thumbs.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                  i === active ? "border-brand-600" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`Image ${i + 1}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={safeImages}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onChange={setLightbox}
        />
      )}
    </>
  );
}

function Lightbox({ images, index, onClose, onChange }) {
  const prev = useCallback(() => onChange((index - 1 + images.length) % images.length), [index, images.length, onChange]);
  const next = useCallback(() => onChange((index + 1) % images.length), [index, images.length, onChange]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const src = cloudinaryTransform(images[index], "w_2000,c_limit,q_auto,f_auto");

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 inset-x-0 text-center text-white/80 text-sm font-medium">
            {index + 1} / {images.length}
          </div>
        </>
      )}
      <img
        src={src}
        alt=""
        className="max-h-full max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function LeadForm({ c, interest, prefilledMessage, property, onWhatsapp, onPhone }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: prefilledMessage });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setForm((f) => ({ ...f, message: prefilledMessage }));
  }, [prefilledMessage]);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const trimmed = form.name.trim();
    const parts = trimmed.split(/\s+/);
    const first_name = parts[0] || trimmed;
    const last_name = parts.slice(1).join(" ") || "—";

    try {
      await submitContact({
        first_name,
        last_name,
        email: form.email,
        phone: form.phone,
        interest,
        message: form.message,
      });
      lead({
        content_name: "Property inquiry",
        content_category: property?.type,
        content_ids: property?.slug ? [property.slug] : undefined,
        value: property?.price ? parseFloat(property.price) : undefined,
        currency: "EUR",
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      const msgs = Object.values(err || {}).flat();
      setErrorMsg(typeof msgs[0] === "string" ? msgs[0] : c.errorDefault);
    }
  };

  if (status === "success") {
    return (
      <section className="mt-14 rounded-2xl bg-brand-50 border border-brand-100 p-8 sm:p-10 text-center">
        <CheckCircle className="h-14 w-14 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900">{c.success}</h3>
        <p className="mt-3 text-slate-700 max-w-md mx-auto">{c.successMsg}</p>
      </section>
    );
  }

  return (
    <section className="mt-14 rounded-2xl bg-white border border-slate-200 shadow-soft p-6 sm:p-10">
      <div className="max-w-2xl">
        <span className="eyebrow">{c.formEyebrow}</span>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight">{c.formTitle}</h2>
        <p className="mt-3 text-slate-600">{c.formSubtitle}</p>
      </div>

      <form onSubmit={submit} className="mt-6 grid gap-4 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label={c.fields.name} placeholder={c.placeholders.name} required value={form.name} onChange={update("name")} />
          <Input label={c.fields.email} type="email" placeholder={c.placeholders.email} required value={form.email} onChange={update("email")} />
        </div>
        <Input label={c.fields.phone} type="tel" placeholder={c.placeholders.phone} value={form.phone} onChange={update("phone")} />
        <div>
          <label className="block text-sm font-semibold text-slate-800 mb-1.5">{c.fields.message}</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={update("message")}
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:border-brand-600 focus:ring-2 focus:ring-brand-100 outline-none resize-none"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600 font-medium">{errorMsg}</p>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
            {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> {c.sending}</> : <><Send className="h-4 w-4" /> {c.submit}</>}
          </button>
          <a
            href={`https://wa.me/38349579992?text=${encodeURIComponent(prefilledMessage)}`}
            target="_blank"
            rel="noreferrer"
            onClick={onWhatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-brand-400 transition"
          >
            <MessageCircle className="h-4 w-4 text-emerald-500" />
            WhatsApp
          </a>
          <a href={`tel:${AGENT_PHONE}`} onClick={onPhone} className="text-sm text-slate-600 font-medium hover:text-brand-700 transition">
            {AGENT_PHONE_DISPLAY}
          </a>
        </div>
      </form>
    </section>
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

function SimilarProperties({ items, c, lang }) {
  return (
    <section className="mt-16">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">{c.similar}</h2>
          <p className="mt-1 text-sm text-slate-600">{c.similarSub}</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <SimilarCard key={p.id} p={p} c={c} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function SimilarCard({ p, c }) {
  const href = useLocalizedHref();
  const imageSrc = cloudinaryTransform(p.image_src || p.image_url || "", "w_800,c_fill,q_auto,f_auto");
  const statusLabel = c.statusLabel[p.status] || p.status_display;
  return (
    <Link
      to={href(`/prona/${p.slug}`)}
      className="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-soft hover:shadow-card transition block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={imageSrc} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-brand-600 text-white text-xs font-bold px-2.5 py-1">{statusLabel}</span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
          <div className="text-white font-display font-extrabold text-xl">{p.formatted_price}</div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-slate-900 line-clamp-1">{p.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 text-slate-500 text-xs">
          <MapPin className="h-3.5 w-3.5 text-brand-600" />
          {p.neighborhood}
        </div>
        <div className="mt-3 flex items-center gap-3 text-xs text-slate-600 border-t border-slate-100 pt-3">
          {p.bedrooms > 0 && <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5 text-brand-600" /> {p.bedrooms}</span>}
          {p.bathrooms > 0 && <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5 text-brand-600" /> {p.bathrooms}</span>}
          <span className="flex items-center gap-1"><Maximize2 className="h-3.5 w-3.5 text-brand-600" /> {p.area} m²</span>
        </div>
      </div>
    </Link>
  );
}

function DetailSkeleton() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-x">
        <div className="h-3 w-48 bg-slate-100 rounded mb-6 animate-pulse" />
        <div className="h-8 w-2/3 bg-slate-100 rounded mb-3 animate-pulse" />
        <div className="h-5 w-1/3 bg-slate-100 rounded mb-8 animate-pulse" />
        <div className="aspect-[16/10] w-full bg-slate-100 rounded-2xl animate-pulse" />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 bg-slate-100 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

function NotFoundState({ c, backHref }) {
  return (
    <div className="pt-32 pb-32 min-h-[60vh] flex items-center">
      <div className="container-x text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{c.notFoundTitle}</h1>
        <p className="mt-4 text-slate-600">{c.notFoundDesc}</p>
        <Link to={backHref} className="btn-primary mt-8">
          <ArrowLeft className="h-4 w-4" /> {c.notFoundCta}
        </Link>
      </div>
    </div>
  );
}
