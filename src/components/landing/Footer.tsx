import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-dark-navy pt-16 pb-8" role="contentinfo">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-primary-foreground/10">
        <div>
          <p className="font-semibold text-primary-foreground mb-2">Meine Zusatzversicherung</p>
          <p className="text-sm text-primary-foreground/60">
            Ihr Spezialist für betriebliche Krankenversicherung. Persönlich. Kompetent. Unabhängig.
          </p>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Navigation</p>
          <nav aria-label="Footer-Navigation">
            <div className="flex flex-col gap-2">
              {["Vorteile", "Wie es funktioniert", "Team", "FAQ", "Kontakt"].map((l) => (
                <a
                  key={l}
                  href={`/#${l.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded"
                >
                  {l}
                </a>
              ))}
            </div>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-primary-foreground mb-3 text-sm">Kontakt</p>
          <div className="space-y-2">
            <a href="tel:0715339271" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
              <Phone size={14} aria-hidden="true" /> 07153-39271
            </a>
            <a href="mailto:david.felzmann@wuerttembergische.de" className="flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
              <Mail size={14} aria-hidden="true" /> david.felzmann@wuerttembergische.de
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
        <p className="text-xs text-primary-foreground/40">© {new Date().getFullYear()} Meine Zusatzversicherung. Alle Rechte vorbehalten.</p>
        <nav aria-label="Rechtliche Links">
          <div className="flex gap-4 text-xs text-primary-foreground/40">
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
              Datenschutz
            </Link>
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
              Impressum
            </Link>
            <Link to="/barrierefreiheit" className="hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-navy rounded">
              Barrierefreiheit
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
