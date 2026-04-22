import { ShieldCheck, Handshake, Sparkles, Users } from "lucide-react";
import { useLang } from "../LanguageContext";

const ICONS = [ShieldCheck, Handshake, Sparkles, Users];

export default function About() {
  const { t } = useLang();
  return (
    <section id="rreth" className="section">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="" className="rounded-2xl shadow-card aspect-[3/4] object-cover" />
            <div className="space-y-4 mt-10">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="" className="rounded-2xl shadow-card aspect-square object-cover" />
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80" alt="" className="rounded-2xl shadow-card aspect-[4/3] object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-brand-600 text-white rounded-2xl p-6 shadow-card max-w-[220px] hidden sm:block">
            <div className="font-display text-4xl font-extrabold">8+</div>
            <div className="text-sm mt-1 text-white/90">{t.about.eyebrow}</div>
          </div>
        </div>

        <div>
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{t.about.title}</h2>
          <p className="mt-5 text-slate-600 leading-relaxed">{t.about.subtitle}</p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {t.about.features.map((f, i) => {
              const Icon = ICONS[i];
              return (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{f.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <a href="#kontakti" className="btn-primary">{t.about.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
