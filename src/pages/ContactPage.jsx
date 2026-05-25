import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import FAQSection from "../components/FAQSection";
import PainGain from "../components/PainGain";
import PullQuote from "../components/PullQuote";
import { useLang } from "../LanguageContext";
import { agencyJsonLd } from "../seo/agency";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Kontakti — Konsultim falas, pa angazhim",
    description:
      "Telefononi +383 49 942 941, na shkruani në WhatsApp, ose vizitoni zyrën tonë në Rrugën \"Ahmet Krasniqi\" Nr. 15, Prishtinë. Konsultimi i parë gjithmonë falas — përgjigje brenda 1–2 orësh.",
    breadcrumb: "Kontakti",
  },
  en: {
    title: "Contact — Free consultation, no commitment",
    description:
      "Call +383 49 942 941, message us on WhatsApp, or visit our office at Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë. First consultation always free — replies within 1–2 hours.",
    breadcrumb: "Contact",
  },
  de: {
    title: "Kontakt — Kostenlose Beratung, unverbindlich",
    description:
      "Rufen Sie +383 49 942 941 an, schreiben Sie uns auf WhatsApp, oder besuchen Sie unser Büro in der Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë. Erstberatung immer kostenlos — Antwort innerhalb 1–2 Stunden.",
    breadcrumb: "Kontakt",
  },
};

const COPY = {
  sq: {
    eyebrow: "Kontakti",
    title: "Le të takohemi për një kafe — pa presion, pa angazhim",
    subtitle:
      "Konsultimi i parë është gjithmonë falas. Telefononi, na shkruani në WhatsApp, ose ardhni në zyrë në Rrugën \"Ahmet Krasniqi\" Nr. 15, Prishtinë. Përgjigje brenda 1–2 orësh në orarin e punës — pa formularë të gjatë, pa presion shitje.",
    channelsEyebrow: "Kanalet e kontaktit",
    channelsTitle: "Si të na kontaktoni — zgjidhni mënyrën që ju përshtatet",
    channelsSubtitle: "Kosova përdor WhatsApp për gjithçka — ne jemi gjithmonë në dispozicion atje. Por ju lutemi përdorni kanalin që ju përshtatet më shumë.",
    channels: [
      { icon: Phone, title: "Telefon", value: "+383 49 942 941", note: "Hapur ditët e punës 09:00–18:00. Lëreni një mesazh nëse nuk përgjigjemi — kthejmë thirrjen brenda të njëjtës ditë.", href: "tel:+38349942941" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 942 941", note: "Mënyra më e shpejtë për të dërguar pyetje, foto të pronës ose dokumente. Përgjigjemi zakonisht brenda 1–2 orësh në orarin e punës.", href: "https://wa.me/38349942941" },
      { icon: Mail, title: "Email", value: "asrealestaterks@gmail.com", note: "Idealit për kërkesa të detajuara, dokumente formale ose tema që kanë nevojë për përgjigje me shkrim. Përgjigjemi brenda të njëjtës ditë pune.", href: "mailto:asrealestaterks@gmail.com" },
      { icon: MapPin, title: "Zyra", value: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovë 10000", note: "Vini në zyrë për takim personal — ju lutemi caktoni një orar paraprak që të sigurohemi se jemi në dispozicion për ju pa pritje." },
    ],
    pain: {
      eyebrow: "Çfarë të prisni",
      title: "Konsultimi i parë: çfarë është dhe çfarë nuk është",
      subtitle: "Shumë vizitorë hezitojnë sepse mendojnë që 'konsultim falas' do të thotë presion shitjeje. Ja çka ka rëndësi për ne.",
      painLabel: "Çka NUK është",
      gainLabel: "Çka ËSHTË",
      pain: [
        "Nuk është një pitch shitjeje për të nënshkruar atë ditë",
        "Nuk është detyrim që të punoni me ne pas takimit",
        "Nuk është biseda gjenerike — ne dëgjojmë specifikën tuaj",
        "Nuk ka kosto, fshehtazi ose hapur, për këtë konsultim",
        "Nuk është 5 minuta — marrim kohën që ju nevojitet",
      ],
      gain: [
        "Bisedë 30–60 minutëshe për situatën tuaj specifike",
        "Pamje reale e tregut: çmime, lagje, afate për ju",
        "Përgjigje për çdo pyetje juridike, financiare, procedurale",
        "Vlerësim falas i pronës nëse jeni pronar",
        "Hapat e qartë — nëse zgjidhni të vazhdoni, ose jo",
      ],
    },
    locationEyebrow: "Vendndodhja",
    locationTitle: "Si të na gjeni",
    locationParagraphs: [
      "Zyra jonë qendrore ndodhet në Rrugën \"Ahmet Krasniqi\" Nr. 15, në Prishtinë — lehtësisht e arritshme nga çdo lagje qendrore.",
      "Parking i lirë është i disponueshëm pranë zyrës. Me transport publik, ndodhemi vetëm disa minuta nga stacionet kryesore të autobusit në qendër të Prishtinës.",
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
      text: "Kisha frikë se konsultimi falas ishte trik shitjeje. Ishte e kundërta — më dëgjuan për 45 minuta, më treguan opsione që nuk i kisha menduar, dhe kur thashë 'do mendoj' nuk më telefonuan as një herë. Pas dy javësh u ktheva vetë.",
      author: "Lirie Gashi",
      role: "Bleresë, Ulpianë",
      avatar: "https://i.pravatar.cc/120?img=49",
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
    title: "Let's meet for a coffee — no pressure, no commitment",
    subtitle:
      "First consultation is always free. Call, WhatsApp, or visit our office at Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë. Replies within 1–2 hours during business hours — no long forms, no sales pressure.",
    channelsEyebrow: "Contact channels",
    channelsTitle: "How to reach us — pick the channel that suits you",
    channelsSubtitle: "Kosovo runs on WhatsApp — we're always available there. But please use whichever channel works best for you.",
    channels: [
      { icon: Phone, title: "Phone", value: "+383 49 942 941", note: "Open weekdays 09:00–18:00. Leave a message if we don't pick up — we return calls within the same day.", href: "tel:+38349942941" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 942 941", note: "The fastest way to send questions, property photos or documents. Replies usually within 1–2 hours during business hours.", href: "https://wa.me/38349942941" },
      { icon: Mail, title: "Email", value: "asrealestaterks@gmail.com", note: "Ideal for detailed inquiries, formal documents or topics that need a written response. Replies within the same business day.", href: "mailto:asrealestaterks@gmail.com" },
      { icon: MapPin, title: "Office", value: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000", note: "Come in for an in-person meeting — please book ahead so we can make sure we're available for you without delay." },
    ],
    pain: {
      eyebrow: "What to expect",
      title: "First consultation: what it is and what it isn't",
      subtitle: "Many visitors hesitate because they think 'free consultation' means sales pressure. Here's what matters to us.",
      painLabel: "What it is NOT",
      gainLabel: "What it IS",
      pain: [
        "Not a sales pitch to sign that day",
        "Not an obligation to work with us afterwards",
        "Not a generic chat — we listen to your specifics",
        "Not free with hidden costs — truly no cost",
        "Not 5 minutes — we take the time you need",
      ],
      gain: [
        "A 30–60 minute conversation about your specific situation",
        "Real picture of the market: prices, neighbourhoods, timelines for you",
        "Answers to every legal, financial, procedural question",
        "Free property valuation if you're an owner",
        "Clear next steps — whether you continue or not",
      ],
    },
    locationEyebrow: "Location",
    locationTitle: "How to find us",
    locationParagraphs: [
      "Our head office is at Rruga \"Ahmet Krasniqi\" Nr. 15, in Prishtinë — easily reachable from any central neighbourhood.",
      "Free parking is available near the office. By public transport, we're just a few minutes from the main bus stops in central Prishtina.",
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
      text: "I was afraid the free consultation was a sales trick. It was the opposite — they listened for 45 minutes, showed me options I hadn't considered, and when I said 'I'll think about it' they didn't call me once. I came back two weeks later on my own.",
      author: "Lirie Gashi",
      role: "Buyer, Ulpianë",
      avatar: "https://i.pravatar.cc/120?img=49",
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
    title: "Treffen wir uns auf einen Kaffee — kein Druck, unverbindlich",
    subtitle:
      "Die Erstberatung ist immer kostenlos. Anrufen, WhatsApp, oder Büro besuchen in der Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë. Antwort innerhalb 1–2 Stunden zu Bürozeiten — keine langen Formulare, kein Verkaufsdruck.",
    channelsEyebrow: "Kontaktkanäle",
    channelsTitle: "So erreichen Sie uns — wählen Sie den passenden Kanal",
    channelsSubtitle: "Im Kosovo läuft alles über WhatsApp — wir sind dort immer erreichbar. Nutzen Sie aber gern den Kanal, der für Sie am besten passt.",
    channels: [
      { icon: Phone, title: "Telefon", value: "+383 49 942 941", note: "Werktags 09:00–18:00 erreichbar. Hinterlassen Sie eine Nachricht, wenn wir nicht abnehmen — wir rufen am selben Tag zurück.", href: "tel:+38349942941" },
      { icon: MessageCircle, title: "WhatsApp", value: "+383 49 942 941", note: "Der schnellste Weg für Fragen, Fotos oder Dokumente. Antwort meist innerhalb von 1–2 Stunden zu Bürozeiten.", href: "https://wa.me/38349942941" },
      { icon: Mail, title: "E-Mail", value: "asrealestaterks@gmail.com", note: "Ideal für ausführliche Anfragen, formelle Unterlagen oder Themen, die eine schriftliche Antwort brauchen. Antwort am selben Werktag.", href: "mailto:asrealestaterks@gmail.com" },
      { icon: MapPin, title: "Büro", value: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000", note: "Kommen Sie für ein persönliches Gespräch ins Büro — bitte vorab Termin vereinbaren, damit wir ohne Wartezeit für Sie da sind." },
    ],
    pain: {
      eyebrow: "Was Sie erwartet",
      title: "Die Erstberatung: was sie ist und was nicht",
      subtitle: "Viele Besucher zögern, weil sie denken, 'kostenlose Beratung' bedeutet Verkaufsdruck. Was uns wichtig ist.",
      painLabel: "Was sie NICHT ist",
      gainLabel: "Was sie IST",
      pain: [
        "Kein Verkaufsgespräch, das am selben Tag unterzeichnet werden muss",
        "Keine Verpflichtung, danach mit uns zu arbeiten",
        "Kein generisches Gespräch — wir hören auf Ihre Details",
        "Nicht kostenlos mit versteckten Kosten — wirklich gratis",
        "Keine 5 Minuten — wir nehmen uns die Zeit, die Sie brauchen",
      ],
      gain: [
        "30–60 Minuten Gespräch über Ihre Situation",
        "Reales Marktbild: Preise, Lagen, Zeitrahmen für Sie",
        "Antworten auf jede rechtliche, finanzielle, prozedurale Frage",
        "Kostenlose Immobilienbewertung, wenn Sie Eigentümer sind",
        "Klare nächste Schritte — ob Sie fortfahren oder nicht",
      ],
    },
    locationEyebrow: "Lage",
    locationTitle: "So finden Sie uns",
    locationParagraphs: [
      "Unser Hauptbüro liegt in der Rruga \"Ahmet Krasniqi\" Nr. 15 in Prishtinë — von jedem zentralen Stadtviertel gut erreichbar.",
      "Kostenlose Parkplätze gibt es in der Nähe des Büros. Mit dem ÖPNV sind wir nur wenige Minuten von den wichtigsten Bushaltestellen im Zentrum von Prishtinë entfernt.",
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
      text: "Ich befürchtete, die kostenlose Beratung sei ein Verkaufstrick. Es war das Gegenteil — sie hörten 45 Minuten zu, zeigten mir Optionen, an die ich nicht gedacht hatte, und als ich 'ich überlege' sagte, riefen sie kein einziges Mal an. Zwei Wochen später kam ich von selbst zurück.",
      author: "Lirie Gashi",
      role: "Käuferin, Ulpianë",
      avatar: "https://i.pravatar.cc/120?img=49",
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

      <PainGain
        eyebrow={c.pain.eyebrow}
        title={c.pain.title}
        subtitle={c.pain.subtitle}
        painLabel={c.pain.painLabel}
        gainLabel={c.pain.gainLabel}
        painItems={c.pain.pain}
        gainItems={c.pain.gain}
        className="bg-slate-50"
      />

      <section className="section">
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
