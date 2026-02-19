import About from "../components/About";
import Banner from "../components/Banner";
import Discount from "../components/Discount";
import Featured from "../components/Feature";
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
			<Featured />
		</>
	);
};

export default HomePage;
