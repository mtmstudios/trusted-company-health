import { Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import teamGroupImg from "@/assets/team-group.jpeg";

const team = [
  { name: "David Felzmann", role: "Geschäftsführer & Beratung", email: "david.felzmann@wuerttembergische.de" },
  { name: "Elfi Sachs", role: "Beratung", email: "elfi.sachs@wuerttembergische.de" },
  { name: "Claudia Haidle", role: "Büroleitung" },
  { name: "Michaela Bäurle", role: "Vertriebsunterstützung" },
  { name: "Frank Frey", role: "Vertriebsunterstützung" },
  { name: "Bastian Zaremba", role: "Auszubildender" },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">Lernen Sie unser Team kennen</h2>
        <p className="text-center text-foreground mb-12">Persönliche Beratung – kein Call Center</p>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {team.map((m, i) => (
          <AnimatedSection key={m.name} delay={i * 0.05}>
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-light-teal mx-auto mb-3" />
              <h3 className="text-sm font-semibold">{m.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{m.role}</p>
              {m.email && (
                <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-xs text-primary-teal hover:underline">
                  <Mail size={12} /> E-Mail
                </a>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
