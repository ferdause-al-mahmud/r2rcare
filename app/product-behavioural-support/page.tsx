import Faq from "@/components/homepage/Faq/Faq";
import Image from "next/image";
import bhv1 from "@/assets/bhv1.png";
import bhv2 from "@/assets/bhv2.jpg";
import bhv3 from "@/assets/bhv3.jpg";
import bhv4 from "@/assets/bhv4.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductBehaviouralPage = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 md:pt-48 lg:pt-56 pb-16 font-sans">
      {/* Header */}
      <div className="text-center flex items-center flex-col justify-center capitalize">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#161C52] mb-3 sm:mb-5  max-w-[900px]">
          A clearer path to behavioural progress
        </h1>
        <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
          Design a smarter strategy with PBS by Log my Care.{" "}
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5F5D75] max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
          Levelling up PBS can have a dramatic impact on the lives of your
          service users. Rooted in behavioural science, you will not only gain a
          much deeper understanding of the individuals you support, but you will
          also be able to demonstrate and provide evidence of it with Log my
          Care.
        </p>
      </div>

      {/*  1st Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left Image */}
        <div className="flex justify-center relative">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="  w-full max-w-[580px] ">
            <Image
              src={bhv1}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Get ahead of <br /> the{" "}
            <span className="italic font-serif  text-[#77429A]">
              challenges
            </span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            At-a-glance data drives your proactive support{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Our Care Office equips everyone with an understanding of service
            user behaviour, their goals, and the steps to success – particularly
            crucial with new team members. <br /> <br /> Our traffic light
            system brings clarity across proactive, active and reactive PBS
            strategies. In critical moments, the Carer App provides Carers with
            access to behavioural strategies and clear guidance to prevent a
            service user from reaching their crisis point.
          </p>
        </div>
      </div>
      {/*  2nd Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Do more than reviewing <br />
            isolated{" "}
            <span className="italic font-serif text-[#77429A]">behaviour</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            A holistic approach, connecting goals and risks{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Positive behaviour can be influenced by more than just a standard
            PBS plan. Create goals with defined outcomes that complement a
            broader behaviour strategy, and pair them together through the Care
            Office. <br /> <br />
            Enhance your PBS plans by linking them to specific risks with risk
            ratings. This approach builds a deeper level of understanding and
            contributes to the safety of carers and other service users.
          </p>
        </div>
        {/*Right Content */}
        <div className="flex justify-center relative flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={bhv2}
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
              src={bhv3}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Tools that keep the
            <br /> positive{" "}
            <span className="italic font-serif text-[#77429A]">momentum</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            Small changes can help big shifts in behaviour{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Service user digital signatures and review reminders enable Care
            Managers to agree to the positive change and unlock a mutual
            commitment between care staff and the individual. <br /> <br />
            Get a historical view of how the PBS plan has changed over time,
            download a handy PDF version to share with family members, and team
            members can acknowledge all plans with &apos;mark as read&apos; in
            the Carer App.
          </p>
        </div>
      </div>
      {/*  4th Section */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center mt-20 md:mt-[150px]">
        {/* Left  */}
        <div className="flex flex-col justify-center text-left flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-[#161C52] mb-4 capitalize">
            Suggested{" "}
            <span className="italic font-serif  text-[#77429A]">read</span>
          </h1>
          <h2 className="text-[#161C52] mb-3 font-medium capitalize text-xl sm:text-2xl">
            Enter, PBS: Our latest complex care feature{" "}
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Learn how Log my Care’s PBS plan feature simplifies implementing
            Positive Behaviour Support, enhancing care for those with complex
            needs.
          </p>
          <div className="mt-4 md:mt-9">
            <Button
              className={cn(
                "bg-[#77429A] hover:bg-[#6A3D8C] cursor-pointer text-white rounded-full px-6 py-6 text-base font-medium transition-colors duration-200"
              )}
            >
              Read blog post
            </Button>
          </div>
        </div>

        {/* Right  */}
        <div className="flex justify-center relative  flex-1">
          <div className="w-full max-w-[580px] h-full absolute mix-blend-hue bg-purple-200 rounded-md"></div>

          <div className=" w-full max-w-[580px] shadow-sm">
            <Image
              src={bhv4}
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

export default ProductBehaviouralPage;
