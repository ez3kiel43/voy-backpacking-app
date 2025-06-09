import { Outlet } from 'react-router';
import Logo from './../assets/logo.svg';

export default function AuthLayout() {
	return (
		<div
			className={`h-full transition-all duration-100 min-h-svh bg-linear-to-br bg-[url('/voy-background.png')]`}
		>
			<header
				className={` flex flex-col justify-end border-b-4 border-red gap-1.5 py-4 w-11/12 mx-auto text-sm
					h-1/3`}
			>
				<img src={Logo} alt="Voy" className="w-1/2 mx-auto" />
				<h2 className="font-sans italic text-xl text-center">
					Explore New Horizons
				</h2>
			</header>
			<Outlet />
			<footer className="absolute bottom-0 text-white text-lg text-center w-full py-1 font-sans">
				<p>Copyright 2025 © Ezra Evans Web Design</p>
			</footer>
		</div>
	);
}
