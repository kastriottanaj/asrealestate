import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import PainGain from "../components/PainGain";
import StatsBar from "../components/StatsBar";
import PullQuote from "../components/PullQuote";
import BigCta from "../components/BigCta";
import Testimonials from "../components/Testimonials";
import { useLang } from "../LanguageContext";
import { agencyJsonLd } from "../seo/agency";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "Rreth Nesh — 8+ vite në tregun e Kosovës",
    description:
      "AS Capital Real Estate — agjenci pasurish të paluajtshme me 8+ vite ekspertizë në Prishtinë dhe rajon. Misioni, vlerat, ekipi dhe angazhimet tona ndaj çdo klienti.",
    breadcrumb: "Rreth Nesh",
  },
  en: {
    title: "About Us — 8+ years in the Kosovo market",
    description:
      "AS Capital Real Estate — a Kosovo real estate agency with 8+ years of expertise across Prishtina and the region. Our mission, values, team and commitments to every client.",
    breadcrumb: "About Us",
  },
  de: {
    title: "Über uns — 8+ Jahre auf dem Kosovo-Markt",
    description:
      "AS Capital Real Estate — eine Kosovo-Immobilienagentur mit 8+ Jahren Expertise in Prishtina und Umgebung. Unsere Mission, Werte, das Team und unsere Kundenversprechen.",
    breadcrumb: "Über uns",
  },
};

const COPY = {
  sq: {
    eyebrow: "Rreth Nesh",
    title: "Agjencia që klientët rekomandojnë — sepse fjala jonë vlen",
    subtitle:
      "AS Capital Real Estate është themeluar mbi një bindje të thjeshtë: tregu i pasurive të paluajtshme në Kosovë meriton një agjenci që punon për klientin, jo vetëm për provizionin. 8+ vite, 500+ transaksione të mbyllura, 1200+ familje të vendosura — dhe 8 nga 10 klientë na vijnë nga rekomandime.",
    stats: {
      eyebrow: "8 vite, numra realë",
      title: "Numrat që klientët tanë i kanë verifikuar",
      items: [
        { value: "500+", label: "Transaksione të mbyllura" },
        { value: "1200+", label: "Familje të vendosura" },
        { value: "8 vite", label: "Aktive në tregun e Kosovës" },
        { value: "98%", label: "Klientë që rekomandojnë" },
      ],
      dark: true,
    },
    story: {
      eyebrow: "Historia jonë",
      title: "Si nisi AS Capital — dhe pse vazhdon",
      paragraphs: [
        "AS Capital Real Estate u themelua me një bindje të thjeshtë: tregu i pasurive të paluajtshme në Kosovë meriton ndërmjetës që punojnë për klientin, jo vetëm për provizionin. Që nga themelimi, kemi mbyllur me sukses qindra transaksione — banesa familjare, vila premium, zyre biznesi, lokale tregtare dhe parcela investimi.",
        "Përvoja jonë në treg na ka mësuar atë që portalet e listingjeve nuk e tregojnë: çmimet reale të çdo lagjeje, ndërtuesit e besueshëm, projektet që do të ndryshojnë vlerat në vitet e ardhshme, dhe kurthet ligjore që duhen shmangur. Këtë njohuri e vëmë në dispozicion të çdo klienti, që në takimin e parë.",
        "Sot, 8 nga 10 klientë na vijnë nga rekomandimet — familjet që kanë blerë me ne i flasin për ne fqinjit, kushërinjtë në diasporë, kolegët në punë. Kjo është matja jonë më e rëndësishme e suksesit. Dhe arsyeja që vazhdojmë me të njëjtin standard çdo ditë.",
      ],
    },
    pain: {
      eyebrow: "Pse të punoni me ne",
      title: "Si ndryshojmë nga agjencitë që ju keni provuar",
      subtitle: "Dallimi nuk është në fjalët në faqe. Është në mënyrën si trajtojmë çdo transaksion.",
      painLabel: "Agjencia tipike",
      gainLabel: "AS Capital",
      pain: [
        "Mbyllin transaksionin dhe zhduken — pa mbështetje pas dorëzimit",
        "Listojnë gjithçka pa filtër — pa verifikim ligjor para listimit",
        "Negocim që mbron komisionin e tyre, jo çmimin tuaj",
        "Komunikim i ngadaltë — përgjigje pas ditësh",
        "Pa transparencë në kosto — surpriza në fund",
        "Pa ekspertizë lokale të vërtetë — vetëm njohje portali",
      ],
      gain: [
        "Mbështetje e pakufizuar pas dorëzimit — për pyetje, mirëmbajtje, kontrata",
        "Çdo pronë verifikohet ligjor dhe teknik para se të hyjë në listën tonë",
        "Negocim që mbron çmimin tuaj — kursime mesatare 5–12%",
        "Përgjigje në WhatsApp brenda 1–2 orësh në orarin e punës",
        "Transparencë e plotë — çdo numër i dokumentuar para nënshkrimit",
        "8 vite njohje aktive lagjesh — kompet, ndërtuesit, projektet",
      ],
    },
    values: {
      eyebrow: "Vlerat tona",
      title: "Çfarë na drejton në çdo transaksion",
      items: [
        { label: "Besueshmëri", title: "Fjala jonë vlen", desc: "Çfarë premtojmë në takimin e parë, kjo është ajo që marrim përsipër. Pa kushte të fshehura, pa surpriza në ditën e nënshkrimit." },
        { label: "Transparencë", title: "Çdo numër i dokumentuar", desc: "Të gjitha çmimet, taksat, komisionet dhe shpenzimet janë në letër para se të nisni. Ju dini saktësisht ku po shkojnë paratë tuaja." },
        { label: "Ekspertizë", title: "Njohja lokale që blerja kërkon", desc: "Tetë vite njohje aktive të tregut të Kosovës. Çmime reale, ndërtues të vërtetuar, projekte të ardhshme, infrastrukturë." },
        { label: "Përkushtim", title: "Marrëdhënie që zgjat", desc: "Marrëdhënia jonë nuk përfundon me dorëzimin. Pas blerjes, qëndrojmë në dispozicion për çdo pyetje." },
      ],
    },
    coverage: {
      eyebrow: "Mbulimi gjeografik",
      title: "Lokacionet ku operojmë aktivisht",
      subtitle:
        "Fokusi ynë është Prishtina dhe rajoni i saj — aty ku kemi mbi 8 vite njohje të thellë të tregut. Për lokacione më të largëta, punojmë me partnerë lokalë të besuar.",
      items: [
        { title: "Prishtinë", desc: "Të gjitha lagjet — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia dhe periferia." },
        { title: "Obiliq", desc: "Zyra jonë qendrore. Ekspertizë e thellë në tregun e banesave dhe shtëpive familjare në komunën e Obiliqit." },
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
      text: "Mendoja se të gjitha agjencitë janë të njëjta — derisa punova me AS Capital. Përgjigjet e tyre brenda orëve, transparenca për çdo kosto, dhe fakti që ende më telefonojnë 6 muaj pas blerjes për t'u siguruar që gjithçka po shkon mirë. Kjo është arsyeja pse rekomandoj çdo familjar.",
      author: "Arben Berisha",
      role: "Klient i kthyer, blerja e dytë me AS Capital",
      avatar: "https://i.pravatar.cc/120?img=12",
    },
    faq: {
      eyebrow: "Pyetje për agjencinë",
      title: "Çka duhet të dini për AS Capital",
      items: [
        { q: "Sa kohë ka që operon AS Capital Real Estate?", a: "Mbi 8 vite në tregun e pasurive të paluajtshme në Kosovë. Gjatë kësaj kohe kemi mbyllur me sukses qindra transaksione — shitje, qira, investime — kryesisht në Prishtinë dhe komunat fqinje." },
        { q: "Ku ndodhet zyra juaj?", a: "Zyra jonë qendrore ndodhet në Hasan Prishtina, Obiliq, Kosovë 15000. Jeni të mirëpritur për takim ditët e javës — ju lutemi caktoni një orar nëpërmjet telefonit ose WhatsApp për të siguruar disponueshmërinë." },
        { q: "A jeni të licencuar?", a: "Po. AS Capital Real Estate operon në përputhje me të gjitha kërkesat ligjore për ndërmjetësim të pasurive të paluajtshme në Kosovë. Dokumentet e licencimit janë në dispozicion për shqyrtim me kërkesë." },
        { q: "Çfarë e bën AS Capital të ndryshëm nga agjencitë e tjera?", a: "Tre gjëra: ekspertizë vërtet lokale (njohim lagjet jo si emra në një portal, por si komunitete me histori dhe trende), procesi ynë i verifikimit para listimit (që ka shmangur shumë probleme për klientët tanë), dhe disponueshmëria pas dorëzimit (marrëdhënia jonë nuk është transaksionale)." },
        { q: "A punoni me investitorë afatgjatë?", a: "Po. Kemi përvojë të gjerë me investitorë që ndërtojnë portfolio në tregun e Kosovës — banesa për qira, tokë ndërtimore me leje, dhe banesa të reja në lagjet me potencial rritjeje. Ofrojmë analizë tregu, projeksione ROI dhe administrim afatgjatë të pronës." },
      ],
    },
    cta: {
      eyebrow: "Filloni me një bisedë",
      title: "Dëshironi të testoni nëse jemi ekipi i duhur për ju?",
      desc: "30 minuta në zyrë ose në WhatsApp — pa kosto, pa angazhim. Shumica e klientëve tanë e kuptojnë që në takimin e parë.",
      primary: "Kërko takim",
      reassurance: "Përgjigje brenda të njëjtës ditë pune. Komunikim në Shqip, Anglisht ose Gjermanisht.",
    },
  },
  en: {
    eyebrow: "About Us",
    title: "The agency clients refer — because our word counts",
    subtitle:
      "AS Capital Real Estate was founded on a simple belief: Kosovo's real estate market deserves an agency that works for the client, not just the commission. 8+ years, 500+ closed transactions, 1200+ families settled — and 8 in 10 clients come from referrals.",
    stats: {
      eyebrow: "8 years, real numbers",
      title: "The numbers our clients have verified",
      items: [
        { value: "500+", label: "Closed transactions" },
        { value: "1200+", label: "Families settled" },
        { value: "8 years", label: "Active in the Kosovo market" },
        { value: "98%", label: "Clients who refer us" },
      ],
      dark: true,
    },
    story: {
      eyebrow: "Our story",
      title: "How AS Capital started — and why we keep going",
      paragraphs: [
        "AS Capital Real Estate was founded on a simple belief: Kosovo's real estate market deserves brokers who work for the client, not just for the commission. Since founding, we have closed hundreds of successful transactions — family apartments, premium villas, business offices, retail and investment plots.",
        "Our market experience has taught us what listing portals don't show: real prices per neighbourhood, trusted developers, projects that will shift values in coming years, and the legal pitfalls to avoid. We bring this knowledge to every client, from the first meeting.",
        "Today, 8 in 10 of our clients come from referrals — families who bought with us tell their neighbours, their relatives in the diaspora, their colleagues at work. That's the most important measure of our success. And the reason we keep the same standard every day.",
      ],
    },
    pain: {
      eyebrow: "Why work with us",
      title: "How we differ from agencies you've tried",
      subtitle: "The difference isn't in the words on the page. It's in how we treat every transaction.",
      painLabel: "Typical agency",
      gainLabel: "AS Capital",
      pain: [
        "Close the transaction and disappear — no support after handover",
        "List everything unfiltered — no legal verification before listing",
        "Negotiation that protects their commission, not your price",
        "Slow communication — replies after days",
        "No transparency on costs — surprises at the end",
        "No genuine local expertise — only portal knowledge",
      ],
      gain: [
        "Unlimited support after handover — questions, maintenance, contracts",
        "Every property is legally and technically verified before our list",
        "Negotiation that protects your price — average 5–12% savings",
        "WhatsApp reply within 1–2 hours during business hours",
        "Full transparency — every number documented before signing",
        "8 years of active neighbourhood knowledge — comps, builders, projects",
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "What guides us in every transaction",
      items: [
        { label: "Trust", title: "Our word counts", desc: "What we promise at the first meeting is what we deliver. No hidden conditions, no surprises on signing day." },
        { label: "Transparency", title: "Every number documented", desc: "All prices, taxes, commissions and costs are on paper before you start. You know exactly where your money is going." },
        { label: "Expertise", title: "The local knowledge buying requires", desc: "Eight years of active Kosovo market knowledge. Real prices, proven builders, upcoming projects, infrastructure." },
        { label: "Dedication", title: "A relationship that lasts", desc: "Our relationship doesn't end at handover. After the purchase, we remain available for any question." },
      ],
    },
    coverage: {
      eyebrow: "Coverage",
      title: "Locations where we are active",
      subtitle:
        "Our focus is Prishtina and its region — where we have 8+ years of deep market knowledge. For more distant locations, we work with trusted local partners.",
      items: [
        { title: "Prishtina", desc: "All neighbourhoods — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia and the periphery." },
        { title: "Obiliq", desc: "Our head office. Deep expertise in the apartment and family-house markets in the municipality of Obiliq." },
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
      text: "I thought all agencies were the same — until I worked with AS Capital. Replies within hours, transparency on every cost, and the fact that they still call me 6 months after the purchase to make sure everything is going well. That's why I refer every family member.",
      author: "Arben Berisha",
      role: "Returning client, second purchase with AS Capital",
      avatar: "https://i.pravatar.cc/120?img=12",
    },
    faq: {
      eyebrow: "About the agency",
      title: "What you should know about AS Capital",
      items: [
        { q: "How long has AS Capital Real Estate been operating?", a: "Over 8 years in the Kosovo real estate market. We have successfully closed hundreds of transactions in that time — sales, rentals, investments — mainly in Prishtina and neighbouring municipalities." },
        { q: "Where is your office?", a: "Our head office is at Hasan Prishtina, Obiliq, Kosovo 15000. You're welcome to come in for a meeting on weekdays — please schedule via phone or WhatsApp to ensure availability." },
        { q: "Are you licensed?", a: "Yes. AS Capital Real Estate operates in compliance with all legal requirements for real estate brokerage in Kosovo. Licensing documents are available for review on request." },
        { q: "What makes AS Capital different from other agencies?", a: "Three things: genuinely local expertise (we know neighbourhoods not as portal names but as communities with history and trends), our pre-listing verification process (which has prevented many issues for our clients), and post-handover availability (our relationship is not transactional)." },
        { q: "Do you work with long-term investors?", a: "Yes. We have wide experience with investors building portfolios in the Kosovo market — rental apartments, buildable land with permits, and new-build apartments in neighbourhoods with growth potential. We provide market analysis, ROI projections and long-term property management." },
      ],
    },
    cta: {
      eyebrow: "Start with a conversation",
      title: "Want to test whether we're the right team for you?",
      desc: "30 minutes in office or on WhatsApp — no cost, no commitment. Most of our clients know after the first meeting.",
      primary: "Request meeting",
      reassurance: "Reply within the same business day. Communication in Albanian, English or German.",
    },
  },
  de: {
    eyebrow: "Über uns",
    title: "Die Agentur, die Kunden weiterempfehlen — weil unser Wort zählt",
    subtitle:
      "AS Capital Real Estate wurde aus einer einfachen Überzeugung gegründet: Der Immobilienmarkt im Kosovo verdient eine Agentur, die für den Kunden arbeitet — nicht nur für die Provision. 8+ Jahre, 500+ abgeschlossene Transaktionen, 1200+ eingezogene Familien — und 8 von 10 Kunden kommen über Empfehlungen.",
    stats: {
      eyebrow: "8 Jahre, reale Zahlen",
      title: "Die Zahlen, die unsere Kunden bestätigt haben",
      items: [
        { value: "500+", label: "Abgeschlossene Transaktionen" },
        { value: "1200+", label: "Eingezogene Familien" },
        { value: "8 Jahre", label: "Aktiv auf dem Kosovo-Markt" },
        { value: "98%", label: "Kunden mit Empfehlung" },
      ],
      dark: true,
    },
    story: {
      eyebrow: "Unsere Geschichte",
      title: "So begann AS Capital — und warum wir weitermachen",
      paragraphs: [
        "AS Capital Real Estate wurde aus einer einfachen Überzeugung gegründet: Der Immobilienmarkt im Kosovo verdient Makler, die für den Kunden arbeiten — nicht nur für die Provision. Seit der Gründung haben wir Hunderte erfolgreicher Transaktionen abgeschlossen — Familienwohnungen, Premium-Villen, Büros, Geschäfte und Investmentparzellen.",
        "Unsere Markterfahrung hat uns gelehrt, was Portale nicht zeigen: reale Preise je Quartier, vertrauenswürdige Bauträger, kommende Projekte, die Werte verändern werden, und rechtliche Fallen. Dieses Wissen bringen wir in jedes Kundengespräch ein, von Anfang an.",
        "Heute kommen 8 von 10 Kunden über Empfehlungen — Familien, die bei uns gekauft haben, sprechen mit Nachbarn, Verwandten in der Diaspora und Kollegen über uns. Das ist unser wichtigster Erfolgsmaßstab. Und der Grund, warum wir den gleichen Standard jeden Tag halten.",
      ],
    },
    pain: {
      eyebrow: "Warum mit uns arbeiten",
      title: "Wie wir uns von Agenturen unterscheiden, die Sie kennen",
      subtitle: "Der Unterschied steht nicht in den Worten auf der Seite. Er liegt darin, wie wir jede Transaktion behandeln.",
      painLabel: "Typische Agentur",
      gainLabel: "AS Capital",
      pain: [
        "Schließen die Transaktion und verschwinden — keine Begleitung nach Übergabe",
        "Listen alles ungefiltert — keine rechtliche Prüfung vor der Listung",
        "Verhandlung, die ihre Provision schützt, nicht Ihren Preis",
        "Langsame Kommunikation — Antworten erst nach Tagen",
        "Keine Transparenz bei Kosten — Überraschungen am Ende",
        "Keine echte lokale Expertise — nur Portalwissen",
      ],
      gain: [
        "Unbegrenzte Begleitung nach Übergabe — Fragen, Wartung, Verträge",
        "Jede Immobilie wird rechtlich und technisch geprüft vor unserer Listung",
        "Verhandlung, die Ihren Preis schützt — durchschnittlich 5–12% Ersparnis",
        "WhatsApp-Antwort innerhalb von 1–2 Stunden zu Bürozeiten",
        "Volle Transparenz — jede Zahl dokumentiert vor der Unterzeichnung",
        "8 Jahre aktive Quartierskenntnis — Vergleichswerte, Bauträger, Projekte",
      ],
    },
    values: {
      eyebrow: "Unsere Werte",
      title: "Was uns bei jeder Transaktion leitet",
      items: [
        { label: "Vertrauen", title: "Unser Wort zählt", desc: "Was wir im ersten Gespräch versprechen, halten wir. Keine versteckten Bedingungen, keine Überraschungen am Unterschriftstag." },
        { label: "Transparenz", title: "Jede Zahl dokumentiert", desc: "Alle Preise, Steuern, Provisionen und Kosten liegen vor dem Start auf dem Tisch. Sie wissen genau, wohin Ihr Geld geht." },
        { label: "Expertise", title: "Lokales Wissen, das der Kauf braucht", desc: "Acht Jahre aktive Marktkenntnis im Kosovo. Reale Preise, geprüfte Bauträger, kommende Projekte, Infrastruktur." },
        { label: "Engagement", title: "Eine Beziehung, die bleibt", desc: "Unsere Beziehung endet nicht mit der Übergabe. Nach dem Kauf bleiben wir für Fragen erreichbar." },
      ],
    },
    coverage: {
      eyebrow: "Abdeckung",
      title: "Standorte, an denen wir aktiv sind",
      subtitle:
        "Unser Fokus ist Prishtina und Umgebung — dort, wo wir über 8 Jahre tiefe Marktkenntnis haben. Für entferntere Lagen arbeiten wir mit vertrauenswürdigen lokalen Partnern.",
      items: [
        { title: "Prishtina", desc: "Alle Quartiere — Qendër, Arbëri, Dardania, Ulpianë, Veternik, Bregu i Diellit, Aktash, Lakrishte, Sofalia und Peripherie." },
        { title: "Obiliq", desc: "Unser Hauptbüro. Tiefe Expertise im Wohnungs- und Einfamilienhausmarkt in der Gemeinde Obiliq." },
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
      text: "Ich dachte, alle Agenturen seien gleich — bis ich mit AS Capital arbeitete. Antworten innerhalb von Stunden, Transparenz bei jeder Kostenposition, und die Tatsache, dass sie mich auch 6 Monate nach dem Kauf noch anrufen, um sicherzugehen, dass alles gut läuft. Deshalb empfehle ich sie jedem Familienmitglied.",
      author: "Arben Berisha",
      role: "Wiederkehrender Kunde, zweiter Kauf mit AS Capital",
      avatar: "https://i.pravatar.cc/120?img=12",
    },
    faq: {
      eyebrow: "Über die Agentur",
      title: "Was Sie über AS Capital wissen sollten",
      items: [
        { q: "Wie lange ist AS Capital Real Estate tätig?", a: "Über 8 Jahre auf dem Kosovo-Immobilienmarkt. In dieser Zeit haben wir Hunderte Transaktionen erfolgreich abgeschlossen — Verkäufe, Vermietungen, Investments — vor allem in Prishtina und Nachbargemeinden." },
        { q: "Wo befindet sich Ihr Büro?", a: "Unser Hauptbüro ist in Hasan Prishtina, Obiliq, Kosovo 15000. Wir freuen uns auf Termine an Werktagen — bitte vereinbaren Sie diese telefonisch oder per WhatsApp." },
        { q: "Sind Sie lizenziert?", a: "Ja. AS Capital Real Estate erfüllt alle rechtlichen Anforderungen für Immobilienvermittlung im Kosovo. Lizenzunterlagen sind auf Anfrage einsehbar." },
        { q: "Was unterscheidet AS Capital von anderen Agenturen?", a: "Drei Dinge: echte lokale Expertise (wir kennen Quartiere nicht als Portal-Namen, sondern als Gemeinschaften mit Historie und Trends), unser Prüfprozess vor der Listung (der vielen Kunden Probleme erspart hat) und Erreichbarkeit nach der Übergabe (unsere Beziehung ist nicht transaktional)." },
        { q: "Arbeiten Sie auch mit langfristigen Investoren?", a: "Ja. Wir haben breite Erfahrung mit Investoren, die Portfolios im Kosovo-Markt aufbauen — Mietwohnungen, Bauland mit Genehmigung und Neubauwohnungen in Quartieren mit Wachstumspotenzial. Wir bieten Marktanalysen, ROI-Prognosen und langfristiges Objektmanagement." },
      ],
    },
    cta: {
      eyebrow: "Beginnen Sie mit einem Gespräch",
      title: "Möchten Sie testen, ob wir das richtige Team für Sie sind?",
      desc: "30 Minuten im Büro oder per WhatsApp — kostenfrei, unverbindlich. Die meisten Kunden wissen es nach dem Erstgespräch.",
      primary: "Termin anfordern",
      reassurance: "Antwort am selben Werktag. Kommunikation auf Albanisch, Englisch oder Deutsch.",
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
      <StatsBar
        eyebrow={c.stats.eyebrow}
        title={c.stats.title}
        items={c.stats.items}
        dark
      />
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
