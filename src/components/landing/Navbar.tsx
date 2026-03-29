import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "Wie es funktioniert", href: "#wie-es-funktioniert" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <div className="section-container flex items-center justify-center lg:justify-between h-16 lg:h-[72px] relative">
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Zur Startseite">
          <svg width="32" height="38" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 0L0 7V19C0 29.5 7.8 39.3 18 42C28.2 39.3 36 29.5 36 19V7L18 0Z" fill="hsl(var(--primary-teal))"/>
            <path d="M18 0L0 7V13C0 13 6 11 18 11C30 11 36 13 36 13V7L18 0Z" fill="#005a60"/>
            <path d="M18 4L3 10V19C3 28 9.8 36.8 18 39.5C26.2 36.8 33 28 33 19V10L18 4Z" fill="hsl(var(--secondary-teal))" opacity="0.18"/>
          </svg>
          <span className="font-bold text-sm leading-none text-dark-navy" style={{ letterSpacing: "-0.01em" }}>
            meine-zusatzversicherung<span className="text-primary">.de</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-teal hover:text-secondary-teal transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:0715339271" className="flex items-center gap-1.5 text-sm text-dark-navy font-medium">
            <Phone size={16} />
            07153-39271
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary-teal transition-colors duration-200"
          >
            Kostenlose Beratung
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-dark-navy absolute left-4"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-primary-teal"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:0715339271" className="flex items-center gap-2 text-dark-navy font-medium">
            <Phone size={18} /> 07153-39271
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            Kostenlose Beratung
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
