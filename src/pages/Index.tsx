import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionsSection from "@/components/CollectionsSection";
import LookbookSection from "@/components/LookbookSection";
import RunwaySection from "@/components/RunwaySection";
import PressSection from "@/components/PressSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CollectionsSection />
      <LookbookSection />
      <RunwaySection />
      <AboutSection />
      <PressSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
