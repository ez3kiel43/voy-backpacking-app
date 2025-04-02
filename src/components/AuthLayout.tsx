import { Outlet } from 'react-router';

export default function AuthLayout() {
	return (
		<>
			<header>Please Login or Register</header>
			<main className="w-full h-screen bg-green py-24">
				<Outlet />
			</main>
			<footer>copyright © 2025 Azure Bonsai Digital Design</footer>
		</>
	);
}
