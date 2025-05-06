import Icon from './../assets/icon.svg';
import Info from './../assets/info.png';

type gearCardInfo = {
	name: string;
	stars: number;
	weight: number;
	size: string;
};

export const GearCard = ({ name, stars, weight, size }: gearCardInfo) => {
	return (
		<div className="w-full min-h-1/3 bg-dark-green text-white flex justify-around">
			<img
				src={Icon}
				alt="placeholder"
				className="w-1/4 bg-gray-700 h-5/6"
			/>
			<article className="w-1/3 text-lg font-thin flex flex-col gap-2">
				<p>{name}</p>
				<img src={`/${stars}stars.png`} alt={`${stars} stars`} />
				<p className="text-sm">Weight: {weight}lbs</p>
				<p className="text-sm">Size: {size}cm</p>
			</article>

			<img src={Info} alt="info" className="h-1/2" />
		</div>
	);
};
