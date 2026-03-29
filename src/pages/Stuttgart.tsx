import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import SocialProofBar from "@/components/landing/SocialProofBar";
import BenefitPillars from "@/components/landing/BenefitPillars";
import HowItWorks from "@/components/landing/HowItWorks";
import AdvantagesGrid from "@/components/landing/AdvantagesGrid";
import Testimonials from "@/components/landing/Testimonials";
import CostCalculator from "@/components/landing/CostCalculator";
import TeamSection from "@/components/landing/TeamSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import StuttgartHero from "@/components/landing/StuttgartHero";

const stuttgartJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meine Zusatzversicherung – Betriebliche Krankenversicherung Stuttgart",
  description:
    "Betriebliche Krankenversicherung (bKV) für Unternehmen in Stuttgart und der Region. Steuer- und sozialabgabenfrei ab 6 € pro Mitarbeiter.",
  url: "https://meine-zusatzversicherung.de/startseite/stuttgart/",
  telephone: "+4971533‑9271",
  areaServed: {
    "@type": "City",
    name: "Stuttgart",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stuttgart",
    addressRegion: "Baden-Württemberg",
    addressCountry: "DE",
  },
  priceRange: "ab 6 €/Monat",
};

const Stuttgart = () => (
  <>
    <Helmet>
      <title>Betriebliche Krankenversicherung Stuttgart | Meine Zusatzversicherung</title>
      <meta
        name="description"
        content="Betriebliche Krankenversicherung (bKV) in Stuttgart – steuer- und sozialabgabenfrei ab 6 € pro Mitarbeiter. Kostenlose Beratung für Stuttgarter Unternehmen."
      />
      <link rel="canonical" href="https://meine-zusatzversicherung.de/startseite/stuttgart/" />
      <meta property="og:title" content="Betriebliche Krankenversicherung Stuttgart" />
      <meta
        property="og:description"
        content="bKV für Unternehmen in Stuttgart – steuerfreier Benefit ab 6 €/Monat. Jetzt kostenlos beraten lassen."
      />
      <meta property="og:url" content="https://meine-zusatzversicherung.de/startseite/stuttgart/" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(stuttgartJsonLd)}</script>
    </Helmet>
    <Navbar />
    <StuttgartHero />
    <SocialProofBar />
    <BenefitPillars />
    <HowItWorks />
    <AdvantagesGrid />
    <Testimonials />
    <CostCalculator />
    <TeamSection />
    <FAQSection />
    <FinalCTA />
    <ContactSection />
    <Footer />
  </>
);

export default Stuttgart;
