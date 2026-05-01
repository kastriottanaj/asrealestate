export default function ProcessSection({ eyebrow, title, subtitle, steps, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x">
        <div className="max-w-2xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && (
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
          )}
          {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={i}
              className="relative rounded-2xl bg-white p-7 shadow-soft border border-slate-100"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 font-display font-extrabold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
