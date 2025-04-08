type overlayTypes = {
	show: boolean;
};

export const ModalOverlay: React.FC<overlayTypes> = ({ show }) => {
	return (
		<div
			className={`fixed bg-black  w-screen h-screen z-90 top-0 ${
				show ? 'opacity-60' : 'hidden'
			}`}
		></div>
	);
};
