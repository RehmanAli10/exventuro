"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { packages } from "../data/packages";
import { StarIcon } from "@heroicons/react/24/solid";
import { FloatingParticles } from "./FloatingParticles";

export default function PackagesSection({ handleBooking }) {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #e6f7ff 50%, #f0f9ff 100%)",
      }}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-blue-400/10 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-400/10 blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center 
             bg-gradient-to-r from-sky-500 to-blue-700 
             text-white tracking-wide font-semibold 
             mb-4 uppercase px-4 py-1.5 rounded-full text-xs 
             shadow-lg bg-clip-padding"
            style={{
              WebkitBackgroundClip: "padding-box",
              WebkitTextFillColor: "inherit",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
            Premium Experiences
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover{" "}
            <span className="bg-gradient-to-r from-[#0055B8] to-[#00aaff] text-transparent bg-clip-text">
              Unforgettable
            </span>{" "}
            Journeys
          </motion.h1>

          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-[#0055B8] to-[#00aaff] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Premium badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center">
                  <StarIcon className="w-4 h-4 mr-1" />
                  POPULAR
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-[#0055B8] via-[#0085FF] to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg group-hover:blur-xl -z-10" />

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 group-hover:border-transparent group-hover:shadow-2xl transition-all duration-500 relative z-0">
                <div className="relative h-72 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="h-full w-full"
                  >
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                  </motion.div>

                  <div className="absolute bottom-4 left-4">
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">
                      {pkg.title}
                    </h2>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < pkg.rating ? "text-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-5">
                    <h3 className="text-sm font-semibold text-[#0055B8] mb-2 flex items-center">
                      <span className="h-3 w-3 bg-[#0055B8] rounded-full mr-2"></span>
                      Tour Highlights:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      {pkg.highlights.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-1.5 w-1.5 bg-[#0055B8] rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-[#0055B8] mb-1">
                        Pricing:
                      </h3>
                      <div className="flex justify-between">
                        <p className="text-gray-700">
                          <span className="font-bold text-lg text-gray-900">
                            ${pkg.price.smallGroup}
                          </span>
                          <span className="text-sm block text-gray-500">
                            4 travelers
                          </span>
                        </p>
                        <p className="text-gray-700">
                          <span className="font-bold text-lg text-gray-900">
                            ${pkg.price.largeGroup}
                          </span>
                          <span className="text-sm block text-gray-500">
                            5-6 travelers
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 italic mb-4">
                      {pkg.note}
                    </p>

                    {/* <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#0055B8] to-[#0085FF] text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all group-hover:from-[#0085FF] group-hover:to-[#00aaff] relative overflow-hidden"
                    >
                      <span className="relative z-10">Book Now</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0085FF] to-[#00aaff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button> */}
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="cursor-pointer w-full text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                      onClick={() => handleBooking(pkg)}
                    >
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background: "#0055B8",
                          backgroundImage:
                            "linear-gradient(to right, #0055B8, #0085FF)",
                          WebkitBackgroundImage:
                            "-webkit-linear-gradient(left, #0055B8, #0085FF)",
                        }}
                      />

                      <div
                        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "#0085FF",
                          backgroundImage:
                            "linear-gradient(to right, #0085FF, #00aaff)",
                          WebkitBackgroundImage:
                            "-webkit-linear-gradient(left, #0085FF, #00aaff)",
                        }}
                      />

                      {/* Button text */}
                      <span className="relative z-10">Book Now</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3.5 bg-white text-[#0055B8] font-bold rounded-full border-2 border-[#0055B8] hover:bg-[#0055B8] hover:text-white transition-colors shadow-md">
            View All Packages
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}
