import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="bg-white text-gray-800 px-4 sm:px-8 lg:px-16 py-20 space-y-16">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0055B8]">
          Welcome to Exventuro
        </h2>
        <p className="text-lg text-gray-700">
          Where Every Adventure Has a Story.
        </p>
        <p className="text-md sm:text-lg text-gray-600">
          Exventuro was born out of a simple idea: adventures should feel
          personal, unforgettable, and a little bit wild. We&apos;re a team of
          passionate explorers, nature-lovers, and storytellers who believe that
          the best memories are made off the beaten path (and sometimes on it,
          with a bear or two watching from afar).
        </p>
      </div>

      {/* Highlight Statements */}
      <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        {[
          "We don't do boring.",
          "We don't do one-size-fits-all.",
          "No sardine-can tour buses.",
        ].map((text, idx) => (
          <div
            key={idx}
            className="bg-[#F4F8FB] rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition"
          >
            <p className="text-lg font-semibold text-blue-400">{text}</p>
          </div>
        ))}
      </div>

      {/* Core Values Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#0055B8]">
            Real Adventures, Real Connections
          </h3>
          <p className="text-gray-600">
            We create intimate, immersive tours that connect you to the land,
            the culture, and your inner explorer. From jaw-dropping national
            parks to hidden gems you won&apos;t find on Google Maps, every
            Exventuro trip is crafted to give you a deep, local, and real
            experience.
          </p>
          <p className="text-gray-600">
            Raw nature. Real connections. Ridiculously good memories.
          </p>
          <p className="text-[#0055B8] font-semibold">
            Say yes to adventure — because life&apos;s too short for “maybe next
            summer.”
          </p>
        </div>
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src="/images/about-adventure.jpg"
            alt="Adventure"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Climate & Sustainability Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden order-2 md:order-1">
          <Image
            src="/images/eco-friendly.jpg"
            alt="Eco Travel"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h3 className="text-2xl font-bold text-[#0055B8]">We Drive Green</h3>
          <p className="text-gray-600">
            Our commitment to the planet doesn&apos;t stop at admiring it — we
            protect it. All our tours use fuel-efficient, low-emission vehicles,
            and wherever possible, we partner with hybrid and electric transport
            providers.
          </p>
          <p className="text-gray-600">
            Every route we take is designed to minimize environmental impact
            without compromising the jaw-dropping views.
          </p>
        </div>
      </div>

      {/* Science + Glaciers Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#0055B8]">
            For Science Geeks
          </h3>
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
        </div>
        <div className="w-full h-[300px] sm:h-[400px] relative rounded-xl overflow-hidden">
          <Image
            src="/images/glacier-science.jpg"
            alt="Glacier Education"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
