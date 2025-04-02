import Logo from './../assets/logo.svg';

export const Header: React.FC = () => {
	return (
		<header className="h-24 bg-white w-full absolute">
			<img src={Logo} alt="Voy" className="h-full" />
		</header>
	);
};
