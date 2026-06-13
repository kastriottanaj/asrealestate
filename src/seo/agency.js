export const SITE_URL = "https://asrealestate-rks.com";
export const SITE_NAME = "AS Capital Real Estate";
export const PHONE = "+38349942941";
export const PHONE_DISPLAY = "+383 49 942 941";
export const EMAIL = "asrealestaterks@gmail.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:00",
    closes: "14:00",
    description: "By appointment only",
  },
];

export const AGENCY_ID = `${SITE_URL}/#agency`;

const AREA_SERVED = [
  { "@type": "City", name: "Prishtinë", "@id": "https://www.wikidata.org/wiki/Q193424" },
  { "@type": "City", name: "Obiliq" },
  { "@type": "City", name: "Fushë Kosovë" },
  { "@type": "City", name: "Lipjan" },
  { "@type": "City", name: "Graçanicë" },
  { "@type": "Country", name: "Kosovo", "@id": "https://www.wikidata.org/wiki/Q1246" },
];

export function agencyJsonLd({ contactPage = false } = {}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": AGENCY_ID,
    name: SITE_NAME,
    legalName: "AS Capital Real Estate",
    url: SITE_URL,
    logo: `${SITE_URL}/as-real-estate.svg`,
    image: `${SITE_URL}/as-real-estate.svg`,
    telephone: PHONE,
    email: EMAIL,
    description:
      "Real estate agency in Kosovo specialising in property sales, rentals and investments across Prishtina, Obiliq, Fushë Kosovë, Lipjan and Graçanicë. 8+ years of local market expertise.",
    foundingDate: "2018",
    slogan: "Pasuri të paluajtshme • Investime të sigurta • Besueshmëri",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rruga \"Ahmet Krasniqi\" Nr. 15",
      addressLocality: "Prishtinë",
      addressRegion: "Prishtinë",
      addressCountry: "XK",
      postalCode: "10000",
    },
    areaServed: AREA_SERVED,
    knowsLanguage: ["sq", "en", "de"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Bank transfer", "Cash", "Bank loan"],
    sameAs: [
      "https://www.facebook.com/profile.php?id=100069607270512",
      "https://www.instagram.com/asrealestate.rks/",
      "https://www.linkedin.com/company/as-real-estate-rks/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        availableLanguage: ["sq", "en", "de"],
        areaServed: "XK",
      },
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "sales",
        availableLanguage: ["sq", "en", "de"],
      },
    ],
  };
  if (contactPage) {
    base.openingHoursSpecification = OPENING_HOURS;
  }
  return base;
}

export const ORGANIZATION_REF = { "@id": AGENCY_ID };
