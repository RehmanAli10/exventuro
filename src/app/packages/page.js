"use client";
import { useState } from "react";
import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PackagesSection from "../components/PackagesSection";

export default function Packages() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar onContactClick={handleModalOpen} />
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <SharedHeroSection
          imageSrc="/images/packages-hero.jpg"
          mainHeading="Ongoing"
          highlightedText="Packages"
        />
        <PackagesSection />
        <Footer />
      </main>

      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
}
