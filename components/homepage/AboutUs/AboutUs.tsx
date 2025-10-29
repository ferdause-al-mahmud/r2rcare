"use client";

import Image from "next/image";
import { Star } from "lucide-react";

import Anna from "@/assets/Anna Rodriguez.jpg";
import Devid from "@/assets/David Chen.jpg";
import Laura from "@/assets/Laura Evans.jpg";
import Rachel from "@/assets/Rachel Adams.jpg";
import Tom from "@/assets/Tom Williams.jpg";

const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "David Chen",
    title: "Sales Director at ConnectCo",
    image: Devid,
    column: "left",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "Laura Evans",
    title: "VP of Operations at DataDriven",
    image: Laura,
    column: "right",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "Anna Rodriguez",
    title: "Chief Data at InnovateTech",
    image: Anna,
    column: "left",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "Tom Williams",
    title: "Project Lead at TeamSync",
    image: Tom,
    column: "right",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "Tom Williams",
    title: "Project Lead at TeamSync",
    image: Tom,
    column: "left",
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.",
    name: "Rachel Adams",
    title: "Manager at GrowthMark",
    image: Rachel,
    column: "right",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-purple-200 to-white py-16 md:py-24">
      <div className="max-w-[1290px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="flex flex-col justify-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#161C52] leading-snug">
            What People Who
            <br />
            Work With Us Think{" "}
            <span className="italic font-serif text-[#77429A]">About Us?</span>
          </h2>

          <p className="text-sm md:text-base text-[#5F5D75] mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            neque dui viverra iaculis. Feugiat in fusce vehicula.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="#FFC700"
                  stroke="#FFC700"
                  className="sm:w-4 sm:h-4"
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-[#5F5D75] ml-2">
              (2,420 Average rating)
            </span>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200 ${
                item.column === "left"
                  ? "border-t-4 border-b-4 border-[#E6D7FF]"
                  : ""
              }`}
            >
              <p className="text-sm text-[#5F5D75] leading-relaxed mb-4">
                {item.text}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-[#161C52] text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#5F5D75]">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
