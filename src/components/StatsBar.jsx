export default function StatsBar({ items, eyebrow, title, dark = false, className = "" }) {
  return (
    <section className={`${dark ? "bg-slate-900 text-white" : "bg-brand-50"} ${className} py-14 sm:py-16`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="max-w-2xl mb-10 text-center mx-auto">
            {eyebrow && (
              <span className={`inline-block text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-brand-300" : "text-brand-700"}`}>
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className={`mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight ${dark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h2>
            )}
          </div>
        )}
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div key={i} className="text-center">
              <dt className={`font-display text-3xl sm:text-4xl font-extrabold ${dark ? "text-white" : "text-brand-700"}`}>
                {s.value}
              </dt>
              <dd className={`mt-2 text-sm ${dark ? "text-white/75" : "text-slate-600"}`}>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
