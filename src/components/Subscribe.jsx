import React from "react";
import Button from "./Button";

const Subscribe = () => {
  return (
    <section className="py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-10 bg-gray-700 rounded-lg px-6 sm:px-10 lg:px-16 py-8 md:py-10">
          
          {/* Text */}
          <h2 className="font-jost text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-snug text-white max-w-xl">
            Exclusive Member — plus 8% reward and free shipping
          </h2>

          {/* Button */}
          <div className="w-full md:w-auto">
            <Button TagName="a" href="/shop" primary={false}>
              Shop Now
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Subscribe;