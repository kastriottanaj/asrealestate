import Seo from "../components/Seo";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Properties from "../components/Properties";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import OfferProperty from "../components/OfferProperty";
import Newsletter from "../components/Newsletter";
import { useLang } from "../LanguageContext";
import { agencyJsonLd } from "../seo/agency";
import { webSiteJsonLd, webPageJsonLd } from "../seo/jsonLd";
import { withLang } from "../seo/lang";

const SEO = {
  sq: {
    title: "AS Capital Real Estate — Agjenci pasurish të paluajtshme në Kosovë",
    description:
      "AS Capital Real Estate — partneri juaj i besueshëm për shitje, qira dhe investime në Prishtinë, Obiliq dhe rajon. 8+ vite ekspertizë lokale, prona të verifikuara, konsultim falas.",
  },
  en: {
    title: "AS Capital Real Estate — Real estate agency in Kosovo",
    description:
      "AS Capital Real Estate — your trusted partner for property sales, rentals and investments in Prishtina, Obiliq and the wider region. 8+ years of local expertise, verified listings, free consultation.",
  },
  de: {
    title: "AS Capital Real Estate — Immobilienagentur im Kosovo",
    description:
      "AS Capital Real Estate — Ihr zuverlässiger Partner für Verkauf, Vermietung und Investitionen in Prishtina, Obiliq und Umgebung. 8+ Jahre lokale Expertise, geprüfte Angebote, kostenlose Beratung.",
  },
};

export default function HomePage() {
  const { lang } = useLang();
  const seo = SEO[lang] || SEO.sq;
  const jsonLd = [
    webSiteJsonLd(),
    agencyJsonLd(),
    webPageJsonLd({
      url: withLang("/", lang),
      name: seo.title,
      description: seo.description,
      lang,
    }),
  ];
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path="/"
        lang={lang}
        jsonLd={jsonLd}
      />
      <Hero />
      <Services />
      <Properties />
      <About />
      <Testimonials />
      <Contact />
      <OfferProperty />
      <Newsletter />
    </>
  );
}
