import DiscountCard from "./DiscountCard";
import truck from "../assets/truck.png";
import pay from "../assets/pay.png";
import gift from "../assets/gift.png";
import support from "../assets/support.png";
import MiniCard from "./MiniCard";

const Mini = () => {
	return (
		<section className="py-12 bg-white">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
					<MiniCard
						image={truck}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
					<MiniCard
						image={pay}
						title={"Secured Payment"}
						des={"Payment Cards Accepted"}
					/>
					<MiniCard
						image={gift}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
					<MiniCard
						image={support}
						title={"Free Shipping"}
						des={"For all Orders Over $100"}
					/>
				</div>
			</div>
		</section>
	);
};

export default Mini;
