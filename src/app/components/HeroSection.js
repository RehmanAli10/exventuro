"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/tourism-boating-lake.png"
        alt="Hero Banner"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Personalized Wilderness Adventures
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Exventuro offers immersive journeys through Canada&apos;s breathtaking
          national parks at your pace.
        </p>
      </div>
    </section>
  );
}
