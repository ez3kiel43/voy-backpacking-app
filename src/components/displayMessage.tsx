import CloseIcon from './../assets/close-x.svg';

type MessageTypes = {
	message: string;
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
			className={`absolute rounded-4xl border-4 border-dark-green top-48 left-4 w-86 h-fit z-100 bg-white text-red text-lg text-left font-sans mx-2 p-6 ${
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
			<ul className="w-4/5">
				{message.split(';').map((m, i) => {
					return <li key={`error_${i}`}>{m}</li>;
				})}
			</ul>
		</div>
	);
};
