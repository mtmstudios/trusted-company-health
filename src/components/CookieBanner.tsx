import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, Shield } from "lucide-react";

export const COOKIE_KEY = "cookie_consent";

/** Re-show the cookie banner (called from Footer link) */
export const resetCookieConsent = () => {
  localStorage.removeItem(COOKIE_KEY);
  window.dispatchEvent(new Event("cookie-reset"));
};

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setVisible(true);

    const onReset = () => setVisible(true);
    window.addEventListener("cookie-reset", onReset);
    return () => window.removeEventListener("cookie-reset", onReset);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-dark-navy/30 backdrop-blur-sm flex items-end justify-center sm:items-end">
      <div
        role="dialog"
        aria-label="Cookie-Einstellungen"
        aria-modal="true"
        className="w-full max-w-2xl mx-4 mb-4 sm:mb-6 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 pt-6 pb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-secondary-foreground">Cookie-Einstellungen</h2>
            <p className="text-xs text-muted-foreground">Ihre Privatsphäre ist uns wichtig</p>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-4 mb-4">
            <Shield size={16} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              Diese Website verwendet <strong>ausschließlich technisch notwendige Cookies</strong>, die für den
              Betrieb erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies eingesetzt.
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Weitere Informationen finden Sie in unserer{" "}
            <Link to="/datenschutz" className="text-primary hover:text-accent font-medium transition-colors">
              Datenschutzerklärung
            </Link>.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 pb-6">
          <button
            onClick={decline}
            className="flex-1 px-4 py-2.5 text-sm font-medium border border-border rounded-full text-foreground hover:bg-muted transition-colors duration-200"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="flex-1 px-4 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-secondary-teal transition-colors duration-200"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
