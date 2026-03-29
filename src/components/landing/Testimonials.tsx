import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Die Einführung der bKV war unkompliziert und schnell. Unsere Mitarbeiter waren begeistert – ein echtes Plus für unser Unternehmen.",
    name: "Thomas K.",
    role: "Geschäftsführer, 28 Mitarbeiter",
  },
  {
    quote: "Keine Gesundheitsprüfung, kein bürokratischer Aufwand. Die Betreuung durch das Team war hervorragend und persönlich.",
    name: "Sandra M.",
    role: "HR-Leiterin, 65 Mitarbeiter",
  },
  {
    quote: "Seit wir die bKV anbieten, hat sich unsere Mitarbeiterbindung deutlich verbessert. Die Kosten sind überschaubar, der Nutzen enorm.",
    name: "Michael R.",
    role: "Inhaber, 12 Mitarbeiter",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-light-gray">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Das sagen unsere Kunden</h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="bg-card rounded-2xl card-subtle p-8 h-full flex flex-col text-center lg:text-left">
              <div className="flex gap-0.5 mb-4 justify-center lg:justify-start">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary-teal text-primary-teal" />
                ))}
              </div>
              <p className="text-sm text-foreground italic flex-1 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 rounded-full bg-light-teal flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <p className="text-sm font-semibold text-dark-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
