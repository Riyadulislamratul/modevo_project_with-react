import React from "react";
import PortfolioCard from "./PortfolioCard";

const TestimonialSection = () => {
	return (
    <section className="mt-25 mb-50">
			<div className="container">
				<div className="text-center mb-12">
					<p className="mt-3 text-gray-500 max-w-2xl mx-auto">Portfolio</p>
					<h2 className="text-3xl font-semibold text-gray-900">
						What our customers say
					</h2>
				</div>
				<div className="grid grid-cols-4 gap-6">
					<PortfolioCard />
					<PortfolioCard />
					<PortfolioCard />
					<PortfolioCard />
				</div>
        </div>
        </section>
	);
};

export default TestimonialSection;
