import About from "../components/About";
import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Mini from "../components/Mini";
import ProductSlider from "../components/ProductSlider";
const HomePage = () => {
	return (
		<>
			<Banner />
            <Discount />
            <Mini />
            <About />
            <ProductSlider />
		</>
	);
};

export default HomePage;
