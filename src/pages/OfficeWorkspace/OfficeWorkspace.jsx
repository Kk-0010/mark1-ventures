import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components";
import { CircleCheckBig } from "lucide-react";
import Img from "@/assets/office2.jpg";
import { officeWorkspaceBenefits, officeWorkspaceOfferings } from "@/constants";

const Outsourcing = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Office & Workspace Solutions
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            From desk to data centre, we host it all.
          </p>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            Flexible, scalable, and built to grow with you. Whether you’re a
            startup needing your first desks or an enterprise requiring secure
            facilities, we provide the space so you can focus on the business.
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
              <CardTitle>Offerings</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {officeWorkspaceOfferings.map((mission, idx) => (
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
              <CardTitle>Benefits</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {officeWorkspaceBenefits.map((mission, idx) => (
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
              label="Explore Workspace Solutions"
              buttonClassName="w-fit"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Outsourcing;
