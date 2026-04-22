import { useState } from "react";
import { Mail, Loader2, ArrowRight } from "lucide-react";
import { submitSubscriber } from "../api";
import { useLang } from "../LanguageContext";

export default function Newsletter() {
  const { t } = useLang();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitSubscriber(email);
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      const msgs = Object.values(err || {}).flat();
      setErrorMsg(msgs[0] || "Ndodhi një gabim. Provoni përsëri.");
    }
  };

  return (
    <section className="bg-brand-600">
      <div className="container-x py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <Mail className="h-5 w-5 text-white/80" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">{t.newsletter.label}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {t.newsletter.title}
          </h2>
          <p className="mt-2 text-brand-100 max-w-md">
            {t.newsletter.sub}
          </p>
        </div>

        <form onSubmit={submit} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[340px]">
          <div className="flex-1">
            <input
              type="email"
              required
              placeholder="emaili@juaj.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading" || status === "success"}
              className="w-full rounded-xl px-5 py-3.5 text-sm font-medium text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60"
            />
            {status === "error" && (
              <p className="mt-1.5 text-xs text-white/90 font-medium">{errorMsg}</p>
            )}
            {status === "success" && (
              <p className="mt-1.5 text-xs text-white font-semibold">
                ✓ U regjistruat me sukses!
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="shrink-0 flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 text-sm transition disabled:opacity-60"
          >
            {status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : status === "success" ? (
              t.newsletter.success
            ) : (
              <>{t.newsletter.btn} <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
