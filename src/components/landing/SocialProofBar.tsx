import AnimatedSection from "./AnimatedSection";

const stats = [
  "500+ betreute Unternehmen",
  "Ab 6 € / Monat pro Mitarbeiter",
  "∅ 4,9 ★ Kundenbewertung",
  "Seit über 10 Jahren",
];

const SocialProofBar = () => (
  <section className="bg-dark-navy py-6">
    <AnimatedSection>
      <div className="section-container flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 sm:divide-x sm:divide-white/20">
        {stats.map((s) => (
          <span key={s} className="text-sm font-medium text-primary-foreground px-6 tnum text-center">
            {s}
          </span>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

export default SocialProofBar;
