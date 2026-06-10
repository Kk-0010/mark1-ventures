import { ContactForm } from "@/components";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
  return (
    <>
      {/*  Headline */}
      <div className="flex flex-col justify-center items-center bg-white text-center px-4 md:px-8 py-16 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug text-gray-900 max-w-4xl mb-4">
            Your idea deserves <span className="text-red-600">capital</span>,{" "}
            <span className="text-red-600">cloud</span>, and{" "}
            <span className="text-red-600">confidence</span>. <br />
            We bring all three.
          </h1>
          <p className="max-w-2xl text-gray-600 text-sm md:text-base xl:text-lg font-medium leading-relaxed mx-auto">
            Whether you’re a startup with a bold pitch deck, an AI company
            needing structured datasets, or a SaaS team looking for secure
            hosting, MARK 1 is your partner.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Final Line */}
      <section className="flex flex-col relative py-16 lg:py-20 px-4 bg-gradient-to-tr from-red-700 to-red-400 text-white justify-center items-center overflow-hidden mt-16">
        <h2 className="max-w-3xl text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center leading-snug mb-3 z-10">
          Pitch in . Plug in . Power up - with MARK 1
        </h2>
        <BackgroundBeams />
      </section>
    </>
  );
};

export default Contact;
