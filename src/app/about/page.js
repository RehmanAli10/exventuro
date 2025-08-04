"use client";
import { useState } from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutUsSection from "../components/AboutUsSection";
import ContactModal from "../components/ContactModal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
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
        <AboutHeroSection />
        <AboutUsSection />
        <Footer />
      </main>

      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
}
