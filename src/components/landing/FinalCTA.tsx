import { Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const FinalCTA = () => (
  <section className="section-padding bg-primary">
    <div className="section-container text-center">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-4">
          Jetzt Kosten sparen und Mitarbeiter absichern
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Kostenlose und unverbindliche Erstberatung – wir melden uns innerhalb von 24 Stunden.
        </p>
        <a
          href="#kontakt"
          className="inline-flex rounded-full bg-primary-foreground text-primary px-8 py-3.5 font-semibold text-sm hover:opacity-90 transition-opacity duration-200 mb-4"
        >
          Jetzt kostenlose Beratung anfordern
        </a>
        <p className="text-primary-foreground/70 text-sm">
          <a href="tel:0715339271" className="inline-flex items-center gap-1.5 hover:underline">
            <Phone size={14} /> Oder rufen Sie uns an: 07153-39271
          </a>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
