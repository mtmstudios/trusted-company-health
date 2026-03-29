import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => (
  <>
    <Navbar />
    <main className="pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-foreground mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">1. Verantwortlicher</h2>
          <p className="text-foreground leading-relaxed">
            Versicherungsbüro Frey – Inhaber David Felzmann<br />
            Kirchheimer Straße 131, 73249 Wernau<br />
            Telefon: 07153-39271<br />
            E-Mail: service.frey@wuerttembergische.de
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Beim Besuch unserer Website werden automatisch folgende Daten erhoben, die technisch
            für die Anzeige der Website erforderlich sind (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO):
          </p>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-1 ml-4">
            <li>IP-Adresse (anonymisiert)</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Browsertyp und -version</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">3. Kontaktformular</h2>
          <p className="text-foreground leading-relaxed">
            Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen eingegebenen Daten
            (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage
            gespeichert (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO). Diese Daten werden nicht
            an Dritte weitergegeben und nach Abschluss der Bearbeitung gelöscht, sofern keine
            gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">4. Cookies</h2>
          <p className="text-foreground leading-relaxed">
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
            Betrieb der Seite erforderlich sind. Es werden keine Tracking- oder Marketing-Cookies
            eingesetzt. Die Cookie-Einwilligung wird lokal in Ihrem Browser gespeichert (localStorage)
            und nicht an unsere Server übermittelt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">5. Hosting</h2>
          <p className="text-foreground leading-relaxed">
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten,
            die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Wir haben einen Vertrag über
            Auftragsverarbeitung (AVV) mit dem Hoster geschlossen.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">6. SSL-/TLS-Verschlüsselung</h2>
          <p className="text-foreground leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
            Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
            von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">7. Ihre Rechte</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Sie haben gemäß DSGVO folgende Rechte:
          </p>
          <ul className="list-disc list-inside text-foreground leading-relaxed space-y-1 ml-4">
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>
          <p className="text-foreground leading-relaxed mt-4">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">8. Beschwerderecht</h2>
          <p className="text-foreground leading-relaxed">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
            Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:<br /><br />
            Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
            Lautenschlagerstraße 20, 70173 Stuttgart<br />
            <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              www.baden-wuerttemberg.datenschutz.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-secondary-foreground mb-3">9. Aktualität</h2>
          <p className="text-foreground leading-relaxed">
            Diese Datenschutzerklärung ist aktuell gültig (Stand: März 2026). Durch Weiterentwicklung
            unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann eine
            Anpassung dieser Erklärung notwendig werden.
          </p>
        </section>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
