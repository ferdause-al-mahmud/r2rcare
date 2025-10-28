"use client";

import Image from "next/image";
import dashboard from "@/assets/dashboard.png";
import stats from "@/assets/stats.png";
import easyaccess from "@/assets/easyaccess.png";
import task from "@/assets/task.png";
import paperless from "@/assets/paperless.png";
import notification from "@/assets/notification.png";

const functionalities = [
  {
    title: "Dashboard",
    desc: "A real-time overview and easy access to important information.",
    icon: dashboard,
    active: true,
  },
  {
    title: "Statistics",
    desc: "Helps to understand patterns and trends in overall data.",
    icon: stats,
  },
  {
    title: "Easy Access",
    desc: "Easy access to the platform for management, candidate, and clients.",
    icon: easyaccess,
  },
  {
    title: "Task List Management",
    desc: "Organizing and overseeing the assignments and activities related to tasks.",
    icon: task,
  },
  {
    title: "Paperless",
    desc: "Manage information, documents, and records digitally.",
    icon: paperless,
  },
  {
    title: "Real-Time Notifications",
    desc: "Stay informed with instant updates and alerts across the platform.",
    icon: notification,
  },
];

const Functionality = () => {
  return (
    <section className="w-full bg-[#77429A] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1290px] mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3">
          Discover The Powerful Functionalities
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#E6D7FF] mb-10">
          That Our Platform Offers
        </h3>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {functionalities.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start text-left p-6 rounded-xl border  ${
                item.active
                  ? "bg-[#E6D7FF] border-white "
                  : "border-[#8D5FB7] bg-transparent hover:bg-[#8251A8] transition-colors"
              }`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full mb-4 ${
                  item.active ? "bg-[#77429A]" : "bg-[#E5D6FF]/20"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="invert brightness-0"
                />
              </div>

              <h4
                className={`text-lg font-semibold mb-2 ${
                  item.active ? "text-[#161C52]" : "text-white"
                }`}
              >
                {item.title}
              </h4>
              <p
                className={`text-sm leading-relaxed ${
                  item.active ? "text-[#4B4A67]" : "text-[#E6D7FF]"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Functionality;
