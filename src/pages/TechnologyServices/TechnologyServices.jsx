import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components";
import { CircleCheckBig } from "lucide-react";
import Img from "@/assets/tech_services3.png";
import { techServicescapabilities, techServicesoutcomes } from "@/constants";

const Outsourcing = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Technology Services
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            Your tech backbone, engineered for speed and scale.
          </p>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            We design, build, and manage the technology that powers your
            business - fast, secure, and scalable. You focus on strategy and
            vision, while we handle the code, infrastructure, and 24/7 support.
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

      {/* Capabilities & Outcomes */}
      <section className="py-12 sm:py-20 bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8">
          How We Deliver & What You Gain
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Capabilities */}
          <Card>
            <CardHeader>
              <CardTitle>Capabilities</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {techServicescapabilities.map((mission, idx) => (
                    <p key={idx} className="flex gap-3">
                      <CircleCheckBig className="text-green-600 shrink-0" />
                      {mission}
                    </p>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Outcomes */}
          <Card>
            <CardHeader>
              <CardTitle>Outcomes</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {techServicesoutcomes.map((mission, idx) => (
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

        {/* CTA button */}
        <div className="flex justify-center pt-10 z-10">
          <Link to="/contact">
            <Button
              type="primary"
              size="lg"
              label="Talk to an Advisor"
              buttonClassName="w-fit"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Outsourcing;
