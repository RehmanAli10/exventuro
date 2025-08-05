"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const zoomIn = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 8, ease: "easeOut" },
  },
};

const HeroSection = ({
  imageSrc,
  mainHeading,
  highlightedText,
  highlightColor = "text-blue-400",
  gradientFrom = "from-blue-400",
  gradientTo = "to-cyan-300",
}) => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        variants={zoomIn}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* Animated content */}
      <motion.div
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
          variants={fadeIn}
        >
          {mainHeading}{" "}
          <span className={highlightColor}>{highlightedText}</span>
        </motion.h1>

        <motion.div variants={fadeIn}>
          <div
            className={`w-20 h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} mx-auto rounded-full`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
