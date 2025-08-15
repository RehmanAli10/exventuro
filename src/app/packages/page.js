import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import Footer from "../components/Footer";
import PackagesSection from "../components/PackagesSection";
import NavbarWrapper from "../components/NavbarWrapper";
import FloatingButton from "../components/FloatingButton";

export default function Packages() {
  return (
    <>
      <NavbarWrapper />
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <SharedHeroSection
          imageSrc="/images/packages-hero.jpg"
          mainHeading="Ongoing"
          highlightedText="Packages"
        />
        <PackagesSection />
        <Footer />
      </main>
      <FloatingButton />
    </>
  );
}
