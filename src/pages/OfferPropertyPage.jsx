import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import OfferProperty from "../components/OfferProperty";
import ProcessSection from "../components/ProcessSection";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import PainGain from "../components/PainGain";
import StatsBar from "../components/StatsBar";
import PullQuote from "../components/PullQuote";
import BigCta from "../components/BigCta";
import { useLang } from "../LanguageContext";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Ofroni pronën — Vlerësim falas, komision vetëm pas mbylljes",
    description:
      "Listoni shtëpinë, banesën ose tokën tuaj me AS Capital. Vlerësim tregu falas, marketing profesional, blerës të verifikuar. Komision vetëm pas mbylljes së suksesshme.",
    breadcrumb: "Ofroni Pronën",
  },
  en: {
    title: "List your property — Free valuation, commission only after closing",
    description:
      "List your house, apartment or land with AS Capital. Free market valuation, professional marketing, verified buyers. Commission only after successful closing.",
    breadcrumb: "List Your Property",
  },
  de: {
    title: "Immobilie inserieren — Kostenlose Bewertung, Provision erst nach Abschluss",
    description:
      "Listen Sie Ihr Haus, Ihre Wohnung oder Ihr Grundstück bei AS Capital. Kostenlose Marktbewertung, professionelles Marketing, geprüfte Käufer. Provision erst nach Abschluss.",
    breadcrumb: "Immobilie inserieren",
  },
};

const COPY = {
  sq: {
    eyebrow: "Ofroni pronën",
    title: "Listoni pronën — vlerësim falas, komision vetëm pas mbylljes",
    subtitle:
      "Pa rrezik dhe pa kosto fillestare. Vlerësim tregu falas, foto profesionale, marketing aktiv te 1200+ blerës dhe qiramarrës të verifikuar në databazën tonë. Nëse nuk shitet, nuk paguani asgjë.",
    pain: {
      eyebrow: "Pse jo vetë në Facebook",
      title: "DIY në Facebook vs listim profesional — diferenca është e madhe",
      subtitle: "Shumica e pronarëve që provojnë vetë në grupe Facebook ngeleni 6+ muaj në treg dhe shesin 8–15% nën vlerën reale. Ja pse.",
      painLabel: "Vetë në Facebook",
      gainLabel: "Me AS Capital",
      pain: [
        "Foto me telefon — paraqitje që zhvlerëson pronën",
        "Postim që humbet midis qindra ofertave të tjera çdo ditë",
        "Blerës pa filtër — kohë e humbur me 'kuriozë'",
        "Negocim emocional — pranoni ofertën e parë të mirë",
        "Pa kontratë profesionale — rrezik ligjor pas dorëzimit",
        "6+ muaj në treg — çmimi 'fiket', vlera ulet",
      ],
      gain: [
        "Sesion fotografie profesionale — prona në dritën më të mirë",
        "Marketing aktiv te 1200+ blerës të verifikuar dhe portalet kryesore",
        "Vetëm blerës të kualifikuar para vizitës — kursehet koha juaj",
        "Negocim profesional — kursime mesatare 5–12% mbi ofertën fillestare",
        "Kontrata e rishikuar nga juristi ynë para nënshkrimit",
        "Mesatarja jonë: 4–10 javë për prona të çmimuara realisht",
      ],
    },
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
    stats: {
      eyebrow: "Numrat tanë",
      title: "Si performojnë listimet me ne",
      items: [
        { value: "4–10 javë", label: "Mesatarja e shitjes" },
        { value: "1200+", label: "Blerës aktivë në databazë" },
        { value: "0%", label: "Komision para mbylljes" },
        { value: "Falas", label: "Vlerësim i tregut" },
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
    quote: {
      text: "Pronën e kisha 8 muaj në Facebook pa lëvizur. Me AS Capital — sesion fotografie të dielën, listim të hënën, oferta të para të premten, kontrata pas tre javësh me 6,000 € më shumë sesa kërkesa ime fillestare. Pendohem vetëm që nuk i thirra më herët.",
      author: "Granit Mustafa",
      role: "Pronar shitës, Bregu i Diellit",
      avatar: "https://i.pravatar.cc/120?img=15",
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
    cta: {
      eyebrow: "Hapi tjetër",
      title: "Vlerësim falas i tregut — brenda 48 orëve, pa angazhim",
      desc: "Tregomëni adresën dhe na lejoni 48 orë. Ju ktheheni me një vlerësim të dokumentuar, plus një strategji të qartë listimi nëse zgjidhni të vazhdoni.",
      primary: "Kërko vlerësim falas",
      reassurance: "Vlerësimi është i juaji edhe nëse nuk vazhdoni me ne. Pa kosto, pa angazhim.",
    },
  },
  en: {
    eyebrow: "List your property",
    title: "List your property — free valuation, commission only after closing",
    subtitle:
      "No risk and no upfront cost. Free market valuation, professional photography, active marketing to 1200+ verified buyers and tenants in our database. If it doesn't sell, you pay nothing.",
    pain: {
      eyebrow: "Why not just Facebook",
      title: "Facebook DIY vs professional listing — the gap is wide",
      subtitle: "Most owners who try Facebook groups themselves stay 6+ months on market and sell 8–15% under real value. Here's why.",
      painLabel: "DIY on Facebook",
      gainLabel: "With AS Capital",
      pain: [
        "Phone-camera photos — presentation that devalues the property",
        "Post lost among hundreds of others every day",
        "Unfiltered buyers — wasted time on 'curious' visitors",
        "Emotional negotiation — accepting the first decent offer",
        "No professional contract — legal exposure after handover",
        "6+ months on market — the price 'goes stale', value drops",
      ],
      gain: [
        "Professional photo session — property at its best",
        "Active marketing to 1200+ verified buyers and main portals",
        "Only qualified buyers before viewings — your time saved",
        "Professional negotiation — average 5–12% above first offer",
        "Contract reviewed by our lawyer before signing",
        "Our average: 4–10 weeks for realistically priced properties",
      ],
    },
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
    stats: {
      eyebrow: "Our numbers",
      title: "How listings perform with us",
      items: [
        { value: "4–10 weeks", label: "Average time to sell" },
        { value: "1200+", label: "Active buyers in database" },
        { value: "0%", label: "Commission before closing" },
        { value: "Free", label: "Market valuation" },
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
    quote: {
      text: "I had the property on Facebook for 8 months without a single move. With AS Capital — photo session Sunday, listing Monday, first offers Friday, signed contract three weeks later at €6,000 above my asking price. I only regret not calling them earlier.",
      author: "Granit Mustafa",
      role: "Seller, Bregu i Diellit",
      avatar: "https://i.pravatar.cc/120?img=15",
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
    cta: {
      eyebrow: "Next step",
      title: "Free market valuation — within 48 hours, no commitment",
      desc: "Tell us the address and give us 48 hours. You get back a documented valuation, plus a clear listing strategy if you choose to continue.",
      primary: "Request free valuation",
      reassurance: "The valuation is yours even if you don't go ahead. No cost, no commitment.",
    },
  },
  de: {
    eyebrow: "Immobilie inserieren",
    title: "Immobilie inserieren — kostenlose Bewertung, Provision erst nach Abschluss",
    subtitle:
      "Kein Risiko und keine Vorlaufkosten. Kostenlose Marktbewertung, professionelle Fotos, aktives Marketing an 1200+ geprüfte Käufer und Mieter in unserer Datenbank. Wenn nicht verkauft wird, zahlen Sie nichts.",
    pain: {
      eyebrow: "Warum nicht selbst auf Facebook",
      title: "Facebook-DIY vs professionelle Listung — der Unterschied ist groß",
      subtitle: "Die meisten Eigentümer, die es selbst in Facebook-Gruppen versuchen, bleiben 6+ Monate am Markt und verkaufen 8–15% unter dem realen Wert. Hier ist warum.",
      painLabel: "Selbst auf Facebook",
      gainLabel: "Mit AS Capital",
      pain: [
        "Handy-Fotos — Präsentation, die das Objekt entwertet",
        "Beitrag verschwindet zwischen Hunderten anderen täglich",
        "Ungefilterte Käufer — Zeitverlust mit 'Neugierigen'",
        "Emotionale Verhandlung — erstes brauchbares Angebot wird angenommen",
        "Kein professioneller Vertrag — rechtliche Risiken nach der Übergabe",
        "6+ Monate am Markt — der Preis 'altert', der Wert sinkt",
      ],
      gain: [
        "Professionelles Foto-Shooting — Immobilie im besten Licht",
        "Aktives Marketing an 1200+ geprüfte Käufer und Hauptportale",
        "Nur qualifizierte Käufer vor Besichtigungen — Ihre Zeit gespart",
        "Professionelle Verhandlung — durchschnittlich 5–12% über Erstangebot",
        "Vertrag von unserem Anwalt geprüft vor der Unterschrift",
        "Unser Durchschnitt: 4–10 Wochen bei realistisch bepreisten Objekten",
      ],
    },
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
    stats: {
      eyebrow: "Unsere Zahlen",
      title: "Wie Inserate bei uns performen",
      items: [
        { value: "4–10 Wochen", label: "Durchschnittliche Verkaufsdauer" },
        { value: "1200+", label: "Aktive Käufer in Datenbank" },
        { value: "0%", label: "Provision vor Abschluss" },
        { value: "Gratis", label: "Marktbewertung" },
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
    quote: {
      text: "Das Objekt war 8 Monate auf Facebook ohne jede Bewegung. Mit AS Capital — Foto-Shooting Sonntag, Listung Montag, erste Angebote Freitag, Vertrag drei Wochen später für 6.000 € über meinem Wunschpreis. Ich bedauere nur, sie nicht früher angerufen zu haben.",
      author: "Granit Mustafa",
      role: "Verkäufer, Bregu i Diellit",
      avatar: "https://i.pravatar.cc/120?img=15",
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
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Kostenlose Marktbewertung — innerhalb 48 Stunden, unverbindlich",
      desc: "Nennen Sie uns die Adresse, geben Sie uns 48 Stunden. Sie erhalten eine dokumentierte Bewertung plus eine klare Listungsstrategie, falls Sie weitermachen.",
      primary: "Bewertung anfordern",
      reassurance: "Die Bewertung gehört Ihnen, auch wenn Sie nicht weitermachen. Kostenlos, unverbindlich.",
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
      <FeatureGrid
        eyebrow={c.benefits.eyebrow}
        title={c.benefits.title}
        subtitle={c.benefits.subtitle}
        items={c.benefits.items}
      />
      <StatsBar
        eyebrow={c.stats.eyebrow}
        title={c.stats.title}
        items={c.stats.items}
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
      <PullQuote {...c.quote} />
      <FAQSection
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        items={c.faq.items}
        className="bg-slate-50"
      />
      <BigCta
        eyebrow={c.cta.eyebrow}
        title={c.cta.title}
        description={c.cta.desc}
        primaryLabel={c.cta.primary}
        primaryPath="/kontakti"
        reassurance={c.cta.reassurance}
      />
    </>
  );
}
