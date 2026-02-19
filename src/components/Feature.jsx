import React from "react";
// components
import Button from "./Button";
import FeaturedCard from "./FeatureCard";

//  all assets
// slide images

// import left from "../assets/left.png";
// import right from "../assets/right.png";
// card images
import Feature_1 from "../assets/Feature1.jpg";
import Feature_2 from "../assets/Feature2.jpg";
import Feature_3 from "../assets/Feature3.jpg";
import Feature_4 from "../assets/Feature4.jpg";
// exclusive featured component

const Featured = () => {
	return (
		// section start
		<section>
			<div className="container py-12 relative">
				{/* card header */}

				<h2 className="flex items-center justify-center font-medium text-[40px] ">
					Featured
				</h2>

				{/* card design */}
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-8 py-15">
					<FeaturedCard
						title="Relaxed Stitch Shirt"
						img={Feature_1}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#55483B", "#403D72", "#E5C2C3", "#E6DDD6"]}
					/>
					<FeaturedCard
						title="Off-Duty Denim Set"
						img={Feature_2}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
					<FeaturedCard
						title="Off-Duty Denim Set"
						img={Feature_3}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
					<FeaturedCard
						title="Off-Duty Denim Set"
						img={Feature_4}
						text="ADD TO CART"
						showUnderline={true}
						colors={["#3A582C", "#2B2A2F", "#3A582C"]}
					/>
				</div>

				{/* card slide button */}

				{/* <span className="absolute left-[-2.5%] top-[45%] transform -translate-y-1/2">
					<Button>
						<img src={left} alt="Left" />
					</Button>
				</span>

				<span className="absolute right-[-2.5%] top-[45%] transform -translate-y-1/2">
					<Button>
						<img src={right} alt="Right" />
					</Button>
				</span> */}
			</div>
		</section>
		// section end
	);
};

export default Featured;
