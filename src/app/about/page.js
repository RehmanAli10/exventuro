import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import NavbarWrapper from "../components/NavbarWrapper";

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
    </>
  );
}
