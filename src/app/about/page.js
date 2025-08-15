import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import AboutUsSection from "./UI/AboutUsSection";
import Footer from "../components/Footer";
import NavbarWrapper from "../components/NavbarWrapper";
import FloatingButton from "../components/FloatingButton";

export default function About() {
  return (
    <>
      <NavbarWrapper />
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <SharedHeroSection
          imageSrc="/images/about-hero.jpg"
          mainHeading="About"
          highlightedText="Us"
        />
        <AboutUsSection />
        <Footer />
      </main>
      <FloatingButton />
    </>
  );
}
