import { Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote: "Seit vielen Jahren bin ich Kunde bei der Württembergischen Versicherung in Wernau und fühle mich bei Herrn David Felzmann rundum bestens betreut. Er nimmt sich immer die Zeit, meine Anliegen ausführlich zu erklären und findet zuverlässige, individuelle Lösungen.",
    name: "Florian Hasani",
    role: "Kunde, vor 6 Monaten",
  },
  {
    quote: "Toller Service und Erreichbarkeit. Fragen werden kompetent beantwortet. Bisher wurde alles schnell zu meiner Zufriedenheit geklärt. Das komplette Büro ist Mega freundlich. Hier steht der Kunde noch im Vordergrund.",
    name: "Robeer Steinerbrunner",
    role: "Kunde, vor 2 Monaten",
  },
  {
    quote: "Ich fühle mich bei Herrn Felzmann und seinem Team bestens aufgehoben. Kompetente Beratung, transparente Angebote und eine angenehme Atmosphäre – genau so stellt man sich eine moderne Versicherungsagentur vor. Absolute Empfehlung!",
    name: "Nicolay Demczenko",
    role: "Kunde, vor 8 Monaten",
  },
  {
    quote: "Herr Felzmann hat uns im schulischen Kontext kompetent und sehr ausführlich beraten und dabei die besonderen Bedürfnisse einer Schule genau im Blick gehabt. Ich kann Herrn Felzmann und die Agentur Frey bedenkenlos weiterempfehlen.",
    name: "Frank Stedile",
    role: "Kunde, vor 8 Monaten",
  },
  {
    quote: "Ich kann David Felzmann uneingeschränkt empfehlen! Er erklärt komplexe Versicherungsfragen verständlich und geduldig. Besonders beeindruckend finde ich, wie schnell er auf Anfragen reagiert. Hier ist man definitiv in besten Händen!",
    name: "Tim Dettenrieder",
    role: "Kunde, vor einem Jahr",
  },
  {
    quote: "Hier kann man nichts falsch machen! Herr Felzmann und sein Team sind genial! Ich durfte in den Genuss einer phänomenalen Beratung kommen, der Termin war bestens vorbereitet und es wurde genau auf meine Bedürfnisse eingegangen.",
    name: "Dennis Kellermann",
    role: "Kunde, vor einem Jahr",
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
