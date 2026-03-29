import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Impressum = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-24 pb-16" id="main-content">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Impressum</h1>

        <section className="mb-8" aria-labelledby="sec-angaben">
          <h2 id="sec-angaben" className="text-xl font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
          <address className="text-muted-foreground leading-relaxed not-italic">
            Versicherungsbüro Frey – Inhaber David Felzmann<br />
            Kirchheimer Straße 131<br />
            73249 Wernau
          </address>
        </section>

        <section className="mb-8" aria-labelledby="sec-kontakt">
          <h2 id="sec-kontakt" className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Telefon:{" "}
            <a href="tel:07153-39271" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              07153-39271
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:service.frey@wuerttembergische.de" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              service.frey@wuerttembergische.de
            </a>
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-beruf">
          <h2 id="sec-beruf" className="text-xl font-semibold text-foreground mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="text-muted-foreground leading-relaxed">
            Berufsbezeichnung: Versicherungsvertreter<br />
            Zuständige Kammer: Industrie- und Handelskammer Region Stuttgart<br />
            Jägerstraße 30, 70174 Stuttgart
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-register">
          <h2 id="sec-register" className="text-xl font-semibold text-foreground mb-3">Registereintrag</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vermittlerregister-Nr.: D-0L64-8W4YT-65<br />
            Versicherungsvertreter-Nr.: D-W-175-E1ST-42<br />
            Immobiliardarlehensvermittler gemäß § 34i GewO<br />
            Darlehensvermittler gemäß § 34c Abs. 1 Nr. 1 und 2 GewO
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-aufsicht">
          <h2 id="sec-aufsicht" className="text-xl font-semibold text-foreground mb-3">Aufsichtsbehörde</h2>
          <p className="text-muted-foreground leading-relaxed">
            Industrie- und Handelskammer Region Stuttgart<br />
            Jägerstraße 30, 70174 Stuttgart<br />
            <a href="https://www.stuttgart.ihk.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              www.stuttgart.ihk.de
            </a>
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-haftpflicht">
          <h2 id="sec-haftpflicht" className="text-xl font-semibold text-foreground mb-3">Berufshaftpflichtversicherung</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vermögensschaden-Haftpflichtversicherung entsprechend der EU-Norm vorhanden.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-streit">
          <h2 id="sec-streit" className="text-xl font-semibold text-foreground mb-3">Streitschlichtung</h2>
          <p className="text-muted-foreground leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              https://ec.europa.eu/consumers/odr/
            </a>
            <br /><br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-haftung-inhalte">
          <h2 id="sec-haftung-inhalte" className="text-xl font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
          <p className="text-muted-foreground leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-haftung-links">
          <h2 id="sec-haftung-links" className="text-xl font-semibold text-foreground mb-3">Haftung für Links</h2>
          <p className="text-muted-foreground leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="sec-urheber">
          <h2 id="sec-urheber" className="text-xl font-semibold text-foreground mb-3">Urheberrecht</h2>
          <p className="text-muted-foreground leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <nav aria-label="Zurück zur Startseite" className="mt-12">
          <Link to="/" className="text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
            ← Zurück zur Startseite
          </Link>
        </nav>
      </article>
    </main>
    <Footer />
  </>
);

export default Impressum;
