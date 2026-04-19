import { Quote, Star } from "lucide-react";

const items = [
  {
    name: "Arbër Krasniqi",
    role: "Blerës i banesës së parë",
    text:
      "Ekipi i AS Capital më ndihmoi të gjej banesën e ëndrrave në Qendër — procesi ishte i qartë, i shpejtë dhe pa stres. Do i rekomandoja gjithkujt.",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    name: "Drita Berisha",
    role: "Investitore",
    text:
      "Investimi im i parë në Prishtinë shkoi në mënyrë perfekte falë analizës së tyre të tregut. Këshilltarë të vërtetë, jo thjesht agjentë.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Blerim Hoxha",
    role: "Pronar i një lokali",
    text:
      "E kam dhënë lokalin me qira përmes AS Capital — kontrata e qartë, qiramarrës të verifikuar dhe menaxhim i përkryer. Shumë profesionalë.",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-200">
            Klientët tanë
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ata që kanë besuar tek ne — dhe nuk janë penduar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-7 relative"
            >
              <Quote className="h-8 w-8 text-brand-200 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <blockquote className="text-white/95 leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-brand-100">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
