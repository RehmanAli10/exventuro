"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { FloatingParticles } from "./FloatingParticles";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/tourism-boating-lake.png"
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70" />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Personalized <span className="text-blue-400">Wilderness</span>{" "}
            Adventures
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
            Exventuro offers immersive journeys through Canada&apos;s
            breathtaking landscapes
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[90vh] text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with parallax effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/tourism-boating-lake.png"
          alt="Hero Banner"
          fill
          className="object-cover z-0"
          priority
        />
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, rgba(9,18,47,0.7) 0%, rgba(49,70,128,0.6) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Personalized <span className="text-blue-400">Wilderness</span>{" "}
            Adventures
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={[
                "Exventuro offers immersive journeys through Canada's breathtaking landscapes",
                2000,
                "Exventuro offers customized adventures at your pace",
                2000,
                "Exventuro creates unforgettable wilderness experiences",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl font-light"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all bg-[#2563eb]"
            style={{
              backgroundImage: "linear-gradient(to right, #2563eb, #4338ca)",
              WebkitBackgroundImage:
                "-webkit-linear-gradient(left, #2563eb, #4338ca)",
            }}
          >
            <span className="relative text-white">Explore Adventures</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer px-8 py-3 bg-transparent border-2 border-white rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Customize Your Trip
          </motion.button>
        </motion.div>
      </div>

      {/* Floadting Particles  */}
      <FloatingParticles />
    </section>
  );
}
