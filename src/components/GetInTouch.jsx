import React from "react";
import Button from "../components/Button";

const GetInTouch = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 mt-12 md:mt-16 lg:mt-20 bg-[#f2f2f2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <h2 className="font-jost font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight text-gray-900 mb-4">
            Stay Connected with Vereva
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Be the first to know about new arrivals, exclusive offers, and style updates — straight to your inbox.
          </p>
        </div>

        {/* Form */}
        <form className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-0 border border-gray-300 rounded-md overflow-hidden bg-white">
          
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-3 outline-none text-sm sm:text-base placeholder:text-gray-400"
          />

          <div className="w-full sm:w-auto ">
            <Button className="w-full sm:w-auto">
              Send
            </Button>
          </div>

        </form>

      </div>
    </section>
  );
};

export default GetInTouch;