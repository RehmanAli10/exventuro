"use client";

import {
  FaCompass,
  FaMapMarkedAlt,
  FaShuttleVan,
  FaCampground,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FloatingParticles } from "./FloatingParticles";

export default function OurServicesSection() {
  return (
    <section
      className="text-gray-800 px-4 sm:px-8 lg:px-16 py-20 relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom right, #F0F8FF, #E6F7FF)",
        WebkitBackgroundImage:
          "-webkit-linear-gradient(top left, #F0F8FF, #E6F7FF)",
      }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-5 w-32 h-32 rounded-full bg-[#0055B8] blur-3xl"></div>
        <div className="absolute bottom-20 right-5 w-48 h-48 rounded-full bg-[#00A651] blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6 relative mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0055B8]">
          Our Services
        </h2>
        <p className="text-2xl font-semibold text-[#00A651]">
          Not Just Tours, Trusted Journeys Through the Rockies
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Exventuro, we don't believe in cookie-cutter sightseeing. We
          believe in experiences crafted with heart, honesty, and a deep respect
          for your time and wonder.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our services are handcrafted, not automated. Run by real locals, for
          real explorers.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Full-Day Tours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#0055B8]/10 p-3 rounded-full">
              <FaCompass className="w-8 h-8 text-[#0055B8]" />
            </div>
            <h3 className="text-2xl font-bold text-[#0055B8]">
              Full-Day Guided Tours
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our full-day adventures cover the best of Banff, Jasper, Yoho, and
            beyond. Perfect for first-time visitors, photography lovers, or
            anyone who wants to see the iconic spots without the stress of
            planning or parking.
          </p>
          <div className="bg-[#F4F8FB] p-4 rounded-xl">
            <p className="text-gray-700 font-medium">
              Includes: Private or small-group options, custom stops, pro-level
              insights, and enough breaks to breathe it all in.
            </p>
          </div>
        </motion.div>

        {/* Custom Tours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#00A651]/10 p-3 rounded-full">
              <FaMapMarkedAlt className="w-8 h-8 text-[#00A651]" />
            </div>
            <h3 className="text-2xl font-bold text-[#00A651]">
              Custom Itineraries & Private Tours
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Got a proposal planned? Family reunion? Just want to hike at your
            own pace and skip the tourist traps? We craft fully personalized
            experiences tailored to your interests, timing, and energy levels.
          </p>
          <div className="bg-[#F0F8F0] p-4 rounded-xl">
            <p className="text-gray-700 font-medium">
              Includes: Pre-trip consultation, insider stops, and room for
              spontaneous detours (because the best memories are rarely on a
              spreadsheet).
            </p>
          </div>
        </motion.div>

        {/* Shuttle Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#FF6B00]/10 p-3 rounded-full">
              <FaShuttleVan className="w-8 h-8 text-[#FF6B00]" />
            </div>
            <h3 className="text-2xl font-bold text-[#FF6B00]">
              Pick-Up & Drop-Off Services
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Our partnering shuttle services will pick you up from your hotel or
            Airbnb and drop you back safely. Banff, Calgary, Canmore, Lake
            Louise, Jasper? We got you.
          </p>
          <div className="bg-[#FFF4EB] p-4 rounded-xl">
            <p className="text-gray-700 font-medium">
              Stress-free transportation so you can focus on the views, not the
              road.
            </p>
          </div>
        </motion.div>

        {/* Camping Experiences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#8A2BE2]/10 p-3 rounded-full">
              <FaCampground className="w-8 h-8 text-[#8A2BE2]" />
            </div>
            <h3 className="text-2xl font-bold text-[#8A2BE2]">
              Camping Experiences
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            At Exventuro, camping isn't just a place to sleep - it's an
            immersion into the wild beauty of the Rockies. We handle everything
            so you can focus on the moments that matter.
          </p>
          <div className="bg-[#F5F0FA] p-4 rounded-xl">
            <p className="text-gray-700 font-medium">
              We'll set up your campsite, guide you to stunning hidden spots,
              and share the best trails, lakes, and stargazing locations away
              from the crowds.
            </p>
          </div>
          <div className="mt-4 p-4 bg-[#E6F7FF] rounded-xl">
            <p className="text-gray-700">
              <span className="font-bold">
                Tailored for Comfort or True Wilderness:
              </span>{" "}
              Choose your style! Go rugged with a back-to-basics tent setup or
              indulge in a more comfortable, fully-equipped camp with cozy
              sleeping gear, warm meals, and expert guidance.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <div className="inline-flex items-center gap-3 mb-8">
          <FaStar className="w-8 h-8 text-[#FFD700]" />
          <h3 className="text-3xl font-bold text-[#0055B8]">
            Why Choose Exventuro?
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <p className="text-xl text-gray-700 mb-6">
            Because you're not just booking a ride. You're trusting someone with
            your time. And we take that seriously.
          </p>

          <div className="relative inline-block">
            <p className="text-lg text-gray-600 italic max-w-2xl mx-auto relative z-10">
              We're not the biggest tour company, and we don't want to be. We
              just want to be the most honest, most passionate, and most
              memorable part of your adventure.
            </p>
            <div className="absolute -bottom-2 right-0 w-24 h-1 bg-[#00A651] rounded-full z-0"></div>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="max-w-6xl mx-auto mt-20">
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
      <FloatingParticles />
    </section>
  );
}
