import { Link } from "react-router-dom";
import { Button } from "@/components";
import { CircleCheckBig } from "lucide-react";
import Img from "@/assets/investment_mentorship.jpg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { howWeMentor, programAdvantages, whatWeFund } from "@/constants";

const InvestmentMentorship = () => {
  return (
    <>
      {/* Hero / Intro */}
      <section className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-12 sm:py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Investment & Mentorship
          </h1>
          <p className="mt-6 text-base xl:text-lg font-medium text-gray-600 max-w-xl">
            We back bold founders building cloud SaaS, AI Agents, and
            outsourcing innovations—with capital, hands-on mentorship, and
            market access.
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

      <section className="py-12 sm:py-20 bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8">
          Fueling Innovation: Our Investment & Mentorship Program
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* What We Fund */}
          <Card>
            <CardHeader>
              <CardTitle>What We Fund</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {whatWeFund.map((mission, idx) => (
                    <p key={idx} className="flex gap-3">
                      <CircleCheckBig className="text-green-600 shrink-0" />
                      {mission}
                    </p>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* How We Mentor */}
          <Card>
            <CardHeader>
              <CardTitle>How We Mentor</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {howWeMentor.map((mission, idx) => (
                    <p key={idx} className="flex gap-3">
                      <CircleCheckBig className="text-green-600 shrink-0" />
                      {mission}
                    </p>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Program Advantages */}
          <Card>
            <CardHeader>
              <CardTitle>Program Advantages</CardTitle>
              <CardDescription>
                <div className="space-y-3 mt-3 text-gray-700 leading-relaxed">
                  {programAdvantages.map((mission, idx) => (
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
              label="Submit Your Pitch"
              buttonClassName="w-fit"
            />
          </Link>
        </div>
      </section>
    </>
  );
};

export default InvestmentMentorship;
