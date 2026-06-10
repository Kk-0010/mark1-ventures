import { Button } from "..";
import { Link } from "react-router-dom";
import Img from "@/assets/tech.jpg";

const ManpowerTech = () => {
  return (
    <section className="bg-gray-50 max-w-[1920px] mx-auto px-4 md:px-6 lg:px-12 xl:px-24 py-16 lg:py-20 flex flex-col md:flex-row md:justify-between items-center md:gap-10 lg:gap-20 overflow-hidden">
      <div className="mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Content */}
        <div className="md:w-4/7 my-auto">
          {/* Title */}
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-snug mb-3">
            Manpower & Tech Outsourcing
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-gray-600 max-w-3xl leading-relaxed">
            On-demand teams, global outsourcing, AI testing, multilingual
            customer support. Flexible models from remote pods to fully managed
            services.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link to="/about">
              <Button
                type="primary"
                size="lg"
                label="Request Manpower"
                buttonClassName="w-fit"
              />
            </Link>
          </div>
        </div>

        {/* Right Accent Block / Illustration Placeholder */}
        <div className="md:w-3/7 flex flex-col justify-center items-center mt-10 md:mt-0">
          <img src={Img} alt="About Image" className="rounded-sm" />
        </div>
      </div>
    </section>
  );
};

export default ManpowerTech;
