import React from "react";
import { MapPinned, TentTree, Snowflake } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <MapPinned className="w-10 h-10 text-[#0055B8]" />,
      title: "Guided Tours",
      description:
        "Choose from our itineraries or request a custom itinerary of choice",
    },
    {
      icon: <TentTree className="w-10 h-10 text-[#0055B8]" />,
      title: "Camping Tours",
      description:
        "Spend a night or multiple nights under the starlight where we provide you with camping gear",
    },
    {
      icon: <Snowflake className="w-10 h-10 text-[#0055B8]" />,
      title: "Glacial Walks",
      description: "Guided walks on glacial ice frozen for over 240,000 years",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white text-center">
      <p className="text-sm text-[#0055B8] tracking-wide font-semibold mb-2 uppercase">
        Category
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
        We Offer Best Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 max-w-sm mx-auto"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
