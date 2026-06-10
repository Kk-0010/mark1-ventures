import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components";
import { CircleCheckBig } from "lucide-react";
import Img from "@/assets/iron_data_vaults.png";
import { solutions, whyItMatters } from "@/constants";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "@/components/ui/background-beams";

const CloudHosting = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Cloud & Hosting — Iron Data Vaults
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            Today’s cloud monopolies limit ownership, control, and performance.
            <span className="block mt-2">
              Iron Data Vaults redefine the cloud - sovereign, AI-optimised, and
              built for you to own, not just rent.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="https://irondatavaults.com/" target="_">
              <Button
                type="primary"
                size="lg"
                label="Explore Iron Data Vaults"
              />
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
          The Problem
        </h2>
        <p className="text-base xl:text-lg font-medium text-gray-600 mb-8">
          Cloud monopolies concentrate control and limit ownership. AI workloads
          demand performance, sovereignty, and predictable economics—but today’s
          cloud models fail to deliver true control and sustainable value.
        </p>

        {/* Solutions & Why It Matters */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Our Solution */}
          <Card>
            <CardHeader>
              <CardTitle>Our Solution</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {solutions.map((mission, idx) => (
                    <p key={idx} className="flex gap-3">
                      <CircleCheckBig className="text-green-600 shrink-0" />
                      {mission}
                    </p>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Vission */}
          <Card>
            <CardHeader>
              <CardTitle>Why It Matters</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {whyItMatters.map((mission, idx) => (
                    <p key={idx} className="flex gap-3">
                      <CircleCheckBig className="text-green-600 shrink-0" />
                      {mission}
                    </p>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col relative py-12 sm:py-20 px-4 md:px-6 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
        {/* Title */}
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
          “Don’t just rent the cloud. Own it.”
        </h2>
        <p className="max-w-4xl text-center text-sm md:text-base xl:text-lg font-medium text-white leading-relaxed mb-6 z-10">
          “The cloud is no longer a service. It’s an asset you can own.”
        </p>

        {/* CTA button */}
        <div className="flex gap-3 z-10">
          <Link to="/contact">
            <Button
              type="secondary"
              size="lg"
              label="Host Your Startup in Our Vaults"
              buttonClassName="w-62"
            />
          </Link>
          <Link to="/contact">
            <Button
              type="secondary"
              size="lg"
              label="Invest in the Future of Cloud"
              buttonClassName="w-62"
            />
          </Link>
        </div>
        <p className="mt-3 text-center text-sm font-medium text-white max-w-2xl mx-auto">
          Note: Fractional ownership may be subject to regulation. This content
          is informational and not investment advice.
        </p>

        <BackgroundBeams />
      </section>
    </>
  );
};

export default CloudHosting;
