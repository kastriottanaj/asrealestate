export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative bg-slate-900 text-white pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,136,229,0.25),transparent_60%)]" />
      <div className="container-x relative">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase border border-white/20">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
          {title}
        </h1>
        {subtitle && <p className="mt-5 text-lg text-white/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
