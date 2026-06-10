import { Link } from "react-router-dom";
import { BgBoxEffect, Button } from "..";
import { BackgroundBeams } from "../ui/background-beams";

const FinalCTA = () => {
  return (
    <section className="flex flex-col relative py-16 lg:py-20 px-4 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden">
      {/* Background - box effect */}
      {/* <BgBoxEffect
        leftFromColor="from-red-700"
        leftToColor="to-red-200"
        rightFromColor="from-red-200"
        rightToColor="to-red-500"
      /> */}

      {/* Tilte */}
      <h2 className="max-w-3xl text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
        Your idea deserves capital, cloud, and confidence. We bring all three.
      </h2>

      {/* CTA Buttons */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-2 z-10">
        <Link to="/contact">
          <Button
            type="secondary"
            size="lg"
            label="Upload Pitch Deck"
            buttonClassName="w-50"
          />
        </Link>
        <Link to="/contact">
          <Button
            type="secondary"
            size="lg"
            label="Request Dataset"
            buttonClassName="w-50"
          />
        </Link>
        <Link to="/contact">
          <Button
            type="secondary"
            size="lg"
            label="Apply for Cloud Hosting"
            buttonClassName="w-50"
          />
        </Link>
        <Link to="/contact">
          <Button
            type="secondary"
            size="lg"
            label="Talk to an Advisor"
            buttonClassName="w-50"
          />
        </Link>
      </div>

      <p className="text-sm md:text-base xl:text-lg font-medium text-white leading-relaxed my-6 z-10">
        Pitch in . Plug in . Power up
      </p>
      <BackgroundBeams />
    </section>
  );
};

export default FinalCTA;
