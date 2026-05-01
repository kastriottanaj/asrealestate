import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import OfferProperty from "../components/OfferProperty";
import ProcessSection from "../components/ProcessSection";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import Newsletter from "../components/Newsletter";
import { useLang } from "../LanguageContext";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Listoni pronën tuaj — Shitje dhe qira me AS Capital",
    description:
      "Listim profesional i pronës suaj me AS Capital — vlerësim falas i tregut, foto cilësore, marketing i drejtuar dhe negocim. Komision vetëm pas mbylljes.",
    breadcrumb: "Ofroni Pronën",
  },
  en: {
    title: "List your property — Sell or rent with AS Capital",
    description:
      "Professional listing of your property with AS Capital — free market valuation, quality photography, targeted marketing and negotiation. Commission only after closing.",
    breadcrumb: "List Your Property",
  },
  de: {
    title: "Immobilie inserieren — Verkaufen oder vermieten mit AS Capital",
    description:
      "Professionelle Listung Ihrer Immobilie mit AS Capital — kostenlose Marktbewertung, hochwertige Fotos, gezieltes Marketing und Verhandlung. Provision erst nach Abschluss.",
    breadcrumb: "Immobilie inserieren",
  },
};

const COPY = {
  sq: {
    eyebrow: "Ofroni pronën",
    title: "Listoni pronën tuaj me AS Capital",
    subtitle:
      "Shitje e shpejtë, qira e sigurt, ose vlerësim falas i tregut — listingu juaj merr promovim profesional, fotografi cilësore dhe akses te një databazë e gjerë blerësish dhe qiramarrësish të verifikuar.",
    benefits: {
      eyebrow: "Pse të listoni me ne",
      title: "Çfarë merrni kur listoni pronën tuaj me AS Capital",
      subtitle: "Listingu juaj nuk është thjesht një postim në një portal — është një strategji e plotë marketingu për të gjetur blerësin ose qiramarrësin më të mirë sa më shpejt që është e mundur.",
      items: [
        { label: "Marketing", title: "Promovim profesional", desc: "Listingu shfaqet në uebsajtin tonë, kanalet sociale, dhe i dërgohet drejtpërdrejt klientëve aktivë në databazën tonë që përshtaten me kriteret tuaja." },
        { label: "Fotografi", title: "Foto dhe video cilësore", desc: "Punojmë me fotografë profesionistë për imazhe që e nxjerrin pronën në dritën më të mirë — sepse foto e dobët kushton mijëra euro në çmimin përfundimtar." },
        { label: "Vlerësim", title: "Vlerësim real i tregut", desc: "Përdorim njohjen tonë të lagjes dhe komp-eve të fundit për të vendosur një çmim që tërheq oferta serioze pa nënvlerësuar pronën tuaj." },
        { label: "Filtrim", title: "Filtrim i blerësve", desc: "Vetëm blerësit dhe qiramarrësit e verifikuar dhe seriozë vijnë në vizita — kursehet koha juaj dhe siguria e shtëpisë suaj." },
        { label: "Negocim", title: "Negocim profesional", desc: "Ne negociojmë çmimin dhe kushtet me ekspertizë tregu, jo me emocion — dhe merrni rezultate më të mira se sa të bëni vetë." },
        { label: "Mbështetje", title: "Mbështetje ligjore", desc: "Përgatisim ose rishikojmë kontratën, koordinojmë me noterin, dhe sigurohemi që dokumentet janë të rregullta para nënshkrimit." },
      ],
    },
    process: {
      eyebrow: "Procesi i listimit",
      title: "Si funksionon — nga kontakti i parë te dorëzimi",
      subtitle: "Procesi është i strukturuar dhe i shpejtë. Shumica e listingjeve janë gati për publikim brenda 5–7 ditëve nga kontakti i parë.",
      steps: [
        { title: "Kontakti i parë", desc: "Na shkruani përmes formës, telefonit ose WhatsApp. Diskutojmë pronën, qëllimin (shitje ose qira) dhe pritshmëritë tuaja." },
        { title: "Vizita dhe vlerësim", desc: "Vizitojmë pronën, marrim matjet, kontrollojmë dokumentet dhe ju paraqesim një vlerësim të tregut me arsyetim." },
        { title: "Përgatitja e listingut", desc: "Organizojmë sesionin e fotografisë, shkruajmë përshkrimin që tërheq, dhe përgatisim materialin e marketingut." },
        { title: "Publikimi dhe promovimi", desc: "Listingu shfaqet në kanalet tona dhe dërgohet drejtpërdrejt klientëve të interesuar nga databaza jonë." },
        { title: "Vizita dhe oferta", desc: "Organizojmë vizitat, na sjellim ofertat dhe ju mbajmë të informuar pas çdo prezantimi." },
        { title: "Negocim, kontratë, dorëzim", desc: "Negociojmë çmimin më të mirë, përgatisim kontratën me noterin, dhe ju shoqërojmë deri në dorëzim ose hyrje të qiramarrësit." },
      ],
    },
    commission: {
      eyebrow: "Komisioni dhe kushtet",
      title: "Transparencë e plotë — pa surpriza",
      subtitle: "E dimë që transparenca është gjëja më e rëndësishme kur i besoni dikujt pronën tuaj. Këtu janë kushtet tona — pa shtesa të fshehura.",
      items: [
        { label: "Shitje", title: "Komision 2–3% nga vlera e shitjes", desc: "Komisioni është negociueshëm sipas vlerës dhe kompleksitetit të transaksionit. Paguhet vetëm pas mbylljes së shitjes — nëse nuk shitet, nuk paguani asgjë." },
        { label: "Qira", title: "Komision 1 qira e plotë mujore", desc: "Standardi i tregut. Paguhet pas nënshkrimit të kontratës me qiramarrësin dhe hyrjes së tij. Mund të jetë i ndarë midis pronarit dhe qiramarrësit sipas marrëveshjes." },
        { label: "Vlerësim", title: "Vlerësim i tregut — falas", desc: "Nuk ka kosto për vlerësimin fillestar të tregut. Edhe nëse vendosni të mos vazhdoni me listimin, vlerësimi është i juaji." },
        { label: "Pa ekskluzivitet", title: "Pa detyrim ekskluziviteti", desc: "Mund të punoni edhe me agjenci të tjera. Megjithatë, marrëveshje ekskluzive na lejon të investojmë më shumë në marketing dhe shpesh shet më shpejt." },
      ],
    },
    faq: {
      eyebrow: "Pyetje të shpeshta",
      title: "Çka duhet të dini para se të listoni",
      items: [
        { q: "Sa kohë zgjat të shitet një banesë në Prishtinë me ju?", a: "Mesatarja jonë për banesa të çmimuara realisht në lagjet kryesore të Prishtinës është 4–10 javë. Prona të çmimuara mbi treg ose në lokacione më pak të kërkuara mund të zgjasin më shumë. Ne ju themi paraprakisht një afat realist." },
        { q: "Çfarë dokumentesh duhen për të listuar pronën?", a: "Fletë poseduese, letërnjoftim ose pasaportë të pronarit, kontratën origjinale të blerjes (nëse e keni), dhe — për banesa në ndërtesa — listën e shpenzimeve të mirëmbajtjes. Ne ju ndihmojmë të mbledhni gjithçka." },
        { q: "Kush i paguan shpenzimet e marketingut?", a: "Shpenzimet bazë (foto, listim në portalet tona, promovim) i mbulojmë ne. Për shërbime premium si video me dron, tour 360° ose paketa marketingu të zgjeruara, mund të bëhet marrëveshje paraprake." },
        { q: "A mund ta listoj pronën nëse jam në diasporë?", a: "Po. Punojmë rregullisht me pronarë në Gjermani, Zvicër, Austri dhe gjetkë. Mund të organizojmë gjithë procesin përmes WhatsApp, video-takimeve dhe autorizimit ligjor — pa pasur nevojë të ktheheni në Kosovë (përveç noterit kur kërkohet personalisht)." },
        { q: "Si i filtroni blerësit dhe qiramarrësit?", a: "Verifikojmë identitetin, seriozitetin financiar dhe motivimin para se t'i sjellim në vizitë. Për qiramarrës, kërkojmë verifikim të punësimit dhe referenca kur është e nevojshme. Ju shkojnë në vizitë vetëm njerëz të verifikuar." },
        { q: "Çfarë ndodh nëse pronën nuk e shitni?", a: "Nuk paguani asgjë. Komisioni jonë paguhet vetëm pas mbylljes së suksesshme të transaksionit. Nëse pas një periudhe vendosim së bashku se prona nuk po lëviz, mund të rishikojmë çmimin ose strategjinë — ose ta hiqni nga lista pa kosto." },
      ],
    },
  },
  en: {
    eyebrow: "List your property",
    title: "List your property with AS Capital",
    subtitle:
      "Fast sale, safe rental, or a free market valuation — your listing gets professional promotion, quality photography, and access to a wide pool of verified buyers and tenants.",
    benefits: {
      eyebrow: "Why list with us",
      title: "What you get when you list with AS Capital",
      subtitle: "Your listing isn't just a portal post — it's a complete marketing strategy to find the best buyer or tenant as fast as possible.",
      items: [
        { label: "Marketing", title: "Professional promotion", desc: "Your listing shows on our website, social channels, and is sent directly to active clients in our database who match your criteria." },
        { label: "Photography", title: "Quality photos and video", desc: "We work with professional photographers for images that show the property at its best — because weak photos cost thousands of euros in final price." },
        { label: "Valuation", title: "Real market valuation", desc: "We use neighbourhood knowledge and recent comps to set a price that draws serious offers without underselling." },
        { label: "Filtering", title: "Buyer filtering", desc: "Only verified, serious buyers and tenants come to viewings — saving your time and your home's privacy." },
        { label: "Negotiation", title: "Professional negotiation", desc: "We negotiate price and terms with market expertise, not emotion — and you get better results than negotiating yourself." },
        { label: "Support", title: "Legal support", desc: "We prepare or review the contract, coordinate with the notary, and make sure documents are in order before signing." },
      ],
    },
    process: {
      eyebrow: "Listing process",
      title: "How it works — from first contact to handover",
      subtitle: "The process is structured and fast. Most listings are ready to publish within 5–7 days of first contact.",
      steps: [
        { title: "First contact", desc: "Reach us via the form, phone or WhatsApp. We discuss the property, your goal (sale or rental) and expectations." },
        { title: "Visit and valuation", desc: "We visit the property, take measurements, check documents, and present a market valuation with reasoning." },
        { title: "Listing preparation", desc: "We organise the photo session, write a compelling description, and prepare marketing materials." },
        { title: "Publication and promotion", desc: "The listing goes live on our channels and is sent directly to interested clients from our database." },
        { title: "Visits and offers", desc: "We arrange viewings, bring offers, and keep you informed after every viewing." },
        { title: "Negotiation, contract, handover", desc: "We negotiate the best price, prepare the contract with the notary, and stay with you until handover or tenant move-in." },
      ],
    },
    commission: {
      eyebrow: "Commission and terms",
      title: "Full transparency — no surprises",
      subtitle: "We know transparency matters most when you're trusting someone with your property. Here are our terms — with no hidden additions.",
      items: [
        { label: "Sale", title: "Commission 2–3% of sale value", desc: "Commission is negotiable based on value and complexity. Paid only after closing — if it doesn't sell, you pay nothing." },
        { label: "Rental", title: "Commission 1 full month's rent", desc: "Market standard. Paid after the rental contract is signed and the tenant moves in. Can be split between landlord and tenant by agreement." },
        { label: "Valuation", title: "Market valuation — free", desc: "No cost for the initial market valuation. Even if you don't proceed with the listing, the valuation is yours." },
        { label: "No exclusivity", title: "No exclusivity obligation", desc: "You can also work with other agencies. That said, an exclusive arrangement lets us invest more in marketing and often sells faster." },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What you should know before listing",
      items: [
        { q: "How long does an apartment in Prishtina take to sell with you?", a: "Our average for realistically priced apartments in central Prishtina neighbourhoods is 4–10 weeks. Properties priced above market or in less in-demand locations may take longer. We give you a realistic timeline upfront." },
        { q: "What documents do I need to list?", a: "Title deed, owner's ID or passport, original purchase contract (if you have it), and — for apartments in buildings — the maintenance fee schedule. We help you collect everything." },
        { q: "Who pays for marketing?", a: "Standard costs (photos, listing on our portals, promotion) are on us. Premium services like drone video, 360° tours or expanded marketing packages can be agreed upfront." },
        { q: "Can I list if I'm in the diaspora?", a: "Yes. We regularly work with owners in Germany, Switzerland, Austria and elsewhere. We can run the entire process via WhatsApp, video meetings and legal power of attorney — without you returning to Kosovo (except notary appointments where in-person is required)." },
        { q: "How do you filter buyers and tenants?", a: "We verify identity, financial seriousness and motivation before bringing anyone to a viewing. For tenants, we ask for employment verification and references when necessary. Only verified people come to your property." },
        { q: "What if you can't sell my property?", a: "You pay nothing. Our commission is only paid after a successful closing. If after some time we decide together the property isn't moving, we can revisit the price or strategy — or you can delist at no cost." },
      ],
    },
  },
  de: {
    eyebrow: "Immobilie inserieren",
    title: "Inserieren Sie Ihre Immobilie bei AS Capital",
    subtitle:
      "Schneller Verkauf, sichere Vermietung oder eine kostenlose Marktbewertung — Ihr Inserat erhält professionelle Vermarktung, hochwertige Fotos und Zugang zu einem breiten Pool verifizierter Käufer und Mieter.",
    benefits: {
      eyebrow: "Warum bei uns inserieren",
      title: "Was Sie bekommen, wenn Sie bei AS Capital inserieren",
      subtitle: "Ihr Inserat ist nicht nur ein Portal-Eintrag — es ist eine vollständige Marketing-Strategie, um den besten Käufer oder Mieter so schnell wie möglich zu finden.",
      items: [
        { label: "Marketing", title: "Professionelle Vermarktung", desc: "Ihr Inserat erscheint auf unserer Website, in unseren Social-Channels und wird direkt an aktive Kunden in unserer Datenbank gesendet." },
        { label: "Fotografie", title: "Qualitätsfotos und Video", desc: "Wir arbeiten mit professionellen Fotografen — denn schlechte Fotos kosten tausende Euro im Endpreis." },
        { label: "Bewertung", title: "Reale Marktbewertung", desc: "Mit Quartiers-Kenntnis und aktuellen Vergleichswerten setzen wir einen Preis, der ernsthafte Angebote bringt, ohne unter Wert zu verkaufen." },
        { label: "Filterung", title: "Käufer-Filterung", desc: "Nur geprüfte, ernsthafte Käufer und Mieter kommen zur Besichtigung — das spart Zeit und Privatsphäre." },
        { label: "Verhandlung", title: "Professionelle Verhandlung", desc: "Wir verhandeln Preis und Konditionen mit Marktwissen, nicht mit Emotion — Sie erhalten bessere Ergebnisse als beim Selbstverkauf." },
        { label: "Begleitung", title: "Rechtliche Begleitung", desc: "Wir erstellen oder prüfen den Vertrag, koordinieren mit dem Notar und stellen sicher, dass alle Dokumente vor der Unterschrift in Ordnung sind." },
      ],
    },
    process: {
      eyebrow: "Inserierungsprozess",
      title: "So läuft es — vom ersten Kontakt bis zur Übergabe",
      subtitle: "Der Prozess ist strukturiert und schnell. Die meisten Inserate sind innerhalb von 5–7 Tagen nach Erstkontakt veröffentlichungsbereit.",
      steps: [
        { title: "Erstkontakt", desc: "Erreichen Sie uns über Formular, Telefon oder WhatsApp. Wir besprechen Objekt, Ziel (Verkauf oder Vermietung) und Erwartungen." },
        { title: "Besichtigung und Bewertung", desc: "Wir besichtigen das Objekt, nehmen Maße, prüfen Dokumente und legen eine Marktbewertung mit Begründung vor." },
        { title: "Inseratsvorbereitung", desc: "Wir organisieren das Fotoshooting, schreiben eine überzeugende Beschreibung und bereiten das Marketingmaterial vor." },
        { title: "Veröffentlichung und Vermarktung", desc: "Das Inserat geht auf unseren Kanälen live und wird direkt an interessierte Kunden aus unserer Datenbank gesendet." },
        { title: "Besichtigungen und Angebote", desc: "Wir organisieren Termine, bringen Angebote und halten Sie nach jeder Besichtigung informiert." },
        { title: "Verhandlung, Vertrag, Übergabe", desc: "Wir verhandeln den besten Preis, erstellen den Vertrag mit dem Notar und begleiten bis zur Übergabe oder zum Einzug des Mieters." },
      ],
    },
    commission: {
      eyebrow: "Provision und Konditionen",
      title: "Volle Transparenz — keine Überraschungen",
      subtitle: "Transparenz zählt am meisten, wenn Sie jemandem Ihre Immobilie anvertrauen. Hier sind unsere Konditionen — ohne versteckte Zusätze.",
      items: [
        { label: "Verkauf", title: "Provision 2–3% des Verkaufswerts", desc: "Provision ist verhandelbar nach Wert und Komplexität. Zahlung erst nach Abschluss — wenn nicht verkauft wird, zahlen Sie nichts." },
        { label: "Vermietung", title: "Provision 1 volle Monatsmiete", desc: "Marktstandard. Zahlung nach Mietvertragsabschluss und Einzug. Kann nach Vereinbarung zwischen Vermieter und Mieter geteilt werden." },
        { label: "Bewertung", title: "Marktbewertung — kostenlos", desc: "Keine Kosten für die Erst-Marktbewertung. Auch wenn Sie nicht mit dem Inserat fortfahren, bleibt die Bewertung Ihre." },
        { label: "Keine Exklusivität", title: "Keine Exklusivitätspflicht", desc: "Sie können auch mit anderen Agenturen arbeiten. Eine Exklusivvereinbarung erlaubt uns jedoch mehr Marketing — und verkauft oft schneller." },
      ],
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Sie vor der Inserierung wissen sollten",
      items: [
        { q: "Wie lange dauert ein Wohnungsverkauf in Prishtina mit Ihnen?", a: "Unser Durchschnitt für realistisch bepreiste Wohnungen in zentralen Prishtina-Quartieren liegt bei 4–10 Wochen. Über Markt bepreiste oder in weniger gefragten Lagen liegende Objekte dauern länger. Wir geben Ihnen vorab einen realistischen Zeitrahmen." },
        { q: "Welche Dokumente brauche ich für die Inserierung?", a: "Grundbuchauszug, Ausweis oder Pass des Eigentümers, Originalkaufvertrag (falls vorhanden) und — für Wohnungen in Mehrfamilienhäusern — Hausgeld-Übersicht. Wir helfen beim Sammeln aller Unterlagen." },
        { q: "Wer bezahlt das Marketing?", a: "Standardkosten (Fotos, Listung auf unseren Portalen, Promotion) übernehmen wir. Premium-Leistungen wie Drohnen-Video, 360°-Tour oder erweiterte Marketing-Pakete vereinbaren wir vorab." },
        { q: "Kann ich aus der Diaspora inserieren?", a: "Ja. Wir arbeiten regelmäßig mit Eigentümern in Deutschland, der Schweiz, Österreich und anderswo. Den gesamten Prozess können wir per WhatsApp, Video und Vollmacht durchführen — ohne dass Sie in den Kosovo zurückkehren müssen (außer bei zwingend persönlichen Notarterminen)." },
        { q: "Wie filtern Sie Käufer und Mieter?", a: "Wir prüfen Identität, finanzielle Seriosität und Motivation vor jeder Besichtigung. Für Mieter holen wir bei Bedarf Arbeitsbestätigung und Referenzen ein. Nur geprüfte Personen kommen zu Ihnen." },
        { q: "Was, wenn Sie meine Immobilie nicht verkaufen können?", a: "Sie zahlen nichts. Unsere Provision wird nur nach erfolgreichem Abschluss fällig. Falls wir nach einiger Zeit gemeinsam feststellen, dass das Objekt nicht läuft, können wir Preis oder Strategie überprüfen — oder Sie ziehen das Inserat kostenlos zurück." },
      ],
    },
  },
};

export default function OfferPropertyPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;
  const seo = SEO[lang] || SEO.sq;
  const jsonLd = [
    webPageJsonLd({
      url: withLang("/ofroni-pronen", lang),
      name: seo.title,
      description: seo.description,
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: withLang("/", lang) },
      { name: seo.breadcrumb, url: withLang("/ofroni-pronen", lang) },
    ]),
    faqPageJsonLd(c.faq.items),
  ];
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/ofroni-pronen"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <OfferProperty />
      <FeatureGrid
        eyebrow={c.benefits.eyebrow}
        title={c.benefits.title}
        subtitle={c.benefits.subtitle}
        items={c.benefits.items}
      />
      <ProcessSection
        eyebrow={c.process.eyebrow}
        title={c.process.title}
        subtitle={c.process.subtitle}
        steps={c.process.steps}
        className="bg-slate-50"
      />
      <FeatureGrid
        eyebrow={c.commission.eyebrow}
        title={c.commission.title}
        subtitle={c.commission.subtitle}
        items={c.commission.items}
        columns={2}
        dark
      />
      <FAQSection
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        items={c.faq.items}
      />
      <Newsletter />
    </>
  );
}
