import { useEffect, useRef } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ConsentBanner from "./components/ConsentBanner";
import { LanguageProvider } from "./LanguageContext";
import { pageView } from "./lib/pixel";

function MetaPixelRouteTracker() {
  const location = useLocation();
  const lastPath = useRef(location.pathname);
  useEffect(() => {
    if (lastPath.current !== location.pathname) {
      pageView();
    }
    lastPath.current = location.pathname;
  }, [location.pathname]);
  return null;
}

export default function Layout() {
  // HelmetProvider is supplied by vite-react-ssg (and used as the SSG
  // head-extraction context). Don't wrap a second one here — it would
  // shadow the outer context and swallow per-page <Helmet> output.
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <MetaPixelRouteTracker />
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <ConsentBanner />
        <ScrollRestoration />
      </div>
    </LanguageProvider>
  );
}
