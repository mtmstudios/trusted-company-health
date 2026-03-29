import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { resetCookieConsent } from "@/components/CookieBanner";

const Footer = () => (
  <footer className="bg-dark-navy pt-16 pb-8">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-primary-foreground/10">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <svg width="28" height="33" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 0L0 7V19C0 29.5 7.8 39.3 18 42C28.2 39.3 36 29.5 36 19V7L18 0Z" fill="hsl(var(--secondary-teal))"/>
              <path d="M18 0L0 7V13C0 13 6 11 18 11C30 11 36 13 36 13V7L18 0Z" fill="hsl(var(--primary-teal))"/>
              <path d="M18 4L3 10V19C3 28 9.8 36.8 18 39.5C26.2 36.8 33 28 33 19V10L18 4Z" fill="white" opacity="0.12"/>
            </svg>
            <span className="font-bold text-sm text-primary-foreground leading-none">
              meine-zusatzversicherung<span className="text-secondary-teal">.de</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            Ihr Spezialist für betriebliche Krankenversicherung. Persönlich. Kompetent. Unabhängig.
          </p>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Navigation</p>
          <div className="flex flex-col gap-2">
            {["Vorteile", "Wie es funktioniert", "Team", "FAQ", "Kontakt"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Kontakt</p>
          <div className="space-y-2">
            <a href="tel:0715339271" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground">
              <Phone size={14} /> 07153-39271
            </a>
            <a href="mailto:david.felzmann@wuerttembergische.de" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground">
              <Mail size={14} /> david.felzmann@wuerttembergische.de
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Meine Zusatzversicherung. Alle Rechte vorbehalten.</p>
        <div className="flex gap-4 text-xs text-primary-foreground/40">
          <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
          <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
          <Link to="/barrierefreiheit" className="hover:text-primary-foreground transition-colors">Barrierefreiheit</Link>
          <button onClick={resetCookieConsent} className="hover:text-primary-foreground transition-colors cursor-pointer">Cookie-Einstellungen</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
