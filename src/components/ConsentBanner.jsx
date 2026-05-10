import { Cookie } from "lucide-react";
import { useConsent } from "../lib/consent";
import { useLang } from "../LanguageContext";

const COPY = {
  sq: {
    title: "Cookies dhe analitika",
    body: "Përdorim cookies për të kuptuar përdorimin e faqes dhe për reklamim të personalizuar (Google Analytics, Meta Pixel). Mund të refuzoni — kjo nuk ndikon në shërbimet thelbësore.",
    accept: "Pranoj",
    reject: "Refuzo",
  },
  en: {
    title: "Cookies and analytics",
    body: "We use cookies to understand site usage and for personalised advertising (Google Analytics, Meta Pixel). You can decline — this does not affect essential services.",
    accept: "Accept",
    reject: "Decline",
  },
  de: {
    title: "Cookies und Analyse",
    body: "Wir verwenden Cookies zur Nutzungsanalyse und für personalisierte Werbung (Google Analytics, Meta Pixel). Sie können ablehnen — wesentliche Dienste sind nicht betroffen.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
  },
};

export default function ConsentBanner() {
  const [consent, setConsent] = useConsent();
  const { lang } = useLang();
  const c = COPY[lang] || COPY.sq;

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[60] bg-white border-t border-slate-200 shadow-[0_-6px_20px_rgba(15,23,42,0.08)]"
    >
      <div className="container-x py-4 sm:py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="shrink-0 hidden sm:flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <div id="consent-title" className="font-bold text-slate-900">{c.title}</div>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">{c.body}</p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setConsent("denied")}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 transition flex-1 md:flex-none"
            >
              {c.reject}
            </button>
            <button
              onClick={() => setConsent("accepted")}
              className="btn-primary flex-1 md:flex-none"
            >
              {c.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
