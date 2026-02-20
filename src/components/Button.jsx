const Button = ({ TagName = "button", children, primary = true, ...props }) => {
	return primary ?
			<TagName
				{...props}
				className="text-white py-2 lg:py-[14.5px] px-5 lg:px-8.5 bg-black-222 uppercase cursor-pointer inline-block"
			>
				{children}
			</TagName>
		:	<TagName
				{...props}
				className="text-black py-2 lg:py-[14.5px] px-5 lg:px-8.5 bg-white uppercase cursor-pointer inline-block "
			>
				{children}
			</TagName>;
};

export default Button;
