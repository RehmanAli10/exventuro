import Footer from "../components/Footer";
import NavbarWrapper from "../components/NavbarWrapper";
import OurServicesSection from "./UI/OurServicesSection";
import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import FloatingButton from "../components/FloatingButton";

function page() {
  return (
    <>
      <NavbarWrapper />
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <SharedHeroSection
          imageSrc="/images/our-services-hero.png"
          mainHeading="Our"
          highlightedText={"Services"}
        />
        <OurServicesSection />
        <Footer />
      </main>

      <FloatingButton />
    </>
  );
}

export default page;
