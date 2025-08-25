"use client";
import SharedHeroSection from "../components/sharedUi/SharedHeroSection";
import Footer from "../components/Footer";
import PackagesSection from "../components/PackagesSection";
import NavbarWrapper from "../components/NavbarWrapper";
import FloatingButton from "../components/FloatingButton";
import { useState } from "react";
import Modal from "../components/Modal";
import ContactForm from "../components/Forms/ContactForm";

export default function Packages() {
  const [isOpen, setIsOpen] = useState(false);
  const [packageDetails, setPackageDetails] = useState(null);

  function handleBooking(pckg) {
    if (Object.entries(pckg).length === 0) return;
    setIsOpen(true);
    setPackageDetails(pckg);
  }
  return (
    <>
      <NavbarWrapper />
      <main className={`min-h-screen text-black overflow-x-hidden`}>
        <SharedHeroSection
          imageSrc="/images/packages-hero.jpg"
          mainHeading="Ongoing"
          highlightedText="Packages"
        />
        <PackagesSection handleBooking={handleBooking} />
        <Footer />
      </main>
      <FloatingButton />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isShowModalHeader={true}
        heading="Book your trip"
      >
        <ContactForm
          formType={"booking"}
          onClose={() => setIsOpen(false)}
          packageDetails={packageDetails}
        />
      </Modal>
    </>
  );
}
