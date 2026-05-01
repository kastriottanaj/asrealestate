import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection({ eyebrow, title, subtitle, items, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x max-w-3xl">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && (
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
        )}
        {subtitle && <p className="mt-4 text-slate-600">{subtitle}</p>}
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-slate-900">{q}</span>
        <ChevronDown
          className={`h-5 w-5 mt-1 shrink-0 text-brand-600 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 pr-10 text-slate-600 leading-relaxed">{a}</p>}
    </div>
  );
}
