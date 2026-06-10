import { WhyMarkOneCards } from "@/components";

const WhyMarkOne = () => {
  return (
    <section className="bg-white max-w-[1920px] flex flex-col relative justify-center mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-16 lg:py-20 border-red-500 overflow-hidden">
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug mb-3">
        Why Choose Us
      </h2>
      <p className="text-sm md:text-base xl:text-lg text-gray-600 max-w-3xl leading-relaxed">
        Four pillars that define how we build and scale with our partners.
      </p>

      {/* Whu mark one cards */}
      <WhyMarkOneCards />
    </section>
  );
};

export default WhyMarkOne;
