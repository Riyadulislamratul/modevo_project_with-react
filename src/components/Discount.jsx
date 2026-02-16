import React from "react";
import DiscountCard from "./DiscountCard";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";

const Discount = () => {
	return (
		<section className="py-6 bg-white">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
					<DiscountCard
						title={"It’s in the Bag: Limited Deals"}
						discount={"SALE UP TO 25%"}
						img={d1}
					/>
					<DiscountCard
						title={"Make a Statement This Season"}
						discount={"SALE UP TO 25%"}
						img={d2}
					/>
				</div>
			</div>
		</section>
	);
};

export default Discount;
