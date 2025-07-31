"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar({ onContactClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/aboutUs" },
    { label: "Services", href: "#", isDropdown: true },
    { label: "Upcoming Packages", href: "/packages" },
  ];

  return (
    <header className="w-full absolute top-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}

          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold relative">
              {/* Exventuro
              <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-blue-500 rounded-full transform rotate-[15deg] origin-left"></span> */}
              <Image
                src="/images/exventuro-logo.png"
                alt="Exventuro Logo"
                width={180}
                height={90}
                className="h-auto w-[120px] md:w-[160px] object-contain "
              />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) =>
              link.isDropdown ? (
                <div key={idx} className="relative group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="cursor-pointer group inline-flex items-center gap-1  relative"
                  >
                    Services
                    <ChevronDownIcon className="h-4 w-4 mt-1 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100  group-hover:translate-y-0" />
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div className="absolute mt-2 bg-grey backdrop-blur-md text-white border border-white/20 rounded shadow-lg w-30">
                      <Link
                        href="/services/trekking"
                        className="block px-4 py-2 hover:text-blue-500"
                      >
                        Trekking
                      </Link>
                      <Link
                        href="/services/camping"
                        className="block px-4 py-2 hover:text-blue-500"
                      >
                        Camping
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  href={link.href}
                  className="relative group text-white  transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Get in Touch Button */}
          {/* <div className="hidden md:block">
            <Link
              href="/contact"
              className=" bg-[#0055B8] hover:bg-blue-500 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              onClick={onContactClick}
            >
              Get in Touch
            </Link>
          </div> */}
          <button
            onClick={onContactClick}
            className="bg-[#0055B8] hover:bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed right-4 bg-white text-black w-60  px-6 py-4 space-y-4 z-50 shadow-lg">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="block">
              {link.label}
            </Link>
          ))}
          {/* <Link
            href="/contact"
            className="block bg-[#2E5E4E] text-white text-center px-4 py-2 rounded"
          >
            Get in Touch
          </Link> */}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="block w-full bg-[#2E5E4E] text-white text-center px-4 py-2 rounded"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
