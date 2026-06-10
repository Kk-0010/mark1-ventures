import { Link } from "react-router-dom";
import { BgBoxEffect, Button } from "..";
import { BackgroundBeams } from "../ui/background-beams";

const WorkspaceSolutions = () => {
  return (
    <section className="flex flex-col relative py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      {/* <BgBoxEffect
        leftFromColor="from-gray-700"
        leftToColor="to-gray-200"
        rightFromColor="from-gray-200"
        rightToColor="to-gray-500"
      /> */}

      {/* Title */}
      <h2 className="max-w-4xl text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
        From desk to data centre—we host it all.
      </h2>
      <p className="text-sm md:text-base xl:text-lg font-medium text-white text-center leading-relaxed mb-6 z-10">
        Incubation hubs, remote-first infrastructure, and enterprise-grade
        facilities connected to our cloud.
      </p>

      {/* CTA Buttons */}
      <div className="z-10">
        <Link to="/contact">
          <Button
            type="secondary"
            size="lg"
            label="Explore Workspace Solutions"
          />
        </Link>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default WorkspaceSolutions;
