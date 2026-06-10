import { BgBoxEffect, Button } from "..";
import { ironVaults } from "@/constants";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "../ui/background-beams";

const DisruptionHighlight = () => {
  const { title, sub, bullets, cta } = ironVaults;
  return (
    <section className="flex flex-col relative py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      {/* <BgBoxEffect
        leftFromColor="from-yellow-700"
        leftToColor="to-yellow-200"
        rightFromColor="from-yellow-200"
        rightToColor="to-yellow-500"
      /> */}

      {/* Title */}
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
        {title}
      </h2>
      <p className="text-sm md:text-base xl:text-lg font-medium text-white leading-relaxed mb-6 z-10">
        {sub}
      </p>

      {/* Bullet points */}
      <div className="max-w-2xl bg-accent/75 text-sm md:text-base xl:text-lg text-gray-900 px-5 sm:px-8 py-3 sm:py-6 rounded-2xl mb-8 space-y-3 z-10">
        {bullets.map((bullet, idx) => (
          <div
            key={idx}
            className="flex gap-3 justify-center text-center font-medium"
          >
            <CircleCheckBig className="text-green-600 shrink-0" />
            <h1>{bullet}</h1>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="z-10">
        <Link to="/contact">
          <Button
            type={cta.type}
            size="lg"
            label={cta.label}
            buttonClassName="z-10"
          />
        </Link>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default DisruptionHighlight;
