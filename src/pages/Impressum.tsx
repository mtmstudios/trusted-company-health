import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Impressum = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-foreground mb-8">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Angaben gemäß § 5 TMG</h2>
          <p className="text-foreground leading-relaxed">
            Versicherungsbüro Frey<br />
            Inhaber: David Felzmann<br />
            Kirchheimer Straße 131<br />
            73249 Wernau
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Kontakt</h2>
          <p className="text-foreground leading-relaxed">
            Telefon: 07153-39271<br />
            E-Mail: service.frey@wuerttembergische.de
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Registrierung</h2>
          <p className="text-foreground leading-relaxed">
            Vermittlerregister-Nr.: D-0L64-8W4YT-65<br />
            Versicherungsvertreter-Nr.: D-W-175-E1ST-42<br />
            Registerstelle: DIHK – Deutscher Industrie- und Handelskammertag e.V.<br />
            Breite Straße 29, 10178 Berlin<br />
            <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.vermittlerregister.info
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Aufsichtsbehörde</h2>
          <p className="text-foreground leading-relaxed">
            Industrie- und Handelskammer Region Stuttgart<br />
            Jägerstraße 30<br />
            70174 Stuttgart<br />
            <a href="https://www.stuttgart.ihk24.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.stuttgart.ihk24.de
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Berufshaftpflichtversicherung</h2>
          <p className="text-foreground leading-relaxed">
            Es besteht eine Berufshaftpflichtversicherung gemäß den Anforderungen der
            EU-Vermittlerrichtlinie. Der räumliche Geltungsbereich umfasst die Mitgliedsstaaten
            der Europäischen Union sowie die Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Schlichtungsstellen</h2>
          <p className="text-foreground leading-relaxed">
            Versicherungsombudsmann e.V.<br />
            Postfach 08 06 32<br />
            10006 Berlin<br />
            <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.versicherungsombudsmann.de
            </a>
          </p>
          <p className="text-foreground leading-relaxed mt-4">
            Ombudsmann Private Kranken- und Pflegeversicherung<br />
            Postfach 06 02 22<br />
            10052 Berlin<br />
            <a href="https://www.pkv-ombudsmann.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.pkv-ombudsmann.de
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">EU-Streitschlichtung</h2>
          <p className="text-foreground leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              https://ec.europa.eu/consumers/odr
            </a>.<br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">Haftungsausschluss</h2>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich.
          </p>
          <p className="text-foreground leading-relaxed">
            <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter,
            auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
            der jeweilige Anbieter oder Betreiber verantwortlich. Eine permanente inhaltliche Kontrolle
            der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
