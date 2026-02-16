import React from "react";
import bannerImage from "../assets/banner.jpg";
import Button from "./Button";

const Banner = () => {
  const bgImage = {
    background: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section>
      <div className="container" style={bgImage}>
        <div style={bgImage} className="py-20 lg:pt-30 xl:pt-55 px-4 lg:px-27.25 lg:pb-60.5">
          <div className="max-w-156">
            <h1 className="text-[#222222] text-3xl md:text-4xl lg:text-[64px] font-jost tracking-[0.46%] leading-[1.3] font-medium">
              Fresh Looks for Warmer Days
            </h1>
            <p className="text-[#222222] text-[20px] font-jost tracking-[0.46%] leading-normal max-w-124 pt-5 pb-10">
              Unveil bold layers and timeless silhouettes — designed to define
              your Spring/Summer 2027 look.
            </p>
            <div className="flex gap-5 ">
              <Button Tagname="a">Shop Now</Button>
              <Button>Explore More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
