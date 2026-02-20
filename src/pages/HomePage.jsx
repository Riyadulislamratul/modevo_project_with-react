import About from "../components/About";
import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Featured from "../components/Feature";
import Mini from "../components/Mini";
import NewCollection from "../components/NewCollection";
import ProductSlider from "../components/ProductSlider";
import Subscribe from "../components/Subscribe";
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
		</>
	);
};

export default HomePage;
