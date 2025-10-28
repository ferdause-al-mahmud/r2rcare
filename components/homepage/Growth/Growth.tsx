import { growth } from "@/const/growth";
import Image from "next/image";
import insight from "@/assets/insight.png";
import team from "@/assets/team.png";
import client from "@/assets/client.png";
import record from "@/assets/record.png";
import access from "@/assets/access.png";
import analyticssale from "@/assets/analytics-sales.png";
import overview from "@/assets/Overview1.jpg";
import organized from "@/assets/organized.png";

const Growth = () => {
  return (
    <section className="max-w-[1290px] mx-auto px-4 py-8 md:py-12 lg:py-16">
      {/* Header */}
      <div className="flex items-center justify-center flex-col text-center px-2 pt-4 pb-6 md:pt-10 md:pb-8 lg:pt-14 lg:pb-10">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#161C52]">
          Smart Advantages For Smarter{" "}
          <span className="text-[#77429A] font-normal font-serif italic">
            Growth
          </span>
        </h1>
        <p className="max-w-xl mt-3 md:mt-4 text-sm md:text-base text-[#5F5D75]">
          Harness intelligent solutions that simplify your workflow and boost
          efficiency. These advantages empower your team to achieve sustainable
          growth with confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
        {/* CARD TEMPLATE */}
        {growth.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-3xl overflow-hidden h-full"
          >
            <div
              className={`${card.bg} flex items-center justify-center rounded-3xl w-full h-[260px] md:h-[280px] lg:h-[300px] p-6 md:p-8`}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={200}
                className="w-full h-auto max-h-[200px] object-contain"
              />
            </div>

            <div className="flex flex-col justify-start flex-1 mt-6">
              <h3 className="text-xl md:text-2xl font-medium text-[#161C52] mb-3">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/*  Management App */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center my-20">
        {/* Left Image */}
        <div className="flex justify-center">
          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm">
            <Image
              src={analyticssale}
              alt="Web App Dashboard"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#161C52] mb-4">
            All-In-One Web App
            <br /> For{" "}
            <span className="italic font-serif text-[#77429A] font-normal">
              Management
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Manage everything from one powerful platform. Our all-in-one web app
            simplifies team coordination, client tracking, and reporting— making
            management smarter and more efficient.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#D7B7FF] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={team} alt="Team" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Team & Task Management:</strong>
                <br /> Organize teams, assign tasks, and collaborate seamlessly.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#FAD0E5] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={client} alt="Client" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Client & Document Management:</strong> <br />
                Track client needs and securely store documents with ease.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#D4F5D9] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={insight} alt="Reports" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Reports & Insights:</strong> <br />
                Access reports instantly to drive smarter decisions.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Candidate App */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-left order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#161C52] mb-4">
            Smart Phone App <br /> For{" "}
            <span className="italic font-serif text-[#77429A] font-normal">
              Candidate
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#5F5D75] leading-relaxed mb-6">
            Introducing our innovative Candidate App, designed to empower your
            care team with on-the-go care recording capabilities.
          </p>

          {/* Features */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#D7B7FF] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={record} alt="Record" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Record & Log Care:</strong>
                <br /> Document everything from activities to incidents in real
                time.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#FAD0E5] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={access} alt="Access" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Access All Info In One Place:</strong>
                <br /> Client history, preferences, and handover notes at your
                fingertips.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex items-center justify-center bg-[#D4F5D9] w-8 h-8 rounded-full flex-shrink-0">
                <Image src={organized} alt="Organized" width={50} height={50} />
              </div>
              <p className="text-sm md:text-base text-[#161C52]">
                <strong>Stay Organized:</strong>
                <br /> Manage tasks and priorities with smart to-do lists and
                team updates.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="bg-[#EDE5FF] rounded-3xl p-6 md:p-8 lg:p-10 w-full max-w-[580px] shadow-sm border border-[#CBB8FF]">
            <Image
              src={overview}
              alt="Candidate App"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
