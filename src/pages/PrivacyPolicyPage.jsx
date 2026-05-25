import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import { useLang } from "../LanguageContext";
import { breadcrumbJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const LAST_UPDATED_ISO = "2026-05-10";

const SERVICES_TABLE = [
  {
    name: "Google Analytics",
    purposeKey: "ga",
    href: "https://policies.google.com/privacy",
  },
  {
    name: "Meta Pixel",
    purposeKey: "meta",
    href: "https://www.facebook.com/privacy/policy",
  },
  {
    name: "Cloudinary",
    purposeKey: "cloudinary",
    href: "https://cloudinary.com/privacy",
  },
  {
    name: "Render",
    purposeKey: "render",
    href: "https://render.com/privacy",
  },
];

const COPY = {
  sq: {
    eyebrow: "Politikat tona",
    title: "Politika e Privatësisë",
    subtitle: "Si i mbledhim, përdorim dhe mbrojmë të dhënat tuaja personale kur vizitoni asrealestate-rks.com.",
    lastUpdated: "E përditësuar më 10 maj 2026",
    intro: "Kjo politikë shpjegon çfarë të dhënash mbledhim, pse i mbledhim dhe çfarë të drejtash keni mbi to. E kemi shkruar në gjuhë të qartë — pa zhargon ligjor.",
    seoTitle: "Politika e Privatësisë",
    seoDescription: "Si AS Capital Real Estate mbledh, përdor dhe mbron të dhënat tuaja personale. Cookies, kontakt, të drejtat sipas Ligjit 06/L-082.",
    breadcrumb: "Privatësia",
    sections: [
      {
        title: "1. Kush jemi",
        paragraphs: [
          "AS Capital Real Estate (më tej \"ne\" ose \"agjencia\") është një agjenci e pasurive të paluajtshme me seli në Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovë 10000. Jemi përgjegjësi i kontrollit për të dhënat personale të mbledhura përmes asrealestate-rks.com.",
        ],
      },
      {
        title: "2. Çfarë mbledhim",
        paragraphs: ["Mbledhim dy lloje të dhënash:"],
        listTitle: "Të dhëna që na i jepni vullnetarisht",
        list: [
          "Emri, mbiemri, email-i dhe numri i telefonit kur plotësoni një formë (kontakt, ofrim prone, regjistrim për lajme)",
          "Detajet e pronës që na ofroni (lokacioni, sipërfaqja, çmimi, përshkrimi)",
          "Mesazhi që na shkruani përmes formës ose WhatsApp",
        ],
        list2Title: "Të dhëna që mblidhen automatikisht",
        list2: [
          "Adresa IP, lloji i browserit, modeli i pajisjes",
          "Faqet që vizitoni, kohëzgjatja dhe klikimet brenda faqes",
          "Cookies — vetëm pasi të keni dhënë pëlqimin në banner",
        ],
      },
      {
        title: "3. Si i përdorim",
        paragraphs: ["Të dhënat tuaja shërbejnë vetëm për qëllimet e mëposhtme:"],
        list: [
          "Përgjigje pyetjeve, koordinim takimesh dhe dërgim ofertash të personalizuara",
          "Vlerësim falas të pronës që na ofroni",
          "Përmirësim i faqes përmes analitikës anonime (Google Analytics) — pas pëlqimit",
          "Reklamim i personalizuar në Facebook/Instagram (Meta Pixel) — pas pëlqimit",
          "Përmbushje e detyrimeve ligjore tatimore dhe kontraktuale për klientë aktivë",
        ],
      },
      {
        title: "4. Cookies dhe shërbimet e palëve të treta",
        paragraphs: [
          "Përdorim disa shërbime të palëve të treta që mund të vendosin cookies ose të mbledhin të dhëna teknike:",
        ],
        servicesTable: true,
        afterTableParagraphs: [
          "Asnjëri prej këtyre shërbimeve nuk aktivizohet derisa të jepni pëlqimin përmes banner-it në fund të faqes. Refuzimi nuk ndikon në shërbimet thelbësore — formularët, telefoni dhe WhatsApp funksionojnë si më parë.",
        ],
      },
      {
        title: "5. Bazat ligjore",
        paragraphs: [
          "Procesojmë të dhënat tuaja sipas Ligjit nr. 06/L-082 të Republikës së Kosovës për Mbrojtjen e të Dhënave Personale (i harmonizuar me GDPR-në).",
        ],
        list: [
          "Pëlqimi: për cookies analitike dhe marketing",
          "Interesi legjitim: për t'ju përgjigjur kur na shkruani vetë",
          "Detyrimi ligjor: për ruajtje të dokumentacionit financiar dhe kontraktual",
        ],
      },
      {
        title: "6. Sa kohë i ruajmë",
        list: [
          "Mesazhe kontakti pa transaksion: 24 muaj nga komunikimi i fundit",
          "Të dhëna abonimi në lajme: deri në çregjistrimin tuaj",
          "Cookies analitike: maksimumi 26 muaj (default i Google Analytics)",
          "Dokumentacion kontraktual për klientë aktivë: 10 vjet (detyrim tatimor)",
        ],
      },
      {
        title: "7. Të drejtat tuaja",
        paragraphs: ["Sipas Ligjit 06/L-082 ju keni të drejtë:"],
        list: [
          "Qasje: të kërkoni një kopje të të dhënave që mbajmë për ju",
          "Korrigjim: të kërkoni rregullimin e çdo informacioni të gabuar",
          "Fshirje: të kërkoni fshirjen e të dhënave (kur nuk kemi detyrim ligjor t'i mbajmë)",
          "Tërheqje e pëlqimit: të ndaloni cookies në çdo kohë",
          "Ankesë: te Agjencia për Informim dhe Privatësi (AIP), aip.rks-gov.net",
        ],
        afterListParagraphs: [
          "Për të ushtruar këto të drejta, na shkruani në asrealestaterks@gmail.com. Ju përgjigjemi brenda 30 ditësh.",
        ],
      },
      {
        title: "8. Si t'i ndaloni cookies",
        list: [
          "Klikoni \"Refuzo\" në banner-in e cookies kur shfaqet",
          "Pastroni cookies në browser dhe rifreskoni faqen — banner-i rishfaqet",
          "Bllokoni cookies nga preferencat e browser-it tuaj",
        ],
      },
      {
        title: "9. Fëmijët",
        paragraphs: [
          "Nuk mbledhim me dijeni të dhëna personale nga persona nën 16 vjeç. Nëse mendoni që një fëmijë na ka dhënë të dhëna, na kontaktoni dhe do t'i fshijmë menjëherë.",
        ],
      },
      {
        title: "10. Ndryshime në këtë politikë",
        paragraphs: [
          "Mund ta përditësojmë këtë politikë me kalimin e kohës. Versioni më i fundit do të jetë gjithmonë në këtë faqe, me datën e përditësimit në krye.",
        ],
      },
      {
        title: "11. Kontakti",
        paragraphs: ["Për çdo pyetje për këtë politikë ose për të dhënat tuaja:"],
        contact: true,
      },
    ],
    services: {
      ga: "Analitikë anonime e përdorimit të faqes",
      meta: "Optimizim reklamash në Facebook dhe Instagram",
      cloudinary: "Strehim i fotove të pronave",
      render: "Strehim i faqes dhe API-së",
    },
    contact: {
      name: "AS Capital Real Estate",
      address: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovë 10000",
      emailLabel: "Email",
      email: "asrealestaterks@gmail.com",
      phoneLabel: "Telefon",
      phone: "+383 49 942 941",
    },
    tableHeaders: { service: "Shërbimi", purpose: "Qëllimi", policy: "Politika" },
    viewPolicy: "Shih",
  },
  en: {
    eyebrow: "Our policies",
    title: "Privacy Policy",
    subtitle: "How we collect, use and protect your personal data when you visit asrealestate-rks.com.",
    lastUpdated: "Last updated 10 May 2026",
    intro: "This policy explains what data we collect, why we collect it, and what rights you have. Written in plain language — no legal jargon.",
    seoTitle: "Privacy Policy",
    seoDescription: "How AS Capital Real Estate collects, uses and protects your personal data. Cookies, contact, your rights under Law 06/L-082.",
    breadcrumb: "Privacy",
    sections: [
      {
        title: "1. Who we are",
        paragraphs: [
          "AS Capital Real Estate (\"we\", \"the agency\") is a real estate agency based in Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000. We are the data controller for personal data collected through asrealestate-rks.com.",
        ],
      },
      {
        title: "2. What we collect",
        paragraphs: ["We collect two kinds of data:"],
        listTitle: "Data you give us voluntarily",
        list: [
          "First name, last name, email and phone when you submit a form (contact, list-property, newsletter)",
          "Property details you offer (location, area, price, description)",
          "The message you send us via the form or WhatsApp",
        ],
        list2Title: "Data collected automatically",
        list2: [
          "IP address, browser type, device model",
          "Pages you visit, time spent, in-page clicks",
          "Cookies — only after you give consent in the banner",
        ],
      },
      {
        title: "3. How we use it",
        paragraphs: ["Your data is used only for the following purposes:"],
        list: [
          "Replying to questions, scheduling meetings, sending tailored offers",
          "Free valuation of any property you offer us",
          "Improving the site through anonymous analytics (Google Analytics) — after consent",
          "Personalised advertising on Facebook/Instagram (Meta Pixel) — after consent",
          "Meeting tax and contractual obligations for active clients",
        ],
      },
      {
        title: "4. Cookies and third-party services",
        paragraphs: [
          "We use a small number of third-party services that may set cookies or collect technical data:",
        ],
        servicesTable: true,
        afterTableParagraphs: [
          "None of these services activate until you give consent through the banner at the bottom of the page. Declining does not affect essential services — forms, phone and WhatsApp work as before.",
        ],
      },
      {
        title: "5. Legal basis",
        paragraphs: [
          "We process your data under Kosovo Law no. 06/L-082 on Personal Data Protection (aligned with GDPR).",
        ],
        list: [
          "Consent: for analytics and marketing cookies",
          "Legitimate interest: for replying when you reach out yourself",
          "Legal obligation: for retaining financial and contractual records",
        ],
      },
      {
        title: "6. How long we keep it",
        list: [
          "Contact messages without a transaction: 24 months from last contact",
          "Newsletter subscription data: until you unsubscribe",
          "Analytics cookies: maximum 26 months (Google Analytics default)",
          "Contractual records for active clients: 10 years (tax obligation)",
        ],
      },
      {
        title: "7. Your rights",
        paragraphs: ["Under Law 06/L-082 you have the right to:"],
        list: [
          "Access: request a copy of the data we hold about you",
          "Rectification: ask us to correct anything wrong",
          "Erasure: ask us to delete your data (where we have no legal duty to keep it)",
          "Withdraw consent: stop cookies at any time",
          "Complaint: to the Agency for Information and Privacy (AIP), aip.rks-gov.net",
        ],
        afterListParagraphs: [
          "To exercise these rights, write to asrealestaterks@gmail.com. We respond within 30 days.",
        ],
      },
      {
        title: "8. How to disable cookies",
        list: [
          "Click \"Decline\" on the cookie banner when it appears",
          "Clear cookies in your browser and reload the page — the banner reappears",
          "Block cookies via your browser preferences",
        ],
      },
      {
        title: "9. Children",
        paragraphs: [
          "We do not knowingly collect personal data from anyone under 16. If you believe a minor has given us data, contact us and we will delete it immediately.",
        ],
      },
      {
        title: "10. Changes to this policy",
        paragraphs: [
          "We may update this policy over time. The latest version will always be on this page, with the update date at the top.",
        ],
      },
      {
        title: "11. Contact",
        paragraphs: ["For any question about this policy or your data:"],
        contact: true,
      },
    ],
    services: {
      ga: "Anonymous site usage analytics",
      meta: "Ad optimisation on Facebook and Instagram",
      cloudinary: "Hosting of property photos",
      render: "Hosting of site and API",
    },
    contact: {
      name: "AS Capital Real Estate",
      address: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000",
      emailLabel: "Email",
      email: "asrealestaterks@gmail.com",
      phoneLabel: "Phone",
      phone: "+383 49 942 941",
    },
    tableHeaders: { service: "Service", purpose: "Purpose", policy: "Policy" },
    viewPolicy: "View",
  },
  de: {
    eyebrow: "Unsere Richtlinien",
    title: "Datenschutzerklärung",
    subtitle: "Wie wir Ihre personenbezogenen Daten erfassen, verwenden und schützen, wenn Sie asrealestate-rks.com besuchen.",
    lastUpdated: "Zuletzt aktualisiert am 10. Mai 2026",
    intro: "Diese Erklärung beschreibt, welche Daten wir erfassen, warum wir sie erfassen und welche Rechte Sie haben. In klarer Sprache — ohne juristisches Fachjargon.",
    seoTitle: "Datenschutzerklärung",
    seoDescription: "Wie AS Capital Real Estate Ihre personenbezogenen Daten erfasst, verwendet und schützt. Cookies, Kontakt, Ihre Rechte nach Gesetz 06/L-082.",
    breadcrumb: "Datenschutz",
    sections: [
      {
        title: "1. Wer wir sind",
        paragraphs: [
          "AS Capital Real Estate (\"wir\", \"die Agentur\") ist eine Immobilienagentur mit Sitz in Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000. Wir sind der Verantwortliche für die über asrealestate-rks.com erhobenen personenbezogenen Daten.",
        ],
      },
      {
        title: "2. Was wir erfassen",
        paragraphs: ["Wir erfassen zwei Arten von Daten:"],
        listTitle: "Daten, die Sie uns freiwillig geben",
        list: [
          "Vorname, Nachname, E-Mail und Telefon beim Absenden eines Formulars (Kontakt, Immobilie inserieren, Newsletter)",
          "Details zur angebotenen Immobilie (Standort, Fläche, Preis, Beschreibung)",
          "Die Nachricht, die Sie per Formular oder WhatsApp senden",
        ],
        list2Title: "Automatisch erhobene Daten",
        list2: [
          "IP-Adresse, Browsertyp, Gerätemodell",
          "Besuchte Seiten, Verweildauer, Klicks innerhalb der Seite",
          "Cookies — nur nach Ihrer Einwilligung im Banner",
        ],
      },
      {
        title: "3. Wie wir sie verwenden",
        paragraphs: ["Ihre Daten werden ausschließlich für folgende Zwecke verwendet:"],
        list: [
          "Beantwortung von Fragen, Terminkoordination, Versand maßgeschneiderter Angebote",
          "Kostenlose Bewertung jeder Immobilie, die Sie uns anbieten",
          "Verbesserung der Website durch anonyme Analyse (Google Analytics) — nach Einwilligung",
          "Personalisierte Werbung auf Facebook/Instagram (Meta Pixel) — nach Einwilligung",
          "Erfüllung steuerlicher und vertraglicher Pflichten für aktive Kunden",
        ],
      },
      {
        title: "4. Cookies und Drittanbieter",
        paragraphs: [
          "Wir nutzen einige Drittanbieterdienste, die Cookies setzen oder technische Daten erfassen können:",
        ],
        servicesTable: true,
        afterTableParagraphs: [
          "Keiner dieser Dienste wird aktiv, bevor Sie über das Banner am unteren Seitenrand zustimmen. Eine Ablehnung beeinträchtigt die wesentlichen Dienste nicht — Formulare, Telefon und WhatsApp funktionieren wie zuvor.",
        ],
      },
      {
        title: "5. Rechtsgrundlage",
        paragraphs: [
          "Wir verarbeiten Ihre Daten gemäß dem kosovarischen Gesetz Nr. 06/L-082 zum Schutz personenbezogener Daten (DSGVO-konform).",
        ],
        list: [
          "Einwilligung: für Analyse- und Marketing-Cookies",
          "Berechtigtes Interesse: für die Antwort, wenn Sie sich von sich aus melden",
          "Rechtliche Verpflichtung: für die Aufbewahrung von Finanz- und Vertragsunterlagen",
        ],
      },
      {
        title: "6. Wie lange wir sie speichern",
        list: [
          "Kontaktnachrichten ohne Geschäftsabschluss: 24 Monate ab letztem Kontakt",
          "Newsletter-Anmeldedaten: bis zu Ihrer Abmeldung",
          "Analyse-Cookies: maximal 26 Monate (Google-Analytics-Standard)",
          "Vertragsunterlagen aktiver Kunden: 10 Jahre (steuerliche Pflicht)",
        ],
      },
      {
        title: "7. Ihre Rechte",
        paragraphs: ["Nach Gesetz 06/L-082 haben Sie das Recht auf:"],
        list: [
          "Auskunft: eine Kopie der über Sie gespeicherten Daten",
          "Berichtigung: die Korrektur falscher Angaben",
          "Löschung: die Löschung Ihrer Daten (sofern keine gesetzliche Aufbewahrungspflicht besteht)",
          "Widerruf der Einwilligung: jederzeitige Beendigung der Cookie-Nutzung",
          "Beschwerde: bei der Agentur für Information und Datenschutz (AIP), aip.rks-gov.net",
        ],
        afterListParagraphs: [
          "Zur Wahrnehmung dieser Rechte schreiben Sie an asrealestaterks@gmail.com. Wir antworten innerhalb von 30 Tagen.",
        ],
      },
      {
        title: "8. Cookies deaktivieren",
        list: [
          "Klicken Sie im erscheinenden Cookie-Banner auf \"Ablehnen\"",
          "Cookies im Browser löschen und Seite neu laden — das Banner erscheint erneut",
          "Cookies über die Einstellungen Ihres Browsers blockieren",
        ],
      },
      {
        title: "9. Kinder",
        paragraphs: [
          "Wir erheben wissentlich keine personenbezogenen Daten von Personen unter 16 Jahren. Sollten Sie der Meinung sein, dass uns ein Minderjähriger Daten gegeben hat, kontaktieren Sie uns — wir löschen sie umgehend.",
        ],
      },
      {
        title: "10. Änderungen dieser Erklärung",
        paragraphs: [
          "Wir können diese Erklärung gelegentlich aktualisieren. Die jeweils aktuelle Fassung steht auf dieser Seite, mit Datum der letzten Aktualisierung oben.",
        ],
      },
      {
        title: "11. Kontakt",
        paragraphs: ["Bei Fragen zu dieser Erklärung oder Ihren Daten:"],
        contact: true,
      },
    ],
    services: {
      ga: "Anonyme Nutzungsanalyse der Website",
      meta: "Werbeoptimierung auf Facebook und Instagram",
      cloudinary: "Hosting der Immobilienfotos",
      render: "Hosting der Website und API",
    },
    contact: {
      name: "AS Capital Real Estate",
      address: "Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000",
      emailLabel: "E-Mail",
      email: "asrealestaterks@gmail.com",
      phoneLabel: "Telefon",
      phone: "+383 49 942 941",
    },
    tableHeaders: { service: "Dienst", purpose: "Zweck", policy: "Richtlinie" },
    viewPolicy: "Ansehen",
  },
};

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;

  const jsonLd = [
    webPageJsonLd({
      url: withLang("/privatesia", lang),
      name: c.seoTitle,
      description: c.seoDescription,
      type: "WebPage",
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: lang === "sq" ? "Ballina" : lang === "de" ? "Startseite" : "Home", url: withLang("/", lang) },
      { name: c.breadcrumb, url: withLang("/privatesia", lang) },
    ]),
  ];

  return (
    <>
      <Seo
        title={c.seoTitle}
        description={c.seoDescription}
        path="/privatesia"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <article className="section bg-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">{c.lastUpdated}</p>
            <p className="text-lg text-slate-700 leading-relaxed mb-12">{c.intro}</p>

            {c.sections.map((section, i) => (
              <section key={i} className="mb-12 scroll-mt-32">
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-4">{section.title}</h2>

                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-slate-700 leading-relaxed mb-3">{p}</p>
                ))}

                {section.listTitle && (
                  <h3 className="font-bold text-slate-900 mt-5 mb-2">{section.listTitle}</h3>
                )}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                    {section.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}

                {section.list2Title && (
                  <h3 className="font-bold text-slate-900 mt-5 mb-2">{section.list2Title}</h3>
                )}
                {section.list2 && (
                  <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                    {section.list2.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}

                {section.afterListParagraphs?.map((p, j) => (
                  <p key={`alp-${j}`} className="text-slate-700 leading-relaxed mt-4">{p}</p>
                ))}

                {section.servicesTable && (
                  <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="text-left font-bold text-slate-700 px-4 py-3">{c.tableHeaders.service}</th>
                          <th className="text-left font-bold text-slate-700 px-4 py-3">{c.tableHeaders.purpose}</th>
                          <th className="text-left font-bold text-slate-700 px-4 py-3">{c.tableHeaders.policy}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SERVICES_TABLE.map((s) => (
                          <tr key={s.name}>
                            <td className="px-4 py-3 font-semibold text-slate-900">{s.name}</td>
                            <td className="px-4 py-3 text-slate-700">{c.services[s.purposeKey]}</td>
                            <td className="px-4 py-3">
                              <a href={s.href} target="_blank" rel="noreferrer" className="text-brand-600 font-semibold hover:underline">{c.viewPolicy} ↗</a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.afterTableParagraphs?.map((p, j) => (
                  <p key={`atp-${j}`} className="text-slate-700 leading-relaxed mt-4">{p}</p>
                ))}

                {section.contact && (
                  <div className="mt-4 rounded-2xl bg-slate-50 border border-slate-100 p-6">
                    <div className="font-bold text-slate-900">{c.contact.name}</div>
                    <div className="text-slate-700 mt-1">{c.contact.address}</div>
                    <div className="text-slate-700 mt-3">
                      <span className="font-semibold">{c.contact.emailLabel}: </span>
                      <a href={`mailto:${c.contact.email}`} className="text-brand-600 hover:underline">{c.contact.email}</a>
                    </div>
                    <div className="text-slate-700 mt-1">
                      <span className="font-semibold">{c.contact.phoneLabel}: </span>
                      <a href={`tel:${c.contact.phone.replace(/\s/g, "")}`} className="text-brand-600 hover:underline">{c.contact.phone}</a>
                    </div>
                  </div>
                )}
              </section>
            ))}

            <p className="text-xs text-slate-500 mt-16" dateTime={LAST_UPDATED_ISO}>{c.lastUpdated}</p>
          </div>
        </div>
      </article>
    </>
  );
}
