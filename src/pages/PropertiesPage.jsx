import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Properties from "../components/Properties";
import ProcessSection from "../components/ProcessSection";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import Newsletter from "../components/Newsletter";
import { useLang } from "../LanguageContext";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Prona në Kosovë — Shitje, qira, investime",
    description:
      "Listingje aktive në Prishtinë, Obiliq, Fushë Kosovë dhe rajon. Banesa, vila, zyre, lokale dhe tokë me fletë poseduese të verifikuar dhe çmime në EUR. Konsultim falas.",
    breadcrumb: "Prona",
  },
  en: {
    title: "Properties in Kosovo — Sales, rentals, investments",
    description:
      "Active listings in Prishtina, Obiliq, Fushë Kosovë and beyond. Apartments, villas, offices, retail and land with verified title and EUR pricing. Free consultation.",
    breadcrumb: "Properties",
  },
  de: {
    title: "Immobilien im Kosovo — Verkauf, Miete, Investment",
    description:
      "Aktuelle Angebote in Prishtina, Obiliq, Fushë Kosovë und Umgebung. Wohnungen, Villen, Büros, Geschäfte und Bauland mit geprüftem Titel und EUR-Preisen. Kostenlose Beratung.",
    breadcrumb: "Immobilien",
  },
};

const COPY = {
  sq: {
    eyebrow: "Prona aktive",
    title: "Prona në Kosovë — shitje, qira dhe investime",
    subtitle:
      "Shfletoni listingjet aktive të AS Capital Real Estate në Prishtinë, Obiliq, Fushë Kosovë dhe lokacione të tjera të kërkuara — me çmime në EUR, m² të verifikuara dhe fletë poseduese të kontrolluara para se të hyjnë në listë.",
    process: {
      eyebrow: "Si funksionon",
      title: "Kërkimi i pronës me AS Capital — hap pas hapi",
      subtitle:
        "Nuk humbni kohë duke shfletuar grupe Facebook ose duke kontrolluar një nga një ndërmjetësues. Ne dëgjojmë çfarë ju nevojitet dhe ju paraqesim vetëm prona që përshtaten.",
      steps: [
        { title: "Konsultim falas", desc: "Dëgjojmë buxhetin, qëllimin (banim ose investim), preferencat e lagjes dhe afatin tuaj — pa asnjë angazhim." },
        { title: "Filtrim i pronave", desc: "Nga databaza jonë e pronave aktive, përzgjedhim ato që përshtaten me kriteret tuaja realisht — jo të gjitha që afrohen." },
        { title: "Vizita të organizuara", desc: "Caktojmë vizitat në një ditë të vetme kur është e mundur, duke kursyer kohën tuaj. Ju shoqërojmë në çdo vizitë." },
        { title: "Verifikim ligjor", desc: "Para çfarëdo oferte, kontrollojmë fletë poseduese, hipotekat, lejet, debitë komunale dhe statusin e pronarit." },
        { title: "Negocim i çmimit", desc: "Përdorim njohjen tonë të tregut dhe komp-eve të lagjes për t'ju siguruar çmimin më të mirë të mundshëm." },
        { title: "Kontratë dhe dorëzim", desc: "Përgatisim ose rishikojmë kontratën, koordinojmë me noterin dhe ju shoqërojmë deri në marrjen e çelësave." },
      ],
    },
    locations: {
      eyebrow: "Mbulimi gjeografik",
      title: "Lagjet dhe komunat ku jemi më aktivë",
      subtitle:
        "Ekspertiza jonë është e thellë dhe lokale. Njohim çmimet reale të çdo lagjeje, ndërtuesit kryesorë, projektet e ardhshme dhe ndryshimet e infrastrukturës që ndikojnë vlerat.",
      items: [
        { label: "Prishtinë qendrore", title: "Qendër, Arbëri, Dardania, Ulpianë", desc: "Lagjet më të kërkuara për banim dhe investim — banesa premium, çmime në rritje të qëndrueshme, kërkesë e lartë për qira." },
        { label: "Prishtinë periferike", title: "Veternik, Bregu i Diellit, Aktash, Lakrishte", desc: "Vlera për para më e mirë për familje të reja, banesa moderne të ndërtuara në 5–10 vitet e fundit, akses i mirë në qendër." },
        { label: "Zona biznesi", title: "Qendra e Re, New Born, Rruga B", desc: "Lokacione kryesore për zyre dhe lokale tregtare. Kërkesa e qiramarrësve mbetet e qëndrueshme nga kompani vendore dhe ndërkombëtare." },
        { label: "Komunat fqinje", title: "Obiliq, Fushë Kosovë, Lipjan, Graçanicë", desc: "Çmime më të kapshme se Prishtina, potencial i mirë investimi për tokë ndërtimore, banesa të reja dhe shtëpi familjare." },
        { label: "Investime", title: "Tokë ndërtimore me leje", desc: "Parcela me leje ndërtimi në Fushë Kosovë, Obiliq dhe periferi të Prishtinës — për ndërtim privat ose projekte më të mëdha." },
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
        { title: "Identiteti i shitësit", desc: "Konfirmojmë identitetin dhe autorizimet e shitësit ose përfaqësuesit ligjor — sidomos në rastet e diasporës." },
        { title: "Inspektim teknik", desc: "Për pronat më të vjetra, organizojmë vlerësim teknik për dëme strukturore, lagështi, instalime elektrike dhe ujësjellës." },
      ],
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
  },
  en: {
    eyebrow: "Active listings",
    title: "Properties in Kosovo — for sale, rent and investment",
    subtitle:
      "Browse active AS Capital Real Estate listings across Prishtina, Obiliq, Fushë Kosovë and other in-demand locations — with EUR pricing, verified m², and clean title checked before any property enters our list.",
    process: {
      eyebrow: "How it works",
      title: "Finding a property with AS Capital — step by step",
      subtitle:
        "No more wasting time on Facebook groups or chasing brokers one by one. We listen to what you actually need and present only properties that fit.",
      steps: [
        { title: "Free consultation", desc: "We discuss your budget, goal (living or investment), neighbourhood preferences and timeline — no commitment." },
        { title: "Filtered shortlist", desc: "From our database of active listings, we hand-pick the ones that genuinely match your criteria — not just the close ones." },
        { title: "Organised visits", desc: "We schedule viewings together where possible to save your time, and accompany you to every visit." },
        { title: "Legal verification", desc: "Before any offer, we verify title deed, mortgages, building permits, municipal debts and the seller's status." },
        { title: "Price negotiation", desc: "We use our market knowledge and neighbourhood comps to secure the best possible price for you." },
        { title: "Contract and handover", desc: "We prepare or review the contract, coordinate with the notary, and stay with you until you receive the keys." },
      ],
    },
    locations: {
      eyebrow: "Coverage",
      title: "Neighbourhoods and municipalities where we are most active",
      subtitle:
        "Our expertise is deep and local. We know real prices per neighbourhood, the major developers, upcoming projects, and infrastructure changes that affect value.",
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
  },
  de: {
    eyebrow: "Aktuelle Angebote",
    title: "Immobilien im Kosovo — Verkauf, Miete und Investment",
    subtitle:
      "Durchsuchen Sie aktuelle Angebote von AS Capital Real Estate in Prishtina, Obiliq, Fushë Kosovë und weiteren gefragten Lagen — mit EUR-Preisen, verifizierten m² und sauberem Titel, der vor Aufnahme in die Liste geprüft wird.",
    process: {
      eyebrow: "So läuft es ab",
      title: "Immobiliensuche mit AS Capital — Schritt für Schritt",
      subtitle:
        "Keine Zeit mehr in Facebook-Gruppen oder bei Maklern verlieren. Wir hören zu, was Sie wirklich brauchen, und zeigen nur passende Objekte.",
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
      title: "Stadtteile und Gemeinden, in denen wir am aktivsten sind",
      subtitle:
        "Unsere Expertise ist tief und lokal. Wir kennen reale Preise je Quartier, die wichtigsten Bauträger, kommende Projekte und Infrastrukturänderungen, die den Wert beeinflussen.",
      items: [
        { label: "Zentrum Prishtina", title: "Qendër, Arbëri, Dardania, Ulpianë", desc: "Die gefragtesten Lagen zum Wohnen und Investieren — Premium-Wohnungen, stabiles Preiswachstum, hohe Mietnachfrage." },
        { label: "Äußeres Prishtina", title: "Veternik, Bregu i Diellit, Aktash, Lakrishte", desc: "Bestes Preis-Leistungs-Verhältnis für junge Familien, moderne Wohnungen aus den letzten 5–10 Jahren, gute Anbindung." },
        { label: "Geschäftszonen", title: "Qendra e Re, New Born, Rruga B", desc: "Top-Lagen für Büros und Einzelhandel. Stabile Mieternachfrage von lokalen und internationalen Unternehmen." },
        { label: "Nachbargemeinden", title: "Obiliq, Fushë Kosovë, Lipjan, Graçanicë", desc: "Günstiger als Prishtina, starkes Investmentpotenzial für Bauland, neue Wohnungen und Einfamilienhäuser." },
        { label: "Investment", title: "Bauland mit Genehmigung", desc: "Grundstücke mit Genehmigung in Fushë Kosovë, Obiliq und am Stadtrand von Prishtina — für privaten Bau oder größere Projekte." },
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
      <FAQSection
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        items={c.faq.items}
      />
      <Newsletter />
    </>
  );
}
