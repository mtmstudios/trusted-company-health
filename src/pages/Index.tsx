import Navbar from "@/components/landing/Navbar";
import HeroFunnel from "@/components/landing/HeroFunnel";
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

const Index = () => (
  <>
    <Navbar />
    <HeroFunnel />
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

export default Index;
