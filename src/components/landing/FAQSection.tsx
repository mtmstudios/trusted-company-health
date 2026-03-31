import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  { q: "Wieviel Mitarbeiter benötige ich?", a: "Die betriebliche Krankenversicherung ist bereits ab 3 Mitarbeitenden möglich." },
  { q: "Was kostet die bKV das Unternehmen?", a: "Die Beiträge beginnen ab 6 € pro Monat und Mitarbeiter – abhängig vom gewählten Tarif." },
  { q: "Gibt es Gesundheitsfragen?", a: "Je nach Vertragsgestaltung entfallen individuelle Gesundheitsfragen vollständig." },
  { q: "Sind Vorerkrankungen versichert?", a: "Ja, insbesondere über Budgettarife sind auch Vorerkrankungen abgedeckt." },
  { q: "Kann ich die Familie mitversichern?", a: "Ja, Familienangehörige können eigenfinanziert in den Versicherungsschutz einbezogen werden." },
  
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-light-gray">
    <div className="section-container max-w-3xl">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Häufig gestellte Fragen</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-2xl card-subtle px-6 border-none"
            >
              <AccordionTrigger className="text-sm font-semibold text-dark-navy hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
