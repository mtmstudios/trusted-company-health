import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Barrierefreiheit = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-24 pb-16" id="main-content">
      <article className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-foreground mb-8">Erklärung zur Barrierefreiheit</h1>

        <section className="mb-8" aria-labelledby="bf-intro">
          <h2 id="bf-intro" className="sr-only">Einführung</h2>
          <p className="text-muted-foreground leading-relaxed">
            Versicherungsbüro Frey – Inhaber David Felzmann ist bemüht, seine Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) sowie den Anforderungen der Web Content Accessibility Guidelines (WCAG 2.1, Konformitätsstufe AA) barrierefrei zugänglich zu machen.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="bf-status">
          <h2 id="bf-status" className="text-xl font-semibold text-foreground mb-3">Stand der Vereinbarkeit</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diese Website ist mit den WCAG-2.1-Anforderungen auf Stufe AA <strong>teilweise vereinbar</strong>. Die nachfolgend aufgeführten Inhalte sind noch nicht vollständig barrierefrei:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>Einige Bildelemente enthalten möglicherweise noch keine vollständigen Alternativtexte</li>
            <li>PDF-Dokumente sind möglicherweise nicht vollständig barrierefrei aufbereitet</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="bf-feedback">
          <h2 id="bf-feedback" className="text-xl font-semibold text-foreground mb-3">Feedback und Kontakt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wenn Sie Barrieren auf unserer Website bemerken oder Informationen in einem anderen Format benötigen, wenden Sie sich bitte an uns:
          </p>
          <address className="text-muted-foreground leading-relaxed mt-3 not-italic">
            <strong>Versicherungsbüro Frey – Inhaber David Felzmann</strong><br />
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
          <p className="text-muted-foreground leading-relaxed mt-3">
            Wir werden Ihnen die benötigten Informationen innerhalb von 4 Wochen zur Verfügung stellen.
          </p>
        </section>

        <section className="mb-8" aria-labelledby="bf-schlichtung">
          <h2 id="bf-schlichtung" className="text-xl font-semibold text-foreground mb-3">Durchsetzungsverfahren</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sollten Sie auf unsere Rückmeldung keine zufriedenstellende Antwort erhalten haben, können Sie sich an die zuständige Schlichtungsstelle wenden:
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Schlichtungsstelle Barrierefreiheit<br />
            <a href="https://www.schlichtungsstelle-bfsg.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded">
              www.schlichtungsstelle-bfsg.de
            </a>
          </p>
        </section>

        <section className="mb-8" aria-labelledby="bf-tech">
          <h2 id="bf-tech" className="text-xl font-semibold text-foreground mb-3">Technische Spezifikationen</h2>
          <p className="text-muted-foreground leading-relaxed">
            Die Barrierefreiheit dieser Website stützt sich auf folgende Technologien:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
            <li>HTML5</li>
            <li>CSS (Tailwind CSS)</li>
            <li>JavaScript (React)</li>
            <li>WAI-ARIA</li>
          </ul>
        </section>

        <section className="mb-8" aria-labelledby="bf-datum">
          <h2 id="bf-datum" className="text-xl font-semibold text-foreground mb-3">Erstellungsdatum</h2>
          <p className="text-muted-foreground leading-relaxed">
            Diese Erklärung wurde im März 2026 erstellt.
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

export default Barrierefreiheit;
