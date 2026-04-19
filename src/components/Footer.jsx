import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<footer className="pt-12 md:pt-16">
			<div className="container mx-auto px-4">
				
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[330px_1fr] gap-10 lg:gap-16 pb-12">
					
					{/* Left Column */}
					<div className="text-center md:text-left">
						<Link className="font-jost font-bold text-2xl md:text-[32px]" to={"/"}>
							Modevo.
						</Link>

						<p className="text-slate-500 pt-4 pb-6 max-w-md mx-auto md:mx-0">
							Where modern fashion meets timeless style. We’re committed to
							delivering quality, comfort, and confidence — one piece at a time.
						</p>

						{/* Social Icons */}
						<div className="flex gap-3 justify-center md:justify-start">
							{[1, 2, 3, 4].map((_, i) => (
								<Link
									key={i}
									className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:bg-gray-800 transition"
									to="#"
								>
									{/* Replace with different icons if needed */}
									<svg width={16} height={16} viewBox="0 0 16 16" fill="none">
										<circle cx="8" cy="8" r="7" fill="white" />
									</svg>
								</Link>
							))}
						</div>
					</div>

					{/* Right Column */}
					<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
						
						<FooterItem
							title="Shop Highlights"
							menuItems={["Women", "Men", "Accessories", "Bag", "Shoes", "Kids"]}
						/>

						<FooterItem
							title="Quick Links"
							menuItems={["Home", "Shop", "Product", "Blog", "New Arrivals"]}
						/>

						<FooterItem
							title="Customer Services"
							menuItems={["Support", "Returns", "Shipping", "FAQ", "Contact"]}
						/>

						<FooterItem
							title="Contact Info"
							menuItems={[
								"Email: vereva@domain.com",
								"Address: Lorem ipsum dolor sit amet",
								"Phone: +01 824 75849",
							]}
							contactInfo={true}
						/>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-300 pt-6 pb-8">
					<p className="text-center text-slate-500 text-sm">
						© {new Date().getFullYear()} - Md Riyadul Islam Ratul
					</p>
				</div>

			</div>
		</footer>
	);
};

const FooterItem = ({ title, menuItems = [], contactInfo = false }) => {
	return (
		<div className="text-center md:text-left">
			<h3 className="text-base md:text-lg text-black pb-4 font-medium font-jost">
				{title}
			</h3>

			<ul className="space-y-2">
				{menuItems.map((item, i) => (
					<li key={i}>
						{contactInfo ? (
							<span className="text-slate-600 text-sm">{item}</span>
						) : (
							<Link
								className="text-slate-600 text-sm hover:text-black transition"
								to="/"
							>
								{item}
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Footer;