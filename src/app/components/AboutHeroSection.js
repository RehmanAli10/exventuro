"use client";

import Image from "next/image";

const AboutHeroSection = () => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Heading */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          About <span className="text-blue-400">Us</span>
        </h1>
      </div>
    </section>
  );
};

export default AboutHeroSection;
