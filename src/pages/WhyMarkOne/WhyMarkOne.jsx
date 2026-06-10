import { Link } from "react-router-dom";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button, WhyMarkOneCards } from "@/components";
import Img from "@/assets/success.png";

const WhyMarkOne = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            What Sets Us Apart
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            We go beyond services, we become true partners in your growth. From
            investing in your vision to powering your cloud and scaling your
            teams, we provide the backbone for businesses ready to lead the
            future.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button type="primary" size="lg" label="Get in Touch" />
            </Link>
          </div>
        </div>

        {/* Right Content - Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Img}
            alt="About illustration"
            className="rounded-lg shadow-md max-h-[400px]"
          />
        </div>
      </section>

      {/* Problem Statement, Solutions & Why It Matters */}
      <section className="py-12 sm:py-20 bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        {/* Problem Statement */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
          Built Different, Built for You
        </h2>
        <p className="text-base xl:text-lg font-medium text-gray-600 mb-8">
          Four pillars that define how we build and scale with our partners.
        </p>

        {/* Solutions & Why It Matters */}
        <WhyMarkOneCards />
      </section>

      {/* CTA */}
      <section className="flex flex-col relative py-12 sm:py-20 px-4 md:px-6 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-6 z-10">
          “From data to desks, from capital to cloud, we deliver it all.”
        </h2>
        {/* <p className="max-w-4xl text-center text-sm md:text-base xl:text-lg font-medium text-white leading-relaxed mb-6 z-10">
          “The cloud is no longer a service. It’s an asset you can own.”
        </p> */}

        {/* CTA button */}
        <div className="flex gap-3 z-10">
          <Link to="/contact">
            <Button type="secondary" size="lg" label="Get in Touch" />
          </Link>
        </div>
        {/* <p className="mt-3 text-center text-sm font-medium text-white max-w-2xl mx-auto">
          Note: Fractional ownership may be subject to regulation. This content
          is informational and not investment advice.
        </p> */}

        <BackgroundBeams />
      </section>
    </>
  );
};

export default WhyMarkOne;
