"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Modal from "./Modal";
import ContactForm from "./Forms/ContactForm";

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
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          isShowModalHeader={true}
          heading="Get in Touch"
          subheading="We'll get back to you as soon as possible"
        >
          <ContactForm onClose={handleModalClose} />
        </Modal>
      )}
    </>
  );
}

export default NavbarWrapper;
