import React from 'react';

export const NewGearModal: React.FC<{ onClose: () => void }> = ({
	onClose,
}) => {
	return (
		<>
			<div
				className="bg-dark-green opacity-75 absolute top-0 h-full w-full z-80"
				onClick={onClose}
			></div>
			<div className=" text-white bg-green rounded-3xl shadow-xl w-5/6 p-4 absolute h-4/5 left-1/12 text z-90 top-20">
				<button
					onClick={onClose}
					className="m-0 bg-white absolute top-4 right-4 text-red text-xl font-bold rounded-full border-2 border-red w-8 h-8 flex items-center justify-center"
				>
					×
				</button>
				<h2 className="text-xl font-thin mb-4">New Gear</h2>
				<form
					className="w-full"
					onSubmit={e => {
						e.preventDefault();
					}}
				>
					<div className="mb-4">
						<label className="block mb-1">Category:</label>
						<select className="w-full border rounded px-2 py-1">
							<option className="text-dark-green">
								Sleep
							</option>
							<option className="text-dark-green">
								Shelter
							</option>
							<option className="text-dark-green">
								Kitchen
							</option>
							<option className="text-dark-green">
								Apparel
							</option>
							<option className="text-dark-green">
								Misc
							</option>
						</select>
					</div>

					<div className="flex w-full gap-2 items-center">
						<label className="mb-1">
							Weight:
							<input
								type="number"
								min={0}
								className="w-full border rounded px-2 py-1"
							/>
						</label>

						<select
							name="wunit"
							id="w-unit"
							className=" mr-6 h-1/2 border rounded"
						>
							<option
								value="g"
								className="text-dark-green"
							>
								g
							</option>
							<option
								value="oz"
								className="text-dark-green"
							>
								oz
							</option>
							<option
								value="lbs"
								className="text-dark-green"
							>
								lbs
							</option>
						</select>

						<label className=" mb-1">
							Rating:
							<input
								type="number"
								className="w-full border rounded px-2 py-1"
								min={0}
								max={5}
							/>
						</label>
					</div>

					<div className="flex w-full gap-2 items-center mb-4">
						<label className="mb-1">
							Width:{' '}
							<input
								min={0}
								type="number"
								className="w-16"
							/>
						</label>

						<label className="mb-1">
							Height:{' '}
							<input
								min={0}
								type="number"
								className="w-16"
							/>
						</label>

						<label className="mb-1">
							Length:
							<input
								min={0}
								type="number"
								className="w-16"
							/>
						</label>

						<select className="w-full border rounded px-1 py-1 h-1/2">
							<option className="text-dark-green">
								cm
							</option>
							<option className="text-dark-green">
								in
							</option>
						</select>
					</div>

					<div className="mb-2 flex items-center">
						<div className="w-24 h-24 border border-dark-green bg-gray-100"></div>
						<button className="border px-1 py-1 text-base mx-4 w-32">
							Upload image
						</button>
					</div>

					<label className="block mb-1">
						Description:
						<textarea
							rows={4}
							className="w-full border bg-dark-green color-white border-gray-400 rounded px-2 py-1 resize-none"
						></textarea>
					</label>

					<div className="flex justify-between">
						<button className="inverted w-2/5">Save</button>
						<button
							className="danger w-2/5"
							onClick={onClose}
						>
							Discard
						</button>
					</div>
				</form>
			</div>
		</>
	);
};
