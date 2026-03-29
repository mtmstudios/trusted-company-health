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
      <div className="section-container flex items-center justify-between h-16 lg:h-[72px]">
        <Link to="/" className="font-semibold text-dark-navy text-sm lg:text-base whitespace-nowrap">
          Ihre betriebliche Krankenversicherung
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
          className="lg:hidden text-dark-navy"
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
