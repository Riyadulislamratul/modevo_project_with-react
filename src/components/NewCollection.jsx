import React from "react";
import Button from "./Button";
import NewCard from "./NewCard";

import New1 from "../assets/new1.jpg";
import New2 from "../assets/new2.jpg";
import New3 from "../assets/new3.jpg";
import New4 from "../assets/new4.jpg";
import New5 from "../assets/new5.jpg";

const NewCollection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="font-jost text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight text-[#222] mb-4">
              New Arrival Collection
            </h2>

            <p className="font-jost text-sm sm:text-base md:text-lg text-[#222] mb-6 leading-relaxed max-w-lg">
              Step into the season with fresh essentials. From statement heels to everyday accessories — curated to elevate your style in every detail.
            </p>

            <Button TagName="a" href="/shop">
              Shop Now
            </Button>

            {/* Image */}
            <div className="mt-8 md:mt-10">
              <img
                src={New1}
                alt="New Collection"
                className="w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            <NewCard
              image={New2}
              title="Golden Strappy Heels"
              price="$129.99"
            />
            <NewCard
              image={New3}
              title="Floral Embossed Cream Tote"
              price="$249.00"
            />
            <NewCard
              image={New4}
              title="Slim Matte Black Belt"
              price="$79.00"
            />
            <NewCard
              image={New5}
              title="Bold Frame Sunglasses"
              price="$80.00"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewCollection;