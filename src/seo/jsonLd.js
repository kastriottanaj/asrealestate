import { SITE_URL, SITE_NAME, AGENCY_ID, ORGANIZATION_REF } from "./agency";

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}`,
    })),
  };
}

export function faqPageJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ["sq", "en", "de"],
    publisher: ORGANIZATION_REF,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/prona?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageJsonLd({ url, name, description, type = "WebPage", lang = "sq", breadcrumbs }) {
  const node = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${url}#webpage`,
    url: `${SITE_URL}${url}`,
    name,
    description,
    inLanguage: lang,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: ORGANIZATION_REF,
    publisher: ORGANIZATION_REF,
  };
  if (breadcrumbs) {
    node.breadcrumb = { "@id": `${SITE_URL}${url}#breadcrumb` };
  }
  return node;
}

export function servicesGraphJsonLd(services) {
  return {
    "@context": "https://schema.org",
    "@graph": services.map((s, i) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/sherbimet#service-${i + 1}`,
      name: s.name,
      description: s.description,
      provider: ORGANIZATION_REF,
      areaServed: { "@type": "Country", name: "Kosovo" },
      serviceType: s.serviceType,
      offers: s.offers,
    })),
  };
}
