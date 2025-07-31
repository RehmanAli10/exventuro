"use client";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className={`min-h-screen text-black overflow-x-hidden`}>
      <Navbar />
      <AboutHeroSection />
      <AboutUsSection />
      <Footer />
    </main>
  );
}
