import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-24 pb-16" id="main-content">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

        <section className="mb-8" aria-labelledby="ds-verantwortlicher">
          <h2 id="ds-verantwortlicher" className="text-xl font-semibold text-foreground mb-3">1. Verantwortlicher</h2>
          <address className="text-muted-foreground leading-relaxed not-italic">
            Versicherungsbüro Frey – Inhaber David Felzmann<br />
            Kirchheimer Straße 131, 73249 Wernau<br />
            Telefon:{" "}
            <a href="tel:07153-39271" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              07153-39271
            </a>
            <br />
            E-Mail:{" "}
            <a href="mailto:service.frey@wuerttembergische.de" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              service.frey@wuerttembergische.de
            </a>
          </address>
        </section>

        <section className="mb-8" aria-labelledby="ds-daten">
          <h2 id="ds-daten" className="text-xl font-semibold text-foreground mb-3">2. Erhobene Daten und Zwecke</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Beim Besuch unserer Website werden folgende Daten verarbeitet:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Pseudonymisierte IP-Adresse</li>
            <li>Besuchte Seiten, Verweildauer und Herkunftsquelle</li>
            <li>Technische Informationen (Browser, Betriebssystem)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Diese Daten werden ausschließlich zu statistischen Zwecken verwendet. Es werden keine individuellen Nutzerprofile erstellt.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="ds-n8n">
          <h2 id="ds-n8n" className="text-xl font-semibold text-foreground mb-3">3. Kontaktformulare und Datenverarbeitung über n8n</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Die Formulare auf dieser Website (z.&nbsp;B. Kontaktformular, Anfragenformular) werden über die Automatisierungsplattform <strong>n8n</strong> verarbeitet. n8n ist eine selbst gehostete Workflow-Automatisierungssoftware, über die Ihre Formulareingaben sicher entgegengenommen, weitergeleitet und intern bearbeitet werden.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Folgende Daten können im Rahmen der Formularnutzung verarbeitet werden:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Ihre Anfrage / Nachricht</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Die Verarbeitung erfolgt auf Basis von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO (Vertragsanbahnung) bzw. Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Die Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="ds-rechtsgrundlagen">
          <h2 id="ds-rechtsgrundlagen" className="text-xl font-semibold text-foreground mb-3">4. Rechtsgrundlagen</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis der DSGVO und des BDSG, insbesondere:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO – Einwilligung</li>
            <li>Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO – Vertragserfüllung / Vertragsanbahnung</li>
            <li>Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;c DSGVO – Rechtliche Verpflichtung</li>
            <li>Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO – Berechtigte Interessen</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="ds-cookies">
          <h2 id="ds-cookies" className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und erfordern keine Einwilligung gemäß § 25 Abs.&nbsp;2 TTDSG. Wir verwenden keine Tracking- oder Marketing-Cookies.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="ds-speicher">
          <h2 id="ds-speicher" className="text-xl font-semibold text-foreground mb-3">6. Speicherdauer</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ihre Daten werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert (in der Regel bis zu 10 Jahre gemäß Handels- und Steuerrecht) sowie für die Dauer laufender Verjährungsfristen (3–30 Jahre je nach Anspruchsgrundlage). Nach Ablauf der jeweiligen Frist werden die Daten routinemäßig gelöscht.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="ds-rechte">
          <h2 id="ds-rechte" className="text-xl font-semibold text-foreground mb-3">7. Ihre Rechte</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">Sie haben gegenüber uns folgende Rechte:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Recht auf Auskunft (Art.&nbsp;15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art.&nbsp;16 DSGVO)</li>
            <li>Recht auf Löschung (Art.&nbsp;17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
            <li>Widerspruchsrecht (Art.&nbsp;21 DSGVO)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:service.frey@wuerttembergische.de" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              service.frey@wuerttembergische.de
            </a>
          </p>
        </section>

        <section className="mb-8" aria-labelledby="ds-aufsicht">
          <h2 id="ds-aufsicht" className="text-xl font-semibold text-foreground mb-3">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren:
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
            Königstraße 10a, 70173 Stuttgart<br />
            <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              www.baden-wuerttemberg.datenschutz.de
            </a>
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

export default Datenschutz;
