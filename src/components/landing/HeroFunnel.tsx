import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Users, CheckCircle, Lock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import officeImg from "@/assets/office-building.jpeg";

const trustBadges = [
  { icon: Award, text: "Über 10 Jahre Erfahrung" },
  { icon: Users, text: "Hunderte zufriedene Kunden" },
  { icon: CheckCircle, text: "Keine Gesundheitsprüfung" },
  { icon: Lock, text: "100% kostenlose Beratung" },
];

const step1Options = ["3 – 10 Mitarbeiter", "11 – 50 Mitarbeiter", "51 – 200 Mitarbeiter", "200+ Mitarbeiter"];
const step2Options = ["Mitarbeiter binden & gewinnen", "Steuern & Kosten sparen", "Soziale Verantwortung übernehmen"];

const slideVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const HeroFunnel = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ size: string; goal: string }>({ size: "", goal: "" });
  const [formData, setFormData] = useState({ name: "", firma: "", email: "", telefon: "" });

  const selectStep1 = (opt: string) => {
    setAnswers((a) => ({ ...a, size: opt }));
    setStep(2);
  };
  const selectStep2 = (opt: string) => {
    setAnswers((a) => ({ ...a, goal: opt }));
    setStep(3);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("https://mtmstudios.app.n8n.cloud/webhook/bkv-hero-funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          firma: formData.firma,
          email: formData.email,
          telefon: formData.telefon,
          mitarbeiter_anzahl: answers.size,
          ziel: answers.goal,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative mt-16 flex min-h-[calc(100vh-64px)] w-full items-center overflow-hidden py-12 lg:mt-[72px] lg:min-h-[calc(100vh-72px)] lg:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${officeImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/70" aria-hidden="true" />
      <div className="section-container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left */}
        <AnimatedSection>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-light-teal px-4 py-1.5 text-sm font-medium text-primary-teal mb-6 lg:mx-0 mx-auto block w-fit text-center">
            ✓ Württembergische Versicherung Partner
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center lg:text-left">
            Betriebliche Krankenversicherung für Ihr Unternehmen
          </h1>
          <p className="text-foreground max-w-xl mb-8 text-base lg:text-lg text-center lg:text-left mx-auto lg:mx-0">
            Sichern Sie Ihre Mitarbeiter ab – steuer- und sozialabgabefrei. Bereits ab 6&nbsp;€ pro Monat pro
            Mitarbeiter. Ab 3 Mitarbeitenden möglich.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {trustBadges.map((b) => (
              <div key={b.text} className="flex items-start gap-2.5 text-center lg:text-left flex-col lg:flex-row items-center lg:items-start">
                <b.icon size={20} className="text-primary-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{b.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right — Funnel Card */}
        <AnimatedSection delay={0.15}>
          <div className="bg-card rounded-2xl card-subtle p-6 sm:p-8 max-w-sm md:max-w-md lg:max-w-none mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    s <= step ? "bg-primary" : "bg-light-teal"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" {...slideVariants} transition={{ duration: 0.25, ease: "easeInOut" }}>
                  <h3 className="text-xl font-semibold mb-2 text-center">Jetzt kostenlos anfragen</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">
                    Wie viele Mitarbeiter hat Ihr Unternehmen?
                  </p>
                  <div className="flex flex-col gap-3">
                    {step1Options.map((o) => (
                      <button
                        key={o}
                        onClick={() => selectStep1(o)}
                        className="w-full text-left rounded-lg border border-input p-4 text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" {...slideVariants} transition={{ duration: 0.25, ease: "easeInOut" }}>
                  <h3 className="text-xl font-semibold mb-2 text-center">Was ist Ihr Hauptziel?</h3>
                  <p className="text-sm text-muted-foreground text-center mb-6">Wählen Sie eine Option</p>
                  <div className="flex flex-col gap-3">
                    {step2Options.map((o) => (
                      <button
                        key={o}
                        onClick={() => selectStep2(o)}
                        className="w-full text-left rounded-lg border border-input p-4 text-sm font-medium transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep(1)} className="mt-4 text-sm text-primary-teal hover:underline">
                    ← Zurück
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" {...slideVariants} transition={{ duration: 0.25, ease: "easeInOut" }}>
                  {submitted ? (
                    <div className="text-center py-4">
                      <div className="text-4xl mb-4">✅</div>
                      <h3 className="text-xl font-semibold mb-2">Anfrage eingegangen!</h3>
                      <p className="text-sm text-muted-foreground">
                        Vielen Dank, <strong>{formData.name}</strong>! Sie erhalten gleich eine Bestätigung per E-Mail. David Felzmann meldet sich innerhalb von 24 Stunden.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold mb-4 text-center">
                        Fast geschafft! Ihre kostenlose Beratung anfordern
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-5 justify-center">
                        {answers.size && (
                          <span className="text-xs bg-light-teal text-primary-teal rounded-full px-3 py-1">
                            {answers.size}
                          </span>
                        )}
                        {answers.goal && (
                          <span className="text-xs bg-light-teal text-primary-teal rounded-full px-3 py-1">
                            {answers.goal}
                          </span>
                        )}
                      </div>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        />
                        <input
                          type="text"
                          placeholder="Firmenname"
                          required
                          value={formData.firma}
                          onChange={(e) => setFormData({ ...formData, firma: e.target.value })}
                          className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        />
                        <input
                          type="email"
                          placeholder="E-Mail"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        />
                        <input
                          type="tel"
                          placeholder="Telefon"
                          value={formData.telefon}
                          onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                          className="rounded-lg border border-input bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200"
                        />
                        {submitError && (
                          <p className="text-xs text-red-500 text-center">
                            Fehler beim Senden. Bitte versuchen Sie es erneut oder rufen Sie uns an.
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full rounded-full bg-primary text-primary-foreground font-semibold py-3.5 text-sm hover:bg-secondary-teal hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                        >
                          {isSubmitting ? "Wird gesendet..." : "Jetzt kostenlose Beratung anfordern →"}
                        </button>
                        <p className="text-xs text-muted-foreground text-center mt-1">
                          🔒 Ihre Daten sind sicher. Kein Spam. Keine Weitergabe.
                        </p>
                      </form>
                      <button onClick={() => setStep(2)} className="mt-4 text-sm text-primary-teal hover:underline">
                        ← Zurück
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroFunnel;
