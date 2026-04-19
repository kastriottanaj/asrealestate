import { ShieldCheck, Handshake, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Zero rreziqe ligjore",
    desc: "Çdo pronë verifikohet ligjërisht dhe teknikisht para se të arrijë tek ju — dokumentacioni, tapija, lejet. Pa surpriza pas nënshkrimit.",
  },
  {
    icon: Handshake,
    title: "Partneritet afatgjatë",
    desc: "Nuk zhdukemi pas transaksionit. Ju ndihmojmë edhe pas blerjes — qira, rinovim, rishitje ose investimi i radhës.",
  },
  {
    icon: Sparkles,
    title: "Ekspertizë lokale",
    desc: "E njohim tregun lagje për lagje — nga Qendra deri në Arbëri. Ju tregojmë çmimin e drejtë, jo çmimin e shpallur.",
  },
  {
    icon: Users,
    title: "Qasje personale",
    desc: "Nuk jeni një numër në listë. Merrni agjentin tuaj personal, një numër telefoni që përgjigjet, dhe përgjigje të qarta pa përzierje.",
  },
];

export default function About() {
  return (
    <section id="rreth" className="section">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
              alt=""
              className="rounded-2xl shadow-card aspect-[3/4] object-cover"
            />
            <div className="space-y-4 mt-10">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                alt=""
                className="rounded-2xl shadow-card aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
                alt=""
                className="rounded-2xl shadow-card aspect-[4/3] object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand-600 text-white rounded-2xl p-6 shadow-card max-w-[220px] hidden sm:block">
            <div className="font-display text-4xl font-extrabold">8+</div>
            <div className="text-sm mt-1 text-white/90">
              vite duke ndërtuar besim në tregun kosovar
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Rreth AS Capital</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Partneri juaj i besueshëm për pasuri të paluajtshme
          </h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Në tregun e Kosovës, shumë blerje bëhen me frikë — frikë nga çmimi i
            fryrë, nga dokumentacioni i pasigurt, nga surprizat pas kontratës.
            AS Capital Real Estate ekziston për ta hequr atë frikë. Ne ndihmojmë
            familje, profesionistë dhe investitorë të marrin vendime të mençura
            — qofshin ato për shtëpinë e parë ose për portfolio investimi që u
            siguron të ardhmen.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#kontakti" className="btn-primary">
              Takohemi për një kafe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
