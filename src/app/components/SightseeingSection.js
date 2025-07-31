import Image from "next/image";
import React from "react";

const SightseeingSection = () => {
  return (
    <section className="bg-white px-4 sm:px-8 lg:px-20 py-16 space-y-24">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-[#0055B8] font-semibold uppercase mb-2">
            Promotion
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
            We Provide You Best
            <br /> Canada&apos;s Sightseeing Tours
          </h2>
          <p className="text-gray-600 mb-6">
            Et labore harum non nobis ipsum cum molestias mollitia et corporis
            praesentium a doloremque minima. Non quasi ea quo eligendi corrupti
            et fugiat nulla quo ea aut recusandae in maxime quasi aut ducimus
            illum aut optio quibusdam!
          </p>
          <button className="cursor-pointer bg-[#0055B8] hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition">
            View Packages
          </button>

          {/* Thumbnail Cards */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap">
            {[
              { src: "/images/forest-view.jpg" },
              { src: "/images/glacial-view.jpg" },
              { src: "/images/lake-view.jpg" },
              { src: "/images/mountain-view.jpg" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-24 h-24 rounded-xl overflow-hidden shadow-md"
              >
                <Image
                  src={item.src}
                  alt={`Place ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center relative">
          <div className="relative w-[320px] h-[420px] overflow-hidden rounded-t-full rounded-b-none shadow-xl ">
            <Image
              src="/images/canada-tower.jpg"
              alt="Eiffel Tower"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 bottom-8 transform rotate-90 origin-right text-gray-300 font-semibold text-lg tracking-widest hidden lg:block">
            Breath Taking Views
          </div>
        </div>
      </div>

      {/* Bottom Promotion Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-56 rounded-xl overflow-hidden">
          <Image
            src="/images/left-image.jpg"
            alt="Explore Nature"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold">
              Explore Nature
            </h3>
          </div>
        </div>

        <div className="relative h-56 rounded-xl overflow-hidden">
          <Image
            src="/images/right-image.jpg"
            alt="Explore Cities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold">
              Explore Cities
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SightseeingSection;
