import Image from "next/image";
import Plans from "@/components/homepage/Plans/Plans";
import Faq from "@/components/homepage/Faq/Faq";
import working from "@/assets/working.jpg";

const PricingPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5">
          Find the right plan for you
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Choose from our plans and add-ons to suit your specific service needs.
        </p>
      </div>

      {/* Pricing Plans */}
      <Plans />

      {/* Get Pricing Section */}
      <div className="mt-6 md:mt-24 flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-left">
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#161C52] mb-3">
              Get{" "}
              <span className="italic font-serif text-[#77429A] font-normal">
                Pricing
              </span>
            </h3>
            <p className="text-[#5F5D75] text-sm sm:text-base leading-relaxed mb-8">
              We'd love to hear from you! Whether you have a question, need
              support, or just want to learn more about what we do, our team is
              here to help.
            </p>
          </div>

          <div className="relative w-full h-[300px] sm:h-[360px] md:h-[460px] lg:h-full rounded-2xl overflow-hidden">
            <Image
              src={working}
              alt="Working at computer"
              fill
              className="object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 bg-white border border-[#E6E6E6] shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
          <form className="space-y-5 h-full flex flex-col justify-center">
            {/* Row 1 - First/Last */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-[#77429A]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-[#77429A]"
              />
            </div>

            {/* Row 2 - Phone/Job */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-[#77429A]"
              />
              <select className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full text-[#5F5D75] focus:outline-none focus:border-[#77429A]">
                <option>Select Job title</option>
                <option>Manager</option>
                <option>Director</option>
                <option>Team Lead</option>
                <option>Other</option>
              </select>
            </div>

            {/* Row 3 - Email */}
            <input
              type="email"
              placeholder="Work Email"
              className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-[#77429A]"
            />

            {/* Row 4 - Message */}
            <textarea
              rows={4}
              placeholder="Message"
              className="bg-[#FBFBFB] border border-gray-300 rounded-lg px-4 py-3 w-full resize-none focus:outline-none focus:border-[#77429A]"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#77429A] text-white font-medium py-3 rounded-full transition-all hover:bg-[#6B3C8B]"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6 md:mt-24">
        <Faq />
      </div>
    </section>
  );
};

export default PricingPage;
