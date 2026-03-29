import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Barrierefreiheit = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-foreground mb-8">Erklärung zur Barrierefreiheit</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Unser Engagement</h2>
          <p className="text-foreground leading-relaxed">
            Das Versicherungsbüro Frey ist bestrebt, seine Website im Einklang mit dem
            Barrierefreiheitsstärkungsgesetz (BFSG) und den Web Content Accessibility Guidelines
            (WCAG 2.1, Konformitätsstufe AA) barrierefrei zugänglich zu machen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Umgesetzte Maßnahmen</h2>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-2 ml-4">
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

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Bekannte Einschränkungen</h2>
          <p className="text-foreground leading-relaxed">
            Trotz unserer Bemühungen können einzelne Inhalte noch nicht vollständig barrierefrei sein.
            Wir arbeiten kontinuierlich an Verbesserungen. Sollten Sie auf Barrieren stoßen,
            kontaktieren Sie uns bitte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Feedback und Kontakt</h2>
          <p className="text-foreground leading-relaxed">
            Wenn Sie Probleme mit der Barrierefreiheit unserer Website feststellen, wenden Sie sich
            bitte an uns:<br /><br />
            Telefon: 07153-39271<br />
            E-Mail: service.frey@wuerttembergische.de<br /><br />
            Wir werden uns bemühen, Ihre Anfrage zeitnah zu beantworten und eventuelle Mängel
            schnellstmöglich zu beheben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Durchsetzungsverfahren</h2>
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
