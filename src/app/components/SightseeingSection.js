// import Image from "next/image";
// import React from "react";

// const SightseeingSection = () => {
//   return (
//     <section className="bg-white px-4 sm:px-8 lg:px-20 py-16 space-y-24">
//       {/* Top Section */}
//       <div className="flex flex-col lg:flex-row items-center gap-10">
//         {/* Left Content */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <p className="text-sm text-[#0055B8] font-semibold uppercase mb-2">
//             Promotion
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug mb-4">
//             We Provide You Best
//             <br /> Canada&apos;s Sightseeing Tours
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Et labore harum non nobis ipsum cum molestias mollitia et corporis
//             praesentium a doloremque minima. Non quasi ea quo eligendi corrupti
//             et fugiat nulla quo ea aut recusandae in maxime quasi aut ducimus
//             illum aut optio quibusdam!
//           </p>
//           <button className="cursor-pointer bg-[#0055B8] hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition">
//             View Packages
//           </button>

//           {/* Thumbnail Cards */}
//           <div className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap">
//             {[
//               { src: "/images/forest-view.jpg" },
//               { src: "/images/glacial-view.jpg" },
//               { src: "/images/lake-view.jpg" },
//               { src: "/images/mountain-view.jpg" },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="relative w-24 h-24 rounded-xl overflow-hidden shadow-md"
//               >
//                 <Image
//                   src={item.src}
//                   alt={`Place ${i + 1}`}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="lg:w-1/2 flex justify-center relative">
//           <div className="relative w-[320px] h-[420px] overflow-hidden rounded-t-full rounded-b-none shadow-xl ">
//             <Image
//               src="/images/canada-tower.jpg"
//               alt="Eiffel Tower"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="absolute right-0 bottom-8 transform rotate-90 origin-right text-gray-300 font-semibold text-lg tracking-widest hidden lg:block">
//             Breath Taking Views
//           </div>
//         </div>
//       </div>

//       {/* Bottom Promotion Banners */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="relative h-56 rounded-xl overflow-hidden">
//           <Image
//             src="/images/left-image.jpg"
//             alt="Explore Nature"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//             <h3 className="text-white text-2xl font-semibold">
//               Explore Nature
//             </h3>
//           </div>
//         </div>

//         <div className="relative h-56 rounded-xl overflow-hidden">
//           <Image
//             src="/images/right-image.jpg"
//             alt="Explore Cities"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//             <h3 className="text-white text-2xl font-semibold">
//               Explore Cities
//             </h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SightseeingSection;

import Image from "next/image";

const SightseeingSection = () => {
  return (
    // <section className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 space-y-16 md:space-y-20 lg:space-y-24 relative overflow-hidden">
    <section
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 space-y-16 md:space-y-20 lg:space-y-24 relative overflow-hidden bg-white"
      style={{
        backgroundImage: "linear-gradient(to bottom, white, #f0f9ff)",
        WebkitBackgroundImage: "-webkit-linear-gradient(top, white, #f0f9ff)",
      }}
    >
      <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-blue-100/30 blur-3xl"></div>
      <div className="absolute bottom-8 left-0 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-blue-200/20 blur-3xl"></div>

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12 relative z-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-blue-100/20 px-3 py-1 md:px-4 md:py-1 rounded-full mb-3 md:mb-4">
            <p className="text-xs sm:text-sm text-[#0055B8] font-semibold uppercase tracking-wider">
              Premium Experience
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            Discover Canada&apos;s{" "}
            <span className="text-[#0055B8]">Breathtaking</span>
            <br className="hidden sm:inline" />
            Sightseeing Adventures
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
            Immerse yourself in Canada&apos;s natural wonders and urban marvels.
            Our curated tours blend iconic landmarks with hidden gems for
            unforgettable experiences.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className="relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 overflow-hidden font-bold text-white rounded-full group cursor-pointer text-sm sm:text-base">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0055B8] to-[#00A1FF] group-hover:from-[#00A1FF] group-hover:to-[#0055B8] transition-all duration-500 ease-out"></span>
              <span className="absolute top-0 right-0 w-10 h-10 -mt-2 -mr-10 sm:w-12 sm:h-12 sm:-mt-3 sm:-mr-12 transition-all duration-1000 transform translate-x-12 sm:translate-x-16 rotate-12 bg-white opacity-10 group-hover:-translate-x-60 sm:group-hover:-translate-x-72 ease"></span>
              <span className="relative flex items-center gap-1 sm:gap-2">
                Explore Packages
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Thumbnail Cards - adjusted for mobile */}
          <div className="flex justify-center lg:justify-start gap-4 md:gap-5 lg:gap-6 mt-8 md:mt-10 flex-wrap">
            {[
              { src: "/images/forest-view.jpg", name: "Forests" },
              { src: "/images/glacial-view.jpg", name: "Glaciers" },
              { src: "/images/lake-view.jpg", name: "Lakes" },
              { src: "/images/mountain-view.jpg", name: "Mountains" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl md:rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex items-end p-2 md:p-3">
                  <span className="text-white font-medium text-xs sm:text-sm">
                    {item.name}
                  </span>
                </div>
                <Image
                  src={item.src}
                  alt={`${item.name} view`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center relative w-full mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-t-full rounded-b-3xl shadow-xl md:shadow-2xl border-4 sm:border-6 md:border-8 border-white">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0055B8]/20 to-transparent z-10 pointer-events-none"></div>
            <Image
              src="/images/canada-tower.jpg"
              alt="CN Tower Toronto"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-105"
              quality={100}
            />
          </div>

          <div className="absolute -right-8 sm:-right-10 bottom-16 md:bottom-20 transform rotate-0 origin-right text-white font-bold text-sm sm:text-base md:text-lg tracking-widest hidden lg:block bg-[#0055B8] px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full shadow-lg animate-pulse">
            <span className="flex items-center gap-1 sm:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              Breathtaking Views
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {[
          {
            src: "/images/left-image.jpg",
            title: "Wilderness Exploration",
            desc: "Journey through pristine natural landscapes",
          },
          {
            src: "/images/right-image.jpg",
            title: "Urban Adventures",
            desc: "Discover vibrant cityscapes and culture",
          },
        ].map((banner, index) => (
          <div
            key={index}
            className="relative h-52 sm:h-60 md:h-72 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
            <Image
              src={banner.src}
              alt={banner.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4 sm:p-5 md:p-6 text-white transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                {banner.title}
              </h3>
              <p className="opacity-80 text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">
                {banner.desc}
              </p>
              <button className="text-blue-100 font-medium text-sm sm:text-base flex items-center gap-1 sm:gap-2 group-hover:text-white transition-colors">
                Discover Tours
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SightseeingSection;
