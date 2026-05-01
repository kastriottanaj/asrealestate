import { Helmet } from "react-helmet-async";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../seo/agency";
import { LANGS, DEFAULT_LANG, withLang } from "../seo/lang";

const LOCALE_MAP = {
  sq: "sq_AL",
  en: "en_US",
  de: "de_DE",
};

// `path` is the language-neutral path (e.g. "/prona"). Seo computes the
// language-aware canonical and emits hreflang alternates for every language.
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  lang = DEFAULT_LANG,
  ogType = "website",
  jsonLd = [],
  noindex = false,
}) {
  const canonical = `${SITE_URL}${withLang(path, lang)}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogLocale = LOCALE_MAP[lang] || LOCALE_MAP.sq;
  const ogLocaleAlternates = LANGS.filter((l) => l !== lang).map((l) => LOCALE_MAP[l]);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* hreflang alternates */}
      {LANGS.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${SITE_URL}${withLang(path, l)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${withLang(path, DEFAULT_LANG)}`} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />
      {ogLocaleAlternates.map((l) => (
        <meta key={l} property="og:locale:alternate" content={l} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
