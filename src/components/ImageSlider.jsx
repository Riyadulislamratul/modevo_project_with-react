import React from "react";
import Instra from "../assets/icons/image.png";

import slideImage_1 from "../assets/p1.jpg";
import slideImage_2 from "../assets/p2.jpg";
import slideImage_3 from "../assets/p3.jpg";
import SlideImage_4 from "../assets/p4.jpg";
import SlideImage_5 from "../assets/p5.jpg";
import SlideImage_6 from "../assets/p6.jpg";
import SlideImage_7 from "../assets/p7.jpg";
import SlideImage_8 from "../assets/p8.jpg";
import SlideImage_9 from "../assets/p9.png";

import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",

    // 🔥 Responsive Breakpoints
    responsive: [
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="w-full">
        <Slider {...settings}>
          {[ 
            slideImage_1, slideImage_2, slideImage_3,
            SlideImage_4, SlideImage_5, SlideImage_6,
            SlideImage_7, SlideImage_8, SlideImage_9,
            slideImage_1, SlideImage_5, SlideImage_8, SlideImage_9
          ].map((img, index) => (
            <div key={index} className="px-2">
              <ProductSlideImage image={img} icon={Instra} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const ProductSlideImage = ({ image, icon }) => {
  return (
    <div className="group relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden rounded-lg">
      
      {/* Image */}
      <img
        src={image}
        alt="product"
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer">
        <img src={icon} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>

    </div>
  );
};

export default ImageSlider;