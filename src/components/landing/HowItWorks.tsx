import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: 1, title: "Kontakt aufnehmen", desc: "Formular ausfüllen, wir melden uns zeitnah" },
  { num: 2, title: "Individuelles Beratungsgespräch", desc: "Maßgeschneiderte Empfehlungen" },
  { num: 3, title: "Kollektivvertrag abschließen", desc: "Als Arbeitgeber wählen Sie die Tarife" },
  { num: 4, title: "Mitarbeiter absichern", desc: "Wir begleiten die gesamte Einführung" },
];

const HowItWorks = () => (
  <section id="wie-es-funktioniert" className="section-padding bg-light-gray">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-14">
          Wie funktioniert die Umsetzung?
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-light-teal" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-lg mx-auto mb-4 relative z-10 tnum">
                {s.num}
              </div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorks;
