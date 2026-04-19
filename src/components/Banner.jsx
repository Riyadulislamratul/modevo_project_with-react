import React from "react";
import bannerImage from "../assets/banner.jpg";
import Button from "./Button";

const Banner = () => {
  return (
    <section
      className="w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex items-center min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]">
          
          <div className="max-w-xl">
            
            {/* Heading */}
            <h1 className="text-[#222222] text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-jost leading-tight font-medium">
              Fresh Looks for Warmer Days
            </h1>

            {/* Description */}
            <p className="text-[#222222] text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed pt-4 pb-6">
              Unveil bold layers and timeless silhouettes — designed to define
              your Spring/Summer 2027 look.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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