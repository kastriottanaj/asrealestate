import { X, Check } from "lucide-react";

export default function PainGain({ eyebrow, title, subtitle, painLabel, gainLabel, painItems, gainItems, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <div className="max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>}
          {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Pain side */}
          <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/40 p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-700">
              <X className="h-3.5 w-3.5" />
              {painLabel}
            </div>
            <ul className="mt-6 space-y-4">
              {painItems.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-rose-400" />
                  <span className="text-slate-700 leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain side */}
          <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/60 p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
              <Check className="h-3.5 w-3.5" />
              {gainLabel}
            </div>
            <ul className="mt-6 space-y-4">
              {gainItems.map((it, i) => (
                <li key={i} className="flex gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-slate-800 leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
