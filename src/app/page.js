import FloatingButton from "./components/FloatingButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarWrapper from "./components/NavbarWrapper";
import dynamic from "next/dynamic";

const ServicesSection = dynamic(() => import("./components/ServicesSection"));
const SightseeingSection = dynamic(() =>
  import("./components/SightseeingSection")
);

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <NavbarWrapper />

      {/* Page content */}
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <HeroSection />
        <ServicesSection />
        <SightseeingSection />
        <Footer />
      </main>

      <FloatingButton />
    </>
  );
}
