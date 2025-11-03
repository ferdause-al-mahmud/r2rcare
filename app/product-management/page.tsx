import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import mng1 from "@/assets/mng1.jpg";
import mng2 from "@/assets/mng2.png";
import mng3 from "@/assets/mng3.jpg";
import mng4 from "@/assets/mng4.jpg";

const ProductManagementPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center flex items-center flex-col justify-center capitalize">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#161C52] mb-3 sm:mb-5  max-w-[900px]">
          Create a safer space{" "}
        </h1>
        <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
          Turn incidents into insights
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Our incident management system helps care providers understand why
          incidents happen in social care. It equips them with the data to help
          drive truly meaningful change. Unlock impactful oversight with
          incident logs, detailed cases and reporting.
        </p>
      </div>

      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="  w-full max-w-[580px] ">
            <Image
              src={mng1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Clearer context up <br /> up{" "}
            <span className="italic font-serif  text-[#77429A]">front</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            Precise incident logs that make reviewing simple.
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Carers log incidents just like they’d log their care, with ease.
             Simplicity with the flexibility to add the detail, ensuring Care
            Managers get the entire picture.   <br /> <br /> Carers get walked
            through how to log an incident, quick-text buttons mean they don’t
            have to type everything out, but there&apos;s room to add free text
            if they need it. <br /> <br /> We use your smartphone connectivity
            to add the location of an incident, take a photo, or add a video if
            you need to.
          </p>
        </div>
      </div>
      {/*  2nd Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            The visibility to act <br />
            when you{" "}
            <span className="italic font-serif text-[#77429A]">need to</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            See incidents as they’re logged.{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            The Care Office home screen gives you a live feed of incidents being
            logged and sight of the incidents needing your review. Start
            assessing incidents with a single click.   <br /> <br />
            At-a-glance, the alerts feed will give you sight of incident type,
            the service user involved, and time it occurred, ensuring you’re
            always in the know.
          </p>
        </div>
        {/*Right Content */}
        <div className="flex justify-center relative flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="w-full max-w-[580px]">
            <Image
              src={mng2}
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

          <div className="bg-[#EDE5FF] rounded-t-3xl rounded-l-3xl pl-6 pt-6 md:pl-8 md:pt-8 lg:pl-10 lg:pt-10 w-full max-w-[580px] ">
            <Image
              src={mng3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Escalate or close <br /> with{" "}
            <span className="italic font-serif text-[#77429A]">confidence</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            Find specific incidents quickly and dig into the detail to review.{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Search incidents by service user, incident type, severity, outcome
            and more. <br /> <br />
            Escalating incidents from logs to cases provides more opportunities
            to add detail. Cases give carers opportunities to add injury notes,
            body maps and the service user’s opinion on the incident. <br />{" "}
            <br />
            Crucially, resulting outcomes and next steps can be broken out and
            given a status tag. Trying to close cases with outstanding actions?
            The Care Office will let you know.
          </p>
        </div>
      </div>
      {/*  4th Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Get reporting that <br /> drives meaningful{" "}
            <span className="italic font-serif  text-[#77429A]">action</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            Simple, yet powerful charts that highlight root cause issues.
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            The Care Office provides the flexibility to see how incident volumes
            are trending over a specified period, by incident type, severity and
            location. <br />
            <br />
            See how incident types and their severity relate to each other,
            understand the environments you need to change, and let the data
            prioritise your next steps. <br />
            <br />
            Reporting at service user, location, care home or group level,
            access to good data will transform your conversations and your level
            of care.
          </p>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8  w-full max-w-[580px] shadow-sm">
            <Image
              src={mng4}
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

export default ProductManagementPage;
