import { Receipt, UserCheck, UsersRound, Heart, Globe, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Receipt, title: "Steuer- & sozialabgabenfrei", text: "Die bKV ist als Sachbezug steuer- und sozialabgabenfrei gestaltbar." },
  { icon: UserCheck, title: "Einfache Aufnahme ohne Gesundheitsprüfung", text: "Ihre Mitarbeiter werden ohne individuelle Gesundheitsfragen aufgenommen." },
  { icon: UsersRound, title: "Bereits ab 3 Mitarbeitern", text: "Auch kleine Unternehmen profitieren von attraktiven Konditionen." },
  { icon: Heart, title: "Familienangehörige mitversicherbar", text: "Angehörige können eigenfinanziert in den Schutz einbezogen werden." },
  { icon: Globe, title: "Deutschlandweiter Gesundheitsschutz", text: "Ihre Mitarbeiter sind bundesweit bestens versorgt." },
  { icon: Smartphone, title: "Schnelle Rechnungseinreichung per App", text: "Bequeme digitale Abwicklung über die App der Württembergischen." },
];

const AdvantagesGrid = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">Ihre Vorteile auf einen Blick</h2>
      </AnimatedSection>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.07}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-light-teal flex items-center justify-center">
                <item.icon size={20} className="text-primary-teal" />
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesGrid;
