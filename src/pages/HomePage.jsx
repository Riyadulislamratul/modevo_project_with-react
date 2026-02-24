import About from "../components/About";
import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Discount from "../components/Discount";
import Featured from "../components/Feature";
import FreshLook from "../components/FreshLook";
import Mini from "../components/Mini";
import NewCollection from "../components/NewCollection";
import ProductSlider from "../components/ProductSlider";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import TodayDeal from "../components/TodayDeal";
const HomePage = () => {
	return (
		<>
			<Banner />
            <Discount />
            <Mini />
            <About />
            <ProductSlider />
			<Featured />
			<NewCollection />
			<TodayDeal />
			<Subscribe />
			<FreshLook />
			<Blogs />
			<Testimonial />
		</>
	);
};

export default HomePage;
