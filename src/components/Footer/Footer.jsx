import { Link } from "react-router-dom";
import { Button } from "..";
import { socialMediaLinks, quickLinks } from "@/constants";
import Logo from "@/assets/logo/Mark1.png";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-300 to-gray-100 py-12 px-4 md:px-6 lg:px-12 xl:px-24">
      <div className="lg:flex lg:justify-between space-y-10 lg:space-y-0 text-sm text-gray-700 font-medium">
        {/* Company Info */}
        <div>
          <img src={Logo} alt="Mark 1" className="h-7 lg:h-5.5 xl:h-7" />
          <p className="mt-4 leading-relaxed max-w-sm">
            Learn more about how we can help your company streamline customer
            communications, deliver 24×7 support, and optimize solutions to
            maximize efficiency.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-500">
            {socialMediaLinks.map((socialMediaLink) => (
              <Link
                key={socialMediaLink.id}
                to={socialMediaLink.to}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {socialMediaLink.icon ? (
                  <socialMediaLink.icon
                    className={`size-8 ${socialMediaLink.hoverColor} text-black  opacity-75 hover:opacity-100 transition`}
                  />
                ) : (
                  <img
                    src={socialMediaLink.img}
                    alt="X Icon"
                    className={`size-8 ${socialMediaLink.hoverColor} opacity-80 hover:opacity-100 transition`}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 text-base font-semibold mb-3">
            Quick Links
          </h3>
          <div className="text-sm space-y-3">
            {quickLinks.map(({ id, label, to }) => (
              <div key={id}>
                <Link to={to} className="text-gray-600 hover:text-gray-900">
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="">
          <h3 className="text-gray-900 text-base font-semibold mb-3">
            Contact Info
          </h3>
          {/* Office Address */}
          <div className="mb-2">
            <p>MARK 1 Private Limited</p>
            <div className="mt-1 flex items-start gap-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <div>
                <p>D-3/3, Okhla Industrial Area, Phase II,</p>
                <p>New Delhi - 110020, INDIA</p>
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="mb-2">
            <h4 className="sr-only">Phone Numbers</h4>
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} />
              <Link
                to="tel:+911141611155"
                className="text-gray-600 hover:text-gray-900"
              >
                +91 - 11 - 41611155
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <Link
                to="tel:+911141610540"
                className="text-gray-600 hover:text-gray-900"
              >
                +91 - 11 - 41610540
              </Link>
            </div>
          </div>

          {/* Email */}
          {/* <div className="flex items-center gap-2">
            <Mail size={16} />
            <Link
              to="mailto:hello@markone.example"
              className="text-gray-600 hover:text-gray-900"
            >
              hello@markone.example
            </Link>
          </div> */}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-sm font-medium text-gray-500">
        © {new Date().getFullYear()} MARK 1. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
