import { Link } from "react-router-dom";
import { Button } from "@/components";
import { CircleCheckBig } from "lucide-react";
import Img from "@/assets/ai_about2.png";
import { missionList, vissionList } from "@/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundBeams } from "@/components/ui/background-beams";

const About = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Who We Are
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            We are investors, mentors, and architects of platforms that matter.
            In 2025, We are an ecosystem partner for startups, enterprises, and
            governments building the future of AI and cloud.
          </p>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            We began as service providers. Today, we empower founders,
            accelerate SaaS ventures, deliver structured data, and operate Iron
            Data Vaults - sovereign AI-ready data centres engineered for
            performance and ownership. With capital, counsel, and cloud under
            one roof, we help ambitious teams move from prototype to scale.
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

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
              <CardDescription>
                To provide secure data infrastructures, mentorship, and
                resources that accelerate growth for businesses and innovators
                worldwide.
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {missionList.map((mission, idx) => (
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
              <CardTitle>Vision</CardTitle>
              <CardDescription>
                To redefine the digital ecosystem by fostering collaboration,
                empowering entrepreneurs, and setting new standards in data and
                technology services.
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {vissionList.map((mission, idx) => (
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
          Ready to Collaborate?
        </h2>
        <p className="max-w-4xl text-center text-sm md:text-base xl:text-lg font-medium text-white leading-relaxed mb-6 z-10">
          Join us in shaping the future of technology, data, and innovation.
          Whether you’re an entrepreneur, investor, or innovator - we’d love to
          work with you.
        </p>

        {/* CTA button */}
        <div className="z-10">
          <Link to="/contact">
            <Button type="secondary" size="lg" label="Contact Us" />
          </Link>
        </div>
        <BackgroundBeams />
      </section>
    </>
  );
};

export default About;
