import AnimatedSection from "./AnimatedSection";

const CostCalculator = () => (
  <section className="section-padding bg-dark-navy">
    <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-4 text-center lg:text-left">
          Was kostet die bKV für Ihr Unternehmen?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
          Laut IW Köln kosteten Fehlzeiten Arbeitgeber 51,6 Milliarden Euro. Die bKV beginnt oft bei unter 1% der
          Lohnsumme.
        </p>
        <div className="flex gap-8">
          <div>
            <p className="text-3xl font-bold text-secondary-teal tnum">51,6 Mrd. €</p>
            <p className="text-xs text-primary-foreground/60 mt-1">Kosten durch Fehlzeiten</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-teal tnum">&lt; 1%</p>
            <p className="text-xs text-primary-foreground/60 mt-1">der Lohnsumme</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-teal tnum">ab 6 €</p>
            <p className="text-xs text-primary-foreground/60 mt-1">pro Mitarbeiter/Monat</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.15}>
        <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-semibold text-primary-foreground mb-3">
            Individuellen Kostenvoranschlag erhalten
          </h3>
          <p className="text-sm text-primary-foreground/70 mb-6">
            Erfahren Sie in einem kurzen Gespräch, wie wenig die bKV für Ihr Unternehmen kostet.
          </p>
          <a
            href="#kontakt"
            className="inline-flex rounded-full bg-secondary-teal px-6 py-3 font-semibold text-dark-navy text-sm hover:opacity-90 transition-opacity duration-200"
          >
            Jetzt individuellen Kostenvoranschlag anfordern
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CostCalculator;
