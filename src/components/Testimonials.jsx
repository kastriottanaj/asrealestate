import { Quote, Star } from "lucide-react";
import { useLang } from "../LanguageContext";

const ITEMS = {
  sq: [
    { name: "Arbër Krasniqi", role: "Blerës i banesës së parë", text: "Ekipi i AS Real Estate më ndihmoi të gjej banesën e ëndrrave në Qendër — procesi ishte i qartë, i shpejtë dhe pa stres. Do i rekomandoja gjithkujt.", avatar: "https://i.pravatar.cc/120?img=12" },
    { name: "Drita Berisha", role: "Investitore", text: "Investimi im i parë në Prishtinë shkoi në mënyrë perfekte falë analizës së tyre të tregut. Këshilltarë të vërtetë, jo thjesht agjentë.", avatar: "https://i.pravatar.cc/120?img=47" },
    { name: "Blerim Hoxha", role: "Pronar i një lokali", text: "E kam dhënë lokalin me qira përmes AS Real Estate — kontrata e qartë, qiramarrës të verifikuar dhe menaxhim i përkryer. Shumë profesionalë.", avatar: "https://i.pravatar.cc/120?img=33" },
  ],
  en: [
    { name: "Arbër Krasniqi", role: "First-time buyer", text: "The AS Real Estate team helped me find my dream apartment in the city centre — the process was clear, fast and stress-free. I would recommend them to everyone.", avatar: "https://i.pravatar.cc/120?img=12" },
    { name: "Drita Berisha", role: "Investor", text: "My first investment in Prishtina went perfectly thanks to their market analysis. Real advisors, not just agents.", avatar: "https://i.pravatar.cc/120?img=47" },
    { name: "Blerim Hoxha", role: "Shop owner", text: "I rented out my shop through AS Real Estate — clear contract, verified tenants and perfect management. Very professional.", avatar: "https://i.pravatar.cc/120?img=33" },
  ],
  de: [
    { name: "Arbër Krasniqi", role: "Erstkäufer", text: "Das AS Real Estate-Team hat mir geholfen, meine Traumwohnung im Stadtzentrum zu finden — der Prozess war klar, schnell und stressfrei. Ich würde sie jedem empfehlen.", avatar: "https://i.pravatar.cc/120?img=12" },
    { name: "Drita Berisha", role: "Investorin", text: "Meine erste Investition in Prishtina verlief dank ihrer Marktanalyse perfekt. Echte Berater, nicht nur Makler.", avatar: "https://i.pravatar.cc/120?img=47" },
    { name: "Blerim Hoxha", role: "Ladenbesitzer", text: "Ich habe meinen Laden über AS Real Estate vermietet — klarer Vertrag, geprüfte Mieter und perfekte Verwaltung. Sehr professionell.", avatar: "https://i.pravatar.cc/120?img=33" },
  ],
};

export default function Testimonials() {
  const { lang, t } = useLang();
  const items = ITEMS[lang];

  return (
    <section className="section bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-200">{t.testimonials.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{t.testimonials.title}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <figure key={item.name} className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-7 relative">
              <Quote className="h-8 w-8 text-brand-200 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />)}
              </div>
              <blockquote className="text-white/95 leading-relaxed">{item.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={item.avatar} alt={item.name} className="h-11 w-11 rounded-full object-cover border-2 border-white/30" />
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-brand-100">{item.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
