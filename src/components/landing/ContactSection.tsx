import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import davidImg from "@/assets/david-felzmann.jpeg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", firma: "", email: "", telefon: "", nachricht: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah.");
  };

  const inputClass =
    "w-full rounded-lg border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200";

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="section-container grid lg:grid-cols-2 gap-12">
        <AnimatedSection>
          <div className="bg-light-gray rounded-2xl p-8">
            <div className="w-16 h-16 rounded-full bg-light-teal mb-4" />
            <h3 className="text-lg font-semibold mb-1">David Felzmann</h3>
            <p className="text-sm text-muted-foreground mb-4">Geschäftsführer & Beratung</p>
            <div className="space-y-2">
              <a href="mailto:david.felzmann@wuerttembergische.de" className="flex items-center gap-2 text-sm text-primary-teal hover:underline">
                <Mail size={14} /> david.felzmann@wuerttembergische.de
              </a>
              <a href="tel:0715339271" className="flex items-center gap-2 text-sm text-primary-teal hover:underline">
                <Phone size={14} /> 07153-39271
              </a>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="text-2xl font-semibold mb-6">Kontaktieren Sie uns</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
            <input type="text" placeholder="Firmenname" value={form.firma} onChange={(e) => setForm({ ...form, firma: e.target.value })} className={inputClass} />
            <input type="email" placeholder="E-Mail" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            <input type="tel" placeholder="Telefon" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} className={inputClass} />
            <textarea placeholder="Nachricht" rows={4} value={form.nachricht} onChange={(e) => setForm({ ...form, nachricht: e.target.value })} className={inputClass} />
            <button type="submit" className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 text-sm hover:bg-secondary-teal transition-colors duration-200">
              Nachricht senden
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
