"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronDownIcon,
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar({ onContactClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#", isDropdown: true },
    { label: "Ongoing Packages", href: "/packages" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !mobileMenuRef.current?.contains(event.target) &&
        !hamburgerRef.current?.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, { passive: true });
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full absolute top-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/exventuro-logo.png"
              alt="Exventuro Logo"
              width={180}
              height={90}
              className="h-auto w-[120px] md:w-[160px] object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link, idx) =>
              link.isDropdown ? (
                <div key={idx} className="relative group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="cursor-pointer group inline-flex items-center gap-1 relative"
                  >
                    Services
                    <ChevronDownIcon className="h-4 w-4 mt-1 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  </button>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <div
                      className="absolute mt-2 bg-grey backdrop-blur-md text-white border border-white/20 rounded shadow-lg w-30"
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <Link
                        href="/services/trekking"
                        className="block px-4 py-2 hover:text-blue-500"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Trekking
                      </Link>
                      <Link
                        href="/services/camping"
                        className="block px-4 py-2 hover:text-blue-500"
                        onClick={() => setIsServicesOpen(false)}
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
                  className="relative group text-white transition-colors"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Get in Touch Button - Desktop Only */}
          <div className="hidden md:block">
            <button
              onClick={onContactClick}
              className="bg-[#0055B8] hover:bg-blue-500 cursor-pointer text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              ref={hamburgerRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
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
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed right-4 bg-white text-black w-60 px-6 py-4 space-y-4 z-50 shadow-lg rounded-lg animate-fade-in"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-blue-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="block w-full bg-[#0055B8] hover:bg-blue-600 text-white text-center px-4 py-2 rounded transition-colors"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}
