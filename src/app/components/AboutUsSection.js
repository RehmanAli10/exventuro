"use client";

import Image from "next/image";
import {
  FaMountain,
  FaUsers,
  FaCar,
  FaLeaf,
  FaFlask,
  FaRoute,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  return (
    <section
      className="text-gray-800 px-4 sm:px-8 lg:px-16 py-20 space-y-20 relative overflow-hidden bg-white"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #F0F8FF, white)",
        WebkitBackgroundImage:
          "-webkit-linear-gradient(top left, #F0F8FF, white)",
      }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#0055B8] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#00A651] blur-3xl"></div>
      </div>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6 relative"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0055B8] mt-10">
          Welcome to <span className="text-[#00A651]">Exventuro</span>
        </h2>
        <p className="text-lg text-gray-700 font-medium">
          Where Every Adventure Has a Story.
        </p>
        <p className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Exventuro was born out of a simple idea: adventures should feel
          personal, unforgettable, and a little bit wild. We&apos;re a team of
          passionate explorers, nature-lovers, and storytellers who believe that
          the best memories are made off the beaten path (and sometimes on it,
          with a bear or two watching from afar).
        </p>
      </motion.div>

      {/* Highlight Statements */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            text: "We don't do boring.",
            icon: <FaMountain className="w-8 h-8 text-[#0055B8]" />,
            color: "from-[#0055B8] to-[#0085FF]",
            bgColor: "#0055B8",
          },
          {
            text: "We don't do one-size-fits-all.",
            icon: <FaUsers className="w-8 h-8 text-[#00A651]" />,
            color: "from-[#00A651] to-[#00D26A]",
            bgColor: "#00A651",
          },
          {
            text: "No sardine-can tour buses.",
            icon: <FaCar className="w-8 h-8 text-[#FF6B00]" />,
            color: "from-[#FF6B00] to-[#FFA800]",
            bgColor: "#FF6B00",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-white"
            style={{
              background: item.bgColor,
              backgroundImage: `linear-gradient(to bottom right, ${
                item.color.split(" ")[1]
              }, ${item.color.split(" ")[3]})`,
              WebkitBackgroundImage: `-webkit-linear-gradient(top left, ${
                item.color.split(" ")[1]
              }, ${item.color.split(" ")[3]})`,
            }}
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <p className="text-xl font-bold">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <FaRoute className="w-10 h-10 text-[#0055B8] flex-shrink-0" />
            <h3 className="text-2xl font-bold text-[#0055B8]">
              Real Adventures, Real Connections
            </h3>
          </div>
          <p className="text-gray-600">
            We create intimate, immersive tours that connect you to the land,
            the culture, and your inner explorer. From jaw-dropping national
            parks to hidden gems you won&apos;t find on Google Maps, every
            Exventuro trip is crafted to give you a deep, local, and real
            experience.
          </p>
          <div className="p-4 bg-[#F4F8FB] rounded-xl border-l-4 border-[#0055B8]">
            <p className="text-gray-600 italic">
              &quot;Raw nature. Real connections. Ridiculously good
              memories.&quot;
            </p>
          </div>
          <p className="text-[#0055B8] font-semibold text-lg">
            Say yes to adventure — because life&apos;s too short for &qout;maybe
            next summer.&quot;
          </p>
        </motion.div>

        <motion.div
          className="w-full h-[300px] sm:h-[400px] relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <Image
            src="/images/about-adventure.jpg"
            alt="Adventure"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Climate & Sustainability Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          className="w-full h-[300px] sm:h-[400px] relative rounded-2xl overflow-hidden order-2 md:order-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
          <Image
            src="/images/eco-friendly.jpg"
            alt="Eco Travel"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="space-y-6 order-1 md:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <FaLeaf className="w-10 h-10 text-[#00A651] flex-shrink-0" />
            <h3 className="text-2xl font-bold text-[#00A651]">
              We Drive Green
            </h3>
          </div>
          <p className="text-gray-600">
            Our commitment to the planet doesn&apos;t stop at admiring it — we
            protect it. All our tours use fuel-efficient, low-emission vehicles,
            and wherever possible, we partner with hybrid and electric transport
            providers.
          </p>
          <div className="bg-[#F4F8FB] p-4 rounded-xl">
            <p className="text-gray-600">
              Every route we take is designed to minimize environmental impact
              without compromising the jaw-dropping views.
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <div className="bg-[#00A651] text-white px-3 py-1 rounded-full text-sm">
              Eco-Certified
            </div>
            <div className="bg-[#0055B8] text-white px-3 py-1 rounded-full text-sm">
              Carbon Neutral
            </div>
          </div>
        </motion.div>
      </div>

      {/* Science + Glaciers Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3">
            <FaFlask className="w-10 h-10 text-[#FF6B00] flex-shrink-0" />
            <h3 className="text-2xl font-bold text-[#FF6B00]">
              For Science Geeks
            </h3>
          </div>
          <p className="text-gray-600">
            If you&apos;re the kind of traveler who watches David Attenborough
            documentaries for fun, we got you. On our glacier tours, we bring
            photo comparisons showing just how fast these icy giants are
            retreating.
          </p>
          <p className="text-gray-600">
            You&apos;ll walk the trails, feel the cold air, and see the climate
            shift with your own eyes. It&apos;s part adventure, part reality
            check — and all unforgettable.
          </p>
          <div className="mt-4">
            <button
              className="text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2"
              style={{
                background: "#FF6B00",
                backgroundImage: "linear-gradient(to right, #FF6B00, #FFA800)",
                WebkitBackgroundImage:
                  "-webkit-linear-gradient(left, #FF6B00, #FFA800)",
              }}
            >
              Explore Glacier Tours
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="w-full h-[300px] sm:h-[400px] relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent z-10"></div>
          <Image
            src="/images/glacier-science.jpg"
            alt="Glacier Education"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Animated SVG at bottom */}
      <div className="max-w-6xl mx-auto">
        <svg className="w-full h-20" viewBox="0 0 100 20">
          <motion.path
            d="M0,10 Q25,0 50,10 T100,10"
            fill="none"
            stroke="#0055B8"
            strokeWidth="0.5"
            strokeDasharray="200"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,10 Q25,20 50,10 T100,10"
            fill="none"
            stroke="#00A651"
            strokeWidth="0.5"
            strokeDasharray="200"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </svg>
      </div>
    </section>
  );
}
