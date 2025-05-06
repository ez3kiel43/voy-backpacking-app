import { GearCard } from '../components/GearCard';
import CampingGear from '../assets/data/gear.json';
import { useState, useEffect } from 'react';
import { NewGearModal } from '../components/GearForm';

type GearItem = {
	name: string;
	stars: number;
	weight: number;
	size: string; // WxHxL format
};

type GearCategory = {
	shelter: GearItem[];
	sleep: GearItem[];
	kitchen: GearItem[];
	apparel: GearItem[];
	misc: GearItem[];
};

type CampingGearData = {
	camping_gear: GearCategory;
};

const gearData = CampingGear as CampingGearData;

const categories = ['shelter', 'sleep', 'kitchen', 'apparel', 'misc'] as const;
type Category = (typeof categories)[number];

export const Gear: React.FC = () => {
	const [category, setCategory] = useState<Category>('shelter');
	const [gearList, setGearList] = useState(gearData.camping_gear.shelter);
	const [showFormModal, setShowFormModal] = useState(false);

	useEffect(() => {
		setGearList(gearData.camping_gear[category]);
	}, [category]);

	return (
		<>
			{showFormModal ? (
				<NewGearModal
					onClose={() => {
						setShowFormModal(false);
					}}
				/>
			) : (
				''
			)}

			<label htmlFor="category" className="mx-4">
				Category:
			</label>
			<select
				name="category"
				id="category"
				className="bg-white border-dark-green text-dark-green border-2 rounded-sm p-0.5"
				onChange={e => {
					setCategory(e.target.value as Category);
				}}
			>
				<option value="shelter">Shelter</option>
				<option value="sleep">Sleep</option>
				<option value="kitchen">Kitchen</option>
				<option value="apparel">Apparel</option>
				<option value="misc">Miscellaneous</option>
			</select>
			<section className="w-full h-4/5 bg-white mt-4 flex flex-col gap-2 overflow-y-auto ">
				{gearList.map(g => {
					return (
						<GearCard
							key={`${g.name}_${g.stars}`}
							name={g.name}
							stars={g.stars}
							weight={g.weight}
							size={g.size}
						/>
					);
				})}
			</section>

			<button
				className="inverted block"
				onClick={() => {
					setShowFormModal(true);
				}}
			>
				Add New Gear
			</button>
		</>
	);
};
