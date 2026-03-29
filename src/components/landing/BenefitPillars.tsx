import { HeartHandshake, TrendingUp, ShieldCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    icon: HeartHandshake,
    title: "Soziale Verantwortung",
    points: [
      "Steigende Beiträge der GKV auffangen",
      "Zuzahlungen entlasten",
      "Gesundheitsförderung am Arbeitsplatz",
    ],
  },
  {
    icon: TrendingUp,
    title: "Unternehmensimage steigern",
    points: [
      "Arbeitgeberattraktivität steigern",
      "Mitarbeiterbindung erhöhen",
      "Verantwortungsbewusstes Image",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Krankheitskosten senken",
    points: [
      "Früherkennung & Prävention",
      "Schnellere Genesung, weniger Ausfallzeiten",
      "Facharzt-Terminservice & mehr",
    ],
  },
];

const BenefitPillars = () => (
  <section id="vorteile" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
          Warum betriebliche Krankenversicherung?
        </h2>
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="bg-card rounded-2xl card-subtle p-8 h-full group hover:border-t-[3px] hover:border-t-primary transition-all duration-200 text-center lg:text-left">
              <p.icon size={32} className="text-primary-teal mb-5 mx-auto lg:mx-0" />
              <h3 className="text-lg font-semibold mb-4">{p.title}</h3>
              <ul className="space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-foreground justify-center lg:justify-start">
                    <span className="text-primary-teal mt-0.5">•</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitPillars;
