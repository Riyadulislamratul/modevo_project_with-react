
import Button from "../components/Button";

const GetInTouch = () => {
	return (
		<section className=" py-35 mt-20 bg-[#f2f2f2]">
			<div className="container">
				<div>
                    <h2 className="text-[48px] leading-17.5 font-jost font-medium mb-5 text-gray-900 text-center">
                        Stay Connected with Vereva
                    </h2>
                    <p className="text-gray-500 text-[18px] font-jost leading-7.25 text-center mb-11.25">
                       Be the first to know about new arrivals, exclusive offers, and style updates — straight to your inbox.
                    </p>
                </div>
				<div>
					<form
						action=""
						className="w-125.75 mx-auto border border-black-222 px-1.5 py-1.25 grid grid-cols-[1fr_100px]"
					>
						<input
							type="text"
							className="border-none outline-none bg-none p-3 placeholder:text-[#a4a4a4]"
							placeholder="Enter Your Email Address"
						/>
						<Button>Send</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default GetInTouch;
