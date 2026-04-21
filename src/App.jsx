import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Properties from "./components/Properties";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import OfferProperty from "./components/OfferProperty";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Properties />
        <About />
        <Testimonials />
        <Contact />
        <OfferProperty />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
