import React from "react";
import UserIcon from "../assets/user.svg";

const BlogCard = ({ image, title, date, description, user }) => {
  return (
    <div className="bg-[#F3F3F3] overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-88.5 object-cover" />
      <div className="absolute top-4 left-4 bg-white text-center px-3 py-2 text-xs font-semibold">
        <p className="font-jost relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after: w-full after:h-0.5 after:bg-black">{date.split(' ')[1]}</p>
        <p className="uppercase">{date.split(' ')[0]}</p>
      </div>
      <div className="p-6.5">
        <p className="text-red-500 font-jost text-[12px] leading-3.5 mb-3">NEWS</p>
        <h3 className="text-[24px] leading-5 font-jost text-black font-medium mb-2">
          {title}
        </h3>
        <p>
          <span>
            <img
              src={UserIcon}
              alt="User Icon"
              className="w-5 h-5 inline mr-1 font-jost text-[12px] leading-6.75 text-black"
            />
          </span>
          By: {user}
        </p>
        <p className="mt-4 font-jost text-[16px] leading-6.75 text-gray-75">
          {description}
        </p>
        <h4 className="text-[14px] font-jost text-black mt-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black mb-1 leading-5.75">
          READ MORE
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
