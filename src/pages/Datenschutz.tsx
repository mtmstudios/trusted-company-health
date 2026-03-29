import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Verantwortlicher</h2>
          <p className="text-gray-700 leading-relaxed">
            Versicherungsbüro Frey – Inhaber David Felzmann<br />
            Kirchheimer Straße 131, 73249 Wernau<br />
            Telefon: <a href="tel:07153-39271" className="text-blue-600 hover:underline">07153-39271</a><br />
            E-Mail: <a href="mailto:service.frey@wuerttembergische.de" className="text-blue-600 hover:underline">service.frey@wuerttembergische.de</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Erhobene Daten und Zwecke</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beim Besuch unserer Website werden folgende Daten verarbeitet:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Pseudonymisierte IP-Adresse</li>
            <li>Besuchte Seiten, Verweildauer und Herkunftsquelle</li>
            <li>Technische Informationen (Browser, Betriebssystem)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Diese Daten werden ausschließlich zu statistischen Zwecken verwendet. Es werden keine individuellen Nutzerprofile erstellt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Kontaktformulare und Datenverarbeitung über n8n</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Die Formulare auf dieser Website (z. B. Kontaktformular, Anfragenformular) werden über die Automatisierungsplattform <strong>n8n</strong> verarbeitet. n8n ist eine selbst gehostete Workflow-Automatisierungssoftware, über die Ihre Formulareingaben sicher entgegengenommen, weitergeleitet und intern bearbeitet werden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Folgende Daten können im Rahmen der Formularnutzung verarbeitet werden:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Name</li>
            <li>E-Mail-Adresse</li>
            <li>Telefonnummer</li>
            <li>Ihre Anfrage / Nachricht</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Die Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage erforderlich ist.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Rechtsgrundlagen</h2>
          <p className="text-gray-700 leading-relaxed">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis der DSGVO und des BDSG, insbesondere:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-3">
            <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung</li>
            <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung / Vertragsanbahnung</li>
            <li>Art. 6 Abs. 1 lit. c DSGVO – Rechtliche Verpflichtung</li>
            <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigte Interessen</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und erfordern keine Einwilligung gemäß § 25 Abs. 2 TTDSG. Wir verwenden keine Tracking- oder Marketing-Cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Speicherdauer</h2>
          <p className="text-gray-700 leading-relaxed">
            Ihre Daten werden entsprechend den gesetzlichen Aufbewahrungsfristen gespeichert (in der Regel bis zu 10 Jahre gemäß Handels- und Steuerrecht) sowie für die Dauer laufender Verjährungsfristen (3–30 Jahre je nach Anspruchsgrundlage). Nach Ablauf der jeweiligen Frist werden die Daten routinemäßig gelöscht.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Ihre Rechte</h2>
          <p className="text-gray-700 leading-relaxed mb-3">Sie haben gegenüber uns folgende Rechte:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:service.frey@wuerttembergische.de" className="text-blue-600 hover:underline">
              service.frey@wuerttembergische.de
            </a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p className="text-gray-700 leading-relaxed">
            Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren:<br /><br />
            Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
            Königstraße 10a, 70173 Stuttgart<br />
            <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
