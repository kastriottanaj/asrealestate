import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import ProcessSection from "../components/ProcessSection";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { useLang } from "../LanguageContext";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd, servicesGraphJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Shërbimet — Shitje, qira dhe investime në Kosovë",
    description:
      "Shërbim i plotë ndërmjetësimi: konsultim falas, vlerësim tregu, vizita, verifikim ligjor, negocim dhe kontratë. Komision transparent, pa ekskluzivitet të detyruar.",
    breadcrumb: "Shërbimet",
    services: [
      { name: "Shitje pasurish të paluajtshme", description: "Ndërmjetësim profesional për shitje banesash, shtëpive, vilave, zyreve, lokaleve dhe tokës në Kosovë.", serviceType: "Real estate sales" },
      { name: "Qiradhënie pasurish", description: "Qira afatshkurtër dhe afatgjatë për banesa, shtëpi dhe hapësira tregtare në Prishtinë dhe rajon.", serviceType: "Real estate rentals" },
      { name: "Investime në patundshmëri", description: "Këshillim investimi, tokë ndërtimore, banesa të reja dhe portfolio prone për investitorë në tregun e Kosovës.", serviceType: "Real estate investment" },
    ],
  },
  en: {
    title: "Services — Sales, rentals and investments in Kosovo",
    description:
      "Full brokerage service: free consultation, market valuation, viewings, legal verification, negotiation and contract. Transparent commission, no forced exclusivity.",
    breadcrumb: "Services",
    services: [
      { name: "Real estate sales", description: "Professional brokerage for sales of apartments, houses, villas, offices, retail and land in Kosovo.", serviceType: "Real estate sales" },
      { name: "Rentals", description: "Short and long-term rentals of apartments, houses and commercial spaces across Prishtina and the wider region.", serviceType: "Real estate rentals" },
      { name: "Real estate investments", description: "Investment advisory, buildable land, new-build apartments and property portfolios for investors in the Kosovo market.", serviceType: "Real estate investment" },
    ],
  },
  de: {
    title: "Dienstleistungen — Verkauf, Miete und Investitionen im Kosovo",
    description:
      "Vollständige Vermittlung: kostenlose Beratung, Marktbewertung, Besichtigungen, rechtliche Prüfung, Verhandlung und Vertrag. Transparente Provision, keine Exklusivitätspflicht.",
    breadcrumb: "Dienstleistungen",
    services: [
      { name: "Immobilienverkauf", description: "Professionelle Vermittlung für Verkauf von Wohnungen, Häusern, Villen, Büros, Geschäften und Bauland im Kosovo.", serviceType: "Real estate sales" },
      { name: "Vermietung", description: "Kurz- und langfristige Vermietung von Wohnungen, Häusern und Gewerbeflächen in Prishtina und Umgebung.", serviceType: "Real estate rentals" },
      { name: "Immobilieninvestitionen", description: "Investmentberatung, Bauland, Neubauwohnungen und Immobilienportfolios für Investoren im Kosovo-Markt.", serviceType: "Real estate investment" },
    ],
  },
};

const COPY = {
  sq: {
    eyebrow: "Shërbimet",
    title: "Shitje, qira dhe investime — me ekspertizë lokale",
    subtitle:
      "Çfarëdo qoftë qëllimi juaj — të blini shtëpinë e parë, të jepni një banesë me qira ose të ndërtoni një portfolio investimesh në Prishtinë — AS Capital Real Estate ju shoqëron nga konsultimi i parë deri te kontrata e nënshkruar.",
    process: {
      eyebrow: "Procesi ynë",
      title: "Si punojmë me ju — nga konsultimi te dorëzimi",
      subtitle:
        "Procesi ynë është i njëjtë për blerës, qiramarrës dhe investitorë: i strukturuar, transparent dhe i shoqëruar në çdo hap.",
      steps: [
        { title: "Konsultim falas", desc: "Takohemi pa angazhim. Ju dëgjojmë: qëllim, buxhet, afat, lagje, dhe pritshmëri." },
        { title: "Vlerësim i tregut", desc: "Ju paraqesim një pamje reale të çmimeve, mundësive dhe afateve për situatën tuaj specifike." },
        { title: "Kërkim ose listim", desc: "Nëse blini, kërkojmë në databazën tonë dhe te kontaktet aktive. Nëse jepni, përgatitim listingun, fotot dhe marketingun." },
        { title: "Vizita dhe negocime", desc: "Organizojmë vizitat, negociojmë çmimin dhe kushtet, dhe ju mbajmë të informuar pas çdo takimi." },
        { title: "Verifikim ligjor", desc: "Kontrollojmë fletë poseduese, hipotekat, lejet dhe të gjitha dokumentet para se të nënshkruani." },
        { title: "Kontratë dhe dorëzim", desc: "Përgatisim kontratën, koordinojmë me noterin dhe ju shoqërojmë deri në marrjen e çelësave ose pranimin e qiramarrësit." },
      ],
    },
    differentiators: {
      eyebrow: "Çka na bën të ndryshëm",
      title: "Pse klientët zgjedhin AS Capital",
      subtitle:
        "Nuk jemi vetëm ndërmjetës — jemi këshilltarët tuaj nga fillimi në fund. Kjo është arsyeja pse 8 nga 10 klientë vijnë nga rekomandime.",
      items: [
        { label: "Ekspertizë lokale", title: "Njohim çdo lagje në detaje", desc: "Çmimet reale, projektet e ardhshme, ndërtuesit e besueshëm, infrastruktura — informacioni që nuk gjendet në portalin e listingjeve." },
        { label: "Transparencë", title: "Pa surpriza në fund", desc: "Ju shpjegojmë të gjitha shpenzimet, taksat dhe komisionet që në takimin e parë. Çdo numër është i dokumentuar." },
        { label: "Verifikim", title: "Asnjë befasi pas blerjes", desc: "Çdo pronë kalon procesin tonë të verifikimit ligjor dhe teknik para se të hyjë në listë. Klientët tanë nuk merren me probleme pas dorëzimit." },
        { label: "Përkushtim", title: "Konsultim falas pa kufizim", desc: "Sa herë që keni pyetje, jemi në dispozicion — telefon, WhatsApp ose në zyrë. Pa orë faturuese, pa angazhim." },
      ],
    },
    faq: {
      eyebrow: "Pyetje të shpeshta",
      title: "Çka duhet të dini para se të punoni me ne",
      items: [
        { q: "Sa është komisioni i agjencisë?", a: "Komisioni varet nga lloji i transaksionit dhe vlera e pronës. Për shitje, zakonisht 2–3% nga vlera totale, e ndarë midis blerësit dhe shitësit ose e paguar nga njëra palë sipas marrëveshjes. Për qira, zakonisht një qira e plotë mujore. Të gjitha kushtet diskutohen dhe dakordohen me shkrim para fillimit." },
        { q: "A duhet të nënshkruaj kontratë ekskluzive me ju?", a: "Jo, nuk është e detyrueshme. Megjithatë, marrëveshje ekskluzive na lejon të investojmë më shumë në marketing dhe shpesh çon në një transaksion më të shpejtë dhe më të mirë. Vendimi është gjithmonë i juaji." },
        { q: "Sa shpejt mund të gjeni një pronë që më përshtatet?", a: "Nëse keni kritere të qarta dhe një buxhet realist, shumica e klientëve tanë gjejnë pronën e duhur brenda 2–6 javësh. Për kërkesa shumë specifike (vendndodhje e ngushtë, veçori të rralla), mund të zgjasë më shumë." },
        { q: "A ofroni shërbim për diasporën?", a: "Po. Kemi përvojë të gjerë me klientë nga Gjermania, Zvicra, SHBA dhe vende të tjera. Komunikojmë në Shqip, Anglisht dhe Gjermanisht, organizojmë vizita virtuale, dhe trajtojmë gjithë procesin përmes autorizimit kur është e nevojshme." },
        { q: "A më ndihmoni edhe pas blerjes ose qiradhënies?", a: "Po. Pas dorëzimit, qëndrojmë në dispozicion për pyetje juridike, lidhje me ekipe mirëmbajtjeje, dhe — për qiradhënësit — administrim të marrëdhënies me qiramarrësit. Marrëdhënia jonë nuk përfundon në ditën e dorëzimit." },
        { q: "Punoni edhe jashtë Prishtinës?", a: "Aktivisht në Obiliq, Fushë Kosovë, Lipjan dhe Graçanicë. Për lokacione më të largëta (Pejë, Gjakovë, Mitrovicë) shqyrtojmë rast pas rasti dhe shpesh punojmë me partnerë lokalë të besuar." },
      ],
    },
  },
  en: {
    eyebrow: "Services",
    title: "Sales, rentals and investments — with local expertise",
    subtitle:
      "Whatever your goal — buying your first home, renting out an apartment, or building an investment portfolio in Prishtina — AS Capital Real Estate guides you from the first consultation through to the signed contract.",
    process: {
      eyebrow: "Our process",
      title: "How we work with you — from consultation to handover",
      subtitle:
        "The process is the same for buyers, renters and investors: structured, transparent, and supported every step of the way.",
      steps: [
        { title: "Free consultation", desc: "We meet without commitment. We listen: goal, budget, timeline, neighbourhood, expectations." },
        { title: "Market assessment", desc: "We give you a realistic picture of prices, opportunities and timelines for your specific situation." },
        { title: "Search or list", desc: "If you're buying, we search our database and active contacts. If you're listing, we prepare the listing, photos and marketing." },
        { title: "Visits and negotiation", desc: "We arrange viewings, negotiate price and terms, and keep you informed after every meeting." },
        { title: "Legal verification", desc: "We check title deed, mortgages, permits and all documents before you sign anything." },
        { title: "Contract and handover", desc: "We prepare the contract, coordinate with the notary, and stay with you until keys or tenant move-in." },
      ],
    },
    differentiators: {
      eyebrow: "What sets us apart",
      title: "Why clients choose AS Capital",
      subtitle:
        "We're not just brokers — we're your advisors from start to finish. That's why 8 in 10 clients come from referrals.",
      items: [
        { label: "Local expertise", title: "We know every neighbourhood in detail", desc: "Real prices, upcoming projects, trusted developers, infrastructure — the information you don't get on a listings portal." },
        { label: "Transparency", title: "No surprises at the end", desc: "We explain every cost, tax and commission at the first meeting. Every number is documented." },
        { label: "Verification", title: "No surprises after the purchase", desc: "Every property goes through our legal and technical verification before it enters our list. Our clients don't deal with post-handover issues." },
        { label: "Dedication", title: "Unlimited free consultation", desc: "Whenever you have a question, we're available — phone, WhatsApp or office. No billable hours, no commitment." },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What you should know before working with us",
      items: [
        { q: "What is the agency commission?", a: "Commission depends on transaction type and property value. For sales, typically 2–3% of total value, split or paid by one party as agreed. For rentals, usually one full month's rent. All terms are discussed and agreed in writing upfront." },
        { q: "Do I have to sign an exclusive contract with you?", a: "No, it's not required. However, an exclusive arrangement lets us invest more in marketing and often leads to a faster, better transaction. The choice is always yours." },
        { q: "How quickly can you find a property that suits me?", a: "With clear criteria and a realistic budget, most of our clients find the right property within 2–6 weeks. Very specific requirements (narrow location, rare features) can take longer." },
        { q: "Do you serve the diaspora?", a: "Yes. We have wide experience with clients from Germany, Switzerland, the US and elsewhere. We work in Albanian, English and German, organise virtual viewings, and handle the full process by power of attorney when needed." },
        { q: "Do you help after the purchase or rental?", a: "Yes. After handover we remain available for legal questions, connections to maintenance teams, and — for landlords — managing the tenant relationship. Our relationship doesn't end on handover day." },
        { q: "Do you work outside Prishtina?", a: "Actively in Obiliq, Fushë Kosovë, Lipjan and Graçanicë. For more distant locations (Pejë, Gjakovë, Mitrovicë) we evaluate case by case, often with trusted local partners." },
      ],
    },
  },
  de: {
    eyebrow: "Dienstleistungen",
    title: "Verkauf, Vermietung und Investitionen — mit lokaler Expertise",
    subtitle:
      "Was auch immer Ihr Ziel ist — den Kauf Ihres ersten Eigenheims, die Vermietung einer Wohnung oder den Aufbau eines Investmentportfolios in Prishtina — AS Capital Real Estate begleitet Sie von der Erstberatung bis zum unterzeichneten Vertrag.",
    process: {
      eyebrow: "Unser Prozess",
      title: "Wie wir mit Ihnen arbeiten — von der Beratung bis zur Übergabe",
      subtitle:
        "Der Ablauf ist für Käufer, Mieter und Investoren gleich: strukturiert, transparent und in jedem Schritt begleitet.",
      steps: [
        { title: "Kostenlose Erstberatung", desc: "Wir treffen uns unverbindlich. Wir hören zu: Ziel, Budget, Zeitrahmen, Lage, Erwartungen." },
        { title: "Marktanalyse", desc: "Wir geben Ihnen ein realistisches Bild von Preisen, Chancen und Zeitrahmen für Ihre Situation." },
        { title: "Suche oder Listung", desc: "Beim Kauf suchen wir in unserer Datenbank und über aktive Kontakte. Bei der Vermarktung erstellen wir Listing, Fotos und Marketing." },
        { title: "Besichtigungen und Verhandlung", desc: "Wir organisieren Termine, verhandeln Preis und Konditionen und halten Sie nach jedem Treffen informiert." },
        { title: "Rechtliche Prüfung", desc: "Wir prüfen Grundbuch, Hypotheken, Genehmigungen und alle Dokumente, bevor Sie unterschreiben." },
        { title: "Vertrag und Übergabe", desc: "Wir erstellen den Vertrag, koordinieren mit dem Notar und begleiten Sie bis zur Schlüsselübergabe oder zum Einzug des Mieters." },
      ],
    },
    differentiators: {
      eyebrow: "Was uns unterscheidet",
      title: "Warum Kunden AS Capital wählen",
      subtitle:
        "Wir sind nicht nur Makler — wir sind Ihre Berater von Anfang bis Ende. Deshalb kommen 8 von 10 Kunden über Empfehlungen.",
      items: [
        { label: "Lokale Expertise", title: "Wir kennen jedes Quartier im Detail", desc: "Reale Preise, kommende Projekte, vertrauenswürdige Bauträger, Infrastruktur — Informationen, die Sie auf Portalen nicht bekommen." },
        { label: "Transparenz", title: "Keine Überraschungen am Ende", desc: "Wir erklären jede Kosten, Steuer und Provision schon im ersten Gespräch. Jede Zahl ist dokumentiert." },
        { label: "Prüfung", title: "Keine Überraschungen nach dem Kauf", desc: "Jede Immobilie durchläuft unsere rechtliche und technische Prüfung, bevor sie gelistet wird." },
        { label: "Engagement", title: "Unbegrenzte kostenlose Beratung", desc: "Wann immer Sie Fragen haben, sind wir erreichbar — Telefon, WhatsApp oder im Büro. Keine Stundenabrechnung, keine Verpflichtung." },
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Sie vor der Zusammenarbeit wissen sollten",
      items: [
        { q: "Wie hoch ist die Maklerprovision?", a: "Die Provision hängt von Transaktionsart und Wert ab. Beim Verkauf üblicherweise 2–3% des Gesamtwertes, geteilt oder von einer Partei nach Vereinbarung gezahlt. Bei Vermietung meist eine volle Monatsmiete. Alle Bedingungen werden vorab schriftlich festgehalten." },
        { q: "Muss ich einen Exklusivvertrag mit Ihnen schließen?", a: "Nein, es ist nicht erforderlich. Eine Exklusivvereinbarung erlaubt uns jedoch mehr Marketinginvestition und führt oft zu schnellerer und besserer Transaktion. Die Entscheidung liegt bei Ihnen." },
        { q: "Wie schnell finden Sie eine passende Immobilie?", a: "Bei klaren Kriterien und realistischem Budget finden die meisten Kunden innerhalb von 2–6 Wochen die passende Immobilie. Sehr spezifische Anforderungen können länger dauern." },
        { q: "Bedienen Sie auch die Diaspora?", a: "Ja. Wir haben breite Erfahrung mit Kunden aus Deutschland, der Schweiz, den USA und weltweit. Wir arbeiten auf Albanisch, Englisch und Deutsch, organisieren virtuelle Besichtigungen und übernehmen den ganzen Ablauf bei Bedarf per Vollmacht." },
        { q: "Helfen Sie auch nach dem Kauf oder der Vermietung?", a: "Ja. Nach der Übergabe stehen wir für rechtliche Fragen zur Verfügung, vermitteln Wartungsteams und — für Vermieter — verwalten die Mieterbeziehung. Unsere Beziehung endet nicht mit der Übergabe." },
        { q: "Arbeiten Sie auch außerhalb Prishtinas?", a: "Aktiv in Obiliq, Fushë Kosovë, Lipjan und Graçanicë. Für entferntere Lagen (Pejë, Gjakovë, Mitrovicë) prüfen wir im Einzelfall, oft mit vertrauenswürdigen lokalen Partnern." },
      ],
    },
  },
};

export default function ServicesPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;
  const seo = SEO[lang] || SEO.sq;
  const jsonLd = [
    webPageJsonLd({
      url: withLang("/sherbimet", lang),
      name: seo.title,
      description: seo.description,
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: withLang("/", lang) },
      { name: seo.breadcrumb, url: withLang("/sherbimet", lang) },
    ]),
    servicesGraphJsonLd(seo.services),
    faqPageJsonLd(c.faq.items),
  ];
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/sherbimet"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <Services />
      <ProcessSection
        eyebrow={c.process.eyebrow}
        title={c.process.title}
        subtitle={c.process.subtitle}
        steps={c.process.steps}
        className="bg-slate-50"
      />
      <FeatureGrid
        eyebrow={c.differentiators.eyebrow}
        title={c.differentiators.title}
        subtitle={c.differentiators.subtitle}
        items={c.differentiators.items}
        columns={2}
      />
      <FAQSection
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        items={c.faq.items}
        className="bg-slate-50"
      />
      <Testimonials />
      <Contact />
    </>
  );
}
