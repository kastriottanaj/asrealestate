import { useEffect, useState } from "react";

const STORAGE_KEY = "ascap.consent.v1";
const META_PIXEL_ID = "2119003922011848";
const META_PIXEL_ID_2 = "1484328702669095";
const GA_ID = "G-YCY72601HB";

let analyticsLoaded = false;

export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function persist(value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* localStorage may be blocked in private mode — silently no-op */
  }
}

function loadGoogleAnalytics() {
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

function loadMetaPixel() {
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq("init", META_PIXEL_ID);
  window.fbq("init", META_PIXEL_ID_2);
  window.fbq("track", "PageView");
}

export function loadAnalytics() {
  if (analyticsLoaded || typeof window === "undefined") return;
  analyticsLoaded = true;
  loadGoogleAnalytics();
  loadMetaPixel();
}

export function useConsent() {
  const [consent, setConsent] = useState(() => getStoredConsent());

  useEffect(() => {
    if (consent === "accepted") loadAnalytics();
  }, [consent]);

  const update = (value) => {
    persist(value);
    setConsent(value);
  };

  return [consent, update];
}
