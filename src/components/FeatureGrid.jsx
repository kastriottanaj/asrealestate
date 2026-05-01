export default function FeatureGrid({ eyebrow, title, subtitle, items, columns = 3, dark = false, className = "" }) {
  const grid = columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section className={`section ${dark ? "bg-slate-900 text-white" : ""} ${className}`}>
      <div className="container-x">
        <div className="max-w-2xl">
          {eyebrow && (
            <span className={`eyebrow ${dark ? "text-brand-300" : ""}`}>{eyebrow}</span>
          )}
          {title && (
            <h2 className={`mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? "text-white" : ""}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`mt-4 ${dark ? "text-white/75" : "text-slate-600"}`}>{subtitle}</p>
          )}
        </div>
        <div className={`mt-12 grid gap-6 ${grid}`}>
          {items.map((item, i) => (
            <article
              key={i}
              className={`rounded-2xl p-7 border ${
                dark ? "bg-white/5 border-white/10" : "bg-white border-slate-100 shadow-soft"
              }`}
            >
              {item.label && (
                <span className={`inline-block text-xs font-bold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-700"}`}>
                  {item.label}
                </span>
              )}
              <h3 className={`mt-3 text-lg font-bold ${dark ? "text-white" : "text-slate-900"}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/75" : "text-slate-600"}`}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
