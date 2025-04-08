import CloseIcon from './../assets/close-x.svg';

type MessageTypes = {
	message: string | Array<string>;
	show: boolean;
	closeFn: () => void;
};

export const MessageModal: React.FC<MessageTypes> = ({
	message,
	show,
	closeFn,
}) => {
	return (
		<div
			className={`absolute rounded-4xl border-4 border-dark-green top-48 left-4 w-11/12 h-1/3 z-100 bg-white text-red text-lg text-center font-sans ${
				show ? '' : 'hidden'
			}`}
		>
			<button
				className="relative h-1/5 w-full bg-white max-w-400 my-0"
				onClick={closeFn}
			>
				<img
					src={CloseIcon}
					alt="Close Modal"
					className="absolute right-2 top-2"
				/>
			</button>
			<p className="w-4/5">{message}</p>
		</div>
	);
};
