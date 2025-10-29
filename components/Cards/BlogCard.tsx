import Image, { StaticImageData } from "next/image";
import React from "react";

type BlogCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <div className="group cursor-pointer transition-transform hover:-translate-y-1 duration-200">
      <div className="overflow-hidden rounded-xl mb-4">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-[220px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-semibold text-[#161C52] mb-1">{title}</h3>
      <p className="text-sm text-[#5F5D75] leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
