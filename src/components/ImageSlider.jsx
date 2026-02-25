import Instra from "../assets/icons/image.png"
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
	};
	return (
		<section>
			<div className="w-screen">
				<Slider {...settings}>
					<div>
						<ProductSlideImage image={slideImage_1} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_2} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_3} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_4} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_5} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_6} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_7} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_8} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_9} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={slideImage_1} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_5} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_8} icon={Instra} />
					</div>
					<div>
						<ProductSlideImage image={SlideImage_9} icon={Instra} />
					</div>
				</Slider>
			</div>
		</section>
	);
};

const ProductSlideImage = ({ image, icon }) => {
	return (
		<div className="relative h-[278px]">
			<img src={image} alt="image" className="size-full object-cover" />
			<div className="w-full h-full bg-black/50 absolute top-0 left-0 cursor-pointer flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-all duration-300">
				<img src={icon} alt="icon" />
			</div>
		</div>
	);
};

export default ImageSlider;
