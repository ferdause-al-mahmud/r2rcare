import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import ds1 from "@/assets/ds1.png";
import ds2 from "@/assets/ds2.png";
import ds3 from "@/assets/ds3.png";
import ds4 from "@/assets/ds4.jpg";
import ds5 from "@/assets/ds5.png";
import ds6 from "@/assets/ds6.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#161C52] mb-3 sm:mb-5">
          Welcome
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Here you&apos;ll be introduced to some our key features and how
          they&apos;ll benefit you most - we&apos;ll also talk plans, pricing
          and how you&apos;d get setup.{" "}
        </p>
      </div>

      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={ds1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            An overview of
            <br /> Key{" "}
            <span className="italic font-serif text-[#77429A]">Activities</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            The Care Office gives your management team a simple overview of all
            the tasks, incidents and documentation for your care service. <br />
            Each section is designed to only show key information, keeping
            things free of clutter and confusion.
          </p>
        </div>
      </div>
      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Assign and <br /> track{" "}
            <span className="italic font-serif text-[#77429A]">tasks</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            From the Care Office you can create to-do’s for anyone on your care
            team, with details such as signature requirements or recurring
            events. <br /> <br />
            You will then be able to see every task and log on the dashboard, to
            get an instant status of each assigned task.
          </p>

          <div>
            <Button
              className={cn(
                "bg-[#77429A] hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Learn about to-do&apos;s
            </Button>
          </div>
        </div>
        {/*Right Content */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={ds2}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/*  3rd Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left  */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-t-3xl rounded-l-3xl pl-6 pt-6 md:pl-8 md:pt-8 lg:pl-10 lg:pt-10 w-full max-w-[580px] ">
            <Image
              src={ds3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            See the big picture <br /> with{" "}
            <span className="italic font-serif text-[#77429A]">reports</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Use the reports to see overall patterns, such as incidents and
            medication, for continuous quality improvement. Each report provides
            a breakdown of the data over the selected time frame. <br /> <br />
            Managers find it useful for spotting any trends, whether it’s issues
            that need fixing or the positive impact from recent changes.
          </p>
        </div>
      </div>
      {/*  4th Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Create and organise <br /> client{" "}
            <span className="italic font-serif text-[#77429A]">documents</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Create client documentation in the Care Office, such as care plans,
            risk assessments and goals. <br />
            <br />
            You can set yourself reminders to update care plans when necessary,
            and will see read receipts when each carer has viewed the latest
            version.
          </p>
          <div>
            <Button
              className={cn(
                "bg-[#77429A] hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Learn about care plans
            </Button>
          </div>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={ds4}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
      {/* 5th Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className=" rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={ds5}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Organise your service with roles
            <br /> and{" "}
            <span className="italic font-serif text-[#77429A]">zones</span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Manage all of your carers and residents within the Care Office.
            <br />
            Residents and carers can be assigned to ‘zones’, which represent
            groupings such as floors and sites. You can then set access limits
            to the app or Care Office with user roles.
          </p>
        </div>
      </div>
      {/*  6th Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#161C52] mb-4 capitalize">
            Breeze through
            <br />
            <span className="italic font-serif text-[#77429A]">
              inspections
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Preparing for inspections no longer causes a massive headache.
            Simply share the evidence gathered on our platform, and the
            inspectors will have all the information they require.
          </p>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className=" rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={ds6}
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

export default ProductPage;
