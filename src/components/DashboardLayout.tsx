import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export default function DashboardLayout() {
	return (
		<>
			<Header />
			<main className="dashboard-main w-full min-h-svh bg-green py-28 text-white text-lg overflow-hidden relative">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
