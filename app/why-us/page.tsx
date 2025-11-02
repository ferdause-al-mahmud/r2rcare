import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import why1 from "@/assets/why1.jpg";
import why2 from "@/assets/why2.jpg";
import why3 from "@/assets/why3.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WhyUsPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center flex items-center flex-col justify-center capitalize">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#161C52] mb-3 sm:mb-5  max-w-[900px]">
          Making the switch from legacy systems to Log my Care
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed ">
          Here you&apos;ll be introduced to some our key features and how
          they’ll benefit you most – we&apos;ll also talk plans, priFinding the
          right fit is important. Here’s why thousands of care providers felt
          comfortable using our platform.cing and how you’d get setup.
        </p>
      </div>

      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 sm:mt-[150px]">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={why1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Accessible to
            <br /> all care{" "}
            <span className="italic font-serif text-[#77429A] font-medium">
              Teams
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Designed to improve outcomes and evidence progress, we’re constantly
            improving to make sure we keep people at the heart of care. <br />
            <br /> Our product is built alongside carers and managers to provide
            modern and accessible technology for all care providers, regardless
            of size.
          </p>
          <div>
            <Button
              className={cn(
                "bg-[#77429A] capitalize mt-8 hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Discover the difference
            </Button>
          </div>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left Image */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Improved oversight
            <br /> and{" "}
            <span className="italic font-serif text-[#77429A] font-medium">
              outcomes
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            With everything centralised in our two-part system, managers will
            have data at their convenience, and carers can increase focus on
            delivering the best client care. <br />
            Our online dashboard, the Care Office, keeps owners, managers, and
            senior carers informed. Paired with the Carer App, it allows them to
            easily monitor daily care activities, track progress, and ensure
            accountability. The Carer App empowers care teams to log activities
            on the go and access current information when needed.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex justify-center relative flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={why2}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
      </div>
      {/*  3rd Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 sm:mt-[150px]">
        {/* Left  */}

        <div className="flex justify-center relative bg-[#EDE5FF]">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={why3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/* Right  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Easy, ongoing <br />
            <span className="italic font-serif text-[#77429A] font-medium">
              support
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Our users are often surprised at just how much time they save day to
            day after making the switch. <br />
            <br />
            This starts straight away when onboarding with us - where minimal
            training is required, delivered through live video calls or recorded
            tutorials. <br /> <br />
            Managers regularly tell us they’re happy using the app and training
            their care team after this session. We also have a 24/7 live chat
            within our system, ready to help you within 5 minutes. 
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6 md:mt-24">
        <Faq />
      </div>
    </section>
  );
};

export default WhyUsPage;
