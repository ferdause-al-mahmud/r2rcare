"use client";

const Plans = () => {
  const plans = [
    {
      name: "Personal",
      price: 29.9,
      features: [
        { text: "Basic feature set", available: true },
        { text: "Limited usage or access", available: true },
        { text: "Access to advanced tools", available: true },
        { text: "Email and chat support", available: false },
        { text: "24×7 customer service", available: false },
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: 59.9,
      features: [
        { text: "Comprehensive feature set", available: true },
        { text: "Expanded usage limits", available: true },
        { text: "Access to advanced tools", available: true },
        { text: "Email and chat support", available: true },
        { text: "24×7 customer service", available: false },
      ],
      highlight: true,
      label: "Popular",
    },
    {
      name: "Business",
      price: 129.9,
      features: [
        { text: "Fully customizable feature set", available: true },
        { text: "Dedicated account management", available: true },
        { text: "Scalable pricing options", available: true },
        { text: "Email and chat support", available: true },
        { text: "24×7 customer service", available: true },
      ],
      highlight: false,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1290px] mx-auto px-8 text-center">
        {/* Heading */}
        <div className="text-center mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1B2140] leading-tight">
            Choose Your Plan:
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#1B2140] font-medium italic">
            <span className="not-italic font-medium">Flexible</span>{" "}
            <span className="font-serif text-[#6B3C8B] font-bold!">
              Pricing Options
            </span>
          </h2>
          <p className="max-w-[780px] mx-auto mt-3 md:mt-4 text-sm sm:text-base text-[#5F5D75] px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-12 flex flex-col lg:flex-row justify-center items-stretch w-full">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between text-left p-8 transition-all duration-300
                ${
                  plan.highlight
                    ? "bg-[#EDE5FF] scale-[1.05] shadow-xl z-10 rounded-2xl"
                    : "bg-white shadow-md z-0"
                }
                ${
                  index === 0
                    ? "rounded-l-2xl lg:rounded-l-2xl"
                    : index === plans.length - 1
                    ? "rounded-r-2xl lg:rounded-r-2xl"
                    : ""
                }
                w-full lg:w-1/3
              `}
              style={{
                marginLeft: index !== 0 ? "-1px" : "0", // remove visible border line between cards
              }}
            >
              {/* Popular badge */}
              {plan.label && (
                <span className="absolute top-5 right-5 bg-[#77429A] text-white text-xs font-medium px-3 py-1 rounded-full">
                  {plan.label}
                </span>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-xl font-semibold text-[#161C52] mb-2">
                  {plan.name}
                </h3>
                <p className="text-4xl font-semibold text-[#161C52] mb-1">
                  ${plan.price}
                  <span className="text-base text-[#5F5D75] font-normal">
                    /Month
                  </span>
                </p>
                <p className="text-sm text-[#5F5D75] mb-6 leading-relaxed">
                  Velit maximus habitasse himenaeos iaculis, dapibus justo orci
                  neque conubia. Duis
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-[#161C52] mb-3">
                    Including:
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-center text-sm ${
                          feature.available
                            ? "text-[#161C52]"
                            : "text-[#B8A5D6] "
                        }`}
                      >
                        {feature.available ? (
                          <svg
                            className="w-4 h-4 mr-2 text-[#77429A] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 mr-2 text-[#B8A5D6] flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Button */}
              <button
                className={`mt-8 w-full py-3 rounded-full text-sm font-medium  cursor-pointer transition-all ${
                  plan.highlight
                    ? "bg-[#77429A] text-white hover:bg-[#6B3D8C]"
                    : "bg-[#77429A] text-white hover:bg-[#6B3D8C]"
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
