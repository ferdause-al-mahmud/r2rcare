import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import plans1 from "@/assets/plans1.jpg";
import plans2 from "@/assets/plans2.jpg";
import plans3 from "@/assets/plans3.png";
import plans4 from "@/assets/plans4.png";
import check from "@/assets/check.svg";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductCareerPlansPage = () => {
  const checklist = [
    "Select care plan templates such as behaviour, communication or relationships, or create bespoke ones",
    "Add details like strengths, needs, risks, actions and more",
    "Link risk assessments, goals, add documents and set a review date to view an automatic reminder of the care plan review date",
  ];
  const checklist2 = [
    "Risk assessments and goals are key parts of a care plan, which is why with Log my Care you can link them up",
    "When you create a care plan you can choose to connect it to the relevant risk assessment or goal",
    "Your carers will view the latest care plans via the Carer App and stay up to date",
  ];
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center flex items-center flex-col justify-center capitalize">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5  max-w-[900px]">
          Comprehensive and digestible care plans{" "}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Straightforward care planning, linked to goals and risk assessments.
        </p>
      </div>

      {/*  1st Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="w-full max-w-[580px]">
            <Image
              src={plans1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-6 capitalize">
            Follow the care <br />
            plan{" "}
            <span className="italic font-serif text-[#77429A]">template</span>
          </h2>

          <ul className="space-y-6">
            {checklist.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-[#161C52] text-sm sm:text-base leading-relaxed"
              >
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-[#77429A] flex items-center justify-center">
                  <Image
                    src={check}
                    alt="Check icon"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="max-w-md">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*  2nd Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Link to risk <br />
            <span className="italic font-serif text-[#77429A]">
              assessments
            </span>
          </h2>
          <ul className="space-y-6">
            {checklist2.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-[#161C52] text-sm sm:text-base leading-relaxed"
              >
                <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-[#77429A] flex items-center justify-center">
                  <Image
                    src={check}
                    alt="Check icon"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="max-w-md">{item}</p>
              </li>
            ))}
          </ul>
          <div>
            <Button
              className={cn(
                "bg-[#77429A] capitalize mt-8 hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Learn more
            </Button>
          </div>
        </div>
        {/*Right Content */}
        <div className="flex justify-center relative flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="w-full max-w-[580px]">
            <Image
              src={plans2}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/*  3rd Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="w-full max-w-[580px]">
            <Image
              src={plans3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Mobile friendly <br /> for{" "}
            <span className="italic font-serif text-[#77429A]">carers</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Carers won’t have to battle with viewing A4 PDFs on a small screen
            or flipping through endless paper. <br /> <br />
            Managers are able to keep track of medication frequencies, while
            Carers can view care plans in the Carer App, with easily accessible
            links to the associated risk assessments and goals. Once they have
            gone through the care plan, they can mark it as read to create a
            strong audit trail.
          </p>
          <div>
            <Button
              className={cn(
                "bg-[#77429A] capitalize mt-8 hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              See our app
            </Button>
          </div>
        </div>
      </div>
      {/*  4th Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Loved by{" "}
            <span className="italic font-serif text-[#77429A] ">
              Inspectors
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Log my Care users have found audits a breeze. The organised and
            thorough nature of the care plans makes them popular with
            inspectors. <br />
            <br />
            We have even heard from various users, who have easily gone from a
            poor to great due to the improved admin.
          </p>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative flex-1s">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className=" w-full max-w-[580px] ">
            <Image
              src={plans4}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6 md:mt-24">
        <Faq />
      </div>
    </section>
  );
};

export default ProductCareerPlansPage;
