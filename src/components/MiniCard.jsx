const MiniCard = ({ image, title, des }) => {
	return (
		<div className="px-10 xl:px-15.25 py-4 xl:py-8 flex items-center justify-center flex-col border border-slate-200">
			<div className="w-16 mb-7.25">
				<img className="w-full" src={image} alt="icon" />
			</div>
			<h4 className="text-[20px] text-black-222 font-medium">{title}</h4>
			<p className="text-sm text-black-222 font-normal">{des}</p>
		</div>
	)
}

export default MiniCard