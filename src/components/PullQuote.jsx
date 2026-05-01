import { Quote, Star } from "lucide-react";

export default function PullQuote({ quote, author, role, avatar, className = "" }) {
  return (
    <section className={`section ${className}`}>
      <div className="container-x max-w-3xl">
        <figure className="rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 text-white p-10 sm:p-14 shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <Quote className="h-10 w-10 text-brand-200 mb-6" />
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
            ))}
          </div>
          <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-tight">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            {avatar && (
              <img src={avatar} alt={author} className="h-12 w-12 rounded-full border-2 border-white/30 object-cover" />
            )}
            <div>
              <div className="font-bold text-white">{author}</div>
              {role && <div className="text-sm text-brand-100">{role}</div>}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
