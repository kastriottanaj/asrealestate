import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Properties from "../components/Properties";
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
    title: "Prona në Kosovë — Shitje, qira, investime",
    description:
      "Listingje aktive në Prishtinë, Obiliq, Fushë Kosovë. Banesa, vila, zyre dhe tokë me fletë poseduese të verifikuar dhe çmime në EUR. Vlerësim falas i pronës që ju përshtatet.",
    breadcrumb: "Prona",
  },
  en: {
    title: "Properties in Kosovo — Sales, rentals, investments",
    description:
      "Active listings in Prishtina, Obiliq, Fushë Kosovë and beyond. Apartments, villas, offices, retail and land with verified title and EUR pricing. Free assessment of the property that fits you.",
    breadcrumb: "Properties",
  },
  de: {
    title: "Immobilien im Kosovo — Verkauf, Miete, Investment",
    description:
      "Aktuelle Angebote in Prishtina, Obiliq, Fushë Kosovë. Wohnungen, Villen, Büros und Bauland mit geprüftem Titel und EUR-Preisen. Kostenlose Bewertung der passenden Immobilie.",
    breadcrumb: "Immobilien",
  },
};

const COPY = {
  sq: {
    eyebrow: "Prona aktive",
    title: "Pronën e duhur, në çmim të drejtë, pa befasi",
    subtitle:
      "Mbi 500 prona të shitura dhe 1200+ familje të vendosura në Prishtinë, Obiliq dhe rajon. Çdo listing kalon verifikim ligjor para se të arrijë te ju — fletë poseduese, leje ndërtimi, hipotekë dhe debitë komunale të kontrolluara.",
    pain: {
      eyebrow: "Si e gjeni pronën sot",
      title: "Lëreni grupet e Facebook-ut. Le të punojë ekipi për ju.",
      subtitle: "Shumica e blerësve në Kosovë humbin 3–6 muaj duke kërkuar vetë. Ja pse.",
      painLabel: "Vetë në treg",
      gainLabel: "Me AS Real Estate",
      pain: [
        "Postime pa filtër në Facebook me foto të dobëta dhe çmime të rrejshme",
        "Vizita pa fund në prona që nuk përshtaten me buxhetin ose lagjen",
        "Çmime të ekzagjeruara — pa njohje të kompeve reale të lagjes",
        "Rrezik për fletë poseduese të paqarta, hipoteka të fshehura, debitë komunale",
        "Negocim emocional që ju kushton mijëra euro mbi çmimin e drejtë",
        "Procesi ligjor i panjohur — kontrata, noter, regjistrim, taksa",
      ],
      gain: [
        "Vetëm prona që përshtaten me kriteret e juaja — dërguar drejtpërdrejt",
        "Vizita të organizuara në një ditë, me agjent që ju shoqëron",
        "Çmim i drejtë — verifikuar me 8 vite kompe lagjeje në dorë",
        "Verifikim i plotë ligjor para se prona të hyjë në listën tonë",
        "Negocim profesional — kursime mesatare 5–12% mbi çmimin e listuar",
        "Të gjitha dokumentet, noteri dhe regjistrimi — koordinuar nga ne",
      ],
    },
    stats: {
      items: [
        { value: "500+", label: "Prona të shitura" },
        { value: "1200+", label: "Familje të vendosura" },
        { value: "8 vite", label: "Përvojë në treg" },
        { value: "98%", label: "Klientë rekomandues" },
      ],
    },
    process: {
      eyebrow: "Si funksionon",
      title: "Nga konsultimi i parë te çelësat — në 6 hapa të qarta",
      subtitle:
        "Pa surpriza, pa kosto të fshehura. Konsultimi i parë është gjithmonë falas — nëse nuk vazhdoni, nuk paguani asgjë.",
      steps: [
        { title: "Konsultim falas", desc: "Dëgjojmë buxhetin, qëllimin (banim ose investim), preferencat e lagjes dhe afatin tuaj — pa asnjë angazhim." },
        { title: "Filtrim i pronave", desc: "Nga databaza jonë e pronave aktive, përzgjedhim ato që përshtaten realisht — jo të gjitha që afrohen." },
        { title: "Vizita të organizuara", desc: "Caktojmë vizitat në një ditë të vetme kur është e mundur, me agjent që ju shoqëron." },
        { title: "Verifikim ligjor", desc: "Para çdo oferte: fletë poseduese, hipotekat, lejet, debitë komunale dhe statusi i pronarit." },
        { title: "Negocim i çmimit", desc: "Përdorim njohjen e tregut dhe kompet e lagjes për t'ju siguruar çmimin më të mirë të mundshëm." },
        { title: "Kontratë dhe dorëzim", desc: "Përgatisim ose rishikojmë kontratën, koordinojmë me noterin dhe ju shoqërojmë deri te çelësat." },
      ],
    },
    locations: {
      eyebrow: "Mbulimi gjeografik",
      title: "Lagjet ku njohim çmimet reale, jo ato të portaleve",
      subtitle:
        "8 vite në çdo lagje të Prishtinës dhe rajonit. Njohim ndërtuesit, projektet që po ndryshojnë çmimet dhe kurthet që duhen shmangur.",
      items: [
        { label: "Prishtinë qendrore", title: "Qendër, Arbëri, Dardania, Ulpianë", desc: "Lagjet më të kërkuara — banesa premium, çmime në rritje të qëndrueshme, kërkesë e lartë qiraje." },
        { label: "Prishtinë periferike", title: "Veternik, Bregu i Diellit, Aktash, Lakrishte", desc: "Vlera për para më e mirë për familje të reja, banesa moderne të ndërtuara në 5–10 vitet e fundit." },
        { label: "Zona biznesi", title: "Qendra e Re, New Born, Rruga B", desc: "Lokacione kryesore për zyre dhe lokale tregtare. Kërkesa e qiramarrësve mbetet e qëndrueshme." },
        { label: "Komunat fqinje", title: "Obiliq, Fushë Kosovë, Lipjan, Graçanicë", desc: "Çmime më të kapshme se Prishtina, potencial i mirë investimi për tokë dhe banesa të reja." },
        { label: "Investime", title: "Tokë ndërtimore me leje", desc: "Parcela me leje ndërtimi në Fushë Kosovë, Obiliq dhe periferi të Prishtinës — për ndërtim privat ose projekte." },
        { label: "Prona luksoze", title: "Vila dhe penthouse", desc: "Prona ekskluzive me pamje, kopsht ose pishinë në lagjet premium dhe periferinë e qetë të Prishtinës." },
      ],
    },
    verification: {
      eyebrow: "Para se të hyjë në listë",
      title: "Çfarë verifikojmë në çdo pronë",
      subtitle:
        "Asnjë pronë nuk shfaqet në listingjet tona pa kaluar verifikimin tonë ligjor dhe teknik. Kjo është arsyeja pse klientët tanë nuk kanë befasi pas blerjes.",
      items: [
        { title: "Fletë poseduese e pastër", desc: "Verifikojmë në kadastër pronarin aktual, sipërfaqen reale dhe çdo barrë mbi pronën." },
        { title: "Statusi i hipotekës", desc: "Kontrollojmë nëse prona është e hipotekuar dhe pozicionin ndaj bankave ose kreditorëve." },
        { title: "Lejet e ndërtimit", desc: "Sigurohemi që objekti është ndërtuar me leje, ka leje shfrytëzimi dhe është i regjistruar saktë." },
        { title: "Debitë komunale", desc: "Verifikojmë borxhet për tatim në pronë, ujë, mbeturina dhe shërbime të tjera para nënshkrimit." },
        { title: "Identiteti i shitësit", desc: "Konfirmojmë identitetin dhe autorizimet e shitësit ose përfaqësuesit ligjor — sidomos te diaspora." },
        { title: "Inspektim teknik", desc: "Për pronat më të vjetra, organizojmë vlerësim teknik për dëme strukturore, lagështi dhe instalime." },
      ],
    },
    quote: {
      text: "Po kërkoja banesën e parë për familjen prej 4 muajsh në grupe Facebook. Me AS Real Estate e gjeta brenda 3 javësh — me kontratë të pastër dhe çmim 8% nën listim. Nuk do të kthehesha kurrë te metoda e vjetër.",
      author: "Adelina Krasniqi",
      role: "Bleresë e banesës së parë, Dardania",
      avatar: "https://i.pravatar.cc/120?img=44",
    },
    faq: {
      eyebrow: "Pyetje të shpeshta",
      title: "Çfarë duhet të dini para se të blini ose merrni me qira",
      items: [
        { q: "A duhet të paguaj diçka për të parë një pronë?", a: "Jo. Konsultimi i parë, vizitat e pronave dhe diskutimi i opsioneve janë gjithmonë falas. Ju paguani vetëm nëse vendosni të vazhdoni me një transaksion përmes nesh." },
        { q: "Sa zgjat procesi i blerjes së një banese në Kosovë?", a: "Nga oferta e pranuar deri te marrja e çelësave, zakonisht 2–6 javë. Nëse blerja bëhet me kredi bankare, procesi mund të zgjatë deri në 8 javë për shkak të vlerësimit të bankës dhe miratimit." },
        { q: "Cilat dokumente duhen për blerjen e një banese?", a: "Letërnjoftim ose pasaportë, fletë poseduese e shitësit, kontratë blerje-shitje e noterizuar, certifikatë nga kadastri, dhe — nëse aplikohet — autorizim i diasporës. Ne ju ndihmojmë të mbledhni dhe verifikoni gjithçka." },
        { q: "A mund të blej pronë në Kosovë si person nga diaspora?", a: "Po, qytetarët e Kosovës me banim jashtë vendit dhe shumica e të huajve mund të blejnë pronë në emrin e tyre. Ne kemi përvojë të gjerë me klientë nga Gjermania, Zvicra, SHBA dhe vende të tjera, përfshirë gjithë procedurën me autorizim." },
        { q: "Sa janë taksat dhe shpenzimet shtesë mbi çmimin e shitjes?", a: "Tatimi në qarkullim të pronës është 0% për blerësin (paguhet nga shitësi nëse aplikohet). Shpenzimet kryesore për blerësin janë: noter (rreth 0.3–0.5% e vlerës), regjistrim në kadastër, dhe — opsionale — komisioni i agjencisë. Ne i shpjegojmë të gjitha shpenzimet para nënshkrimit." },
        { q: "A bëni inspektim teknik para se të blej?", a: "Po, sidomos për prona të vjetra. Mund të organizojmë inspektim me inxhinier ndërtimi për të vlerësuar dëme strukturore, izolim, instalime dhe sisteme — shpenzim që paguhet veçmas, por që mund t'ju kursejë mijëra euro në riparime." },
        { q: "Çka ndodh nëse pas blerjes shfaqet ndonjë problem ligjor?", a: "Procesi ynë i verifikimit synon të parandalojë çdo problem para nënshkrimit. Megjithatë, gjatë gjithë procesit ne ofrojmë mbështetje juridike dhe pas dorëzimit qëndrojmë në dispozicion për çdo pyetje që mund të lindë." },
      ],
    },
    cta: {
      eyebrow: "Hapi tjetër",
      title: "Tregomëni ç'kërkoni — ne ju paraqesim 3 prona që përshtaten brenda 48 orëve",
      desc: "Konsultimi i parë është gjithmonë falas. Ju zgjidhni nëse vazhdojmë — pa presion, pa angazhim.",
      primary: "Konsultim falas",
      reassurance: "Përgjigje në WhatsApp brenda 1–2 orësh në orarin e punës. Pa kosto, pa angazhim.",
    },
  },
  en: {
    eyebrow: "Active listings",
    title: "The right property, at the right price, with no surprises",
    subtitle:
      "500+ properties sold and 1200+ families settled across Prishtina, Obiliq and the wider region. Every listing passes legal verification before it reaches you — title deed, building permits, mortgages and municipal debts all checked.",
    pain: {
      eyebrow: "How you find a property today",
      title: "Drop the Facebook groups. Let our team work for you.",
      subtitle: "Most buyers in Kosovo lose 3–6 months searching alone. Here's why.",
      painLabel: "On your own",
      gainLabel: "With AS Real Estate",
      pain: [
        "Unfiltered Facebook posts with weak photos and inflated prices",
        "Endless viewings of properties that don't match your budget or area",
        "Above-market prices — no real neighbourhood comps to anchor on",
        "Risk of unclear title, hidden mortgages, unpaid municipal debts",
        "Emotional negotiation that costs you thousands above fair value",
        "Unfamiliar legal process — contract, notary, registration, taxes",
      ],
      gain: [
        "Only properties that match your criteria — sent directly to you",
        "Viewings organised in a single day, with an agent alongside you",
        "Fair price — backed by 8 years of neighbourhood comps in hand",
        "Full legal verification before a property even enters our list",
        "Professional negotiation — average 5–12% off the listed price",
        "All documents, notary and registration — coordinated by us",
      ],
    },
    stats: {
      items: [
        { value: "500+", label: "Properties sold" },
        { value: "1200+", label: "Families settled" },
        { value: "8 years", label: "Market experience" },
        { value: "98%", label: "Client referrals" },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From first consultation to keys — in 6 clear steps",
      subtitle:
        "No surprises, no hidden costs. The first consultation is always free — if you don't proceed, you pay nothing.",
      steps: [
        { title: "Free consultation", desc: "We discuss your budget, goal (living or investment), neighbourhood preferences and timeline — no commitment." },
        { title: "Filtered shortlist", desc: "From our database of active listings, we hand-pick the ones that genuinely match your criteria." },
        { title: "Organised visits", desc: "We schedule viewings together where possible to save your time, with an agent alongside you." },
        { title: "Legal verification", desc: "Before any offer, we verify title deed, mortgages, building permits, municipal debts and the seller's status." },
        { title: "Price negotiation", desc: "We use our market knowledge and neighbourhood comps to secure the best possible price for you." },
        { title: "Contract and handover", desc: "We prepare or review the contract, coordinate with the notary, and stay with you until you receive the keys." },
      ],
    },
    locations: {
      eyebrow: "Coverage",
      title: "The neighbourhoods where we know real prices, not portal prices",
      subtitle:
        "8 years across every neighbourhood in Prishtina and the region. We know the developers, the projects shifting prices, and the pitfalls to avoid.",
      items: [
        { label: "Central Prishtina", title: "Qendër, Arbëri, Dardania, Ulpianë", desc: "The most sought-after neighbourhoods for living and investing — premium apartments, steady price growth, strong rental demand." },
        { label: "Outer Prishtina", title: "Veternik, Bregu i Diellit, Aktash, Lakrishte", desc: "Best value-for-money for young families, modern apartments built in the last 5–10 years, easy access to the centre." },
        { label: "Business zones", title: "Qendra e Re, New Born, Rruga B", desc: "Prime locations for offices and retail. Steady tenant demand from local and international companies." },
        { label: "Neighbouring municipalities", title: "Obiliq, Fushë Kosovë, Lipjan, Graçanicë", desc: "More affordable than Prishtina, strong investment potential for buildable land, new apartments and family houses." },
        { label: "Investment", title: "Buildable land with permits", desc: "Plots with permits in Fushë Kosovë, Obiliq and the Prishtina periphery — for private builds or larger projects." },
        { label: "Luxury", title: "Villas and penthouses", desc: "Exclusive properties with views, gardens or pools in premium neighbourhoods and the quiet Prishtina periphery." },
      ],
    },
    verification: {
      eyebrow: "Before it goes on the list",
      title: "What we verify on every property",
      subtitle:
        "No property appears on our listings without passing our legal and technical checks. That's why our clients have no surprises after purchase.",
      items: [
        { title: "Clean title deed", desc: "We verify in the cadastre the current owner, real surface area, and any encumbrances on the property." },
        { title: "Mortgage status", desc: "We check whether the property is mortgaged and the position relative to banks or creditors." },
        { title: "Building permits", desc: "We make sure the building was constructed with permits, has a use permit, and is correctly registered." },
        { title: "Municipal debts", desc: "We verify outstanding property tax, water, waste and other utility debts before signing." },
        { title: "Seller identity", desc: "We confirm the seller's identity and legal authorisations — especially in diaspora cases." },
        { title: "Technical inspection", desc: "For older properties, we arrange a technical assessment for structural damage, damp, electrical and plumbing systems." },
      ],
    },
    quote: {
      text: "I'd been searching for our family's first apartment for 4 months in Facebook groups. With AS Real Estate we found it in 3 weeks — clean contract, 8% under list. I'd never go back to the old way.",
      author: "Adelina Krasniqi",
      role: "First-time buyer, Dardania",
      avatar: "https://i.pravatar.cc/120?img=44",
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "What you should know before buying or renting",
      items: [
        { q: "Do I have to pay anything to view a property?", a: "No. The first consultation, viewings and discussion of options are always free. You only pay if you decide to proceed with a transaction through us." },
        { q: "How long does buying an apartment in Kosovo take?", a: "From accepted offer to keys, typically 2–6 weeks. With a bank loan it can take up to 8 weeks due to bank valuation and approval." },
        { q: "What documents do I need to buy an apartment?", a: "ID or passport, the seller's title deed, a notarised purchase agreement, cadastre certificate, and — if applicable — a diaspora power of attorney. We help gather and verify everything." },
        { q: "Can I buy property in Kosovo from the diaspora?", a: "Yes. Kosovan citizens living abroad and most foreigners can buy property in their own name. We have wide experience with clients from Germany, Switzerland, the US and elsewhere, including the full process by power of attorney." },
        { q: "What taxes and extra costs apply on top of the price?", a: "Property transfer tax is 0% for the buyer (paid by the seller where applicable). Main buyer costs are: notary (about 0.3–0.5% of value), cadastre registration, and — optionally — agency commission. We explain all costs before signing." },
        { q: "Do you do a technical inspection before I buy?", a: "Yes, especially for older properties. We can arrange an engineer's inspection to assess structural damage, insulation, electrics and plumbing — paid separately, but often saves thousands of euros in repairs." },
        { q: "What if a legal issue appears after the purchase?", a: "Our verification process aims to prevent issues before signing. Throughout the process we provide legal support and remain available afterwards for any question that may arise." },
      ],
    },
    cta: {
      eyebrow: "Next step",
      title: "Tell us what you're looking for — we'll send 3 matching properties within 48 hours",
      desc: "First consultation always free. You decide if we continue — no pressure, no commitment.",
      primary: "Free consultation",
      reassurance: "WhatsApp reply within 1–2 hours during business hours. No cost, no commitment.",
    },
  },
  de: {
    eyebrow: "Aktuelle Angebote",
    title: "Die richtige Immobilie, zum fairen Preis, ohne Überraschungen",
    subtitle:
      "500+ verkaufte Objekte und 1200+ Familien in Prishtina, Obiliq und Umgebung. Jedes Inserat durchläuft eine rechtliche Prüfung, bevor es Sie erreicht — Grundbuch, Baugenehmigungen, Hypotheken und kommunale Schulden alle geprüft.",
    pain: {
      eyebrow: "Wie Sie heute eine Immobilie finden",
      title: "Lassen Sie die Facebook-Gruppen. Lassen Sie das Team für Sie arbeiten.",
      subtitle: "Die meisten Käufer im Kosovo verlieren 3–6 Monate auf eigene Faust. Hier ist warum.",
      painLabel: "Auf eigene Faust",
      gainLabel: "Mit AS Real Estate",
      pain: [
        "Ungefilterte Facebook-Posts mit schlechten Fotos und überzogenen Preisen",
        "Endlose Besichtigungen von Objekten, die nicht zum Budget oder zur Lage passen",
        "Über-Markt-Preise — keine echten Vergleichswerte zur Orientierung",
        "Risiko unklarer Titel, versteckter Hypotheken und kommunaler Schulden",
        "Emotionale Verhandlung, die Sie tausende Euro über dem fairen Preis kostet",
        "Unbekannter rechtlicher Ablauf — Vertrag, Notar, Eintragung, Steuern",
      ],
      gain: [
        "Nur Objekte, die Ihren Kriterien entsprechen — direkt zugesandt",
        "Besichtigungen an einem Tag organisiert, mit Makler an Ihrer Seite",
        "Fairer Preis — gestützt auf 8 Jahre Quartiers-Vergleichswerte",
        "Vollständige rechtliche Prüfung, bevor ein Objekt überhaupt gelistet wird",
        "Professionelle Verhandlung — durchschnittlich 5–12% unter Listenpreis",
        "Alle Dokumente, Notar und Eintragung — von uns koordiniert",
      ],
    },
    stats: {
      items: [
        { value: "500+", label: "Verkaufte Immobilien" },
        { value: "1200+", label: "Eingezogene Familien" },
        { value: "8 Jahre", label: "Markterfahrung" },
        { value: "98%", label: "Empfehlungsquote" },
      ],
    },
    process: {
      eyebrow: "So läuft es ab",
      title: "Von der Erstberatung zum Schlüssel — in 6 klaren Schritten",
      subtitle:
        "Keine Überraschungen, keine versteckten Kosten. Die Erstberatung ist immer kostenlos — wenn Sie nicht weitermachen, zahlen Sie nichts.",
      steps: [
        { title: "Kostenlose Erstberatung", desc: "Wir besprechen Budget, Ziel (Wohnen oder Investment), Lagepräferenzen und Zeitrahmen — ohne Verpflichtung." },
        { title: "Gefilterte Auswahl", desc: "Aus unserer Datenbank wählen wir die Objekte aus, die wirklich passen — nicht nur die nahekommenden." },
        { title: "Organisierte Besichtigungen", desc: "Wenn möglich an einem Tag, um Ihre Zeit zu sparen — wir begleiten jede Besichtigung." },
        { title: "Rechtliche Prüfung", desc: "Vor jedem Angebot prüfen wir Grundbuch, Hypotheken, Baugenehmigungen, kommunale Schulden und den Status des Verkäufers." },
        { title: "Preisverhandlung", desc: "Mit Marktkenntnis und Quartiers-Vergleichen verhandeln wir den bestmöglichen Preis." },
        { title: "Vertrag und Übergabe", desc: "Wir erstellen oder prüfen den Vertrag, koordinieren mit dem Notar und begleiten bis zur Schlüsselübergabe." },
      ],
    },
    locations: {
      eyebrow: "Abdeckung",
      title: "Die Quartiere, in denen wir reale Preise kennen, nicht Portal-Preise",
      subtitle:
        "8 Jahre in jedem Quartier von Prishtina und Umgebung. Wir kennen die Bauträger, kommende Projekte und die Fallstricke.",
      items: [
        { label: "Zentrum Prishtina", title: "Qendër, Arbëri, Dardania, Ulpianë", desc: "Die gefragtesten Lagen — Premium-Wohnungen, stabiles Preiswachstum, hohe Mietnachfrage." },
        { label: "Äußeres Prishtina", title: "Veternik, Bregu i Diellit, Aktash, Lakrishte", desc: "Bestes Preis-Leistungs-Verhältnis für junge Familien, moderne Wohnungen aus den letzten 5–10 Jahren." },
        { label: "Geschäftszonen", title: "Qendra e Re, New Born, Rruga B", desc: "Top-Lagen für Büros und Einzelhandel. Stabile Mieternachfrage von lokalen und internationalen Unternehmen." },
        { label: "Nachbargemeinden", title: "Obiliq, Fushë Kosovë, Lipjan, Graçanicë", desc: "Günstiger als Prishtina, starkes Investmentpotenzial für Bauland, neue Wohnungen und Einfamilienhäuser." },
        { label: "Investment", title: "Bauland mit Genehmigung", desc: "Grundstücke mit Genehmigung in Fushë Kosovë, Obiliq und am Stadtrand von Prishtina." },
        { label: "Luxus", title: "Villen und Penthouses", desc: "Exklusive Objekte mit Aussicht, Garten oder Pool in Premium-Lagen und der ruhigen Peripherie." },
      ],
    },
    verification: {
      eyebrow: "Vor der Listung",
      title: "Was wir bei jeder Immobilie prüfen",
      subtitle:
        "Keine Immobilie kommt ohne unsere rechtliche und technische Prüfung in unsere Listings. Deshalb gibt es bei unseren Kunden keine Überraschungen nach dem Kauf.",
      items: [
        { title: "Sauberer Grundbuchauszug", desc: "Wir prüfen den aktuellen Eigentümer, die reale Fläche und alle Belastungen im Kataster." },
        { title: "Hypothekenstatus", desc: "Wir prüfen, ob das Objekt belastet ist, und die Position gegenüber Banken oder Gläubigern." },
        { title: "Baugenehmigungen", desc: "Wir stellen sicher, dass das Gebäude mit Genehmigung errichtet, mit Nutzungsfreigabe und korrekt registriert ist." },
        { title: "Kommunale Schulden", desc: "Wir verifizieren ausstehende Grundsteuer, Wasser-, Müll- und sonstige Versorgungsgebühren vor der Unterzeichnung." },
        { title: "Identität des Verkäufers", desc: "Wir bestätigen Identität und rechtliche Vollmacht — besonders in Diaspora-Fällen." },
        { title: "Technische Inspektion", desc: "Bei älteren Objekten organisieren wir eine Begutachtung für Statik, Feuchte, Elektrik und Sanitär." },
      ],
    },
    quote: {
      text: "Ich habe 4 Monate in Facebook-Gruppen nach der ersten Familienwohnung gesucht. Mit AS Real Estate fanden wir sie in 3 Wochen — sauberer Vertrag, 8% unter Listenpreis. Ich würde nie zurück zur alten Methode.",
      author: "Adelina Krasniqi",
      role: "Erstkäuferin, Dardania",
      avatar: "https://i.pravatar.cc/120?img=44",
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Sie vor Kauf oder Anmietung wissen sollten",
      items: [
        { q: "Muss ich für eine Besichtigung etwas zahlen?", a: "Nein. Die Erstberatung, Besichtigungen und Optionsgespräche sind immer kostenlos. Sie zahlen nur, wenn Sie sich für eine Transaktion über uns entscheiden." },
        { q: "Wie lange dauert ein Wohnungskauf im Kosovo?", a: "Vom angenommenen Angebot bis zur Schlüsselübergabe meist 2–6 Wochen. Mit Bankfinanzierung bis zu 8 Wochen wegen Bewertung und Genehmigung." },
        { q: "Welche Dokumente brauche ich für den Kauf?", a: "Ausweis oder Pass, Grundbuchauszug des Verkäufers, notariell beurkundeter Kaufvertrag, Katasterzeugnis und — falls zutreffend — Diaspora-Vollmacht. Wir helfen beim Sammeln und Prüfen aller Unterlagen." },
        { q: "Kann ich aus der Diaspora im Kosovo kaufen?", a: "Ja. Kosovo-Bürger im Ausland und die meisten Ausländer können Eigentum auf eigenen Namen erwerben. Wir haben breite Erfahrung mit Kunden aus Deutschland, der Schweiz, den USA und anderswo, inklusive Vollmacht-Prozess." },
        { q: "Welche Steuern und Nebenkosten fallen über den Preis hinaus an?", a: "Die Übertragungssteuer ist 0% für den Käufer (vom Verkäufer falls zutreffend). Hauptkosten für Käufer: Notar (ca. 0,3–0,5% des Wertes), Katastereintrag und — optional — Maklerprovision. Wir erklären alle Kosten vor der Unterzeichnung." },
        { q: "Machen Sie eine technische Inspektion vor dem Kauf?", a: "Ja, besonders bei älteren Objekten. Wir organisieren eine Ingenieur-Inspektion für Statik, Dämmung, Elektrik und Sanitär — separat zu zahlen, spart aber oft tausende Euro an Reparaturen." },
        { q: "Was, wenn nach dem Kauf ein rechtliches Problem auftaucht?", a: "Unser Prüfprozess soll Probleme vor der Unterschrift verhindern. Während des gesamten Ablaufs bieten wir rechtliche Unterstützung und bleiben auch nach der Übergabe verfügbar." },
      ],
    },
    cta: {
      eyebrow: "Nächster Schritt",
      title: "Sagen Sie uns, was Sie suchen — wir senden 3 passende Objekte in 48 Stunden",
      desc: "Erstberatung immer kostenlos. Sie entscheiden, ob wir weitermachen — kein Druck, keine Verpflichtung.",
      primary: "Kostenlose Beratung",
      reassurance: "Antwort auf WhatsApp innerhalb von 1–2 Stunden zu Bürozeiten. Kostenlos, unverbindlich.",
    },
  },
};

export default function PropertiesPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;
  const seo = SEO[lang] || SEO.sq;
  const jsonLd = [
    webPageJsonLd({
      url: withLang("/prona", lang),
      name: seo.title,
      description: seo.description,
      type: "CollectionPage",
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: withLang("/", lang) },
      { name: seo.breadcrumb, url: withLang("/prona", lang) },
    ]),
    faqPageJsonLd(c.faq.items),
  ];
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/prona"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <Properties />
      <PainGain
        eyebrow={c.pain.eyebrow}
        title={c.pain.title}
        subtitle={c.pain.subtitle}
        painLabel={c.pain.painLabel}
        gainLabel={c.pain.gainLabel}
        painItems={c.pain.pain}
        gainItems={c.pain.gain}
      />
      <StatsBar items={c.stats.items} />
      <ProcessSection
        eyebrow={c.process.eyebrow}
        title={c.process.title}
        subtitle={c.process.subtitle}
        steps={c.process.steps}
        className="bg-slate-50"
      />
      <FeatureGrid
        eyebrow={c.locations.eyebrow}
        title={c.locations.title}
        subtitle={c.locations.subtitle}
        items={c.locations.items}
      />
      <FeatureGrid
        eyebrow={c.verification.eyebrow}
        title={c.verification.title}
        subtitle={c.verification.subtitle}
        items={c.verification.items}
        columns={3}
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
        reassurance={c.cta.reassurance}
      />
    </>
  );
}
