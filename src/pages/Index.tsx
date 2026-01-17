import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import DeviceCategories from "@/components/home/DeviceCategories";
import HowItWorks from "@/components/home/HowItWorks";
import TrustSignals from "@/components/home/TrustSignals";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DeviceCategories />
        <HowItWorks />
        <TrustSignals />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
