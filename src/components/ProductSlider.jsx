import Slider from "react-slick";
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


const ProductSlider = () => {
    const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <section>
        <div className='w-screen'>
            <Slider {...settings}>
            <div>
                <ProductSliderImage image={slide1} />
            </div>
            <div>
                <ProductSliderImage image={slide2} />   
            </div>
            <div>
                <ProductSliderImage image={slide3} />   
            </div>
            <div>
                <ProductSliderImage image={slide4} />   
            </div>
            <div>
                <ProductSliderImage image={slide5} />   
            </div>
            <div>
                <ProductSliderImage image={slide6} />   
            </div>
            <div>
                <ProductSliderImage image={slide7} />   
            </div>
            <div>
                <ProductSliderImage image={slide8} />   
            </div>
            <div>
                <ProductSliderImage image={slide9} />   
            </div>
            <div>
                <ProductSliderImage image={slide10} />   
            </div>
            </Slider>
        </div>
    </section>
  )
}
const ProductSliderImage = ({image}) => {
    return (
        <div className='p-5'>
            <img className='w-29.25 h-23 object-cover rounded-[10px]' src={image} alt="product" />
        </div>
    );
}
export default ProductSlider