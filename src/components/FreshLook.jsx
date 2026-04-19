import React from "react";
import FreshLookImage from "../assets/freshLook.jpg";
import Button from "./Button";

const FreshLook = () => {
  return (
    <section
      className="my-12 md:my-16 lg:my-20 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${FreshLookImage})` }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex items-center justify-center text-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          
          <div className="max-w-2xl">
            
            {/* Heading */}
            <h2 className="font-jost text-2xl sm:text-3xl md:text-4xl lg:text-[64px] leading-tight text-white mb-4">
              Fresh Looks for Sunny Days
            </h2>

            {/* Description */}
            <p className="text-white font-jost text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed mb-6 md:mb-8">
              From breezy suits to playful sets — this season is all about feeling good and looking better. Step into Spring/Summer with pieces that radiate confidence, color, and comfort.
            </p>

            {/* Button */}
            <Button TagName="a" href="/shop" primary={false}>
              Shop Now
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FreshLook;