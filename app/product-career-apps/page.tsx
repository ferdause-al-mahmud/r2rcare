import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import career1 from "@/assets/career1.jpg";
import career2 from "@/assets/career2.png";
import career3 from "@/assets/career3.png";
import career4 from "@/assets/career4.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductCareerPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center flex items-center flex-col justify-center capitalize">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5  max-w-[900px]">
          A friendly, minimalist app for carers{" "}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          The Carer App allows your team to record the care they deliver on the
          go, saving each carer around 1 hour a day of admin.
        </p>
      </div>

      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="  w-full max-w-[580px] ">
            <Image
              src={career1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            A simple interface to
            <br /> capture the{" "}
            <span className="italic font-serif text-[#77429A]">Details</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Each step in the app is a straightforward experience without any
            button overload. That is key to stopping users from feeling lost and
            uncertain about where to go next. For example, to make a log in the
            app, you: <br /> <br />
            Following these basic options results in a fully detailed log, and
            makes our system easy to use.
          </p>
        </div>
      </div>
      {/*  2nd Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Enhance logs with <br /> photos and{" "}
            <span className="italic font-serif text-[#77429A]">Videos</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            For even more detail, carers can also add photos or videos to the
            logs. It’s ideal for documenting aspects such as goal achievements
            or health changes. <br /> <br />
            For carers who are in a hurry or would rather speak than type, there
            is the option to use our speech-to-text functionality to fill in any
            box.
          </p>
        </div>
        {/*Right Content */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="w-full max-w-[580px]">
            <Image
              src={career2}
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
              src={career3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Keep on top of <br /> medications with{" "}
            <span className="italic font-serif text-[#77429A]">EMAR</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Managers can set up MAR charts with our eMAR add-on. This notifies
            carers of when they need to administer medication, and they can then
            digitally sign it off within the app. <br /> <br />
            Managers are able to keep track of medication frequencies, while
            ensuring compliance with the medication history.
          </p>
          <div>
            <Button
              className={cn(
                "bg-[#77429A]  capitalize mt-8 hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Learn more about eMAR
            </Button>
          </div>
        </div>
      </div>
      {/*  4th Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Easily access client <br /> documents and{" "}
            <span className="italic font-serif text-[#77429A]">Details</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Carers can view all information about their assigned clients. That
            includes everything from risk assessments and care plans to GP
            information. <br />
            <br />
            If a document changes, carers are notified through a small red icon
            within the app, and can mark it as ‘read’ once they have reviewed
            it.
          </p>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8  w-full max-w-[580px] shadow-sm">
            <Image
              src={career4}
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

export default ProductCareerPage;
