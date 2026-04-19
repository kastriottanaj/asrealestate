import { Home, Key, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Shitje",
    desc: "Po mendoni të shisni? Marrim përgjegjësinë që prona juaj të arrijë çmimin më të mirë në treg — pa presion, me klientë të verifikuar.",
    points: ["Vlerësim falas brenda 48 orësh", "Marketing profesional me foto dhe video", "Negocim nga ekspertë të tregut"],
    cta: "Vlerësim falas",
  },
  {
    icon: Key,
    title: "Qira",
    desc: "Banesa, zyre dhe lokale të verifikuara me kujdes — me kontrata ligjore të qarta, që ju mbrojnë nga surprizat e padëshiruara.",
    points: ["Vetëm prona të verifikuara", "Kontrata ligjore të qarta", "Menaxhim i qerave pa stres"],
    cta: "Kërko banesën time",
  },
  {
    icon: TrendingUp,
    title: "Investime",
    desc: "Mos lini investimin tuaj në fat. Analizë e thellë e tregut të Kosovës dhe mundësi ekskluzive që nuk i gjeni në Facebook.",
    points: ["Analizë ROI për çdo mundësi", "Portfolio i diversifikuar", "Konsultim strategjik 1-me-1"],
    cta: "Analizë ROI falas",
  },
];

export default function Services() {
  return (
    <section id="sherbimet" className="section bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">Shërbimet tona</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Çdo gjë që ju nevojitet nën një çati
          </h2>
          <p className="mt-4 text-slate-600">
            Nga gjetja e banesës së parë deri te ndërtimi i portfolios suaj të
            investimeve — ekipi ynë është me ju në çdo hap.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, points, cta }) => (
            <div
              key={title}
              className="group relative rounded-2xl bg-white p-8 shadow-soft hover:shadow-card transition border border-slate-100 flex flex-col"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <ul className="mt-5 space-y-2 flex-1">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakti"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                {cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
