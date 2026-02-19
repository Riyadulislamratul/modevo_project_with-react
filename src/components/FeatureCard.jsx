import React from "react";
const FeaturedCard = ({
  title,
  img,
  text,
  showUnderline,
  colors = [],
}) => {
  // console.log(colors);
  return (
    <div className="flex items-center justify-between flex-col">
      <div className="w-full h-[420px] pb-5 relative group">
        <img className="w-full h-full" src={img} alt="" />
        <div className="absolute bottom-6 group-hover:bottom-9 left-1/2 -translate-x-1/2  z-10 group-hover:visible invisible transition-all flex gap-5 justify-center items-center">
          <div className="size-10.5 rounded-full bg-white cursor-pointer flex justify-center items-center">
            <svg
              width={21}
              height={21}
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4141 19.4141L14.8239 14.8239M17.2266 9.02344C17.2266 4.49297 13.5539 0.820312 9.02344 0.820312C4.49297 0.820312 0.820312 4.49297 0.820312 9.02344C0.820312 13.5539 4.49297 17.2266 9.02344 17.2266C13.5539 17.2266 17.2266 13.5539 17.2266 9.02344Z"
                stroke="#222222"
                strokeWidth="1.64062"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="size-10.5 rounded-full bg-white cursor-pointer flex justify-center items-center">
            <svg
              width={22}
              height={20}
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6641 18.3203C10.6641 18.3203 20.5078 13.9453 20.5078 7.07006C20.5078 3.00781 18.2818 0.820312 15.536 0.820312C14.2173 0.820312 12.9527 1.36353 12.0203 2.33046L11.4513 2.92049C11.0213 3.36654 10.3068 3.36654 9.87678 2.92049L9.30781 2.33046C8.37538 1.36353 7.11078 0.820312 5.79216 0.820312C3.00781 0.820312 0.820312 3.00781 0.820312 7.07006C0.820312 13.9453 10.6641 18.3203 10.6641 18.3203Z"
                stroke="#222222"
                strokeWidth="1.64062"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="size-10.5 rounded-full bg-white cursor-pointer flex justify-center items-center">
            <svg
              width={21}
              height={21}
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4141 19.4141L14.8239 14.8239M17.2266 9.02344C17.2266 4.49297 13.5539 0.820312 9.02344 0.820312C4.49297 0.820312 0.820312 4.49297 0.820312 9.02344C0.820312 13.5539 4.49297 17.2266 9.02344 17.2266C13.5539 17.2266 17.2266 13.5539 17.2266 9.02344Z"
                stroke="#222222"
                strokeWidth="1.64062"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <p className="pb-2 font-medium text-[16px] leading-5.25 ">{title}</p>
        <div className="flex justify-center gap-1.5">
          {colors?.map((color, index) => {
            console.log(color);
            return (
              <button
                key={index}
                className={`size-4 rounded-full cursor-pointer`}
                style={{ background: color }}
              ></button>
            );
          })}
        </div>
        <h1
          className={`pt-4 font-semibold text-[14px] ${
            showUnderline ? "underline underline-offset-4" : ""
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default FeaturedCard;
