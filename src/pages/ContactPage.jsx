import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import FAQSection from "../components/FAQSection";
import StatsBar from "../components/StatsBar";
import PullQuote from "../components/PullQuote";
import { useLang } from "../LanguageContext";
import { agencyJsonLd } from "../seo/agency";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Kontakti — Telefono, WhatsApp, zyra në Obiliq",
    description:
      "Kontaktoni AS Capital Real Estate në Obiliq, Kosovë. Telefon +383 49 579 992, WhatsApp, email ose vizitë në zyrë. Konsultim falas, përgjigje brenda 1–2 orësh në orarin e punës.",
    breadcrumb: "Kontakti",
  },
  en: {
    title: "Contact — Call, WhatsApp, office in Obiliq",
    description:
      "Contact AS Capital Real Estate in Obiliq, Kosovo. Phone +383 49 579 992, WhatsApp, email or in-office. Free consultation, replies within 1–2 hours during business hours.",
    breadcrumb: "Contact",
  },
  de: {
    title: "Kontakt — Anruf, WhatsApp, Büro in Obiliq",
    description:
      "Kontaktieren Sie AS Capital Real Estate in Obiliq, Kosovo. Telefon +383 49 579 992, WhatsApp, E-Mail oder im Büro. Kostenlose Beratung, Antwort in 1–2 Stunden zu Bürozeiten.",
    breadcrumb: "Kontakt",
  },
};

const COPY = {
  sq: {
    eyebrow: "Kontakti",
    title: "Le të takohemi për një kafe — konsultimi i parë është falas",
    subtitle:
      "Telefononi, na shkruani në WhatsApp ose dërgoni mesazh përmes formës. Pa angazhim, pa kosto. Mesatarisht 30 minuta në takimin e parë janë mjaft për të kuptuar nëse jemi ekipi i duhur për ju.",
    stats: {
      items: [
        { value: "1–2 orë", label: "Përgjigje në WhatsApp" },
        { value: "Falas", label: "Konsultimi i parë" },
        { value: "3 gjuhë", label: "Sq • En • De" },
        { value: "8 vite", label: "Përvojë në treg" },
      ],
    },
    channelsEyebrow: "Kanalet e kontaktit",
    channelsTitle: "Si të na kontaktoni — zgjidhni mënyrën që ju përshtatet",
    channelsSubtitle:
      "Kosova punon me WhatsApp për gjithçka — ne jemi gjithmonë në dispozicion atje. Por ju lutemi përdorni kanalin që ju përshtatet më shumë. Çdo mesazh kthehet në përgjigje, gjithmonë.",
    channels: [
      { icon: Phone, title: "Telefon", value: "+383 49 579 992", note: "Hapur ditët e punës 09:00–18:00. Lëreni një mesazh nëse nuk përgjigjemi — kthejmë thirrjen brenda të njëjtës ditë.", href: "tel:+38349579992" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 579 992", note: "Mënyra më e shpejtë për të dërguar pyetje, foto të pronës ose dokumente. Përgjigjemi zakonisht brenda 1–2 orësh në orarin e punës.", href: "https://wa.me/38349579992" },
      { icon: Mail, title: "Email", value: "info@ascapitalrealestate.com", note: "Idealit për kërkesa të detajuara, dokumente formale ose tema që kanë nevojë për përgjigje me shkrim. Përgjigjemi brenda të njëjtës ditë pune.", href: "mailto:info@ascapitalrealestate.com" },
      { icon: MapPin, title: "Zyra", value: "Hasan Prishtina, Obiliq, Kosovë 15000", note: "Vini në zyrë për takim personal — ju lutemi caktoni një orar paraprak që të sigurohemi se jemi në dispozicion për ju pa pritje." },
    ],
    locationEyebrow: "Vendndodhja",
    locationTitle: "Si të na gjeni",
    locationParagraphs: [
      "Zyra jonë qendrore ndodhet në rrugën Hasan Prishtina në Obiliq, vetëm 10 minuta me makinë nga qendra e Prishtinës.",
      "Parking i lirë është i disponueshëm pranë zyrës. Nëse vini me transport publik, mund të arrini me autobus të rregullt nga stacioni qendror i Prishtinës.",
      "Për takime gjatë vikendit ose jashtë orarit standard, na kontaktoni paraprakisht — gjejmë gjithmonë një mënyrë.",
    ],
    hoursEyebrow: "Orari i punës",
    hoursTitle: "Kur jemi në dispozicion",
    hours: [
      { day: "E hënë – E premte", time: "09:00 – 18:00" },
      { day: "E shtunë", time: "10:00 – 14:00 (vetëm me takim paraprak)" },
      { day: "E diel", time: "Mbyllur (WhatsApp në dispozicion për urgjenca)" },
    ],
    hoursNote: "Jashtë këtyre orëve, na shkruani në WhatsApp dhe ju kthejmë përgjigje në fillim të ditës së ardhshme të punës.",
    quote: {
      text: "Më pëlqeu që ata kishin kohë të dëgjonin para se të më ofronin diçka. Në 40 minuta në zyrë mësova më shumë për tregun e Prishtinës se në 6 muaj duke kërkuar vetë në Facebook. Konsultimi ishte falas — por më la ide të qarta për buxhetin tim real.",
      author: "Edona Murati",
      role: "Klient pas konsultimit të parë, Veternik",
      avatar: "https://i.pravatar.cc/120?img=47",
    },
    faq: {
      eyebrow: "Para konsultimit",
      title: "Çfarë duhet të dini para se të na kontaktoni",
      items: [
        { q: "A duhet të paguaj diçka për konsultimin e parë?", a: "Jo. Konsultimi i parë — qoftë në zyrë, telefon ose WhatsApp — është gjithmonë falas dhe pa angazhim. Mund të diskutojmë opsionet, çmimet, lagjet dhe mundësitë pa asnjë kosto për ju." },
        { q: "Sa zgjat zakonisht një takim i parë?", a: "Zakonisht 30–60 minuta. Sa më të qarta të jenë kriteret tuaja, aq më efikas është takimi. Nëse keni ide për buxhet, lagje dhe afat, mund të shkojmë drejt te opsionet konkrete." },
        { q: "Çfarë duhet të sjell në takimin e parë?", a: "Asgjë e detyrueshme. Nëse keni në mendje një buxhet të përafërt, lagjet që ju interesojnë dhe afatin tuaj, kjo na ndihmon. Për blerje me kredi bankare, është mirë të dini parametrat e kredisë që mund të merrni." },
        { q: "A mund të kemi takim virtual nëse nuk jam në Kosovë?", a: "Po, absolutisht. Për klientë në diasporë organizojmë takime përmes WhatsApp, Zoom ose Google Meet. Mund të shfaqim prona në kohë reale, të diskutojmë opsione dhe të vendosim hapat e ardhshëm pa qenë fizikisht në Kosovë." },
        { q: "Sa shpejt kthejnë përgjigje në WhatsApp?", a: "Brenda 1–2 orësh në orarin e punës (e hënë – e premte, 09:00–18:00). Mesazhet jashtë orarit kthehen përgjigje në fillim të ditës së ardhshme të punës. Për urgjenca, ju lutemi shënoni në mesazh që është urgjent." },
      ],
    },
  },
  en: {
    eyebrow: "Contact",
    title: "Let's meet for a coffee — the first consultation is free",
    subtitle:
      "Call us, send a WhatsApp message or use the form. No commitment, no cost. On average, 30 minutes in the first meeting are enough to know whether we're the right team for you.",
    stats: {
      items: [
        { value: "1–2 hrs", label: "WhatsApp reply time" },
        { value: "Free", label: "First consultation" },
        { value: "3 langs", label: "Sq • En • De" },
        { value: "8 years", label: "Market experience" },
      ],
    },
    channelsEyebrow: "Contact channels",
    channelsTitle: "How to reach us — pick the channel that suits you",
    channelsSubtitle:
      "Kosovo runs on WhatsApp — we're always available there. But please use whichever channel works best for you. Every message gets a reply, always.",
    channels: [
      { icon: Phone, title: "Phone", value: "+383 49 579 992", note: "Open weekdays 09:00–18:00. Leave a message if we don't pick up — we return calls within the same day.", href: "tel:+38349579992" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 579 992", note: "The fastest way to send questions, property photos or documents. Replies usually within 1–2 hours during business hours.", href: "https://wa.me/38349579992" },
      { icon: Mail, title: "Email", value: "info@ascapitalrealestate.com", note: "Ideal for detailed inquiries, formal documents or topics that need a written response. Replies within the same business day.", href: "mailto:info@ascapitalrealestate.com" },
      { icon: MapPin, title: "Office", value: "Hasan Prishtina, Obiliq, Kosovo 15000", note: "Come in for an in-person meeting — please book ahead so we can make sure we're available for you without delay." },
    ],
    locationEyebrow: "Location",
    locationTitle: "How to find us",
    locationParagraphs: [
      "Our head office is on Hasan Prishtina street in Obiliq, just 10 minutes by car from central Prishtina.",
      "Free parking is available near the office. By public transport, regular buses run from Prishtina's central station.",
      "For weekend or out-of-hours meetings, contact us in advance — we always find a way.",
    ],
    hoursEyebrow: "Office hours",
    hoursTitle: "When we are available",
    hours: [
      { day: "Mon – Fri", time: "09:00 – 18:00" },
      { day: "Saturday", time: "10:00 – 14:00 (by appointment only)" },
      { day: "Sunday", time: "Closed (WhatsApp available for emergencies)" },
    ],
    hoursNote: "Outside these hours, send a WhatsApp message and we will reply at the start of the next business day.",
    quote: {
      text: "I appreciated that they had time to listen before offering anything. In 40 minutes in their office I learned more about the Prishtina market than in 6 months searching alone on Facebook. The consultation was free — but it left me with clear ideas about my real budget.",
      author: "Edona Murati",
      role: "Client after first consultation, Veternik",
      avatar: "https://i.pravatar.cc/120?img=47",
    },
    faq: {
      eyebrow: "Before consulting",
      title: "What you should know before contacting us",
      items: [
        { q: "Do I have to pay for the first consultation?", a: "No. The first consultation — in office, by phone or WhatsApp — is always free and without commitment. We can discuss options, prices, neighbourhoods and possibilities at no cost." },
        { q: "How long does a first meeting usually take?", a: "Typically 30–60 minutes. The clearer your criteria, the more efficient the meeting. With a budget idea, neighbourhood interest and timeline, we can go straight to concrete options." },
        { q: "What should I bring to the first meeting?", a: "Nothing required. A rough budget, neighbourhoods you like and your timeline help. For bank-financed purchases, knowing your loan parameters helps too." },
        { q: "Can we meet virtually if I'm not in Kosovo?", a: "Yes, absolutely. For diaspora clients we run meetings via WhatsApp, Zoom or Google Meet. We can tour properties in real time, discuss options and decide next steps without you being in Kosovo." },
        { q: "How fast do you reply on WhatsApp?", a: "Within 1–2 hours during business hours (Mon–Fri, 09:00–18:00). Off-hours messages are answered at the start of the next business day. For urgent matters, please mark the message as urgent." },
      ],
    },
  },
  de: {
    eyebrow: "Kontakt",
    title: "Treffen wir uns auf einen Kaffee — die Erstberatung ist kostenfrei",
    subtitle:
      "Rufen Sie uns an, schreiben Sie auf WhatsApp oder nutzen Sie das Formular. Keine Verpflichtung, keine Kosten. Im Schnitt reichen 30 Minuten im Erstgespräch, um zu wissen, ob wir das richtige Team für Sie sind.",
    stats: {
      items: [
        { value: "1–2 Std.", label: "WhatsApp-Antwortzeit" },
        { value: "Kostenfrei", label: "Erstberatung" },
        { value: "3 Sprachen", label: "Sq • En • De" },
        { value: "8 Jahre", label: "Markterfahrung" },
      ],
    },
    channelsEyebrow: "Kontaktkanäle",
    channelsTitle: "So erreichen Sie uns — wählen Sie den passenden Kanal",
    channelsSubtitle:
      "Im Kosovo läuft alles über WhatsApp — wir sind dort immer erreichbar. Nutzen Sie aber gern den Kanal, der für Sie am besten passt. Jede Nachricht erhält eine Antwort, immer.",
    channels: [
      { icon: Phone, title: "Telefon", value: "+383 49 579 992", note: "Werktags 09:00–18:00 erreichbar. Hinterlassen Sie eine Nachricht, wenn wir nicht abnehmen — wir rufen am selben Tag zurück.", href: "tel:+38349579992" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 579 992", note: "Der schnellste Weg für Fragen, Fotos oder Dokumente. Antwort meist innerhalb von 1–2 Stunden zu Bürozeiten.", href: "https://wa.me/38349579992" },
      { icon: Mail, title: "E-Mail", value: "info@ascapitalrealestate.com", note: "Ideal für ausführliche Anfragen, formelle Unterlagen oder Themen, die eine schriftliche Antwort brauchen. Antwort am selben Werktag.", href: "mailto:info@ascapitalrealestate.com" },
      { icon: MapPin, title: "Büro", value: "Hasan Prishtina, Obiliq, Kosovo 15000", note: "Kommen Sie für ein persönliches Gespräch ins Büro — bitte vorab Termin vereinbaren, damit wir ohne Wartezeit für Sie da sind." },
    ],
    locationEyebrow: "Lage",
    locationTitle: "So finden Sie uns",
    locationParagraphs: [
      "Unser Hauptbüro liegt in der Hasan Prishtina-Straße in Obiliq, nur 10 Minuten mit dem Auto vom Zentrum Prishtinas.",
      "Kostenlose Parkplätze gibt es in der Nähe des Büros. Mit dem ÖPNV erreichbar über reguläre Busse vom Hauptbahnhof Prishtina.",
      "Für Termine am Wochenende oder außerhalb der Öffnungszeiten kontaktieren Sie uns bitte vorab — wir finden immer einen Weg.",
    ],
    hoursEyebrow: "Öffnungszeiten",
    hoursTitle: "Wann wir erreichbar sind",
    hours: [
      { day: "Mo – Fr", time: "09:00 – 18:00" },
      { day: "Samstag", time: "10:00 – 14:00 (nur nach Vereinbarung)" },
      { day: "Sonntag", time: "Geschlossen (WhatsApp für Notfälle verfügbar)" },
    ],
    hoursNote: "Außerhalb dieser Zeiten schreiben Sie uns auf WhatsApp — Antwort am nächsten Werktag.",
    quote: {
      text: "Mir gefiel, dass sie zugehört haben, bevor sie mir etwas anboten. In 40 Minuten in ihrem Büro habe ich mehr über den Prishtina-Markt gelernt als in 6 Monaten Suche auf Facebook. Die Beratung war kostenlos — aber sie hat mir klare Vorstellungen über mein reales Budget gegeben.",
      author: "Edona Murati",
      role: "Kundin nach Erstberatung, Veternik",
      avatar: "https://i.pravatar.cc/120?img=47",
    },
    faq: {
      eyebrow: "Vor der Beratung",
      title: "Was Sie vor der Kontaktaufnahme wissen sollten",
      items: [
        { q: "Muss ich für die Erstberatung etwas zahlen?", a: "Nein. Die Erstberatung — im Büro, per Telefon oder WhatsApp — ist immer kostenlos und unverbindlich. Wir besprechen Optionen, Preise, Lagen und Möglichkeiten ohne Kosten." },
        { q: "Wie lange dauert ein Erstgespräch?", a: "Üblicherweise 30–60 Minuten. Je klarer Ihre Kriterien, desto effizienter das Gespräch. Mit Budget-Idee, Lageinteresse und Zeitrahmen kommen wir gleich zu konkreten Optionen." },
        { q: "Was soll ich zum Erstgespräch mitbringen?", a: "Nichts Pflicht. Ein ungefähres Budget, gewünschte Lagen und Ihr Zeitrahmen helfen. Bei Finanzierung über Bank ist es gut, Ihre Kreditparameter zu kennen." },
        { q: "Können wir virtuell sprechen, wenn ich nicht im Kosovo bin?", a: "Ja, absolut. Für Diaspora-Kunden führen wir Gespräche über WhatsApp, Zoom oder Google Meet. Wir zeigen Objekte in Echtzeit, besprechen Optionen und legen die nächsten Schritte fest, ohne dass Sie vor Ort sein müssen." },
        { q: "Wie schnell antworten Sie auf WhatsApp?", a: "Innerhalb von 1–2 Stunden zu Bürozeiten (Mo–Fr, 09:00–18:00). Nachrichten außerhalb der Geschäftszeiten werden am nächsten Werktag beantwortet. Bei dringenden Anliegen markieren Sie die Nachricht bitte entsprechend." },
      ],
    },
  },
};

export default function ContactPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;
  const seo = SEO[lang] || SEO.sq;

  const jsonLd = [
    webPageJsonLd({
      url: withLang("/kontakti", lang),
      name: seo.title,
      description: seo.description,
      type: "ContactPage",
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: withLang("/", lang) },
      { name: seo.breadcrumb, url: withLang("/kontakti", lang) },
    ]),
    agencyJsonLd({ contactPage: true }),
    faqPageJsonLd(c.faq.items),
  ];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/kontakti"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <StatsBar items={c.stats.items} />
      <section className="section">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">{c.channelsEyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{c.channelsTitle}</h2>
            <p className="mt-4 text-slate-600">{c.channelsSubtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {c.channels.map((ch) => {
              const Icon = ch.icon;
              const inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{ch.title}</h3>
                  <div className="mt-1 text-base font-semibold text-brand-700">{ch.value}</div>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{ch.note}</p>
                </>
              );
              return ch.href ? (
                <a key={ch.title} href={ch.href} target={ch.href.startsWith("http") ? "_blank" : undefined} rel={ch.href.startsWith("http") ? "noreferrer" : undefined} className="block rounded-2xl bg-white p-7 shadow-soft hover:shadow-card transition border border-slate-100">
                  {inner}
                </a>
              ) : (
                <div key={ch.title} className="rounded-2xl bg-white p-7 shadow-soft border border-slate-100">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section bg-slate-50">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">{c.locationEyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{c.locationTitle}</h2>
            <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
              {c.locationParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div>
            <span className="eyebrow flex items-center gap-2"><Clock className="h-4 w-4" /> {c.hoursEyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{c.hoursTitle}</h2>
            <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {c.hours.map((h) => (
                <li key={h.day} className="py-4 flex items-center justify-between gap-4">
                  <span className="font-semibold text-slate-900">{h.day}</span>
                  <span className="text-slate-600 text-right">{h.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-600">{c.hoursNote}</p>
          </div>
        </div>
      </section>
      <Contact />
      <PullQuote {...c.quote} />
      <FAQSection
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        items={c.faq.items}
        className="bg-slate-50"
      />
    </>
  );
}
