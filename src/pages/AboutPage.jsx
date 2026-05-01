import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import FeatureGrid from "../components/FeatureGrid";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
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
    title: "AS Capital Real Estate — 8+ vite në tregun e Kosovës",
    subtitle:
      "Një ekip i përkushtuar agjentësh dhe këshilltarësh me ekspertizë të thellë lokale, që ka mbyllur qindra transaksione në Prishtinë dhe rajon. Misioni ynë: të bëjmë çdo blerje, qira dhe investim të sigurt, transparent dhe me vlerë afatgjatë.",
    story: {
      eyebrow: "Historia jonë",
      title: "Si nisi AS Capital Real Estate",
      paragraphs: [
        "AS Capital Real Estate u themelua me një bindje të thjeshtë: tregu i pasurive të paluajtshme në Kosovë meriton ndërmjetës që punojnë për klientin, jo vetëm për provizionin. Që nga themelimi, kemi mbyllur me sukses qindra transaksione — banesa familjare, vila premium, zyre biznesi, lokale tregtare dhe parcela investimi.",
        "Përvoja jonë në treg na ka mësuar atë që portalet e listingjeve nuk e tregojnë: çmimet reale të çdo lagjeje, ndërtuesit e besueshëm, projektet që do të ndryshojnë vlerat në vitet e ardhshme, dhe kurthet ligjore që duhen shmangur. Këtë njohuri e vëmë në dispozicion të çdo klienti, që në takimin e parë.",
        "Sot, 8 nga 10 klientë na vijnë nga rekomandimet — familjet që kanë blerë me ne i flasin për ne fqinjit, kushërinjtë në diasporë, kolegët në punë. Kjo është matja jonë më e rëndësishme e suksesit.",
      ],
    },
    values: {
      eyebrow: "Vlerat tona",
      title: "Çfarë na drejton në çdo transaksion",
      items: [
        { label: "Besueshmëri", title: "Fjala jonë vlen", desc: "Çfarë premtojmë në takimin e parë, kjo është ajo që marrim përsipër. Pa kushte të fshehura, pa surpriza në ditën e nënshkrimit." },
        { label: "Transparencë", title: "Çdo numër i dokumentuar", desc: "Të gjitha çmimet, taksat, komisionet dhe shpenzimet janë në letër para se të nisni. Ju dini saktësisht ku po shkojnë paratë tuaja." },
        { label: "Ekspertizë", title: "Njohja lokale që blerja kërkon", desc: "Tetë vite njohje aktive të tregut të Kosovës. Çmime reale, ndërtues të vërtetuar, projekte të ardhshme, infrastrukturë — gjithë konteksti që ndikon vendimin tuaj." },
        { label: "Përkushtim", title: "Marrëdhënie që zgjat", desc: "Marrëdhënia jonë nuk përfundon me dorëzimin. Pas blerjes, qëndrojmë në dispozicion për çdo pyetje, lidhje me ekipe mirëmbajtjeje, ose këshillim të mëtejshëm." },
      ],
    },
    coverage: {
      eyebrow: "Mbulimi gjeografik",
      title: "Lokacionet ku operojmë aktivisht",
      subtitle:
        "Fokusi ynë është Prishtina dhe rajoni i saj — aty ku kemi më shumë se 8 vite njohje të thellë të tregut. Për lokacione më të largëta, punojmë me partnerë lokalë të besuar.",
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
        { title: "Prona të verifikuara para se të hyjnë në listë", desc: "Çdo pronë kalon kontrollin tonë ligjor dhe teknik para se të paraqitet te klienti." },
        { title: "Mbështetje juridike gjatë gjithë procesit", desc: "Punojmë me noterë dhe juristë të besuar për t'ju siguruar që çdo dokument është i rregullt." },
        { title: "Komunikim në Shqip, Anglisht, Gjermanisht", desc: "Klientët tanë në diasporë komunikojnë në gjuhën e tyre, me përgjigje brenda të njëjtës ditë pune." },
        { title: "Disponueshmëri pas dorëzimit", desc: "Marrëdhënia nuk përfundon me marrjen e çelësave. Qëndrojmë në dispozicion për pyetje dhe nevoja të mëtejshme." },
        { title: "Zero detyrim për ekskluzivitet", desc: "Mund të punoni me ne pa ndonjë kontratë ekskluzive — shërbimi ynë qëndron i njëjtë." },
      ],
    },
    faq: {
      eyebrow: "Pyetje për agjencinë",
      title: "Çka duhet të dini për AS Capital",
      items: [
        { q: "Sa kohë ka që operon AS Capital Real Estate?", a: "Mbi 8 vite në tregun e pasurive të paluajtshme në Kosovë. Gjatë kësaj kohe kemi mbyllur me sukses qindra transaksione — shitje, qira, investime — kryesisht në Prishtinë dhe komunat fqinje." },
        { q: "Ku ndodhet zyra juaj?", a: "Zyra jonë qendrore ndodhet në Hasan Prishtina, Obiliq, Kosovë 15000. Jeni të mirëpritur për takim ditët e javës — ju lutemi caktoni një orar nëpërmjet telefonit ose WhatsApp për të siguruar disponueshmërinë." },
        { q: "A jeni të licencuar?", a: "Po. AS Capital Real Estate operon në përputhje me të gjitha kërkesat ligjore për ndërmjetësim të pasurive të paluajtshme në Kosovë. Dokumentet e licencimit janë në dispozicion për shqyrtim me kërkesë." },
        { q: "Çfarë e bën AS Capital të ndryshëm nga agjencitë e tjera?", a: "Tre gjëra: ekspertizë vërtet lokale (njohim lagjet jo si emra në një portal, por si komunitete me histori dhe trende), procesi ynë i verifikimit para listimit (që ka shmangur shumë probleme për klientët tanë), dhe disponueshmëria pas dorëzimit (marrëdhënia jonë nuk është transaksionale)." },
      ],
    },
  },
  en: {
    eyebrow: "About Us",
    title: "AS Capital Real Estate — 8+ years in the Kosovo market",
    subtitle:
      "A dedicated team of agents and advisors with deep local expertise, having closed hundreds of transactions across Prishtina and the region. Our mission: make every purchase, rental and investment safe, transparent, and built for long-term value.",
    story: {
      eyebrow: "Our story",
      title: "How AS Capital Real Estate started",
      paragraphs: [
        "AS Capital Real Estate was founded on a simple belief: Kosovo's real estate market deserves brokers who work for the client, not just for the commission. Since founding, we have closed hundreds of successful transactions — family apartments, premium villas, business offices, retail and investment plots.",
        "Our market experience has taught us what listing portals don't show: real prices per neighbourhood, trusted developers, projects that will shift values in coming years, and the legal pitfalls to avoid. We bring this knowledge to every client, from the first meeting.",
        "Today, 8 in 10 of our clients come from referrals — families who bought with us tell their neighbours, their relatives in the diaspora, their colleagues at work. That's the most important measure of our success.",
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "What guides us in every transaction",
      items: [
        { label: "Trust", title: "Our word counts", desc: "What we promise at the first meeting is what we deliver. No hidden conditions, no surprises on signing day." },
        { label: "Transparency", title: "Every number documented", desc: "All prices, taxes, commissions and costs are on paper before you start. You know exactly where your money is going." },
        { label: "Expertise", title: "The local knowledge buying requires", desc: "Eight years of active Kosovo market knowledge. Real prices, proven builders, upcoming projects, infrastructure — the full context behind your decision." },
        { label: "Dedication", title: "A relationship that lasts", desc: "Our relationship doesn't end at handover. After the purchase, we remain available for any question, maintenance connections or further advice." },
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
    faq: {
      eyebrow: "About the agency",
      title: "What you should know about AS Capital",
      items: [
        { q: "How long has AS Capital Real Estate been operating?", a: "Over 8 years in the Kosovo real estate market. We have successfully closed hundreds of transactions in that time — sales, rentals, investments — mainly in Prishtina and neighbouring municipalities." },
        { q: "Where is your office?", a: "Our head office is at Hasan Prishtina, Obiliq, Kosovo 15000. You're welcome to come in for a meeting on weekdays — please schedule via phone or WhatsApp to ensure availability." },
        { q: "Are you licensed?", a: "Yes. AS Capital Real Estate operates in compliance with all legal requirements for real estate brokerage in Kosovo. Licensing documents are available for review on request." },
        { q: "What makes AS Capital different from other agencies?", a: "Three things: genuinely local expertise (we know neighbourhoods not as portal names but as communities with history and trends), our pre-listing verification process (which has prevented many issues for our clients), and post-handover availability (our relationship is not transactional)." },
      ],
    },
  },
  de: {
    eyebrow: "Über uns",
    title: "AS Capital Real Estate — 8+ Jahre auf dem Kosovo-Markt",
    subtitle:
      "Ein engagiertes Team aus Maklern und Beratern mit tiefer lokaler Expertise, das Hunderte Transaktionen in Prishtina und der Region abgeschlossen hat. Unsere Mission: jeden Kauf, jede Miete und jede Investition sicher, transparent und langfristig wertschaffend zu gestalten.",
    story: {
      eyebrow: "Unsere Geschichte",
      title: "So begann AS Capital Real Estate",
      paragraphs: [
        "AS Capital Real Estate wurde aus einer einfachen Überzeugung gegründet: Der Immobilienmarkt im Kosovo verdient Makler, die für den Kunden arbeiten — nicht nur für die Provision. Seit der Gründung haben wir Hunderte erfolgreicher Transaktionen abgeschlossen — Familienwohnungen, Premium-Villen, Büros, Geschäfte und Investmentparzellen.",
        "Unsere Markterfahrung hat uns gelehrt, was Portale nicht zeigen: reale Preise je Quartier, vertrauenswürdige Bauträger, kommende Projekte, die Werte verändern werden, und rechtliche Fallen. Dieses Wissen bringen wir in jedes Kundengespräch ein, von Anfang an.",
        "Heute kommen 8 von 10 Kunden über Empfehlungen — Familien, die bei uns gekauft haben, sprechen mit Nachbarn, Verwandten in der Diaspora und Kollegen über uns. Das ist unser wichtigster Erfolgsmaßstab.",
      ],
    },
    values: {
      eyebrow: "Unsere Werte",
      title: "Was uns bei jeder Transaktion leitet",
      items: [
        { label: "Vertrauen", title: "Unser Wort zählt", desc: "Was wir im ersten Gespräch versprechen, halten wir. Keine versteckten Bedingungen, keine Überraschungen am Unterschriftstag." },
        { label: "Transparenz", title: "Jede Zahl dokumentiert", desc: "Alle Preise, Steuern, Provisionen und Kosten liegen vor dem Start auf dem Tisch. Sie wissen genau, wohin Ihr Geld geht." },
        { label: "Expertise", title: "Lokales Wissen, das der Kauf braucht", desc: "Acht Jahre aktive Marktkenntnis im Kosovo. Reale Preise, geprüfte Bauträger, kommende Projekte, Infrastruktur — der ganze Kontext hinter Ihrer Entscheidung." },
        { label: "Engagement", title: "Eine Beziehung, die bleibt", desc: "Unsere Beziehung endet nicht mit der Übergabe. Nach dem Kauf bleiben wir für Fragen, Wartungskontakte und weitere Beratung erreichbar." },
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
    faq: {
      eyebrow: "Über die Agentur",
      title: "Was Sie über AS Capital wissen sollten",
      items: [
        { q: "Wie lange ist AS Capital Real Estate tätig?", a: "Über 8 Jahre auf dem Kosovo-Immobilienmarkt. In dieser Zeit haben wir Hunderte Transaktionen erfolgreich abgeschlossen — Verkäufe, Vermietungen, Investments — vor allem in Prishtina und Nachbargemeinden." },
        { q: "Wo befindet sich Ihr Büro?", a: "Unser Hauptbüro ist in Hasan Prishtina, Obiliq, Kosovo 15000. Wir freuen uns auf Termine an Werktagen — bitte vereinbaren Sie diese telefonisch oder per WhatsApp." },
        { q: "Sind Sie lizenziert?", a: "Ja. AS Capital Real Estate erfüllt alle rechtlichen Anforderungen für Immobilienvermittlung im Kosovo. Lizenzunterlagen sind auf Anfrage einsehbar." },
        { q: "Was unterscheidet AS Capital von anderen Agenturen?", a: "Drei Dinge: echte lokale Expertise (wir kennen Quartiere nicht als Portal-Namen, sondern als Gemeinschaften mit Historie und Trends), unser Prüfprozess vor der Listung (der vielen Kunden Probleme erspart hat) und Erreichbarkeit nach der Übergabe (unsere Beziehung ist nicht transaktional)." },
      ],
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
      <FeatureGrid
        eyebrow={c.values.eyebrow}
        title={c.values.title}
        items={c.values.items}
        columns={2}
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
