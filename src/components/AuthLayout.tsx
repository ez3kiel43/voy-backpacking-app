import { Outlet, useLocation } from 'react-router';
import Logo from './../assets/logo.svg';
import LogoLight from './../assets/logo_light.svg';
import { useState, useEffect } from 'react';

export default function AuthLayout() {
	const [authPg, setAuthPg] = useState(false);

	let location = useLocation();

	useEffect(() => {
		if (location.pathname == '/') {
			setAuthPg(false);
		} else {
			setAuthPg(true);
		}
	}, [location]);

	return (
		<div
			className={`h-full transition-all duration-100 min-h-svh bg-linear-to-br ${
				authPg
					? 'from-[#2B4141] to-[#4c7474]'
					: 'from-[#eceff1] to-[#2b4141]'
			}`}
		>
			<header
				className={` flex flex-col justify-end border-b-4 border-red gap-1.5 py-4 w-11/12 mx-auto text-sm ${
					authPg ? 'h-1/3 text-white' : 'h-96 text-dark-green'
				}`}
			>
				<img
					src={authPg ? LogoLight : Logo}
					alt="Voy"
					className="w-1/2 mx-auto"
				/>
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
