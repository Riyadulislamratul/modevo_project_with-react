import React from "react";
import PortfolioCard from "./PortfolioCard";

const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="text-sm sm:text-base text-gray-500 mb-2">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            What our customers say
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 space-y-30 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;