
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MaterialGallery from "@/components/MaterialGallery";
import PatternMixer from "@/components/PatternMixer";
import MeasurementGuide from "@/components/MeasurementGuide";
import DesignGallery from "@/components/DesignGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MaterialGallery />
      <PatternMixer />
      <MeasurementGuide />
      <DesignGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
