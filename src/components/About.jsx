import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  const bgImage = {
    backgroundImage: `url(${aboutImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section className="bg-gray-f3 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h3 className="text-gray-500 font-jost pb-2 text-base md:text-lg">
              About Us
            </h3>

            <h1 className="font-jost text-2xl md:text-3xl lg:text-[40px] pb-4 leading-tight">
              Designed to Empower, Crafted to Last
            </h1>

            <p className="font-jost text-base md:text-lg text-gray-600 pb-6 max-w-xl mx-auto lg:mx-0">
              At Modevo, we blend timeless design with modern flair — creating
              pieces that inspire confidence, celebrate individuality, and
              redefine everyday elegance. From detail to silhouette, every piece
              tells a story of quality and character.
            </p>

            <button className="text-black py-2 md:py-3 px-6 md:px-8 border border-black uppercase hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div
            style={bgImage}
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-md"
          ></div>

        </div>

      </div>
    </section>
  );
};

export default About;