import React from "react";
import todayDeal from "../assets/todayDeal1.jpg";
import todayDeal2 from "../assets/todayDeal2.jpg";
import todayDeal3 from "../assets/todayDeal3.jpg";
import DiscountCard from "./DiscountCard";

const TodayDeal = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <p className="font-jost text-sm sm:text-base md:text-lg text-gray-500 mb-2">
            Today’s Deals
          </p>

          <h2 className="font-jost text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-[#222] mb-4">
            Deal of the Day
          </h2>

          <p className="font-jost text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
            Limited-time styles at unbeatable prices. Shop today’s hottest picks before they’re gone!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* LEFT BIG IMAGE */}
          <div
            className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-full rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${todayDeal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex flex-col gap-6 md:gap-8">
            <DiscountCard
              title="It’s in the Bag: Limited Deals"
              discount="SALE UP TO 25%"
              img={todayDeal2}
            />

            <DiscountCard
              title="Make a Statement This Season"
              discount="SALE UP TO 25%"
              img={todayDeal3}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TodayDeal;