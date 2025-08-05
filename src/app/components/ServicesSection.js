// import { MapPinned, TentTree, Snowflake } from "lucide-react";
// import { motion } from "framer-motion";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <MapPinned className="w-10 h-10" />,
//       title: "Guided Tours",
//       description:
//         "Choose from our itineraries or request a custom itinerary of choice",
//     },
//     {
//       icon: <TentTree className="w-10 h-10" />,
//       title: "Camping Tours",
//       description:
//         "Spend a night or multiple nights under the starlight with our premium camping gear",
//     },
//     {
//       icon: <Snowflake className="w-10 h-10" />,
//       title: "Glacial Walks",
//       description: "Guided walks on glacial ice frozen for over 240,000 years",
//     },
//   ];

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-white to-[#f0f9ff] text-center">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <div className="inline-flex items-center justify-center bg-blue-100 text-[#0055B8] tracking-wide font-semibold mb-4 uppercase px-4 py-2 rounded-full text-sm">
//             <span className="h-2 w-2 bg-[#0055B8] rounded-full mr-2"></span>
//             Our Services
//           </div>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//             Exceptional Adventure Experiences
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#0055B8] to-[#00aaff] mx-auto rounded-full"></div>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-50"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-[#0055B8] to-[#003D87] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

//               <div className="flex justify-center mb-6">
//                 <div className="bg-blue-100 group-hover:bg-white p-4 rounded-full text-[#0055B8] group-hover:text-[#0055B8] transition-colors duration-300">
//                   {service.icon}
//                 </div>
//               </div>

//               <h3 className="text-xl font-bold text-gray-800 group-hover:text-black mb-3 transition-colors duration-300">
//                 {service.title}
//               </h3>

//               {/* Fixed text color on hover */}
//               <p className="text-gray-600 group-hover:text-black leading-relaxed transition-colors duration-300 mb-6">
//                 {service.description}
//               </p>

//               <button className="text-sm font-medium text-[#0055B8] flex items-center justify-center mx-auto transition-colors duration-300 group relative">
//                 Learn more
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
//               </button>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.5 }}
//           className="mt-16"
//         >
//           <button className="bg-gradient-to-r from-[#0055B8] to-[#0085FF] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//             Explore All Services
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import { MapPinned, TentTree, Snowflake } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPinned className="w-10 h-10" />,
      title: "Guided Tours",
      description:
        "Choose from our itineraries or request a custom itinerary of choice",
    },
    {
      icon: <TentTree className="w-10 h-10" />,
      title: "Camping Tours",
      description:
        "Spend a night or multiple nights under the starlight with our premium camping gear",
    },
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: "Glacial Walks",
      description: "Guided walks on glacial ice frozen for over 240,000 years",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-20 text-center bg-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, white, #f0f9ff)",
        WebkitBackgroundImage: "linear-gradient(to bottom, white, #f0f9ff)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center bg-blue-100 text-[#0055B8] tracking-wide font-semibold mb-4 uppercase px-4 py-2 rounded-full text-sm">
            <span className="h-2 w-2 bg-[#0055B8] rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Exceptional Adventure Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0055B8] to-[#00aaff] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-50"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#0055B8] to-[#003D87] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  WebkitBackgroundImage:
                    "linear-gradient(135deg, #0055B8, #003D87)",
                }}
              ></div>

              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 group-hover:bg-white p-4 rounded-full text-[#0055B8] group-hover:text-[#0055B8] transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 group-hover:text-black mb-3 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 group-hover:text-black leading-relaxed transition-colors duration-300 mb-6">
                {service.description}
              </p>

              <button className="text-sm font-medium text-[#0055B8] flex items-center justify-center mx-auto transition-colors duration-300 group relative">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16"
        >
          <button className="text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            {/* Gradient background with proper iOS support */}
            <span
              className="absolute inset-0 bg-[#0055B8]"
              style={{
                backgroundImage: "linear-gradient(to right, #0055B8, #0085FF)",
                WebkitBackgroundImage:
                  "-webkit-linear-gradient(left, #0055B8, #0085FF)",
              }}
            ></span>

            {/* Button text */}
            <span className="relative z-10">Explore All Services</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
