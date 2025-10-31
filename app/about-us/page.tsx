import Image from "next/image";
import team from "@/assets/team.jpg";
import purpose from "@/assets/purpose.png";
import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";
import promise from "@/assets/promise.png";
import care from "@/assets/care.svg";
import commentadd from "@/assets/commentadd.svg";
import creditcard from "@/assets/creditcard.svg";
import usercheck from "@/assets/usercheck.svg";
import DiscoverMore from "@/components/aboutus/DiscoverMore";
const AboutUsPage = () => {
  const cards = [
    {
      icon: purpose,
      title: "Our Purpose",
      desc: "To transform care for society’s most vulnerable people.",
    },
    {
      icon: mission,
      title: "Our Mission",
      desc: "To make person-centred technology accessible to everybody in social care.",
    },
    {
      icon: vision,
      title: "Our Vision",
      desc: "To be the world’s leading digital care management platform.",
    },
  ];

  const promises = [
    {
      icon: creditcard,
      text: "The core of our care management platform will always be free.",
    },
    {
      icon: care,
      text: "We’ll make sure everything we do is aimed at helping improve care.",
    },
    {
      icon: commentadd,
      text: "We’ll always do our very best to talk straight and listen to your feedback.",
    },
    {
      icon: usercheck,
      text: "We’ll treat you with the same dignity and attention that you do to the people in your care.",
    },
  ];

  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center mb-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5">
          About us
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Giving you the tools to deliver outstanding care to benefit everyone —
          now and in the future.
        </p>
      </div>

      {/* Values & Ethos Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 mb-16 md:mb-[120px]">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-2xl overflow-hidden">
          <Image
            src={team}
            alt="Our team"
            fill
            className="object-cover rounded-2xl shadow-sm"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 leading-snug">
            Our Values <br />
            And <span className="italic font-serif text-[#77429A]">Ethos</span>
          </h3>

          <div className="space-y-5 text-[#5F5D75] text-sm sm:text-base leading-relaxed">
            <p>
              We’ve witnessed first-hand how busy support workers are and the
              impact this has on the quality of care provided. Fewer people
              don’t equal less work (if only)!
            </p>

            <p>
              This impact is felt across the industry, by society, and most
              importantly, by those in your care and their families. And that
              includes our loved ones. And it might well include us one day.
            </p>

            <p>
              So, we’re driven to transform care for society’s most vulnerable
              people.
            </p>

            <p>
              And together, we have the motivation, awareness and expertise to
              make this happen.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose / Mission / Vision Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 md:mb-[120px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#E6D7FF] cursor-pointer rounded-2xl p-6 sm:p-8 text-left flex flex-col gap-3 sm:gap-4 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
              <Image
                src={card.icon}
                alt={card.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <h4 className="text-lg sm:text-xl font-semibold text-[#161C52]">
              {card.title}
            </h4>
            <p className="text-sm sm:text-base text-[#5F5D75] leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Our Promise Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 mb-16 md:mb-[120px]">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-8 leading-snug">
            Our{" "}
            <span className="italic font-serif text-[#77429A]">Promise</span>
          </h3>

          <ul className="space-y-6">
            {promises.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-4 text-[#161C52] text-sm sm:text-base leading-relaxed"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#77429A] flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 h-[380px] sm:h-[420px] md:h-[460px] rounded-2xl overflow-hidden">
          <Image
            src={promise}
            alt="Our promise"
            fill
            className="object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>
      <DiscoverMore />
    </section>
  );
};

export default AboutUsPage;
