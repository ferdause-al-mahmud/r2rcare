import Banner from "@/components/homepage/Banner/Banner";
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
    </div>
  );
};

export default page;
