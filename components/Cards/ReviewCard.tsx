import Image, { StaticImageData } from "next/image";
import React from "react";

interface ReviewItem {
  column?: "left" | "right" | string;
  text: string;
  image: string | StaticImageData;
  name: string;
  title?: string;
}

interface ReviewCardProps {
  item: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <div>
      <div
        className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-200 ${
          item.column === "left" ? "border-t-4 border-b-4 border-[#E6D7FF]" : ""
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
            <p className="font-medium text-[#161C52] text-sm">{item.name}</p>
            <p className="text-xs text-[#5F5D75]">{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
