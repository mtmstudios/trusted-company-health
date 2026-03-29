import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Barrierefreiheit = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen" id="main-content">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-foreground mb-8">Erklärung zur Barrierefreiheit</h1>

        <section className="mb-8" aria-labelledby="engagement-heading">
          <h2 id="engagement-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Unser Engagement</h2>
          <p className="text-foreground leading-relaxed">
            Das Versicherungsbüro Frey ist bestrebt, seine Website im Einklang mit dem
            Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines
            (WCAG 2.1, Konformitätsstufe AA) barrierefrei zugänglich zu machen.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="measures-heading">
          <h2 id="measures-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Umgesetzte Maßnahmen</h2>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-2 ml-4" role="list">
            <li>Semantisches HTML für eine logische Dokumentstruktur</li>
            <li>ARIA-Labels und -Attribute für interaktive Elemente</li>
            <li>Ausreichende Farbkontraste (mindestens 4,5:1 für Fließtext)</li>
            <li>Vollständige Tastaturbedienbarkeit aller Funktionen</li>
            <li>Responsive Design für alle Bildschirmgrößen</li>
            <li>Alt-Texte für alle informativen Bilder</li>
            <li>Klare, verständliche Sprache</li>
            <li>Konsistente Navigation auf allen Seiten</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="widget-heading">
          <h2 id="widget-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Individuelle Anpassungen</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Über das Barrierefreiheits-Symbol (
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs align-middle" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>
            </span>
            ) unten links auf jeder Seite können Sie folgende Einstellungen vornehmen:
          </p>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-2 ml-4" role="list">
            <li><strong>Hoher Kontrast:</strong> Erhöht den Kontrast für bessere Lesbarkeit</li>
            <li><strong>Größere Schrift:</strong> Vergrößert die Textdarstellung um 25 %</li>
            <li><strong>Animationen reduzieren:</strong> Deaktiviert Bewegungseffekte für Personen mit vestibulären Störungen</li>
          </ul>
          <p className="text-foreground leading-relaxed mt-4">
            Ihre Einstellungen werden lokal in Ihrem Browser gespeichert und beim nächsten Besuch automatisch wiederhergestellt.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Bekannte Einschränkungen</h2>
          <p className="text-foreground leading-relaxed">
            Trotz unserer Bemühungen können einzelne Inhalte noch nicht vollständig barrierefrei sein.
            Wir arbeiten kontinuierlich an Verbesserungen. Sollten Sie auf Barrieren stoßen,
            kontaktieren Sie uns bitte.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="feedback-heading">
          <h2 id="feedback-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Feedback und Kontakt</h2>
          <p className="text-foreground leading-relaxed">
            Wenn Sie Probleme mit der Barrierefreiheit unserer Website feststellen, wenden Sie sich
            bitte an uns:<br /><br />
            Telefon:{" "}
            <a href="tel:0715339271" className="text-primary hover:text-accent transition-colors">
              07153-39271
            </a><br />
            E-Mail:{" "}
            <a href="mailto:service.frey@wuerttembergische.de" className="text-primary hover:text-accent transition-colors">
              service.frey@wuerttembergische.de
            </a><br /><br />
            Wir werden uns bemühen, Ihre Anfrage zeitnah zu beantworten und eventuelle Mängel
            schnellstmöglich zu beheben.
          </p>
        </section>

        <section aria-labelledby="enforcement-heading">
          <h2 id="enforcement-heading" className="text-xl font-semibold text-secondary-foreground mb-3">Durchsetzungsverfahren</h2>
          <p className="text-foreground leading-relaxed">
            Sollten Sie nach Ihrer Kontaktaufnahme keine zufriedenstellende Lösung erhalten,
            können Sie sich an die zuständige Durchsetzungsstelle wenden:<br /><br />
            Landesbehindertenbeauftragte/r Baden-Württemberg<br />
            Else-Josenhans-Straße 6, 70173 Stuttgart<br />
            <a href="https://www.sozialministerium.baden-wuerttemberg.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.sozialministerium.baden-wuerttemberg.de
            </a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Barrierefreiheit;
