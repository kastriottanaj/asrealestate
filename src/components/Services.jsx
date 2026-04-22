import { Home, Key, TrendingUp, ArrowRight } from "lucide-react";
import { useLang } from "../LanguageContext";

const ICONS = [Home, Key, TrendingUp];

export default function Services() {
  const { t } = useLang();
  return (
    <section id="sherbimet" className="section bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{t.services.title}</h2>
          <p className="mt-4 text-slate-600">{t.services.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div key={item.title} className="group relative rounded-2xl bg-white p-8 shadow-soft hover:shadow-card transition border border-slate-100 flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                <ul className="mt-5 space-y-2 flex-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#kontakti" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                  {t.services.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
