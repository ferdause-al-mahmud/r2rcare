"use client";

import Image from "next/image";
import React from "react";
import setting from "@/assets/setting.png";
import partners from "@/assets/partners.png";
import desktop from "@/assets/desktop.jpg";
import lefthalf from "@/assets/lefthalf.png";
import righthalf from "@/assets/righthalf.png";
import person1 from "@/assets/person1.jpg";
import person2 from "@/assets/person2.jpg";
import person3 from "@/assets/person3.jpg";
import person4 from "@/assets/person4.jpg";
import { Star } from "lucide-react";

const Banner = () => {
  return (
    <section className="w-full relative overflow-visible">
      {/* Top section (light pink) */}
      <div className="w-full bg-[#FDE5FF] pb-48 sm:pb-64 md:pb-80 lg:pb-96 pt-[140px]">
        <div className="max-w-[1290px] mx-auto px-4 pt-4 pb-2 md:pt-10 md:pb-6 lg:pt-14 lg:pb-8">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-[#E2C4F6] text-[#6B3C8B] text-xs px-3 py-1 rounded-full">
              <Image
                src={setting}
                alt="setting"
                width={20}
                height={20}
                className="w-4 h-4"
              />
              <span className="whitespace-nowrap">
                New update! Get our latest insights.
              </span>
            </span>
          </div>

          <div className="text-center mt-4 md:mt-6 lg:mt-8 mb-4 md:mb-8 lg:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1B2140] leading-tight">
              Experience Unparalleled Care
            </h1>
            <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#1B2140] font-medium italic">
              <span className="not-italic">Management</span>{" "}
              <span className="font-serif text-[#6B3C8B]">
                With Our Platform.
              </span>
            </h2>
            <p className="max-w-[780px] mx-auto mt-3 md:mt-4 text-sm sm:text-base text-[#5F5D75] px-2">
              Maximize Your Business&apos;s Potential: Unleash Strategic
              Innovations And Growth Strategies To Propel Your Success Beyond
              Limits.
            </p>

            <div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <button className="inline-flex items-center gap-3 bg-[#77429A] hover:bg-[#6A3D8C] text-white px-5 py-3 rounded-full text-sm font-medium shadow transition-colors w-full sm:w-auto justify-center  cursor-pointer">
                Get 15 Day Trial
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                <div className="flex -space-x-2 sm:-space-x-3">
                  <Image
                    src={person1}
                    alt="person 1"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                  <Image
                    src={person2}
                    alt="person 2"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                  <Image
                    src={person3}
                    alt="person 3"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                  <Image
                    src={person4}
                    alt="person 4"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="text-xs sm:text-sm text-[#5F5D75]">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="#FFC700"
                        stroke="#FFC700"
                        className="sm:w-4 sm:h-4"
                      />
                    ))}
                    <Star
                      size={14}
                      fill="#D4D4D4"
                      stroke="#D4D4D4"
                      className="sm:w-4 sm:h-4"
                    />
                  </div>
                  <div className="whitespace-nowrap">
                    From <strong className="text-[#1B2140]">1200+</strong>{" "}
                    Clients
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating full-width mockup (absolute) */}
      <div className="w-full pointer-events-none">
        <div className="absolute left-0 right-0 mx-auto transform -translate-y-1/2 z-40 flex justify-center px-4 sm:px-6 lg:px-8 top-[70%] sm:top-[62%]">
          <div className="w-full max-w-[1200px] relative">
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden">
              <div className="backdrop-blur-md bg-white/70 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 shadow-inner">
                <div className="flex justify-center items-center">
                  <div className="w-full">
                    <Image
                      src={desktop}
                      alt="app mockup"
                      width={1600}
                      height={800}
                      className="w-full h-auto object-contain rounded-md sm:rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom purple band */}
      <div className="w-full bg-[#77429A] pb-20 pt-30 sm:pt-64 md:pt-80 lg:pt-96 xl:pt-[400px]  sm:pb-16 md:pb-20 relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center my-4 sm:my-6 opacity-90">
            <p className="text-xs sm:text-sm md:text-base text-white text-center px-4">
              Partnered With Over 100+ Major Companies
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={partners}
              alt="partners logos"
              width={900}
              height={80}
              className="w-full max-w-[1260px] h-auto object-contain opacity-90 px-2"
            />
          </div>
        </div>

        <div className="hidden sm:block absolute left-0 bottom-0 opacity-40 mix-blend-luminosity ">
          <Image
            src={righthalf}
            alt="left"
            width={400}
            height={400}
            className="w-full h-full object-contain opacity-80"
          />
        </div>
        <div className="hidden sm:block absolute right-0 top-0 opacity-40 mix-blend-luminosity ">
          <Image
            src={lefthalf}
            alt="right"
            width={900}
            height={80}
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
