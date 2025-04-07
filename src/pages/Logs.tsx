export const Logs: React.FC = () => {
	return (
		<>
			<section className="w-full h-4/5 bg-dark-green mt-4 flex flex-col gap-4 overflow-y-auto px-2">
				<p className="text-white opacity-65 text-2xl">
					No Logs Yet...
				</p>
			</section>
			<button className="inverted block">Add New Log</button>
		</>
	);
};
