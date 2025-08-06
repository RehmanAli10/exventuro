"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import Navbar from "./Navbar";

function NavbarWrapper() {
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

      {isModalOpen && (
        <ContactModal isOpen={isModalOpen} onClose={handleModalClose} />
      )}
    </>
  );
}

export default NavbarWrapper;
