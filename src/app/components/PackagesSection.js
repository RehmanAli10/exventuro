"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { packages } from "../data/packages";

export default function PackagesSection() {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "#fff",
        backgroundImage: "linear-gradient(to bottom, white, #f0f9ff)",
        WebkitBackgroundImage: "-webkit-linear-gradient(top, white, #f0f9ff)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute bottom-8 left-0 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-blue-200/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-blue-100 text-[#0055B8] tracking-wide font-semibold mb-4 uppercase px-4 py-1 rounded-full text-sm">
            <span className="h-2 w-2 bg-[#0055B8] rounded-full mr-2"></span>
            Premium Tours
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Trending Tour Packages
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0055B8] to-[#00aaff] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
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
                  />
                </motion.div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </h2>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#0055B8] mb-2">
                    Tour Highlights:
                  </h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="h-1 w-1 bg-[#0055B8] rounded-full mt-2 mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-[#0055B8] mb-1">
                    Pricing:
                  </h3>
                  <p className="text-gray-700">
                    <span className="font-medium">${pkg.price.smallGroup}</span>{" "}
                    for families/groups of 4
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">${pkg.price.largeGroup}</span>{" "}
                    for families/groups of 5-6
                  </p>
                </div>

                <p className="text-xs text-gray-500 italic mb-4">{pkg.note}</p>

                <div className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" cursor-pointer w-full bg-[#0055B8] text-white font-medium py-2 px-4 rounded-lg transition-all"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #0055B8, #0085FF)",
                      WebkitBackgroundImage:
                        "-webkit-linear-gradient(left, #0055B8, #0085FF)",
                    }}
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
