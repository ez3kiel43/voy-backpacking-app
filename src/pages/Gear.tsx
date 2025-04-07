export const Gear: React.FC = () => {
	return (
		<>
			<label htmlFor="category" className="mx-4">
				Category:
			</label>
			<select
				name="category"
				id="category"
				className="bg-white border-dark-green text-dark-green border-2 rounded-sm p-0.5"
			>
				<option value="0">Shelter</option>
				<option value="1">Sleep</option>
				<option value="2">Kitchen</option>
				<option value="3">Apparel</option>
				<option value="4">Miscellaneous</option>
			</select>
			<section className="w-full h-4/5 bg-dark-green mt-4 flex flex-col gap-4 overflow-y-auto px-2">
				<p className="text-white opacity-65 text-2xl">
					No Gear Yet...
				</p>
			</section>
			<button className="inverted block">Add New Gear</button>
		</>
	);
};
