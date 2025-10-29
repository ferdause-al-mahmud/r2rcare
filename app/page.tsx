import AboutUs from "@/components/homepage/AboutUs/AboutUs";
import Banner from "@/components/homepage/Banner/Banner";
import Faq from "@/components/homepage/Faq/Faq";
import Functionality from "@/components/homepage/Functionality/Functionality";
import Growth from "@/components/homepage/Growth/Growth";
import Plans from "@/components/homepage/Plans/Plans";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen  font-sans">
      <Banner />
      <Growth />
      <Functionality />
      <Plans />
      <AboutUs />
      <Faq />
    </div>
  );
};

export default page;
