import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./LanguageContext";

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollRestoration />
      </div>
    </LanguageProvider>
  );
}
