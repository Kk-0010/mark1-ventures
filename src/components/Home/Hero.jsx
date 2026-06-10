import { Link } from "react-router-dom";
import { Button } from "..";
import Img from "@/assets/hero_image.png";
import { hero } from "@/constants";

const Hero = () => {
  const { title, subline, tagline, ctas } = hero;

  return (
    <section className="sm:h-[calc(100vh-64px)] max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-10 flex flex-col md:flex-row sm:justify-center md:justify-between items-center md:gap-10 lg:gap-20 overflow-hidden">
      {/* Hero Content */}
      <div className="md:w-1/2">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-sm md:text-base xl:text-lg font-medium text-gray-600 max-w-xl">
          {subline}
        </p>
        <p className="mt-3 text-sm md:text-base xl:text-lg font-medium text-gray-600 max-w-xl">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          {ctas.map((cta) => (
            <Link to={cta.href} key={cta.id}>
              <Button type={cta.type} size="lg" label={cta.label} />
            </Link>
          ))}
        </div>
      </div>

      {/* Placeholder for Illustration */}
      <div className="md:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0">
        <img src={Img} alt="Hero Image" className="rounded-sm" />
      </div>
    </section>
  );
};

export default Hero;
