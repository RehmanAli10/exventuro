import Footer from "../components/Footer";
import NavbarWrapper from "../components/NavbarWrapper";
import OurServicesSection from "../components/OurServicesSection";
import SharedHeroSection from "../components/sharedUi/SharedHeroSection";

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
    </>
  );
}

export default page;
