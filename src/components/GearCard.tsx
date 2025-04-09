import Icon from './../assets/icon.svg';

export const GearCard: React.FC = () => {
	return (
		<div className="w-full h-24 bg-dark-green text-white flex justify-around">
			<img src={Icon} alt="placeholder" className="w-1/4" />
			<article className="w-1/3 text-base font-thin flex flex-col gap-0">
				<p>Gear Name</p>
				<p>Stars</p>
				<p className="text-sm">Weight</p>
				<p className="text-sm">Height</p>
			</article>
			<button>Info</button>
		</div>
	);
};
