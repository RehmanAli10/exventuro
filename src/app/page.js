"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import SightseeingSection from "./components/SightseeingSection";
import ContactModal from "./components/ContactModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onContactClick={handleModalOpen} />

      {/* Page content */}
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <HeroSection />
        <ServicesSection />
        <SightseeingSection />
        <Footer />
      </main>

      {/* Contact Modal*/}
      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
}
