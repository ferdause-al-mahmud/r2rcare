import Image from "next/image";
import suit from "@/assets/suit.jpg";

const DiscoverMore = () => {
  const filters = [
    "Meet the team",
    "Partnerships",
    "Proud to care",
    "Refer a friend",
    "Policies",
  ];

  return (
    <>
      <div className="text-left mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#161C52] mb-6">
          Discover More About Log My{" "}
          <span className="italic text-[#77429A]">Care</span>
        </h2>

        <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-[#E6D7FF] px-4 sm:px-6 py-3 rounded-2xl sm:rounded-full shadow-sm ">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-5 sm:px-6 py-2 sm:py-3 text-sm font-medium rounded-full transition-all duration-200 ${
                index === 0
                  ? "bg-[#77429A] text-white shadow-sm"
                  : "text-[#161C52] hover:text-[#77429A] hover:bg-[#F3E8FF]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden">
          <Image
            src={suit}
            alt="Team member"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left space-y-5">
          <p className="text-[#5F5D75] text-sm sm:text-base leading-relaxed">
            Meet the dedicated team behind our success. From creative thinkers
            to problem-solvers, every individual plays an essential role in
            shaping our journey. Their unique skills and unwavering commitment
            drive innovation and excellence in everything we do.
          </p>

          <p className="text-[#5F5D75] text-sm sm:text-base leading-relaxed">
            Together, they form the backbone of our company, blending passion
            with expertise to create lasting impact. Get to know the faces and
            talents that make our business thrive and push us toward greater
            achievements every day.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#77429A] text-white rounded-full text-sm font-medium transition-all hover:bg-[#6B3C8B]">
            Explore Our Profiles
          </button>
        </div>
      </div>
    </>
  );
};

export default DiscoverMore;
