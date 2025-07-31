import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SightseeingSection from "./components/SightseeingSection";

// import Navbar from "@/app/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-black overflow-x-hidden">
      <Navbar />
      {/* heroSection */}
      <HeroSection />
      <ServicesSection />
      <SightseeingSection />
      {/* footer */}
      <Footer />
    </main>
  );
}
