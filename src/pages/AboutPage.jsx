import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import StatsBar from "../components/StatsBar";
import PainGain from "../components/PainGain";
import PullQuote from "../components/PullQuote";
import BigCta from "../components/BigCta";
import Testimonials from "../components/Testimonials";
import { useLang } from "../LanguageContext";
import { agencyJsonLd } from "../seo/agency";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Rreth Nesh — 8+ vite ekspertizë pasurish në Kosovë",
    description:
      "AS Capital Real Estate — agjenci pasurish të paluajtshme me 8+ vite ekspertizë lokale, 500+ prona të shitura dhe 1200+ familje të vendosura në Prishtinë dhe rajon.",
    breadcrumb: "Rreth Nesh",
  },
  en: {
    title: "About Us — 8+ years of property expertise in Kosovo",
    description:
      "AS Capital Real Estate — a Kosovo real estate agency with 8+ years of local expertise, 500+ properties sold and 1200+ families settled across Prishtina and the region.",
    breadcrumb: "About Us",
  },
  de: {
    title: "Über uns — 8+ Jahre Immobilien-Expertise im Kosovo",
    description:
      "AS Capital Real Estate — eine Kosovo-Immobilienagentur mit 8+ Jahren lokaler Expertise, 500+ verkauften Objekten und 1200+ eingezogenen Familien in Prishtina und Umgebung.",
    breadcrumb: "Über uns",
  },
};

const COPY = {
  sq: {
    eyebrow: "Rreth Nesh",
    title: "8 vite, 500+ prona, 1200+ familje në shtëpinë e duhur",
    subtitle:
      "AS Capital Real Estate u themelua me një bindje: tregu i Kosovës meriton ndërmjetës që punojnë për klientin, jo vetëm për provizionin. Sot, 8 nga 10 klientë na vijnë nga rekomandime — matja jonë më e rëndësishme e suksesit.",
    stats: {
      items: [
        { value: "500+", label: "Transaksione të mbyllura" },
        { value: "1200+", label: "Familje të vendosura" },
        { value: "8 vite", label: "Në tregun e Kosovës" },
        { value: "8/10", label: "Klientë nga rekomandime" },
      ],
    },
    story: {
      eyebrow: "Historia jonë",
      title: "Si nisi AS Capital Real Estate",
      paragraphs: [
        "AS Capital Real Estate u themelua me një bindje të thjeshtë: tregu i pasurive të paluajtshme në Kosovë meriton ndërmjetës që punojnë për klientin, jo vetëm për provizionin. Që nga themelimi, kemi mbyllur me sukses qindra transaksione — banesa familjare, vila premium, zyre biznesi, lokale tregtare dhe parcela investimi.",
        "Përvoja jonë në treg na ka mësuar atë që portalet e listingjeve nuk e tregojnë: çmimet reale të çdo lagjeje, ndërtuesit e besueshëm, projektet që do të ndryshojnë vlerat në vitet e ardhshme, dhe kurthet ligjore që duhen shmangur. Këtë njohuri e vëmë në dispozicion të çdo klienti, që në takimin e parë.",
        "Sot, 8 nga 10 klientë na vijnë nga rekomandimet — familjet që kanë blerë me ne i flasin për ne fqinjit, kushërinjtë në diasporë, kolegët në punë. Kjo është matja jonë më e rëndësishme e suksesit.",
      ],
    },
    pain: {
      eyebrow: "Pse na zgjedhin sërish",
      title: "Çfarë ndryshon kur punoni me ekipin e duhur",
      subtitle: "Tregu i Kosovës është i vogël por kompleks. Detajet e vogla bëjnë diferencën e madhe.",
      painLabel: "Agjenci tradicionale",
      gainLabel: "Me AS Capital",
      pain: [
        "Pa konsultim falas — paguani që në hapin e parë",
        "Nuk verifikojnë pronën para listimit",
        "Pa mbështetje ligjore gjatë procesit",
        "Marrëdhënie transaksionale — pas shitjes ngeleni vetëm",
        "Komision i kërkuar pa garanci për mbylljen",
        "Pa komunikim në Shqip + Anglisht + Gjermanisht",
      ],
      gain: [
        "Konsultim i parë gjithmonë falas, pa angazhim",
        "Verifikim i plotë ligjor para se prona të hyjë në listë",
        "Punojmë me noterë dhe juristë të besuar",
        "Mbështetje pas dorëzimit — për çdo pyetje që mund të lindë",
        "Komision vetëm pas mbylljes së suksesshme",
        "Komunikojmë rrjedhshëm në 3 gjuhë me diasporën",
      ],
    },
    values: {
      eyebrow: "Vlerat tona",
      title: "Çfarë na drejton në çdo transaksion",
      items: [
        { label: "Besueshmëri", title: "Fjala jonë vlen", desc: "Çfarë premtojmë në takimin e parë, kjo është ajo që marrim përsipër. Pa kushte të fshehura, pa surpriza në ditën e nënshkrimit." },
        { label: "Transparencë", title: "Çdo numër i dokumentuar", desc: "Të gjitha çmimet, taksat, komisionet dhe shpenzimet janë në letër para se të nisni. Ju dini saktësisht ku po shkojnë paratë tuaja." },
        { label: "Ekspertizë", title: "Njohja lokale që blerja kërkon", desc: "Tetë vite njohje aktive të tregut të Kosovës. Çmime reale, ndërtues të vërtetuar, projekte të ardhshme — gjithë konteksti që ndikon vendimin tuaj." },
        { label: "Përkushtim", title: "Marrëdhënie që zgjat", desc: "Marrëdhënia jonë nuk përfundon me dorëzimin. Pas blerjes, qëndrojmë në dispozicion për çdo pyetje, lidhje me ekipe mirëmbajtjeje, ose këshillim të mëtejshëm." },
      ],
    },
    coverage: {
      eyebrow: "Mbulimi gjeografik",
      title: "Lokacionet ku operojmë aktivisht",
      subtitle:
        "Fokusi ynë është Prishtina dhe rajoni i saj — aty ku kemi më shumë se 8 vite njohje të thellë të tregut.",
      items: [
        { title: "Prishtinë", desc: "Zyra jonë qendrore. Të gjitha lagjet — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia dhe periferia." },
        { title: "Obiliq", desc: "Ekspertizë e thellë në tregun e banesave dhe shtëpive familjare në komunën e Obiliqit." },
        { title: "Fushë Kosovë", desc: "Tregu i tokës ndërtimore dhe i banesave të reja — çmime më të kapshme se Prishtina, potencial i mirë investimi." },
        { title: "Lipjan dhe Graçanicë", desc: "Komuna fqinje me kërkesë në rritje për banesa familjare, shtëpi dhe tokë ndërtimore." },
      ],
    },
    promises: {
      eyebrow: "Çfarë garantojmë",
      title: "Angazhimet tona ndaj çdo klienti",
      subtitle:
        "Këto nuk janë vetëm fjalë në një faqe — janë standardet që zbatojmë në çdo transaksion, pa përjashtim.",
      items: [
        { title: "Konsultim falas, gjithmonë", desc: "Takimi i parë, vizitat e pronave dhe diskutimi i opsioneve — të gjitha pa kosto, pa angazhim." },
        { title: "Prona të verifikuara para listimit", desc: "Çdo pronë kalon kontrollin tonë ligjor dhe teknik para se të paraqitet te klienti." },
        { title: "Mbështetje juridike gjatë gjithë procesit", desc: "Punojmë me noterë dhe juristë të besuar për t'ju siguruar që çdo dokument është i rregullt." },
        { title: "Komunikim në Shqip, Anglisht, Gjermanisht", desc: "Klientët tanë në diasporë komunikojnë në gjuhën e tyre, me përgjigje brenda të njëjtës ditë pune." },
        { title: "Disponueshmëri pas dorëzimit", desc: "Marrëdhënia nuk përfundon me marrjen e çelësave. Qëndrojmë në dispozicion për pyetje dhe nevoja të mëtejshme." },
        { title: "Zero detyrim për ekskluzivitet", desc: "Mund të punoni me ne pa ndonjë kontratë ekskluzive — shërbimi ynë qëndron i njëjtë." },
      ],
    },
    quote: {
      text: "Çka më bind te AS Capital nuk është që mbyllin transaksione — është që pas blerjes, kur kisha një pyetje për taksën në pronë 6 muaj më vonë, përgjigja erdhi në 30 minuta. Kjo është marrëdhënie e vërtetë.",
      author: "Blerim Hoxha",
      role: "Pronar lokali, Prishtinë",
      avatar: "https://i.pravatar.cc/120?img=33",
    },
    faq: {
      eyebrow: "Pyetje për agjencinë",
      title: "Çka duhet të dini për AS Capital",
      items: [
        { q: "Sa kohë ka që operon AS Capital Real Estate?", a: "Mbi 8 vite në tregun e pasurive të paluajtshme në Kosovë. Gjatë kësaj kohe kemi mbyllur me sukses qindra transaksione — shitje, qira, investime — kryesisht në Prishtinë dhe komunat fqinje." },
        { q: "Ku ndodhet zyra juaj?", a: "Zyra jonë qendrore ndodhet në Rrugën \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovë 10000. Jeni të mirëpritur për takim ditët e javës — ju lutemi caktoni një orar nëpërmjet telefonit ose WhatsApp për të siguruar disponueshmërinë." },
        { q: "A jeni të licencuar?", a: "Po. AS Capital Real Estate operon në përputhje me të gjitha kërkesat ligjore për ndërmjetësim të pasurive të paluajtshme në Kosovë. Dokumentet e licencimit janë në dispozicion për shqyrtim me kërkesë." },
        { q: "Çfarë e bën AS Capital të ndryshëm nga agjencitë e tjera?", a: "Tre gjëra: ekspertizë vërtet lokale (njohim lagjet jo si emra në një portal, por si komunitete me histori dhe trende), procesi ynë i verifikimit para listimit (që ka shmangur shumë probleme për klientët tanë), dhe disponueshmëria pas dorëzimit (marrëdhënia jonë nuk është transaksionale)." },
      ],
    },
    cta: {
      eyebrow: "Le të takohemi",
      title: "Le të bisedojmë për pronën që ju përshtatet — pa kosto, pa angazhim",
      desc: "Ardhni në zyrë për një kafe, telefononi ose shkruani në WhatsApp. Konsultimi i parë është gjithmonë falas dhe pa presion.",
      primary: "Konsultim falas",
      reassurance: "Hapur e hënë–e premte 09:00–18:00 dhe e shtunë 10:00–14:00 me caktim paraprak.",
    },
  },
  en: {
    eyebrow: "About Us",
    title: "8 years, 500+ properties, 1200+ families in the right home",
    subtitle:
      "AS Capital Real Estate was founded on a single belief: Kosovo's market deserves brokers who work for the client, not just for the commission. Today, 8 in 10 of our clients come from referrals — our most important measure of success.",
    stats: {
      items: [
        { value: "500+", label: "Closed transactions" },
        { value: "1200+", label: "Families settled" },
        { value: "8 years", label: "In the Kosovo market" },
        { value: "8/10", label: "Clients from referrals" },
      ],
    },
    story: {
      eyebrow: "Our story",
      title: "How AS Capital Real Estate started",
      paragraphs: [
        "AS Capital Real Estate was founded on a simple belief: Kosovo's real estate market deserves brokers who work for the client, not just for the commission. Since founding, we have closed hundreds of successful transactions — family apartments, premium villas, business offices, retail and investment plots.",
        "Our market experience has taught us what listing portals don't show: real prices per neighbourhood, trusted developers, projects that will shift values in coming years, and the legal pitfalls to avoid. We bring this knowledge to every client, from the first meeting.",
        "Today, 8 in 10 of our clients come from referrals — families who bought with us tell their neighbours, their relatives in the diaspora, their colleagues at work. That's the most important measure of our success.",
      ],
    },
    pain: {
      eyebrow: "Why clients choose us again",
      title: "What changes when you work with the right team",
      subtitle: "Kosovo's market is small but complex. Small details make the big difference.",
      painLabel: "Traditional agency",
      gainLabel: "With AS Capital",
      pain: [
        "No free consultation — you pay from step one",
        "No property verification before listing",
        "No legal support during the process",
        "Transactional relationship — after the sale, you're alone",
        "Commission charged without guarantee of closing",
        "No communication in Albanian + English + German",
      ],
      gain: [
        "First consultation always free, no commitment",
        "Full legal verification before a property is even listed",
        "We work with trusted notaries and lawyers",
        "Post-handover support — for any question that comes up",
        "Commission only after successful closing",
        "Fluent communication in 3 languages with the diaspora",
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "What guides us in every transaction",
      items: [
        { label: "Trust", title: "Our word counts", desc: "What we promise at the first meeting is what we deliver. No hidden conditions, no surprises on signing day." },
        { label: "Transparency", title: "Every number documented", desc: "All prices, taxes, commissions and costs are on paper before you start. You know exactly where your money is going." },
        { label: "Expertise", title: "The local knowledge buying requires", desc: "Eight years of active Kosovo market knowledge. Real prices, proven builders, upcoming projects — the full context behind your decision." },
        { label: "Dedication", title: "A relationship that lasts", desc: "Our relationship doesn't end at handover. After the purchase, we remain available for any question, maintenance connections or further advice." },
      ],
    },
    coverage: {
      eyebrow: "Coverage",
      title: "Locations where we are active",
      subtitle:
        "Our focus is Prishtina and its region — where we have 8+ years of deep market knowledge.",
      items: [
        { title: "Prishtina", desc: "Our head office. All neighbourhoods — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia and the periphery." },
        { title: "Obiliq", desc: "Deep expertise in the apartment and family-house markets in the municipality of Obiliq." },
        { title: "Fushë Kosovë", desc: "Buildable land and new-build apartment market — more affordable than Prishtina, strong investment potential." },
        { title: "Lipjan and Graçanicë", desc: "Neighbouring municipalities with rising demand for family apartments, houses and buildable land." },
      ],
    },
    promises: {
      eyebrow: "What we guarantee",
      title: "Our commitments to every client",
      subtitle:
        "These aren't just words on a page — they're the standards we apply to every transaction, without exception.",
      items: [
        { title: "Always-free consultation", desc: "First meeting, viewings and option discussions — at no cost, no commitment." },
        { title: "Properties verified before listing", desc: "Every property goes through our legal and technical checks before it ever reaches a client." },
        { title: "Legal support throughout the process", desc: "We work with trusted notaries and lawyers to make sure every document is in order." },
        { title: "Communication in Albanian, English, German", desc: "Our diaspora clients communicate in their own language, with same-business-day responses." },
        { title: "Availability after handover", desc: "The relationship doesn't end with the keys. We remain available for further questions and needs." },
        { title: "Zero exclusivity obligation", desc: "You can work with us without any exclusive contract — our service stays the same." },
      ],
    },
    quote: {
      text: "What convinced me about AS Capital wasn't that they close transactions — it was that 6 months after the purchase, when I had a property tax question, the answer came in 30 minutes. That's a real relationship.",
      author: "Blerim Hoxha",
      role: "Shop owner, Prishtina",
      avatar: "https://i.pravatar.cc/120?img=33",
    },
    faq: {
      eyebrow: "About the agency",
      title: "What you should know about AS Capital",
      items: [
        { q: "How long has AS Capital Real Estate been operating?", a: "Over 8 years in the Kosovo real estate market. We have successfully closed hundreds of transactions in that time — sales, rentals, investments — mainly in Prishtina and neighbouring municipalities." },
        { q: "Where is your office?", a: "Our head office is at Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000. You're welcome to come in for a meeting on weekdays — please schedule via phone or WhatsApp to ensure availability." },
        { q: "Are you licensed?", a: "Yes. AS Capital Real Estate operates in compliance with all legal requirements for real estate brokerage in Kosovo. Licensing documents are available for review on request." },
        { q: "What makes AS Capital different from other agencies?", a: "Three things: genuinely local expertise (we know neighbourhoods not as portal names but as communities with history and trends), our pre-listing verification process (which has prevented many issues for our clients), and post-handover availability (our relationship is not transactional)." },
      ],
    },
    cta: {
      eyebrow: "Let's meet",
      title: "Let's talk about the property that fits you — no cost, no commitment",
      desc: "Come into the office for a coffee, call, or message us on WhatsApp. The first consultation is always free and pressure-free.",
      primary: "Free consultation",
      reassurance: "Open Mon–Fri 09:00–18:00 and Sat 10:00–14:00 by appointment.",
    },
  },
  de: {
    eyebrow: "Über uns",
    title: "8 Jahre, 500+ Immobilien, 1200+ Familien im richtigen Zuhause",
    subtitle:
      "AS Capital Real Estate wurde aus einer Überzeugung gegründet: Der Kosovo-Markt verdient Makler, die für den Kunden arbeiten — nicht nur für die Provision. Heute kommen 8 von 10 Kunden über Empfehlungen — unser wichtigster Erfolgsmaßstab.",
    stats: {
      items: [
        { value: "500+", label: "Abgeschlossene Transaktionen" },
        { value: "1200+", label: "Eingezogene Familien" },
        { value: "8 Jahre", label: "Auf dem Kosovo-Markt" },
        { value: "8/10", label: "Kunden über Empfehlung" },
      ],
    },
    story: {
      eyebrow: "Unsere Geschichte",
      title: "So begann AS Capital Real Estate",
      paragraphs: [
        "AS Capital Real Estate wurde aus einer einfachen Überzeugung gegründet: Der Immobilienmarkt im Kosovo verdient Makler, die für den Kunden arbeiten — nicht nur für die Provision. Seit der Gründung haben wir Hunderte erfolgreicher Transaktionen abgeschlossen — Familienwohnungen, Premium-Villen, Büros, Geschäfte und Investmentparzellen.",
        "Unsere Markterfahrung hat uns gelehrt, was Portale nicht zeigen: reale Preise je Quartier, vertrauenswürdige Bauträger, kommende Projekte, die Werte verändern werden, und rechtliche Fallen. Dieses Wissen bringen wir in jedes Kundengespräch ein, von Anfang an.",
        "Heute kommen 8 von 10 Kunden über Empfehlungen — Familien, die bei uns gekauft haben, sprechen mit Nachbarn, Verwandten in der Diaspora und Kollegen über uns. Das ist unser wichtigster Erfolgsmaßstab.",
      ],
    },
    pain: {
      eyebrow: "Warum Kunden uns wieder wählen",
      title: "Was sich ändert, wenn Sie mit dem richtigen Team arbeiten",
      subtitle: "Der Kosovo-Markt ist klein, aber komplex. Kleine Details machen den großen Unterschied.",
      painLabel: "Traditionelle Agentur",
      gainLabel: "Mit AS Capital",
      pain: [
        "Keine kostenlose Beratung — Sie zahlen ab dem ersten Schritt",
        "Keine Objekt-Prüfung vor der Listung",
        "Keine rechtliche Begleitung während des Prozesses",
        "Transaktionale Beziehung — nach dem Verkauf sind Sie allein",
        "Provision ohne Garantie für den Abschluss",
        "Keine Kommunikation auf Albanisch + Englisch + Deutsch",
      ],
      gain: [
        "Erstberatung immer kostenlos, ohne Verpflichtung",
        "Vollständige rechtliche Prüfung, bevor ein Objekt überhaupt gelistet wird",
        "Wir arbeiten mit vertrauenswürdigen Notaren und Anwälten",
        "Begleitung nach der Übergabe — für jede Frage, die auftaucht",
        "Provision erst nach erfolgreichem Abschluss",
        "Fließende Kommunikation in 3 Sprachen mit der Diaspora",
      ],
    },
    values: {
      eyebrow: "Unsere Werte",
      title: "Was uns bei jeder Transaktion leitet",
      items: [
        { label: "Vertrauen", title: "Unser Wort zählt", desc: "Was wir im ersten Gespräch versprechen, halten wir. Keine versteckten Bedingungen, keine Überraschungen am Unterschriftstag." },
        { label: "Transparenz", title: "Jede Zahl dokumentiert", desc: "Alle Preise, Steuern, Provisionen und Kosten liegen vor dem Start auf dem Tisch. Sie wissen genau, wohin Ihr Geld geht." },
        { label: "Expertise", title: "Lokales Wissen, das der Kauf braucht", desc: "Acht Jahre aktive Marktkenntnis im Kosovo. Reale Preise, geprüfte Bauträger, kommende Projekte — der ganze Kontext hinter Ihrer Entscheidung." },
        { label: "Engagement", title: "Eine Beziehung, die bleibt", desc: "Unsere Beziehung endet nicht mit der Übergabe. Nach dem Kauf bleiben wir für Fragen, Wartungskontakte und weitere Beratung erreichbar." },
      ],
    },
    coverage: {
      eyebrow: "Abdeckung",
      title: "Standorte, an denen wir aktiv sind",
      subtitle:
        "Unser Fokus ist Prishtina und Umgebung — dort, wo wir über 8 Jahre tiefe Marktkenntnis haben.",
      items: [
        { title: "Prishtina", desc: "Unser Hauptbüro. Alle Quartiere — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia und Peripherie." },
        { title: "Obiliq", desc: "Tiefe Expertise im Wohnungs- und Einfamilienhausmarkt in der Gemeinde Obiliq." },
        { title: "Fushë Kosovë", desc: "Markt für Bauland und Neubauwohnungen — günstiger als Prishtina, starkes Investmentpotenzial." },
        { title: "Lipjan und Graçanicë", desc: "Nachbargemeinden mit steigender Nachfrage nach Familienwohnungen, Häusern und Bauland." },
      ],
    },
    promises: {
      eyebrow: "Was wir garantieren",
      title: "Unsere Verpflichtungen gegenüber jedem Kunden",
      subtitle:
        "Das sind keine Worthülsen — das sind Standards, die wir bei jeder Transaktion anwenden, ohne Ausnahme.",
      items: [
        { title: "Immer kostenlose Beratung", desc: "Erstgespräch, Besichtigungen und Optionsdiskussion — kostenfrei, ohne Verpflichtung." },
        { title: "Geprüfte Immobilien vor der Listung", desc: "Jede Immobilie durchläuft unsere rechtliche und technische Prüfung, bevor sie überhaupt zum Kunden gelangt." },
        { title: "Rechtliche Begleitung im gesamten Prozess", desc: "Wir arbeiten mit vertrauenswürdigen Notaren und Anwälten, damit jedes Dokument in Ordnung ist." },
        { title: "Kommunikation auf Albanisch, Englisch, Deutsch", desc: "Unsere Diaspora-Kunden kommunizieren in ihrer Sprache — Antwort meist am selben Werktag." },
        { title: "Erreichbarkeit nach der Übergabe", desc: "Die Beziehung endet nicht mit dem Schlüssel. Wir bleiben für weitere Fragen und Bedürfnisse verfügbar." },
        { title: "Keine Exklusivitätspflicht", desc: "Sie können ohne Exklusivvertrag mit uns arbeiten — unser Service bleibt derselbe." },
      ],
    },
    quote: {
      text: "Was mich bei AS Capital überzeugt hat, war nicht der Abschluss — es war, dass 6 Monate nach dem Kauf, als ich eine Frage zur Grundsteuer hatte, die Antwort in 30 Minuten kam. Das ist eine echte Beziehung.",
      author: "Blerim Hoxha",
      role: "Ladenbesitzer, Prishtina",
      avatar: "https://i.pravatar.cc/120?img=33",
    },
    faq: {
      eyebrow: "Über die Agentur",
      title: "Was Sie über AS Capital wissen sollten",
      items: [
        { q: "Wie lange ist AS Capital Real Estate tätig?", a: "Über 8 Jahre auf dem Kosovo-Immobilienmarkt. In dieser Zeit haben wir Hunderte Transaktionen erfolgreich abgeschlossen — Verkäufe, Vermietungen, Investments — vor allem in Prishtina und Nachbargemeinden." },
        { q: "Wo befindet sich Ihr Büro?", a: "Unser Hauptbüro ist in der Rruga \"Ahmet Krasniqi\" Nr. 15, Prishtinë, Kosovo 10000. Wir freuen uns auf Termine an Werktagen — bitte vereinbaren Sie diese telefonisch oder per WhatsApp." },
        { q: "Sind Sie lizenziert?", a: "Ja. AS Capital Real Estate erfüllt alle rechtlichen Anforderungen für Immobilienvermittlung im Kosovo. Lizenzunterlagen sind auf Anfrage einsehbar." },
        { q: "Was unterscheidet AS Capital von anderen Agenturen?", a: "Drei Dinge: echte lokale Expertise (wir kennen Quartiere nicht als Portal-Namen, sondern als Gemeinschaften mit Historie und Trends), unser Prüfprozess vor der Listung (der vielen Kunden Probleme erspart hat) und Erreichbarkeit nach der Übergabe (unsere Beziehung ist nicht transaktional)." },
      ],
    },
    cta: {
      eyebrow: "Lass uns treffen",
      title: "Sprechen wir über die passende Immobilie — kostenlos, unverbindlich",
      desc: "Kommen Sie für einen Kaffee ins Büro, rufen Sie an oder schreiben Sie uns auf WhatsApp. Die Erstberatung ist immer kostenlos und ohne Druck.",
      primary: "Kostenlose Beratung",
      reassurance: "Geöffnet Mo–Fr 09:00–18:00 und Sa 10:00–14:00 nach Vereinbarung.",
    },
  },
};

export default function AboutPage() {
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;
  const seo = SEO[lang] || SEO.sq;
  const jsonLd = [
    webPageJsonLd({
      url: withLang("/rreth-nesh", lang),
      name: seo.title,
      description: seo.description,
      type: "AboutPage",
      lang,
      breadcrumbs: true,
    }),
    breadcrumbJsonLd([
      { name: "Home", url: withLang("/", lang) },
      { name: seo.breadcrumb, url: withLang("/rreth-nesh", lang) },
    ]),
    agencyJsonLd(),
    faqPageJsonLd(c.faq.items),
  ];
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/rreth-nesh"
        lang={lang}
        jsonLd={jsonLd}
      />
      <PageHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <StatsBar items={c.stats.items} />
      <About />
      <section className="section bg-slate-50">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">{c.story.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{c.story.title}</h2>
          <div className="mt-8 space-y-5 text-slate-700 leading-relaxed">
            {c.story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
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
      />
      <FeatureGrid
        eyebrow={c.values.eyebrow}
        title={c.values.title}
        items={c.values.items}
        columns={2}
        className="bg-slate-50"
      />
      <FeatureGrid
        eyebrow={c.coverage.eyebrow}
        title={c.coverage.title}
        subtitle={c.coverage.subtitle}
        items={c.coverage.items}
        columns={4}
        dark
      />
      <FeatureGrid
        eyebrow={c.promises.eyebrow}
        title={c.promises.title}
        subtitle={c.promises.subtitle}
        items={c.promises.items}
      />
      <PullQuote {...c.quote} />
      <Testimonials />
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
