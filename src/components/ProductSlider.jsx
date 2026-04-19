import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import slide8 from "../assets/slide8.jpg";
import slide9 from "../assets/slide9.jpg";
import slide10 from "../assets/slide10.jpg";

const images = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

const ProductSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,

    // ✅ Responsive breakpoints
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
    <section className="mt-10 md:mt-14">
      <div className="w-full overflow-hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <ProductSliderImage image={img} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const ProductSliderImage = ({ image }) => {
  return (
    <div className="px-2 sm:px-3 md:px-4">
      <img
        className="w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] object-cover rounded-lg"
        src={image}
        alt="product"
      />
    </div>
  );
};

export default ProductSlider;